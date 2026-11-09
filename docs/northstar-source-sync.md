# Northstar development to portfolio

The running BNT app is the source of truth. GitHub Pages serves the portfolio at
builtbybrianwelk.com; brwelk.github.io redirects there. Wix retains the domain.
The private app and business records stay on BNT.

## After every BNT app release

In Northstar App Development run `stage_portfolio.ps1`. It verifies installed
source hashes over the existing SSH connection, then registers the source version
on GitHub's `codex/northstar-source` branch. It never uploads business records or
publishes the portfolio. Registration occurs even when staging rejects old content.

Equivalent commands from this portfolio checkout:

```powershell
python scripts/northstar_release.py register --identity "$env:USERPROFILE/.ssh/psa_home_server_automation_ed25519"
python scripts/northstar_release.py stage --identity "$env:USERPROFILE/.ssh/psa_home_server_automation_ed25519"
```

If Northstar changed, review every current navigation area in the running app.
Update affected images, tour descriptions, homepage and case study together.
Keep original capture times/source versions for unchanged images. Record the newly
reviewed source fingerprint only after checking the content against it. Remove
retired data from active content; archives and Git history can preserve it.

## Stage, review, publish

1. Work on a `codex/` branch. The staging command builds a new empty `.qa/` folder
   and checks links, capture hashes, source identity and freshness.
2. Serve that exact output and inspect it in the in-app browser. Review every tour
   stop, homepage, case study, old links, mobile, enlarged text and privacy. Write
   substantive evidence under `docs/`.
3. Record completed Codex QA for that exact content digest:

   ```powershell
   python scripts/northstar_release.py record-review .qa/<stage-folder> --checks all-tour-stops,homepage-and-case-study,navigation-and-legacy-links,mobile,enlarged-text,privacy --evidence docs/northstar-stage-review.md
   python -m unittest discover -s tests -p 'test_release*.py'
   ```

4. Commit and push the feature branch and open a draft PR. The PR workflow
   validates and uploads `portfolio-preview`; it cannot deploy. Download the
   artifact from the Actions summary, extract it, and serve the extracted folder
   with `python -m http.server 8877 --bind 127.0.0.1 --directory <folder>`.
5. Brian reviews staging. After his approval, merge the reviewed change into main.
   The main run builds the reviewed content and waits at the `github-pages`
   environment for **BRWelk** to approve. Codex must never approve this gate on
   Brian's behalf. Admin bypass is disabled; only main can deploy.
6. After approval, the workflow rechecks the latest source version and observation
   age, verifies the reviewed content digest, and deploys the already-built
   artifact. It verifies the HTTPS release version and public file bytes.

A source observation expires after 24 hours. Re-register unchanged source to
refresh its observation. Changed source/content requires renewed content review.
GitHub cannot discover an unreported update on the private LAN. Registration is a
required part of every BNT app release. See [release requirements](northstar-release-spec.md).

## Versions and recovery

The public `/release.json` records the portfolio commit, reviewed Northstar source
fingerprint and content digest. The capture manifest retains original image
provenance. Compare those with the source-record branch and Actions summary.

Prepare any rollback as a new staged candidate against the current app and follow
the same approval gate. Do not rerun old deployments or bypass version checks.
Keep databases, raw observations, credentials and private contacts out of the site.
