# Portfolio revision verification

Date: November 8, 2026.

## Results

- Baseline: 51 local references across the original homepage and control-tower
  case study passed before editing.
- Revised source: all eight portfolio pages passed 151 local link/resource and
  anchor checks, single-main-heading checks, and duplicate-ID checks.
- Homepage ProfilePage/Person and Northstar CreativeWork JSON-LD parsed.
- The sitemap parsed and lists all eight portfolio pages.
- In-app browser: reviewed desktop homepage, personal story, selected work,
  Northstar, and the connection section. No missing homepage images or horizontal
  overflow were observed.
- Confirmed the homepage-to-Northstar route, LinkedIn link destination, retained
  project links, and the earlier-prototype disclosure. Following the gallery
  anchor opens its containing native details element.
- Mobile: inspected homepage and Northstar at a 390 by 844 viewport; neither had
  document-level horizontal overflow.
- Text enlargement: local-only copies with a 200% base font (32px) revealed mobile
  overflow. Fixed wrapping and grid minimums, then rechecked both pages with no
  document-level overflow. This is text-size testing, not a claim of native browser
  zoom testing; the browser zoom shortcut did not change the in-app viewport.
- Keyboard: Tab reached the skip link and a solid focus outline was present.
- Wix package: 25 public files, 12 HTML documents, and 103 local references passed.
  Canonical/social/structured/sitemap/crawler URLs target the assigned Wix origin.
  Git data, documentation, deployment settings, scripts, and QA fixtures are absent.
- All 41 raster screenshots uploaded to Wix Media successfully and reported READY.
- Git whitespace/error checks passed.

## Evidence and limits

Copy is grounded in Brian's discovery answers, existing public case studies, and
Northstar's README and operations-assistant documentation. This portfolio work
did not run or audit the underlying private applications. The older synthetic
walkthrough remains identified as an earlier version without the current AI
assistant. External professional accounts were not signed into during link checks.

Brian's judgment of the personal voice and project emphasis remains useful review
feedback. Search indexing, rich-result eligibility, and AI citation behavior are
not established by these local checks. Wix delivery is verified separately at
release.

## Current Northstar screenshot revision

- Captured six original JPEGs from the current assistant/vendor interface using
  the existing isolated preview and one coherent fictional dataset. The capture
  stopped before purchase approval and AI question submission.
- Created a six-stage guided tour; all six images loaded in the in-app browser.
  Next/previous boundaries, a deep link to stage four, and right-arrow keyboard
  navigation worked. The case-study navigation opens the current tour.
- Reviewed the tour in a measured 390px iframe at standard and 200% base text.
  Its main element's content width equaled its 375px client width in both cases.
  Used this isolated frame after the browser viewport override did not resize
  an existing tab consistently.
- All 13 source HTML documents passed 170 local reference/anchor checks. The new
  tour's inline JavaScript passed `node --check`.
- All six new screenshots uploaded to Wix Media and reported READY. The prior
  media mappings and earlier prototype walkthrough are retained.
- Capture provenance and scope are recorded in `northstar-capture-notes.md`.
- Final upload package: 26 public files, 13 HTML documents, and 109 valid local
  references; all six tour-stage screenshot paths map to Wix Media.

## Wix delivery

Published to the site recorded in `deployment/wix.json`. Read back the saved
homepage, Northstar case study, current tour, and sitemap through Wix's file
helpers: story, current cover/tour links, six stages, mapped media, fictional-data
disclosure, preserved history, and Wix-origin metadata all matched.

Opened the live Wix homepage and walkthrough in the in-app browser. The current
overview and Ask Northstar screenshots loaded, stage four rendered, the homepage
served the expected story/title and Wix-hosted current cover, and no broken
homepage images were observed. The native Wix preview was refreshed after upload.
The site is a static presentation; the tour does not run Northstar's private
application or send AI, supplier, or notification requests.

## GitHub Pages custom-domain migration

November 8, 2026: Brian chose GitHub Pages hosting and `builtbybrianwelk.com`,
with domain registration and DNS retained at Wix.

- Compared the visible text of all 13 HTML documents against source commit
  `815d155`: all match the updated site previously published to Wix.
- Built a self-contained release of 75 files, including all screenshots, with
  repository documentation, build scripts, workflows, and deployment settings
  excluded from the served files.
- The generated release passed checks for all 13 HTML documents, 170 local
  references and anchors, duplicate IDs, JSON-LD parsing, canonical URLs, the
  eight-page sitemap, robots.txt, and domain configuration.
- In-app local preview loaded the current homepage and Northstar walkthrough.
  Homepage images loaded, there was no horizontal overflow at the desktop
  viewport, and the homepage canonical URL uses the new domain.
- Added the GitHub-provided TXT record through Wix and completed profile-level
  ownership verification. GitHub reported the domain successfully verified.

Production deployment, DNS routing, certificate issuance, HTTPS enforcement,
and live-domain browser checks are recorded after their actual results below.
