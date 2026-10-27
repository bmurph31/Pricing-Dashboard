# Golf AI · Competitive Pricing Intelligence

Mission 2 static, responsive, dark-mode business intelligence application using the **actual Mission 1 Golf AI research (27 October 2026)**.

## Features
- Executive KPIs and representative competitor prices
- Searchable, sortable, expandable competitor profiles and multi-select comparison
- Annual price comparison, annual price ranges, distributions and searchable offer register
- Interactive annual Price Position Explorer: precision slider, numeric input, three presets, live comparison and distribution-based classification
- Research-grounded strategic opportunities and preliminary recommendations
- Complete clickable research source register and explicit limitations

## Data
`data/competitor_data.json` holds the research data separate from the application. It contains 4 competitors and 16 pricing offers. The 3 app-only representative annual prices are $69.99, $79.99 and $99.99, average $83.32, median $79.99. Arccos ($199.99/year plus hardware) is an *indirect* benchmark and not included in app-only statistics.

All figures are **snapshots from October 27, 2026**, not live offers. No regular prices, promotional prices or availability statuses were recorded; do not infer them. Golfshot conflicting monthly values were excluded from Mission 1 research and remain excluded here.

## Deploy to GitHub Pages
This project intentionally has **no npm dependencies**, build step, external API, server, API keys, or database. `index.html`, `styles.css`, `app.js`, and `data/competitor_data.json` are the deployable production assets.

1. Place the files at the **repository root** of `bmurph31/Pricing-Dashboard`, keeping the `data/` directory.
2. Commit to the repository's default `main` branch.
3. In GitHub **Settings → Pages → Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and save.
4. Visit `https://bmurph31.github.io/Pricing-Dashboard/` once GitHub Pages reports the deployment is complete.

For local viewing, run `python -m http.server 8000` from this folder and open `http://localhost:8000/`. Opening `index.html` directly with a `file://` URL cannot reliably load the separated JSON dataset.

## Methodology
App-only metrics use one research-designated, verified, paid annual subscription from each of 18Birdies, Golfshot and Hole19. Arccos hardware-linked memberships are outside that population. Annual range charts include paid annual tiers, **not** free, monthly, weekly, or six-month offers. Explorer classification uses actual sample min/median/max, not hypothetical customer reactions.

## Limitations
The application does not perform demand forecasting, willingness-to-pay estimation, elasticity, revenue, profit, or cost analysis. Venture features are product proposals, not demonstrated capabilities. Some records lack availability, compare-at, regular, and promotional price fields. Source URLs remain available in the Sources section.
