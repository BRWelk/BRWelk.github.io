"""Verify that every public Northstar stop uses its recorded current-app capture."""

import argparse
import hashlib
import json
from pathlib import Path
import re


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    root = parser.parse_args().directory.resolve()
    tour_root = root / "demos/northstar"
    raw = (tour_root / "tour-data.js").read_text(encoding="utf-8")
    tour = json.loads(raw.split("=", 1)[1].strip().rstrip(";"))
    manifest = json.loads((tour_root / "capture-manifest.json").read_text(encoding="utf-8"))
    captures = {item["path"]: item for item in manifest["captures"]}
    errors = []
    ids = [stop["id"] for stop in tour["stops"]]
    if len(ids) != len(set(ids)):
        errors.append("Duplicate tour screen IDs")
    if set(tour["legacy"]) - set(ids):
        errors.append("Legacy screen mappings have missing destinations")
    if tour["source"] != manifest["workspace"]:
        errors.append("Tour facts differ from the reviewed source workspace")
    used = set()
    for stop in tour["stops"]:
        path = (tour_root / stop["image"]).resolve()
        if not path.is_relative_to(root):
            errors.append(f"Image escapes public root: {stop['id']}")
            continue
        relative = path.relative_to(root).as_posix()
        item = captures.get(relative)
        if not item or not path.is_file():
            errors.append(f"Unrecorded or missing current capture: {stop['id']}")
            continue
        used.add(relative)
        if hashlib.sha256(path.read_bytes()).hexdigest() != item["sha256"]:
            errors.append(f"Capture bytes changed without source review: {relative}")
        if path.suffix != ".jpg" or not path.read_bytes().startswith(b"\xff\xd8"):
            errors.append(f"Capture format and filename do not match: {relative}")
        if stop.get("sourcePath") != item["sourcePath"] or stop.get("capturedAt") != item["capturedAt"]:
            errors.append(f"Source provenance differs: {stop['id']}")
        if stop["chapter"] not in {chapter["id"] for chapter in tour["chapters"]}:
            errors.append(f"Unknown chapter: {stop['id']}")
    current_pages = [root / "index.html", root / "projects/replenishment-control-tower.html",
                     tour_root / "index.html", tour_root / "tour-data.js"]
    for path in current_pages:
        text = path.read_text(encoding="utf-8")
        if re.search(r"northstar/(?:current|operations)/", text):
            errors.append(f"Superseded Northstar content in {path.relative_to(root)}")
    if set(captures) != used:
        errors.append("Capture manifest contains unreviewed/unreferenced public images")
    for directory in ("assets/northstar/current", "assets/northstar/operations"):
        if (root / directory).exists():
            errors.append(f"Historical captures included in public release: {directory}")
    if errors:
        raise SystemExit("\n".join(errors))
    print(json.dumps({"result": "passed", "tour_stops": len(ids), "current_captures": len(used),
                      "source_fingerprint": manifest.get("reviewedSourceFingerprint", manifest["sourceFingerprint"]),
                      "original_capture_baseline": manifest["sourceFingerprint"]}))


if __name__ == "__main__":
    main()
