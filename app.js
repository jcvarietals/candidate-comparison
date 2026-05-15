import { CANDIDATES, ISSUES, CITATIONS, POSITIONS } from './data.js';

// ── State ──────────────────────────────────────────────────────────────────

const state = {
  selectedCandidateIds: new Set(),
  selectedIssueIds: new Set(ISSUES.map(i => i.id)),
  picks: {}, // issueId -> candidateId
};

// ── Helpers ────────────────────────────────────────────────────────────────

function getSelectedCandidates() {
  return CANDIDATES.filter(c => state.selectedCandidateIds.has(c.id));
}

function getSelectedIssues() {
  return ISSUES.filter(i => state.selectedIssueIds.has(i.id));
}

function getActiveCandidateCount() {
  return [...state.selectedCandidateIds].filter(id => {
    const c = CANDIDATES.find(x => x.id === id);
    return c && c.active;
  }).length;
}

function getPicksForCandidate(candidateId) {
  const visibleIssueIds = getSelectedIssues().map(i => i.id);
  return visibleIssueIds.filter(issueId => state.picks[issueId] === candidateId).length;
}

function countPickedIssues() {
  const visibleIssueIds = getSelectedIssues().map(i => i.id);
  return visibleIssueIds.filter(id => state.picks[id] && state.selectedCandidateIds.has(state.picks[id])).length;
}

function allIssuesPicked() {
  const visibleIssues = getSelectedIssues();
  if (visibleIssues.length === 0) return false;
  return visibleIssues.every(i => state.picks[i.id] && state.selectedCandidateIds.has(state.picks[i.id]));
}

// ── Candidate Panel ────────────────────────────────────────────────────────

function renderCandidatePanel() {
  const activeCount = getActiveCandidateCount();
  const atMax = activeCount >= 8;

  const warning = document.getElementById('max-warning');
  warning.classList.toggle('hidden', !atMax);

  const html = CANDIDATES.map(c => {
    const checked = state.selectedCandidateIds.has(c.id);
    const suspended = !c.active;
    const disabled = suspended || (atMax && !checked);
    const partyClass = c.party.toLowerCase();
    const laneClass = c.lane.toLowerCase().replace(/ /g, '-');

    return `
      <label class="candidate-row${suspended ? ' suspended' : ''}" for="cand-${c.id}">
        <input
          type="checkbox"
          id="cand-${c.id}"
          data-candidate="${c.id}"
          ${checked ? 'checked' : ''}
          ${disabled ? 'disabled' : ''}
        >
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
      </label>
    `;
  }).join('');

  document.getElementById('candidate-list').innerHTML = html;
}

// ── Issue Panel ────────────────────────────────────────────────────────────

function renderIssuePanel() {
  const groups = [...new Set(ISSUES.map(i => i.group))];

  const html = groups.map(group => {
    const issues = ISSUES.filter(i => i.group === group);
    const rows = issues.map(issue => {
      const checked = state.selectedIssueIds.has(issue.id);
      return `
        <label class="issue-row" for="issue-${issue.id}">
          <input
            type="checkbox"
            id="issue-${issue.id}"
            data-issue="${issue.id}"
            ${checked ? 'checked' : ''}
          >
          <label for="issue-${issue.id}">${issue.label}</label>
        </label>
      `;
    }).join('');

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

function renderMatrix() {
  const candidates = getSelectedCandidates();
  const issues = getSelectedIssues();
  const container = document.getElementById('matrix-container');

  if (candidates.length < 2) {
    container.innerHTML = `<p class="matrix-empty">Select at least 2 candidates to compare.</p>`;
    return;
  }

  if (issues.length === 0) {
    container.innerHTML = `<p class="matrix-empty">Select at least one issue to compare.</p>`;
    return;
  }

  let html = `<table class="comparison-table">
    <thead>
      <tr>
        <th class="corner-cell">Issue</th>`;

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

  html += `
      </tr>
    </thead>
    <tbody>`;

  for (const issue of issues) {
    html += `<tr><td class="issue-label">${issue.label}</td>`;

    for (const c of candidates) {
      const pos = POSITIONS[c.id]?.[issue.id];
      const isPicked = state.picks[issue.id] === c.id;
      const selectedClass = isPicked ? ' selected' : '';

      if (pos) {
        const citeHtml = buildCiteHtml(pos.citations);
        html += `
          <td class="position-cell${selectedClass}" data-issue="${issue.id}" data-candidate="${c.id}">
            ${isPicked ? '<span class="checkmark">✓</span>' : ''}
            <p class="cell-text">${escapeHtml(pos.text)}${citeHtml}</p>
          </td>`;
      } else {
        html += `
          <td class="position-cell no-data" data-issue="${issue.id}" data-candidate="${c.id}">
            <p class="no-position">No data</p>
          </td>`;
      }
    }

    html += `</tr>`;
  }

  html += `</tbody></table>`;
  container.innerHTML = html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Score Bar ──────────────────────────────────────────────────────────────

function renderScoreBar() {
  const candidates = getSelectedCandidates();
  const visibleIssues = getSelectedIssues();
  const totalIssues = visibleIssues.length;
  const pickedCount = countPickedIssues();
  const allPicked = allIssuesPicked();

  let cardsHtml = candidates.map(c => {
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

  const actionsHtml = allPicked
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

  if (!allIssuesPicked()) {
    container.innerHTML = '';
    return;
  }

  const candidates = getSelectedCandidates();
  const visibleIssues = getSelectedIssues();

  const ranked = candidates
    .map(c => ({ candidate: c, picks: getPicksForCandidate(c.id) }))
    .sort((a, b) => b.picks - a.picks);

  const topScore = ranked[0]?.picks ?? 0;
  const total = visibleIssues.length;

  const itemsHtml = ranked.map(({ candidate: c, picks }, idx) => {
    const isTop = picks === topScore;
    const isTied = ranked.filter(r => r.picks === topScore).length > 1;
    const rankLabel = isTop
      ? (isTied ? 'Co-leader' : 'Your best match')
      : `#${idx + 1}`;
    const rankClass = isTop ? '' : ' normal';

    return `
      <div class="result-item${isTop ? ' top-match' : ''}">
        <span class="result-rank${rankClass}">${rankLabel}</span>
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

// ── Citation Popover ───────────────────────────────────────────────────────

function showCitationPopover(citeId, triggerEl) {
  const citation = CITATIONS[citeId];
  if (!citation) return;

  const popover = document.getElementById('citation-popover');

  popover.innerHTML = `
    <strong class="cite-source">${escapeHtml(citation.source)}</strong>
    <div class="cite-title">${escapeHtml(citation.title)}</div>
    <div class="cite-date">${escapeHtml(citation.date)}</div>
    <a class="cite-url" href="${citation.url}" target="_blank" rel="noopener noreferrer">Open source ↗</a>`;

  // Measure before positioning
  popover.style.visibility = 'hidden';
  popover.classList.remove('hidden');

  const ph = popover.offsetHeight;
  const pw = popover.offsetWidth;
  const rect = triggerEl.getBoundingClientRect();
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  let top = rect.bottom + 8;
  if (vh - rect.bottom < ph + 16) {
    top = rect.top - ph - 8;
  }

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

// ── Score Card Popup ───────────────────────────────────────────────────────

function showScoreCardPopup(candidateId, triggerEl) {
  const candidate = CANDIDATES.find(c => c.id === candidateId);
  if (!candidate) return;

  const visibleIssues = getSelectedIssues();
  const pickedIssues = visibleIssues.filter(i => state.picks[i.id] === candidateId);

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

// ── Event Handlers ─────────────────────────────────────────────────────────

function handleCandidateToggle(candidateId, checked) {
  const candidate = CANDIDATES.find(c => c.id === candidateId);
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
  if (checked) {
    state.selectedIssueIds.add(issueId);
  } else {
    state.selectedIssueIds.delete(issueId);
  }

  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
  syncUrl();
}

function handleCellClick(issueId, candidateId) {
  const candidate = CANDIDATES.find(c => c.id === candidateId);
  if (!candidate) return;

  if (state.picks[issueId] === candidateId) {
    delete state.picks[issueId];
  } else {
    state.picks[issueId] = candidateId;
  }

  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
  syncUrl();
}

// ── Event Binding ──────────────────────────────────────────────────────────

function bindEvents() {
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

  // Matrix: cell clicks and citation clicks
  document.getElementById('matrix-container').addEventListener('click', e => {
    if (e.target.classList.contains('cite')) {
      e.stopPropagation();
      showCitationPopover(e.target.dataset.cite, e.target);
      return;
    }
    const cell = e.target.closest('.position-cell');
    if (cell && !cell.classList.contains('no-data')) {
      handleCellClick(cell.dataset.issue, cell.dataset.candidate);
    }
  });

  // Score bar: see results button + score card popup
  document.getElementById('score-bar').addEventListener('click', e => {
    if (e.target.id === 'see-results-btn') {
      const results = document.getElementById('results-container');
      results.scrollIntoView({ behavior: 'smooth', block: 'start' });
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

  // Results: reset picks button (rendered dynamically)
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

  // Dismiss popovers on outside click
  document.addEventListener('click', e => {
    const popover = document.getElementById('citation-popover');
    if (
      !popover.classList.contains('hidden') &&
      !popover.contains(e.target) &&
      !e.target.classList.contains('cite')
    ) {
      dismissPopover();
    }

    const scorePopup = document.getElementById('score-card-popup');
    if (
      !scorePopup.classList.contains('hidden') &&
      !scorePopup.contains(e.target) &&
      !e.target.closest('.score-card')
    ) {
      dismissScoreCardPopup();
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      dismissPopover();
      dismissScoreCardPopup();
    }
  });

  // Reset all selections
  document.getElementById('reset-all-btn').addEventListener('click', () => {
    state.selectedCandidateIds = new Set();
    state.selectedIssueIds = new Set(ALL_ISSUE_IDS);
    state.picks = {};
    renderCandidatePanel();
    renderIssuePanel();
    renderMatrix();
    renderScoreBar();
    renderResults();
    updateHeaderButtons();
    syncUrl();
  });

  // Share selections (copy link)
  document.getElementById('copy-link-btn').addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const btn = document.getElementById('copy-link-btn');
      const orig = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = orig; }, 2000);
    });
  });
}

// ── Header Buttons ─────────────────────────────────────────────────────────

function updateHeaderButtons() {
  const hasSelections = state.selectedCandidateIds.size > 0 || Object.keys(state.picks).length > 0;
  document.getElementById('reset-all-btn').disabled = !hasSelections;
}

// ── URL State ──────────────────────────────────────────────────────────────

const ALL_ISSUE_IDS = ISSUES.map(i => i.id);

function syncUrl() {
  const params = new URLSearchParams();

  if (state.selectedCandidateIds.size > 0) {
    params.set('c', [...state.selectedCandidateIds].join(','));
  }

  // Only encode issues if they differ from all-selected default
  if (state.selectedIssueIds.size < ALL_ISSUE_IDS.length) {
    params.set('i', [...state.selectedIssueIds].join(','));
  }

  const pickEntries = Object.entries(state.picks)
    .filter(([issueId, candidateId]) =>
      state.selectedIssueIds.has(issueId) && state.selectedCandidateIds.has(candidateId)
    );
  if (pickEntries.length > 0) {
    params.set('p', pickEntries.map(([i, c]) => `${i}:${c}`).join(','));
  }

  const query = params.toString();
  const newUrl = query ? `${location.pathname}?${query}` : location.pathname;
  history.replaceState(null, '', newUrl);
}

function loadFromUrl() {
  const params = new URLSearchParams(location.search);

  const c = params.get('c');
  if (c) {
    const ids = c.split(',').filter(id => CANDIDATES.find(x => x.id === id && x.active));
    state.selectedCandidateIds = new Set(ids.slice(0, 8));
  }

  const i = params.get('i');
  if (i) {
    const ids = i.split(',').filter(id => ALL_ISSUE_IDS.includes(id));
    state.selectedIssueIds = new Set(ids);
  }

  const p = params.get('p');
  if (p) {
    p.split(',').forEach(pair => {
      const [issueId, candidateId] = pair.split(':');
      if (issueId && candidateId) state.picks[issueId] = candidateId;
    });
  }
}

// ── Init ───────────────────────────────────────────────────────────────────

function init() {
  loadFromUrl();
  renderCandidatePanel();
  renderIssuePanel();
  renderMatrix();
  renderScoreBar();
  renderResults();
  updateHeaderButtons();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
