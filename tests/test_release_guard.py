"""Release failure scenarios: stale source, altered artifact, incomplete review."""
from datetime import datetime, timedelta, timezone
import hashlib
import json
import os
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
import build_pages
from release_guard import payload_digest, verify_release, write_release

NOW = datetime(2026, 11, 9, tzinfo=timezone.utc)
VERSION = "a" * 64


class ReleaseTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.repo = Path(self.temp.name)
        self.site = self.repo / "site"
        (self.site / "demos/northstar").mkdir(parents=True)
        self.put("index.html", "<h1>Current portfolio</h1>\n")
        self.put("demos/northstar/capture-manifest.json", json.dumps({"sourceFingerprint": VERSION}))
        self.put("demos/northstar/tour-data.js", 'window.NORTHSTAR_TOUR = {"stops":[{"id":"inventory"},{"id":"orders"}]};')
        self.release = write_release(self.site, "b" * 40)
        self.source = {"schemaVersion": 1, "sourceFingerprint": VERSION, "observedAt": NOW.isoformat()}
        self.policy = {"maxObservationHours": 24, "requiredReviewChecks": ["all-tour-stops", "mobile", "privacy"]}
        (self.repo / "docs").mkdir()
        self.evidence = self.repo / "docs/review.md"
        self.evidence.write_bytes(b"Reviewed inventory, orders, mobile layout and private fields.\n")
        self.review = {"schemaVersion": 1, "sourceFingerprint": VERSION,
                       "contentDigest": self.release["contentDigest"], "reviewedAt": NOW.isoformat(),
                       "stopIds": ["inventory", "orders"], "passedChecks": self.policy["requiredReviewChecks"],
                       "evidence": "docs/review.md", "evidenceSha256": hashlib.sha256(self.evidence.read_bytes()).hexdigest()}

    def tearDown(self):
        self.temp.cleanup()

    def put(self, path, value):
        file = self.site / path
        file.parent.mkdir(parents=True, exist_ok=True)
        file.write_text(value, encoding="utf-8")

    def verify(self, source=None, review=None):
        return verify_release(self.site, source or self.source, self.policy,
                              self.review if review is None else review, True, NOW, self.repo)

    def test_matching_review_and_refreshed_observation_pass(self):
        self.assertEqual(self.verify()["contentDigest"], payload_digest(self.site))
        fresh = {**self.source, "observedAt": (NOW + timedelta(minutes=2)).isoformat()}
        self.assertEqual(self.verify(source=fresh), self.release)

    def test_new_app_release_while_waiting_for_review_blocks_publish(self):
        self.verify()  # The build was valid when staged.
        with self.assertRaisesRegex(ValueError, "newer/different"):
            self.verify(source={**self.source, "sourceFingerprint": "c" * 64})

    def test_git_line_ending_conversion_preserves_review_evidence(self):
        self.evidence.write_bytes(self.evidence.read_bytes().replace(b"\n", b"\r\n"))
        self.assertEqual(self.verify(), self.release)

    def test_expired_or_future_source_observation_is_rejected(self):
        for observed in [NOW - timedelta(hours=25), NOW + timedelta(minutes=6)]:
            with self.subTest(observed=observed), self.assertRaises(ValueError):
                self.verify(source={**self.source, "observedAt": observed.isoformat()})

    def test_changed_or_injected_public_file_invalidates_review(self):
        self.put("index.html", "<h1>Different portfolio</h1>")
        with self.assertRaisesRegex(ValueError, "changed"):
            self.verify()
        self.put("index.html", "<h1>Current portfolio</h1>\n")
        self.put("unreviewed.html", "Unexpected page")
        with self.assertRaisesRegex(ValueError, "changed"):
            self.verify()

    def test_missing_review_and_incomplete_stop_or_layout_checks_fail(self):
        for review in [{}, {**self.review, "stopIds": ["inventory"]},
                       {**self.review, "passedChecks": ["all-tour-stops"]}]:
            with self.subTest(review=review), self.assertRaises(ValueError):
                self.verify(review=review)

    def test_review_of_other_content_or_source_fails(self):
        for review in [{**self.review, "contentDigest": "d" * 64},
                       {**self.review, "sourceFingerprint": "c" * 64}]:
            with self.subTest(review=review), self.assertRaises(ValueError):
                self.verify(review=review)

    def test_changed_evidence_and_external_evidence_are_rejected(self):
        self.evidence.write_text("Changed after review")
        with self.assertRaisesRegex(ValueError, "evidence changed"):
            self.verify()
        with self.assertRaisesRegex(ValueError, "outside"):
            self.verify(review={**self.review, "evidence": "../../outside.md"})

    def test_original_capture_version_can_be_preserved_after_explicit_new_version_review(self):
        self.put("demos/northstar/capture-manifest.json", json.dumps({
            "sourceFingerprint": "c" * 64, "reviewedSourceFingerprint": VERSION}))
        release = write_release(self.site, "b" * 40)
        self.review["contentDigest"] = release["contentDigest"]
        self.assertEqual(self.verify()["northstarSourceFingerprint"], VERSION)

    def test_stage_builds_identical_bytes_on_windows_and_linux_and_omits_old_images(self):
        root = self.repo / "source"
        files = {"index.html": "<h1>Portfolio</h1>\n", "styles.css": "body{color:black}\n",
                 "robots.txt": "User-agent: *\n", "sitemap.xml": "<urlset/>\n", ".nojekyll": "",
                 "deployment/pages.json": json.dumps({"domain": "example.com", "url": "https://example.com/"}),
                 "demos/northstar/index.html": '<link href="tour.css"><script src="tour-data.js"></script><script src="tour.js"></script>\n',
                 "demos/northstar/tour.css": "body{color:black}\n", "demos/northstar/tour.js": "// tour\n",
                 "demos/northstar/tour-data.js": "window.NORTHSTAR_TOUR = {};\n",
                 "demos/northstar/capture-manifest.json": json.dumps({"sourceFingerprint": VERSION,
                    "captures": [{"path": "assets/northstar/active/current.jpg"}]})}
        binary = b"\xff\xd8\r\nimage\xff\xd9"
        for endings, output in [("\r\n", "windows"), ("\n", "linux")]:
            for relative, text in files.items():
                p = root / relative;p.parent.mkdir(parents=True, exist_ok=True)
                p.write_bytes(text.replace("\n", endings).encode())
            for relative in ["assets/northstar/active/current.jpg", "assets/northstar/old/unused.jpg"]:
                p = root / relative;p.parent.mkdir(parents=True, exist_ok=True);p.write_bytes(binary)
            with patch.object(build_pages, "ROOT", root), patch.object(sys, "argv", ["build", "--output", str(root / output)]), patch.dict(os.environ, {"GITHUB_SHA": "b" * 40}):
                build_pages.main()
            self.assertFalse((root / output / "assets/northstar/old/unused.jpg").exists())
            self.assertEqual((root / output / "assets/northstar/active/current.jpg").read_bytes(), binary)
            for generated in ("CNAME", "demos/northstar/index.html"):
                self.assertNotIn(b"\r\n", (root / output / generated).read_bytes())
        self.assertEqual(payload_digest(root / "windows"), payload_digest(root / "linux"))


if __name__ == "__main__":
    unittest.main()
