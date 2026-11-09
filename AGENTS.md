# Portfolio release instructions

Keep the personal portfolio on GitHub Pages. Northstar's private Python/database
app remains on BNT; a portfolio update does not authorize replacing the portfolio
with that app or exposing the LAN workspace.

For Northstar content, follow `docs/northstar-release-spec.md` and
`docs/northstar-source-sync.md`. The running BNT app is the source of truth.
Register its source before staging; never substitute copied fixture screenshots.

Brian requires staging review before publication. Work on a `codex/` branch,
build and inspect the staged artifact, record the browser review, and provide the
preview/PR. Do not merge, push to main, approve a pending deployment, or bypass the
GitHub Pages environment gate without Brian's approval of that staged update.
An approval applies to the reviewed content digest and Northstar source version;
changed content or a newer app version requires fresh review.

Run site/capture checks and release-guard tests. Keep private source observations
and raw workspace data outside the served artifact. Preserve original capture
timestamps and source versions when an unchanged image is reviewed again.
