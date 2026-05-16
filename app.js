import { RACES } from './data.js';

// ── Long positions (lazy-loaded on first "See more" click) ─────────────────
let positionsLong = null;

// ── Mobile bottom sheet ────────────────────────────────────────────────────
let mobileSheetTarget = null;

function openMobileSheet(target) {
  const sheet = document.getElementById('mobile-sheet');
  const content = document.getElementById('mobile-sheet-content');

  const titles = { candidates: 'Candidates', issues: 'Issues', race: 'Select Race' };
  document.getElementById('mobile-sheet-title').textContent = titles[target] ?? target;

  // Move the actual DOM nodes into the sheet so existing event listeners work
  content.innerHTML = '';
  if (target === 'candidates') {
    content.appendChild(document.getElementById('max-warning'));
    content.appendChild(document.getElementById('candidate-list'));
  } else if (target === 'issues') {
    content.appendChild(document.getElementById('issue-list'));
  } else if (target === 'race') {
    content.appendChild(document.getElementById('race-tabs'));
    content.appendChild(document.querySelector('.race-switch-note'));
  }

  mobileSheetTarget = target;
  sheet.classList.remove('hidden');
  document.getElementById('mobile-candidates-btn').classList.toggle('active', target === 'candidates');
  document.getElementById('mobile-issues-btn').classList.toggle('active', target === 'issues');
  document.getElementById('mobile-race-btn').classList.toggle('active', target === 'race');
}

function closeMobileSheet() {
  if (!mobileSheetTarget) return;
  const sheet = document.getElementById('mobile-sheet');

  // Move nodes back to their original home in the sidebar
  const candidatesPanel = document.querySelector('.sidebar .panel:first-child');
  const issuesPanel = document.querySelector('.sidebar .panel:last-child');
  const raceStripInner = document.querySelector('.race-strip-inner');
  if (mobileSheetTarget === 'candidates') {
    candidatesPanel.appendChild(document.getElementById('max-warning'));
    candidatesPanel.appendChild(document.getElementById('candidate-list'));
  } else if (mobileSheetTarget === 'issues') {
    issuesPanel.appendChild(document.getElementById('issue-list'));
  } else if (mobileSheetTarget === 'race') {
    raceStripInner.appendChild(document.getElementById('race-tabs'));
    raceStripInner.appendChild(document.querySelector('.race-switch-note'));
  }

  mobileSheetTarget = null;
  sheet.classList.add('hidden');
  document.getElementById('mobile-candidates-btn').classList.remove('active');
  document.getElementById('mobile-issues-btn').classList.remove('active');
  document.getElementById('mobile-race-btn').classList.remove('active');
}

// ── Per-race state (saved when switching races) ────────────────────────────
const raceStates = {};

const RACE_PREFIX = { governor: 'gov', ltgov: 'lg', inscomm: 'ins', ag: 'ag' };

// ── State ──────────────────────────────────────────────────────────────────

const state = {
  race: 'governor',
  selectedCandidateIds: new Set(),
  selectedIssueIds: new Set(),
  picks: {},
};

// ── Race helpers ───────────────────────────────────────────────────────────

function getRace() {
  return RACES[state.race];
}

function allIssueIds() {
  return getRace().issues.map(i => i.id);
}

// ── Candidate / issue helpers ──────────────────────────────────────────────

function getSelectedCandidates() {
  return getRace().candidates.filter(c => state.selectedCandidateIds.has(c.id));
}

function getSelectedIssues() {
  return getRace().issues.filter(i => state.selectedIssueIds.has(i.id));
}

function getActiveCandidateCount() {
  return [...state.selectedCandidateIds].filter(id => {
    const c = getRace().candidates.find(x => x.id === id);
    return c && c.active;
  }).length;
}

function getPicksForCandidate(candidateId) {
  return getSelectedIssues().filter(i => state.picks[i.id] === candidateId).length;
}

function countPickedIssues() {
  return getSelectedIssues().filter(i =>
    state.picks[i.id] && state.selectedCandidateIds.has(state.picks[i.id])
  ).length;
}

function allIssuesPicked() {
  const visible = getSelectedIssues();
  return visible.length > 0 && visible.every(i =>
    state.picks[i.id] && state.selectedCandidateIds.has(state.picks[i.id])
  );
}

function saveRaceState(raceId) {
  raceStates[raceId] = {
    selectedCandidateIds: new Set(state.selectedCandidateIds),
    selectedIssueIds: new Set(state.selectedIssueIds),
    picks: { ...state.picks },
  };
}

function restoreRaceState(raceId) {
  const saved = raceStates[raceId];
  if (saved) {
    state.selectedCandidateIds = new Set(saved.selectedCandidateIds);
    state.selectedIssueIds = new Set(saved.selectedIssueIds);
    state.picks = { ...saved.picks };
  } else {
    state.selectedCandidateIds = new Set();
    state.selectedIssueIds = new Set(RACES[raceId].issues.map(i => i.id));
    state.picks = {};
  }
}

// ── Race tabs ──────────────────────────────────────────────────────────────

function renderRaceTabs() {
  const html = Object.values(RACES).map(race => {
    const count = race.candidates.filter(c => c.active).length;
    const active = state.race === race.id;
    return `
      <button class="race-tab${active ? ' active' : ''}" data-race="${race.id}">
        <span class="race-tab-name">${race.label}</span>
        <span class="race-tab-meta">${count} candidates · June 2026</span>
      </button>`;
  }).join('');
  document.getElementById('race-tabs').innerHTML = html;

  const raceBtn = document.getElementById('mobile-race-btn');
  if (raceBtn) raceBtn.textContent = RACES[state.race].label;
}

// ── Context note ───────────────────────────────────────────────────────────

function renderContextNote() {
  const note = getRace().contextNote;
  const el = document.getElementById('context-note');
  if (note) {
    const isDesktop = window.innerWidth > 768;
    el.innerHTML = `
      <details class="context-note-details"${isDesktop ? ' open' : ''}>
        <summary class="context-note-summary">About this race</summary>
        <span class="context-note-body">${escapeHtml(note)}</span>
      </details>`;
    el.classList.remove('hidden');
  } else {
    el.innerHTML = '';
    el.classList.add('hidden');
  }
}

// ── Candidate panel ────────────────────────────────────────────────────────

function renderCandidatePanel() {
  const atMax = getActiveCandidateCount() >= 8;
  document.getElementById('max-warning').classList.toggle('hidden', !atMax);

  const html = getRace().candidates.map(c => {
    const checked = state.selectedCandidateIds.has(c.id);
    const suspended = !c.active;
    const disabled = suspended || (atMax && !checked);
    const partyClass = c.party.toLowerCase();
    const laneClass = c.lane.toLowerCase().replace(/ /g, '-');
    return `
      <label class="candidate-row${suspended ? ' suspended' : ''}" for="cand-${c.id}">
        <input type="checkbox" id="cand-${c.id}" data-candidate="${c.id}"
          ${checked ? 'checked' : ''} ${disabled ? 'disabled' : ''}>
        <div class="candidate-info">
          <div class="candidate-name-row">
            <span class="cand-name">${c.name}</span>
            ${suspended ? `<span class="badge suspended-badge">${c.suspendedLabel}</span>` : ''}
          </div>
          <div class="cand-title">${c.title}</div>
          <div class="cand-meta">
            <span class="badge party-badge ${partyClass}">${c.party}</span>
            <span class="badge lane-badge ${laneClass}">${c.lane}</span>
            ${c.pollingPct !== null ? `<span class="polling-pct">${c.pollingPct}%</span>` : ''}
          </div>
        </div>
      </label>`;
  }).join('');

  document.getElementById('candidate-list').innerHTML = html;
}

// ── Issue panel ────────────────────────────────────────────────────────────

function renderIssuePanel() {
  const groups = [...new Set(getRace().issues.map(i => i.group))];
  const html = groups.map(group => {
    const rows = getRace().issues
      .filter(i => i.group === group)
      .map(issue => `
        <label class="issue-row" for="issue-${issue.id}">
          <input type="checkbox" id="issue-${issue.id}" data-issue="${issue.id}"
            ${state.selectedIssueIds.has(issue.id) ? 'checked' : ''}>
          <label for="issue-${issue.id}">${issue.label}</label>
        </label>`).join('');
    return `<div class="issue-group-label">${group}</div>${rows}`;
  }).join('');
  document.getElementById('issue-list').innerHTML = html;
}

// ── Matrix ─────────────────────────────────────────────────────────────────

function buildCiteHtml(citations) {
  return citations.map((cid, idx) =>
    `<sup class="cite" data-cite="${cid}">${idx + 1}</sup>`
  ).join('');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderMatrix() {
  const candidates = getSelectedCandidates();
  const issues = getSelectedIssues();
  const container = document.getElementById('matrix-container');

  if (candidates.length < 1) {
    container.innerHTML = `<p class="matrix-empty">Select at least 1 candidate to view positions.</p>`;
    return;
  }
  if (issues.length === 0) {
    container.innerHTML = `<p class="matrix-empty">Select at least one issue to compare.</p>`;
    return;
  }

  let html = `<table class="comparison-table"><thead><tr><th class="corner-cell">Issue</th>`;

  for (const c of candidates) {
    const partyClass = c.party.toLowerCase();
    const laneClass = c.lane.toLowerCase().replace(/ /g, '-');
    html += `
      <th>
        <div class="candidate-header-inner">
          <span class="cand-header-name">${c.name}</span>
          <span class="cand-header-title">${c.title}</span>
          <div class="cand-header-meta">
            <span class="badge party-badge ${partyClass}">${c.party}</span>
            <span class="badge lane-badge ${laneClass}">${c.lane}</span>
            ${c.pollingPct !== null ? `<span class="polling-pct">${c.pollingPct}%</span>` : ''}
          </div>
        </div>
      </th>`;
  }

  html += `</tr></thead><tbody>`;

  for (const issue of issues) {
    html += `<tr><td class="issue-label">${issue.label}</td>`;
    for (const c of candidates) {
      const pos = getRace().positions[c.id]?.[issue.id];
      const isPicked = state.picks[issue.id] === c.id;
      const cls = `position-cell${isPicked ? ' selected' : ''}`;
      if (pos) {
        html += `
          <td class="${cls}" data-issue="${issue.id}" data-candidate="${c.id}">
            ${isPicked ? '<span class="checkmark">✓</span>' : ''}
            <p class="cell-text">${escapeHtml(pos.text)}${buildCiteHtml(pos.citations)}</p>
            <button class="see-more-btn" data-issue="${issue.id}" data-candidate="${c.id}"><em>See more</em></button>
          </td>`;
      } else {
        html += `
          <td class="${cls} no-data" data-issue="${issue.id}" data-candidate="${c.id}">
            <p class="no-position">No data</p>
          </td>`;
      }
    }
    html += `</tr>`;
  }

  html += `</tbody></table>`;
  container.innerHTML = html;
}

// ── Score bar ──────────────────────────────────────────────────────────────

function renderScoreBar() {
  const candidates = getSelectedCandidates();
  const totalIssues = getSelectedIssues().length;
  const pickedCount = countPickedIssues();

  const cardsHtml = candidates.map(c => {
    const picks = getPicksForCandidate(c.id);
    const pct = totalIssues > 0 ? Math.round((picks / totalIssues) * 100) : 0;
    const shortName = c.name.split(' ').pop();
    return `
      <div class="score-card" data-candidate="${c.id}">
        <div class="score-card-name">${shortName} — ${picks}</div>
        <div class="score-progress-track">
          <div class="score-progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>`;
  }).join('');

  const actionsHtml = allIssuesPicked()
    ? `<button id="see-results-btn" class="btn-primary">See my results</button>`
    : '';

  document.getElementById('score-bar').innerHTML = `
    <div class="score-bar-inner">
      <span class="score-summary">${pickedCount} of ${totalIssues} decided</span>
      <div class="score-cards">${cardsHtml}</div>
      <div class="score-bar-actions">${actionsHtml}</div>
    </div>`;
}

// ── Results ────────────────────────────────────────────────────────────────

function renderResults() {
  const container = document.getElementById('results-container');
  if (!allIssuesPicked()) { container.innerHTML = ''; return; }

  const candidates = getSelectedCandidates();
  const total = getSelectedIssues().length;
  const ranked = candidates
    .map(c => ({ candidate: c, picks: getPicksForCandidate(c.id) }))
    .sort((a, b) => b.picks - a.picks);

  const topScore = ranked[0]?.picks ?? 0;
  const isTied = ranked.filter(r => r.picks === topScore).length > 1;

  const itemsHtml = ranked.map(({ candidate: c, picks }, idx) => {
    const isTop = picks === topScore;
    const rankLabel = isTop ? (isTied ? 'Co-leader' : 'Your best match') : `#${idx + 1}`;
    return `
      <div class="result-item${isTop ? ' top-match' : ''}">
        <span class="result-rank${isTop ? '' : ' normal'}">${rankLabel}</span>
        <span class="result-name">${c.name}</span>
        <span class="result-score">${picks} of ${total}</span>
      </div>`;
  }).join('');

  container.innerHTML = `
    <div class="results-card">
      <h2>Your results</h2>
      <p class="results-subtitle">Based on ${total} issue${total !== 1 ? 's' : ''} — ranked by alignment with your picks.</p>
      ${itemsHtml}
      <div class="results-actions">
        <button id="reset-btn" class="btn-ghost">Reset picks</button>
      </div>
    </div>`;
}

// ── Citation popover ───────────────────────────────────────────────────────

function showCitationPopover(citeId, triggerEl) {
  const citation = getRace().citations[citeId];
  if (!citation) return;

  const popover = document.getElementById('citation-popover');
  popover.innerHTML = `
    <strong class="cite-source">${escapeHtml(citation.source)}</strong>
    <div class="cite-title">${escapeHtml(citation.title)}</div>
    <div class="cite-date">${escapeHtml(citation.date)}</div>
    <a class="cite-url" href="${citation.url}" target="_blank" rel="noopener noreferrer">Open source ↗</a>`;

  popover.style.visibility = 'hidden';
  popover.classList.remove('hidden');

  const ph = popover.offsetHeight;
  const pw = popover.offsetWidth;
  const rect = triggerEl.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let top = rect.bottom + 8;
  if (vh - rect.bottom < ph + 16) top = rect.top - ph - 8;
  let left = rect.left;
  if (left + pw > vw - 16) left = vw - pw - 16;
  if (left < 16) left = 16;

  popover.style.top = `${top}px`;
  popover.style.left = `${left}px`;
  popover.style.visibility = 'visible';
}

function dismissPopover() {
  const popover = document.getElementById('citation-popover');
  popover.classList.add('hidden');
  popover.style.visibility = '';
}

// ── Score card popup ───────────────────────────────────────────────────────

function showScoreCardPopup(candidateId, triggerEl) {
  const candidate = getRace().candidates.find(c => c.id === candidateId);
  if (!candidate) return;

  const pickedIssues = getSelectedIssues().filter(i => state.picks[i.id] === candidateId);
  const issueRows = pickedIssues.length
    ? pickedIssues.map(i => `
        <div class="score-popup-issue">
          <span class="score-popup-check">✓</span>
          ${escapeHtml(i.label)}
        </div>`).join('')
    : `<div class="score-popup-empty">No issues selected yet</div>`;

  const popup = document.getElementById('score-card-popup');
  popup.innerHTML = `
    <div class="score-popup-header">${escapeHtml(candidate.name)}</div>
    ${issueRows}`;

  popup.style.visibility = 'hidden';
  popup.classList.remove('hidden');

  const ph = popup.offsetHeight;
  const pw = popup.offsetWidth;
  const rect = triggerEl.getBoundingClientRect();
  const vw = window.innerWidth;

  let left = rect.left;
  if (left + pw > vw - 16) left = vw - pw - 16;
  if (left < 16) left = 16;

  popup.style.top = `${rect.top - ph - 8}px`;
  popup.style.left = `${left}px`;
  popup.style.visibility = 'visible';
}

function dismissScoreCardPopup() {
  const popup = document.getElementById('score-card-popup');
  popup.classList.add('hidden');
  popup.style.visibility = '';
}

// ── Long-form popup ────────────────────────────────────────────────────────

async function showLongPopup(issueId, candidateId) {
  if (!positionsLong) {
    const mod = await import('./positions_long.js');
    positionsLong = mod.POSITIONS_LONG;
  }

  const race = getRace();
  const longData = positionsLong[state.race]?.[candidateId]?.[issueId];
  if (!longData) return;

  const candidate = race.candidates.find(c => c.id === candidateId);
  const issue = race.issues.find(i => i.id === issueId);
  const citesHtml = (longData.citations || []).map(key => {
    const cit = race.citations[key];
    if (!cit) return '';
    return `<div class="long-popup-cite">
      <span class="cite-source">${escapeHtml(cit.source)}</span>
      <span class="cite-title">${escapeHtml(cit.title)}</span>
      ${cit.url ? `<a class="cite-url" href="${escapeHtml(cit.url)}" target="_blank" rel="noopener">${escapeHtml(cit.url)}</a>` : ''}
      ${cit.date ? `<span class="cite-date">${escapeHtml(cit.date)}</span>` : ''}
    </div>`;
  }).join('');

  const paragraphs = longData.text_long
    .split(/\n\s*\n/)
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => `<p>${escapeHtml(p)}</p>`)
    .join('');

  const modal = document.getElementById('long-popup-overlay');
  modal.querySelector('.long-popup-candidate').textContent = candidate?.name ?? candidateId;
  modal.querySelector('.long-popup-issue').textContent = issue?.label ?? issueId;
  modal.querySelector('.long-popup-body').innerHTML = paragraphs;
  modal.querySelector('.long-popup-cites').innerHTML = citesHtml;
  modal.querySelector('.long-popup-scroll').scrollTop = 0;
  modal.classList.remove('hidden');
}

function dismissLongPopup() {
  document.getElementById('long-popup-overlay').classList.add('hidden');
}

// ── Header buttons ─────────────────────────────────────────────────────────

function updateHeaderButtons() {
  document.getElementById('reset-all-btn').disabled = Object.keys(state.picks).length === 0;
}

// ── URL state ──────────────────────────────────────────────────────────────

function syncUrl() {
  const params = new URLSearchParams();

  if (state.race !== 'governor') params.set('race', state.race);

  if (state.selectedCandidateIds.size > 0) {
    params.set('c', [...state.selectedCandidateIds].join(','));
  }

  const allIds = allIssueIds();
  if (state.selectedIssueIds.size < allIds.length) {
    params.set('i', [...state.selectedIssueIds].join(','));
  }

  const pickEntries = Object.entries(state.picks).filter(([issueId, candidateId]) =>
    state.selectedIssueIds.has(issueId) && state.selectedCandidateIds.has(candidateId)
  );
  if (pickEntries.length > 0) {
    params.set('p', pickEntries.map(([i, c]) => `${i}:${c}`).join(','));
  }

  const query = params.toString();
  history.replaceState(null, '', query ? `${location.pathname}?${query}` : location.pathname);
}

function loadFromUrl() {
  const params = new URLSearchParams(location.search);

  const race = params.get('race');
  if (race && RACES[race]) state.race = race;

  const isAllRaces = [...params.keys()].some(k => /_c$|_p$|_i$/.test(k));

  if (isAllRaces) {
    for (const [raceId, raceData] of Object.entries(RACES)) {
      const prefix = RACE_PREFIX[raceId];
      const c = params.get(`${prefix}_c`);
      const i = params.get(`${prefix}_i`);
      const p = params.get(`${prefix}_p`);
      const validIds = raceData.candidates.filter(x => x.active).map(x => x.id);
      const allIds = raceData.issues.map(x => x.id);
      raceStates[raceId] = {
        selectedCandidateIds: c ? new Set(c.split(',').filter(id => validIds.includes(id)).slice(0, 8)) : new Set(),
        selectedIssueIds: i ? new Set(i.split(',').filter(id => allIds.includes(id))) : new Set(allIds),
        picks: {},
      };
      if (p) {
        p.split(',').forEach(pair => {
          const [issueId, candidateId] = pair.split(':');
          if (issueId && candidateId) raceStates[raceId].picks[issueId] = candidateId;
        });
      }
    }
    restoreRaceState(state.race);
  } else {
    const validCandidateIds = getRace().candidates.filter(c => c.active).map(c => c.id);
    const c = params.get('c');
    if (c) {
      const ids = c.split(',').filter(id => validCandidateIds.includes(id));
      state.selectedCandidateIds = new Set(ids.slice(0, 8));
    }
    const allIds = allIssueIds();
    const i = params.get('i');
    state.selectedIssueIds = i
      ? new Set(i.split(',').filter(id => allIds.includes(id)))
      : new Set(allIds);
    const p = params.get('p');
    if (p) {
      p.split(',').forEach(pair => {
        const [issueId, candidateId] = pair.split(':');
        if (issueId && candidateId) state.picks[issueId] = candidateId;
      });
    }
  }
}

function buildAllRacesUrl() {
  const params = new URLSearchParams();
  params.set('race', state.race);
  saveRaceState(state.race);

  for (const [raceId, raceData] of Object.entries(RACES)) {
    const rs = raceStates[raceId];
    if (!rs || (rs.selectedCandidateIds.size === 0 && Object.keys(rs.picks).length === 0)) continue;
    const prefix = RACE_PREFIX[raceId];
    if (rs.selectedCandidateIds.size > 0) {
      params.set(`${prefix}_c`, [...rs.selectedCandidateIds].join(','));
    }
    const allIds = raceData.issues.map(i => i.id);
    if (rs.selectedIssueIds.size < allIds.length) {
      params.set(`${prefix}_i`, [...rs.selectedIssueIds].join(','));
    }
    const pickEntries = Object.entries(rs.picks).filter(([issueId, candidateId]) =>
      rs.selectedIssueIds.has(issueId) && rs.selectedCandidateIds.has(candidateId)
    );
    if (pickEntries.length > 0) {
      params.set(`${prefix}_p`, pickEntries.map(([i, c]) => `${i}:${c}`).join(','));
    }
  }
  return `${location.pathname}?${params.toString()}`;
}

// ── Race switching ─────────────────────────────────────────────────────────

function handleRaceSwitch(raceId) {
  if (raceId === state.race) return;
  saveRaceState(state.race);
  state.race = raceId;
  restoreRaceState(raceId);
  closeMobileSheet();
  renderAll();
  syncUrl();
}

// ── Handlers ───────────────────────────────────────────────────────────────

function handleCandidateToggle(candidateId, checked) {
  const candidate = getRace().candidates.find(c => c.id === candidateId);
  if (!candidate || !candidate.active) return;
  if (checked) {
    if (getActiveCandidateCount() >= 8) return;
    state.selectedCandidateIds.add(candidateId);
  } else {
    state.selectedCandidateIds.delete(candidateId);
  }
  renderCandidatePanel();
  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
  syncUrl();
}

function handleIssueToggle(issueId, checked) {
  if (checked) state.selectedIssueIds.add(issueId);
  else state.selectedIssueIds.delete(issueId);
  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
  syncUrl();
}

function handleCellClick(issueId, candidateId) {
  if (!getRace().candidates.find(c => c.id === candidateId)) return;
  if (state.picks[issueId] === candidateId) delete state.picks[issueId];
  else state.picks[issueId] = candidateId;
  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
  syncUrl();
}

// ── Render all ─────────────────────────────────────────────────────────────

function renderAll() {
  renderRaceTabs();
  renderContextNote();
  renderCandidatePanel();
  renderIssuePanel();
  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
}

// ── Event binding ──────────────────────────────────────────────────────────

function bindEvents() {
  // Race tabs
  document.getElementById('race-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.race-tab');
    if (tab) handleRaceSwitch(tab.dataset.race);
  });

  // Candidate checkboxes
  document.getElementById('candidate-list').addEventListener('change', e => {
    const cb = e.target;
    if (cb.type === 'checkbox' && cb.dataset.candidate) {
      handleCandidateToggle(cb.dataset.candidate, cb.checked);
    }
  });

  // Issue checkboxes
  document.getElementById('issue-list').addEventListener('change', e => {
    const cb = e.target;
    if (cb.type === 'checkbox' && cb.dataset.issue) {
      handleIssueToggle(cb.dataset.issue, cb.checked);
    }
  });

  // Matrix: cell clicks, citation clicks, and "See more"
  document.getElementById('matrix-container').addEventListener('click', e => {
    if (e.target.classList.contains('cite')) {
      e.stopPropagation();
      showCitationPopover(e.target.dataset.cite, e.target);
      return;
    }
    const seeMore = e.target.closest('.see-more-btn');
    if (seeMore) {
      e.stopPropagation();
      showLongPopup(seeMore.dataset.issue, seeMore.dataset.candidate);
      return;
    }
    const cell = e.target.closest('.position-cell');
    if (cell && !cell.classList.contains('no-data')) {
      if (window.getSelection().toString().length > 0) return;
      handleCellClick(cell.dataset.issue, cell.dataset.candidate);
    }
  });

  // Long popup dismiss
  document.getElementById('long-popup-overlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) dismissLongPopup();
  });
  document.getElementById('long-popup-close').addEventListener('click', dismissLongPopup);

  // Score bar: see results + score card popup
  document.getElementById('score-bar').addEventListener('click', e => {
    if (e.target.id === 'see-results-btn') {
      document.getElementById('results-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const card = e.target.closest('.score-card');
    if (card) {
      e.stopPropagation();
      const popup = document.getElementById('score-card-popup');
      if (!popup.classList.contains('hidden') && popup.dataset.for === card.dataset.candidate) {
        dismissScoreCardPopup();
        return;
      }
      popup.dataset.for = card.dataset.candidate;
      showScoreCardPopup(card.dataset.candidate, card);
    }
  });

  // Results: reset picks
  document.getElementById('results-container').addEventListener('click', e => {
    if (e.target.id === 'reset-btn') {
      state.picks = {};
      renderMatrix();
      renderScoreBar();
      renderResults();
      updateHeaderButtons();
      syncUrl();
    }
  });

  // Reset all picks (header button)
  document.getElementById('reset-all-btn').addEventListener('click', () => {
    state.picks = {};
    renderMatrix();
    renderScoreBar();
    renderResults();
    updateHeaderButtons();
    syncUrl();
  });

  // Share current race
  document.getElementById('copy-link-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.getElementById('copy-link-btn');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    });
  });

  // Share all races
  document.getElementById('copy-all-btn').addEventListener('click', () => {
    const url = location.origin + buildAllRacesUrl();
    navigator.clipboard.writeText(url).then(() => {
      const btn = document.getElementById('copy-all-btn');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    });
  });

  // Dismiss popovers on outside click
  document.addEventListener('click', e => {
    const popover = document.getElementById('citation-popover');
    if (!popover.classList.contains('hidden') && !popover.contains(e.target) && !e.target.classList.contains('cite')) {
      dismissPopover();
    }
    const scorePopup = document.getElementById('score-card-popup');
    if (!scorePopup.classList.contains('hidden') && !scorePopup.contains(e.target) && !e.target.closest('.score-card')) {
      dismissScoreCardPopup();
    }
  });

  // Mobile sheet
  document.getElementById('mobile-race-btn').addEventListener('click', () => {
    mobileSheetTarget === 'race' ? closeMobileSheet() : openMobileSheet('race');
  });
  document.getElementById('mobile-candidates-btn').addEventListener('click', () => {
    mobileSheetTarget === 'candidates' ? closeMobileSheet() : openMobileSheet('candidates');
  });
  document.getElementById('mobile-issues-btn').addEventListener('click', () => {
    mobileSheetTarget === 'issues' ? closeMobileSheet() : openMobileSheet('issues');
  });
  document.getElementById('mobile-sheet-close').addEventListener('click', closeMobileSheet);
  document.querySelector('.mobile-sheet-backdrop').addEventListener('click', closeMobileSheet);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { dismissPopover(); dismissScoreCardPopup(); dismissLongPopup(); closeMobileSheet(); }
  });
}

// ── Init ───────────────────────────────────────────────────────────────────

function init() {
  loadFromUrl();
  renderAll();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
