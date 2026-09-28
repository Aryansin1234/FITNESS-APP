// ══════════════════════════════════════════════════════════════════════════════
//   VIDHA'S FITNESS APP — DATA
//   21 yrs · 44 kg · 163 cm · BMI 16.5 → Target 18.5–21
//   3-Phase 12-week progressive plan  (Phase 1: Weeks 1-4 · Phase 2: Weeks 5-8 · Phase 3: Weeks 9-12)
//   Each phase has 7-day DAYS array (Mon=workout, Tue=rest, Wed=workout, Thu=rest, Fri=workout, Sat/Sun=rest)
// ══════════════════════════════════════════════════════════════════════════════

// ── SVG ICON LIBRARY ──────────────────────────────────────────────────────────
// All icons used across tips, foods, strategy cards, warmup, etc.
const ICONS = {
  heart:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  flame:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
  moon:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
  drop:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`,
  chart:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  food:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
  bolt:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  brain:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z"/></svg>`,
  camera:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  chat:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  run:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="1"/><path d="m7 17 1.5-4.5 2.5 3 2-3.5 1 5"/><path d="M9 9.5 7 17"/><path d="M11.5 10 16 9l1 5"/></svg>`,
  leaf:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,
  star:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  shield:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  clock:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  weight:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4v16M18 4v16M6 12h12M3 8h3M18 8h3M3 16h3M18 16h3"/></svg>`,
  target:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`,
  up:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
  plant:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  pill:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>`,
  check:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  walk:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="1"/><path d="m7 21 3-6"/><path d="m13 21-3-6 1-4 3 2"/><path d="m7 12 3-2 2-4"/><path d="m11 6 2 2 3-1"/></svg>`,
  rotate:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>`,
  body:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v7m0 0-3 3m3-3 3 3"/><path d="M9 12h6"/></svg>`,
  music:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>`,
  egg:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/></svg>`,
  grain:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 22 16 8"/><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94z"/><path d="M20 2H22v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4z"/><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0z"/></svg>`,
  milk:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2h8"/><path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"/></svg>`,
  fish:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 3.3-.05 6.15 2.27 7.5-2.32 1.35-3.27 4.2-2.27 7.5C5.58 20.03 7 18 7 15.33"/></svg>`,
  beans:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"/><path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"/><path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"/></svg>`,
  nut:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 1 0 5 5A5 5 0 0 0 12 2z"/><path d="M12 7v10"/><path d="M7 13h10"/></svg>`,
  cheese:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6l9-4 9 4v2H3z"/><path d="M3 8v12h18V8"/><circle cx="8" cy="14" r="1"/><circle cx="15" cy="11" r="1"/></svg>`,
  sprout:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></svg>`,
  seed:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 10s3-3 3-8c5 0 8 3 8 8-5 0-8-3-8-3"/><path d="M2 10v12"/><path d="M14 14s3 3 3 8c-5 0-8-3-8-8 5 0 8 3 8 3"/><path d="M14 14v-4"/></svg>`,
  yeast:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/><path d="M8 12h8"/><path d="M12 8v8"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><circle cx="9" cy="15" r="1"/><circle cx="15" cy="15" r="1"/></svg>`,
  tofu:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M3 14h18"/><path d="M9 6v12"/><path d="M15 6v12"/></svg>`,
};

// ── PHASE DEFINITIONS ─────────────────────────────────────────────────────────
const PHASES = [
  {
    id: 0,
    name: 'Phase 1',
    label: 'Foundation',
    weeks: 'Weeks 1–4',
    desc: 'Warmup-dominant. Learn movement patterns. Build body awareness. Light cardio. No weights yet.',
    color: 'var(--mint)',
    gradient: 'var(--gradient-green)',
  },
  {
    id: 1,
    name: 'Phase 2',
    label: 'Build',
    weeks: 'Weeks 5–8',
    desc: 'Introduce light weights. 3 sets per exercise. Moderate cardio. Start tracking progress.',
    color: 'var(--lavender)',
    gradient: 'var(--gradient-purple)',
  },
  {
    id: 2,
    name: 'Phase 3',
    label: 'Progress',
    weeks: 'Weeks 9–12',
    desc: 'Add resistance. Progressive overload begins. Heavier cardio. Body composition improves.',
    color: 'var(--accent)',
    gradient: 'var(--gradient-accent)',
  },
];

// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 1 — FOUNDATION (Weeks 1–4)
//   Goal: Learn to move. Build routine. Warmup + bodyweight + very light cardio.
//   No barbells. No heavy loading. Form comes first.
// ══════════════════════════════════════════════════════════════════════════════
// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 1 — WAKE UP (Weeks 1–4)
//   Goal: Get comfortable in the gym. Learn to breathe. Fix posture. Move.
//   NO weights. NO machines. NO squats. Pure mobility, breathing, gentle movement.
//   Sessions: 35–40 min including warmup + gentle cardio finish.
// ══════════════════════════════════════════════════════════════════════════════
const DAYS_PHASE1 = [

  /* ── MONDAY — Breathe & Move ── */
  {name:'Monday', tag:'Breathe & Move', tagClass:'push',
   phase:'Phase 1 · Weeks 1–4',
   focus:'Diaphragmatic Breathing · Posture Awareness · Gentle Mobility',
   cardio:'10 min easy treadmill walk (4.5–5 km/h, flat) — this is enough for Week 1',
   warmup:[
     {text:'Stand tall and take 5 deep belly breaths — hand on stomach, feel it rise', icon:'drop'},
     {text:'Gentle neck rolls — 5 each direction, very slow', icon:'rotate'},
     {text:'Shoulder rolls — 10 forward, 10 backward', icon:'rotate'},
     {text:'Wrist and ankle circles — 10 each, both directions', icon:'rotate'},
   ],
   exercises:[
    {name:'Diaphragmatic Breathing Practice',sets:'3',reps:'10 breaths',
     tempo:'4 sec in · 6 sec out',rest:'30 sec',
     muscles:'Core, Diaphragm, Pelvic Floor — the foundation of all exercise. Most people breathe incorrectly. Fix this first.',
     svg:`<img src="./images/w_breathing.jpg" alt="Breathing">`,
     breathing:'This IS the exercise. Breathe in through your nose for 4 seconds — feel your belly expand outward, not your chest. Hold for 1 second. Breathe out slowly through your mouth for 6 seconds — feel your belly fall. This belly breathing (diaphragmatic) is what protects your spine during all exercise.',
     cues:['Lie on your back with knees bent, one hand on chest, one on belly','The belly hand should rise. The chest hand should stay still.','4 counts IN through the nose — belly expands like a balloon','Hold 1 count','6 counts OUT through the mouth — belly falls gently','By week 4, you will do this automatically during every exercise'],
     mistakes:['Chest rising instead of belly — this is chest breathing, incorrect','Rushing — each breath cycle takes 11 seconds, go slowly','Holding your breath at any point — release is as important as intake','Tensing your shoulders — they should stay completely relaxed']},

    {name:'Cat-Cow Stretch',sets:'3',reps:'8 slow cycles',
     tempo:'4 sec each direction',rest:'20 sec',
     muscles:'Spine Mobility, Lower Back, Core — wakes up your spine gently. The most important mobility exercise for a desk-sitter.',
     svg:`<img src="./images/w_stretch.jpg" alt="Cat-Cow">`,
     breathing:'Breathe IN as you arch your back (cow — belly drops). Breathe OUT as you round your back (cat — belly tucks). The breath drives the movement.',
     cues:['Start on all fours — wrists under shoulders, knees under hips','COW: breathe in, drop your belly toward the floor, lift your head and tailbone','CAT: breathe out, round your back toward the ceiling, tuck chin and tailbone','Move very slowly — each position held for 4 seconds','Feel every vertebra in your spine moving','Close your eyes — notice where your back feels stiff'],
     mistakes:['Moving too fast — this is not a cardio exercise, go slow','Only moving one end of the spine — try to feel the whole spine','Holding the breath — breath and movement are linked here','Wrists hurting — make fists or use a folded towel for support']},

    {name:'Glute Bridge Hold',sets:'3',reps:'8 reps · 3 sec hold each',
     tempo:'2 up · 3 hold · 2 down',rest:'40 sec',
     muscles:'Glutes, Lower Back Stability — the safest glute exercise. Also teaches you to feel your glutes working, which most beginners cannot do.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Glute Bridge">`,
     breathing:'Breathe in lying flat. Breathe OUT as you squeeze and lift. Hold at the top breathing shallowly. Breathe in as you lower slowly.',
     cues:['Lie on your back, knees bent, feet flat, arms by your sides','Squeeze your glutes FIRST — then lift your hips','Hips rise until your body is a straight line from knees to shoulders','Hold for 3 full seconds — keep squeezing the bottom hard','Lower slowly for 2 counts — do not drop','Feet should be placed so your shins are vertical at the top'],
     mistakes:['Lifting with your lower back — squeeze GLUTES first, not back muscles','Feet too far away — heels should be close enough to nearly touch with your hands','Not feeling anything — if no glute sensation, try pressing heels into the floor harder','Rushing the hold — count 3 full seconds at the top']},

    {name:'Bird-Dog',sets:'3',reps:'6 each side',
     tempo:'4 sec extend · 2 sec return',rest:'40 sec',
     muscles:'Deep Core, Balance, Coordination — the gentlest core exercise that builds real stability. No sit-ups ever needed.',
     svg:`<img src="./images/w_core.jpg" alt="Bird-Dog">`,
     breathing:'Breathe OUT slowly as you extend your arm and leg. Hold breathing shallowly. Breathe in as you return to start.',
     cues:['All fours — wrists under shoulders, knees under hips, back flat like a table','Tighten your core gently — imagine bracing for a soft tap on your belly','Slowly extend your RIGHT arm forward and LEFT leg back at the same time','Go only as far as you can without your back arching or hips tilting','Hold for 4 seconds, then return slowly','Think slow, smooth, quiet — no jerking'],
     mistakes:['Hips tilting to one side — keep them level, like a table','Arm or leg going too high and causing back arch — go lower','Moving too fast — if it takes less than 6 seconds per rep, slow down','Holding your breath — keep exhaling throughout the extension']},

    {name:'Seated Shoulder Rolls + Neck Stretch',sets:'2',reps:'10 rolls + 20 sec each side',
     tempo:'Slow and controlled',rest:'20 sec',
     muscles:'Neck, Upper Traps, Shoulders — releases the tension most people carry here. Essential for posture.',
     svg:`<img src="./images/w_warmup.jpg" alt="Shoulder Stretch">`,
     breathing:'Breathe in on the stretch, breathe out to release deeper into it. Never hold your breath during stretching.',
     cues:['Sit on a bench, feet flat on the floor, spine tall','10 big backward shoulder rolls — slow, making the biggest circle possible','Now drop your right ear toward your right shoulder — feel the left side of your neck stretch','Hold 20 seconds, breathe into the stretch','Switch sides','Your shoulders should feel noticeably lower afterward'],
     mistakes:['Rolling shoulders forward (forward rolls tighten the chest further)','Raising the opposite shoulder during the neck stretch — keep it pressed down','Bouncing in the stretch — hold still, breathe','Skipping this because it feels too easy — postural muscles need this']},

    {name:'Standing Wall Posture Check',sets:'2',reps:'Hold 30 sec',
     tempo:'Hold with breath awareness',rest:'20 sec',
     muscles:'Posture Muscles, Spinal Alignment — most gym injuries come from poor posture. Fix it before you lift.',
     svg:`<img src="./images/w_gym_general.jpg" alt="Posture">`,
     breathing:'Breathe normally. Focus on belly breathing while maintaining the posture. This combines your two most important Phase 1 skills.',
     cues:['Stand with your back against a wall, heels 2 inches from the wall','Your head, shoulder blades, and bottom should all touch the wall','There will be a natural gap behind your lower back — that is correct','Try to close the gap slightly by gently tucking your pelvis — do not flatten it completely','Hold for 30 seconds breathing into your belly','Walk away — try to maintain this position for the next 10 minutes'],
     mistakes:['Forcing your back flat against the wall — the natural curve is correct','Chin jutting forward — the back of your head touches the wall, not the front','Shoulders tensing up — breathe and let them relax DOWN','Forgetting about it after you walk away — posture work is all-day, not just in the gym']}
   ]},

  /* ── TUESDAY REST ── */
  {name:'Tuesday',tag:'Rest',tagClass:'rest',rest:true,
   restMsg:'Your first rest day. Notice if your body feels any different — even gentle movement creates change.',
   restTips:[
    '15 min gentle walk outside — fresh air and sunlight do more than you think',
    'Try the belly breathing practice (diaphragmatic breathing) for 5 minutes before sleep',
    'Drink at least 2 litres of water today',
    'Notice your posture right now — are your shoulders rounded? Correct it.',
    'Eat your full calorie target — rest days need fuel too',
    'Sleep 7–9 hours — recovery happens during sleep, not during the workout'
   ]},

  /* ── WEDNESDAY — Feel Your Body ── */
  {name:'Wednesday',tag:'Feel Your Body',tagClass:'back',
   phase:'Phase 1 · Weeks 1–4',
   focus:'Hip Mobility · Body Awareness · Light Core Activation',
   cardio:'10 min light stationary bike (lowest resistance) — comfortable and easy',
   warmup:[
     {text:'5 deep belly breaths standing — establish breathing from the start', icon:'drop'},
     {text:'Hip circles — 10 slow rotations each direction', icon:'rotate'},
     {text:'Ankle circles — 10 each foot to loosen joints', icon:'rotate'},
     {text:'Gentle calf raises × 10 — just to get the blood moving', icon:'walk'},
   ],
   exercises:[
    {name:'90/90 Hip Stretch',sets:'2',reps:'Hold 40 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Hip Flexors, Piriformis, IT Band — the most common area of tightness in young women who sit. Tightness here causes lower back pain and limits ALL lower body exercises.',
     svg:`<img src="./images/w_stretch.jpg" alt="90/90 Stretch">`,
     breathing:'Breathe in through your nose, out through your mouth. With every exhale, let the hip sink a little deeper. Do not force it — use the breath.',
     cues:['Sit on the floor. Bend your front leg at 90° in front of you. Bend your back leg at 90° to the side.','Both legs are in an "L" shape. Sit tall, hands on the floor for support.','Feel a deep stretch in the outer hip of your front leg and the front of your back hip.','Hold for 40 seconds, breathing slowly. Then switch sides.','Do not force yourself lower — let gravity and the breath do the work.','After 2 weeks, you will go significantly deeper. That is your flexibility returning.'],
     mistakes:['One side is much tighter than the other — that is very normal, spend more time on the tighter side','Leaning heavily on your hands instead of sitting tall — try to lighten your hand pressure','Rounding your back — sit tall like someone is pulling a string from the top of your head','Holding your breath — this locks up the muscles and prevents the stretch from working']},

    {name:'Clamshell',sets:'3',reps:'15 each side',
     tempo:'2 up · 1 hold · 2 down',rest:'30 sec',
     muscles:'Glute Medius (outer hip/glute) — this muscle stabilises your knees and hips. Weakness here is the #1 cause of knee pain in women.',
     svg:`<img src="./images/w_glute.jpg" alt="Clamshell">`,
     breathing:'Exhale as you open your knee upward. Breathe in as you lower. One breath per rep.',
     cues:['Lie on your side, hips stacked, both knees bent to 45°, feet together','Keep your feet touching — do NOT let them separate','Rotate your top knee upward toward the ceiling — like a clamshell opening','Only go as high as you can without your hips rolling backward','Hold 1 second at the top, then lower slowly for 2 counts','By rep 12 you should feel a mild burn in your outer glute'],
     mistakes:['Hips rolling backward to create more range — hold them still','Feet separating — keep them pressed together throughout','Moving too fast — 2 seconds up, 1 hold, 2 down is the tempo','Not feeling it in the right place — if you feel the back of your thigh, your knee is not going high enough']},

    {name:'Dead Bug',sets:'3',reps:'5 each side',
     tempo:'4 sec lower · pause · 2 sec return',rest:'40 sec',
     muscles:'Deep Core (Transverse Abdominis) — the inner corset muscle that protects your spine. Sit-ups do not train this. Dead Bug does.',
     svg:`<img src="./images/w_core.jpg" alt="Dead Bug">`,
     breathing:'EXHALE fully before you start moving. Keep breathing out slowly as you lower your limbs. If you run out of breath, the rep is over — return to start. This is correct.',
     cues:['Lie on your back. Press your lower back into the floor — this is essential.','Arms point to the ceiling. Both legs lifted, knees at 90°.','Lower your RIGHT arm back and LEFT leg forward — VERY SLOWLY, taking 4 full seconds','Your lower back must stay pressed to the floor the ENTIRE time','Return to start slowly (2 counts), then do the other side','Start with very small range of motion if needed — that is fine'],
     mistakes:['Lower back lifting off the floor — make your range SMALLER, not bigger','Moving too fast — if each rep takes less than 6 seconds, slow down','Using opposite-side arm and leg from what was described (easy mistake)','Holding your breath — the exhale is what makes this exercise work']},

    {name:'Prone Y-T-W (Posture)',sets:'2',reps:'8 of each letter',
     tempo:'2 up · 2 hold · 2 down',rest:'30 sec',
     muscles:'Lower Traps, Rear Deltoids, Rhomboids — the postural muscles that prevent rounded shoulders. Essential for all overhead and pressing movements.',
     svg:`<img src="./images/w_stretch.jpg" alt="Y-T-W">`,
     breathing:'Breathe in lying flat. Breathe out as you lift. Hold breathing shallowly. Breathe in as you lower.',
     cues:['Lie face down on a mat, forehead resting on the floor or a folded towel','Y: arms extended above your head at 45° — lift both arms, hold 2 sec, lower','T: arms out to the sides at 90° — lift both arms, hold 2 sec, lower','W: elbows bent 90°, hands at ear level — lift, hold 2 sec, lower','The lift should be small — just a few centimetres off the ground','You should feel this between your shoulder blades and in your upper back'],
     mistakes:['Lifting too high and straining the neck — small lift is correct','Neck craning upward — keep it neutral, look at the floor','Going too fast — each letter set is 6 seconds per rep','Shrugging the shoulders up — keep them pressed DOWN throughout']},

    {name:'Supine Spinal Twist',sets:'2',reps:'Hold 40 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Lower Back, Thoracic Spine, Obliques — releases lower back tension and improves spinal rotation.',
     svg:`<img src="./images/w_yoga.jpg" alt="Spinal Twist">`,
     breathing:'Breathe into the stretch with every inhale. With every exhale, let the twist go a tiny bit deeper. Never force.',
     cues:['Lie on your back, arms out to the sides in a T','Bring your right knee to your chest, then let it fall over to the LEFT side','Your right shoulder stays on the floor — do not let it lift','Turn your head to look to the RIGHT if comfortable','Hold 40 seconds, breathing slowly, letting gravity deepen the twist','Bring knee back to center slowly, then switch sides'],
     mistakes:['Forcing the knee all the way to the floor — go only as far as is comfortable','Lifting the opposite shoulder off the floor — this removes the spinal rotation','Holding your breath — breathe continuously, slowly','Moving too quickly between sides — this is a slow, restorative stretch']}
   ]},

  /* ── THURSDAY REST ── */
  {name:'Thursday',tag:'Rest',tagClass:'rest',rest:true,
   restMsg:'Breathing, posture, and mobility — small things with massive long-term value. You are building a foundation.',
   restTips:[
    'Belly breathing practice: 5 minutes lying down before sleep — build the habit',
    'Go for a walk if you feel up to it — movement aids recovery',
    'Stretch your hips for 10 minutes: 90/90 from Wednesday is perfect',
    'Drink herbal tea and get to bed by 10:30 PM tonight',
    'Notice: are your shoulders more relaxed today than Monday? That is already progress.',
    'Eat well today — your body is rebuilding'
   ]},

  /* ── FRIDAY — Move With Intention ── */
  {name:'Friday',tag:'Move With Intention',tagClass:'legs',
   phase:'Phase 1 · Weeks 1–4',
   focus:'Coordination · Hip & Ankle Mobility · Light Core',
   cardio:'12 min easy treadmill walk (5 km/h) at the END as a cool-down walk',
   warmup:[
     {text:'5 belly breaths to start — hand on stomach, belly rises first', icon:'drop'},
     {text:'Leg swings — forward and backward × 10 each leg', icon:'walk'},
     {text:'Side-to-side leg swings × 10 each leg', icon:'walk'},
     {text:'Gentle torso rotations × 10 each way, arms relaxed', icon:'rotate'},
   ],
   exercises:[
    {name:'Wall Slide (Shoulder Mobility)',sets:'3',reps:'10',
     tempo:'4 sec slide up · 4 sec slide down',rest:'20 sec',
     muscles:'Shoulders, Rotator Cuff, Upper Back — tests and improves shoulder mobility needed for all pressing and pulling exercises.',
     svg:`<img src="./images/w_warmup.jpg" alt="Wall Slide">`,
     breathing:'Breathe in as you slide up. Breathe out as you slide down. Keep it rhythmic and relaxed.',
     cues:['Stand with your back against a wall, feet about 15 cm from the wall','Press your lower back, upper back, and head against the wall','Bend your elbows 90° and place your forearms on the wall (like a cactus shape)','Keep forearms and backs of hands touching the wall throughout','Slide your arms slowly upward — go only as high as you can while keeping contact','Slide back down — repeat'],
     mistakes:['Forearms losing contact with the wall — this shows shoulder tightness, do not force','Lower back arching away from the wall — tuck your pelvis slightly','Chin jutting forward — keep the back of your head on the wall','Shrugging — keep your shoulders pressed DOWN as the arms move UP']},

    {name:'Hip Flexor Lunge Stretch',sets:'2',reps:'Hold 40 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Hip Flexors — the most important stretch for anyone who sits. Tight hip flexors cause lower back pain and prevent glutes from activating properly.',
     svg:`<img src="./images/w_lunges.jpg" alt="Hip Flexor Stretch">`,
     breathing:'Breathe in through your nose. As you breathe out, gently push your hips forward to deepen the stretch. Breathe into the front of the hip.',
     cues:['Kneel on your right knee, left foot forward (lunge position)','Both knees at approximately 90°','Tuck your pelvis under gently — reduce the arch in your lower back','Shift your body weight forward slightly — feel the front of your right hip stretch','Hold your arms up or on your hips, stay upright','Hold 40 seconds, breathing into the stretch. Switch sides.'],
     mistakes:['Not feeling the stretch — tuck your pelvis more (imagine your tailbone pointing down)','Leaning forward excessively — stay upright to get the hip flexor, not the thigh','The front knee going past the toes — shuffle your front foot forward','Rushing through it — 40 seconds feels long, but it is what the hip flexor needs']},

    {name:'Seated Calf Stretch + Ankle Alphabet',sets:'2',reps:'30 sec calf + alphabet once each foot',
     tempo:'Controlled',rest:'20 sec',
     muscles:'Calves, Ankles, Plantar Fascia — ankle mobility is essential for squats. Most beginners have very stiff ankles.',
     svg:`<img src="./images/w_stretch.jpg" alt="Calf Stretch">`,
     breathing:'Breathe normally throughout. Breathe into any areas of tightness.',
     cues:['Sit on the floor, legs extended. Flex your feet toward you — feel the calves stretch.','Hold the flex for 30 seconds, then point the feet away. Switch.','Now write the alphabet in the air with your big toe (one foot at a time)','Make the letters as large as possible — move from the ankle, not the knee','Your ankles may feel stiff at first — this improves over weeks','People who can squat deeply have mobile ankles. This is how you get there.'],
     mistakes:['Only stretching, skipping the alphabet — the controlled movement is equally important','Making tiny letters — the bigger the motion, the more mobility you build','Doing this sitting in a chair with shoes on — needs to be barefoot on the floor','Skipping because it feels too easy — ankle mobility is almost always neglected']},

    {name:'Standing Side Bend',sets:'2',reps:'Hold 30 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Lateral Core, Obliques, Lats — stretches the entire side of the body.',
     svg:`<img src="./images/w_gym_general.jpg" alt="Side Bend">`,
     breathing:'Breathe into the stretched side. Feel the ribcage expand with each inhale. The exhale helps you go slightly deeper.',
     cues:['Stand tall, feet hip-width','Raise your right arm overhead','Bend gently to the LEFT — feel the entire right side of your body lengthen','Keep both feet flat, both hips level — do not lean forward or backward','Hold 30 seconds with slow breathing. Switch sides.','You should feel this from your hip all the way up to your armpit'],
     mistakes:['Leaning forward or backward — keep your side bend purely lateral','The opposite hip shifting out — keep both hips level and square','Holding your breath — breathe continuously','Going too far too soon — start gentle, you can go deeper each week']},

    {name:'Constructive Rest Position',sets:'1',reps:'3 minutes',
     tempo:'Breathe and release',rest:'None',
     muscles:'Full Body Release, Nervous System — ends every Phase 1 session. Teaches your body to fully relax after movement. Builds the mind-body connection.',
     svg:`<img src="./images/w_yoga.jpg" alt="Rest Position">`,
     breathing:'Natural breathing only. Breathe in through your nose, out through your mouth. Let your belly rise and fall freely. Do not control it — just observe.',
     cues:['Lie on your back. Knees bent, feet flat on the floor, hip-width apart.','Arms rest at your sides or on your belly','Close your eyes. Let your body get heavy.','Scan from head to toe: release tension in your jaw, neck, shoulders, hands, legs','Stay here for 3 full minutes — do not look at your phone','Notice your breathing slowing down naturally. Notice your back releasing toward the floor.'],
     mistakes:['Skipping this because it feels like doing nothing — it is doing everything','Getting up too quickly — give yourself 3 full minutes','Thinking about something else — gently bring attention back to your breath and body','Holding tension anywhere — scan and consciously release']}
   ]},

  /* ── SATURDAY REST ── */
  {name:'Saturday',tag:'Rest Day',tagClass:'rest',rest:true,
   restMsg:'Week 1 of Phase 1 done. You have started. Most people never do. That matters.',
   restTips:[
    'Full rest day — gentle movement only if you feel like it',
    'A slow walk in nature is perfect today',
    'Review how your body felt this week — what was tight, what was surprising',
    'Practice belly breathing for 5 minutes at some point today',
    'Prepare good food for the coming week',
    'You are building a foundation that everything else will stand on'
   ]},

  /* ── SUNDAY REST ── */
  {name:'Sunday',tag:'Rest Day',tagClass:'rest',rest:true,
   restMsg:'Tomorrow starts Week 2. The exercises will feel more familiar. Your body is already adapting.',
   restTips:[
    'Light stretching — 10–15 minutes of the stretches from this week',
    'Meal prep for the coming week — makes eating well much easier',
    'Log your body weight in the morning (before food, after bathroom)',
    'Think about one thing to focus on this coming week',
    'Every session in Phase 1 is building the body awareness that makes Phases 2 and 3 safer and more effective',
    'You are exactly where you should be'
   ]},
];

// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 2 — MOVE (Weeks 5–8)
//   Goal: Learn fundamental movement patterns using bodyweight only.
//   Wall push-ups progress to incline. Glute bridges progress to single-leg.
//   First squats and hinges introduced as movement patterns, not strength work.
//   Sessions: 40–50 min.
// ══════════════════════════════════════════════════════════════════════════════
const DAYS_PHASE2 = [

  /* ── MONDAY — Lower Body Patterns ── */
  {name:'Monday',tag:'Lower Body Patterns',tagClass:'legs',
   phase:'Phase 2 · Weeks 5–8',
   focus:'Squat Pattern · Hip Hinge · Glute Activation · Balance',
   cardio:'12 min treadmill walk (5.5 km/h, 1% incline) — slightly faster than Phase 1',
   warmup:[
     {text:'5 belly breaths standing — establish correct breathing', icon:'drop'},
     {text:'Hip circles × 10 each direction — warm up the hip joint', icon:'rotate'},
     {text:'Leg swings forward/back × 10 each leg', icon:'walk'},
     {text:'Calf raises × 10 slow — activate lower leg', icon:'walk'},
     {text:'Cat-cow × 6 on all fours — mobilise spine', icon:'body'},
   ],
   exercises:[
    {name:'Bodyweight Squat',sets:'3',reps:'10',
     tempo:'3-1-2-0',rest:'60 sec',
     muscles:'Quads, Glutes, Core — NOW you introduce the squat. You have built the breathing and body awareness to do it correctly.',
     svg:`<img src="./images/w_squat.jpg" alt="Squat">`,
     breathing:'Breathe in as you sit down (3 seconds). Breathe out as you stand up. Apply the belly breathing from Phase 1.',
     cues:['Feet shoulder-width, toes turned out 20–30°. Hands clasped at chest.','Breathe in. Sit back and down — imagine sitting onto a low chair.','Knees push out over your toes — never cave inward','Go until thighs are parallel to the floor (or as low as comfortable)','Drive through your whole foot to stand. Breathe out.','Your posture check from Phase 1 applies: tall spine, open chest'],
     mistakes:['Heels rising — widen stance or turn toes out more','Knees caving inward — actively push them out','Chest falling forward — look straight ahead, not down','Standing up too fast — the tempo is 3 seconds down, 1 pause, 2 seconds up']},

    {name:'Glute Bridge — Single Leg',sets:'3',reps:'10 each leg',
     tempo:'2-2-2-0',rest:'45 sec',
     muscles:'Glutes, Hamstrings, Core — the progression from Phase 1 glute bridge. Single leg challenges each side independently.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Single Leg Glute Bridge">`,
     breathing:'Breathe in lying flat. Breathe OUT as you squeeze and lift. Hold and breathe shallowly. Breathe in as you lower.',
     cues:['Start in glute bridge position — both feet on the floor.','Extend your right leg straight out. Now lift using only your LEFT glute.','Hold at the top for 2 seconds — really squeeze the working glute.','Lower slowly for 2 counts. Complete all 10 reps, then switch.','Your hips should stay level — not tilting side to side.','If this is too hard, keep toes of the raised foot lightly touching the floor'],
     mistakes:['Hips tilting toward the raised leg — brace your core harder','Lower back arching — this is the glute, not the back','Rushing — the 2-second hold at the top is the most important part','Forgetting to breathe — exhale on the lift, breathe shallowly at the top']},

    {name:'Reverse Lunge (Bodyweight)',sets:'3',reps:'10 each leg',
     tempo:'2-1-2-0',rest:'60 sec',
     muscles:'Quads, Glutes, Balance — stepping backward is much safer for beginners than forward lunges. Easier on the knees.',
     svg:`<img src="./images/w_lunges.jpg" alt="Reverse Lunge">`,
     breathing:'Breathe in as you step back and lower. Breathe out as you push back to standing.',
     cues:['Stand tall, hands on hips. Step one foot straight back.','Lower your back knee toward the floor (stop 2–3 cm above it).','Front shin stays vertical — front knee does NOT go past your toes.','Push through the heel of your FRONT foot to return to standing.','Your back leg does not push — it is only for balance.','Do all 10 reps on one side, then switch'],
     mistakes:['Front knee going past the toes — take a larger step back','Leaning forward — keep your torso upright','Back knee slamming the floor — control the descent, stop 2–3 cm above','Wobbling — focus your gaze on a point on the wall ahead for balance']},

    {name:'Standing Hip Hinge (Bodyweight)',sets:'3',reps:'12',
     tempo:'3-0-2-0',rest:'45 sec',
     muscles:'Hamstrings, Glutes — the hip hinge pattern introduced properly. This becomes your deadlift in Phase 3.',
     svg:`<img src="./images/w_deadlift.jpg" alt="Hip Hinge">`,
     breathing:'Breathe in standing tall. Hold gently as you hinge. Breathe out as you stand back up.',
     cues:['Feet hip-width. Soft bend in both knees.','Push your hips BACKWARD — like closing a car door with your bottom.','Your chest lowers as your hips go back — keep the back flat.','Feel the stretch build in the back of your legs (hamstrings).','When you feel that stretch (usually at thigh height), stop — then drive hips forward.','Squeeze your glutes hard at the top to fully complete the rep.'],
     mistakes:['Squatting instead of hinging — hips go BACK, not DOWN','Rounding the lower back — this will become dangerous with weight, fix it now','Not feeling the hamstrings — bend your knees less and push hips further back','Going too low — stop when you feel the hamstring stretch, not when the back rounds']},

    {name:'Dead Bug — Advanced',sets:'3',reps:'8 each side',
     tempo:'4 sec lower · pause · 2 sec return',rest:'40 sec',
     muscles:'Deep Core — you know this from Phase 1. Now focus on slower, more deliberate movement.',
     svg:`<img src="./images/w_core.jpg" alt="Dead Bug">`,
     breathing:'Full exhale before each rep. Continue breathing out as you lower. If your lower back lifts before you run out of breath, your range is too large.',
     cues:['Same as Phase 1 — but now aim for more range without the back lifting','If back stays down: extend further with each rep','If back lifts at any point: stop, return, make the range smaller','Your goal by week 8: full arm extension above head and full leg extension without back lifting'],
     mistakes:['Prioritising range over form — back contact with floor is NON-NEGOTIABLE','Rushing — each rep is 6+ seconds','Any back lifting — reduce range, do not push through it']}
   ]},

  /* ── TUESDAY REST ── */
  {name:'Tuesday',tag:'Active Rest',tagClass:'rest',rest:true,
   restMsg:'Phase 2! Your first squats, your first lunges. Your body is now learning real movement patterns.',
   restTips:[
    '20 min walk — notice if your legs feel different after squats and lunges',
    'Glute bridge practice at home: 20 reps before bed — reinforces the pattern',
    'Foam roll your quads and glutes if sore (a tennis ball works too)',
    'Drink 2.5 litres of water today',
    'Review: did any exercise feel wrong or uncomfortable? Note it.',
    'If something felt right and good — remember that feeling for next session'
   ]},

  /* ── WEDNESDAY — Upper Body Patterns ── */
  {name:'Wednesday',tag:'Upper Body Patterns',tagClass:'push',
   phase:'Phase 2 · Weeks 5–8',
   focus:'Push Pattern · Pull Pattern · Core Stability',
   cardio:'12 min light stationary bike (light resistance, comfortable pace)',
   warmup:[
     {text:'5 belly breaths — re-establish breathing pattern', icon:'drop'},
     {text:'Arm circles × 10 each direction — shoulder warm-up', icon:'rotate'},
     {text:'Shoulder rolls × 10 forward, 10 backward', icon:'rotate'},
     {text:'Wall slides × 8 slow — open the shoulders', icon:'body'},
     {text:'Chest opener stretch × 20 sec (arms behind, open chest)', icon:'leaf'},
   ],
   exercises:[
    {name:'Incline Push-Up (Bench Height)',sets:'3',reps:'10–12',
     tempo:'3-0-2-0',rest:'60 sec',
     muscles:'Chest, Shoulders, Triceps — progressed from Phase 1 wall push-ups. Higher surface = easier; the goal is to work toward the floor over Phase 3.',
     svg:`<img src="./images/w_pushup.jpg" alt="Incline Push-Up">`,
     breathing:'Breathe in as you lower toward the bench (3 seconds). Breathe out as you push away.',
     cues:['Hands on a bench (or sturdy chair), slightly wider than shoulder-width','Body is a straight line from head to heels — like a plank leaning on the bench','Lower your chest toward the bench over 3 slow seconds','Push away until arms are nearly straight — small bend at the top','You should feel your chest working — if only feeling arms, bring hands wider','As this gets easier: lower the surface height (closer to the floor)'],
     mistakes:['Hips sagging — maintain the plank line throughout','Only going halfway — chest should nearly touch the bench','Rushing the lowering — 3 seconds down is the stimulus for strength','Head dropping — keep neck neutral, look at the bench'],},

    {name:'Resistance Band Row (or Towel Row)',sets:'3',reps:'12',
     tempo:'2-1-3-0',rest:'60 sec',
     muscles:'Upper Back, Rhomboids, Biceps — your first pulling exercise. Counteracts all the forward-hunching daily life causes.',
     svg:`<img src="./images/w_row.jpg" alt="Band Row">`,
     breathing:'Breathe in reaching forward. Breathe out as you pull. Breathe in as you return SLOWLY (3 seconds).',
     cues:['Loop a resistance band around a door handle at chest height. Hold both ends.','Step back until there is tension in the band. Stand tall.','Pull the handles toward your body — elbows drive back past your sides.','Squeeze your shoulder blades together at the end — hold 1 second.','Return slowly over 3 full seconds — fight the band.','If no band: loop a rolled towel around a door handle and lean back'],
     mistakes:['Shrugging shoulders up — keep them pressed DOWN throughout','Pulling too high (toward chin) — aim for your belly button','Letting the band snap back — the 3-second return builds your back','Rocking your body — stay still, only your arms move']},

    {name:'Plank — Full (Forearms)',sets:'3',reps:'20–40 sec',
     tempo:'Hold',rest:'45 sec',
     muscles:'Core, Shoulders, Glutes — you have earned this from Phase 1 knee plank. Maintain perfect alignment.',
     svg:`<img src="./images/w_plank.jpg" alt:"Plank">`,
     breathing:'In through nose, out through mouth. Slow and steady. Never hold your breath.',
     cues:['Forearms on the floor, elbows directly under shoulders','Toes on the floor, body in a straight line from heels to head','Squeeze your glutes, pull your belly button toward your spine','Eyes look at the floor — neck neutral','Start at 20 seconds. Add 5 seconds each session until you reach 40 seconds.','Quality over duration — if hips sag, stop and rest'],
     mistakes:['Hips sagging — this is the most common plank mistake, stop when this happens','Holding your breath — breathe continuously','Hips too high (making a triangle) — lower them to a straight line','Neck dropping or craning — keep it neutral, eyes on the floor']},

    {name:'Clamshell — Elevated (Foot on Bench)',sets:'3',reps:'15 each side',
     tempo:'2-1-2-0',rest:'40 sec',
     muscles:'Glute Medius — progression from Phase 1 clamshell. Foot elevated increases range and difficulty.',
     svg:`<img src="./images/w_glute.jpg" alt="Elevated Clamshell">`,
     breathing:'Exhale as you open your knee. Inhale as you lower. One breath per rep.',
     cues:['Lie on your side as before, but rest your feet on a low step or bench','This elevates your feet and increases the challenge on the outer glute','Keep your hips stacked — they must not roll backward','Open the top knee as high as you can without the hip rolling','Hold 1 second at the top — feel the outer glute working','Lower slowly for 2 counts'],
     mistakes:['Hips rolling backward to gain range — hold them still','Moving too fast — 2 seconds up, 1 hold, 2 down','Not feeling the outer glute — try pressing the outer edge of your foot into the step']},

    {name:'Side-Lying Hip Raise',sets:'3',reps:'12 each side',
     tempo:'2-1-2-0',rest:'40 sec',
     muscles:'Hip Abductors, Lateral Core — the progression from clamshell. Now the entire leg moves.',
     svg:`<img src="./images/w_glute.jpg" alt="Side Hip Raise">`,
     breathing:'Exhale lifting. Inhale lowering. Keep breathing throughout.',
     cues:['Lie on your side, body in a straight line, bottom elbow on the floor','Lift your TOP leg toward the ceiling — keep toes pointing forward (not up)','Go to hip height or slightly above — hold 1 second','Lower with control for 2 counts — do not let it drop','Keep your core braced and hips stacked throughout','You should feel the outer hip/glute working by rep 8'],
     mistakes:['Toes pointing to the ceiling (external rotation) — keep them forward','Hips tilting — keep them stacked perfectly vertical','Using momentum to swing the leg — slow and controlled','Going too high (hip tilts) — stop at hip height']}
   ]},

  /* ── THURSDAY REST ── */
  {name:'Thursday',tag:'Active Rest',tagClass:'rest',rest:true,
   restMsg:'Upper body done! You are learning how your body moves. This is the most important phase.',
   restTips:[
    'Easy walk or gentle yoga — 20 minutes',
    'Stretch your chest and shoulders: arms behind you, gently open the chest',
    'Practice the hip hinge from Monday — even just 10 reps at home',
    'Eat enough food — your muscles are rebuilding',
    'Notice: are squats starting to feel more natural? By week 8 they will.',
    'Sleep 7–9 hours'
   ]},

  /* ── FRIDAY — Full Body + Cardio ── */
  {name:'Friday',tag:'Full Body + Cardio',tagClass:'back',
   phase:'Phase 2 · Weeks 5–8',
   focus:'Full Body Movement · Light Cardio · Coordination',
   cardio:'15 min treadmill walk (5.5–6 km/h, 1–2% incline) at the END',
   warmup:[
     {text:'5 belly breaths — breathe in, belly rises, breathe out slowly', icon:'drop'},
     {text:'Hip circles × 10 each direction', icon:'rotate'},
     {text:'Leg swings forward/back × 10 each leg', icon:'walk'},
     {text:'Arm swings × 10 across the chest', icon:'rotate'},
     {text:'Ankle circles × 10 each foot — prep for balance work', icon:'rotate'},
   ],
   exercises:[
    {name:'Step-Up (No Weight)',sets:'3',reps:'10 each leg',
     tempo:'2-1-2-0',rest:'60 sec',
     muscles:'Quads, Glutes, Balance — unilateral (one leg at a time) strength is more functional than bilateral for beginners.',
     svg:`<img src="./images/w_lunges.jpg" alt="Step Up">`,
     breathing:'Breathe out as you step up. Breathe in as you step back down.',
     cues:['Find a step, box, or bench about knee height (30–40 cm)','Place your full foot on the step — not just the toes','Drive through the heel of your TOP foot to lift your body up','Bring the other foot up gently, then step back down with control','The back leg assists nothing — your top leg does all the work','Keep your torso upright throughout'],
     mistakes:['Pushing off the back foot — the top leg should do all the work','Leaning forward — keep your chest up','Stepping down with a thud — control the descent','Looking down — look ahead for better balance']},

    {name:'Sumo Squat (Bodyweight)',sets:'3',reps:'12',
     tempo:'3-0-2-0',rest:'60 sec',
     muscles:'Inner Thighs, Glutes — the wide stance targets different muscles than your Monday squat. Good variety.',
     svg:`<img src="./images/w_sumo_squat.jpg" alt="Sumo Squat">`,
     breathing:'Breathe in as you sit down. Breathe out as you stand. Belly breathing throughout.',
     cues:['Feet wide — wider than shoulder-width. Toes turned out 45°.','Hands clasped at chest or on hips.','Sit straight down — torso stays upright.','Knees track over toes the entire time.','Drive through heels and squeeze your inner thighs at the top.','Feel this differently from Monday\'s squat — more inner thigh'],
     mistakes:['Knees caving in — push them out firmly','Leaning forward — widen stance or raise heels slightly on plates','Heels lifting — feet firmly planted throughout']},

    {name:'Bird-Dog — Extended Hold',sets:'3',reps:'6 each side',
     tempo:'6 sec hold each rep',rest:'40 sec',
     muscles:'Deep Core, Glutes, Balance — longer hold = more challenge from Phase 2.',
     svg:`<img src="./images/w_core.jpg" alt="Bird-Dog">`,
     breathing:'Exhale as you extend. Hold, breathing shallowly. Breathe in as you return.',
     cues:['Same as Phase 1 and Phase 2 Wednesday — but now hold each rep for 6 full seconds','Focus on feeling your deep core resist the pull of gravity','Keep hips completely level throughout the hold','Your goal by week 8: full extension with a 6-second hold and zero hip tilt'],
     mistakes:['Hip tilting to one side during the hold — brace harder and reduce range','Back arching — lower the leg and arm slightly','Rushing — 6 seconds per rep means the set takes over 1 minute. That is correct.']},

    {name:'Glute Bridge — Slow Tempo',sets:'3',reps:'10',
     tempo:'3 up · 3 hold · 3 down',rest:'40 sec',
     muscles:'Glutes, Hamstrings — slow tempo dramatically increases difficulty without adding weight.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Glute Bridge Slow">`,
     breathing:'Breathe in flat. Exhale on the 3-second lift. Hold breathing shallowly. Breathe in on the 3-second lower.',
     cues:['Standard glute bridge position. This time, take 3 counts to lift.','Hold at the top for 3 full counts — squeeze as hard as you can.','Lower for 3 full counts — resist gravity the entire way down.','Each rep takes 9 seconds. 10 reps = 90 seconds of glute work.','By rep 7 your glutes should be burning. That is correct.'],
     mistakes:['Rushing any part of the 3-3-3 tempo','Not squeezing at the top — the contraction is everything','Back taking over — it is GLUTES, always']},

    {name:'Plank Shoulder Taps',sets:'3',reps:'16 total (8 each side)',
     tempo:'Slow and controlled',rest:'45 sec',
     muscles:'Core, Anti-Rotation, Shoulders — the plank gets harder when you remove a point of contact.',
     svg:`<img src="./images/w_plank.jpg" alt="Plank Shoulder Taps">`,
     breathing:'Breathe continuously throughout. Never hold your breath.',
     cues:['Full plank position on hands (not forearms) — arms straight','Lift your right hand and tap your left shoulder. Replace.','Lift your left hand and tap your right shoulder. That is 1 rep each side.','The key: your hips must NOT sway side to side during the tap','The wider your feet, the easier it is — start wide and narrow over weeks'],
     mistakes:['Hips swaying — brace your core harder, widen your feet','Moving too fast — slow, deliberate taps beat quick sloppy ones','Holding your breath']}
   ]},

  /* ── SAT/SUN REST ── */
  {name:'Saturday',tag:'Rest Day',tagClass:'rest',rest:true,
   restMsg:'Phase 2 weekend! You are squatting. You are pushing. You are pulling. Your body has changed.',
   restTips:[
    'Full rest day',
    'Take your 4-week progress measurements today (waist, hips, arms, weight)',
    'Easy walk or recreational activity you enjoy',
    'Review Phase 2 exercises — which ones felt strong? Which felt hard?',
    'Prepare meals for next week',
    'You are building real movement skills. Phase 3 brings the weights.'
   ]},
  {name:'Sunday',tag:'Rest Day',tagClass:'rest',rest:true,
   restMsg:'Phase 3 starts Monday. You will pick up your first dumbbells. You are ready.',
   restTips:[
    '10 min stretching — hips, hamstrings, chest opener',
    'Morning weight log',
    'Prepare for Phase 3 — check the exercises ahead',
    'Make sure you are eating enough to fuel Phase 3 training',
    'You have learned to breathe, to move, to feel your body. Phase 3 builds on all of it.',
    'You are exactly where you should be'
   ]},
];

// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 3 — LIFT (Weeks 9–12)
//   Goal: Introduce machines and light dumbbells. 3–4 sets. Progressive load.
//   All movement patterns from Phase 2 now get resistance added.
//   Sessions: 50–60 min.
// ══════════════════════════════════════════════════════════════════════════════
const DAYS_PHASE3 = [

  /* ── MONDAY — Lower Body Lift ── */
  {name:'Monday',tag:'Lower Body Lift',tagClass:'legs',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Goblet Squat · Leg Press · Romanian Deadlift · Glutes',
   cardio:'12 min treadmill walk (6 km/h, 2% incline)',
   warmup:[
     {text:'5 belly breaths — establish breathing before you touch any weight', icon:'drop'},
     {text:'Bodyweight squat × 10 slow — warm up the pattern you learned', icon:'bolt'},
     {text:'Hip hinge × 10 bodyweight — warm up the hinge pattern', icon:'body'},
     {text:'Glute bridge × 10 fast bodyweight — activate glutes', icon:'bolt'},
     {text:'Ankle circles × 10 each — prep for loaded squats', icon:'rotate'},
   ],
   exercises:[
    {name:'Goblet Squat (Dumbbell — 4–6 kg)',sets:'3',reps:'10',
     tempo:'3-1-2-0',rest:'75 sec',
     muscles:'Quads, Glutes, Core — you know the squat pattern from Phase 2. Now add a small dumbbell at your chest.',
     svg:`<img src="./images/w_squat.jpg" alt="Goblet Squat">`,
     breathing:'Breathe in going down (3 counts). Breathe out as you drive up. Brace your core against the weight.',
     cues:['Hold ONE dumbbell vertically at your chest with both hands (4–6 kg)','Same squat technique as Phase 2 — the dumbbell keeps your chest up naturally','Breathe in, sit back and down, knees out','Drive through your whole foot to stand, squeeze glutes at the top','Start 4 kg. Add 1 kg when all 3×10 feel comfortable and controlled.'],
     mistakes:['Going heavier than your form allows — form does not change with weight, ever','Heels rising — still means tight ankles, widen stance or use Phase 1 stretches more','Rushing — tempo stays 3-1-2 regardless of weight','Dumbbell drifting forward — keep it close to your chest']},

    {name:'Leg Press (Machine — Light)',sets:'3',reps:'12–15',
     tempo:'3-0-2-0',rest:'75 sec',
     muscles:'Quads, Glutes — the machine is perfect for beginners. It guides movement and allows you to safely load your legs.',
     svg:`<img src="./images/w_leg_press.jpg" alt="Leg Press">`,
     breathing:'Breathe in as the sled comes toward you (3 counts). Breathe out as you push it away. NEVER hold your breath on leg press.',
     cues:['Feet shoulder-width, in the middle of the platform','Lower until knees reach 90° — no deeper to start','NEVER lock your knees at the top — always keep a tiny bend','Back flat against the pad — your butt must not lift off','Start at 20–30 kg (including the sled weight). Add 5 kg when 15 reps feel easy.'],
     mistakes:['Locking knees at the top — the most dangerous thing on this machine','Butt lifting off the pad — reduce the range of motion','Holding your breath — always keep breathing','Going too heavy too fast — add 5 kg maximum at a time']},

    {name:'Dumbbell Romanian Deadlift (5–8 kg each)',sets:'3',reps:'10',
     tempo:'3-1-2-0',rest:'75 sec',
     muscles:'Hamstrings, Glutes — you learned the hip hinge in Phase 2. Now hold light dumbbells to add resistance.',
     svg:`<img src="./images/w_deadlift.jpg" alt="Romanian Deadlift">`,
     breathing:'Stand tall and breathe in. Hold gently as you hinge forward (3 counts). Breathe out as you stand up.',
     cues:['Hold a dumbbell in each hand, standing, arms in front of thighs','Same hip hinge pattern as Phase 2 — push hips back, chest stays open','Dumbbells slide down your legs — keep them close','Lower until you feel the hamstring stretch. Stop there. Do not let the back round.','Drive hips forward to stand. Squeeze glutes at the top.','Start 5 kg each. After 2 weeks, try 6 kg if form stays perfect.'],
     mistakes:['Rounding the lower back — most important thing to prevent. Reduce weight.','Bending the knees too much (becomes a squat — different pattern)','Dumbbells swinging away from your legs','Going lower than your hamstring flexibility allows']},

    {name:'Hip Thrust (Dumbbell on Hips — 8–10 kg)',sets:'3',reps:'12',
     tempo:'2-2-2-0',rest:'60 sec',
     muscles:'Glutes — you mastered the bodyweight version. Now add a dumbbell on your hips.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Hip Thrust">`,
     breathing:'Breathe in at the bottom. Breathe OUT as you squeeze and lift. Hold 2 seconds. Breathe in as you lower.',
     cues:['Upper back against a bench, dumbbell (8–10 kg) resting in your hip crease','Fold a small towel under the dumbbell for comfort','Drive hips up — hard glute squeeze at the top — hold 2 full seconds','Lower hips but keep tension — do not let them touch the floor between reps','Start 8 kg. Work toward 10–12 kg by week 12.'],
     mistakes:['Lower back arching — it is GLUTES doing the work, not your back','Dumbbell sliding — place it firmly in the hip crease before starting','Not squeezing at the top — the 2-second hold IS the exercise','Going too fast — 6 seconds per rep: 2 up, 2 hold, 2 down']},

    {name:'Plank + Glute Bridge Combo',sets:'3',reps:'30 sec plank → 15 bridges',
     tempo:'Hold then controlled',rest:'45 sec',
     muscles:'Full Core, Glutes — a superset combining your two best core/glute exercises.',
     svg:`<img src="./images/w_core.jpg" alt="Plank + Bridge">`,
     breathing:'Steady breathing during plank. Exhale on each bridge lift.',
     cues:['30 seconds full forearm plank — perfect form, no sagging','WITHOUT resting, move straight to floor for 15 glute bridges','Squeeze hard on every bridge — 2 second hold each','Rest 45 seconds, then repeat twice more','By week 12 your core and glutes will be noticeably stronger together'],
     mistakes:['Resting between plank and bridges — go straight from one to the other','Plank hips sagging — stop the plank if form breaks, then start bridges','Bridges going fast — controlled, with the squeeze']}
   ]},

  /* ── TUESDAY REST ── */
  {name:'Tuesday',tag:'Active Rest',tagClass:'rest',rest:true,
   restMsg:'Phase 3 — your first session with weights! Your legs will feel different. That is the correct feeling.',
   restTips:[
    '20 min easy walk — helps flush soreness from the first weighted session',
    'Foam roll or massage your quads and glutes if sore',
    'Eat your full protein target today — muscle building is happening',
    'Take note of your starting weights — you will be tracking increases from now on',
    'Sleep is now even more important — muscle growth is 70% sleep-dependent',
    'If anything felt wrong or painful (not sore — painful), note it for next session'
   ]},

  /* ── WEDNESDAY — Upper Body Lift ── */
  {name:'Wednesday',tag:'Upper Body Lift',tagClass:'push',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Machine Chest Press · Lat Pulldown · Shoulder Press · Row',
   cardio:'12 min stationary bike (light-moderate resistance, 70–80 rpm)',
   warmup:[
     {text:'5 belly breaths — breathing is still your foundation', icon:'drop'},
     {text:'Wall slides × 8 slow — open shoulders before pressing', icon:'body'},
     {text:'Band pull-aparts × 10 (or towel stretch across chest)', icon:'rotate'},
     {text:'Incline push-up × 8 bodyweight (Phase 2 pattern)', icon:'bolt'},
     {text:'Arm circles × 10 each direction', icon:'rotate'},
   ],
   exercises:[
    {name:'Machine Chest Press (10–15 kg)',sets:'3',reps:'12',
     tempo:'2-1-2-0',rest:'75 sec',
     muscles:'Chest, Front Shoulders, Triceps — machines are ideal for beginners. The movement path is guided so you can focus on feeling the muscle.',
     svg:`<img src="./images/w_chest_press.jpg" alt="Machine Chest Press">`,
     breathing:'Breathe in before you push. Exhale as you press the handles forward. Breathe in as handles return.',
     cues:['Adjust seat so handles are at mid-chest height — this matters a lot','Back flat against the pad — do not arch off it','Push forward and feel your CHEST working — not just your arms','Squeeze the chest for 1 second at full extension','Return handles slowly for 2 full counts','Start 10–15 kg. Add 2.5 kg when all 3×12 feel controlled.'],
     mistakes:['Seat too high (becomes a shoulder press) — adjust until handles align with your nipple line','Shrugging shoulders up — keep them pressed DOWN into the pad','Letting handles snap back — control the return','Going too heavy — you should feel your chest, not just push with your arms']},

    {name:'Lat Pulldown (Wide Grip — 15–20 kg)',sets:'3',reps:'12',
     tempo:'2-1-3-0',rest:'75 sec',
     muscles:'Lats, Upper Back, Biceps — builds back width and posture. The 3-second return (eccentric) is where the back grows.',
     svg:`<img src="./images/w_lat_pulldown.jpg" alt="Lat Pulldown">`,
     breathing:'Breathe in at the top (arms extended). Breathe out as you pull down. Breathe in as bar rises slowly.',
     cues:['Wide overhand grip — about 1.5× shoulder width','Lock thighs firmly under the pad','Before pulling: bring your shoulders DOWN away from your ears','Pull bar to your UPPER CHEST — not behind the neck, ever','Hold 1 second at chest — feel your back muscles working','Let bar rise SLOWLY over 3 full counts — this is where your back grows'],
     mistakes:['Pulling behind the neck — never, ever do this','Excessive backward lean — a small lean (15°) is fine; more is cheating','Letting the weight fly back up — the 3-second return builds your back','Pulling with only biceps — think of driving your ELBOWS down, not pulling with hands']},

    {name:'Seated Dumbbell Shoulder Press (3–5 kg each)',sets:'3',reps:'12',
     tempo:'2-0-2-0',rest:'75 sec',
     muscles:'Front and Side Shoulders, Triceps — builds the round shoulder shape. Small muscle group, start light.',
     svg:`<img src="./images/w_shoulder_press.jpg" alt="Shoulder Press">`,
     breathing:'Breathe in at the bottom (DBs at ear level). Breathe out as you press up. Core gently braced.',
     cues:['Sit with full back support. Back flat against the pad.','Dumbbells at ear level, elbows at 90°, palms forward','Press straight up until arms are nearly straight','Lower slowly for 2 counts back to ear level','Start 3 kg each. Add 0.5–1 kg when all 3×12 feel easy.'],
     mistakes:['Arching lower back away from the pad — stay in contact','Pressing forward instead of straight up','Going too heavy — shoulders are a small muscle group, respect that','Locking elbows at the top — keep a tiny bend']},

    {name:'Seated Cable Row (15–20 kg)',sets:'3',reps:'12',
     tempo:'2-1-3-0',rest:'75 sec',
     muscles:'Mid Back, Rhomboids, Biceps — builds back thickness and counteracts rounded posture.',
     svg:`<img src="./images/w_row.jpg" alt="Seated Cable Row">`,
     breathing:'Reach forward and breathe in. Breathe out as you pull. Breathe in as you return slowly (3 counts).',
     cues:['Sit tall — chest proud, imagine a string lifting your sternum','Slight forward lean at the start to feel the back stretch','Pull the handle to your belly button — elbows drive BACK past your sides','Squeeze shoulder blades together at the end — hold 1 second','Return slowly over 3 full seconds — feel your back stretching','Start 15 kg. Add 2.5 kg when all 3×12 feel controlled.'],
     mistakes:['Rocking your torso — sit still, only arms move','Pulling too high (toward chest) — belly button is the target','Shrugging shoulders — keep them DOWN','Letting cable snap back — 3 seconds, always']},

    {name:'Dumbbell Bicep Curl (4–6 kg each)',sets:'3',reps:'12',
     tempo:'2-1-3-0',rest:'60 sec',
     muscles:'Biceps — builds arm shape and the pulling strength that helps your rows and lat pulldowns.',
     svg:`<img src="./images/w_curl.jpg" alt="Bicep Curl">`,
     breathing:'Exhale as you curl up. Inhale as you lower slowly (3 counts). The slow lowering is where the muscle grows.',
     cues:['Hold dumbbells at your sides, palms facing forward','Elbows pinned to your sides — they do not move','Curl the dumbbells up — squeeze biceps at the top for 1 second','Lower slowly over 3 full seconds — resist gravity','Start 4 kg. Move to 5–6 kg when all reps feel easy.'],
     mistakes:['Swinging your body — if you need to swing, reduce the weight','Elbows drifting forward at the top','Dropping the weight fast — 3 seconds down is essential','Going too heavy — form is more important than weight, always']}
   ]},

  /* ── THURSDAY REST ── */
  {name:'Thursday',tag:'Active Rest',tagClass:'rest',rest:true,
   restMsg:'Upper body done with weights for the first time! Chest, back, shoulders, biceps — all responding.',
   restTips:[
    'Easy walk or light yoga — 20–30 minutes',
    'Stretch chest and shoulders — arms behind back, gently open',
    'Check your workout log — are your weights from Monday recorded?',
    'Drink 2.5 litres of water',
    'Notice how your posture has changed since Phase 1 — this is real',
    'Sleep well tonight — Thursday to Friday is your most important recovery window'
   ]},

  /* ── FRIDAY — Full Body Strength ── */
  {name:'Friday',tag:'Full Body Strength',tagClass:'back',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Lateral Raises · Glute Kickback · Leg Curl · Cardio Finish',
   cardio:'15 min treadmill — 10 min walk (6 km/h) + 5 min light jog (7 km/h) — your best cardio yet',
   warmup:[
     {text:'5 belly breaths — breathing is still foundation, always', icon:'drop'},
     {text:'Hip circles × 10 each direction', icon:'rotate'},
     {text:'Glute bridges × 10 bodyweight — activate glutes before kickbacks', icon:'bolt'},
     {text:'Leg swings forward/back × 10 each leg', icon:'walk'},
     {text:'Shoulder rolls × 10 each direction — prep for lateral raises', icon:'rotate'},
   ],
   exercises:[
    {name:'Dumbbell Lateral Raise (3–4 kg each)',sets:'3',reps:'12–15',
     tempo:'2-0-2-0',rest:'60 sec',
     muscles:'Side Shoulders — creates the rounded shoulder look. One of the most visible changes with consistent training.',
     svg:`<img src="./images/w_lateral_raise.jpg" alt="Lateral Raise">`,
     breathing:'Exhale as you raise arms. Inhale as you lower them slowly.',
     cues:['Stand with small dumbbells at your sides, slight forward lean from hips','Raise both arms OUT to shoulder height — not higher','Lead with your elbows — hand is slightly lower than elbow at the top','Lower slowly for 2 counts — resist the weight coming down','You should feel a burning sensation at your outer shoulders by rep 10','Start 3 kg. Even 2 kg will burn by rep 15 — do not be embarrassed by the weight'],
     mistakes:['Raising above shoulder height — traps steal the work','Shrugging shoulders up — keep them actively pressed DOWN','Swinging body to lift — stand still, only your arms move','Going too heavy — 3 kg lateral raises are harder than they sound at 15 reps']},

    {name:'Seated Leg Curl Machine (Light)',sets:'3',reps:'15',
     tempo:'2-1-3-0',rest:'60 sec',
     muscles:'Hamstrings — isolates the back of your legs completely, zero lower back involvement.',
     svg:`<img src="./images/w_deadlift.jpg" alt="Leg Curl">`,
     breathing:'Exhale as you curl your legs down. Hold 1 second. Breathe in as you let them back up slowly.',
     cues:['Adjust machine: pad on lower leg (above ankle), knee aligned with pivot point','Curl both legs down toward the floor — feel the BACK of your thighs working','Hold at the bottom for 1 second — squeeze your hamstrings','Let legs return slowly over 3 full counts — resist the weight','Start at the minimum weight. Add 2.5 kg when 15 reps feel easy.'],
     mistakes:['Hips lifting off the seat — the weight is too heavy','Rushing the return — the 3-second return is where hamstrings grow','Using momentum to swing legs down — start the movement controlled']},

    {name:'Cable Glute Kickback (5–7 kg)',sets:'3',reps:'15 each leg',
     tempo:'2-1-2-0',rest:'60 sec',
     muscles:'Glutes — cable adds constant tension throughout the movement that bodyweight cannot match.',
     svg:`<img src="./images/w_glute.jpg" alt="Cable Kickback">`,
     breathing:'Exhale as you kick back. Inhale as you bring leg forward.',
     cues:['Ankle strap on, cable at lowest position, face the machine','Stand close, hands on the machine for support, core braced','Kick leg straight back — slowly — squeeze glute at the top','Hold 1 second at peak contraction — really feel the glute working','Bring leg forward without touching the floor, then kick back again','Start 5 kg. Add 2.5 kg when 15 reps feel controlled.'],
     mistakes:['Swinging leg with momentum — slow and controlled every rep','Lower back arching — keep core braced, reduce range if needed','Body moving — your torso stays completely still, only your leg moves','Not squeezing at the top — the squeeze IS the exercise']},

    {name:'Incline Push-Up — Low Bench',sets:'3',reps:'10–12',
     tempo:'3-0-2-0',rest:'60 sec',
     muscles:'Chest, Shoulders, Triceps — lower surface = harder. Working toward the floor.',
     svg:`<img src="./images/w_pushup.jpg" alt="Low Incline Push-Up">`,
     breathing:'Breathe in lowering (3 counts). Breathe out as you push up.',
     cues:['Hands on a LOW bench or step (lower than Phase 2)','Body is a straight plank from head to heels — maintain this always','Lower chest toward the bench over 3 slow seconds','Push up powerfully — feel your chest and shoulders working','Goal by week 12: move to floor push-ups if you can complete 3×10 here cleanly'],
     mistakes:['Hips sagging — plank body throughout','Rushing the lowering — the 3-second eccentric builds strength','Not challenging yourself — if all 12 feel easy, lower the surface']},

    {name:'Side Plank (Full — Not Modified)',sets:'3',reps:'20–25 sec each side',
     tempo:'Hold',rest:'45 sec',
     muscles:'Obliques, Hip Stabilizers — you progressed from modified (knee down) in Phase 2. Full side plank now.',
     svg:`<img src="./images/w_plank.jpg" alt="Side Plank">`,
     breathing:'In through nose, out through mouth. Continuous breathing.',
     cues:['Lie on your side, BOTTOM FOOT stacked on top foot (not modified anymore)','Lift hips until your body forms a straight diagonal line','Top hand on hip or pointing up','Hold — breathe — do not let hips sag or rotate','Build from 20 seconds toward 30 seconds by week 12','If hips sag: drop back to modified (bottom knee on floor) and build again'],
     mistakes:['Hips sagging — this removes the oblique challenge, stop and rest','Top hip rotating forward — keep hips perfectly stacked vertical','Holding your breath — breathe continuously']}
   ]},

  /* ── SAT/SUN REST ── */
  {name:'Saturday',tag:'Rest Day',tagClass:'rest',rest:true,
   restMsg:'End of Phase 3 week. You are lifting weights. Your body is genuinely stronger than it was 9 weeks ago.',
   restTips:[
    'Rest and recover — full day off',
    'Take your 8-week progress photos and measurements',
    'Review your workout log — you have numbers to compare now',
    'Notice how your body composition is visibly changing',
    'Treat yourself to something you enjoy — you have earned it',
    'Think about what comes after Week 12 — you will be ready for much more'
   ]},
  {name:'Sunday',tag:'Rest Day',tagClass:'rest',rest:true,
   restMsg:'Final Sunday of the week. New week starts Monday. You are building something real.',
   restTips:[
    '10–15 min stretching — hips, hamstrings, chest opener',
    'Morning weight log',
    'Meal prep for the week — hit your protein target every day',
    'Log your current weights for each exercise — track your progressive overload',
    'You have built the habit. Phase 3 weeks 9–12 compounds everything.',
    'Every rep you do now is the best investment you can make in yourself'
   ]},
];

// ── ACTIVE PHASE (default = Phase 1) ─────────────────────────────────────────
// This gets updated by the phase selector in the UI
let currentPhase = 0;

const ALL_PHASES_DAYS = [DAYS_PHASE1, DAYS_PHASE2, DAYS_PHASE3];

// Active DAYS array (read by renderWorkout)
let DAYS = DAYS_PHASE1;

// ══════════════════════════════════════════════════════════════════════════════
//   FOOD DATA — Expanded protein sources for Vidha
//   Target: ~72g protein/day
//   Includes veg, non-veg, vegan, Indian staples + international options
// ══════════════════════════════════════════════════════════════════════════════
const FOODS = [
  // ── Indian everyday staples ──
  {iconKey:'egg',   name:'Eggs (2 whole)',        protein:'12g', tags:[{l:'Vegetarian',c:'green'},{l:'Affordable',c:'blue'}],   tip:'Complete protein with all essential amino acids. Scrambled, boiled, or omelette. Eat the yolk — the fat is healthy and important for hormones.'},
  {iconKey:'milk',  name:'Paneer (100g)',          protein:'18g', tags:[{l:'Vegetarian',c:'green'},{l:'Indian',c:'purple'}],    tip:'Paneer bhurji, palak paneer, or grilled cubes. Made from full-fat milk so it also provides healthy fats for hormonal balance. Buy fresh for best quality.'},
  {iconKey:'milk',  name:'Milk Full-Fat (250ml)',  protein:'8g',  tags:[{l:'Vegetarian',c:'green'},{l:'Bone Health',c:'blue'}], tip:'Warm turmeric milk at night for recovery and sleep. Full-fat milk is better for weight gain goals — do not choose skimmed.'},
  {iconKey:'milk',  name:'Greek Yogurt / Hung Curd (150g)', protein:'15g', tags:[{l:'Vegetarian',c:'green'},{l:'Probiotic',c:'blue'}], tip:'Hung curd (chakka) is the Indian version. Great with fruit and honey. Also use as a dip or in raita. High protein AND good for gut health.'},
  {iconKey:'beans', name:'Moong Dal Cooked (100g)',protein:'7g',  tags:[{l:'Vegan',c:'green'},{l:'Easy to Digest',c:'blue'}],  tip:'Easiest dal for digestion. Daily dal at lunch adds up quickly. Moong khichdi is a complete protein meal (dal + rice together).'},
  {iconKey:'beans', name:'Soya Chunks (30g dry)',  protein:'13g', tags:[{l:'Vegan',c:'green'},{l:'Budget',c:'purple'}],         tip:'Cheapest high-protein food available in India. Soya curry, biryani, or added to any sabzi. Soak in warm water for 15 min before cooking.'},
  {iconKey:'nut',   name:'Peanut Butter (2 tbsp)', protein:'8g',  tags:[{l:'Vegan',c:'green'},{l:'Calorie-rich',c:'accent'}],   tip:'Add to smoothies, toast, or eat with banana. Best calorie-dense protein snack. Choose natural peanut butter (ingredients: only peanuts).'},
  // ── Non-veg ──
  {iconKey:'fish',  name:'Chicken Breast (100g)',  protein:'31g', tags:[{l:'Non-Veg',c:'accent'},{l:'Best Value',c:'accent'}],  tip:'Highest protein per calorie. Grill, bake, or air-fry with Indian spices. Tandoori chicken tikka makes it delicious and easy to hit your target.'},
  {iconKey:'fish',  name:'Rohu / Catla Fish (100g)',protein:'20g',tags:[{l:'Non-Veg',c:'accent'},{l:'Omega-3',c:'blue'}],       tip:'Great for weight gain — protein + healthy fats. Bengali fish curry, tandoori fish, or simply pan-fried. Omega-3 fats also reduce muscle soreness.'},
  {iconKey:'fish',  name:'Tuna (1 small can ~85g)',protein:'25g', tags:[{l:'Non-Veg',c:'accent'},{l:'Quick',c:'blue'}],         tip:'No cooking required. Mix with lemon juice, onion, and a drizzle of olive oil. Perfect in a wrap or with rice cakes. Very convenient post-workout.'},
  {iconKey:'fish',  name:'Eggs White (3 whites)',  protein:'11g', tags:[{l:'Vegetarian',c:'green'},{l:'Low-fat',c:'blue'}],     tip:'Add to your regular omelette for a protein boost with very few calories. Good if you want protein without extra fat.'},
  // ── Plant-based / International ──
  {iconKey:'tofu',  name:'Tofu Firm (100g)',        protein:'10g', tags:[{l:'Vegan',c:'green'},{l:'Versatile',c:'blue'}],        tip:'Press tofu to remove water, then pan-fry with Indian spices. Absorbs flavour well. Available at most supermarkets. A great paneer substitute for vegans.'},
  {iconKey:'tofu',  name:'Tempeh (100g)',            protein:'19g', tags:[{l:'Vegan',c:'green'},{l:'Fermented',c:'purple'}],      tip:'Fermented soy — higher protein than tofu and easier to digest. Has a nutty flavour. Slice and pan-fry, or crumble into curries. Increasingly available in Indian cities.'},
  {iconKey:'yeast', name:'Nutritional Yeast (2 tbsp)',protein:'8g',tags:[{l:'Vegan',c:'green'},{l:'B12',c:'purple'}],           tip:'Cheesy, nutty flavour. Sprinkle on dal, rice, popcorn, or any cooked food. Also contains B12 (important for vegetarians). Available online. Very easy to add to any meal.'},
  {iconKey:'sprout',name:'Sprouted Moong (100g)',   protein:'3g',  tags:[{l:'Vegan',c:'green'},{l:'Indian',c:'purple'}],        tip:'Add to salads, poha, or eat as a snack with lemon and salt. Low protein per 100g but very easy to eat in large quantities. Also rich in B vitamins.'},
  {iconKey:'grain', name:'Quinoa Cooked (100g)',    protein:'4g',  tags:[{l:'Vegan',c:'green'},{l:'Complete Protein',c:'purple'}],tip:'One of very few plant foods with all 9 essential amino acids. Use instead of rice in any meal. Available at most supermarkets now. Slightly higher protein + better amino acid profile than rice.'},
  {iconKey:'cheese',name:'Cottage Cheese (Paneer-soft)(100g)',protein:'11g',tags:[{l:'Vegetarian',c:'green'},{l:'Versatile',c:'blue'}],tip:'Softer version of paneer. Mix into salads, eat plain with salt and pepper, or use in sandwiches. Very mild taste that adapts to any seasoning.'},
  {iconKey:'seed',  name:'Hemp Seeds (3 tbsp)',     protein:'10g', tags:[{l:'Vegan',c:'green'},{l:'Omega-3',c:'blue'}],         tip:'Sprinkle on yogurt, oats, or any meal. Very complete protein (all amino acids). Also high in healthy omega-3 fats. Available at health food stores or online.'},
  {iconKey:'seed',  name:'Pumpkin Seeds (30g)',     protein:'5g',  tags:[{l:'Vegan',c:'green'},{l:'Zinc',c:'purple'}],          tip:'Roast lightly and eat as a snack or sprinkle on anything. High in zinc (important for hormonal health in women) and magnesium. Easy to add without any cooking.'},
  {iconKey:'milk',  name:'Whey Protein Powder (1 scoop)', protein:'24g',tags:[{l:'Vegetarian',c:'green'},{l:'Post-Workout',c:'accent'}],tip:'Optional but convenient. Mix with milk or water post-workout. Not necessary if you can hit 72g from food — but very helpful on busy days. Choose a simple unflavoured or vanilla option.'},
];

// ══════════════════════════════════════════════════════════════════════════════
//   MEAL PLAN — ~1950 kcal · ~73g protein · Built for healthy weight gain
// ══════════════════════════════════════════════════════════════════════════════
const MEALS = [
  {time:'7:00–8:00\nBreakfast',name:'Morning Fuel',
   desc:'2 whole eggs (scrambled / omelette / boiled) + 2 slices whole wheat toast with natural peanut butter\n+ 1 glass full-fat milk (250ml)\nOR: Moong dal cheela (2 pieces) + 1 glass milk\nOR: Poha with peanuts + 1 hard-boiled egg',
   kcal:520, protein:22},
  {time:'10:30–11:00\nMid-Morning Snack',name:'Smart Snack',
   desc:'1 banana + 1 tbsp peanut butter\nOR: Handful mixed nuts (almonds, walnuts, cashews) + 1 small cup hung curd\nOR: 1 cup warm milk + 1 tbsp hemp seeds + pinch of cinnamon\nThis snack is often skipped — do NOT skip it.',
   kcal:260, protein:8},
  {time:'1:00–2:00\nLunch',name:'Balanced Lunch',
   desc:'1 cup cooked dal OR 100g paneer OR 100g chicken curry OR 50g soya chunks curry\n+ 2 rotis OR 1 cup cooked rice OR ½ cup quinoa\n+ 1 cup any sabzi (cooked vegetable)\n+ Small bowl curd/raita\nAdd a squeeze of lemon — helps iron absorption from dal',
   kcal:560, protein:23},
  {time:'4:30–5:00\nPre-Workout Fuel',name:'Pre-Gym Snack',
   desc:'1 banana + 1 glass milk\nOR: 1 small bowl oats with milk and honey\nOR: 2 rice cakes with 1 tbsp peanut butter\nEat this 60–90 min before your workout for steady energy',
   kcal:220, protein:7},
  {time:'7:30–8:30\nPost-Workout Dinner',name:'Recovery Dinner',
   desc:'100g chicken breast OR 100g paneer bhurji OR 2 eggs + ½ cup soya chunks curry\n+ 1.5 cups cooked rice OR 2 rotis\n+ 1 cup dal (for extra protein)\n+ Salad or any vegetable\nEat within 60–90 min of finishing your workout',
   kcal:600, protein:28},
  {time:'9:30–10:00\nNight Recovery',name:'Bedtime Protein',
   desc:'1 glass warm full-fat milk (with a pinch of haldi and honey)\nOR: 150g Greek yogurt / hung curd with honey\nOR: 2 tbsp nutritional yeast stirred into warm milk\nProtein before sleep = overnight muscle repair',
   kcal:160, protein:8},
];

// ══════════════════════════════════════════════════════════════════════════════
//   PROTEIN TRACKER QUICK-ADD BUTTONS
// ══════════════════════════════════════════════════════════════════════════════
const PROTEIN_FOODS = [
  {name:'2 Eggs', g:12},
  {name:'100g Chicken', g:31},
  {name:'100g Paneer', g:18},
  {name:'Milk 250ml', g:8},
  {name:'Greek Yogurt', g:15},
  {name:'Peanut Butter', g:8},
  {name:'Soya Chunks', g:13},
  {name:'Tofu 100g', g:10},
  {name:'Tempeh 100g', g:19},
  {name:'Nutritional Yeast', g:8},
  {name:'Hemp Seeds', g:10},
  {name:'Whey 1 scoop', g:24},
];

// ══════════════════════════════════════════════════════════════════════════════
//   TIPS — SVG icon key + content
// ══════════════════════════════════════════════════════════════════════════════
const TIPS = [
  {iconKey:'moon',    title:'Sleep is Your Best Tool',         text:'7–9 hours is when your muscles repair and grow. Growth hormone is released during deep sleep. Going to bed at the same time every night is more powerful than any supplement.'},
  {iconKey:'drop',    title:'Drink More Water',                 text:'2–2.5 litres daily. Proper hydration improves energy, reduces soreness, and helps with weight gain. Start every morning with a big glass of water before anything else.'},
  {iconKey:'chart',   title:'Small Progress Adds Up',           text:'Add a little more weight or one more rep every 2–3 weeks. This is called progressive overload — it\'s the only real mechanism by which muscles grow. Small, consistent wins compound over 12 weeks.'},
  {iconKey:'food',    title:'Eat More Than You Think',          text:'At 44 kg with a goal to gain healthy weight, you need to eat MORE than hunger tells you to. Carry snacks, set meal reminders, add healthy calories (peanut butter, nuts, ghee, milk, avocado) everywhere you can.'},
  {iconKey:'heart',   title:'Soreness is Normal',               text:'Muscle soreness (DOMS) 24–48 hours after a workout is completely normal — even a good sign. Sharp pain DURING exercise is not normal — stop if something feels wrong. Soreness = adaptation. Pain = injury.'},
  {iconKey:'star',    title:'Consistency Beats Intensity',      text:'3 gym sessions per week, every week, for 12 weeks will change your body more than any intense 2-week program. Show up even when you don\'t feel like it. The habit IS the training.'},
  {iconKey:'brain',   title:'Mind-Muscle Connection',           text:'Think about the muscle you\'re training during the exercise. Beginners who focus on feeling the contraction gain strength measurably faster. Be mentally present in each rep — not on your phone between sets.'},
  {iconKey:'run',     title:'Keep Cardio Minimal for Now',      text:'Too much cardio while trying to gain weight works against you — it burns the calories you need for muscle building. Your plan has light cardio built in. Do not add extra sessions unless your doctor recommends it.'},
  {iconKey:'camera',  title:'Take Progress Photos',             text:'The scale can be misleading. Take a photo every 4 weeks, same time of day, same angle, same lighting. Muscle is denser than fat — you can look and feel better without the scale changing much.'},
  {iconKey:'chat',    title:'Ask for Help',                     text:'Ask a gym staff member to check your form in the first few weeks. Most gyms offer this free. Good form early prevents injuries. It\'s not a sign of weakness — it\'s how smart people train.'},
];

// ══════════════════════════════════════════════════════════════════════════════
//   SUPPLEMENTS — Optional, gentle guidance
// ══════════════════════════════════════════════════════════════════════════════
const SUPPS = [
  {iconKey:'pill',  name:'Whey Protein',    dose:'20–25g post-workout (optional)',       info:'Only if you struggle to hit 72g from food. Not mandatory — food always comes first. Choose a basic unflavoured or vanilla option. Mix with full-fat milk for extra calories.'},
  {iconKey:'bolt',  name:'Vitamin D3',      dose:'1000–2000 IU daily',                   info:'Most Indians are deficient, especially if indoors often. Crucial for bone health, muscle function, and mood. Get a blood test first if possible — don\'t supplement blindly.'},
  {iconKey:'heart', name:'Iron + B12',      dose:'Only if blood test shows deficiency',   info:'Very common deficiencies in young Indian women. Low iron = fatigue during workouts and poor recovery. Get blood work done before supplementing. Over-supplementing iron has risks.'},
  {iconKey:'leaf',  name:'Omega-3 Fish Oil',dose:'1000mg daily with food (optional)',     info:'Reduces muscle soreness and inflammation — helpful for beginners. Available cheaply at any pharmacy. Take with food to prevent the "fishy burp". Flaxseed oil is the vegan alternative.'},
  {iconKey:'plant', name:'Creatine',        dose:'Not until Phase 3 or after (optional)',  info:'A well-researched supplement for muscle and strength building. Let your body adapt to training first (12 weeks). After that, 3–5g/day with water is safe and effective. Not a steroid — it\'s made naturally in your body.'},
];
