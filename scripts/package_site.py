"""Package only public portfolio files, with metadata for the selected origin."""

import argparse
import json
import posixpath
from pathlib import Path
from urllib.parse import urlsplit
from zipfile import ZIP_DEFLATED, ZipFile

ROOT = Path(__file__).resolve().parents[1]
SOURCE_ORIGIN = "https://brwelk.github.io"


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--base-url")
    args = parser.parse_args()
    config = json.loads((ROOT / "deployment/wix.json").read_text(encoding="utf-8"))
    origin = (args.base_url or config["url"]).rstrip("/")
    url = urlsplit(origin)
    if url.scheme != "https" or not url.netloc or url.path or url.query or url.fragment:
        parser.error("The base URL must be an HTTPS origin without a path or query.")

    public_files = [ROOT / name for name in ("index.html", "styles.css", "robots.txt", "sitemap.xml")]
    for directory in ("projects", "demos", "assets"):
        public_files.extend(sorted(path for path in (ROOT / directory).rglob("*") if path.is_file()))

    media_path = ROOT / "deployment/wix-media.json"
    media = json.loads(media_path.read_text(encoding="utf-8")) if media_path.exists() else {}
    output = args.output.resolve()
    output.parent.mkdir(parents=True, exist_ok=True)
    text_extensions = {".html", ".css", ".js", ".json", ".svg", ".xml", ".txt"}
    with ZipFile(output, "w", compression=ZIP_DEFLATED) as archive:
        count = 0
        for path in public_files:
            relative = path.relative_to(ROOT).as_posix()
            if relative in media:
                continue
            data = path.read_bytes()
            if path.suffix in text_extensions:
                text = data.decode("utf-8").replace(SOURCE_ORIGIN, origin)
                if path.suffix == ".html":
                    for asset, destination in media.items():
                        reference = posixpath.relpath(asset, posixpath.dirname(relative) or ".")
                        for quote in ('"', "'"):
                            text = text.replace(quote + reference + quote, quote + destination + quote)
                data = text.encode("utf-8")
            archive.writestr(relative, data)
            count += 1
    print(json.dumps({"archive": str(output), "files": count, "bytes": output.stat().st_size, "origin": origin}))


if __name__ == "__main__":
    main()
