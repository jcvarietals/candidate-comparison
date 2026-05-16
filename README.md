# CA Primary 2026: Find Your Match

Compare California statewide primary candidates on key issues and find your best match.

## Files
- `index.html` — app shell
- `style.css` — all styles
- `app.js` — rendering and interaction logic
- `data.js` — all candidate data, positions, and citations
- `positions_long.js` — aggregator for long-form position data (lazy-loaded)
- `GOV_POSITIONS_LONG.js`, `LT_GOV_POSITIONS_LONG.js`, `IC_POSITIONS_LONG.js`, `AG_POSITIONS_LONG.js` — long-form position text per race

## Running locally

This app uses ES modules (`import`/`export`), which require serving over HTTP — you can't open `index.html` directly via `file://`. Use any simple server:

```bash
# Python 3
python3 -m http.server 8081

# Node (npx)
npx serve .
```

Then open `http://localhost:8081`.

## Deploying to Cloudflare Pages

1. Push all files to a GitHub repo
2. Go to Cloudflare Pages → Create a project → Connect to GitHub repo
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
4. Save and deploy — auto-deploys on every push to `main`

## Updating data

Edit `data.js` to update polling percentages, short positions, or citations. Edit the `*_POSITIONS_LONG.js` files to update long-form position detail. All data is static — no backend required.
