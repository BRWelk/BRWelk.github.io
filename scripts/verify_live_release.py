"""Verify the approved portfolio artifact over HTTPS after deployment."""

import argparse
from concurrent.futures import ThreadPoolExecutor
import json
from pathlib import Path
import time
from urllib.parse import quote
from urllib.request import urlopen

from release_guard import read_json


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    args = parser.parse_args()
    root = args.directory.resolve()
    config = read_json(Path(__file__).resolve().parents[1] / "deployment/pages.json")
    origin = config["url"].rstrip("/")
    if not origin.startswith("https://"):
        raise SystemExit("Live verification requires HTTPS.")
    expected = read_json(root / "release.json")
    query = "?release=" + expected["portfolioCommit"]
    for attempt in range(10):
        try:
            with urlopen(origin + "/release.json" + query, timeout=15) as response:
                actual = json.load(response)
            if actual == expected:
                break
        except Exception:
            if attempt == 9:
                raise
        if attempt == 9:
            raise SystemExit("Live version does not match the approved artifact.")
        time.sleep(3)
    paths = [path for path in root.rglob("*") if path.is_file() and path.name != ".nojekyll"]

    def verify(path):
        relative = path.relative_to(root).as_posix()
        with urlopen(origin + "/" + quote(relative, safe="/") + query, timeout=25) as response:
            data = response.read()
        return relative if data != path.read_bytes() else None

    with ThreadPoolExecutor(max_workers=8) as pool:
        errors = [result for result in pool.map(verify, paths) if result]
    if errors:
        raise SystemExit("Live content differs from approved staging: " + ", ".join(errors))
    print(json.dumps({"result": "passed", "https_files_checked": len(paths), **expected}))


if __name__ == "__main__":
    main()
