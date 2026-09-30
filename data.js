// ══════════════════════════════════════════════════════════════════════════════
//   VIDHA'S FITNESS APP — DATA
//   21 yrs · 44 kg · 163 cm · BMI 16.5 → Target 18.5–21
//   3-Phase progressive plan · 6 days/week (Mon–Sat) · Sunday rest
//   Phase 1 (wks 1–2): mobilise · Phase 2 (wks 3–8): build · Phase 3 (wks 9–12): progress
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

// ══════════════════════════════════════════════════════════════════════════════
//   WARM-UP GUIDE — image + friendly "how to do it" for each warm-up move
//   Matched by keyword against each warm-up step's text. Every warm-up step in
//   every phase gets a clear picture + simple description automatically.
// ══════════════════════════════════════════════════════════════════════════════
const WARMUP_GUIDE = [
  // keyword (lowercase, matched against warmup text)  →  image + how-to
  {match:['march','high knee','knee lift'], img:'./images/w_walk.jpg',
   how:'Stand tall and lift your knees up and down on the spot, swinging your arms gently — like walking without moving forward. This gets your blood flowing and warms your whole body.'},
  {match:['belly breath','deep breath','breaths'], img:'./images/w_breathing.jpg',
   how:'Place one hand on your belly. Breathe in slowly through your nose so your belly pushes out into your hand, then breathe out slowly through your mouth. This calms your mind and switches on your core.'},
  {match:['brisk walk','easy walk','walk to','walk or'], img:'./images/w_walk.jpg',
   how:'A gentle walk on the treadmill (or on the spot). Keep it easy — you should still be able to chat comfortably. This gently raises your body temperature so your muscles are ready.'},
  {match:['bike'], img:'./images/w_cardio.jpg',
   how:'Sit on the stationary bike and pedal at an easy, comfortable pace with light resistance. No need to rush — this just warms up your legs and gets your heart moving gently.'},
  {match:['jog'], img:'./images/w_cardio.jpg',
   how:'A very light jog on the treadmill. Keep the pace slow and relaxed — this is only to warm up, not to tire you out.'},
  {match:['ankle circle'], img:'./images/w_stretch.jpg',
   how:'Lift one foot slightly off the floor and slowly draw circles in the air with your toes. Do both directions, then switch feet. This loosens stiff ankles before squats.'},
  {match:['hip circle'], img:'./images/w_warmup.jpg',
   how:'Place your hands on your hips and make slow, big circles with your hips — like using a hula hoop. Go both directions. This loosens the hips for squats and lunges.'},
  {match:['arm circle'], img:'./images/w_warmup.jpg',
   how:'Stretch both arms out to the sides and draw circles in the air — small at first, then bigger. Do forwards, then backwards. This warms up your shoulders.'},
  {match:['arm swing','across the chest'], img:'./images/w_warmup.jpg',
   how:'Swing both arms across your chest and back out wide, like giving yourself a hug and then opening up. This loosens your chest and shoulders.'},
  {match:['shoulder roll'], img:'./images/w_warmup.jpg',
   how:'Roll your shoulders in big slow circles — up, back, and down. Do forwards and backwards. This releases tension and prepares your shoulders.'},
  {match:['neck roll'], img:'./images/w_stretch.jpg',
   how:'Slowly and gently roll your head in a half-circle from one shoulder to the other. Keep it slow and soft — never force it. This releases neck tension.'},
  {match:['leg swing'], img:'./images/w_walk.jpg',
   how:'Hold a wall for balance and gently swing one leg forwards and backwards, then switch. Keep it relaxed. This warms up your hips and hamstrings.'},
  {match:['cat-cow','cat cow'], img:'./images/w_yoga.jpg',
   how:'On all fours: breathe in and drop your belly, lifting your head (cow). Breathe out and round your back up, tucking your chin (cat). Move slowly with your breath to warm up your spine.'},
  {match:['torso twist','torso rotation'], img:'./images/w_yoga.jpg',
   how:'Stand with feet apart and gently rotate your upper body left and right, letting your arms swing loosely. This warms up your waist and lower back.'},
  {match:['bodyweight squat','squats —','squat —'], img:'./images/w_squat.jpg',
   how:'A few slow squats with no weight. Sit back and down like sitting into a chair, then stand tall. This grooves the movement so it feels natural when you add weight.'},
  {match:['glute bridge'], img:'./images/w_hip_thrust.jpg',
   how:'Lie on your back, knees bent, feet flat. Squeeze your bottom and lift your hips up, then lower slowly. This wakes up your glutes before your main exercises.'},
  {match:['wall slide'], img:'./images/w_warmup.jpg',
   how:'Stand with your back against a wall, arms bent in a "cactus" shape touching the wall. Slide your arms up and down while keeping them on the wall. This opens the shoulders.'},
  {match:['band pull-apart','pull-apart'], img:'./images/w_row.jpg',
   how:'Hold a light resistance band in front of you and pull it apart, squeezing your shoulder blades together, then release slowly. This activates your upper back.'},
  {match:['chest opener','chest stretch'], img:'./images/w_stretch.jpg',
   how:'Clasp your hands behind your back, gently straighten your arms and lift them slightly to open your chest. Hold and breathe. This undoes hunching from sitting.'},
  {match:['incline push-up','wall push-up','push-up'], img:'./images/w_pushup.jpg',
   how:'A few easy push-ups against a wall or a bench to gently warm up your chest and arms before your pressing exercises.'},
  {match:['calf raise'], img:'./images/w_walk.jpg',
   how:'Stand tall and rise up onto the balls of your feet, then lower slowly. This warms up your calves and ankles.'},

  // ── Expanded pool: dynamic, targeted warm-up moves ──
  {match:['world\'s greatest','worlds greatest','world greatest'], img:'./images/w_lunges.jpg',
   how:'Step into a deep lunge, place both hands inside your front foot, then rotate your top arm up toward the ceiling and follow it with your eyes. The best single stretch — it opens hips, back and shoulders all at once.'},
  {match:['hip opener','deep squat hold','squat hold','frog'], img:'./images/w_squat.jpg',
   how:'Lower into a deep squat and hold, gently pushing your knees out with your elbows. Rock side to side. This opens tight hips and prepares you for squatting and lunging.'},
  {match:['glute kickback','donkey kick','fire hydrant'], img:'./images/w_glute.jpg',
   how:'On all fours, lift one leg back and up, squeezing your glute at the top, then lower. Do both sides. This switches on your glutes so they work properly during your main lifts.'},
  {match:['bird dog','bird-dog'], img:'./images/w_core.jpg',
   how:'On all fours, reach one arm forward and the opposite leg back, keeping your hips level. Hold briefly, then switch. This wakes up your deep core and improves balance.'},
  {match:['dead bug'], img:'./images/w_core.jpg',
   how:'Lie on your back, arms up and knees bent at 90°. Slowly lower one arm and the opposite leg, keeping your lower back pressed to the floor. This activates your core safely.'},
  {match:['inchworm','walk-out','walk out'], img:'./images/w_stretch.jpg',
   how:'Stand tall, hinge and walk your hands out to a plank, hold a second, then walk your feet up to your hands. This warms the whole body and gently stretches your hamstrings.'},
  {match:['torso rotation','trunk rotation','open book','thoracic'], img:'./images/w_yoga.jpg',
   how:'Lie on your side with knees bent, arms stretched in front. Open your top arm across your body like opening a book, following it with your eyes. This loosens the upper back and improves rotation.'},
  {match:['scapular','shoulder blade','wall angel'], img:'./images/w_warmup.jpg',
   how:'Stand against a wall, arms in a "goal-post" shape. Squeeze your shoulder blades together and slide your arms up and down the wall. This activates the muscles that keep your shoulders healthy while pressing.'},
  {match:['banded row','face pull','band row'], img:'./images/w_row.jpg',
   how:'Hold a light band and pull it toward your face, elbows high, squeezing your upper back. Great for waking up the back muscles before pulling exercises.'},
  {match:['side lunge','lateral lunge','cossack'], img:'./images/w_lunges.jpg',
   how:'Step wide to one side and sit into that hip, keeping the other leg straight. Shift side to side. This opens the inner thighs and hips for squats and lunges.'},
  {match:['jumping jack','star jump'], img:'./images/w_cardio.jpg',
   how:'Classic jumping jacks — jump feet out and arms overhead, then back in. Keep it light and rhythmic. Gets your heart rate up and warms the whole body fast.'},
  {match:['wrist','forearm'], img:'./images/w_warmup.jpg',
   how:'Circle your wrists both directions, then gently pull your fingers back to stretch the forearms. Important before any exercise where you grip weights.'},
  {match:['cobra','upward dog','back extension stretch'], img:'./images/w_yoga.jpg',
   how:'Lie face down, hands under shoulders, and gently press your chest up while keeping hips down. Opens the front of your body and mobilises the spine.'},
  {match:['child pose','child\'s pose','childs pose'], img:'./images/w_yoga.jpg',
   how:'Kneel and sit back on your heels, reaching your arms forward and resting your forehead down. Breathe slowly. A calming reset that gently stretches your back and hips.'},
];

// Returns { img, how } for a given warm-up step text (best keyword match)
function warmupGuideFor(text) {
  const t = (text || '').toLowerCase();
  for (const g of WARMUP_GUIDE) {
    if (g.match.some(k => t.includes(k))) return g;
  }
  // sensible fallback
  return {img:'./images/w_warmup.jpg', how:'A gentle warm-up movement to prepare your body. Take it slow and stay relaxed.'};
}


// ── PHASE DEFINITIONS ─────────────────────────────────────────────────────────
const PHASES = [
  {
    id: 0,
    name: 'Phase 1',
    label: 'Mobilise',
    weeks: 'Weeks 1–2',
    desc: 'Your first 2 weeks. 6 days of warm-ups, light cardio and mobility only — no weights. Build the gym habit and wake up your body gently before any strength training.',
    color: 'var(--mint)',
    gradient: 'var(--gradient-green)',
  },
  {
    id: 1,
    name: 'Phase 2',
    label: 'Build',
    weeks: 'Weeks 3–8',
    desc: '6-day split. Every training day starts with a warm-up, then strength exercises. Bodyweight and light dumbbells/machines. This is where real strength building begins.',
    color: 'var(--lavender)',
    gradient: 'var(--gradient-purple)',
  },
  {
    id: 2,
    name: 'Phase 3',
    label: 'Progress',
    weeks: 'Weeks 9–12',
    desc: '6-day split with progressive overload. Warm-up first, then heavier weights and more sets. Your body composition visibly improves as you get measurably stronger.',
    color: 'var(--accent)',
    gradient: 'var(--gradient-accent)',
  },
];

// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 1 — MOBILISE (Weeks 1–2)
//   6 days/week (Mon–Sat), Sunday rest.
//   NO weights. Warm-up + light cardio + mobility only. Build the habit, wake the body.
//   Every day: a warm-up block, then a set of gentle mobility "exercises".
// ══════════════════════════════════════════════════════════════════════════════
const DAYS_PHASE1 = [

  /* ── MONDAY — Lower Body Mobility ── */
  {name:'Monday', tag:'Lower Body Mobility', tagClass:'legs',
   phase:'Phase 1 · Weeks 1–2',
   focus:'Hips · Knees · Ankles · Gentle Cardio',
   cardio:'10 min easy treadmill walk (4.5–5 km/h, flat) at the START to warm the body',
   warmup:[
     {text:'March in place — 2 minutes, arms swinging', icon:'walk'},
     {text:'Ankle circles — 10 each foot, both ways', icon:'rotate'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Deep squat hold — 20 sec, rocking gently', icon:'bolt'},
     {text:'Leg swings — 10 each leg, front to back', icon:'walk'},
   ],
   exercises:[
    {name:'Bodyweight Hip Hinge (Pattern Practice)',sets:'2',reps:'10',
     tempo:'3 down · 2 up',rest:'40 sec',
     muscles:'Hamstrings, Glutes, Lower Back — teaches the hinge, the single most important movement pattern. No weight, just the shape.',
     svg:`<img src="./images/w_deadlift.jpg" alt="Hip Hinge">`,
     breathing:'Breathe in as you hinge forward. Breathe out as you stand tall. Never rush — feel the stretch in the back of your legs.',
     cues:['Feet hip-width apart, soft bend in your knees','Push your hips BACKWARD — imagine closing a car door with your bottom','Hands slide down the front of your thighs as you fold','Keep your back flat like a table — do not round','Feel a gentle stretch in the back of your legs, then stand tall','Squeeze your glutes at the top'],
     mistakes:['Squatting down instead of hinging back','Rounding the lower back — keep it flat','Going too low too soon — only go where it feels comfortable','Rushing — this is slow, controlled practice']},

    {name:'Bodyweight Squat to Chair',sets:'2',reps:'10',
     tempo:'3 down · 1 pause · 2 up',rest:'45 sec',
     muscles:'Quads, Glutes — learn the squat by sitting back to a chair. Builds confidence and the movement pattern safely.',
     svg:`<img src="./images/w_squat.jpg" alt="Squat to Chair">`,
     breathing:'Breathe in as you sit down. Breathe out as you stand up.',
     cues:['Stand in front of a bench or chair, feet shoulder-width','Sit back and down slowly until you lightly touch the seat','Do NOT flop down — control the descent','Keep your chest up and knees pushing outward','Stand back up by driving through your whole foot','The chair is just a target — barely touch it, do not rest'],
     mistakes:['Dropping onto the chair — stay in control','Knees caving inward — push them out','Heels lifting off the floor','Looking down — keep your gaze forward']},

    {name:'Standing Calf Raises',sets:'2',reps:'15',
     tempo:'2 up · 1 hold · 2 down',rest:'30 sec',
     muscles:'Calves, Ankle Stability — wakes up the lower legs and improves balance for all standing exercises.',
     svg:`<img src="./images/w_walk.jpg" alt="Calf Raise">`,
     breathing:'Breathe out as you rise up, breathe in as you lower. Keep it steady.',
     cues:['Stand tall near a wall for balance','Rise up onto the balls of your feet as high as you can','Hold at the top for 1 second — squeeze your calves','Lower your heels slowly back to the floor','Keep your body straight and tall throughout'],
     mistakes:['Bouncing at the bottom','Rushing — control every rep','Leaning on the wall too heavily — just use it for light balance']},

    {name:'Lying Knee-to-Chest Stretch',sets:'2',reps:'Hold 30 sec each leg',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Lower Back, Glutes, Hip Flexors — a gentle release for the lower back and hips.',
     svg:`<img src="./images/w_stretch.jpg" alt="Knee to Chest">`,
     breathing:'Breathe slowly and deeply. With each exhale, gently draw the knee a little closer.',
     cues:['Lie on your back on a mat','Draw one knee up toward your chest, hold it with both hands','Keep the other leg relaxed, flat or bent on the floor','Feel a gentle stretch in your lower back and glute','Hold for 30 seconds, breathing slowly, then switch legs'],
     mistakes:['Pulling too hard — this is gentle, never forced','Lifting your head off the floor — keep it relaxed','Holding your breath']}
   ]},

  /* ── TUESDAY — Upper Body Mobility ── */
  {name:'Tuesday', tag:'Upper Body Mobility', tagClass:'back',
   phase:'Phase 1 · Weeks 1–2',
   focus:'Shoulders · Upper Back · Posture · Gentle Cardio',
   cardio:'10 min light stationary bike (lowest resistance, comfortable pace) at the START',
   warmup:[
     {text:'Shoulder rolls — 10 forward, 10 backward', icon:'rotate'},
     {text:'Arm circles — 10 each direction', icon:'rotate'},
     {text:'Wall angels — 8 slow slides', icon:'body'},
     {text:'Open-book torso rotation — 8 each side', icon:'rotate'},
     {text:'Neck rolls — 5 each direction, gentle', icon:'rotate'},
   ],
   exercises:[
    {name:'Wall Slides (Shoulder Mobility)',sets:'2',reps:'10',
     tempo:'3 up · 3 down',rest:'40 sec',
     muscles:'Shoulders, Upper Back, Rotator Cuff — improves the shoulder mobility you need before any pressing exercise.',
     svg:`<img src="./images/w_warmup.jpg" alt="Wall Slide">`,
     breathing:'Breathe in as you slide up, breathe out as you slide down. Relaxed and steady.',
     cues:['Stand with your back against a wall, feet slightly forward','Press your lower back, upper back and head to the wall','Bend elbows 90° and place forearms on the wall (cactus shape)','Slide your arms up the wall as far as you can while keeping contact','Slide back down slowly — feel your shoulder blades move'],
     mistakes:['Forearms leaving the wall — go only as high as you can with contact','Lower back arching away from the wall — tuck the pelvis slightly','Shrugging shoulders up — keep them relaxed and down']},

    {name:'Cat-Cow Stretch',sets:'2',reps:'8 slow cycles',
     tempo:'4 sec each direction',rest:'20 sec',
     muscles:'Spine Mobility, Core — gently mobilises the whole spine. Essential for anyone who sits a lot.',
     svg:`<img src="./images/w_yoga.jpg" alt="Cat-Cow">`,
     breathing:'Breathe IN as you arch (cow), breathe OUT as you round (cat). The breath leads the movement.',
     cues:['On all fours — wrists under shoulders, knees under hips','COW: breathe in, drop your belly, lift your head and tailbone','CAT: breathe out, round your back up, tuck chin and tailbone','Move slowly, feeling each part of your spine','Keep the movement smooth and connected to your breath'],
     mistakes:['Moving too fast','Only bending at one point — move the whole spine','Holding the breath — breath and movement are linked']},

    {name:'Prone Y-T-W Raises (Posture)',sets:'2',reps:'8 of each letter',
     tempo:'2 up · 2 hold · 2 down',rest:'30 sec',
     muscles:'Upper Back, Rear Shoulders — strengthens the posture muscles that fight rounded shoulders.',
     svg:`<img src="./images/w_stretch.jpg" alt="Y-T-W">`,
     breathing:'Breathe in lying flat, breathe out as you lift. Small, controlled lifts.',
     cues:['Lie face down on a mat, forehead resting down','Y: arms overhead at 45° — lift both, hold 2 sec, lower','T: arms straight out to the sides — lift, hold 2 sec, lower','W: elbows bent, hands by ears — lift, hold 2 sec, lower','Lift only a few centimetres — small is correct','Feel the muscles between your shoulder blades working'],
     mistakes:['Lifting too high and straining the neck','Craning the neck up — keep it neutral, look at the floor','Rushing — each rep is slow and controlled']},

    {name:'Seated Chest Opener Stretch',sets:'2',reps:'Hold 30 sec',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Chest, Front Shoulders — opens up the chest, undoing hours of hunching forward.',
     svg:`<img src="./images/w_gym_general.jpg" alt="Chest Opener">`,
     breathing:'Breathe deeply into your chest. Each exhale lets you open a little more.',
     cues:['Sit or stand tall','Clasp your hands together behind your back','Gently straighten your arms and lift them slightly','Squeeze your shoulder blades together','Feel the stretch across the front of your chest and shoulders','Hold, breathing deeply — do not force'],
     mistakes:['Rounding forward — keep your chest proud','Forcing the arms too high','Holding your breath']}
   ]},

  /* ── WEDNESDAY — Full-Body Flow ── */
  {name:'Wednesday', tag:'Full-Body Flow', tagClass:'push',
   phase:'Phase 1 · Weeks 1–2',
   focus:'Whole Body · Coordination · Gentle Cardio',
   cardio:'12 min brisk treadmill walk (5–5.5 km/h) at the START',
   warmup:[
     {text:'March in place — 2 minutes to start', icon:'walk'},
     {text:'World\'s greatest stretch — 4 each side', icon:'leaf'},
     {text:'Inchworm walk-out — 5 slow reps', icon:'body'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'5 deep belly breaths', icon:'drop'},
   ],
   exercises:[
    {name:'Glute Bridge Hold',sets:'2',reps:'10 · 3 sec hold each',
     tempo:'2 up · 3 hold · 2 down',rest:'40 sec',
     muscles:'Glutes, Core — the safest way to switch on your glutes, which most beginners struggle to feel.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Glute Bridge">`,
     breathing:'Breathe in lying flat, breathe out as you squeeze and lift, breathe in as you lower.',
     cues:['Lie on your back, knees bent, feet flat, arms at your sides','Squeeze your glutes FIRST, then lift your hips','Rise until your body is a straight line from knees to shoulders','Hold 3 full seconds — keep squeezing','Lower slowly — do not drop'],
     mistakes:['Lifting with your lower back instead of glutes','Feet too far away — heels should be close','Not squeezing at the top']},

    {name:'Bird-Dog',sets:'2',reps:'6 each side',
     tempo:'4 sec extend · 2 sec return',rest:'40 sec',
     muscles:'Core, Balance, Coordination — the gentlest core-and-balance exercise. Builds the stability everything else relies on.',
     svg:`<img src="./images/w_core.jpg" alt="Bird-Dog">`,
     breathing:'Breathe out as you extend, hold while breathing shallowly, breathe in as you return.',
     cues:['On all fours, back flat like a table','Extend your right arm forward and left leg back together','Go only as far as you can without your hips tilting','Hold 4 seconds, then return slowly and switch sides','Keep your belly gently braced throughout'],
     mistakes:['Hips tilting — keep them level','Arm/leg lifting too high and arching the back','Moving too fast']},

    {name:'Standing March with Knee Lift',sets:'2',reps:'20 total (10 each leg)',
     tempo:'Controlled',rest:'30 sec',
     muscles:'Hip Flexors, Core, Balance — gentle standing coordination and balance work.',
     svg:`<img src="./images/w_walk.jpg" alt="Standing March">`,
     breathing:'Breathe naturally and steadily throughout.',
     cues:['Stand tall, core gently braced','Lift one knee up toward hip height, slowly','Lower it with control and lift the other knee','Keep your chest up and stand tall — do not lean back','Use a wall for balance if needed'],
     mistakes:['Rushing — this is a slow balance drill','Leaning backward as you lift','Slouching — stay tall']},

    {name:'Standing Side Bend Stretch',sets:'2',reps:'Hold 30 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Obliques, Lats, Side Body — lengthens the whole side of your torso.',
     svg:`<img src="./images/w_gym_general.jpg" alt="Side Bend">`,
     breathing:'Breathe into the stretched side. Each exhale opens it a little more.',
     cues:['Stand tall, feet hip-width','Raise your right arm overhead','Bend gently to the LEFT — feel the right side lengthen','Keep both feet flat and hips level','Hold, breathing slowly, then switch sides'],
     mistakes:['Leaning forward or backward — stay purely sideways','Letting the hips shift out','Bouncing in the stretch']}
   ]},

  /* ── THURSDAY — Core & Breathing ── */
  {name:'Thursday', tag:'Core & Breathing', tagClass:'shoulders',
   phase:'Phase 1 · Weeks 1–2',
   focus:'Deep Core · Breathing · Gentle Cardio',
   cardio:'10 min easy stationary bike (light resistance) at the START',
   warmup:[
     {text:'5 deep belly breaths, hand on stomach', icon:'drop'},
     {text:'Cat-cow — 6 slow cycles', icon:'body'},
     {text:'Bird-dog — 6 each side', icon:'bolt'},
     {text:'Dead bug — 6 each side', icon:'bolt'},
     {text:'Gentle torso twists — 10 each way', icon:'rotate'},
   ],
   exercises:[
    {name:'Diaphragmatic Breathing Practice',sets:'3',reps:'10 breaths',
     tempo:'4 sec in · 6 sec out',rest:'30 sec',
     muscles:'Core, Diaphragm — proper breathing is the foundation of all training. Learn it now.',
     svg:`<img src="./images/w_breathing.jpg" alt="Breathing">`,
     breathing:'This IS the exercise. Breathe in through the nose 4 seconds — belly expands, not chest. Hold 1 second. Breathe out slowly through the mouth 6 seconds.',
     cues:['Lie on your back, knees bent, one hand on chest, one on belly','The belly hand rises. The chest hand stays still.','4 counts in through the nose — belly expands like a balloon','6 counts out through the mouth — belly falls gently','Keep shoulders completely relaxed'],
     mistakes:['Chest rising instead of belly','Rushing the breath','Tensing the shoulders']},

    {name:'Dead Bug',sets:'2',reps:'6 each side',
     tempo:'4 sec lower · 2 sec return',rest:'40 sec',
     muscles:'Deep Core — trains the inner core that protects your spine. Far better and safer than sit-ups.',
     svg:`<img src="./images/w_core.jpg" alt="Dead Bug">`,
     breathing:'EXHALE fully as you lower your limbs. Breathe in to reset. The exhale is what switches on your deep core.',
     cues:['Lie on your back, press your lower back into the floor','Arms point at the ceiling, knees bent at 90° in the air','Slowly lower your right arm back and left leg forward','Lower back must stay pressed to the floor throughout','Return and switch sides — small range is fine'],
     mistakes:['Lower back lifting — make the range smaller','Moving too fast','Holding the breath — always exhale as you extend']},

    {name:'Modified Plank (Knees Down)',sets:'2',reps:'Hold 15–20 sec',
     tempo:'Hold',rest:'40 sec',
     muscles:'Core, Shoulders — start planks on your knees. Build the hold time gently over the 2 weeks.',
     svg:`<img src="./images/w_plank.jpg" alt="Modified Plank">`,
     breathing:'Breathe in through the nose, out through the mouth. Never hold your breath.',
     cues:['Knees on the floor, forearms down, elbows under shoulders','Body forms a straight line from knees to head','Squeeze your glutes and gently pull your belly in','Keep hips level — do not let them sag or pike up','Start with 15 seconds, build toward 20 over the 2 weeks'],
     mistakes:['Hips sagging','Holding the breath','Neck craning — look at the floor']},

    {name:'Supine Spinal Twist',sets:'2',reps:'Hold 30 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Lower Back, Obliques — releases the lower back and improves spinal rotation.',
     svg:`<img src="./images/w_yoga.jpg" alt="Spinal Twist">`,
     breathing:'Breathe slowly. Each exhale lets the twist deepen a little.',
     cues:['Lie on your back, arms out in a T','Bring your right knee up, then let it fall across to the LEFT','Keep your right shoulder on the floor','Turn your head to the right if comfortable','Hold, breathing slowly, then switch sides'],
     mistakes:['Forcing the knee to the floor','Lifting the opposite shoulder','Rushing between sides']}
   ]},

  /* ── FRIDAY — Cardio & Stretch ── */
  {name:'Friday', tag:'Cardio & Stretch', tagClass:'legs',
   phase:'Phase 1 · Weeks 1–2',
   focus:'Light Cardio · Full-Body Stretch · Recovery',
   cardio:'15 min brisk treadmill walk (5.5 km/h, 1% incline) — the main event today',
   warmup:[
     {text:'March in place — 2 minutes to start', icon:'walk'},
     {text:'Jumping jacks — 20 easy reps', icon:'bolt'},
     {text:'Side lunge shifts — 8 each side', icon:'walk'},
     {text:'Ankle circles — 10 each foot', icon:'rotate'},
     {text:'5 deep belly breaths', icon:'drop'},
   ],
   exercises:[
    {name:'Hip Flexor Lunge Stretch',sets:'2',reps:'Hold 30 sec each side',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Hip Flexors — the most important stretch for anyone who sits. Tight hip flexors cause back pain and block glute activation.',
     svg:`<img src="./images/w_lunges.jpg" alt="Hip Flexor Stretch">`,
     breathing:'Breathe in, and as you breathe out gently push your hips forward to deepen it.',
     cues:['Kneel on your right knee, left foot forward (lunge position)','Both knees roughly 90°','Tuck your pelvis under gently','Shift your weight forward slightly — feel the front of your right hip stretch','Stay upright, hold, then switch sides'],
     mistakes:['Not feeling it — tuck the pelvis more','Leaning forward — stay tall','Front knee going past the toes']},

    {name:'Standing Hamstring Stretch',sets:'2',reps:'Hold 30 sec each leg',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Hamstrings — lengthens the back of the legs, improving your hip hinge and squat depth.',
     svg:`<img src="./images/w_stretch.jpg" alt="Hamstring Stretch">`,
     breathing:'Breathe slowly. Do not bounce — let the muscle relax with each exhale.',
     cues:['Place one heel on a low step, leg straight, toes up','Keep your back flat and hinge forward from the hips','Feel the stretch in the back of the raised leg','Hold gently — never force or bounce','Switch legs'],
     mistakes:['Rounding the back instead of hinging','Bouncing','Forcing past mild tension']},

    {name:'Gentle Cobra Stretch',sets:'2',reps:'Hold 20 sec',
     tempo:'Hold + breathe',rest:'20 sec',
     muscles:'Abs, Lower Back, Chest — a gentle backbend that opens the front of the body after cardio.',
     svg:`<img src="./images/w_yoga.jpg" alt="Cobra Stretch">`,
     breathing:'Breathe in as you lift, breathe out as you hold and relax into it.',
     cues:['Lie face down, hands under your shoulders','Gently press up, lifting your chest — keep hips on the floor','Only go as high as is comfortable — a small lift is fine','Keep your shoulders relaxed away from your ears','Hold gently, then lower down'],
     mistakes:['Pushing up too far and straining the lower back','Shrugging the shoulders','Holding the breath']},

    {name:'Child\'s Pose (Relax & Reset)',sets:'1',reps:'Hold 60 sec',
     tempo:'Rest + breathe',rest:'None',
     muscles:'Full Body Release, Nervous System — the perfect way to finish. Calms the body and mind.',
     svg:`<img src="./images/w_yoga.jpg" alt="Child\'s Pose">`,
     breathing:'Natural, slow breathing. Let your body get heavy and relaxed.',
     cues:['Kneel and sit back onto your heels','Fold forward, arms extended in front or resting by your sides','Rest your forehead on the mat','Let your whole body relax and breathe slowly','Stay for a full minute — enjoy the calm'],
     mistakes:['Rushing out of it','Tensing anywhere — consciously relax','Skipping it because it feels easy — recovery matters']}
   ]},

  /* ── SATURDAY — Gentle Full Body ── */
  {name:'Saturday', tag:'Gentle Full Body', tagClass:'push',
   phase:'Phase 1 · Weeks 1–2',
   focus:'Light Whole Body · Confidence · Gentle Cardio',
   cardio:'10 min easy walk (5 km/h) at the START',
   warmup:[
     {text:'March in place — 2 minutes', icon:'walk'},
     {text:'Shoulder rolls — 10 each direction', icon:'rotate'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Glute bridges — 10 to wake the glutes', icon:'bolt'},
     {text:'Leg swings — 10 each leg', icon:'walk'},
   ],
   exercises:[
    {name:'Bodyweight Squat',sets:'2',reps:'12',
     tempo:'3 down · 2 up',rest:'40 sec',
     muscles:'Quads, Glutes — by now the squat should feel more familiar. No chair needed if you feel steady.',
     svg:`<img src="./images/w_squat.jpg" alt="Squat">`,
     breathing:'Breathe in going down, breathe out coming up.',
     cues:['Feet shoulder-width, toes slightly out','Sit back and down, chest tall','Knees push outward over your toes','Go as low as is comfortable','Drive through your whole foot to stand'],
     mistakes:['Knees caving in','Heels lifting','Chest dropping forward']},

    {name:'Wall Push-Up',sets:'2',reps:'10',
     tempo:'2 down · 2 up',rest:'40 sec',
     muscles:'Chest, Shoulders, Triceps — the gentlest push-up. Builds pushing strength safely.',
     svg:`<img src="./images/w_pushup.jpg" alt="Wall Push-Up">`,
     breathing:'Breathe in as you lean toward the wall, breathe out as you push away.',
     cues:['Stand arm-length from a wall, palms on the wall at shoulder height','Lean toward the wall by bending your elbows','Keep your body straight like a plank','Push away until your arms are nearly straight','Keep your core gently braced'],
     mistakes:['Hips sagging','Only going halfway','Hands too wide']},

    {name:'Glute Bridge',sets:'2',reps:'12',
     tempo:'2 up · 2 down',rest:'40 sec',
     muscles:'Glutes, Hamstrings — reinforcing the glute activation you have been building all week.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Glute Bridge">`,
     breathing:'Breathe out as you lift, breathe in as you lower.',
     cues:['Lie on your back, knees bent, feet flat','Squeeze your glutes and lift your hips','Straight line from knees to shoulders at the top','Squeeze hard at the top','Lower slowly'],
     mistakes:['Using the lower back','Not squeezing','Rushing']},

    {name:'Full-Body Stretch Sequence',sets:'1',reps:'30 sec each: quad, chest, back',
     tempo:'Hold + breathe',rest:'None',
     muscles:'Full Body — a gentle cool-down to finish your first weeks strong.',
     svg:`<img src="./images/w_stretch.jpg" alt="Full-Body Stretch">`,
     breathing:'Slow breaths in each stretch. Never force.',
     cues:['Standing quad stretch: hold one ankle behind you, 30 sec each','Chest opener: clasp hands behind back, lift gently, 30 sec','Overhead reach: stretch both arms up and lengthen, 30 sec','Breathe deeply in each position','Finish feeling loose and relaxed'],
     mistakes:['Bouncing','Rushing through them','Holding the breath']}
   ]},

  /* ── SUNDAY — Rest ── */
  {name:'Sunday', tag:'Rest Day', tagClass:'rest', rest:true,
   restMsg:'Your one full rest day. You have moved your body 6 days this week — that is a huge achievement for someone just starting. Rest well.',
   restTips:[
    'Full rest — a gentle walk is fine but nothing structured',
    'Practice belly breathing for 5 minutes before bed',
    'Drink at least 2 litres of water today',
    'Eat well — your body is adapting to the new routine',
    'Notice how much more comfortable movement already feels',
    'Sleep 7–9 hours — recovery is where the benefits lock in'
   ]},
];

// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 2 — BUILD (Weeks 3–8)
//   6-day split. Each day: WARM-UP block first, THEN strength exercises.
//   Bodyweight + light dumbbells/machines.
//   Mon Legs · Tue Back+Biceps · Wed Chest+Triceps · Thu Shoulders+Core · Fri Full Body · Sat Cardio+Core
// ══════════════════════════════════════════════════════════════════════════════
const DAYS_PHASE2 = [

  /* ── MONDAY — Legs & Glutes ── */
  {name:'Monday', tag:'Legs & Glutes', tagClass:'legs',
   phase:'Phase 2 · Weeks 3–8',
   focus:'Quads · Glutes · Hamstrings',
   cardio:'8 min treadmill walk (5.5 km/h) to warm up before strength',
   warmup:[
     {text:'5 min easy walk to warm up', icon:'walk'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Deep squat hold — 20 sec, knees pushed out', icon:'bolt'},
     {text:'Glute bridges — 12 to activate glutes', icon:'bolt'},
     {text:'Leg swings — 10 each leg', icon:'walk'},
   ],
   exercises:[
    {name:'Goblet Squat (Light Dumbbell)',sets:'3',reps:'10',
     tempo:'3 down · 1 pause · 2 up',rest:'75 sec',
     muscles:'Quads, Glutes, Core — hold one light dumbbell at your chest. The weight helps keep your chest up.',
     svg:`<img src="./images/w_squat.jpg" alt="Goblet Squat">`,
     breathing:'Breathe in going down, breathe out driving up. Brace your core gently.',
     cues:['Hold one dumbbell (start 4 kg) vertically at your chest','Feet shoulder-width, toes slightly out','Sit back and down, knees pushing out','Go until thighs are about parallel','Drive through your whole foot, squeeze glutes at the top'],
     mistakes:['Heels rising — widen stance or turn toes out','Knees caving in','Rounding the back — keep the dumbbell high on the chest','Rushing the descent']},

    {name:'Glute Bridge — Single Leg',sets:'3',reps:'10 each leg',
     tempo:'2 up · 2 hold · 2 down',rest:'60 sec',
     muscles:'Glutes, Hamstrings — one leg at a time builds each glute independently.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Single Leg Glute Bridge">`,
     breathing:'Breathe out as you lift, breathe in as you lower.',
     cues:['Lie in glute bridge position, both feet on floor','Extend one leg straight out','Lift your hips using only the working leg\'s glute','Hold 2 seconds at the top, squeeze hard','Lower slowly, complete all reps, then switch'],
     mistakes:['Hips tilting to one side','Using the lower back','Rushing the hold']},

    {name:'Reverse Lunge (Bodyweight)',sets:'3',reps:'10 each leg',
     tempo:'2 down · 2 up',rest:'60 sec',
     muscles:'Quads, Glutes, Balance — stepping backward is gentle on the knees, perfect for beginners.',
     svg:`<img src="./images/w_lunges.jpg" alt="Reverse Lunge">`,
     breathing:'Breathe in as you step back and lower, breathe out as you return.',
     cues:['Stand tall, step one foot straight back','Lower your back knee toward the floor','Front shin stays vertical, knee over the ankle','Push through the front heel to return','Do all reps one side, then switch'],
     mistakes:['Front knee past the toes — step further back','Leaning forward','Back knee slamming down']},

    {name:'Standing Calf Raises',sets:'3',reps:'15',
     tempo:'2 up · 1 hold · 2 down',rest:'45 sec',
     muscles:'Calves — build lower-leg strength and ankle stability.',
     svg:`<img src="./images/w_walk.jpg" alt="Calf Raise">`,
     breathing:'Breathe out rising up, in lowering down.',
     cues:['Stand tall near a wall for balance','Rise onto the balls of your feet as high as you can','Hold 1 second at the top','Lower slowly','For more range, use the edge of a step'],
     mistakes:['Bouncing','Half range','Rushing']}
   ]},

  /* ── TUESDAY — Back & Biceps ── */
  {name:'Tuesday', tag:'Back & Biceps', tagClass:'back',
   phase:'Phase 2 · Weeks 3–8',
   focus:'Lats · Upper Back · Biceps',
   cardio:'8 min stationary bike to warm up',
   warmup:[
     {text:'5 min easy bike or walk', icon:'walk'},
     {text:'Arm circles — 10 each direction', icon:'rotate'},
     {text:'Wall slides — 8 to open the shoulders', icon:'body'},
     {text:'Band face pulls — 12 to wake the back', icon:'rotate'},
     {text:'Cat-cow — 6 cycles', icon:'body'},
   ],
   exercises:[
    {name:'Lat Pulldown (Light)',sets:'3',reps:'12',
     tempo:'2 down · 1 hold · 3 up',rest:'75 sec',
     muscles:'Lats, Upper Back, Biceps — builds back width and the strength that leads toward pull-ups.',
     svg:`<img src="./images/w_lat_pulldown.jpg" alt="Lat Pulldown">`,
     breathing:'Breathe in at the top, breathe out as you pull down, breathe in as the bar rises slowly.',
     cues:['Wide overhand grip, thighs locked under the pad','Pull your shoulders down first, away from your ears','Pull the bar to your upper chest — never behind the neck','Hold 1 second, squeeze your back','Let the bar rise slowly over 3 seconds','Start light — 15–20 kg'],
     mistakes:['Pulling behind the neck','Leaning back too far','Letting the bar fly up','Pulling with only the arms — drive the elbows down']},

    {name:'Seated Cable Row (Light)',sets:'3',reps:'12',
     tempo:'2 pull · 1 hold · 3 return',rest:'75 sec',
     muscles:'Mid Back, Rhomboids — builds back thickness and improves posture.',
     svg:`<img src="./images/w_row.jpg" alt="Seated Cable Row">`,
     breathing:'Reach forward and breathe in, breathe out as you pull, breathe in as you return.',
     cues:['Sit tall, chest proud, slight forward lean to start','Pull the handle to your belly button','Drive your elbows back past your sides','Squeeze your shoulder blades together, hold 1 second','Return slowly over 3 seconds — feel the stretch'],
     mistakes:['Rocking the torso','Pulling too high','Shrugging the shoulders','Letting the cable snap back']},

    {name:'Dumbbell Bicep Curl (Light)',sets:'3',reps:'12',
     tempo:'2 up · 1 hold · 3 down',rest:'60 sec',
     muscles:'Biceps — builds arm shape and pulling strength.',
     svg:`<img src="./images/w_curl.jpg" alt="Bicep Curl">`,
     breathing:'Breathe out as you curl up, breathe in as you lower slowly.',
     cues:['Hold dumbbells at your sides, palms forward (start 3–4 kg)','Elbows pinned to your sides — they do not move','Curl up, squeeze at the top for 1 second','Lower slowly over 3 seconds','No swinging the body'],
     mistakes:['Swinging the body — too heavy','Elbows drifting forward','Dropping the weight fast']},

    {name:'Superman Hold',sets:'3',reps:'10 · 2 sec hold each',
     tempo:'2 up · 2 hold · 2 down',rest:'45 sec',
     muscles:'Lower Back, Glutes — strengthens the whole back of the body.',
     svg:`<img src="./images/w_stretch.jpg" alt="Superman">`,
     breathing:'Breathe out as you lift, breathe in as you lower.',
     cues:['Lie face down, arms extended overhead','Lift your arms, chest and legs off the floor together','Hold 2 seconds — squeeze your back and glutes','Lower gently','Keep your neck neutral, looking at the floor'],
     mistakes:['Jerking up fast','Lifting only arms or only legs','Craning the neck up']}
   ]},

  /* ── WEDNESDAY — Chest & Triceps ── */
  {name:'Wednesday', tag:'Chest & Triceps', tagClass:'push',
   phase:'Phase 2 · Weeks 3–8',
   focus:'Chest · Front Shoulders · Triceps',
   cardio:'8 min treadmill walk to warm up',
   warmup:[
     {text:'5 min easy walk', icon:'walk'},
     {text:'Arm circles — 10 each direction', icon:'rotate'},
     {text:'Wall angels — 8 slow slides', icon:'body'},
     {text:'Wall push-ups — 8 to prime the chest', icon:'bolt'},
     {text:'Chest opener stretch — 20 sec', icon:'leaf'},
   ],
   exercises:[
    {name:'Machine Chest Press (Light)',sets:'3',reps:'12',
     tempo:'2 press · 1 hold · 2 return',rest:'75 sec',
     muscles:'Chest, Front Shoulders, Triceps — the machine guides the movement perfectly for beginners.',
     svg:`<img src="./images/w_chest_press.jpg" alt="Machine Chest Press">`,
     breathing:'Breathe in before pressing, breathe out as you push forward, breathe in as handles return.',
     cues:['Set the seat so handles are at mid-chest height','Back flat against the pad','Push forward, feeling your chest work','Squeeze the chest at full extension, hold 1 second','Return slowly for 2 seconds','Start 10–15 kg total'],
     mistakes:['Seat too high — becomes a shoulder press','Shrugging the shoulders','Letting the weight snap back','Pushing with only the arms']},

    {name:'Incline Push-Up (Bench)',sets:'3',reps:'10',
     tempo:'3 down · 2 up',rest:'60 sec',
     muscles:'Chest, Shoulders, Triceps — progressed from wall push-ups. Hands on a bench, feet on the floor.',
     svg:`<img src="./images/w_pushup.jpg" alt="Incline Push-Up">`,
     breathing:'Breathe in as you lower, breathe out as you push up.',
     cues:['Hands on a bench, slightly wider than shoulders','Body straight from head to heels like a plank','Lower your chest toward the bench over 3 seconds','Push up until arms nearly straight','As it gets easy, use a lower surface'],
     mistakes:['Hips sagging','Only going halfway','Rushing the descent']},

    {name:'Tricep Rope Pushdown (Light)',sets:'3',reps:'12',
     tempo:'2 down · 1 hold · 2 up',rest:'60 sec',
     muscles:'Triceps — shapes and strengthens the back of the arms.',
     svg:`<img src="./images/w_curl.jpg" alt="Tricep Pushdown">`,
     breathing:'Breathe out as you push down, breathe in as you return.',
     cues:['Stand tall at the cable, rope attachment','Elbows pinned to your sides throughout','Push the rope down until arms are straight','Squeeze the triceps at the bottom, hold 1 second','Return slowly, elbows staying put','Start light'],
     mistakes:['Elbows flaring out','Using the whole body','Half range of motion']},

    {name:'Plank (Full or Knees)',sets:'3',reps:'Hold 20–30 sec',
     tempo:'Hold',rest:'45 sec',
     muscles:'Core, Shoulders — hold a plank on toes if you can, knees if you need. Build the time.',
     svg:`<img src="./images/w_plank.jpg" alt="Plank">`,
     breathing:'Breathe steadily in through the nose, out through the mouth.',
     cues:['Forearms down, elbows under shoulders','Straight line from heels (or knees) to head','Squeeze glutes, brace the core','Keep hips level — no sagging','Build from 20 toward 30 seconds'],
     mistakes:['Hips sagging','Holding the breath','Neck dropping']}
   ]},

  /* ── THURSDAY — Shoulders & Core ── */
  {name:'Thursday', tag:'Shoulders & Core', tagClass:'shoulders',
   phase:'Phase 2 · Weeks 3–8',
   focus:'Shoulders · Core Stability',
   cardio:'8 min bike to warm up',
   warmup:[
     {text:'5 min easy bike', icon:'walk'},
     {text:'Shoulder rolls — 10 each direction', icon:'rotate'},
     {text:'Wall angels — 8 slow slides', icon:'body'},
     {text:'Bird-dog — 8 each side', icon:'bolt'},
     {text:'Dead bug — 8 each side', icon:'bolt'},
   ],
   exercises:[
    {name:'Seated Dumbbell Shoulder Press (Light)',sets:'3',reps:'12',
     tempo:'2 up · 2 down',rest:'75 sec',
     muscles:'Shoulders, Triceps — builds the rounded shoulder shape. Small muscle, start very light.',
     svg:`<img src="./images/w_shoulder_press.jpg" alt="Shoulder Press">`,
     breathing:'Breathe in at the bottom, breathe out as you press up.',
     cues:['Sit with back support, back flat against the pad','Dumbbells at ear level, palms forward (start 3 kg)','Press up until arms nearly straight — do not lock','Lower slowly to ear level','Keep your core gently braced'],
     mistakes:['Arching the lower back','Pressing forward instead of straight up','Going too heavy']},

    {name:'Dumbbell Lateral Raise (Light)',sets:'3',reps:'12–15',
     tempo:'2 up · 2 down',rest:'60 sec',
     muscles:'Side Shoulders — creates the defined, rounded shoulder look.',
     svg:`<img src="./images/w_lateral_raise.jpg" alt="Lateral Raise">`,
     breathing:'Breathe out as you raise, breathe in as you lower.',
     cues:['Small dumbbells at your sides (start 2–3 kg)','Slight forward lean from the hips','Raise arms out to shoulder height — no higher','Lead with the elbows','Lower slowly'],
     mistakes:['Raising above shoulder height','Shrugging','Swinging the body — too heavy']},

    {name:'Dead Bug',sets:'3',reps:'8 each side',
     tempo:'4 sec lower · 2 sec return',rest:'45 sec',
     muscles:'Deep Core — the anti-arching drill that protects your spine.',
     svg:`<img src="./images/w_core.jpg" alt="Dead Bug">`,
     breathing:'Exhale fully as you lower the limbs. Breathe in to reset.',
     cues:['Lie on your back, lower back pressed to the floor','Arms to the ceiling, knees bent 90° in the air','Lower opposite arm and leg slowly','Back stays pressed down the entire time','Return and switch'],
     mistakes:['Back lifting — smaller range','Rushing','Holding the breath']},

    {name:'Side Plank (Knees or Full)',sets:'3',reps:'Hold 15–20 sec each side',
     tempo:'Hold',rest:'45 sec',
     muscles:'Obliques, Hips — the side core that shapes the waist and stabilises the spine.',
     svg:`<img src="./images/w_plank.jpg" alt="Side Plank">`,
     breathing:'Breathe steadily. Never hold your breath.',
     cues:['Lie on your side, bottom knee down (modified) or legs straight','Forearm down, elbow under the shoulder','Lift your hips into a straight line','Hold, keeping hips stacked','Build from 15 toward 20 seconds, then switch'],
     mistakes:['Hips sagging','Top hip rotating forward','Holding the breath']}
   ]},

  /* ── FRIDAY — Full Body ── */
  {name:'Friday', tag:'Full Body', tagClass:'push',
   phase:'Phase 2 · Weeks 3–8',
   focus:'Whole Body · Glutes · Core',
   cardio:'8 min walk to warm up',
   warmup:[
     {text:'5 min easy walk', icon:'walk'},
     {text:'World\'s greatest stretch — 4 each side', icon:'leaf'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Bodyweight squats — 10 to groove the pattern', icon:'bolt'},
     {text:'Glute bridges — 10 to activate glutes', icon:'bolt'},
   ],
   exercises:[
    {name:'Sumo Squat (Light Dumbbell)',sets:'3',reps:'12',
     tempo:'3 down · 2 up',rest:'75 sec',
     muscles:'Inner Thighs, Glutes, Quads — the wide stance targets the inner thighs and glutes.',
     svg:`<img src="./images/w_sumo_squat.jpg" alt="Sumo Squat">`,
     breathing:'Breathe in going down, breathe out coming up.',
     cues:['Hold one dumbbell hanging between your legs','Feet wide, toes turned out 45°','Sit straight down, torso upright','Knees push out over your toes','Drive up, squeeze glutes and inner thighs'],
     mistakes:['Knees caving in','Leaning forward','Heels lifting']},

    {name:'Step-Up (Bodyweight)',sets:'3',reps:'10 each leg',
     tempo:'2 up · 2 down',rest:'60 sec',
     muscles:'Quads, Glutes, Balance — functional single-leg strength.',
     svg:`<img src="./images/w_lunges.jpg" alt="Step Up">`,
     breathing:'Breathe out stepping up, breathe in stepping down.',
     cues:['Use a knee-height step or bench','Place your whole foot on the step','Drive through the top heel to lift up','Step down with control','Do not push off the bottom foot'],
     mistakes:['Pushing off the back foot','Leaning forward','Thudding down']},

    {name:'Machine Chest Press (Light)',sets:'3',reps:'12',
     tempo:'2 press · 2 return',rest:'60 sec',
     muscles:'Chest, Shoulders, Triceps — a second dose of pushing to round out the full-body day.',
     svg:`<img src="./images/w_chest_press.jpg" alt="Machine Chest Press">`,
     breathing:'Breathe in before pressing, breathe out as you push.',
     cues:['Seat set so handles are at mid-chest','Back flat against the pad','Push forward, squeeze the chest','Return slowly','Keep shoulders down'],
     mistakes:['Seat too high','Shrugging','Snapping the weight back']},

    {name:'Bicycle Crunches',sets:'3',reps:'20 total (10 each side)',
     tempo:'Controlled',rest:'45 sec',
     muscles:'Abs, Obliques — the toning core finisher.',
     svg:`<img src="./images/w_core.jpg" alt="Bicycle Crunches">`,
     breathing:'Exhale on each twist, breathe in to switch.',
     cues:['Lie on your back, hands lightly behind your head','Lift both legs, shins parallel to the floor','Bring right elbow toward left knee, extend right leg','Rotate from the torso, not just the elbow','Switch sides slowly'],
     mistakes:['Pulling the neck','Going too fast','Not rotating the torso']}
   ]},

  /* ── SATURDAY — Cardio & Core ── */
  {name:'Saturday', tag:'Cardio & Core', tagClass:'legs',
   phase:'Phase 2 · Weeks 3–8',
   focus:'Cardio · Core · Stretch',
   cardio:'20 min steady treadmill walk (5.5–6 km/h, 2% incline) — the main event',
   warmup:[
     {text:'March in place — 2 minutes', icon:'walk'},
     {text:'Jumping jacks — 20 easy reps', icon:'bolt'},
     {text:'Side lunge shifts — 8 each side', icon:'walk'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Cat-cow — 6 cycles', icon:'body'},
   ],
   exercises:[
    {name:'Plank (Full or Knees)',sets:'3',reps:'Hold 25–35 sec',
     tempo:'Hold',rest:'45 sec',
     muscles:'Core, Shoulders — build your plank hold time each week.',
     svg:`<img src="./images/w_plank.jpg" alt="Plank">`,
     breathing:'Breathe steadily throughout.',
     cues:['Forearms down, elbows under shoulders','Straight line, glutes squeezed, core braced','Hips level','Build the hold time gradually','Drop to knees if form breaks'],
     mistakes:['Hips sagging','Holding the breath','Neck dropping']},

    {name:'Glute Bridge — Slow Tempo',sets:'3',reps:'12',
     tempo:'3 up · 3 hold · 3 down',rest:'45 sec',
     muscles:'Glutes, Hamstrings — slow tempo makes bodyweight surprisingly challenging.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Glute Bridge">`,
     breathing:'Breathe out lifting, breathe in lowering.',
     cues:['Standard glute bridge, but 3 counts up','Hold 3 counts at the top, squeezing hard','3 counts to lower','Feel the glutes burn by rep 8','Keep the lower back out of it'],
     mistakes:['Rushing the tempo','Using the back','Not squeezing']},

    {name:'Bicycle Crunches',sets:'3',reps:'20 total',
     tempo:'Controlled',rest:'40 sec',
     muscles:'Abs, Obliques — steady core work.',
     svg:`<img src="./images/w_core.jpg" alt="Bicycle Crunches">`,
     breathing:'Exhale on each twist.',
     cues:['Hands light behind the head','Legs lifted, shins parallel to floor','Elbow to opposite knee, rotating the torso','Slow and controlled','Feel the obliques working'],
     mistakes:['Pulling the neck','Too fast','No torso rotation']},

    {name:'Full-Body Cool-Down Stretch',sets:'1',reps:'30 sec each: hamstring, hip flexor, chest',
     tempo:'Hold + breathe',rest:'None',
     muscles:'Full Body — finish the week loose and recovered.',
     svg:`<img src="./images/w_stretch.jpg" alt="Cool-Down Stretch">`,
     breathing:'Slow breaths, relax into each stretch.',
     cues:['Hamstring: heel on a step, hinge forward, 30 sec each','Hip flexor: kneeling lunge, hips forward, 30 sec each','Chest: hands clasped behind, lift gently, 30 sec','Breathe deeply throughout','Finish relaxed'],
     mistakes:['Bouncing','Rushing','Holding the breath']}
   ]},

  /* ── SUNDAY — Rest ── */
  {name:'Sunday', tag:'Rest Day', tagClass:'rest', rest:true,
   restMsg:'Six days of training done. Your body is getting stronger every week. Today is for full recovery.',
   restTips:[
    'Full rest — light walking only if you feel like it',
    'Eat your full protein target — muscles rebuild on rest days',
    'Foam roll or gently stretch any sore areas',
    'Log your body weight in the morning',
    'Plan and prep meals for the week ahead',
    'Sleep 7–9 hours — the most important recovery tool'
   ]},
];

// ══════════════════════════════════════════════════════════════════════════════
//   PHASE 3 — PROGRESS (Weeks 9–12)
//   6-day split. WARM-UP first, THEN heavier strength with progressive overload.
//   Same split as Phase 2, more sets and more weight.
// ══════════════════════════════════════════════════════════════════════════════
const DAYS_PHASE3 = [

  /* ── MONDAY — Legs & Glutes ── */
  {name:'Monday', tag:'Legs & Glutes', tagClass:'legs',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Quads · Glutes · Hamstrings · Progressive Overload',
   cardio:'10 min treadmill walk (6 km/h, 2% incline) to warm up',
   warmup:[
     {text:'5 min brisk walk to warm up', icon:'walk'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Deep squat hold — 30 sec, rocking gently', icon:'bolt'},
     {text:'Fire hydrants — 10 each side', icon:'bolt'},
     {text:'Glute bridges — 12 to activate glutes', icon:'bolt'},
     {text:'Leg swings — 10 each leg', icon:'walk'},
   ],
   exercises:[
    {name:'Goblet Squat (Heavier)',sets:'4',reps:'10',
     tempo:'3 down · 1 pause · 2 up',rest:'90 sec',
     muscles:'Quads, Glutes, Core — heavier now, 4 sets. Add weight when all sets feel controlled.',
     svg:`<img src="./images/w_squat.jpg" alt="Goblet Squat">`,
     breathing:'Breathe in going down, breathe out driving up. Brace hard against the weight.',
     cues:['Aim for 7–10 kg this phase','First set lighter as a warm-up, then working sets','Go below parallel if your mobility allows','Same perfect form as always — form never changes with weight','Track your weight — add 1 kg when 4×10 feels easy'],
     mistakes:['Adding weight too fast','Form breaking under load','Skipping the warm-up set','Not tracking progress']},

    {name:'Dumbbell Romanian Deadlift',sets:'4',reps:'10',
     tempo:'3 down · 1 hold · 2 up',rest:'90 sec',
     muscles:'Hamstrings, Glutes — the loaded hip hinge you learned in Phase 1. Now with dumbbells.',
     svg:`<img src="./images/w_deadlift.jpg" alt="Romanian Deadlift">`,
     breathing:'Breathe in at the top, hold as you hinge, breathe out as you stand.',
     cues:['A dumbbell in each hand, in front of your thighs (start 5–8 kg)','Push hips back, dumbbells slide down your legs','Keep the back flat — never round','Lower until you feel the hamstring stretch, hold 1 second','Drive hips forward to stand, squeeze glutes'],
     mistakes:['Rounding the lower back — reduce weight','Bending the knees too much','Letting the dumbbells drift away from the legs']},

    {name:'Hip Thrust (Dumbbell)',sets:'4',reps:'12',
     tempo:'2 up · 2 hold · 2 down',rest:'75 sec',
     muscles:'Glutes — the single best glute builder. A dumbbell on the hips adds real challenge.',
     svg:`<img src="./images/w_hip_thrust.jpg" alt="Hip Thrust">`,
     breathing:'Breathe in at the bottom, breathe out and squeeze at the top, hold, breathe in lowering.',
     cues:['Upper back on a bench, dumbbell in the hip crease (8–10 kg), towel for comfort','Drive hips up, hard glute squeeze, hold 2 seconds','Body forms a straight line at the top','Lower with control, keep tension','Work toward 10–12 kg by week 12'],
     mistakes:['Using the lower back','Dumbbell sliding — place it firmly','Skipping the 2-second squeeze']},

    {name:'Seated Leg Curl (Machine)',sets:'3',reps:'15',
     tempo:'2 curl · 1 hold · 3 return',rest:'60 sec',
     muscles:'Hamstrings — isolates the back of the legs with zero lower-back strain.',
     svg:`<img src="./images/w_leg_press.jpg" alt="Leg Curl">`,
     breathing:'Breathe out as you curl down, breathe in as you return slowly.',
     cues:['Pad on the lower leg, knee aligned with the pivot','Curl both legs down, feel the hamstrings','Hold 1 second at the bottom','Return slowly over 3 seconds','Start light, add weight when 15 feels easy'],
     mistakes:['Hips lifting off the seat','Rushing the return','Using momentum']}
   ]},

  /* ── TUESDAY — Back & Biceps ── */
  {name:'Tuesday', tag:'Back & Biceps', tagClass:'back',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Lats · Upper Back · Biceps · Progressive Overload',
   cardio:'10 min stationary bike (moderate resistance) to warm up',
   warmup:[
     {text:'5 min bike at light resistance', icon:'walk'},
     {text:'Arm circles — 10 each direction', icon:'rotate'},
     {text:'Wall slides — 8 to open the shoulders', icon:'body'},
     {text:'Band face pulls — 15', icon:'rotate'},
     {text:'Open-book torso rotation — 8 each side', icon:'rotate'},
   ],
   exercises:[
    {name:'Lat Pulldown (Progressive)',sets:'4',reps:'10',
     tempo:'2 down · 1 hold · 3 up',rest:'90 sec',
     muscles:'Lats, Upper Back, Biceps — 4 sets now, add weight as you get stronger.',
     svg:`<img src="./images/w_lat_pulldown.jpg" alt="Lat Pulldown">`,
     breathing:'Breathe in at the top, out as you pull, in as the bar rises.',
     cues:['Start 5 kg heavier than where Phase 2 ended','Pull to the upper chest, hold 1 second','3-second return — this is where the back grows','Drive the elbows down, not the hands','Add 2.5 kg when all 4×10 feel easy'],
     mistakes:['Pulling behind the neck','Excessive lean','Rushing the return','Using only the arms']},

    {name:'Seated Cable Row (Progressive)',sets:'4',reps:'10',
     tempo:'2 pull · 1 hold · 3 return',rest:'90 sec',
     muscles:'Mid Back, Rhomboids — 4 sets with heavier weight for back thickness.',
     svg:`<img src="./images/w_row.jpg" alt="Seated Cable Row">`,
     breathing:'Breathe in reaching forward, out as you pull, in as you return.',
     cues:['5 kg heavier than Phase 2 finish','Pull to the belly button, elbows drive back','Squeeze shoulder blades, hold 1 second','Return slowly over 3 seconds','Sit still, only the arms move'],
     mistakes:['Rocking the body','Pulling too high','Shrugging','Rushing the return']},

    {name:'Dumbbell Bicep Curl (Heavier)',sets:'4',reps:'10',
     tempo:'2 up · 1 hold · 3 down',rest:'60 sec',
     muscles:'Biceps — progressive overload for arm strength and shape.',
     svg:`<img src="./images/w_curl.jpg" alt="Bicep Curl">`,
     breathing:'Breathe out curling up, breathe in lowering slowly.',
     cues:['5–6 kg this phase','Strict form — elbows pinned, no swinging','Squeeze hard at the top','3-second lowering builds the muscle','Add weight when all sets feel easy'],
     mistakes:['Swinging the body','Rushing the lowering','Elbows drifting forward']},

    {name:'Superman Hold',sets:'3',reps:'12 · 2 sec hold',
     tempo:'2 up · 2 hold · 2 down',rest:'45 sec',
     muscles:'Lower Back, Glutes — a strong posterior chain protects your spine.',
     svg:`<img src="./images/w_stretch.jpg" alt="Superman">`,
     breathing:'Breathe out lifting, breathe in lowering.',
     cues:['Lie face down, arms overhead','Lift arms, chest and legs together','Hold 2 seconds, squeeze back and glutes','Lower gently','Neck neutral throughout'],
     mistakes:['Jerking up','Lifting only one end','Craning the neck']}
   ]},

  /* ── WEDNESDAY — Chest & Triceps ── */
  {name:'Wednesday', tag:'Chest & Triceps', tagClass:'push',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Chest · Front Shoulders · Triceps · Progressive Overload',
   cardio:'10 min treadmill walk to warm up',
   warmup:[
     {text:'5 min brisk walk', icon:'walk'},
     {text:'Arm circles — 10 each direction', icon:'rotate'},
     {text:'Wall angels — 8 slow slides', icon:'body'},
     {text:'Incline push-ups — 8 to prime the chest', icon:'bolt'},
     {text:'Chest opener stretch — 20 sec', icon:'leaf'},
   ],
   exercises:[
    {name:'Machine Chest Press (Progressive)',sets:'4',reps:'10',
     tempo:'2 press · 1 hold · 2 return',rest:'90 sec',
     muscles:'Chest, Shoulders, Triceps — 4 sets, add weight as you get stronger.',
     svg:`<img src="./images/w_chest_press.jpg" alt="Machine Chest Press">`,
     breathing:'Breathe in before pressing, out as you push, hold 1 second squeezing.',
     cues:['Add 2.5–5 kg from Phase 2','Squeeze the chest hard for 1 second at full extension','Return slowly for 2 seconds','Add 2.5 kg when all 4×10 are easy','Perfect form regardless of weight'],
     mistakes:['Adding weight too fast','Not squeezing','Shrugging','Rushing']},

    {name:'Incline Push-Up (Low Bench)',sets:'3',reps:'10–12',
     tempo:'3 down · 2 up',rest:'60 sec',
     muscles:'Chest, Shoulders, Triceps — a lower surface makes this harder. Working toward floor push-ups.',
     svg:`<img src="./images/w_pushup.jpg" alt="Incline Push-Up">`,
     breathing:'Breathe in lowering, breathe out pushing up.',
     cues:['Hands on a low bench or step (lower than Phase 2)','Body straight from head to heels','Lower chest over 3 seconds','Push up powerfully','Goal: floor push-ups by week 12 if you can'],
     mistakes:['Hips sagging','Rushing the descent','Not challenging yourself']},

    {name:'Overhead Tricep Extension (Dumbbell)',sets:'3',reps:'12',
     tempo:'2 down · 1 pause · 2 up',rest:'60 sec',
     muscles:'Triceps — the long head of the triceps for fuller-looking arms.',
     svg:`<img src="./images/w_curl.jpg" alt="Overhead Tricep Extension">`,
     breathing:'Breathe in as you lower behind your head, breathe out as you extend up.',
     cues:['Hold one dumbbell overhead with both hands','Elbows point forward and stay put','Lower the weight behind your head slowly','Extend back up, squeeze the triceps','Keep the core braced, no back arching'],
     mistakes:['Elbows flaring out','Arching the lower back','Using too heavy a weight']},

    {name:'Plank (Full)',sets:'3',reps:'Hold 40–50 sec',
     tempo:'Hold',rest:'45 sec',
     muscles:'Core — build toward a strong 50-second plank.',
     svg:`<img src="./images/w_plank.jpg" alt="Plank">`,
     breathing:'Breathe steadily throughout.',
     cues:['Full plank on toes and forearms','Straight line, glutes and core tight','Build from 40 toward 50 seconds','If 50 sec is easy, add small hip taps','Quality over duration'],
     mistakes:['Hips sagging','Holding the breath','Rushing to add time']}
   ]},

  /* ── THURSDAY — Shoulders & Core ── */
  {name:'Thursday', tag:'Shoulders & Core', tagClass:'shoulders',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Shoulders · Core · Progressive Overload',
   cardio:'10 min bike to warm up',
   warmup:[
     {text:'5 min bike', icon:'walk'},
     {text:'Shoulder rolls — 10 each direction', icon:'rotate'},
     {text:'Wall angels — 8 slow slides', icon:'body'},
     {text:'Band face pulls — 12', icon:'rotate'},
     {text:'Dead bug — 8 each side', icon:'bolt'},
   ],
   exercises:[
    {name:'Seated Dumbbell Shoulder Press (Heavier)',sets:'4',reps:'10',
     tempo:'2 up · 1 hold · 2 down',rest:'90 sec',
     muscles:'Shoulders, Triceps — build real shoulder strength with progressive overload.',
     svg:`<img src="./images/w_shoulder_press.jpg" alt="Shoulder Press">`,
     breathing:'Breathe in at the bottom, brace, breathe out as you press up.',
     cues:['6–8 kg this phase','Full back support, core braced against the weight','Press up, 1-second hold at the top','Lower slowly for 2 seconds','Add 0.5–1 kg when all sets feel easy'],
     mistakes:['Arching the lower back','Pressing forward','Locking the elbows','Going too heavy for clean reps']},

    {name:'Dumbbell Lateral Raise (Progressive)',sets:'3',reps:'15',
     tempo:'2 up · 2 down',rest:'60 sec',
     muscles:'Side Shoulders — the most visible shoulder shaper. Strict form beats heavy weight.',
     svg:`<img src="./images/w_lateral_raise.jpg" alt="Lateral Raise">`,
     breathing:'Breathe out raising, breathe in lowering.',
     cues:['3–4 kg with strict form','Raise to shoulder height, lead with elbows','Lower slowly for 2 seconds','No swinging — only the arms move','15 strict reps beats heavy sloppy reps'],
     mistakes:['Raising above shoulder height','Shrugging','Swinging the body']},

    {name:'Dead Bug — Advanced',sets:'3',reps:'8 each side',
     tempo:'4 sec lower · pause · 2 sec return',rest:'45 sec',
     muscles:'Deep Core — full range, slow and controlled.',
     svg:`<img src="./images/w_core.jpg" alt="Dead Bug">`,
     breathing:'Exhale throughout the lower, breathe in to reset.',
     cues:['Full arm and leg extension now','Lower back stays pressed to the floor','Move even slower than Phase 2','8 perfect reps per side','Stop the moment the back lifts'],
     mistakes:['Back lifting','Rushing','Holding the breath']},

    {name:'Side Plank (Full)',sets:'3',reps:'Hold 20–30 sec each side',
     tempo:'Hold',rest:'45 sec',
     muscles:'Obliques, Hips — full side plank now, building the time.',
     svg:`<img src="./images/w_plank.jpg" alt="Side Plank">`,
     breathing:'Breathe steadily.',
     cues:['Legs straight, feet stacked','Forearm down, elbow under the shoulder','Hips lifted into a straight line','Hold, keeping hips stacked','Build from 20 toward 30 seconds'],
     mistakes:['Hips sagging','Top hip rotating forward','Holding the breath']}
   ]},

  /* ── FRIDAY — Full Body ── */
  {name:'Friday', tag:'Full Body', tagClass:'push',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Whole Body · Glutes · Core · Progressive Overload',
   cardio:'10 min walk to warm up',
   warmup:[
     {text:'5 min brisk walk', icon:'walk'},
     {text:'World\'s greatest stretch — 4 each side', icon:'leaf'},
     {text:'Hip circles — 10 each direction', icon:'rotate'},
     {text:'Bodyweight squats — 10', icon:'bolt'},
     {text:'Glute bridges — 12', icon:'bolt'},
   ],
   exercises:[
    {name:'Bulgarian Split Squat (Light)',sets:'3',reps:'10 each leg',
     tempo:'3 down · 2 up',rest:'90 sec',
     muscles:'Quads, Glutes, Balance — one of the best single-leg exercises. Rear foot elevated on a bench.',
     svg:`<img src="./images/w_lunges.jpg" alt="Bulgarian Split Squat">`,
     breathing:'Breathe in lowering, breathe out driving up.',
     cues:['Rear foot on a bench behind you, laces down','Front foot far enough that the shin stays vertical','Lower until the front thigh is parallel','Drive up through the front heel','Bodyweight or light dumbbells (4–6 kg)'],
     mistakes:['Standing too close to the bench','The rear leg pushing','Leaning too far forward']},

    {name:'Sumo Squat (Heavier Dumbbell)',sets:'3',reps:'12',
     tempo:'3 down · 2 up',rest:'75 sec',
     muscles:'Inner Thighs, Glutes, Quads — heavier now for real lower-body strength.',
     svg:`<img src="./images/w_sumo_squat.jpg" alt="Sumo Squat">`,
     breathing:'Breathe in going down, breathe out coming up. Brace the core.',
     cues:['One heavier dumbbell (10–14 kg) between the legs','Feet wide, toes out 45°','Sit deep, torso upright','Knees push out over the toes','Drive up, squeeze glutes and inner thighs'],
     mistakes:['Knees caving in','Leaning forward','Bouncing out of the bottom']},

    {name:'Machine Chest Press (Progressive)',sets:'3',reps:'10',
     tempo:'2 press · 1 hold · 2 return',rest:'75 sec',
     muscles:'Chest, Shoulders, Triceps — a second push session in the week.',
     svg:`<img src="./images/w_chest_press.jpg" alt="Machine Chest Press">`,
     breathing:'Breathe in before pressing, out as you push, hold 1 second.',
     cues:['Same weight as Wednesday or slightly less','Squeeze the chest at full extension','Return slowly','Shoulders down and back','Add weight when it feels easy'],
     mistakes:['Seat too high','Shrugging','Snapping the weight back']},

    {name:'Core Superset (Plank + Bicycle)',sets:'3',reps:'40 sec plank + 20 bicycle',
     tempo:'Hold then controlled',rest:'45 sec',
     muscles:'Full Core — two of the best core exercises back to back.',
     svg:`<img src="./images/w_core.jpg" alt="Core Superset">`,
     breathing:'Steady breathing in the plank, exhale on each bicycle twist.',
     cues:['40-second full plank straight into 20 bicycle crunches — no rest between','Plank: squeeze everything, breathe steadily','Bicycle: slow, controlled, exhale each twist','Rest 45 sec, then repeat','Two more rounds'],
     mistakes:['Rushing the bicycles','Plank hips sagging','Holding the breath']}
   ]},

  /* ── SATURDAY — Cardio & Core ── */
  {name:'Saturday', tag:'Cardio & Core', tagClass:'legs',
   phase:'Phase 3 · Weeks 9–12',
   focus:'Cardio · Core · Stretch',
   cardio:'25 min treadmill — 15 min walk (6 km/h) + intervals of light jog (7–8 km/h) — your best cardio yet',
   warmup:[
     {text:'5 min easy walk to start', icon:'walk'},
     {text:'Jumping jacks — 25 reps', icon:'bolt'},
     {text:'Side lunge shifts — 10 each side', icon:'walk'},
     {text:'Ankle circles — 10 each foot', icon:'rotate'},
     {text:'Cat-cow — 6 cycles', icon:'body'},
   ],
   exercises:[
    {name:'Glute Kickback (Cable or Bodyweight)',sets:'3',reps:'15 each leg',
     tempo:'2 back · 1 hold · 2 return',rest:'60 sec',
     muscles:'Glutes — direct glute isolation with constant tension.',
     svg:`<img src="./images/w_glute.jpg" alt="Glute Kickback">`,
     breathing:'Breathe out as you kick back, breathe in as you return.',
     cues:['Face the machine or wall, hands for support','Core braced, back straight — only the leg moves','Kick one leg straight back, squeeze the glute','Hold 1 second at the top','Return with control, do not touch the floor'],
     mistakes:['Swinging with momentum','Arching the lower back','Moving the torso']},

    {name:'Plank (Full)',sets:'3',reps:'Hold 45–60 sec',
     tempo:'Hold',rest:'45 sec',
     muscles:'Core — the peak of your plank progression.',
     svg:`<img src="./images/w_plank.jpg" alt="Plank">`,
     breathing:'Breathe steadily throughout.',
     cues:['Full plank, perfect straight line','Build toward a full 60 seconds','Squeeze glutes and core the whole time','If 60 sec is easy, add slow hip taps','Never sacrifice form for time'],
     mistakes:['Hips sagging','Holding the breath','Rushing to 60 seconds']},

    {name:'Bicycle Crunches',sets:'3',reps:'24 total (12 each side)',
     tempo:'Controlled',rest:'40 sec',
     muscles:'Abs, Obliques — a strong toning finisher.',
     svg:`<img src="./images/w_core.jpg" alt="Bicycle Crunches">`,
     breathing:'Exhale on each twist.',
     cues:['Hands light behind the head','Legs lifted, shins parallel','Elbow to opposite knee, rotate the torso','Slow and controlled','Feel the obliques'],
     mistakes:['Pulling the neck','Going too fast','No rotation']},

    {name:'Full-Body Cool-Down Stretch',sets:'1',reps:'30 sec each: hamstring, hip flexor, chest, quad',
     tempo:'Hold + breathe',rest:'None',
     muscles:'Full Body — end your program week loose and recovered.',
     svg:`<img src="./images/w_stretch.jpg" alt="Cool-Down Stretch">`,
     breathing:'Slow breaths, relax into each stretch.',
     cues:['Hamstring: heel on a step, hinge forward','Hip flexor: kneeling lunge, hips forward','Chest: hands clasped behind, lift gently','Quad: hold one ankle behind you','30 seconds each, breathe deeply'],
     mistakes:['Bouncing','Rushing','Holding the breath']}
   ]},

  /* ── SUNDAY — Rest ── */
  {name:'Sunday', tag:'Rest Day', tagClass:'rest', rest:true,
   restMsg:'The final phase, the final rest day of the week. You have trained 6 days a week and built something real. Be proud.',
   restTips:[
    'Full rest and recovery',
    'Take your progress photos and measurements every 4 weeks',
    'Log your current weights for each exercise — track your progressive overload',
    'Eat well, hit your protein target',
    'Reflect on how far you have come since week 1',
    'Sleep 7–9 hours — you have earned the recovery'
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
