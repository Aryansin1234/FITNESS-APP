// ── THEME TOGGLE ─────────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('af_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('meta[name="theme-color"]').content = '#fdf7fa';
  }
  updateThemeIcons();
}

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    document.querySelector('meta[name="theme-color"]').content = '#0d0810';
    localStorage.setItem('af_theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('meta[name="theme-color"]').content = '#fdf7fa';
    localStorage.setItem('af_theme', 'light');
  }
  updateThemeIcons();
  showToast(isLight ? 'Dark mode' : 'Light mode');
}

function updateThemeIcons() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const moonSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  const sunSvg  = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  const icon = isLight ? sunSvg : moonSvg;
  const sb = document.getElementById('sidebar-theme-btn');
  const mb = document.getElementById('mobile-theme-btn');
  if (sb) sb.innerHTML = icon;
  if (mb) mb.querySelector('.theme-icon-wrap').innerHTML = icon;
}

initTheme();

// ── STORAGE HELPERS ──────────────────────────────────────────────────────────
const STORAGE_KEYS = {
  setsDone: 'af_setsDone',
  completedDays: 'af_completedDays',
  proteinG: 'af_proteinG',
  proteinDate: 'af_proteinDate',
  waterGlasses: 'af_waterGlasses',
  waterDate: 'af_waterDate',
  weightLog: 'af_weightLog',
  workoutLog: 'af_workoutLog',
  currentPhase: 'af_currentPhase',
};

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEYS.setsDone, JSON.stringify(setsDone));
    localStorage.setItem(STORAGE_KEYS.completedDays, JSON.stringify([...completedDays]));
    localStorage.setItem(STORAGE_KEYS.proteinG, proteinG);
    localStorage.setItem(STORAGE_KEYS.proteinDate, new Date().toDateString());
    localStorage.setItem(STORAGE_KEYS.waterGlasses, waterGlasses);
    localStorage.setItem(STORAGE_KEYS.waterDate, new Date().toDateString());
    localStorage.setItem(STORAGE_KEYS.weightLog, JSON.stringify(weightLog));
    localStorage.setItem(STORAGE_KEYS.workoutLog, JSON.stringify(workoutLog));
    localStorage.setItem(STORAGE_KEYS.currentPhase, currentPhase);
  } catch(e) { console.warn('Storage save failed', e); }
}

function loadState() {
  try {
    const sd = localStorage.getItem(STORAGE_KEYS.setsDone);
    if (sd) setsDone = JSON.parse(sd);
    const cd = localStorage.getItem(STORAGE_KEYS.completedDays);
    if (cd) completedDays = new Set(JSON.parse(cd));
    const savedDate = localStorage.getItem(STORAGE_KEYS.proteinDate);
    if (savedDate === new Date().toDateString()) {
      proteinG = parseInt(localStorage.getItem(STORAGE_KEYS.proteinG)) || 0;
    } else { proteinG = 0; }
    const waterDate = localStorage.getItem(STORAGE_KEYS.waterDate);
    if (waterDate === new Date().toDateString()) {
      waterGlasses = parseInt(localStorage.getItem(STORAGE_KEYS.waterGlasses)) || 0;
    } else { waterGlasses = 0; }
    const wl = localStorage.getItem(STORAGE_KEYS.weightLog);
    if (wl) weightLog = JSON.parse(wl);
    const wkl = localStorage.getItem(STORAGE_KEYS.workoutLog);
    if (wkl) workoutLog = JSON.parse(wkl);
    const sp = localStorage.getItem(STORAGE_KEYS.currentPhase);
    if (sp !== null) {
      currentPhase = parseInt(sp);
      DAYS = ALL_PHASES_DAYS[currentPhase];
    }
  } catch(e) { console.warn('Storage load failed', e); }
}

// ── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// ── WEB AUDIO BEEP ──────────────────────────────────────────────────────────
let audioCtx = null;
function playBeep() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.frequency.value = 880; osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
    osc.start(audioCtx.currentTime); osc.stop(audioCtx.currentTime + 0.8);
    setTimeout(() => {
      const o2 = audioCtx.createOscillator(), g2 = audioCtx.createGain();
      o2.connect(g2); g2.connect(audioCtx.destination);
      o2.frequency.value = 1100; o2.type = 'sine';
      g2.gain.setValueAtTime(0.3, audioCtx.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
      o2.start(audioCtx.currentTime); o2.stop(audioCtx.currentTime + 0.6);
    }, 300);
  } catch(e) {}
}

// ── STATE ────────────────────────────────────────────────────────────────────
let currentDay = 0;
let timerSec = 90, timerRunning = false, timerInterval = null, timerMax = 90;
let proteinG = 0;
let completedDays = new Set();
let setsDone = {};
let waterGlasses = 0;
let weightLog = [];
let workoutLog = {};
let workoutStopwatch = null, workoutElapsed = 0, workoutStopwatchRunning = false;

// ── MOTIVATIONAL QUOTES ──────────────────────────────────────────────────────
const QUOTES = [
  {text:"Every step you take in the gym is a step toward the strongest version of yourself.", author:"Unknown"},
  {text:"You don't have to be great to start, but you have to start to be great.", author:"Zig Ziglar"},
  {text:"Take care of your body. It's the only place you have to live.", author:"Jim Rohn"},
  {text:"The body achieves what the mind believes.", author:"Unknown"},
  {text:"Small daily improvements over time lead to stunning results.", author:"Robin Sharma"},
  {text:"Strength doesn't come from what you can do. It comes from overcoming things you once thought you couldn't.", author:"Rikki Rogers"},
  {text:"Don't count the days, make the days count.", author:"Muhammad Ali"},
  {text:"Believe in yourself and all that you are.", author:"Christian D. Larson"},
  {text:"Success isn't always about greatness. It's about consistency.", author:"Dwayne Johnson"},
  {text:"The secret of getting ahead is getting started.", author:"Mark Twain"},
];

// ── GREETING ─────────────────────────────────────────────────────────────────
function updateGreeting() {
  const h = new Date().getHours();
  let greeting = 'Good Morning';
  if (h >= 12 && h < 17) greeting = 'Good Afternoon';
  else if (h >= 17 && h < 21) greeting = 'Good Evening';
  else if (h >= 21) greeting = 'Good Night';
  const el = document.getElementById('hero-greeting');
  if (el) el.textContent = `${greeting}, Vidha`;
}

// ── TODAY → APP DAY INDEX ────────────────────────────────────────────────────
// JS getDay(): Sun=0, Mon=1 ... Sat=6.  App DAYS array: Mon=0 ... Sun=6.
function getTodayIndex() {
  const jsDay = new Date().getDay();      // 0=Sun … 6=Sat
  return (jsDay + 6) % 7;                  // → 0=Mon … 6=Sun
}


function copyExName(name) {
  navigator.clipboard.writeText(name).then(() => {
    showToast('Copied: ' + name);
  }).catch(() => {
    // Fallback for older browsers / Android WebView
    const ta = document.createElement('textarea');
    ta.value = name;
    ta.style.cssText = 'position:fixed;opacity:0;top:0;left:0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('Copied: ' + name);
  });
}

// ── IMAGE LIGHTBOX ────────────────────────────────────────────────────────────
let _lbTouchStartY = 0;

function openLightbox(src, caption) {
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const cap = document.getElementById('lightbox-caption');
  if (!lb || !img) return;
  img.src = src;
  img.alt = caption;
  if (cap) cap.textContent = caption;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Close on Escape
  document.addEventListener('keydown', _lbKeyHandler);
  // Swipe-down to close on touch
  lb.addEventListener('touchstart', _lbTouchStart, {passive:true});
  lb.addEventListener('touchend',   _lbTouchEnd,   {passive:true});
}

function closeLightbox(e) {
  // If called from overlay click, only close if clicking the backdrop (not the inner content)
  if (e && e.target !== document.getElementById('lightbox')) return;
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.classList.remove('open');
  document.body.style.overflow = '';
  document.removeEventListener('keydown', _lbKeyHandler);
  lb.removeEventListener('touchstart', _lbTouchStart);
  lb.removeEventListener('touchend',   _lbTouchEnd);
  // Clear src after transition so there's no flash
  setTimeout(() => {
    const img = document.getElementById('lightbox-img');
    if (img) img.src = '';
  }, 300);
}

function _lbKeyHandler(e) {
  if (e.key === 'Escape') { closeLightbox(); }
}
function _lbTouchStart(e) {
  _lbTouchStartY = e.touches[0].clientY;
}
function _lbTouchEnd(e) {
  const dy = e.changedTouches[0].clientY - _lbTouchStartY;
  if (dy > 60) closeLightbox(); // swipe down 60px → close
}


function icon(key, size = 22) {
  const svg = ICONS[key];
  if (!svg) return '';
  return svg.replace('<svg ', `<svg width="${size}" height="${size}" `);
}

// ── PHASE SWITCHER ────────────────────────────────────────────────────────────
function switchPhase(phaseIdx) {
  currentPhase = phaseIdx;
  DAYS = ALL_PHASES_DAYS[currentPhase];
  // Reset weekly completion when phase changes
  setsDone = {};
  completedDays = new Set();
  currentDay = getTodayIndex();
  saveState();
  renderPhaseSwitcher();
  renderWorkoutTabs();
  renderWorkout();
  renderWeekGrid();
  updateWeekUI();
  renderOverviewPhaseInfo();
  showToast(`${PHASES[phaseIdx].name}: ${PHASES[phaseIdx].label} unlocked`);
}

function renderPhaseSwitcher() {
  const el = document.getElementById('phase-switcher');
  if (!el) return;
  el.innerHTML = PHASES.map((p, i) => `
    <button class="phase-btn ${currentPhase === i ? 'active' : ''}" onclick="switchPhase(${i})">
      <div class="phase-btn-name">${p.name}</div>
      <div class="phase-btn-label">${p.label}</div>
      <div class="phase-btn-weeks">${p.weeks}</div>
    </button>`).join('');
}

function renderOverviewPhaseInfo() {
  const el = document.getElementById('current-phase-info');
  if (!el) return;
  const p = PHASES[currentPhase];
  el.innerHTML = `
    <div class="phase-info-badge" style="background:${p.gradient}">
      <span class="phase-info-name">${p.name} — ${p.label}</span>
      <span class="phase-info-weeks">${p.weeks}</span>
    </div>
    <div class="phase-info-desc">${p.desc}</div>`;
}

// ── WORKOUT TABS ─────────────────────────────────────────────────────────────
function renderWorkoutTabs() {
  const el = document.getElementById('day-tabs');
  if (!el) return;
  el.innerHTML = DAYS.map((d, i) => `
    <button class="day-tab ${i === currentDay ? 'active' : ''} ${d.rest ? 'rest-day' : ''}" onclick="selectDay(${i})">
      ${d.name}${d.rest ? '' : ` — ${d.tag}`}
    </button>`).join('');
}

// ── RENDER WORKOUT ─────────────────────────────────────────────────────────────
function renderWorkout() {
  const d = DAYS[currentDay];
  const el = document.getElementById('workout-content');
  if (d.rest) {
    const ph = PHASES[currentPhase];
    el.innerHTML = `
      <div class="wk-phase-banner" style="background:${ph.gradient}">
        <div class="wk-phase-left">
          <div class="wk-phase-name">${ph.name} · ${ph.label}</div>
          <div class="wk-phase-weeks">${ph.weeks}</div>
        </div>
        <div class="wk-phase-day">${d.name} · ${d.tag}</div>
      </div>
      <div class="rest-panel">
      <div class="rest-icon-wrap">${icon('moon', 56)}</div>
      <div class="rest-title">${d.name} — ${d.tag}</div>
      <div class="rest-text" style="margin-bottom:24px">${d.restMsg}</div>
      <div style="text-align:left;max-width:440px;margin:0 auto">
        ${d.restTips.map(t=>`<div class="rest-tip-item">
          <div class="rest-tip-icon">${icon('check', 14)}</div>
          <span>${t}</span>
        </div>`).join('')}
      </div>
    </div>`;
  } else {
    let totalSets = 0, doneSets = 0;
    d.exercises.forEach((ex, i) => {
      const n = parseInt(ex.sets);
      totalSets += n;
      for (let s = 0; s < n; s++) {
        if (setsDone[`${currentDay}-${i}-${s}`]) doneSets++;
      }
    });
    const pct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;

    // ── Phase banner — always show which phase & week Vidha is in ──
    const ph = PHASES[currentPhase];
    const phaseBanner = `
      <div class="wk-phase-banner" style="background:${ph.gradient}">
        <div class="wk-phase-left">
          <div class="wk-phase-name">${ph.name} · ${ph.label}</div>
          <div class="wk-phase-weeks">${ph.weeks}</div>
        </div>
        <div class="wk-phase-day">${d.name} · ${d.tag}</div>
      </div>`;

    // ── Friendly intro — reassure & explain the flow ──
    const isMobilise = currentPhase === 0;
    const introText = isMobilise
      ? `Welcome, Vidha. Today is all about gently waking up your body — no weights, no pressure. Just follow along step by step. You've got this.`
      : `Here's your plan for today, Vidha. First warm up, then move through your strength exercises one at a time. Take your time — there's no rush.`;
    const introBlock = `
      <div class="wk-intro">
        <div class="wk-intro-icon">${icon('heart', 20)}</div>
        <div class="wk-intro-text">${introText}</div>
      </div>`;

    // ── STEP 1 — Warm-up, now with images + how-to for each move ──
    const warmupHTML = d.warmup && d.warmup.length ? `
      <div class="wk-step-label"><span class="wk-step-num">1</span> Warm-Up First <span class="wk-step-hint">— always start here (about 5 min)</span></div>
      <div class="warmup-cards">
        ${d.warmup.map((w, wi) => {
          const g = warmupGuideFor(w.text);
          const id = `wublock-${currentDay}-${wi}`;
          const copyName = w.text.split('—')[0].trim().replace(/'/g,"\\'");
          return `<div class="warmup-card" id="${id}" onclick="toggleWarmupBlock('${id}', this)">
            <div class="warmup-card-img">
              <img src="${g.img}" alt="${w.text.replace(/"/g,'')}" loading="lazy">
              <div class="warmup-card-check">${icon('check', 14)}</div>
            </div>
            <div class="warmup-card-body">
              <div class="warmup-card-title-row">
                <div class="warmup-card-title">${w.text}</div>
                <button class="ex-copy-btn" onclick="event.stopPropagation();copyExName('${copyName}')" title="Copy name to search on YouTube">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                </button>
              </div>
              <div class="warmup-card-how">${g.how}</div>
            </div>
          </div>`;
        }).join('')}
      </div>` : '';

    // ── STEP 2 — Strength / main exercises ──
    const stepTwoLabel = isMobilise
      ? `<div class="wk-step-label"><span class="wk-step-num">2</span> Gentle Movements <span class="wk-step-hint">— mobility & light moves, no weights</span></div>`
      : `<div class="wk-step-label"><span class="wk-step-num">2</span> Strength Exercises <span class="wk-step-hint">— tap any exercise to see how to do it</span></div>`;

    el.innerHTML = `
      ${phaseBanner}
      ${introBlock}
      <div class="workout-meta-row">
        <div class="workout-focus-tag">${icon('target', 14)} ${d.focus}</div>
        <div class="workout-progress-row">
          <span class="workout-progress-label">Progress</span>
          <div class="prog-bar" style="flex:1;height:6px;margin:0"><div class="prog-fill" style="width:${pct}%;background:${pct>=100?'var(--accent)':'var(--mint)'}"></div></div>
          <span style="font-size:12px;font-family:'Space Mono',monospace;color:${pct>=100?'var(--accent)':'var(--mint)'};font-weight:700">${pct}%</span>
        </div>
      </div>
      ${warmupHTML}
      ${stepTwoLabel}
      <div class="ex-wrap">${d.exercises.map((ex,i)=>renderExCard(ex,i)).join('')}</div>
      <div class="cardio-block">
        <div><div class="cb-left-label">${icon('run', 14)} Cardio</div><div class="cb-detail">${d.cardio}</div></div>
        <div class="cb-icon-svg">${icon('run', 28)}</div>
      </div>`;
  }
}

function toggleWarmupBlock(id, el) {
  const done = el.classList.toggle('done');
  if (done) showToast('Nice — one step done!');
}

function renderExCard(ex, i) {
  const day = currentDay;
  const totalSets = parseInt(ex.sets);
  const doneSetsCount = Array.from({length:totalSets},(_,s)=>setsDone[`${day}-${i}-${s}`]?1:0).reduce((a,b)=>a+b,0);
  const allDone = doneSetsCount === totalSets;

  // Extract image src from ex.svg for the lightbox
  const imgSrcMatch = ex.svg && ex.svg.match(/src="([^"]+)"/);
  const imgSrc = imgSrcMatch ? imgSrcMatch[1] : '';

  const setsRow = Array.from({length:totalSets},(_,s)=>{
    const k=`${day}-${i}-${s}`, done=setsDone[k];
    const logKey = `${day}-${i}`;
    const logged = workoutLog[logKey] && workoutLog[logKey][s];
    const prevW = logged ? logged.w : '';
    const prevR = logged ? logged.r : '';
    return `<div class="set-log-row">
      <button class="set-btn${done?' done':''}" onclick="toggleSet(${day},${i},${s})" title="Set ${s+1}">
        <span>${done ? icon('check', 16) : s+1}</span>
        <span class="set-btn-label">${done?'Done':'Set'}</span>
      </button>
      <input class="log-input" id="log-w-${day}-${i}-${s}" type="number" placeholder="kg" value="${prevW}" step="0.5" min="0">
      <span style="color:var(--dim);font-size:11px">×</span>
      <input class="log-input" id="log-r-${day}-${i}-${s}" type="number" placeholder="reps" value="${prevR}" min="0">
      <button class="log-save-btn" onclick="saveExLog(${day},${i},${s})" title="Save">${icon('check', 14)}</button>
    </div>`;
  }).join('');

  const tempoBadge = ex.tempo ? `<span class="ex-tempo-badge">${icon('clock', 11)} ${ex.tempo}</span>` : '';
  const restBadge  = ex.rest  ? `<span class="ex-rest-badge">${icon('clock', 11)} ${ex.rest}</span>` : '';
  const badgesRow  = (tempoBadge || restBadge) ? `<div class="ex-badges">${tempoBadge}${restBadge}</div>` : '';

  const breathingSection = ex.breathing ? `
    <div class="ex-breathing">
      <div class="ex-breathing-title">${icon('drop', 14)} Breathing Guide</div>
      <div class="ex-breathing-text">${ex.breathing}</div>
    </div>` : '';

  return `<div class="ex-card${allDone?' ex-card-done':''}" id="exc-${i}">
    <div class="ex-top" onclick="toggleEx(${i})">
      <div class="ex-svg-wrap" onclick="event.stopPropagation();openLightbox('${imgSrc}','${ex.name.replace(/'/g,"\\'")}')">
        ${ex.svg}
        <div class="ex-img-expand"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></div>
      </div>
      <div class="ex-info">
        <div class="ex-num">Exercise ${i+1} ${allDone ? `· <span style="color:var(--mint)">${icon('check',12)} Complete</span>` : `· ${doneSetsCount}/${totalSets} sets`}</div>
        <div class="ex-name-row">
          <div class="ex-name">${ex.name}</div>
          <button class="ex-copy-btn" onclick="event.stopPropagation();copyExName('${ex.name.replace(/'/g,"\\'")}')" title="Copy name to search on YouTube">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
          </button>
        </div>
        <div class="ex-sets">${ex.sets} × ${ex.reps}</div>
        ${badgesRow}
        <div class="ex-muscles">${icon('bolt', 12)} ${ex.muscles}</div>
      </div>
      <div class="ex-toggle" id="ext-${i}">${icon('up', 18)}</div>
    </div>
    <div class="ex-detail" id="exd-${i}">
      ${breathingSection}
      <div class="ex-cues">
        <div class="ex-cues-title">${icon('check', 13)} Correct Form</div>
        ${ex.cues.map(c=>`<div class="cue-item"><div class="cue-dot"></div><span>${c}</span></div>`).join('')}
      </div>
      <div class="ex-mistakes">
        <div class="ex-mistakes-title">${icon('shield', 13)} Common Mistakes</div>
        ${ex.mistakes.map(m=>`<div class="mistake-item"><div class="mistake-dot"></div><span>${m}</span></div>`).join('')}
      </div>
      <div class="ex-set-tracker">
        <div class="set-tracker-title">Set Tracker — tap when done</div>
        <div class="sets-row">${setsRow}</div>
      </div>
    </div>
  </div>`;
}

function toggleEx(i) {
  const d = document.getElementById(`exd-${i}`);
  const t = document.getElementById(`ext-${i}`);
  const c = document.getElementById(`exc-${i}`);
  const open = d.classList.toggle('open');
  t.classList.toggle('open', open);
  c.classList.toggle('expanded', open);
}

function toggleSet(day, ex, set) {
  const k = `${day}-${ex}-${set}`;
  setsDone[k] = !setsDone[k];
  renderWorkout();
  checkDayDone(day);
  saveState();
  if (setsDone[k]) showToast('Set done! Keep going.');
}

function checkDayDone(day) {
  const d = DAYS[day];
  if (d.rest) return;
  const allDone = d.exercises.every((ex, i) => {
    const total = parseInt(ex.sets);
    return Array.from({length:total}, (_, s) => setsDone[`${day}-${i}-${s}`]).every(Boolean);
  });
  if (allDone && !completedDays.has(day)) {
    completedDays.add(day);
    updateWeekUI();
    saveState();
    showToast('Day complete! You did amazing, Vidha!');
  }
}

function renderWeekGrid() {
  const el = document.getElementById('week-grid');
  if (!el) return;
  const dayNames = ['MON','TUE','WED','THU','FRI','SAT','SUN'];
  // Icon for workout days vs rest days
  const workoutIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M6 4v16M18 4v16M6 12h12M3 8h3M18 8h3M3 16h3M18 16h3"/></svg>`;
  const restIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;

  el.innerHTML = DAYS.map((d, i) => {
    const isActive = i === currentDay;
    const isDone = completedDays.has(i);
    const tagClass = d.rest ? 'rest' : (d.tagClass || 'push');
    const tagText = d.rest ? 'Rest' : d.tag;
    return `<div class="wday${isActive ? ' active' : ''}${isDone ? ' done' : ''}" onclick="goWorkout(${i})">
      <div class="wday-name">${dayNames[i]}</div>
      <div class="wday-icon-svg">${d.rest ? restIcon : workoutIcon}</div>
      <div class="wday-tag ${tagClass}">${tagText}</div>
      <div class="wday-check" id="wc${i}">${isDone ? icon('check', 16) : '○'}</div>
    </div>`;
  }).join('');
}

function updateWeekUI() {
  const wdays = document.querySelectorAll('.wday');
  for (let i = 0; i < DAYS.length; i++) {
    const el = document.getElementById('wc'+i);
    if (el) el.innerHTML = completedDays.has(i) ? icon('check', 16) : '○';
    const wd = wdays[i];
    if (wd) {
      wd.classList.toggle('done', completedDays.has(i));
      wd.classList.toggle('active', i === currentDay);
    }
  }
  // Count only actual workout days that are completed
  const count = document.getElementById('gym-day-count');
  if (count) count.textContent = completedDays.size;
  // Update total workout days per week in the stat card
  const totalWorkouts = DAYS.filter(d => !d.rest).length;
  const gymStat = document.getElementById('gym-days-stat');
  if (gymStat) gymStat.textContent = totalWorkouts;
}

function selectDay(d) {
  currentDay = d;
  document.querySelectorAll('.day-tab').forEach((t, i) => t.classList.toggle('active', i === d));
  document.querySelectorAll('.wday').forEach((w, i) => w.classList.toggle('active', i === d));
  renderWorkout();
}

function goWorkout(d) {
  nav('workout');
  setTimeout(() => selectDay(d), 50);
}

// ── FOOD GRID ────────────────────────────────────────────────────────────────
function renderFoods() {
  document.getElementById('food-grid').innerHTML = FOODS.map(f => `
    <div class="food-card">
      <div class="food-icon-svg">${icon(f.iconKey || 'food', 32)}</div>
      <div class="food-name">${f.name}</div>
      <div class="food-protein">${f.protein} protein</div>
      <div class="food-tags">${f.tags.map(t => `<span class="ftag ftag-${t.c}">${t.l}</span>`).join('')}</div>
      <div class="food-tip">${f.tip}</div>
    </div>`).join('');
}

// ── MEALS ────────────────────────────────────────────────────────────────────
function renderMeals() {
  document.getElementById('meal-list').innerHTML = MEALS.map(m => `
    <div class="meal-item">
      <div class="meal-time">${m.time.replace('\n','<br>')}</div>
      <div>
        <div class="meal-name">${m.name}</div>
        <div class="meal-desc">${m.desc.replace(/\n/g,'<br>')}</div>
      </div>
      <div>
        <div class="meal-kcal">${m.kcal}</div>
        <div class="meal-kcal-label">kcal · ${m.protein}g prot</div>
      </div>
    </div>`).join('');
}

// ── TIPS ─────────────────────────────────────────────────────────────────────
function renderTips() {
  document.getElementById('tip-grid').innerHTML = TIPS.map(t => `
    <div class="tip-card">
      <div class="tip-icon-svg">${icon(t.iconKey || 'star', 28)}</div>
      <div class="tip-title">${t.title}</div>
      <div class="tip-text">${t.text}</div>
    </div>`).join('');
  document.getElementById('supp-grid').innerHTML = SUPPS.map(s => `
    <div class="supp-card">
      <div class="supp-icon-svg">${icon(s.iconKey || 'pill', 22)}</div>
      <div class="supp-name">${s.name}</div>
      <div class="supp-dose">${s.dose}</div>
      <div class="supp-info">${s.info}</div>
    </div>`).join('');
}

// ── PROTEIN TRACKER ──────────────────────────────────────────────────────────
function renderProteinTracker() {
  document.getElementById('protein-btns').innerHTML = PROTEIN_FOODS.map(f => `
    <button class="protein-food-btn" onclick="addProtein(${f.g})">
      ${icon('food', 14)} ${f.name}<span class="pf-grams">+${f.g}g</span>
    </button>`).join('');
}

function addProtein(g) {
  proteinG = Math.min(proteinG + g, 150);
  updateProteinUI();
  saveState();
  showToast(`+${g}g protein added`);
}

function updateProteinUI() {
  const pct = Math.min((proteinG / 72) * 100, 100);
  const el = document.getElementById('protein-count');
  const bar = document.getElementById('protein-bar');
  const badge = document.getElementById('daily-protein-badge');
  if (el) el.textContent = `${proteinG}g / 72g`;
  if (bar) bar.style.width = pct + '%';
  if (badge) badge.textContent = proteinG;
  if (pct >= 100 && bar) bar.style.background = 'var(--accent)';
}

// ── WARMUP CHECKLIST (Timer page) ────────────────────────────────────────────
function renderWarmup() {
  const items = [
    {text:'5 min easy walk on treadmill (4.5–5 km/h) — just to warm up', iconKey:'walk'},
    {text:'Arm circles — 10 forward, 10 backward each arm', iconKey:'rotate'},
    {text:'Hip circles — 10 each direction, hands on hips', iconKey:'rotate'},
    {text:'Cat-cow stretch × 8 slow breaths on all fours', iconKey:'body'},
    {text:'Bodyweight squats × 8 — slow, feel knees and hips', iconKey:'bolt'},
    {text:'Leg swings — forward/back × 10 each leg', iconKey:'walk'},
    {text:'Shoulder rolls + cross-body arm swings × 10', iconKey:'rotate'},
  ];
  document.getElementById('warmup-list').innerHTML = items.map((item, i) => {
    const id = 'wm' + i;
    return `<div class="warmup-item" onclick="toggleWarmup('${id}',this)" id="${id}">
      <div class="wm-dot"></div>
      <div class="wm-icon">${icon(item.iconKey, 16)}</div>
      <span style="font-size:14px;flex:1">${item.text}</span>
    </div>`;
  }).join('');
}

function toggleWarmup(id, el) {
  const done = el.classList.toggle('done');
  const dot = el.querySelector('.wm-dot');
  dot.innerHTML = done ? icon('check', 12) : '';
  if (done) showToast('Warm-up step done!');
}

// ── TIMER ─────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const m = Math.floor(timerSec/60), s = timerSec%60;
  const disp = document.getElementById('timer-disp');
  disp.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const pct = timerSec/timerMax;
  disp.style.color = pct < 0.25 ? 'var(--red)' : pct < 0.5 ? 'var(--accent)' : 'var(--mint)';
}

function timerToggle() {
  const disp = document.getElementById('timer-disp');
  if (timerRunning) {
    clearInterval(timerInterval); timerRunning = false;
    document.getElementById('timer-main-btn').textContent = 'Resume';
    document.getElementById('timer-main-btn').className = 'timer-btn timer-start';
    document.getElementById('timer-label').textContent = 'PAUSED';
    disp.classList.remove('pulse');
  } else {
    timerRunning = true;
    document.getElementById('timer-main-btn').textContent = 'Pause';
    document.getElementById('timer-main-btn').className = 'timer-btn timer-pause';
    document.getElementById('timer-label').textContent = 'RESTING...';
    disp.classList.add('pulse');
    timerInterval = setInterval(() => {
      if (timerSec > 0) { timerSec--; updateTimerDisplay(); }
      else {
        clearInterval(timerInterval); timerRunning = false;
        document.getElementById('timer-main-btn').textContent = 'Start';
        document.getElementById('timer-main-btn').className = 'timer-btn timer-start';
        document.getElementById('timer-label').textContent = 'REST DONE — GO!';
        disp.style.color = 'var(--mint)';
        disp.classList.remove('pulse');
        disp.classList.add('shake');
        setTimeout(() => disp.classList.remove('shake'), 500);
        playBeep();
        if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      }
    }, 1000);
  }
}

function timerReset() {
  clearInterval(timerInterval); timerRunning = false;
  timerSec = timerMax;
  const disp = document.getElementById('timer-disp');
  document.getElementById('timer-main-btn').textContent = 'Start';
  document.getElementById('timer-main-btn').className = 'timer-btn timer-start';
  document.getElementById('timer-label').textContent = 'READY';
  disp.classList.remove('pulse','shake');
  updateTimerDisplay();
}

function setPreset(sec, label) {
  timerMax = sec; timerSec = sec;
  clearInterval(timerInterval); timerRunning = false;
  const disp = document.getElementById('timer-disp');
  document.getElementById('timer-main-btn').textContent = 'Start';
  document.getElementById('timer-main-btn').className = 'timer-btn timer-start';
  document.getElementById('timer-label').textContent = label.toUpperCase();
  disp.classList.remove('pulse','shake');
  document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('sel'));
  event.target.classList.add('sel');
  updateTimerDisplay();
}

// ── RESET FUNCTIONS ──────────────────────────────────────────────────────────
function resetDay() {
  if (!confirm('Reset today\'s progress?')) return;
  const d = DAYS[currentDay];
  if (!d.rest) {
    d.exercises.forEach((_, i) => {
      const total = parseInt(d.exercises[i].sets);
      for (let s = 0; s < total; s++) delete setsDone[`${currentDay}-${i}-${s}`];
    });
  }
  completedDays.delete(currentDay);
  saveState(); renderWorkout(); updateWeekUI();
  showToast('Day progress reset');
}

function resetWeek() {
  if (!confirm('Reset ALL weekly progress? This cannot be undone.')) return;
  setsDone = {}; completedDays = new Set(); proteinG = 0; waterGlasses = 0;
  saveState(); renderWorkout(); updateWeekUI(); updateProteinUI(); updateWaterUI();
  showToast('Week reset complete');
}

// ── NAV ───────────────────────────────────────────────────────────────────────
const PAGE_TITLES = {
  overview: ['Dashboard', '44 kg · 163 cm · BMI 16.5 · Goal: Healthy Weight + Lean Muscle'],
  workout:  ['Workout Plan', '6 days/week · Mon–Sat · Warm-up then Strength · 3-Phase'],
  timer:    ['Rest Timer', 'Track your recovery between sets'],
  diet:     ['Nutrition', '72g protein/day · 1950 kcal · India-friendly meals'],
  meals:    ['Meal Plan', 'Full day eating guide · ~73g protein · ~1950 kcal'],
  tips:     ['Wellness Tips', 'Lifestyle, supplements & beginner guidance'],
};

function nav(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.sb-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.bn-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  const btns = document.querySelectorAll('.sb-btn');
  const order = ['overview','workout','timer','diet','meals','tips'];
  const idx = order.indexOf(page);
  if (btns[idx]) btns[idx].classList.add('active');
  const bnBtns = document.querySelectorAll('.bn-btn');
  if (bnBtns[idx]) bnBtns[idx].classList.add('active');
  const [t, s] = PAGE_TITLES[page] || ['',''];
  document.getElementById('page-title').textContent = t;
  document.getElementById('page-sub').textContent = s;
  document.querySelector('.main-area').scrollTo({top: 0, behavior: 'smooth'});
}

// ── PWA INSTALL ──────────────────────────────────────────────────────────────
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); deferredPrompt = e;
  const banner = document.getElementById('install-banner');
  if (banner) banner.classList.add('show');
});

function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(r => {
    if (r.outcome === 'accepted') showToast('App installed!');
    deferredPrompt = null;
    document.getElementById('install-banner').classList.remove('show');
  });
}

function dismissInstall() {
  document.getElementById('install-banner').classList.remove('show');
}

// ── SERVICE WORKER ────────────────────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(e => {});
  });
}

// ── WATER TRACKER ────────────────────────────────────────────────────────────
function addWater() {
  if (waterGlasses < 12) {
    waterGlasses++;
    updateWaterUI();
    saveState();
    showToast(`Glass ${waterGlasses}/8 — ${waterGlasses >= 8 ? 'Goal hit!' : 'Keep going!'}`);
  }
}

function removeWater() {
  if (waterGlasses > 0) { waterGlasses--; updateWaterUI(); saveState(); }
}

function updateWaterUI() {
  const el = document.getElementById('water-count');
  const bar = document.getElementById('water-bar');
  const glasses = document.getElementById('water-glasses');
  if (el) el.textContent = `${waterGlasses} / 8 glasses`;
  if (bar) bar.style.width = Math.min((waterGlasses / 8) * 100, 100) + '%';
  if (bar && waterGlasses >= 8) bar.style.background = 'var(--blue)';
  if (glasses) {
    glasses.innerHTML = Array.from({length: 8}, (_, i) =>
      `<div class="water-glass ${i < waterGlasses ? 'filled' : ''}" onclick="${i < waterGlasses ? 'removeWater()' : 'addWater()'}">
        ${i < waterGlasses ? icon('drop', 18) : ''}
      </div>`
    ).join('');
  }
}

// ── BODY WEIGHT TRACKER ──────────────────────────────────────────────────────
function logWeight() {
  const input = document.getElementById('weight-input');
  const val = parseFloat(input.value);
  if (!val || val < 30 || val > 200) { showToast('Enter a valid weight (30–200 kg)'); return; }
  const today = new Date().toISOString().split('T')[0];
  weightLog = weightLog.filter(e => e.date !== today);
  weightLog.push({date: today, kg: val});
  weightLog.sort((a, b) => a.date.localeCompare(b.date));
  if (weightLog.length > 90) weightLog = weightLog.slice(-90);
  input.value = '';
  saveState();
  renderWeightChart();
  showToast(`Weight logged: ${val} kg`);
}

function renderWeightChart() {
  const container = document.getElementById('weight-chart');
  if (!container) return;
  if (weightLog.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--dim);padding:30px;font-size:13px">No weight data yet. Log your first entry above!</div>';
    return;
  }
  const last = weightLog.slice(-14);
  const vals = last.map(e => e.kg);
  const min = Math.min(...vals) - 1, max = Math.max(...vals) + 1;
  const range = max - min || 1;
  const h = 120, w = 100;
  const points = last.map((e, i) => {
    const x = (i / (last.length - 1 || 1)) * w;
    const y = h - ((e.kg - min) / range) * h;
    return `${x},${y}`;
  }).join(' ');
  const latest = last[last.length - 1];
  const diff = last.length > 1 ? (latest.kg - last[0].kg).toFixed(1) : 0;
  const diffColor = parseFloat(diff) > 0 ? 'var(--mint)' : parseFloat(diff) < 0 ? 'var(--red)' : 'var(--muted)';
  const diffSign = parseFloat(diff) > 0 ? '+' : '';
  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
      <div><span style="font-size:28px;font-weight:800;color:var(--accent);font-family:'Space Mono',monospace">${latest.kg}</span><span style="font-size:14px;color:var(--muted)"> kg</span></div>
      <div style="font-size:13px;color:${diffColor};font-family:'Space Mono',monospace;font-weight:700">${diffSign}${diff} kg (${last.length > 1 ? last.length + ' entries' : '1 entry'})</div>
    </div>
    <svg viewBox="-5 -5 110 130" style="width:100%;height:140px" preserveAspectRatio="none">
      <polyline points="${points}" fill="none" stroke="url(#wgrad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      ${last.map((e, i) => {
        const x = (i / (last.length - 1 || 1)) * w;
        const y = h - ((e.kg - min) / range) * h;
        return `<circle cx="${x}" cy="${y}" r="3" fill="var(--accent)" stroke="var(--bg)" stroke-width="1.5"/>`;
      }).join('')}
      <defs><linearGradient id="wgrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="var(--accent)"/><stop offset="100%" stop-color="var(--mint)"/></linearGradient></defs>
    </svg>
    <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim);margin-top:4px;font-family:'Space Mono',monospace">
      <span>${last[0].date.slice(5)}</span><span>${latest.date.slice(5)}</span>
    </div>`;
}

// ── WORKOUT STOPWATCH ────────────────────────────────────────────────────────
function toggleWorkoutStopwatch() {
  const btn = document.getElementById('sw-btn');
  if (workoutStopwatchRunning) {
    clearInterval(workoutStopwatch); workoutStopwatchRunning = false;
    btn.textContent = 'Resume'; btn.className = 'sw-btn sw-start';
  } else {
    workoutStopwatchRunning = true;
    btn.textContent = 'Pause'; btn.className = 'sw-btn sw-pause';
    workoutStopwatch = setInterval(() => { workoutElapsed++; updateStopwatchDisplay(); }, 1000);
  }
}

function resetWorkoutStopwatch() {
  clearInterval(workoutStopwatch); workoutStopwatchRunning = false; workoutElapsed = 0;
  updateStopwatchDisplay();
  const btn = document.getElementById('sw-btn');
  if (btn) { btn.textContent = 'Start'; btn.className = 'sw-btn sw-start'; }
}

function updateStopwatchDisplay() {
  const m = Math.floor(workoutElapsed / 60), s = workoutElapsed % 60;
  const el = document.getElementById('sw-display');
  if (el) el.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

// ── WORKOUT LOG ──────────────────────────────────────────────────────────────
function saveExLog(day, exIdx, setIdx) {
  const wInput = document.getElementById(`log-w-${day}-${exIdx}-${setIdx}`);
  const rInput = document.getElementById(`log-r-${day}-${exIdx}-${setIdx}`);
  if (!wInput || !rInput) return;
  const w = parseFloat(wInput.value), r = parseInt(rInput.value);
  if (!w || !r) return;
  const key = `${day}-${exIdx}`;
  if (!workoutLog[key]) workoutLog[key] = {};
  workoutLog[key][setIdx] = {w, r, date: new Date().toDateString()};
  saveState();
  showToast(`Logged: ${w}kg x ${r} reps`);
  wInput.style.borderColor = 'rgba(110,233,194,.3)';
  rInput.style.borderColor = 'rgba(110,233,194,.3)';
  setTimeout(() => { wInput.style.borderColor = ''; rInput.style.borderColor = ''; }, 1500);
}

// ── MOTIVATIONAL QUOTE ───────────────────────────────────────────────────────
function renderQuote() {
  const el = document.getElementById('quote-block');
  if (!el) return;
  const q = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  el.innerHTML = `<div class="quote-text">"${q.text}"</div><div class="quote-author">— ${q.author}</div>`;
}

// ── INIT ──────────────────────────────────────────────────────────────────────
loadState();
currentDay = getTodayIndex();   // start on the real system day
updateGreeting();
renderPhaseSwitcher();
renderOverviewPhaseInfo();
renderWorkoutTabs();
renderWorkout();
renderWeekGrid();
renderFoods();
renderMeals();
renderTips();
renderProteinTracker();
renderWarmup();
updateTimerDisplay();
updateProteinUI();
updateWeekUI();
updateWaterUI();
renderWeightChart();
renderQuote();
updateStopwatchDisplay();

// Animate progress bars on load
setTimeout(() => {
  document.querySelectorAll('.prog-fill').forEach(f => {
    const w = f.style.width; f.style.width = '0';
    setTimeout(() => f.style.width = w, 100);
  });
}, 300);

// Handle PWA shortcut URLs (?page=workout etc.)
const urlParams = new URLSearchParams(window.location.search);
const targetPage = urlParams.get('page');
if (targetPage && ['overview','workout','timer','diet','meals','tips'].includes(targetPage)) {
  setTimeout(() => nav(targetPage), 100);
}

// Splash
setTimeout(() => {
  const splash = document.getElementById('splash');
  if (splash) splash.classList.add('hidden');
}, 1200);
