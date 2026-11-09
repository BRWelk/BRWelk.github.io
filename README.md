# Brian Welk | Business Systems Portfolio

Brian Welk's personal portfolio: his story, automation leadership, API integrations,
and exploration of AI and agentic applications.

## Current case studies

- LocalLoop Fundraising, a founder-led local product fundraising platform
- Channel Spend Analytics, a Power BI portfolio reconstruction using synthetic data
- Map Tomorrow, a personal finance and life-planning product
- Channel Pricing Integration Lab, a field-to-purchase workflow integration
- NurseryFlow, a local-first nursery CRM and workflow automation MVP
- Northstar Control Tower, the evolution of the replenishment prototype into
  connected operations and an AI assistant; partner connections use test adapters
- OCR Automation, document review and traceable ERP preparation

The production domain is [builtbybrianwelk.com](https://builtbybrianwelk.com/).
GitHub Pages hosts the site from `BRWelk/BRWelk.github.io`; Wix holds the domain
registration and DNS. Develop and check locally, then publish reviewed changes
to `main`. See [the profile brief](docs/profile-evolution.md) and
[deployment instructions](docs/github-pages.md).

## Local preview

No build or dependency installation is required. From this directory, run:

```powershell
python -m http.server 8877 --bind 127.0.0.1
```

Open `http://127.0.0.1:8877/` in the Codex in-app browser. The Northstar case study
retains `projects/replenishment-control-tower.html`. Its full application tour is
`demos/northstar/index.html`: 47 stops across five chapters, with screenshots captured
directly from the running BNT app and its current six-product CONKLY workspace.
Key decisions and AI controls receive additional detail. Earlier prototype links
redirect to this current tour; Git history preserves the old source.
See [capture provenance](docs/northstar-capture-notes.md) and
[coverage inventory](docs/northstar-tour-coverage.md).

Before deploying to a different origin, update canonical, Open Graph, JSON-LD,
sitemap, and robots URLs together. Keep private notes, Git history, and verification
artifacts out of the public upload.

## GitHub Pages release

The workflow in `.github/workflows/pages.yml` validates feature-branch PRs and
uploads a staging preview. Main candidates require matching Northstar source,
completed browser QA and Brian’s approval in the `github-pages` environment.
Administrator bypass is disabled. Follow [the staging flow](docs/northstar-source-sync.md).
The publishing source is **GitHub Actions**. Local checks use Python’s standard library:

```powershell
python scripts/build_pages.py
python scripts/check_site.py _site
python scripts/check_northstar.py _site
python -m http.server 8877 --bind 127.0.0.1 --directory _site
```

The output folder must be empty. For another local build, use a new directory,
for example `python scripts/build_pages.py --output .qa/pages-review`, then pass
that directory to the checker and preview server. The release includes all local
images and demos; it does not rely on Wix Media. Git history, workflows, docs,
deployment configuration, QA files, and scripts are excluded from the web release.

## Historical Wix release

The former Wix target is recorded in `deployment/wix.json`. Its screenshot mapping is
in `deployment/wix-media.json`; original image files remain in Git for local work.
After checking and committing source, create the public upload with:

```powershell
python scripts/package_site.py --output ../artifacts/portfolio-wix.zip
```

The package includes only public pages, styles, demos, and remaining small assets.
It rewrites metadata to the configured Wix origin and image references to their
Wix Media URLs, including nested walkthroughs. Upload this ZIP to the recorded
site using the connected Wix deployment tools, then check the deployed pages.
Use `--base-url https://your-domain.example` when an approved domain is connected.
GitHub-to-Wix automatic deployment is not configured.

See [verification evidence](docs/verification.md).
