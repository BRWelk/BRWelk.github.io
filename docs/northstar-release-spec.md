# Northstar portfolio releases with staging review

Confirmed November 9, 2026: prepare staging for Brian to review before publishing.
Keep the portfolio, its GitHub Pages hosting, and the BNT application separate.

## Required behavior

- BNT's installed application release is the source of truth for Northstar content.
  Inspect its actual source hashes over the existing SSH connection; never use a
  copied fixture or the portfolio itself as evidence of the newest app.
- Register every Northstar application release in a small GitHub source record.
  Registration changes metadata only; it does not publish portfolio content.
- Staging rechecks BNT, registers the observation, and rejects a tour reviewed
  against a different source fingerprint. It must not retag screenshots or assert
  that content was reviewed automatically.
- Build one public artifact with a deterministic content digest and public release
  metadata. Private inputs, contacts, databases, credentials, and source records
  stay outside the public artifact. Existing screenshot checks still apply.
- Record Codex's browser review against that exact artifact digest and source
  fingerprint, covering every tour stop plus the homepage, case study, navigation,
  mobile layout, enlarged text, and privacy checks. Changing public content or
  source version invalidates the review. Retained screenshots must be explicitly
  reviewed against a new app version; their original capture metadata is preserved.
- CI produces a downloadable staging artifact and summary for review. PRs never
  deploy. Main builds may deploy only after Brian's GitHub environment approval.
  Codex must never approve or bypass that production gate on Brian's behalf.
- After approval, re-read the current GitHub source record and verify it still
  matches the staged artifact. An observation older than 24 hours must be refreshed
  from BNT before publication. Deploy the already-built artifact, not a new build.
- Verify the live release metadata and content digest after deployment. Source,
  staging, and production versions must be inspectable without reading build logs.

## Scope and limits

No BNT app code, service, inventory, credentials, or tunnel changes are needed.
Use existing local SSH and GitHub authentication; add no server runner or token.
Project-specific handoff instructions belong in Northstar App Development and
this portfolio, not in shared global agreements.

GitHub cannot discover unreported LAN changes. Every application release must run
the registration command; direct BNT edits that skip that handoff are unsupported.
Local staging always performs its own fresh BNT check. A source observation has
a bounded lifetime; it is not a continuous connection to the private app.

## Acceptance checks

1. A matching source, unchanged public artifact, and complete browser review pass.
2. New source, expired/missing source record, changed/extra artifact file, missing
   browser review, partial stop coverage, or review of a different build fails.
3. Registration and staging never deploy, approve a job, or modify app records.
4. CI runs on PRs, uploads a preview, and cannot deploy a PR. The existing Pages
   environment names Brian as required reviewer; its branch restriction remains.
5. A source change while production is waiting for review causes the deployment
   preflight to fail. A refreshed observation of unchanged source remains valid.
6. Check the staged portfolio in the in-app browser and leave a concrete review
   artifact/PR. Keep the live site unchanged until Brian approves publication.

## Authorized data correction, November 9

Brian clarified that older datasets must be archived and disconnected, not merely
hidden behind a new default. The BNT app now archives the original/practice/demo
sources outside the active workspace, rejects archived IDs, resolves fresh/old
cookies to Conkly, and removes the legacy reference-data bootstrap. All Conkly
business tables were checked unchanged. The staging candidate removes the four
retired network-intelligence stops, refreshes ten affected captures, and preserves
original provenance for unchanged images. This does not authorize publication.
