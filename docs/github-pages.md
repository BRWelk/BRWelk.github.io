# GitHub Pages and builtbybrianwelk.com

## Confirmed release requirements

On November 8, 2026, Brian chose GitHub Pages instead of Wix hosting or bntserver.
Publish the current profile story, project pages, and Northstar walkthrough from
`codex/profile-evolution`, preserving the approved content and existing paths.
Visitors should open `https://builtbybrianwelk.com/`; the `www` address should reach
the same site. Wix remains the domain registrar and DNS provider. No Wix website
plan, Cloudflare Tunnel, or bntserver service is required for this portfolio.

Keep source in `BRWelk/BRWelk.github.io`, with `main` as the release branch.
Build and publish only public pages, styles, assets, and demos. Keep repository
documentation, scripts, configuration, and QA material out of the served release.
All screenshot images must ship with the site rather than depend on Wix Media.

## Checks and expected results

- The current story and Northstar content match the approved source revision;
  hosting changes do not alter visible story text or navigation.
- `scripts/check_site.py` passes against the generated public release: internal
  resources and anchors exist, IDs are unique, JSON-LD parses, canonical URLs and
  the eight-page sitemap use the new domain, and private build material is absent.
- GitHub Actions finishes its public build, checks, artifact upload, and deployment.
- Wix DNS serves GitHub's four apex A records, `www` points to `brwelk.github.io`,
  and the GitHub ownership-verification TXT record remains in place.
- GitHub confirms domain ownership and issues a certificate. HTTPS is enforced.
- Check the live homepage, a project page, and Northstar walkthrough in the in-app
  browser, including screenshot loading and the main navigation.

## DNS and hosting

The canonical domain is `builtbybrianwelk.com`. Configure it in the repository's
Pages settings before directing the apex and `www` DNS records to GitHub.

| Type | Host | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | brwelk.github.io |

GitHub's profile-level Pages verification provides the exact TXT value for
`_github-pages-challenge-BRWelk`. Keep that record after verification. Preserve
other DNS records, nameservers, and DNSSEC. No email records existed at inspection.

GitHub Pages uses the GitHub Actions publishing source. The checked-in workflow
builds `_site` using `scripts/build_pages.py`, checks it, and deploys only `_site`.
`deployment/pages.json` records the domain and release target. A generated `CNAME`
file documents the domain in the artifact; Actions-based Pages uses the repository
Pages setting as its authoritative domain configuration.

## Rollback

For a site-content regression, revert the relevant source commit on `main` and let
the workflow redeploy. Do not publish a whole-repository artifact as a shortcut.
The previous `main` commit was `3316177b90e44bdbb152f5d7de27b4125f2dfccb`;
the latest approved Wix source was `815d155fc7f6777e90f67a431162fb28d8eae400`.

Before this migration, Wix's apex A records were `185.230.63.171`,
`185.230.63.186`, and `185.230.63.107`; `www` pointed to `initial.wixdns.net`.
Restoring them returns to Wix's original unassigned-domain configuration, not a
working custom-domain Wix site. The former published Wix site remains recorded
in `deployment/wix.json`.

## References

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://support.wix.com/en/article/connecting-a-wix-domain-to-an-external-site
