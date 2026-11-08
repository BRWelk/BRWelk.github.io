"""Check a public release's navigation, assets, structured data, and domain metadata."""

import argparse
from collections import Counter
from html.parser import HTMLParser
import json
from pathlib import Path
from urllib.parse import unquote, urlsplit
import xml.etree.ElementTree as ET


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = []
        self.refs = []
        self.canonicals = []
        self.json_blocks = []
        self.json_text = None
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if "id" in attrs:
            self.ids.append(attrs["id"])
        for key in ("href", "src", "poster"):
            if attrs.get(key):
                self.refs.append(attrs[key])
        if tag == "link" and attrs.get("rel") == "canonical":
            self.canonicals.append(attrs.get("href"))
        if tag == "script" and attrs.get("type") == "application/ld+json":
            self.json_text = ""

    def handle_data(self, text):
        if self.json_text is not None:
            self.json_text += text

    def handle_endtag(self, tag):
        if tag == "script" and self.json_text is not None:
            self.json_blocks.append(json.loads(self.json_text))
            self.json_text = None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("directory", type=Path)
    args = parser.parse_args()
    root = args.directory.resolve()
    config = json.loads((Path(__file__).resolve().parents[1] / "deployment/pages.json")
                        .read_text(encoding="utf-8"))
    origin = config["url"].rstrip("/")
    errors = []
    pages = {}
    for path in root.rglob("*.html"):
        text = path.read_text(encoding="utf-8")
        pages[path] = Page(text)
        duplicate_ids = [key for key, count in Counter(pages[path].ids).items() if count > 1]
        if duplicate_ids:
            errors.append(f"Duplicate IDs in {path.relative_to(root)}: {duplicate_ids}")
        if "https://brwelk.github.io" in text or "wixstatic.com" in text:
            errors.append(f"Old hosting reference in {path.relative_to(root)}")
        relative = path.relative_to(root).as_posix()
        if relative == "index.html" or relative.startswith("projects/"):
            expected = origin + ("/" if relative == "index.html" else "/" + relative)
            if pages[path].canonicals != [expected]:
                errors.append(f"Incorrect canonical URL in {relative}")
    checked = 0
    for path, page in pages.items():
        for reference in page.refs:
            url = urlsplit(reference)
            if url.scheme or url.netloc:
                continue
            target = ((root / unquote(url.path).lstrip("/")) if url.path.startswith("/")
                      else (path.parent / unquote(url.path))).resolve() if url.path else path
            if target.is_dir():
                target /= "index.html"
            if not target.is_relative_to(root) or not target.is_file():
                errors.append(f"Missing local resource in {path.relative_to(root)}: {reference}")
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f"Missing anchor in {path.relative_to(root)}: {reference}")
            checked += 1
    sitemap = ET.parse(root / "sitemap.xml")
    locations = [element.text for element in sitemap.iter("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")]
    expected_locations = {origin + "/"} | {
        origin + "/" + path.relative_to(root).as_posix() for path in (root / "projects").glob("*.html")}
    if set(locations) != expected_locations:
        errors.append("Sitemap does not match the homepage and project pages")
    if f"Sitemap: {origin}/sitemap.xml" not in (root / "robots.txt").read_text():
        errors.append("robots.txt has an incorrect sitemap URL")
    if (root / "CNAME").read_text().strip() != config["domain"]:
        errors.append("CNAME does not match the domain")
    forbidden = [".git", ".github", ".qa", "docs", "scripts", "deployment", "README.md"]
    if any((root / name).exists() for name in forbidden):
        errors.append("Release includes repository-only material")
    if errors:
        raise SystemExit("\n".join(errors))
    print(json.dumps({"html_pages": len(pages), "local_references": checked,
                      "sitemap_pages": len(locations), "result": "passed"}))


if __name__ == "__main__":
    main()
