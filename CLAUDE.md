# CLAUDE.md — CA Primary 2026 Candidate Comparison

## Project overview

Static HTML/CSS/JS app (no build step) deployed to Cloudflare Pages. Compares CA statewide primary candidates on key issues. Auto-deploys on push to `main` of `jcvarietals/candidate-comparison`.

Local dev: `python3 -m http.server 8081` → `http://localhost:8081`
ES modules require HTTP — `file://` won't work.

---

## Key files

- `data.js` — all candidate data, issues, citations, short positions, and the `RACES` export
- `app.js` — all rendering and interaction logic; reads from `RACES` dynamically
- `index.html` — static shell, no logic
- `style.css` — all styles
- `positions_long.js` — re-exports all four `*_POSITIONS_LONG.js` files as `POSITIONS_LONG[raceId][candidateId][issueId].text_long`; dynamically imported on first "See more" click
- `GOV_POSITIONS_LONG.js`, `LT_GOV_POSITIONS_LONG.js`, `IC_POSITIONS_LONG.js`, `AG_POSITIONS_LONG.js` — long-form position text; **must be committed to git** or the "See more" popup will silently fail on Cloudflare

---

## Adding data

### New candidate to an existing race
1. Append to `[RACE]_CANDIDATES` array in `data.js`
2. Add citation keys to `[RACE]_CITATIONS`
3. Add candidate key to `[RACE]_POSITIONS` with one entry per issue (use the race's issue ids)
4. Add candidate key to the matching `*_POSITIONS_LONG.js` file with `text_long` per issue

### New race
1. Define `[RACE]_CANDIDATES`, `[RACE]_ISSUES`, `[RACE]_CITATIONS`, `[RACE]_POSITIONS` in `data.js`
2. Add entry to `RACES` export: `{ id, label, candidates, issues, citations, positions, contextNote }`
3. Create `[RACE]_POSITIONS_LONG.js` with long-form text
4. Add a `RACE_PREFIX` entry in `app.js` (e.g. `myrace: 'mr'`) for URL encoding
5. Import and register it in `positions_long.js`

### Deactivating a candidate
Set `active: false` — they disappear from the UI but data is preserved.

---

## Architecture notes

- `state = { race, selectedCandidateIds: Set, selectedIssueIds: Set, picks: {} }` — single source of truth for the active race
- `raceStates = {}` — saves each race's state when switching away; restored on return
- `picks` is `issueId → candidateId` (one pick per issue, last click wins)
- `getRace()` returns `RACES[state.race]` — all data access is race-scoped through this
- `renderAll()` re-renders everything from state; call it after any state change
- Long-form data is loaded via `import('./positions_long.js')` on first "See more" click, then cached in `positionsLong`

## URL params

Two share formats, both backward-compatible on load:

**Share current race** (unprefixed):
`?race=governor&c=hilton,mahan&i=housing,economy&p=housing:hilton`

**Share all races** (prefixed per race):
`?race=governor&gov_c=hilton,mahan&gov_p=housing:hilton&lg_c=fryday&ag_c=bonta`

`RACE_PREFIX` in `app.js` maps race ids to URL prefixes: `{ governor: 'gov', ltgov: 'lg', inscomm: 'ins', ag: 'ag' }`.

## CSS gotcha
Do NOT add `overflow: hidden` to `.comparison-table` or any ancestor — it breaks `position: sticky` on the header row.
