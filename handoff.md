# Handoff: CA Primary 2026 Candidate Comparison

## What this is

A static web app for comparing CA statewide candidates on key issues ahead of the June 2026 primary. Users select candidates and issues, click cells to register preferences, and see a running "best match" score. Shareable via URL.

Live on Cloudflare Pages (auto-deploys on push to `main` of `jcvarietals/candidate-comparison`).

---

## Races

| Race | Active candidates |
|------|-----------------|
| Governor | 8 (Hilton, Bianco, Steyer, Becerra, Porter, Mahan, Villaraigosa, Thurmond) |
| Lt. Governor | 6 (Fryday, Ma, Tubbs, Romero, Kellman, Oliver Ma) |
| Ins. Commissioner | 7 (Allen, Bradford, Kim, Korsgaden, Wolff, Farren, Howell) |
| Attorney General | 3 (Bonta, Gates, Mikels) |

Two Governor candidates (Swalwell, Yee) are in `data.js` with `active: false` — they won't appear in the UI but their data is preserved.

---

## File map

| File | Purpose |
|------|---------|
| `index.html` | App shell — no logic, just DOM structure |
| `style.css` | All styles |
| `app.js` | All rendering and interaction logic (~605 lines) |
| `data.js` | All candidate data, positions, and citations |

Source files for incremental data additions (now merged into `data.js`):
- `LT_GOV_data_additions.js`
- `IC_and_AG_data_additions.js`
- `INCREMENTAL_LG_IC_additions.js`

---

## How `data.js` is structured

Four races, each following the same pattern:

```js
const [RACE]_CANDIDATES = [ { id, name, title, party, lane, pollingPct, active }, ... ]
const [RACE]_ISSUES     = [ { id, label, group }, ... ]
const [RACE]_CITATIONS  = { key: { source, title, url, date }, ... }
const [RACE]_POSITIONS  = { candidateId: { issueId: { text, citations: [keys] }, ... }, ... }
```

All four are registered in the `RACES` export at the bottom:

```js
export const RACES = {
  governor:  { id, label, candidates, issues, citations, positions, contextNote },
  ltgov:     { ... },
  inscomm:   { ... },
  ag:        { ... },
};
```

Governor and Lt. Governor share the same 11-issue set. Insurance Commissioner and Attorney General each have their own 10 office-specific issues (prefixed `ins_*` and `ag_*`).

---

## How `app.js` works

Single `state` object:
```js
{ race: 'governor', selectedCandidateIds: Set, selectedIssueIds: Set, picks: {} }
```

`picks` maps `issueId → candidateId` (one pick per issue).

Key functions:
- `getRace()` — returns `RACES[state.race]`, used everywhere to scope data
- `renderAll()` — re-renders everything from state (tabs, candidate panel, issue panel, matrix, score bar, results)
- `syncUrl()` — encodes `race`, `c` (candidate ids), `i` (issue ids), `p` (picks) into `URLSearchParams`
- `loadFromUrl()` — reads those params back on init
- `handleRaceSwitch()` — resets all state except `race`, then `renderAll()`

---

## Adding a new race

1. Add `[RACE]_CANDIDATES`, `[RACE]_ISSUES`, `[RACE]_CITATIONS`, `[RACE]_POSITIONS` to `data.js`
2. Add an entry to the `RACES` export with `id`, `label`, `candidates`, `issues`, `citations`, `positions`, `contextNote`
3. That's it — `app.js` reads from `RACES` dynamically

## Adding candidates to an existing race

1. Append the candidate object to the relevant `[RACE]_CANDIDATES` array
2. Add a key to `[RACE]_CITATIONS` for any new sources
3. Add a key to `[RACE]_POSITIONS` with one entry per issue (matching the race's issue ids)

## Deactivating a candidate

Set `active: false` on their entry in `[RACE]_CANDIDATES`. They won't appear in the UI; their data stays in the file.

---

## Running locally

ES modules require HTTP — can't open via `file://`.

```bash
python3 -m http.server 8081
# then open http://localhost:8081
```

---

## Known constraints / gotchas

- **`overflow: hidden` breaks sticky headers.** The comparison table must not have `overflow: hidden` or any ancestor with it — that property was removed to fix `position: sticky` on the header row.
- **No build step.** Plain HTML/CSS/JS. No npm, no bundler.
- **One pick per issue.** `picks` is a flat `issueId → candidateId` map. Clicking a cell for a different candidate on the same issue replaces the previous pick.
- **Race switch resets everything.** By design — issue sets differ across races.
- **URL sharing encodes only delta from defaults** — if all issues are selected (the default), the `i` param is omitted to keep URLs short.
