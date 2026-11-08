# Northstar to portfolio release flow

The live development application on BNT is the reference for Northstar content.
The portfolio is maintained in BRWelk/BRWelk.github.io and served by GitHub Pages
at builtbybrianwelk.com. The github.io address redirects to that custom domain;
the repository and portfolio remain intact. Wix retains domain registration/DNS.

## Stage and publish

1. Review the newest running BNT app and its selected workspace. Verify source
   identity before and after capture. Inventory every current navigation area.
2. Capture the actual screens, inspect private fields, and update tour descriptions,
   homepage card, case study, links, and capture manifest together. Keep local
   working snapshots, databases, credentials, and contact details outside Git.
3. Build an empty staging directory with `python scripts/build_pages.py --output
   .qa/<release>`. Run `python scripts/check_site.py .qa/<release>` and
   `python scripts/check_northstar.py .qa/<release>`. Check changed JavaScript.
4. Review that exact staged site in the in-app browser, including the complete
   tour, current settings, mobile layout, old-link redirects, and enlarged text.
5. Commit and push to main. The Pages workflow rebuilds and checks the public
   artifact, then deploys it. Verify its successful run and the live HTTPS site.

GitHub Pages hosts the portfolio presentation, not Northstar's private Python
backend or workspace. Updating portfolio content does not install app code on BNT,
change its records, create a public tunnel, or change the site's audience.

Historical screenshots and the old prototype source remain in Git history/source
but are excluded from the served artifact. The compatibility entry point for the
old demo address redirects to the current tour. `check_northstar.py` rejects old
capture paths, stale numerical examples, altered/unrecorded images, missing deep
links, and mismatched source metadata.
