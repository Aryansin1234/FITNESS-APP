// ── THEME TOGGLE ─────────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('af_theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('meta[name="theme-color"]').content = '#f4f4f8';
  }
  updateThemeIcons();
}

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    document.querySelector('meta[name="theme-color"]').content = '#07070f';
    localStorage.setItem('af_theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.querySelector('meta[name="theme-color"]').content = '#f4f4f8';
    localStorage.setItem('af_theme', 'light');
  }
  updateThemeIcons();
  showToast(isLight ? '🌙 Dark mode' : '☀️ Light mode');
}

function updateThemeIcons() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const icon = isLight ? '☀️' : '🌙';
  const sb = document.getElementById('sidebar-theme-btn');
  const mb = document.getElementById('mobile-theme-btn');
  if (sb) sb.textContent = icon;
  if (mb) mb.querySelector('span').textContent = icon;
}

initTheme();

// ── STORAGE HELPERS ──────────────────────────────────────────────────────────
const STORAGE_KEYS = {
  setsDone: 'af_setsDone',
  completedDays: 'af_completedDays',
  proteinG: 'af_proteinG',
  proteinDate: 'af_proteinDate',
  warmup: 'af_warmup',
  waterGlasses: 'af_waterGlasses',
  waterDate: 'af_waterDate',
  weightLog: 'af_weightLog',
  workoutLog: 'af_workoutLog',
  workoutStartTime: 'af_workoutStartTime'
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
    } else {
      proteinG = 0;
    }
    const waterDate = localStorage.getItem(STORAGE_KEYS.waterDate);
    if (waterDate === new Date().toDateString()) {
      waterGlasses = parseInt(localStorage.getItem(STORAGE_KEYS.waterGlasses)) || 0;
    } else {
      waterGlasses = 0;
    }
    const wl = localStorage.getItem(STORAGE_KEYS.weightLog);
    if (wl) weightLog = JSON.parse(wl);
    const wkl = localStorage.getItem(STORAGE_KEYS.workoutLog);
    if (wkl) workoutLog = JSON.parse(wkl);
  } catch(e) { console.warn('Storage load failed', e); }
}

// ── TOAST ────────────────────────────────────────────────────────────────────
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2000);
}

// ── WEB AUDIO BEEP ──────────────────────────────────────────────────────────
let audioCtx = null;
function playBeep() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.frequency.value = 880;
    osc.type = 'sine';
    gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.8);
    setTimeout(() => {
      const o2 = audioCtx.createOscillator();
      const g2 = audioCtx.createGain();
      o2.connect(g2); g2.connect(audioCtx.destination);
      o2.frequency.value = 1100;
      o2.type = 'sine';
      g2.gain.setValueAtTime(0.3, audioCtx.currentTime);
      g2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);
      o2.start(audioCtx.currentTime);
      o2.stop(audioCtx.currentTime + 0.6);
    }, 300);
  } catch(e) {}
}

// ── STATE ────────────────────────────────────────────────────────────────────
// Auto-detect today's day (0=Mon, 1=Tue, ..., 6=Sun)
function getTodayIndex() {
  const jsDay = new Date().getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
  // Convert to our schedule: 0=Mon, 1=Tue, ..., 5=Sat, 6=Sun
  return jsDay === 0 ? 6 : jsDay - 1;
}
let currentDay = getTodayIndex();
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
  {text:"The only bad workout is the one that didn't happen.", author:"Unknown"},
  {text:"Your body can stand almost anything. It's your mind that you have to convince.", author:"Unknown"},
  {text:"The pain you feel today will be the strength you feel tomorrow.", author:"Arnold Schwarzenegger"},
  {text:"Success isn't always about greatness. It's about consistency.", author:"Dwayne Johnson"},
  {text:"Don't count the days, make the days count.", author:"Muhammad Ali"},
  {text:"The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.", author:"Arnold Schwarzenegger"},
  {text:"Discipline is doing what you hate to do, but doing it like you love it.", author:"Mike Tyson"},
  {text:"The last three or four reps is what makes the muscle grow.", author:"Arnold Schwarzenegger"},
  {text:"Take care of your body. It's the only place you have to live.", author:"Jim Rohn"},
  {text:"No pain, no gain. Shut up and train.", author:"Unknown"},
];

// ── GREETING ─────────────────────────────────────────────────────────────────
function updateGreeting() {
  const h = new Date().getHours();
  let greeting = 'Good Morning';
  if (h >= 12 && h < 17) greeting = 'Good Afternoon';
  else if (h >= 17 && h < 21) greeting = 'Good Evening';
  else if (h >= 21) greeting = 'Good Night';
  const el = document.getElementById('hero-greeting');
  if (el) el.textContent = `${greeting}, Aryan 💪`;
}

// ── RENDER ───────────────────────────────────────────────────────────────────
function renderWorkout() {
  const d = DAYS[currentDay];
  const el = document.getElementById('workout-content');
  if (d.rest) {
    el.innerHTML = `<div class="rest-panel">
      <div class="rest-emoji">🛌</div>
      <div class="rest-title">${d.name} — ${d.tag}</div>
      <div class="rest-text" style="margin-bottom:24px">${d.restMsg}</div>
      <div style="text-align:left;max-width:440px;margin:0 auto">
        ${d.restTips.map(t=>`<div style="display:flex;align-items:flex-start;gap:12px;margin-bottom:12px;font-size:14px;color:var(--muted);line-height:1.6"><span style="color:var(--green);flex-shrink:0;font-size:16px">✓</span>${t}</div>`).join('')}
      </div>
    </div>`;
  } else {
    const isAbsDay = d.tag === 'Abs & Core';
    const dailyAbsHTML = isAbsDay ? '' : `
      <div class="daily-abs-block">
        <div class="daily-abs-header">
          <span style="font-size:22px">🔥</span>
          <span class="daily-abs-title">Daily Abs (15 min)</span>
          <span class="daily-abs-tag">Every Day</span>
        </div>
        <div class="daily-abs-exercises">
          <div class="daily-abs-item"><div class="daily-abs-name">Hanging Leg Raises</div><div class="daily-abs-reps">3 × 10</div></div>
          <div class="daily-abs-item"><div class="daily-abs-name">Bicycle Crunches</div><div class="daily-abs-reps">3 × 20</div></div>
          <div class="daily-abs-item"><div class="daily-abs-name">Dead Bugs</div><div class="daily-abs-reps">3 × 10/side</div></div>
          <div class="daily-abs-item"><div class="daily-abs-name">Plank Hold</div><div class="daily-abs-reps">3 × 45 sec</div></div>
        </div>
      </div>`;

    // Calculate progress
    let totalSets = 0, doneSets = 0;
    d.exercises.forEach((ex, i) => {
      const n = parseInt(ex.sets);
      totalSets += n;
      for (let s = 0; s < n; s++) {
        if (setsDone[`${currentDay}-${i}-${s}`]) doneSets++;
      }
    });
    const pct = totalSets > 0 ? Math.round((doneSets / totalSets) * 100) : 0;

    const isToday = currentDay === getTodayIndex();
    const todayBanner = isToday ? `<div class="today-workout-banner"><span class="today-badge-icon">⚡</span> Today's Workout — ${d.name} · ${d.tag}</div>` : '';

    el.innerHTML = `
      ${todayBanner}
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap">
        <div style="font-size:13px;color:var(--muted);font-family:'Space Mono',monospace;letter-spacing:.5px;font-weight:600;display:flex;align-items:center;gap:8px;padding:10px 16px;background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:var(--r);width:fit-content">🎯 FOCUS: ${d.focus}</div>
        <div style="display:flex;align-items:center;gap:10px;padding:10px 16px;background:rgba(255,255,255,.02);border:1px solid var(--border);border-radius:var(--r);flex:1;min-width:200px">
          <span style="font-size:12px;color:var(--muted);font-weight:600">Progress</span>
          <div class="prog-bar" style="flex:1;height:6px;margin:0"><div class="prog-fill" style="width:${pct}%;background:${pct>=100?'var(--accent)':'var(--green)'}"></div></div>
          <span style="font-size:12px;font-family:'Space Mono',monospace;color:${pct>=100?'var(--accent)':'var(--green)'}; font-weight:700">${pct}%</span>
        </div>
      </div>
      <div class="ex-wrap">${d.exercises.map((ex,i)=>renderExCard(ex,i)).join('')}</div>
      <div class="cardio-block"><div><div class="cb-left-label">Cardio After</div><div class="cb-detail">${d.cardio}</div></div><div class="cb-icon">🏃</div></div>
      ${dailyAbsHTML}`;
  }
}

function renderExCard(ex, i) {
  const day = currentDay;
  const totalSets = parseInt(ex.sets);
  const doneSetsCount = Array.from({length:totalSets},(_,s)=>setsDone[`${day}-${i}-${s}`]?1:0).reduce((a,b)=>a+b,0);
  const allDone = doneSetsCount === totalSets;

  const setsRow = Array.from({length:totalSets},(_,s)=>{
    const k=`${day}-${i}-${s}`, done=setsDone[k];
    const logKey = `${day}-${i}`;
    const logged = workoutLog[logKey] && workoutLog[logKey][s];
    const prevW = logged ? logged.w : '';
    const prevR = logged ? logged.r : '';
    return `<div class="set-log-row">
      <button class="set-btn${done?' done':''}" onclick="toggleSet(${day},${i},${s})" title="Set ${s+1}">
        <span>${done?'✓':s+1}</span>
        <span class="set-btn-label">${done?'Done':'Set'}</span>
      </button>
      <input class="log-input" id="log-w-${day}-${i}-${s}" type="number" placeholder="kg" value="${prevW}" step="0.5" min="0">
      <span style="color:var(--dim);font-size:11px">×</span>
      <input class="log-input" id="log-r-${day}-${i}-${s}" type="number" placeholder="reps" value="${prevR}" min="0">
      <button class="log-save-btn" onclick="saveExLog(${day},${i},${s})" title="Save">💾</button>
    </div>`;
  }).join('');

  return `<div class="ex-card${allDone?' expanded':''}" id="exc-${i}" style="${allDone?'border-color:rgba(61,232,160,.2);box-shadow:0 0 20px rgba(61,232,160,.06)':''}">
    <div class="ex-top" onclick="toggleEx(${i})">
      <div class="ex-svg-wrap">${ex.svg}</div>
      <div class="ex-info">
        <div class="ex-num"><span class="ex-num-badge">${i+1}</span> ${allDone ? '<span style="color:var(--green)">✓ Complete</span>' : `${doneSetsCount}/${totalSets} sets`}</div>
        <div class="ex-name">${ex.name}</div>
        <div class="ex-sets">${ex.sets} × ${ex.reps}</div>
        <div class="ex-muscles">${ex.muscles}</div>
      </div>
      <div class="ex-toggle" id="ext-${i}">▼</div>
    </div>
    <div class="ex-detail" id="exd-${i}">
      <div class="ex-cues">
        <div class="ex-cues-title">✅ Correct Form</div>
        ${ex.cues.map(c=>`<div class="cue-item"><div class="cue-dot"></div><span>${c}</span></div>`).join('')}
      </div>
      <div class="ex-mistakes">
        <div class="ex-mistakes-title">❌ Common Mistakes</div>
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

function toggleSet(day,ex,set) {
  const k=`${day}-${ex}-${set}`;
  setsDone[k]=!setsDone[k];
  renderWorkout();
  checkDayDone(day);
  saveState();
  if(setsDone[k]) showToast('✓ Set completed!');
}

function checkDayDone(day) {
  const d = DAYS[day];
  if (d.rest) return;
  let allDone = d.exercises.every((ex,i)=>{
    const total = parseInt(ex.sets);
    return Array.from({length:total},(_,s)=>setsDone[`${day}-${i}-${s}`]).every(Boolean);
  });
  if (allDone && !completedDays.has(day)) {
    completedDays.add(day);
    updateWeekUI();
    saveState();
    showToast('🎉 Day completed! Great work!');
  }
}

function updateWeekUI() {
  const todayIdx = getTodayIndex();
  for(let i=0;i<7;i++){
    const el=document.getElementById('wc'+i);
    if(el) el.textContent = completedDays.has(i) ? '✓' : '○';
    const wd = document.querySelectorAll('.wday')[i];
    if(wd){
      if(completedDays.has(i)) wd.classList.add('done');
      else wd.classList.remove('done');
      // Highlight today's day in the week grid
      wd.classList.toggle('today', i === todayIdx);
      wd.classList.toggle('active', i === todayIdx);
    }
  }
  // Update gym day count
  const count = document.getElementById('gym-day-count');
  if (count) count.textContent = completedDays.size;
}

// Highlight today in the day tabs
function highlightToday() {
  const todayIdx = getTodayIndex();
  document.querySelectorAll('.day-tab').forEach((t, i) => {
    t.classList.toggle('today', i === todayIdx);
  });
}

function selectDay(d) {
  currentDay = d;
  document.querySelectorAll('.day-tab').forEach((t,i)=>{
    t.classList.toggle('active',i===d);
    // Mark today's tab with a special class
    t.classList.toggle('today', i === getTodayIndex());
  });
  renderWorkout();
}

function goWorkout(d) {
  nav('workout');
  setTimeout(()=>selectDay(d),50);
}

// ── FOOD GRID ────────────────────────────────────────────────────────────────
function renderFoods() {
  document.getElementById('food-grid').innerHTML = FOODS.map(f=>`
    <div class="food-card">
      <div class="food-icon">${f.icon}</div>
      <div class="food-name">${f.name}</div>
      <div class="food-protein">${f.protein}</div>
      <div class="food-tags">${f.tags.map(t=>`<span class="ftag ftag-${t.c}">${t.l}</span>`).join('')}</div>
      <div class="food-tip">${f.tip}</div>
    </div>`).join('');
}

// ── MEALS ────────────────────────────────────────────────────────────────────
function renderMeals() {
  document.getElementById('meal-list').innerHTML = MEALS.map(m=>`
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
  document.getElementById('tip-grid').innerHTML = TIPS.map(t=>`
    <div class="tip-card"><div class="tip-icon">${t.icon}</div><div class="tip-title">${t.title}</div><div class="tip-text">${t.text}</div></div>`).join('');
  document.getElementById('supp-grid').innerHTML = SUPPS.map(s=>`
    <div class="supp-card"><div class="supp-name">${s.name}</div><div class="supp-dose">${s.dose}</div><div class="supp-info">${s.info}</div></div>`).join('');
}

// ── PROTEIN TRACKER ──────────────────────────────────────────────────────────
function renderProteinTracker() {
  document.getElementById('protein-btns').innerHTML = PROTEIN_FOODS.map((f,i)=>`
    <button class="protein-food-btn" onclick="addProtein(${f.g})">
      + ${f.name}<span class="pf-grams">+${f.g}g</span>
    </button>`).join('');
}

function addProtein(g) {
  proteinG = Math.min(proteinG + g, 200);
  updateProteinUI();
  saveState();
  showToast(`+${g}g protein added`);
}

function updateProteinUI() {
  const pct = Math.min((proteinG/130)*100,100);
  const el = document.getElementById('protein-count');
  const bar = document.getElementById('protein-bar');
  const badge = document.getElementById('daily-protein-badge');
  if(el) el.textContent = `${proteinG}g / 130g`;
  if(bar) bar.style.width = pct+'%';
  if(badge) badge.textContent = proteinG;
  if(pct>=100 && bar) bar.style.background='var(--accent)';
}

// ── WARMUP CHECKLIST ─────────────────────────────────────────────────────────
function renderWarmup() {
  const items = [
    {text:'5 min treadmill walk — 4.5–5 km/h', icon:'🚶'},
    {text:'Arm circles — 10 forward, 10 backward', icon:'🔄'},
    {text:'Shoulder cross-body stretch — 20 sec each', icon:'💪'},
    {text:'Hip circles — 10 each direction', icon:'🔁'},
    {text:'Leg swings — front/back and side/side', icon:'🦵'},
    {text:'Light band pull-aparts (upper body days)', icon:'🏋️'},
    {text:'Bodyweight squats × 10 (leg day)', icon:'🏃'},
  ];
  document.getElementById('warmup-list').innerHTML = items.map((item,i)=>{
    const id='wm'+i;
    return `<div class="warmup-item" onclick="toggleWarmup('${id}',this)" id="${id}">
      <div class="wm-dot"></div>
      <span style="font-size:14px;flex:1">${item.icon} ${item.text}</span>
    </div>`;
  }).join('');
}

function toggleWarmup(id, el) {
  const done = el.classList.toggle('done');
  const dot = el.querySelector('.wm-dot');
  dot.innerHTML = done ? '✓' : '';
  if (done) showToast('✓ Warm-up step done!');
}

// ── TIMER ─────────────────────────────────────────────────────────────────────
function updateTimerDisplay() {
  const m = Math.floor(timerSec/60), s = timerSec%60;
  const disp = document.getElementById('timer-disp');
  disp.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  const pct = (timerSec/timerMax);
  disp.style.color = pct < 0.25 ? 'var(--red)' : pct < 0.5 ? 'var(--accent)' : 'var(--green)';
}

function timerToggle() {
  const disp = document.getElementById('timer-disp');
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
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
    timerInterval = setInterval(()=>{
      if (timerSec > 0) { timerSec--; updateTimerDisplay(); }
      else {
        clearInterval(timerInterval); timerRunning = false;
        document.getElementById('timer-main-btn').textContent = 'Start';
        document.getElementById('timer-main-btn').className = 'timer-btn timer-start';
        document.getElementById('timer-label').textContent = '✓ REST DONE — GO!';
        disp.style.color = 'var(--green)';
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
  document.querySelectorAll('.preset-btn').forEach(b=>b.classList.remove('sel'));
  event.target.classList.add('sel');
  updateTimerDisplay();
}

// ── RESET FUNCTIONS ──────────────────────────────────────────────────────────
function resetDay() {
  if (!confirm('Reset today\'s progress?')) return;
  const d = DAYS[currentDay];
  if (!d.rest) {
    d.exercises.forEach((_,i) => {
      const total = parseInt(d.exercises[i].sets);
      for(let s=0;s<total;s++) delete setsDone[`${currentDay}-${i}-${s}`];
    });
  }
  completedDays.delete(currentDay);
  saveState(); renderWorkout(); updateWeekUI();
  showToast('Day progress reset');
}

function resetWeek() {
  if (!confirm('Reset ALL weekly progress? This cannot be undone.')) return;
  setsDone = {};
  completedDays = new Set();
  proteinG = 0;
  waterGlasses = 0;
  saveState(); renderWorkout(); updateWeekUI(); updateProteinUI(); updateWaterUI();
  showToast('Week reset complete');
}

// ── NAV ───────────────────────────────────────────────────────────────────────
const PAGE_TITLES = {
  overview:['Dashboard','72 kg · 175 cm · BMI 23.5 · Goal: Lean Muscle'],
  workout:['Workout Plan','Chest / Back / Legs / Shoulders / Back & Bi / Arms · 6 days/week'],
  timer:['Rest Timer','Track your recovery between sets'],
  diet:['Diet & Protein','130g protein/day · 2350 kcal · India-friendly'],
  meals:['Meal Plan','Full day eating guide · ~148g protein'],
  tips:['Recovery & Tips','Lifestyle, supplements & injury prevention'],
};

function nav(page) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.sb-btn').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.bn-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+page).classList.add('active');
  const btns = document.querySelectorAll('.sb-btn');
  const order=['overview','workout','timer','diet','meals','tips'];
  const idx = order.indexOf(page);
  if(btns[idx]) btns[idx].classList.add('active');
  const bnBtns = document.querySelectorAll('.bn-btn');
  if(bnBtns[idx]) bnBtns[idx].classList.add('active');
  const [t,s] = PAGE_TITLES[page]||['',''];
  document.getElementById('page-title').textContent = t;
  document.getElementById('page-sub').textContent = s;
  // Scroll to top on page change
  document.querySelector('.main-area').scrollTo({top:0,behavior:'smooth'});
}

// ── PWA INSTALL ──────────────────────────────────────────────────────────────
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  const banner = document.getElementById('install-banner');
  if(banner) banner.classList.add('show');
});

function installPWA() {
  if (!deferredPrompt) return;
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(r => {
    if (r.outcome === 'accepted') showToast('App installed! 🎉');
    deferredPrompt = null;
    document.getElementById('install-banner').classList.remove('show');
  });
}

function dismissInstall() {
  document.getElementById('install-banner').classList.remove('show');
}

// ── SERVICE WORKER REGISTRATION ──────────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(r => console.log('SW registered:', r.scope))
      .catch(e => console.log('SW registration failed:', e));
  });
}

// ── WATER TRACKER ────────────────────────────────────────────────────────────
function addWater() {
  if (waterGlasses < 12) {
    waterGlasses++;
    updateWaterUI();
    saveState();
    showToast(`💧 Glass ${waterGlasses}/8 — ${waterGlasses >= 8 ? 'Goal hit!' : 'Keep drinking!'}`);
  }
}

function removeWater() {
  if (waterGlasses > 0) {
    waterGlasses--;
    updateWaterUI();
    saveState();
  }
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
      `<div class="water-glass ${i < waterGlasses ? 'filled' : ''}" onclick="${i < waterGlasses ? 'removeWater()' : 'addWater()'}">${i < waterGlasses ? '💧' : '○'}</div>`
    ).join('');
  }
}

// ── BODY WEIGHT TRACKER ──────────────────────────────────────────────────────
function logWeight() {
  const input = document.getElementById('weight-input');
  const val = parseFloat(input.value);
  if (!val || val < 30 || val > 200) { showToast('Enter a valid weight (30–200 kg)'); return; }
  const today = new Date().toISOString().split('T')[0];
  // Replace if same date exists
  weightLog = weightLog.filter(e => e.date !== today);
  weightLog.push({date: today, kg: val});
  weightLog.sort((a, b) => a.date.localeCompare(b.date));
  if (weightLog.length > 90) weightLog = weightLog.slice(-90);
  input.value = '';
  saveState();
  renderWeightChart();
  showToast(`✓ Weight logged: ${val} kg`);
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
  const diffColor = diff > 0 ? 'var(--red)' : diff < 0 ? 'var(--green)' : 'var(--muted)';
  const diffSign = diff > 0 ? '+' : '';

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
      <defs><linearGradient id="wgrad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="var(--accent)"/><stop offset="100%" stop-color="var(--green)"/></linearGradient></defs>
    </svg>
    <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--dim);margin-top:4px;font-family:'Space Mono',monospace">
      <span>${last[0].date.slice(5)}</span><span>${latest.date.slice(5)}</span>
    </div>`;
}

// ── WORKOUT STOPWATCH ────────────────────────────────────────────────────────
function toggleWorkoutStopwatch() {
  const btn = document.getElementById('sw-btn');
  if (workoutStopwatchRunning) {
    clearInterval(workoutStopwatch);
    workoutStopwatchRunning = false;
    btn.textContent = '▶ Resume';
    btn.className = 'sw-btn sw-start';
  } else {
    workoutStopwatchRunning = true;
    btn.textContent = '⏸ Pause';
    btn.className = 'sw-btn sw-pause';
    workoutStopwatch = setInterval(() => {
      workoutElapsed++;
      updateStopwatchDisplay();
    }, 1000);
  }
}

function resetWorkoutStopwatch() {
  clearInterval(workoutStopwatch);
  workoutStopwatchRunning = false;
  workoutElapsed = 0;
  updateStopwatchDisplay();
  const btn = document.getElementById('sw-btn');
  if (btn) { btn.textContent = '▶ Start'; btn.className = 'sw-btn sw-start'; }
}

function updateStopwatchDisplay() {
  const m = Math.floor(workoutElapsed / 60);
  const s = workoutElapsed % 60;
  const el = document.getElementById('sw-display');
  if (el) el.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ── WORKOUT LOG (weight x reps per exercise) ────────────────────────────────
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
  showToast(`✓ Logged: ${w}kg × ${r} reps`);
  wInput.style.borderColor = 'rgba(61,232,160,.3)';
  rInput.style.borderColor = 'rgba(61,232,160,.3)';
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
updateGreeting();

// Select today's day tab on load
const todayIdx = getTodayIndex();
selectDay(todayIdx);

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
highlightToday();

// animate progress bars on load
setTimeout(()=>{
  document.querySelectorAll('.prog-fill').forEach(f=>{
    const w = f.style.width; f.style.width='0';
    setTimeout(()=>f.style.width=w, 100);
  });
}, 300);

// splash screen
setTimeout(() => {
  const splash = document.getElementById('splash');
  if(splash) splash.classList.add('hidden');
}, 1200);
