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

Two Governor candidates (Swalwell, Yee) are in `data.js` with `active: false` — data preserved, hidden from UI.

---

## File map

| File | Purpose |
|------|---------|
| `index.html` | App shell — no logic, just DOM structure |
| `style.css` | All styles |
| `app.js` | All rendering and interaction logic |
| `data.js` | All candidate data, short positions, citations, and `RACES` export |
| `positions_long.js` | Aggregator — imports all four long position files, exports as `POSITIONS_LONG` keyed by race id |
| `GOV_POSITIONS_LONG.js` | Long-form Governor positions |
| `LT_GOV_POSITIONS_LONG.js` | Long-form Lt. Governor positions |
| `IC_POSITIONS_LONG.js` | Long-form Insurance Commissioner positions |
| `AG_POSITIONS_LONG.js` | Long-form Attorney General positions |

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

### State

```js
const state = { race: 'governor', selectedCandidateIds: Set, selectedIssueIds: Set, picks: {} };
const raceStates = {}; // per-race saved state
```

`picks` maps `issueId → candidateId` (one pick per issue). `raceStates` saves and restores each race's full state when the user switches races — so switching away and back preserves all selections.

### Key functions

- `getRace()` — returns `RACES[state.race]`, used everywhere to scope data
- `saveRaceState(raceId)` / `restoreRaceState(raceId)` — persist selections across race switches
- `renderAll()` — re-renders everything from state
- `syncUrl()` — encodes current race into URL (used for "Share current race")
- `buildAllRacesUrl()` — encodes all races into one URL (used for "Share all races")
- `loadFromUrl()` — detects format (prefixed vs. unprefixed) and restores state on init
- `handleRaceSwitch()` — saves current state, switches race, restores saved state

### "See more" popup

Each matrix cell has an italic "See more" link. Clicking it calls `showLongPopup(issueId, candidateId)`, which on first call does `import('./positions_long.js')` (lazy, cached in `positionsLong`), then renders a fixed centered modal with the full position text and sources. Dismiss via ✕, backdrop click, or Escape.

---

## URL sharing

Two formats, both decodable by `loadFromUrl()`:

**Share current race:**
```
?race=governor&c=hilton,mahan&p=housing:hilton
```

**Share all races:**
```
?race=governor&gov_c=hilton,mahan&gov_p=housing:hilton&lg_c=fryday&ag_c=bonta
```

`RACE_PREFIX = { governor: 'gov', ltgov: 'lg', inscomm: 'ins', ag: 'ag' }` in `app.js`.

---

## Adding a new race

1. Add `[RACE]_CANDIDATES`, `[RACE]_ISSUES`, `[RACE]_CITATIONS`, `[RACE]_POSITIONS` to `data.js`
2. Add entry to the `RACES` export
3. Create `[RACE]_POSITIONS_LONG.js` and import/register it in `positions_long.js`
4. Add a `RACE_PREFIX` entry in `app.js`

## Adding candidates to an existing race

1. Append to `[RACE]_CANDIDATES` in `data.js`
2. Add citation keys to `[RACE]_CITATIONS`
3. Add candidate key to `[RACE]_POSITIONS` (one entry per issue)
4. Add candidate key to the matching `*_POSITIONS_LONG.js` (one `text_long` per issue)

## Deactivating a candidate

Set `active: false` in `[RACE]_CANDIDATES`. Hidden from UI; data preserved.

---

## Running locally

```bash
python3 -m http.server 8081
# open http://localhost:8081
```

ES modules require HTTP — `file://` won't work.

---

## Known constraints / gotchas

- **`overflow: hidden` breaks sticky headers.** Do not add it to `.comparison-table` or any ancestor.
- **Long position files must be committed.** They're lazy-loaded at runtime — if they're missing from the repo, "See more" silently fails on Cloudflare.
- **No build step.** Plain HTML/CSS/JS. No npm, no bundler.
- **One pick per issue.** `picks` is flat — clicking a different candidate on the same issue replaces the pick.
- **URL sharing encodes delta from defaults** — if all issues are selected (the default), the `i` param is omitted.
