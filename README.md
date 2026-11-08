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

The current public site is [brwelk.github.io](https://brwelk.github.io/). The agreed
workflow is local development and testing, GitHub source control, and deployment
of tested files to Wix. See [the profile brief](docs/profile-evolution.md).

## Local preview

No build or dependency installation is required. From this directory, run:

```powershell
python -m http.server 8877 --bind 127.0.0.1
```

Open `http://127.0.0.1:8877/` in the Codex in-app browser. The Northstar case study
retains `projects/replenishment-control-tower.html`; its embedded walkthrough
documents the earlier synthetic prototype, without the current AI assistant.

Before deploying to a different origin, update canonical, Open Graph, JSON-LD,
sitemap, and robots URLs together. Keep private notes, Git history, and verification
artifacts out of the public upload.

## Wix release

The target site is recorded in `deployment/wix.json`. Its screenshot mapping is
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
