# Supermarket POS — Retail Management Prototype

Supermarket POS is an interactive, frontend-only demonstration for a mini supermarket and general retail shop. It is intended to help a client decide which workflows and interfaces they want before a production system is commissioned.

## Run locally

1. Extract `Supermarket_POS_Prototype.zip`.
2. Open the extracted `duka-flow-pos` folder.
3. Double-click `index.html` to open the POS dashboard in a modern browser.
4. Use **Preview storefront** or open `storefront.html` to see the public-facing shop preview.

No installation, backend, database, npm, or build step is required. Core features use local HTML, CSS, and JavaScript. Some browsers restrict certain local-file features; if so, use a basic static local web server such as VS Code Live Server, but no backend application is needed.

## Included demonstration modules

- Dashboard and sample charts
- Point of Sale with cart, simulated barcode entry, checkout validation, and print-friendly receipt
- Product catalogue with add/edit/delete, search, filters, and CSV export
- Inventory adjustments and stock movement history
- Categories, suppliers, and customers
- Purchases and stock receiving
- Sales history and transaction details
- Promotions and a separate customer-facing storefront preview
- Reports and CSV export
- Local business settings

## Sample data and persistence

The prototype begins with 35 sample products, 8 categories, 6 fictional suppliers, 12 fictional customers, 20 historical transactions, 8 purchase records, and 5 promotions. Demo changes are stored in the browser's `localStorage` when available. The sidebar reset button restores the original data in the POS dashboard.

The storefront reads the same browser-local demo state when it is served from the same browser origin. If the two pages are opened as separate `file://` URLs, browsers may isolate their local storage; use a static local server (for example, VS Code Live Server) to preview both pages with shared local data.

## Important limitations

- No backend, database, real authentication, or multi-user synchronization.
- No real payment processing, orders, customer accounts, or supplier communication.
- Barcode entry is simulated by typing a sample barcode and pressing Enter; there is no camera or hardware integration.
- All prices, stock levels, sales, suppliers, customer details, and reports are demonstration data.
- Profit and valuation figures are estimates and are not accounting records.
- The storefront's “Place demo order” action does not submit an actual order.

A production system would require requirements gathering, a backend/database, secure access controls, backups, validation, payment integration if needed, and appropriate testing.


## Latest visual updates

- Product imagery uses real external Unsplash photography in the storefront, POS, inventory, catalogue and promotion previews. There are no AI-generated product or profile images in this package. Images require an internet connection; an alternate grocery photo is used if a selected photo fails to load.
- The Promotions & Advertising navigation uses an upward-trend symbol rather than the previous star.
- Reports now include a seven-day sales bar chart, category comparison bars, and a payment-method doughnut chart, alongside the tables and CSV export.
- M-Pesa checkout remains a browser prompt/alert preview only. It does not send a real STK Push or charge money.
