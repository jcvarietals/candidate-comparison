# CA Governor 2026: Find Your Match

Compare California governor candidates on 11 key issues and find your best match.

## Files
- `index.html` — app shell
- `style.css` — all styles
- `app.js` — rendering and interaction logic
- `data.js` — all candidate data, positions, and citations

## Running locally

This app uses ES modules (`import`/`export`), which require serving over HTTP — you can't open `index.html` directly via `file://`. Use any simple server:

```bash
# Python 3
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080`.

## Deploying to Cloudflare Pages

1. Push all files to a GitHub repo
2. Go to Cloudflare Pages → Create a project → Connect to GitHub repo
3. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
4. Save and deploy — auto-deploys on every push to `main`

App will be live at `<project-name>.pages.dev`.

## Updating data

Edit `data.js` to update polling percentages, positions, or citations. All data is static — no backend required.
