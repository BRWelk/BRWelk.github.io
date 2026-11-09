"""Deterministic portfolio artifacts and Northstar release/review validation."""

from datetime import datetime, timedelta, timezone
import hashlib
import json
from pathlib import Path
import re

RELEASE_FILE = "release.json"
SHA256 = re.compile(r"[0-9a-f]{64}\Z")


def read_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8-sig"))


def utc_now():
    return datetime.now(timezone.utc)


def timestamp(value):
    try:
        result = datetime.fromisoformat(value.replace("Z", "+00:00"))
        if result.tzinfo is None:
            raise ValueError()
        return result.astimezone(timezone.utc)
    except (ValueError, TypeError, AttributeError):
        raise ValueError("Use a timezone-aware UTC timestamp.") from None


def source_fingerprint(manifest):
    value = manifest.get("reviewedSourceFingerprint", manifest.get("sourceFingerprint"))
    if not isinstance(value, str) or not SHA256.fullmatch(value):
        raise ValueError("Northstar source fingerprint is missing or invalid.")
    return value


def payload_digest(root):
    """Bind paths and exact bytes; include additions, exclude only this metadata."""
    root = Path(root).resolve()
    records = []
    # WindowsPath sorts case-insensitively; PosixPath does not. Hash the same
    # canonical relative string order on both hosts (not native Path ordering).
    for path in sorted(root.rglob("*"), key=lambda item: item.relative_to(root).as_posix()):
        if path.is_symlink():
            raise ValueError("Release files may not be symbolic links.")
        if path.is_file() and path.relative_to(root).as_posix() != RELEASE_FILE:
            records.append([path.relative_to(root).as_posix(), hashlib.sha256(path.read_bytes()).hexdigest()])
    return hashlib.sha256(json.dumps(records, separators=(",", ":")).encode()).hexdigest()


def write_release(root, commit):
    root = Path(root)
    manifest = read_json(root / "demos/northstar/capture-manifest.json")
    release = {"schemaVersion": 1, "portfolioCommit": commit,
               "northstarSourceFingerprint": source_fingerprint(manifest),
               "contentDigest": payload_digest(root)}
    (root / RELEASE_FILE).write_text(json.dumps(release, indent=2) + "\n", encoding="utf-8")
    return release


def verify_source(record, expected, max_hours=24, now=None):
    now = now or utc_now()
    if record.get("schemaVersion") != 1 or record.get("sourceFingerprint") != expected:
        raise ValueError("Northstar is newer/different than this portfolio review. Refresh the content and stage again.")
    observed = timestamp(record.get("observedAt"))
    if observed > now + timedelta(minutes=5):
        raise ValueError("Northstar source observation is in the future; check the clock.")
    if now - observed > timedelta(hours=max_hours):
        raise ValueError("Northstar source observation expired. Register a fresh BNT observation before publishing.")


def stop_ids(root):
    text = (Path(root) / "demos/northstar/tour-data.js").read_text(encoding="utf-8")
    tour = json.loads(text.split("=", 1)[1].strip().rstrip(";"))
    return sorted(stop["id"] for stop in tour["stops"])


def verify_release(root, source, policy, review=None, require_review=False, now=None, review_root=None):
    root = Path(root)
    release = read_json(root / RELEASE_FILE)
    if release.get("schemaVersion") != 1:
        raise ValueError("Missing/unsupported release metadata.")
    if payload_digest(root) != release.get("contentDigest"):
        raise ValueError("Staged content changed, or files were added/removed. Build and review again.")
    manifest = read_json(root / "demos/northstar/capture-manifest.json")
    expected = source_fingerprint(manifest)
    if release.get("northstarSourceFingerprint") != expected:
        raise ValueError("Release source version differs from the capture review.")
    verify_source(source, expected, policy["maxObservationHours"], now)
    if require_review:
        if not review or review.get("schemaVersion") != 1:
            raise ValueError("Record the actual browser review before requesting publication.")
        if review.get("contentDigest") != release["contentDigest"]:
            raise ValueError("Browser review belongs to different staged content.")
        if review.get("sourceFingerprint") != expected:
            raise ValueError("Browser review belongs to a different Northstar app version.")
        if review.get("stopIds") != stop_ids(root):
            raise ValueError("Browser review does not cover every current tour stop.")
        if set(review.get("passedChecks", [])) != set(policy["requiredReviewChecks"]):
            raise ValueError("Browser review is incomplete: check the whole site, navigation, mobile, enlarged text, and privacy.")
        if timestamp(review.get("reviewedAt")) > (now or utc_now()) + timedelta(minutes=5):
            raise ValueError("Browser review timestamp is in the future.")
        if review_root is None:
            raise ValueError("Supply the review evidence root.")
        evidence_root = Path(review_root).resolve()
        evidence = (evidence_root / review.get("evidence", "")).resolve()
        if not evidence.is_relative_to(evidence_root) or not evidence.is_file():
            raise ValueError("Browser review evidence is missing or outside the repository.")
        if hashlib.sha256(evidence.read_bytes().replace(b"\r\n", b"\n")).hexdigest() != review.get("evidenceSha256"):
            raise ValueError("Browser review evidence changed after review was recorded.")
    return release
