# CLAUDE.md — CA Primary 2026 Candidate Comparison

## Project overview

Static HTML/CSS/JS app (no build step) deployed to Cloudflare Pages. Compares CA statewide primary candidates on key issues. Auto-deploys on push to `main` of `jcvarietals/candidate-comparison`.

Local dev: `python3 -m http.server 8081` → `http://localhost:8081`
ES modules require HTTP — `file://` won't work.

---

## Key files

- `data.js` — all candidate data, issues, citations, positions, and the `RACES` export
- `app.js` — all rendering and interaction logic; reads from `RACES` dynamically
- `index.html` — static shell, no logic
- `style.css` — all styles

---

## Adding data

### New candidate to an existing race
1. Append to `[RACE]_CANDIDATES` array in `data.js`
2. Add citation keys to `[RACE]_CITATIONS`
3. Add candidate key to `[RACE]_POSITIONS` with one entry per issue (use the race's issue ids)

### New race
1. Define `[RACE]_CANDIDATES`, `[RACE]_ISSUES`, `[RACE]_CITATIONS`, `[RACE]_POSITIONS`
2. Add entry to `RACES` export: `{ id, label, candidates, issues, citations, positions, contextNote }`

### Deactivating a candidate
Set `active: false` — they disappear from the UI but data is preserved.

---

## Architecture notes

- `state = { race, selectedCandidateIds: Set, selectedIssueIds: Set, picks: {} }` — single source of truth
- `picks` is `issueId → candidateId` (one pick per issue, last click wins)
- `getRace()` returns `RACES[state.race]` — all data access is race-scoped through this
- `renderAll()` re-renders everything from state; call it after any state change
- URL params: `race`, `c` (comma-separated candidate ids), `i` (issue ids, omitted if all selected), `p` (`issueId:candidateId` pairs)
- Race switch resets all state — issue sets differ per race

## CSS gotcha
Do NOT add `overflow: hidden` to `.comparison-table` or any ancestor — it breaks `position: sticky` on the header row.
