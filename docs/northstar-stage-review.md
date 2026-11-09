# Northstar staging review — November 9, 2026

This records Codex QA. Brian has not approved publication. The machine-readable
review in deployment/northstar-review.json binds these notes to the exact content
digest and registered app version. The portfolio remains live on its earlier
release until Brian reviews staging and approves production.

## Current app and data

Reviewed the actual running BNT app, not a fixture or old GitHub source. Conkly is
the sole active existing dataset: six products, 24 regional positions, 80 units
in stock, zero on order. The retained 80-unit order is Complete with 80 ready for
sale. Its eight confirmed milestones remain available. The assistant reports
zero pending purchase groups and retains the six earlier variation actions.

The original working dataset and two practice/demo datasets are archived outside
the active workspace. Their IDs cannot be selected (410); stale pinned sessions
cannot write (409); fresh and all three archived cookies resolve to Conkly. The
legacy network-data loader, assets and shared-state endpoint are disconnected.
Migration preserved every business table byte-for-byte at the logical row level.
After browser QA, orders, balances, files, preferences and all other business
tables still match the pre-change backup. Normal app reads added one derived
planning-calculation cache row; prior calculation rows were preserved.

Northstar regression suite: 155 passed. Modified JavaScript syntax checks passed.
Archive tests cover cold sessions, archived IDs, restart, missing active files,
idempotence, full rollback, no automatic reference-data seed and unchanged records.
Browser review also found and fixed app-header overflow at phone width. The
updated app menu opens, selects the guide and closes; its page width now fits.

## Portfolio coverage and presentation

Visited all 47 tour stops sequentially with the actual navigation controls. Each
image loaded, each title/summary matched its stop and desktop pages had no
horizontal overflow. Reviewed the complete planning/approval, shipment, warehouse,
put-away, inventory reconciliation, transfer, AI, vendor, data, import, reporting,
manual-receipt, Sage and help coverage. Ten affected captures were refreshed.
The four retired network-intelligence stops and their public images are excluded.
The remaining original capture times/source fingerprints are preserved; the
manifest records their review against the final app version separately.

Inspected the homepage and case study with the current cover, five chapters and
47-stop count. Rechecked corrected current-guide wording in the final build.
The old prototype Amazon/network address now opens the current executive overview;
the former assistant step 2 opens assistant-batch. Chapter and screen selectors,
back/next controls, full-image links and case-study/portfolio navigation work.
Static checks pass for 13 pages, 175 local references and eight sitemap entries.

Phone-width tour review used a 390 × 844 viewport. Navigation and text reflowed;
document content width matched its viewport. Doubled-text review used a QA-only
response override setting the root font to 32px, since keyboard browser zoom is
unavailable in the in-app browser. At desktop and phone width the text/controls
remained accessible without horizontal overflow. The release files were untouched
by that test override. Temporary viewport settings were reset.

Screens were reviewed for private fields. Existing planning/connection privacy
crops are retained; the new dataset, guide and Sage captures contain no private
notification addresses. No AI message, purchase approval, receipt, put-away,
notification or source import was submitted. The dataset preview was not saved.
Raw app observations and browser evidence remain in private workspace artifacts,
outside the served site and Git commit.

## Release protection evidence

Ten release tests passed, including changed source while waiting for approval,
expired/future observations, altered/injected artifact files, partial/wrong review,
changed evidence, capture provenance and cross-platform line endings. Public
generated text bytes are normalized so Windows review and Linux CI match.

An actual build of the older portfolio was rejected by the source guard after the
BNT release changed. GitHub's github-pages environment requires BRWelk approval,
allows only main and disables administrator bypass. Canary run 42618802520 built
successfully and stopped at deployment awaiting BRWelk. It was canceled without
approval or publication. PR builds validate and upload preview artifacts only.

The full revised workflow must merge after staging review before its new source,
digest and post-approval checks govern production runs. The environment approval
gate is already active. Future app releases must run the documented source
registration/staging handoff; GitHub cannot discover unreported private LAN edits.

Brian still needs to judge the staged presentation and approve publication.
