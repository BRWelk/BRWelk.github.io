window.NORTHSTAR_TOUR = {
  "chapters": [
    {
      "id": "planning",
      "title": "Understand & plan",
      "description": "Read the inventory, inspect the calculation, and prepare a shared plan."
    },
    {
      "id": "decisions",
      "title": "Review & approve",
      "description": "Compare options and preserve the exact decision and its output files."
    },
    {
      "id": "operations",
      "title": "Track & receive",
      "description": "Follow the same order through shipment, warehouse verification, and sellable stock."
    },
    {
      "id": "assistant",
      "title": "AI & business controls",
      "description": "See how the assistant, explicit approvals, planning settings, and vendor controls fit the operation."
    },
    {
      "id": "data",
      "title": "Data & supporting tools",
      "description": "Manage datasets, reports, imports, calculations, reconciliation, and help."
    },
    {
      "id": "intelligence",
      "title": "Network intelligence",
      "description": "Explore the separately labeled supplier, marketplace, quality, and scenario simulations."
    }
  ],
  "stops": [
    {
      "chapter": "planning",
      "id": "workflow-guide",
      "title": "Start with the operating workflow",
      "summary": "Northstar is a connected inventory and ordering application. The guide explains where to start, what each stage changes, and which workspace owns the next decision.",
      "points": [
        "Follow data → plan → approval → supplier progress → shipment → receiving → put-away → inventory → reconciliation.",
        "Page help and field explanations remain available throughout the app.",
        "Working records and the separate network examples are labeled according to their source."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/workflow-guide.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "executive-overview",
      "title": "Read the executive overview",
      "summary": "Begin with the selected dataset: stock, inbound units, sales, replenishment need, and the shared monthly and launch plans.",
      "points": [
        "The fictional operating example starts with 21 products across four regions.",
        "Regional figures reconcile to the same report used by planning and inventory.",
        "Unavailable revenue, margin, and live supplier performance remain unavailable."
      ],
      "detail": "The dashboard distinguishes reported need, included need, deferred need, and minimum or rounding extras. It does not invent channel splits or delivery dates absent from the source report.",
      "key": true,
      "image": "../../assets/northstar/operations/executive-overview.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "inventory",
      "title": "Inspect inventory by product and region",
      "summary": "Search and filter SKU/region positions to see stock, on-order units, demand, need, coverage, and health together.",
      "points": [
        "Filters narrow the working view; CSV exports include every matching position.",
        "Reported regional stock is not presented as an invented webstore/FBA split.",
        "Inspect opens the facts and calculations behind an individual position."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/inventory.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "inventory-detail",
      "title": "Understand a position before acting",
      "summary": "The detail view exposes the selected product and destination, source quantities, demand, and the planning calculation.",
      "points": [
        "Stock and on-order quantities remain distinct.",
        "Demand and projected cover provide context for the suggested order.",
        "Source records and explanatory help stay available beside the decision."
      ],
      "detail": "The purpose is an inspectable recommendation: an operator can explain which source facts and rules produced it, rather than approving an unexplained number.",
      "key": true,
      "image": "../../assets/northstar/operations/inventory-detail.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "replenishment",
      "title": "Review the shared replenishment plan",
      "summary": "The planner summarizes saved monthly or launch decisions and groups the proposed quantities by purchasing group.",
      "points": [
        "Dashboard inspection and editing are separate tasks.",
        "Changed source files are identified before a new approval.",
        "Opening the planning workspace allows a fresh local preview and an explicit shared-plan save."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/replenishment.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "replenishment-detail",
      "title": "Explain minimums and rounding",
      "summary": "Open a purchasing group to inspect the SKUs and destinations behind its total.",
      "points": [
        "Distinguish source need from minimum-order and box-rounding extras.",
        "Inspect the allocation across regions rather than only its grand total.",
        "The existing calculation engine supplies quantities; AI does not invent them."
      ],
      "detail": "A minimum order quantity is a supplier constraint. Northstar makes the effect of minimums and pack increments visible so the user can understand why an order differs from raw reported need.",
      "key": true,
      "image": "../../assets/northstar/operations/replenishment-detail.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "monthly-plan",
      "title": "Prepare a monthly replenishment plan",
      "summary": "Monthly planning uses retained versions of the report, catalog, and supplier template in one editing workspace.",
      "points": [
        "Check the data and its versions before calculating.",
        "A local preview, a shared plan, an approved package, and an unsent email are different stages.",
        "Earlier input versions and approved packages stay available."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/monthly-plan.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "planning",
      "id": "planning-rules",
      "title": "Set rules and regional choices",
      "summary": "Review the order date, group threshold, group/SKU minimums, pack increment, and regional eligibility before previewing quantities.",
      "points": [
        "The threshold is checked against the original purchasing-group need.",
        "Disabled extra-unit regions keep their reported need and unavoidable pack rounding.",
        "Previewing a plan does not publish settings or approve a purchase."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/planning-rules.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "decisions",
      "id": "monthly-preview",
      "title": "Review and publish the shared plan",
      "summary": "The local review reconciles draft units to reported need, extras, and deferred quantities before the user saves a shared revision.",
      "points": [
        "This fictional preview contains 16,645 units, including 132 units of minimum/rounding extras.",
        "Regional allocation explains where those quantities go.",
        "Save shared plan updates the dashboard and enables approval against that exact revision."
      ],
      "detail": "Approval checks the selected source versions, settings, date, and saved shared revision again. A stale plan is not silently approved against newer data.",
      "key": true,
      "image": "../../assets/northstar/operations/monthly-preview.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "decisions",
      "id": "launch-plan",
      "title": "Plan an initial product launch",
      "summary": "Initial launch has its own product selection and destination choices. Established products provide comparison history rather than being silently added to the launch.",
      "points": [
        "Choose the new color/product groups to introduce.",
        "Set the comparison demand and coverage assumptions explicitly.",
        "Only selected new products and enabled launch destinations receive launch units."
      ],
      "detail": "This capture uses a separate fresh fictional dataset, created from retained opening files. The already-received launch in the main operating example is not ordered again.",
      "key": true,
      "image": "../../assets/northstar/operations/launch-plan.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "decisions",
      "id": "launch-comparison",
      "title": "Compare minimum and coverage approaches",
      "summary": "Compare a minimum initial order with a comparable-demand coverage plan before deciding how much to commit.",
      "points": [
        "The fictional example compares 500 minimum-launch units with 1,460 coverage-based units.",
        "Regional quantities and expected coverage explain the consequence of each choice.",
        "Changing the comparison card recalculates the local draft; approval is still separate."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/launch-comparison.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "decisions",
      "id": "order-files",
      "title": "Inspect the four matching order outputs",
      "summary": "A reviewed order produces a supplier workbook, an unsent email containing that exact workbook, a proposed upstream request file, and a manual-import CSV.",
      "points": [
        "Output quantities reconcile to the reviewed plan.",
        "An email draft is a handoff for review, not evidence that a supplier received an order.",
        "Preview copies are distinct from the package saved by approval."
      ],
      "detail": "The app verifies that the workbook attached to the retained email matches the order workbook. It preserves the files, inputs, and settings as a traceable decision package.",
      "key": true,
      "image": "../../assets/northstar/operations/order-files.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "decisions",
      "id": "approved-packages",
      "title": "Return to approved package history",
      "summary": "Monthly and initial-launch packages share retained history, including their source versions and selection decisions.",
      "points": [
        "Download the exact original package or its individual outputs.",
        "Open the associated operational timeline when tracking begins.",
        "Internal approval, email transport, and supplier confirmation remain distinct."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/approved-packages.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "orders",
      "title": "Follow approved orders into operations",
      "summary": "Orders & movements connects approved packages to supplier orders, destination quantities, statuses, and their timelines.",
      "points": [
        "A saved package does not imply the order was sent.",
        "Choose whether tracked units are a new purchase or already included in reported on-order stock.",
        "Repeated saved versions are grouped without inventing duplicate purchases."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/orders.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "order-timeline",
      "title": "Inspect one order’s complete timeline",
      "summary": "Keep acknowledgement, production, shipping, warehouse receipt, put-away, and the original package attached to one tracked order.",
      "points": [
        "Ordered, shipped, accepted, damaged, and ready-for-sale quantities stay separate.",
        "Delivery references connect updates for the same physical delivery.",
        "The fictional launch order shown here has completed all 1,460 units."
      ],
      "detail": "Source, event date, confirmation status, and revision history make the transition explainable. Missing milestones are identified as missing rather than invented.",
      "key": true,
      "image": "../../assets/northstar/operations/order-timeline.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "shipments-map",
      "title": "Connect shipment status to its map",
      "summary": "Inspect routes and regional progress, then open the order behind the shipment.",
      "points": [
        "The map reflects recorded milestones in the same workflow.",
        "Filters narrow the destination and associated tracked orders.",
        "The captured routes are illustrative progress, not GPS or live carrier tracking."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/shipments-map.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "operations-inbox",
      "title": "Review incoming partner updates",
      "summary": "Supplier, carrier, warehouse, and manual updates enter a verification inbox before a consequential posting.",
      "points": [
        "See the order, destination, event date, and source together.",
        "Open the update deliberately to inspect its evidence and quantities.",
        "The example uses test partner feeds; no external partner message was sent."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/operations-inbox.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "receiving",
      "title": "Manage receiving and put-away",
      "summary": "The receiving view distinguishes goods in transit, goods counted at the dock, and stock that is ready for sale.",
      "points": [
        "Arrival is not a verified quantity count.",
        "Accepted units can remain unavailable while awaiting put-away.",
        "Partial deliveries and damaged quantities remain visible rather than disappearing into a single complete status."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/receiving.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "receiving-review",
      "title": "Verify the warehouse count",
      "summary": "Review each SKU and destination against the delivery evidence before confirming accepted and damaged quantities.",
      "points": [
        "The same delivery reference connects shipment and receipt.",
        "Previously confirmed counts are accounted for to prevent duplicate posting.",
        "Confirming this warehouse count records the milestone; good units still await put-away."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/receiving-review.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "awaiting-putaway",
      "title": "Keep dock stock separate from sellable stock",
      "summary": "After the fictional warehouse receipt, 1,460 accepted units are awaiting the shelf. Sellable stock has not increased.",
      "points": [
        "The order timeline records what was confirmed.",
        "The operation explicitly shows accepted units awaiting put-away.",
        "Ready-for-sale stock requires its own reviewed confirmation."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/awaiting-putaway.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "putaway-preview",
      "title": "Review the inventory change before confirming",
      "summary": "Put-away presents the before-and-after stock and on-order quantities for every selected line.",
      "points": [
        "Good accepted units move from on order into sellable stock.",
        "The operator verifies quantities and destinations before confirming.",
        "The app retains a new report version and a simulation-only reconciliation handoff."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/putaway-preview.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "updated-inventory",
      "title": "Close the loop in the same inventory",
      "summary": "The confirmed fictional put-away raises sellable stock from 3,424 to 4,884 and reduces on-order units from 20,105 to 18,645.",
      "points": [
        "Those are the same 1,460 units from the tracked launch order.",
        "The dashboard and inventory read the resulting working report.",
        "Earlier reports, packages, and movement history remain retained."
      ],
      "detail": "These changes were exercised in the isolated capture workspace through the application’s receipt and put-away controls. They describe fictional inventory, not physical goods or a live warehouse integration.",
      "key": true,
      "image": "../../assets/northstar/operations/updated-inventory.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "operations",
      "id": "transfer-review",
      "title": "Create a transfer with source protection",
      "summary": "A warehouse transfer has its own source, destination, quantity, and verified route instead of being represented as a supplier purchase.",
      "points": [
        "Protect source demand and existing reservations before dispatching surplus.",
        "Reserve, dispatch, destination inbound, receipt, and put-away have separate stock effects.",
        "The capture stops at the transfer form; it does not claim a transfer was executed."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/transfer-review.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "assistant-overview",
      "title": "Use the operations assistant as a starting point",
      "summary": "The assistant summarizes the selected operation, the next purchase review, important exceptions, and recent order progress.",
      "points": [
        "The captured summary uses the same 4,884 sellable units and 18,645 on-order units as the completed operating example.",
        "Approvals and supporting records are one deliberate step away.",
        "Routine activity is grouped rather than overwhelming decisions."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/assistant-overview.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "assistant-approvals",
      "title": "Select purchase groups without executing them",
      "summary": "Review complete purchase groups, inspect their evidence separately, and select the scope of a batch.",
      "points": [
        "Ten actions are displayed per page in this example.",
        "Select all states its full cross-page scope and selected count.",
        "Checkboxes select; approval remains a separate action."
      ],
      "detail": "The deterministic engine supplies the allocations. The assistant can inspect and explain supported records and prepare actions, while the application validates source context and preserves the explicit approval boundary.",
      "key": true,
      "image": "../../assets/northstar/operations/assistant-approvals.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "assistant-batch",
      "title": "See every consequence beside approval",
      "summary": "The selected batch shows total units, complete groups, destination allocations, sourcing/timing, vendor terms, and the approval effect together.",
      "points": [
        "This fictional batch selects 18 groups and 16,645 units.",
        "Warnings and the unconfigured email status remain visible at the decision point.",
        "The capture stops before Approve purchase batch; selecting these groups did not purchase anything."
      ],
      "detail": "Approval creates the canonical package and tracking record, initially approved but not sent. Changed sources, expired reviews, duplicate group claims, and mismatched quantities are checked by application code. The model cannot approve its own proposal.",
      "key": true,
      "image": "../../assets/northstar/operations/assistant-batch.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "assistant-activity",
      "title": "Review grouped order activity",
      "summary": "Open the latest meaningful status by order or batch, with detailed timelines available when needed.",
      "points": [
        "The same fictional launch order is complete while the monthly order needs attention.",
        "Groups and pagination bound the visible history.",
        "Audit events remain retained behind the summary."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/assistant-activity.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "ask-northstar",
      "title": "Ask a question grounded in operational records",
      "summary": "Ask Northstar connects an operational question with the records and application checks that can support an answer or prepared next step.",
      "points": [
        "Start with a useful question about orders, receiving, recommendations, or vendor terms.",
        "Inspect supporting evidence and the sources/approval explanation.",
        "This interface capture stops before submission; no generated answer is presented."
      ],
      "detail": "The implemented assistant uses bounded tools and scoped records from the selected workspace. Quantity calculations remain with the existing engine. An exact operational update still requires application verification and human approval.",
      "key": true,
      "image": "../../assets/northstar/current/ask-northstar.jpg",
      "note": "Isolated interface fixture with six fictional products; captured before question submission. No live AI or partner request."
    },
    {
      "chapter": "assistant",
      "id": "assistant-evidence",
      "title": "Choose the evidence area deliberately",
      "summary": "Explore supporting records by area, including orders/readiness, source updates, reconciliation, inventory signals, and vendor settings.",
      "points": [
        "Records identify their source and offer a deliberate inspection path.",
        "Unrelated network simulations are not used as evidence of the working vendor inventory.",
        "Missing connections or records are reported as unavailable."
      ],
      "detail": "The assistant can review a bounded set of observed records and prepare supported actions. Evidence selection, action preparation, and approval remain separate. In this capture, live AI is disabled while the deterministic records remain accessible.",
      "key": true,
      "image": "../../assets/northstar/operations/assistant-evidence.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "assistant-offline",
      "title": "Keep operating when AI is unavailable",
      "summary": "The capture workspace deliberately disables live AI. Northstar keeps the briefing, deterministic purchase review, records, and existing operational workflow available.",
      "points": [
        "The question view states that AI answers are unavailable.",
        "No answer or successful model call is fabricated for the tour.",
        "A provider problem does not erase operational facts or approve an action."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/assistant-offline.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "assistant-settings",
      "title": "Manage planning and notification preferences",
      "summary": "Business planning settings sit beside notification preferences and connection status, away from the everyday overview.",
      "points": [
        "Retained profiles can keep their recorded combined duration and coverage.",
        "Email and text are shown as not connected in this capture.",
        "Saving preferences is separate from sending a notification or ordering stock."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/assistant-settings.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "planning-stages",
      "title": "Separate supplier and logistics timing",
      "summary": "Newer sourcing profiles distinguish supplier lead time, dispatch, shipping, inspection, receiving, and the resulting coverage target.",
      "points": [
        "Supplier lead time ends when goods are ready to ship at the factory.",
        "Business-day and calendar-day stages avoid counting the same interval twice.",
        "Unknown stages remain unknown; these settings are estimates rather than delivery promises."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/current/planning-settings.jpg",
      "note": "Isolated six-product interface fixture showing the separate timing fields and disconnected notification services."
    },
    {
      "chapter": "assistant",
      "id": "vendor-settings",
      "title": "Maintain vendor identity and commercial terms",
      "summary": "Vendor & products owns vendor identity/reference, estimated or confirmed terms, purchasing minimums, and pack increments.",
      "points": [
        "Example Components is a fictional vendor in the capture.",
        "Estimated terms are distinct from confirmed terms backed by a supplier reference.",
        "An explicit defaults choice can seed future workspaces without rewriting existing orders."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/vendor-settings.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "assistant",
      "id": "vendor-products",
      "title": "Maintain the products behind purchasing",
      "summary": "Search and page through the selected workspace’s product records alongside its vendor settings.",
      "points": [
        "Product identity and variations remain tied to the working template.",
        "Import validation protects compatibility between catalog, report, and template.",
        "Business settings are independent of whether records are fictional or imported."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/vendor-products.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "datasets",
      "title": "Keep separate datasets and histories",
      "summary": "Each dataset retains its own opening files, plans, approved packages, movements, and working balances.",
      "points": [
        "Switching changes this browser; stale open pages must reload.",
        "A fresh dataset is different from updating the current source report.",
        "The earlier operating example remains available after creating a launch example."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/datasets.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "dataset-preview",
      "title": "Review opening balances before creation",
      "summary": "Validate and preview a copied or newly supplied starting dataset before saving it.",
      "points": [
        "The preview exposes product/position counts and opening stock/on-order totals.",
        "Opening source files are retained and identified.",
        "Creating a separate dataset starts new plans and movements without clearing the selected one."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/dataset-preview.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "reports",
      "title": "Export read-only operational reports",
      "summary": "Reports & imports provides inventory health, need reconciliation, purchasing decisions, launch comparison, approved package history, and confirmed import reports.",
      "points": [
        "XLSX and CSV exports retain source/version context.",
        "Read-only reports are distinct from editable input templates.",
        "The reports use shared working facts rather than private, unpublished tab previews."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/reports.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "imports",
      "title": "Validate, preview, then confirm source changes",
      "summary": "Every source upload follows a review sequence instead of replacing the working data immediately.",
      "points": [
        "Check identifiers, headings, values, source versions, and product compatibility.",
        "Preview the before-and-after changes before confirmation.",
        "Account for local movements so a new report does not apply the same receipt twice."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/imports.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "report-calculations",
      "title": "Recalculate reports from stock movements and mock sales",
      "summary": "Internal calculations can maintain the existing report structure from confirmed stock changes and fictional sales, without requiring a live upstream API.",
      "points": [
        "Preview enablement or a mock sale before committing it.",
        "Sellable stock, reservations, and unposted incoming goods have different roles.",
        "Forecast and replenishment use an explainable baseline; the tour does not claim measured forecast improvement."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/report-calculations.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "reconciliation-handoff",
      "title": "Keep upstream reconciliation explicit",
      "summary": "Inventory Planner handoffs retain the source movement and intended update separately from upstream acknowledgement.",
      "points": [
        "The captured handoffs are simulation-only and must not be sent as real updates.",
        "A local confirmation does not prove an external system accepted it.",
        "Import reconciliation distinguishes movements already included in a new source snapshot."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/operations/reconciliation-handoff.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "operational-history",
      "title": "Retain operational evidence",
      "summary": "Inspect recorded source updates, confirmations, delivery references, and the resulting movement history.",
      "points": [
        "Order-level summaries lead to the underlying events.",
        "Actors, sources, dates, and revisions keep the workflow traceable.",
        "Duplicate or incorrect updates can be resolved without inventing a stock movement."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/operational-history.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "connections",
      "title": "Understand the data and connection boundaries",
      "summary": "See which facts come from working files, manual checks, test feeds, and future external connections.",
      "points": [
        "Supplier, carrier, warehouse, and upstream systems contribute different facts.",
        "The captured partner feeds are simulated and the email/upstream connections are inactive.",
        "Future adapters feed the same event and reconciliation workflow."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/connections.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "manual-receipt",
      "title": "Use the manual receipt fallback",
      "summary": "Quick manual put-away supports stock already reported on order when there is no connected tracked delivery to review.",
      "points": [
        "Choose the SKU, region, actual accepted quantity, and delivery reference.",
        "Preview and confirm the stock/on-order change.",
        "Prefer the connected receiving timeline when that order is already tracked."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/manual-receipt.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "sage-evaluation",
      "title": "Understand the Sage evaluation boundary",
      "summary": "The evaluation workspace explains how source planning and Northstar’s operational workflow can fit together.",
      "points": [
        "Synthetic staging materials support evaluation and comparison.",
        "A real tenant, API access, mappings, and acknowledgement handling require separate setup.",
        "This portfolio does not claim that Sage is connected or receiving live writes."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/sage-evaluation.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "data",
      "id": "context-help",
      "title": "Keep smaller actions understandable",
      "summary": "Page help, field-level explanations, the workflow guide, and a printable guide support the user throughout the application.",
      "points": [
        "Explain the scope, calculation, and next useful action for a metric.",
        "Keep help available on request instead of crowding everyday decisions.",
        "Clarify what a preview, save, approval, receipt, and confirmation actually change."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/context-help.png",
      "note": "Actual application interface with fictional records in an isolated capture workspace."
    },
    {
      "chapter": "intelligence",
      "id": "supplier-performance",
      "title": "Review supplier performance in the network simulation",
      "summary": "Explore supplier capacity and performance signals in the separate synthetic network dataset.",
      "points": [
        "The figures are fictional scenario inputs, not measured vendor service levels.",
        "Supplier planning can be considered alongside network inventory and demand.",
        "The current vendor report does not acquire unavailable performance facts from this simulation."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/supplier-performance.png",
      "note": "Separate synthetic network example; these figures are not company results."
    },
    {
      "chapter": "intelligence",
      "id": "amazon-health",
      "title": "Inspect marketplace issues",
      "summary": "The marketplace-health simulation groups Amazon-related issues and their review/assignment workflow.",
      "points": [
        "Prioritize an issue and inspect its product or marketplace context.",
        "Issue handling is distinct from a supplier purchase or warehouse receipt.",
        "No live Amazon connection or marketplace write is claimed."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/amazon-health.png",
      "note": "Separate synthetic network example; these figures are not company results."
    },
    {
      "chapter": "intelligence",
      "id": "returns-quality",
      "title": "Connect returns with quality decisions",
      "summary": "Explore return reasons, dispositions, recovery, and product/supplier quality signals using fictional network records.",
      "points": [
        "Returned units do not automatically become sellable stock.",
        "Inspection and disposition control the next inventory decision.",
        "Cost, recovery, and opportunity figures remain synthetic planning signals."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/returns-quality.png",
      "note": "Separate synthetic network example; these figures are not company results."
    },
    {
      "chapter": "intelligence",
      "id": "growth-scenarios",
      "title": "Stress-test the operating assumptions",
      "summary": "Change growth, channel mix, lead time, and safety-stock assumptions to explore their implications for the network.",
      "points": [
        "Compare scenarios without rewriting operating inventory.",
        "Inspect purchases, transfers, stock exposure, capacity, and working capital together.",
        "Scenario outputs are hypothetical, not forecasts of actual business results."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/operations/growth-scenarios.png",
      "note": "Separate synthetic network example; these figures are not company results."
    }
  ],
  "legacy": [
    "assistant-overview",
    "assistant-batch",
    "assistant-activity",
    "ask-northstar",
    "planning-stages",
    "vendor-products"
  ]
};
