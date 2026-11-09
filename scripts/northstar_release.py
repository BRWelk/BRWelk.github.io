"""Register BNT releases, prepare staging, and validate reviewed artifacts. Never deploy."""

import argparse
import base64
from datetime import datetime, timezone
import json
import hashlib
import os
from pathlib import Path
import re
import subprocess
import sys
import uuid

from release_guard import (payload_digest, read_json, source_fingerprint, stop_ids,
                           verify_release)

ROOT = Path(__file__).resolve().parents[1]
POLICY = ROOT / "deployment/northstar-policy.json"


def gh_json(arguments, payload=None, allow_missing=False):
    result = subprocess.run(["gh", *arguments], input=json.dumps(payload) if payload is not None else None,
                            capture_output=True, text=True, encoding="utf-8")
    if result.returncode:
        if allow_missing and "HTTP 404" in result.stderr:
            return None
        raise RuntimeError(result.stderr.strip() or "GitHub request failed.")
    return json.loads(result.stdout) if result.stdout.strip() else None


def validate_policy(policy):
    if not re.fullmatch(r"[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+", policy["repository"]):
        raise ValueError("Invalid repository.")
    if not re.fullmatch(r"codex/[a-z0-9-]+", policy["sourceBranch"]):
        raise ValueError("Use the dedicated codex source-record branch.")
    if policy["sourceRecordPath"] != "northstar-source.json":
        raise ValueError("Use only the designated source-record file.")


def fetch_current(policy):
    validate_policy(policy)
    item = gh_json(["api", f"repos/{policy['repository']}/contents/{policy['sourceRecordPath']}?ref={policy['sourceBranch']}"])
    return json.loads(base64.b64decode(item["content"]))


def observe_bnt(policy, identity):
    """Read hashes only. Do not import application modules or open its databases."""
    code = r'''
from pathlib import Path, PurePosixPath
from datetime import datetime, timezone
import hashlib, json
root = Path(SOURCE_ROOT).resolve()
manifest = json.loads((root/'release-manifest.json').read_text(encoding='utf-8-sig'))
records = []
for item in manifest['files']:
    relative = PurePosixPath(item['path'].replace('\\', '/'))
    if relative.is_absolute() or '..' in relative.parts:
        raise ValueError('Invalid installed manifest path')
    path = (root / str(relative)).resolve()
    if not path.is_relative_to(root) or not path.is_file():
        raise ValueError('Missing or external installed release file')
    digest = hashlib.sha256(path.read_bytes()).hexdigest()
    if digest != item['sha256'].lower():
        raise ValueError('Installed code differs from its release manifest: '+item['path'])
    records.append({'path':item['path'], 'sha256':digest})
source = {'release':manifest['release'], 'files':records}
fingerprint = hashlib.sha256(json.dumps(source, sort_keys=True).encode()).hexdigest()
print(json.dumps({'schemaVersion':1, 'sourceFingerprint':fingerprint,
                 'sourceVersion':'northstar-'+fingerprint[:12], 'sourceRelease':manifest['release'],
                 'observedAt':datetime.now(timezone.utc).isoformat(), 'fileCount':len(records)}))
'''.replace("SOURCE_ROOT", repr(policy["sourceRoot"]))
    python_path = policy["remotePython"].replace("'", "''")
    powershell = "[Console]::In.ReadToEnd() | & '" + python_path + "' -"
    command = "powershell -NoProfile -NonInteractive -EncodedCommand " + base64.b64encode(powershell.encode("utf-16le")).decode()
    args = ["ssh", "-o", "BatchMode=yes", "-o", "StrictHostKeyChecking=yes", "-o", "ConnectTimeout=8"]
    if identity:
        args.extend(["-i", str(Path(identity).expanduser())])
    args.extend([policy["sshTarget"], command])
    result = subprocess.run(args, input=code, capture_output=True, text=True, encoding="utf-8", timeout=45)
    if result.returncode:
        raise RuntimeError("BNT source observation failed: " + result.stderr[-1800:])
    record = json.loads(result.stdout.lstrip("\ufeff"))
    source_fingerprint(record)
    return record


def register(policy, record):
    validate_policy(policy)
    repo, branch = policy["repository"], policy["sourceBranch"]
    ref = gh_json(["api", f"repos/{repo}/git/ref/heads/{branch}"], allow_missing=True)
    if ref is None:
        main = gh_json(["api", f"repos/{repo}/git/ref/heads/main"])
        gh_json(["api", "--method", "POST", f"repos/{repo}/git/refs", "--input", "-"],
                {"ref": "refs/heads/" + branch, "sha": main["object"]["sha"]})
    endpoint = f"repos/{repo}/contents/{policy['sourceRecordPath']}"
    old = gh_json(["api", endpoint + "?ref=" + branch], allow_missing=True)
    payload = {"branch": branch, "message": "Register " + record["sourceVersion"],
               "content": base64.b64encode((json.dumps(record, indent=2) + "\n").encode()).decode()}
    if old:
        payload["sha"] = old["sha"]  # Fail on concurrent replacement; never overwrite blindly.
    gh_json(["api", "--method", "PUT", endpoint, "--input", "-"], payload)
    return record


def save_json(path, value):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2) + "\n", encoding="utf-8")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    sub = parser.add_subparsers(dest="command", required=True)
    for name in ("register", "stage"):
        p = sub.add_parser(name)
        p.add_argument("--identity", default=os.environ.get("NORTHSTAR_SSH_IDENTITY"))
        if name == "stage":
            p.add_argument("--output", type=Path)
    p = sub.add_parser("fetch-current")
    p.add_argument("--output", type=Path, required=True)
    p = sub.add_parser("check")
    p.add_argument("directory", type=Path)
    p.add_argument("--source-record", type=Path, required=True)
    p.add_argument("--require-review", action="store_true")
    p = sub.add_parser("record-review")
    p.add_argument("directory", type=Path)
    p.add_argument("--checks", required=True, help="Comma-separated checks actually completed in the browser.")
    p.add_argument("--evidence", required=True, help="Path to the review evidence/notes; no approval assertion.")
    p = sub.add_parser("summary")
    p.add_argument("directory", type=Path)
    args = parser.parse_args()
    policy = read_json(POLICY)
    validate_policy(policy)
    if args.command in {"register", "stage"}:
        record = register(policy, observe_bnt(policy, args.identity))
        save_json(ROOT / ".qa/northstar-source.json", record)
        print(json.dumps({"registered": record["sourceVersion"], "observedAt": record["observedAt"],
                          "portfolio_published": False}))
        if args.command == "register":
            return
        manifest = read_json(ROOT / "demos/northstar/capture-manifest.json")
        if source_fingerprint(manifest) != record["sourceFingerprint"]:
            raise ValueError("BNT has changed. Refresh/review every tour area against " + record["sourceVersion"] +
                             " before staging; capture timestamps must not be retagged.")
        output = args.output or ROOT / ".qa" / ("northstar-stage-" + datetime.now().strftime("%Y%m%d-%H%M%S") + "-" + uuid.uuid4().hex[:6])
        subprocess.run([sys.executable, str(ROOT / "scripts/build_pages.py"), "--output", str(output)], check=True, cwd=ROOT)
        for script in ("check_site.py", "check_northstar.py"):
            subprocess.run([sys.executable, str(ROOT / "scripts" / script), str(output)], check=True, cwd=ROOT)
        verify_release(output, record, policy)
        print(json.dumps({"staging": str(Path(output).resolve()), "status": "awaiting browser review and Brian's approval",
                          "contentDigest": payload_digest(output)}))
    elif args.command == "fetch-current":
        record = fetch_current(policy)
        save_json(args.output, record)
        print(json.dumps({"current_source": record["sourceVersion"], "observedAt": record["observedAt"]}))
    elif args.command == "check":
        review_path = ROOT / "deployment/northstar-review.json"
        release = verify_release(args.directory, read_json(args.source_record), policy,
                                 read_json(review_path) if review_path.exists() else None, args.require_review,
                                 review_root=ROOT)
        if os.environ.get("GITHUB_SHA") and release["portfolioCommit"] != os.environ["GITHUB_SHA"]:
            raise ValueError("Artifact belongs to a different workflow commit.")
        print(json.dumps({"result": "passed", **release}))
    elif args.command == "record-review":
        checks = args.checks.split(",")
        if len(checks) != len(set(checks)) or set(checks) != set(policy["requiredReviewChecks"]):
            raise ValueError("Complete each required browser check before recording review.")
        evidence = Path(args.evidence).resolve()
        if not evidence.is_file() or not evidence.is_relative_to(ROOT / "docs") or not evidence.read_bytes().strip():
            raise ValueError("Keep substantive browser-review notes under docs/ so CI can verify the committed evidence.")
        record = fetch_current(policy)
        release = verify_release(args.directory, record, policy)
        review = {"schemaVersion": 1, "sourceFingerprint": release["northstarSourceFingerprint"],
                  "contentDigest": release["contentDigest"], "reviewedAt": datetime.now(timezone.utc).isoformat(),
                  "stopIds": stop_ids(args.directory), "passedChecks": checks,
                  "evidence": str(evidence.relative_to(ROOT)).replace("\\", "/"),
                  "evidenceSha256": hashlib.sha256(evidence.read_bytes().replace(b"\r\n", b"\n")).hexdigest(),
                  "reviewer": "Codex browser QA; Brian's production approval is still required"}
        save_json(ROOT / "deployment/northstar-review.json", review)
        print(json.dumps({"browser_review": "recorded", "portfolio_published": False,
                          "contentDigest": release["contentDigest"]}))
    elif args.command == "summary":
        release = read_json(args.directory / "release.json")
        summary = ("## Portfolio staging is ready for review\n\n"
                   "Publication requires Brian's approval in the github-pages environment.\n\n"
                   f"- Portfolio commit: `{release['portfolioCommit']}`\n"
                   f"- Northstar source: `{release['northstarSourceFingerprint']}`\n"
                   f"- Reviewed content digest: `{release['contentDigest']}`\n"
                   f"- [Download this staging preview]({os.environ.get('PREVIEW_URL', '')})\n\n"
                   "Extract the preview, serve it locally, and review it before approving production. "
                   "The production job rechecks the latest source and deploys this same artifact.\n")
        if os.environ.get("GITHUB_STEP_SUMMARY"):
            with open(os.environ["GITHUB_STEP_SUMMARY"], "a", encoding="utf-8") as output:
                output.write(summary)
        print(summary)


if __name__ == "__main__":
    try:
        main()
    except (ValueError, RuntimeError, subprocess.CalledProcessError) as error:
        raise SystemExit(str(error)) from None
