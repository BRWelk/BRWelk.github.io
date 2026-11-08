"""Build a self-contained GitHub Pages release containing only public site files."""

import argparse
import hashlib
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "_site")
    args = parser.parse_args()
    output = args.output.resolve()
    if output == ROOT or ROOT not in output.parents:
        parser.error("Choose an output directory inside the repository.")
    if output.exists() and any(output.iterdir()):
        parser.error("Output must be empty; choose a new directory for this release.")
    config = json.loads((ROOT / "deployment/pages.json").read_text(encoding="utf-8"))
    public_files = [ROOT / name for name in
                    ("index.html", "styles.css", "robots.txt", "sitemap.xml", ".nojekyll")]
    for directory in ("projects", "demos", "assets"):
        for path in sorted((ROOT / directory).rglob("*")):
            if not path.is_file():
                continue
            relative = path.relative_to(ROOT).as_posix()
            # Retain historical source in Git, but serve only the newest Northstar
            # captures and the compatibility redirect at the old demo address.
            if relative.startswith(("assets/northstar/current/", "assets/northstar/operations/",
                                    "assets/replenishment-control-tower/")):
                continue
            if relative.startswith("demos/replenishment-control-tower/") and relative != "demos/replenishment-control-tower/index.html":
                continue
            public_files.append(path)
    for path in public_files:
        if path.is_symlink() or not path.resolve().is_relative_to(ROOT):
            parser.error(f"Public files must stay inside the repository: {path}")
        destination = output / path.relative_to(ROOT)
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(path, destination)
    (output / "CNAME").write_text(config["domain"] + "\n", encoding="utf-8")
    # Give each published tour asset a content version so a returning visitor
    # receives the matching current data and layout after a release.
    tour_index = output / "demos/northstar/index.html"
    html = tour_index.read_text(encoding="utf-8")
    for name in ("tour.css", "tour-data.js", "tour.js"):
        digest = hashlib.sha256((tour_index.parent / name).read_bytes()).hexdigest()[:12]
        html = html.replace('"' + name + '"', '"' + name + '?v=' + digest + '"')
    tour_index.write_text(html, encoding="utf-8")
    print(json.dumps({"output": str(output), "files": len(public_files) + 1,
                      "url": config["url"]}))


if __name__ == "__main__":
    main()
