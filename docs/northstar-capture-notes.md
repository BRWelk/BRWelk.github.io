# Current Northstar portfolio captures

## Source of truth

Confirmed November 8, 2026: keep Brian's portfolio on GitHub Pages and update its
Northstar entry from the actual app at http://192.168.0.70:8769. Do not replace the
portfolio with the operational app. GitHub Pages remains the host for the portfolio;
BNT remains the host for the Python/database application.

All 48 screenshots in the current 51-stop tour were captured directly from that
running app, not from GitHub's earlier portfolio, an isolated fixture, or a rebuilt
application. The selected workspace is CONKLY starter - 80 individual bands:
six products, 24 regional positions, 80 units in stock, zero on order, and one
completed 80-unit purchase. Each connector family retains the 20/10/10 split.

The current request is estimated at $320 landed/prepped. Its planning settings
are 14 supplier calendar days, 3 dispatch business days, 14 shipping calendar days,
2 inspection business days, 7 additional Amazon receiving days, 40 calendar days
overall, and 60 days of coverage. These are saved assumptions, not verified supplier
promises. New-workspace defaults are shown separately and are not claimed to equal
the selected workspace's saved preferences.

## Capture boundaries

Only navigation, inspection, local planning preview, and an unsaved dataset preview
were used. No order was approved or sent, no stock update or shared plan saved,
no dataset created or switched, and no AI question or notification submitted.
The existing completed order supplies the retained receipt and put-away evidence;
its current receiving queue is empty. No pending receipt was fabricated.

The assistant reports available. The portfolio shows its current question UI and
supporting records before a message is submitted. Amazon tracking is explicitly
not connected. Partner events remain labeled as simulated in the application.

The Planning captures are cropped directly by the browser to include sourcing and
logistics fields while excluding private notification email and phone values. All other
captures preserve the actual page viewport. No source labels or image content were
rewritten. The final chapter shows the current app's separately labeled legacy
synthetic network examples; those figures are not CONKLY operational evidence.

## Version and integrity

The installed source's 89 release entries were hashed before and after capture and
matched. Orders, positions, input versions, events, handoffs, pending counts, and
shared planning state were unchanged. The source fingerprint is
94b8e833d3c493dade7d9799c3199076b30c349dc34fac9de92dff2c2af03860.

The public `demos/northstar/capture-manifest.json` records the installed release,
source fingerprint, capture time, source route, privacy crops, and SHA-256 of each
image. It contains no workspace database, credentials, or notification contacts.
`check_northstar.py` verifies every tour reference against that capture record.

Older 21-product operating examples and six-product interface fixtures are no
longer served. Git history retains earlier versions. Old prototype URLs redirect
to the current tour instead of exposing an outdated interface.
