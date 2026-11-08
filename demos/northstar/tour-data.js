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
      "id": "executive-overview",
      "title": "Read the executive overview",
      "summary": "Begin with the selected dataset: stock, inbound units, sales, replenishment need, and the shared monthly and launch plans.",
      "points": [
        "The current CONKLY workspace has six products, 80 units in stock, and no units on order.",
        "Its 24 product/region positions reconcile to the same working report used by planning and inventory.",
        "Revenue, margin, live supplier performance, and demand history are not invented when absent."
      ],
      "detail": "The dashboard distinguishes reported need, included need, deferred need, and minimum or rounding extras. It does not invent channel splits or delivery dates absent from the source report.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/executive-overview.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html",
      "capturedAt": "2026-11-08T21:43:12.951Z"
    },
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
      "image": "../../assets/northstar/live-20261108/workflow-guide.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#guide",
      "capturedAt": "2026-11-08T21:43:54.377Z"
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
      "image": "../../assets/northstar/live-20261108/inventory.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#inventory",
      "capturedAt": "2026-11-08T21:43:26.883Z"
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
      "detail": "The inspected smaller-connector black variation has 20 units in US stock and no on-order units or positive demand. The detail exposes the actual source quantities and the resulting zero monthly recommendation.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/inventory-detail.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#inventory",
      "capturedAt": "2026-11-08T21:43:27.414Z"
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
      "image": "../../assets/northstar/live-20261108/replenishment.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#replenishment",
      "capturedAt": "2026-11-08T21:43:36.748Z"
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
      "detail": "The current groups show no replenishment need. Supplier minimums and rounding remain inspectable rules, rather than a reason to create an order when demand is zero.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/replenishment-detail.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#replenishment",
      "capturedAt": "2026-11-08T21:43:43.848Z"
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
      "image": "../../assets/northstar/live-20261108/monthly-plan.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=standard",
      "capturedAt": "2026-11-08T21:44:26.681Z"
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
      "image": "../../assets/northstar/live-20261108/planning-rules.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=standard#settings",
      "capturedAt": "2026-11-08T21:44:26.914Z"
    },
    {
      "chapter": "decisions",
      "id": "monthly-preview",
      "title": "Review and publish the shared plan",
      "summary": "The local review reconciles draft units to reported need, extras, and deferred quantities before the user saves a shared revision.",
      "points": [
        "The current local monthly preview is zero units, with zero extras and no production order requested.",
        "The preview still reconciles regional need, minimums, rounding, and deferred quantities.",
        "Saving a shared revision and approving its package remain separate explicit actions."
      ],
      "detail": "Approval checks the selected source versions, settings, date, and saved shared revision again. A stale plan is not silently approved against newer data.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/monthly-preview.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=standard#review",
      "capturedAt": "2026-11-08T21:44:41.366Z"
    },
    {
      "chapter": "decisions",
      "id": "launch-plan",
      "title": "Plan an initial product launch",
      "summary": "Initial launch has its own product selection and destination choices. Established products provide comparison history rather than being silently added to the launch.",
      "points": [
        "The current report and template contain no eligible zero-history launch products.",
        "The actual app keeps launch selection and destination controls available without inventing new products.",
        "Established products are not silently treated as a new launch."
      ],
      "detail": "This is the same six-product workspace shown throughout the tour. It was not replaced by a fresh generated dataset to manufacture a launch result.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/launch-plan.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=launch#settings",
      "capturedAt": "2026-11-08T21:45:09.551Z"
    },
    {
      "chapter": "decisions",
      "id": "launch-comparison",
      "title": "Compare minimum and coverage approaches",
      "summary": "Compare a minimum initial order with a comparable-demand coverage plan before deciding how much to commit.",
      "points": [
        "The current form provides Minimum initial order and Comparable-demand coverage choices.",
        "Coverage days, comparable-demand percentage, and launch destinations remain explicit inputs.",
        "Changing an option marks a local change; preview and shared-plan approval are still required."
      ],
      "detail": "The current form shows the real controls and the no-eligible-products state. A calculated launch requires eligible products and a reviewed local preview.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/launch-comparison.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=launch#settings",
      "capturedAt": "2026-11-08T21:45:09.745Z"
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
      "detail": "These are current local preview outputs, not a new saved order or a sent email. The retained 80-unit package is shown in the next stop; its original files and source versions remain available.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/order-files.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=standard#review",
      "capturedAt": "2026-11-08T21:44:41.914Z"
    },
    {
      "chapter": "decisions",
      "id": "approved-packages",
      "title": "Return to approved package history",
      "summary": "Monthly and initial-launch packages share retained history, including their source versions and selection decisions.",
      "points": [
        "The current saved monthly package contains the original 80-unit purchase.",
        "Its workbook, unsent email, proposed upstream request, and manual CSV remain downloadable.",
        "Internal approval, email transport, and supplier confirmation remain distinct."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/live-20261108/approved-packages.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=standard#orders-history",
      "capturedAt": "2026-11-08T21:44:53.185Z"
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
      "image": "../../assets/northstar/live-20261108/orders.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:45:26.743Z"
    },
    {
      "chapter": "operations",
      "id": "order-timeline",
      "title": "Inspect one order’s complete timeline",
      "summary": "Keep acknowledgement, production, shipping, warehouse receipt, put-away, and the original package attached to one tracked order.",
      "points": [
        "All six variations retain their ordered, shipped, accepted, damaged, and ready-for-sale quantities.",
        "The two connector families each retain the 20/10/10 variation split.",
        "The current Conkly order is complete: 80 ordered and 80 ready for sale."
      ],
      "detail": "Source, event date, confirmation status, and revision history make the transition explainable. Missing milestones are identified as missing rather than invented.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/order-timeline.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:45:50.131Z"
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
      "image": "../../assets/northstar/live-20261108/shipments-map.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:02.732Z"
    },
    {
      "chapter": "operations",
      "id": "operations-inbox",
      "title": "Review incoming partner updates",
      "summary": "The current Needs review inbox has no pending updates. Future manual or connector updates enter this verification workflow.",
      "points": [
        "The empty state remains visible instead of presenting fabricated outstanding work.",
        "Updates are inspected with their source, order, destination, and quantities before posting.",
        "The current order history labels its partner feed events as simulated; no external partner contact is claimed."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/operations-inbox.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:45:18.449Z"
    },
    {
      "chapter": "operations",
      "id": "receiving",
      "title": "Manage receiving and put-away",
      "summary": "The current workspace has no delivery waiting for receipt or put-away; its 80-unit order is already complete.",
      "points": [
        "Arrival, verified count, and ready-for-sale put-away remain different confirmations.",
        "The current receiving empty state is shown without replaying or changing the completed order.",
        "Its saved package links back to the completed order and retained quantities."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/receiving.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:15.598Z"
    },
    {
      "chapter": "operations",
      "id": "receiving-review",
      "title": "Inspect the retained warehouse quantities",
      "summary": "The completed order retains accepted-at-dock, damaged, and ready-for-sale quantities for every variation.",
      "points": [
        "All 80 units are accepted and ready for sale; damaged and closed quantities are zero.",
        "The order reference and retained package connect the receipt evidence to the original purchase.",
        "This is inspection of existing history; no receipt was confirmed during capture."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/receiving-review.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:16.448Z"
    },
    {
      "chapter": "operations",
      "id": "awaiting-putaway",
      "title": "Distinguish the receipt and put-away milestones",
      "summary": "The saved order timeline contains separate confirmed Warehouse receipt and Ready for sale milestones.",
      "points": [
        "The current awaiting-shelf count is zero because this order is complete.",
        "A warehouse count and sellable stock remain separate events in the retained timeline.",
        "The source labels the events as simulated API/webhook updates."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/order-events.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:16.950Z"
    },
    {
      "chapter": "operations",
      "id": "putaway-preview",
      "title": "Reconcile the completed put-away",
      "summary": "The current order lines reconcile all 80 received units to 80 units ready for sale.",
      "points": [
        "Ordered, shipped, accepted, damaged, and ready quantities remain separate columns.",
        "A completed order is inspected through its history rather than posted a second time.",
        "The same result appears in Inventory control and the assistant overview."
      ],
      "detail": "This capture shows the actual completed record. It does not pretend the app is currently waiting on a before/after approval dialog.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/receiving-review.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:16.448Z"
    },
    {
      "chapter": "operations",
      "id": "updated-inventory",
      "title": "Close the loop in the same inventory",
      "summary": "Inventory control now shows 80 units in stock and zero on order, matching the completed Conkly order.",
      "points": [
        "The six variations retain 20/10/10 units for each connector family.",
        "The dashboard, inventory, and assistant refer to the same selected workspace.",
        "Original files, the approved package, and movement history remain retained."
      ],
      "detail": "These are the current development workspace balances after Brian completed the process. Portfolio capture did not create an order, repeat a receipt, or change stock.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/inventory.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#inventory",
      "capturedAt": "2026-11-08T21:43:26.883Z"
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
      "image": "../../assets/northstar/live-20261108/transfer-review.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:24.449Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-overview",
      "title": "Use the operations assistant as a starting point",
      "summary": "The assistant summarizes the selected operation, the next purchase review, important exceptions, and recent order progress.",
      "points": [
        "The overview reads the current workspace: 80 units in stock, zero on order, and the completed purchase.",
        "Approvals, Activity, Ask Northstar, and Settings remain separate views.",
        "Recent progress is grouped by order rather than mixed with unrelated reference data."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/assistant-overview.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html",
      "capturedAt": "2026-11-08T21:47:02.104Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-approvals",
      "title": "Review current purchase readiness",
      "summary": "The current approval view shows zero variations and zero units available for a new purchase: the 80-unit request has already completed.",
      "points": [
        "Prepare purchase is disabled when there is no current action to approve.",
        "The entered request remains 80 individual bands with a $320 estimated landed/prepped total.",
        "Selection and approval remain separate controls when eligible actions exist."
      ],
      "detail": "The deterministic engine supplies the allocations. The assistant can inspect and explain supported records and prepare actions, while the application validates source context and preserves the explicit approval boundary.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/assistant-approvals.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html#approvals",
      "capturedAt": "2026-11-08T21:47:02.270Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-batch",
      "title": "Inspect request costs and earlier actions",
      "summary": "The current expanded review retains the purchase assumptions and six previous variation actions without presenting them as pending purchases.",
      "points": [
        "The request is 80 individual bands at an estimated $4 landed/prepped per band.",
        "The timing review shows 14 supplier days, 40 calendar days overall, and 60 days of coverage.",
        "Earlier actions are marked expired or changed; the current order history records what actually completed."
      ],
      "detail": "The $320 estimate separates bands, branded packaging, freight, duties, and prep/inbound costs. Supplier terms are estimates requiring confirmation. The assistant cannot approve its own proposed changes.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/assistant-batch.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html#approvals",
      "capturedAt": "2026-11-08T21:47:10.304Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-activity",
      "title": "Review grouped order activity",
      "summary": "Open the latest meaningful status by order or batch, with detailed timelines available when needed.",
      "points": [
        "The current workspace has one grouped completed order, with 80 units ready for sale.",
        "Open its retained timeline for the underlying transitions and quantities.",
        "Pagination and grouped history remain available as the number of records grows."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/assistant-activity.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html#activity",
      "capturedAt": "2026-11-08T21:47:10.505Z"
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
      "image": "../../assets/northstar/live-20261108/ask-northstar.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html#ask",
      "capturedAt": "2026-11-08T21:47:10.673Z"
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
      "detail": "The current Ask Northstar screen reports that the assistant is available. Supporting records belong to the selected six-product workspace. No AI question or action-preparation request was submitted to create these captures.",
      "key": true,
      "image": "../../assets/northstar/live-20261108/assistant-evidence.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html#ask",
      "capturedAt": "2026-11-08T21:47:22.470Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-boundaries",
      "title": "Keep evidence and approval explicit",
      "summary": "The current Sources and approval disclosure explains what the assistant can know and what still needs verification.",
      "points": [
        "Answers use the selected workspace; missing sources are identified as unavailable.",
        "A saved purchase does not prove supplier placement, and delivery does not prove readiness for sale.",
        "Calculations and approved changes are retained by the application rather than asserted by a chat answer."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/assistant-boundaries.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/assistant.html#ask",
      "capturedAt": "2026-11-08T21:47:21.738Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-offline",
      "title": "Keep external connections distinct from AI",
      "summary": "The current Data & connections view distinguishes operational files, simulated partner feeds, unsent drafts, and an unconnected upstream system.",
      "points": [
        "The AI interface reports available; that does not connect suppliers, carriers, warehouses, or Amazon.",
        "Amazon tracking separately reports not connected in Settings.",
        "The portfolio does not fabricate an outage or successful external API call."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/connections.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html?view=sources",
      "capturedAt": "2026-11-08T21:49:13.748Z"
    },
    {
      "chapter": "assistant",
      "id": "assistant-settings",
      "title": "Manage planning and notification preferences",
      "summary": "The current Planning panel owns sourcing, lead time, coverage, and the explicit choice to seed vendor defaults for future workspaces.",
      "points": [
        "This workspace retains 14 supplier days and a 60-day coverage target.",
        "Notification preferences are managed separately; saving them does not send an email or text.",
        "The capture includes only the Planning panel, excluding private notification addresses and phone numbers."
      ],
      "detail": "Vendor identity, commercial terms, minimums, and pack increments live on Vendor & products. The current app has no simulation checkbox in this business-settings form.",
      "key": false,
      "image": "../../assets/northstar/live-20261108/assistant-settings.jpg",
      "note": "Current BNT app, November 8, 2026. The planning section is shown with private notification contact fields excluded. No settings were saved.",
      "sourcePath": "/ordering/assistant.html#settings",
      "capturedAt": "2026-11-08T21:59:35.193319+00:00"
    },
    {
      "chapter": "assistant",
      "id": "planning-stages",
      "title": "Separate supplier and logistics timing",
      "summary": "Newer sourcing profiles distinguish supplier lead time, dispatch, shipping, inspection, receiving, and the resulting coverage target.",
      "points": [
        "The current profile has 14 supplier calendar days and 3 dispatch business days.",
        "Shipping is 14 calendar days, inspection is 2 business days, and additional Amazon receiving is 7 calendar days.",
        "The app derives 40 calendar days overall and 60 days of coverage without treating a business day as a calendar day."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/planning-stages.jpg",
      "note": "Current BNT app, November 8, 2026. The planning section is shown with private notification contact fields excluded. No settings were saved.",
      "sourcePath": "/ordering/assistant.html#settings",
      "capturedAt": "2026-11-08T21:59:35.193319+00:00"
    },
    {
      "chapter": "assistant",
      "id": "vendor-settings",
      "title": "Maintain vendor identity and commercial terms",
      "summary": "Vendor & products owns vendor identity/reference, estimated or confirmed terms, purchasing minimums, and pack increments.",
      "points": [
        "Conkly is the vendor shown in the actual selected workspace.",
        "Estimated terms are distinct from confirmed terms backed by a supplier reference.",
        "Updating preferred-vendor defaults is explicit and does not rewrite existing approved orders."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/live-20261108/vendor-settings.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/vendor.html",
      "capturedAt": "2026-11-08T21:48:17.448Z"
    },
    {
      "chapter": "assistant",
      "id": "vendor-minimums",
      "title": "Maintain minimums and packing with the vendor",
      "summary": "Minimums and packing are part of Vendor & products, separate from everyday assistant planning settings.",
      "points": [
        "Review group and SKU minimums plus order increments before purchasing.",
        "Supplier terms remain estimated until a quote or availability reference confirms them.",
        "Saving vendor defaults for new workspaces is explicit; this capture does not save changes."
      ],
      "detail": "",
      "key": true,
      "image": "../../assets/northstar/live-20261108/vendor-minimums.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/vendor.html",
      "capturedAt": "2026-11-08T21:48:17.864Z"
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
      "image": "../../assets/northstar/live-20261108/vendor-products.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/vendor.html",
      "capturedAt": "2026-11-08T21:48:18.281Z"
    },
    {
      "chapter": "data",
      "id": "datasets",
      "title": "Keep separate datasets and histories",
      "summary": "Each dataset retains its own opening files, plans, approved packages, movements, and working balances.",
      "points": [
        "The CONKLY starter remains selected, with its files, order, and movements retained.",
        "Switching changes the browser context; other open pages must reload.",
        "Creating a new dataset differs from importing an updated report into an existing dataset."
      ],
      "detail": "",
      "key": false,
      "image": "../../assets/northstar/live-20261108/datasets.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/datasets.html",
      "capturedAt": "2026-11-08T21:48:38.889Z"
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
      "detail": "The preview uses the selected dataset’s retained opening files and shows six products, 24 positions, zero opening stock, and zero opening on order. It also exposes current vendor defaults, which differ from this workspace’s saved settings. Create dataset was not confirmed.",
      "key": false,
      "image": "../../assets/northstar/live-20261108/dataset-preview.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/datasets.html",
      "capturedAt": "2026-11-08T21:48:45.718Z"
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
      "image": "../../assets/northstar/live-20261108/reports.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/reports.html",
      "capturedAt": "2026-11-08T21:49:03.185Z"
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
      "image": "../../assets/northstar/live-20261108/imports.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/reports.html#import-workspace",
      "capturedAt": "2026-11-08T21:49:03.383Z"
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
      "image": "../../assets/northstar/live-20261108/report-calculations.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:34.408Z"
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
      "image": "../../assets/northstar/live-20261108/reconciliation-handoff.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html",
      "capturedAt": "2026-11-08T21:46:34.855Z"
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
      "image": "../../assets/northstar/live-20261108/operational-history.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html?view=history",
      "capturedAt": "2026-11-08T21:49:04.165Z"
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
      "image": "../../assets/northstar/live-20261108/connections.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/operations.html?view=sources",
      "capturedAt": "2026-11-08T21:49:13.748Z"
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
      "image": "../../assets/northstar/live-20261108/manual-receipt.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/receipts.html",
      "capturedAt": "2026-11-08T21:49:35.417Z"
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
      "image": "../../assets/northstar/live-20261108/sage-evaluation.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/ordering/?mode=sage",
      "capturedAt": "2026-11-08T21:49:28.384Z"
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
      "image": "../../assets/northstar/live-20261108/context-help.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. Current CONKLY workspace with temporary records; no order, inventory change, or AI message submitted for capture.",
      "sourcePath": "/index.html#guide",
      "capturedAt": "2026-11-08T21:43:55.001Z"
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
      "image": "../../assets/northstar/live-20261108/supplier-performance.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. This is the app’s separately labeled legacy synthetic network example, not the CONKLY operating records.",
      "sourcePath": "/index.html#suppliers",
      "capturedAt": "2026-11-08T21:49:36.516Z"
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
      "image": "../../assets/northstar/live-20261108/amazon-health.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. This is the app’s separately labeled legacy synthetic network example, not the CONKLY operating records.",
      "sourcePath": "/index.html#amazon",
      "capturedAt": "2026-11-08T21:49:37.067Z"
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
      "image": "../../assets/northstar/live-20261108/returns-quality.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. This is the app’s separately labeled legacy synthetic network example, not the CONKLY operating records.",
      "sourcePath": "/index.html#returns",
      "capturedAt": "2026-11-08T21:49:37.702Z"
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
      "image": "../../assets/northstar/live-20261108/growth-scenarios.jpg",
      "note": "Captured directly from the running Northstar app, November 8, 2026. This is the app’s separately labeled legacy synthetic network example, not the CONKLY operating records.",
      "sourcePath": "/index.html#scenario",
      "capturedAt": "2026-11-08T21:49:38.183Z"
    }
  ],
  "legacy": [
    "assistant-overview",
    "assistant-batch",
    "assistant-activity",
    "ask-northstar",
    "planning-stages",
    "vendor-products"
  ],
  "source": {
    "label": "Current BNT development app",
    "capturedDate": "2026-11-08",
    "dataset": "CONKLY starter - 80 individual bands",
    "products": 6,
    "stock": 80,
    "onOrder": 0,
    "readyForSale": 80
  }
};
