const DAYS = [
  /* ═══════════════════════════════════════════════════════════════
     MONDAY — PUSH A (Heavy Strength)
     Chest (compound-dominant) · Shoulders (press) · Triceps
     Heavy loads, lower reps — build raw pressing power
     ═══════════════════════════════════════════════════════════════ */
  {name:'Monday',tag:'Push A — Heavy',tagClass:'push',
   focus:'Chest (Heavy Compound) · Shoulders (Press Power) · Triceps (Mass)',
   cardio:'Treadmill · 5 min brisk walk 5.5 km/h incline 3% · Just enough to raise body temp',
   exercises:[
    /* — KING OF CHEST EXERCISES — */
    {name:'Barbell Bench Press',sets:'4',reps:'6–8',
     tempo:'3-1-2-0',rest:'2–3 min',
     muscles:'Mid Chest, Front Delts, Triceps — THE #1 chest mass builder',
     svg:`<img src="./images/bench_press.jpg" alt="Barbell Bench Press">`,
     breathing:'Take a DEEP belly breath at the top (fill your stomach, not chest). Brace your core like someone is about to punch you. Hold that breath as you lower the bar (3 sec). Keep holding through the bottom pause (1 sec). Exhale FORCEFULLY through pursed lips as you press past the sticking point. Breathe again at the top before next rep. This is the Valsalva technique — it creates intra-abdominal pressure that stabilizes your spine and lets you push 10-15% more weight safely.',
     cues:['Retract shoulder blades HARD — pinch a pencil between them','Slight arch in upper back — chest puffed high toward ceiling','Elbows at 45° angle to torso — never 90°','Bar touches lower chest (nipple line), not upper','Drive feet into floor — leg drive transfers force through your back into the bar','Unrack with straight arms, bring bar over chest, THEN lower','Explode up but control down — 3 sec eccentric is non-negotiable'],
     mistakes:['Flat back on bench (lose shoulder stability)','Bouncing bar off chest — this is ego lifting, not training','Flaring elbows to 90° — rotator cuff killer','Lifting hips off bench — invalidates the lift','Uneven press — one arm pushing faster than other']},

    {name:'Incline Dumbbell Press',sets:'4',reps:'8–10',
     tempo:'3-1-2-0',rest:'2 min',
     muscles:'Upper Chest (Clavicular Head) — the shelf that makes your chest look 3D',
     svg:`<img src="./images/incline_dumbbell_press.png" alt="Incline Dumbbell Press">`,
     breathing:'Inhale deeply at the top position, filling your belly. Hold breath as you lower the dumbbells for 3 seconds — feel the upper chest stretch wide open. Exhale powerfully as you press up. Reset breath at the top before each rep. On the last 2 reps when fatigue hits, you can exhale halfway through the press — don\'t hold breath to the point of dizziness.',
     cues:['Bench at 30° angle — NOT 45° (that becomes shoulder press)','Start DBs at shoulder level, palms forward, elbows slightly below shoulders','Press up in a slight arc — DBs almost touch at the top','Squeeze upper chest HARD at the top for 1 second','Lower slowly — feel the stretch across your upper pecs','Raise the seat pad slightly to prevent sliding down'],
     mistakes:['Bench too steep (above 45° = shoulder press, upper chest disengages)','Not retracting shoulder blades (shoulders take over)','Dropping the weight too fast — you lose 70% of the growth stimulus','Pressing straight up instead of slight arc — misses the squeeze']},

    /* — SHOULDER PRESSING POWER — */
    {name:'Seated DB Shoulder Press',sets:'4',reps:'8–10',
     tempo:'2-1-2-0',rest:'2 min',
     muscles:'Anterior + Lateral Delts, Triceps — builds boulder shoulder caps',
     svg:`<img src="./images/seated_shoulder_press.png" alt="Seated DB Shoulder Press">`,
     breathing:'Inhale at the bottom position (DBs at ear level). Brace your core — squeeze your abs tight. Exhale forcefully as you press overhead. Inhale as you lower back to ear level. Keep breathing rhythmic — 1 breath per rep. Never hold your breath for multiple reps on overhead pressing — blood pressure spikes dangerously.',
     cues:['Back FLAT against pad — zero arch in lower back','Start DBs at ear level, elbows at 90°, palms forward','Press up — DBs come slightly together at top (not touching)','Don\'t lock elbows completely — keep slight bend at top','Lower until upper arms are parallel to floor — full range','Drive through the meat of your palm, not fingertips'],
     mistakes:['Arching lower back off pad (spinal compression)','Pressing dumbbells too far forward (front delt dominant)','Not going low enough — half reps = half results','Shrugging shoulders up during the press']},

    /* — THE WIDTH BUILDER — */
    {name:'Dumbbell Lateral Raises',sets:'4',reps:'12–15',
     tempo:'2-0-1-2',rest:'60 sec',
     muscles:'Lateral (Side) Delts — THIS is what makes shoulders look WIDE',
     svg:`<img src="./images/lateral_raises.png" alt="Dumbbell Lateral Raises">`,
     breathing:'Exhale as you raise the dumbbells to shoulder height — slow controlled exhale through the mouth. Inhale slowly as you lower them back down over 2 seconds. Keep breathing steady — this is a high-rep isolation move, never hold your breath. On the 2-second hold at the top, keep breathing shallowly — don\'t hold.',
     cues:['Slight forward lean from hips — 10° tilt takes tension off traps','Raise to EXACTLY shoulder height — not an inch above','Lead with your ELBOWS, not your hands — imagine pouring water from a pitcher','Pinky finger should be slightly higher than thumb at the top','HOLD at the top for 2 full seconds — this is where the burn hits','3 sec lower — if you can\'t control the descent, weight is too heavy','You should feel this ONLY in the side of your shoulder, not your traps'],
     mistakes:['Swinging body for momentum (this is the #1 lateral raise crime)','Raising above shoulder height (traps steal the work)','Using too heavy weight — 5-8 kg is plenty for most people','Shrugging shoulders up as you raise — keep them DOWN','Straight arms (slight bend in elbows protects the joint)']},

    /* — CHEST INNER DEFINITION — */
    {name:'Cable Crossover (High to Low)',sets:'3',reps:'12–15',
     tempo:'2-1-2-1',rest:'60 sec',
     muscles:'Inner + Lower Chest — carves the chest separation line you see on aesthetic physiques',
     svg:`<img src="./images/cable_crossover.jpg" alt="Cable Crossover">`,
     breathing:'Inhale as you open your arms wide — feel the deep chest stretch. Exhale steadily as you bring arms together, crossing at the midline. Hold the squeeze for 1 second while breathing shallowly. Inhale on the return. The key is to exhale on the squeeze — this helps you contract harder.',
     cues:['Set cables at the highest position — step forward one foot','Slight forward lean — chest leads, not shoulders','Bring hands together at hip level (not chest level) — this targets lower/inner chest','CROSS your hands past each other at the bottom — extend the range of motion','Hold the crossed position for 1 full second — squeeze your inner chest hard','Arms have a permanent slight bend — arc motion, not pressing motion','Imagine you\'re hugging a giant tree — arc your arms around'],
     mistakes:['Standing too upright (becomes a front delt exercise)','Straight arms (elbow injury risk + less chest activation)','Not crossing hands — you miss the peak inner chest contraction','Using too much weight — this is a FEEL exercise, not a strength exercise']},

    /* — TRICEP COMPOUND — */
    {name:'Close-Grip Bench Press',sets:'3',reps:'8–10',
     tempo:'3-0-2-0',rest:'90 sec',
     muscles:'Triceps (all 3 heads) + Inner Chest — the best compound tricep mass builder',
     svg:`<img src="./images/close_grip_bench.jpg" alt="Close-Grip Bench Press">`,
     breathing:'Same as bench press — deep belly breath at top, hold through the eccentric (3 sec), exhale through the sticking point on the press. This is a heavy compound — use Valsalva breathing every rep.',
     cues:['Hands shoulder-width apart (NOT super close — that strains wrists)','Elbows tucked at 30° to body — almost brushing your lats','Lower bar to lower chest / upper stomach area','Press up — focus on squeezing triceps, not chest','Full lockout at the top — this is where triceps peak contract','Keep shoulder blades retracted just like regular bench'],
     mistakes:['Grip too narrow (wrist pain + less force production)','Flaring elbows out (becomes regular bench press)','Bouncing off chest — control the eccentric','Not locking out fully (missing the tricep squeeze)']},

    /* — TRICEP LONG HEAD — */
    {name:'Overhead Tricep Extension (DB)',sets:'3',reps:'10–12',
     tempo:'3-1-2-0',rest:'60 sec',
     muscles:'Triceps Long Head — the BIGGEST head, makes up 2/3 of your arm size when viewed from behind',
     svg:`<img src="./images/overhead_tricep_extension.jpg" alt="Overhead Tricep Extension">`,
     breathing:'Inhale as you lower the dumbbell behind your head (3 sec). Feel the deep stretch in your triceps — this stretch is where growth happens. Exhale as you extend up. Pause briefly at the top and breathe. The overhead position pre-stretches the long head — this is why this exercise builds triceps faster than pushdowns.',
     cues:['Both hands grip one dumbbell — diamond shape around the handle','Elbows point FORWARD and STAY forward — this is the key cue','Lower the DB behind your head until you feel a deep tricep stretch','Extend ALL the way up — full lockout, squeeze triceps hard','Keep your core braced — no lower back arching','Head stays neutral — don\'t push head forward'],
     mistakes:['Elbows flaring to the sides (shifts to shoulders)','Not going deep enough — you NEED the stretch for long head growth','Lower back arching (sit on a bench with back support to fix this)','Using momentum to swing the weight up']},

    /* — TRICEP LATERAL HEAD — */
    {name:'Tricep Rope Pushdown',sets:'3',reps:'12–15',
     tempo:'2-0-1-1',rest:'60 sec',
     muscles:'Lateral + Medial Tricep Heads — builds the horseshoe shape visible from the side',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown">`,
     breathing:'Exhale as you push down and spread the rope. Inhale as the rope comes back up. Keep it rhythmic — one breath per rep. On the 1-second hold at the bottom, keep breathing, don\'t hold.',
     cues:['Lean forward 15° from hips — this keeps tension on triceps throughout','Elbows LOCKED to your sides — imagine gluing them there','Push down AND spread the rope ends APART at the bottom — this is the key','Full lockout — straighten arms completely, squeeze for 1 second','Control the cable back up — 2 second eccentric, fight the weight','You should feel a deep burn in the back of your arm near the elbow'],
     mistakes:['Elbows drifting forward or flaring out (instantly reduces tricep activation by 40%)','Using body weight to push down — this is not a lat exercise','Not spreading the rope at the bottom — you miss the lateral head squeeze','Half reps — if you can\'t lock out, reduce the weight']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     TUESDAY — PULL A (Heavy Strength)
     Back (heavy compounds + rows) · Biceps (mass) · Rear Delts
     Heavy pulls, strength-focused — build a thick, wide back
     ═══════════════════════════════════════════════════════════════ */
  {name:'Tuesday',tag:'Pull A — Heavy',tagClass:'pull',
   focus:'Lats (Width) · Mid Back (Thickness) · Biceps (Mass) · Rear Delts',
   cardio:'Rowing machine · 5 min light · Perfect warm-up — activates lats, rhomboids, biceps',
   exercises:[
    /* — THE KING OF ALL EXERCISES — */
    {name:'Conventional Deadlift',sets:'4',reps:'5',
     tempo:'3-0-2-1',rest:'3–4 min',
     muscles:'Entire Posterior Chain — Erectors, Lats, Traps, Glutes, Hamstrings, Core, Grip. The single most effective exercise for total body strength.',
     svg:`<img src="./images/stiff_leg_deadlift.jpg" alt="Conventional Deadlift">`,
     breathing:'Stand over the bar. Take the BIGGEST belly breath of your life — fill your stomach like a balloon, not your chest. Brace your entire core — abs, obliques, lower back, everything. Hold that breath through the ENTIRE rep from floor to lockout. Exhale only at the top once you\'re locked out. Take a new breath before each rep. Between reps, reset — don\'t bounce and go. This Valsalva breathing is CRITICAL for spine safety on deadlifts.',
     cues:['Bar over mid-foot — shins 1 inch from bar','Grip just outside knees — overhand or mixed grip','Hinge at hips — push butt BACK, chest UP','Shoulders slightly in front of bar at the start','Pull the slack out of the bar before you lift — you should hear the plates click','Drive through your WHOLE foot — push the floor away from you','Bar stays touching your legs the ENTIRE pull — shins, knees, thighs','Lock out at top — hips through, shoulders back, stand tall','Lower by hinging hips back FIRST, then bend knees once bar passes them'],
     mistakes:['Rounding the lower back — THE most dangerous mistake, causes disc herniation','Jerking the bar off the floor — pull the slack first, then drive smoothly','Hips shooting up first while back stays flat (turns into stiff-leg DL)','Bar drifting away from body — must maintain contact','Looking up (hyperextending neck) — keep neck neutral, look 6 feet ahead','Bouncing reps — reset position between each rep']},

    /* — BEST LAT WIDTH EXERCISE — */
    {name:'Pull-Ups (Wide Grip)',sets:'4',reps:'6–10',
     tempo:'3-0-2-1',rest:'2–3 min',
     muscles:'Lats (width), Teres Major, Rhomboids, Biceps, Core — the exercise that builds the V-taper',
     svg:`<img src="./images/pullups.jpg" alt="Pull-Ups">`,
     breathing:'Inhale at the bottom (dead hang) — expand your rib cage. Pull up while exhaling through pursed lips. Hold briefly at the top (chin over bar) breathing shallowly. Inhale as you lower yourself for 3 seconds. Full dead hang breath at the bottom before next rep. If you can\'t breathe properly, you\'re doing too many reps — stop and rest.',
     cues:['Grip 1.5× shoulder width — overhand, thumbs wrapped','Start from FULL dead hang — arms completely straight, shoulders by ears','Initiate by retracting shoulder blades — pull shoulders DOWN and BACK first','Drive elbows DOWN toward your hip pockets — think "elbows to hips"','Pull until your CHEST reaches the bar — not just chin','Squeeze lats hard at the top — hold 1 second','Lower yourself for a full 3 seconds — this is where lats grow','If you can\'t do 6 reps, use an assisted pull-up machine or band'],
     mistakes:['Kipping, swinging, or using momentum (CrossFit ≠ hypertrophy)','Only pulling chin over bar — chest must reach bar for full lat activation','Not going to full dead hang at bottom — partial reps = partial results','Looking up (strains neck) — keep eyes forward','Grip too narrow (becomes chin-up, shifts to biceps)']},

    /* — MID-BACK THICKNESS — */
    {name:'Bent Over Dumbbell Row (Single Arm)',sets:'4',reps:'8–10 each',
     tempo:'2-1-2-0',rest:'90 sec (per side)',
     muscles:'Lats, Rhomboids, Rear Delts, Traps — builds the 3D back thickness visible from the side',
     svg:`<img src="./images/one_arm_row.png" alt="Single Arm Dumbbell Row">`,
     breathing:'Inhale as you lower the dumbbell for 2 seconds — let your lat stretch fully. Exhale as you row the weight up — drive your elbow toward your hip. Hold at the top for 1 second breathing shallowly as you squeeze. Inhale on the descent. Keep your core braced throughout — don\'t let your torso rotate.',
     cues:['One knee and hand on bench, other foot on floor wide for stability','Back FLAT and parallel to floor — check in mirror','Pull the dumbbell toward your HIP, not your chest — elbow drives back','Retract your shoulder blade at the top — imagine pinching a tennis ball','Full stretch at the bottom — let your arm hang, feel the lat lengthen','Keep your torso absolutely still — zero rotation','This is about SQUEEZING your back, not lifting heavy with your arm'],
     mistakes:['Rotating torso to lift heavier (defeats the purpose)','Pulling toward shoulder instead of hip (traps take over)','Rounding the back (dangerous under load)','Using bicep to curl the weight instead of driving with the elbow','Rushing reps — you can\'t feel your back if you go fast']},

    /* — SEATED ROW FOR THICKNESS — */
    {name:'Seated Cable Row',sets:'4',reps:'10–12',
     tempo:'2-1-2-0',rest:'90 sec',
     muscles:'Mid Back, Rhomboids, Lower Traps — the exercise that makes your back look thick from the side view',
     svg:`<img src="./images/seated_cable_row.png" alt="Seated Cable Row">`,
     breathing:'Lean forward slightly — inhale as you reach forward for the stretch. Exhale as you pull the handle to your belly button. Hold at the peak contraction — keep breathing shallowly during the 1-second squeeze. Inhale as you slowly release forward. Never hold your breath on cable rows.',
     cues:['Sit tall, chest proud — imagine a string pulling your sternum to the ceiling','Lean forward 10° at the start to pre-stretch your lats','Pull the handle to your belly button — NOT your chest','Drive your elbows PAST your torso — this is the key to feeling your back','Squeeze your shoulder blades together like you\'re cracking a walnut between them','Hold the squeeze for 1 full second — feel rhomboids burning','Slowly release forward for 2 seconds — control the stretch','Keep your torso upright during the pull — ZERO rocking'],
     mistakes:['Rocking your torso back and forth (this is momentum, not muscle)','Pulling too high (to chest) — this shifts work to upper traps','Slouching forward on the return (lose back tension)','Pulling with biceps — think ELBOWS, not hands','Shrugging shoulders up during the pull']},

    /* — SHOULDER HEALTH + REAR DELT — */
    {name:'Cable Face Pulls',sets:'3',reps:'15–20',
     tempo:'2-2-1-0',rest:'60 sec',
     muscles:'Rear Delts, External Rotators, Mid Traps — THE most important exercise for shoulder health and posture',
     svg:`<img src="./images/cable_face_pulls.png" alt="Cable Face Pulls">`,
     breathing:'Exhale as you pull the rope to your forehead. Hold the squeezed position for 2 seconds — keep breathing steadily. Inhale as you return. This is a high-rep, slow movement — keep breathing rhythmic and steady throughout. Never hold your breath.',
     cues:['Cable set at FACE height (not chest height)','Rope attachment — grab the ends with thumbs pointing back','Pull toward your FOREHEAD — elbows go out and back','At the peak: your hands should be beside your ears, elbows behind your shoulders','Externally rotate — finish position looks like a double bicep pose','Separate the rope ends apart at the peak — feel rear delts light up','Light weight — 15-20 reps — this is about health and posture, not ego','Hold the squeeze for 2 full seconds — your rear delts should burn'],
     mistakes:['Pulling to your chin (traps take over, rear delts disengage)','Elbows dropping below shoulders (becomes a row, not a face pull)','Too heavy weight — form breaks down, no mind-muscle connection','Not externally rotating at the top — you miss the rotator cuff benefit','Standing too close to the cable — step back for full range']},

    /* — BICEP MASS — */
    {name:'Barbell Curl',sets:'4',reps:'8–10',
     tempo:'2-1-3-0',rest:'90 sec',
     muscles:'Biceps Brachii (both heads) — THE mass builder for biceps. Nothing builds arm size faster.',
     svg:`<img src="./images/barbell_curl.jpg" alt="Barbell Curl">`,
     breathing:'Exhale as you curl the bar up (2 sec). Hold at the top for 1 second — squeeze so hard your biceps cramp. Inhale as you lower for 3 FULL seconds — this slow negative is where the magic happens. The eccentric (lowering) phase causes more muscle damage than the concentric — this is what makes you sore and grow.',
     cues:['Shoulder-width grip (or slightly wider for short head emphasis)','Elbows GLUED to your sides — imagine nailing them to your ribs','Curl the bar up — but think about SQUEEZING your biceps, not lifting the bar','At the top: squeeze your biceps like you\'re flexing for a photo — HARD','Lower for 3 FULL seconds — fight gravity every inch of the way down','Full extension at the bottom — straighten arms completely before next rep','If the weight makes you swing your body, it\'s too heavy — ego check yourself'],
     mistakes:['Body swinging for momentum — #1 bicep curl crime','Elbows drifting forward (front delt takes over)','Not going to full extension at bottom (losing the stretch)','Going too fast — if the set takes less than 40 seconds, slow down','Using a grip that\'s too narrow (wrist strain and less activation)']},

    /* — ARM THICKNESS — */
    {name:'Hammer Curls',sets:'3',reps:'10–12',
     tempo:'2-0-3-0',rest:'60 sec',
     muscles:'Brachialis + Brachioradialis — builds arm THICKNESS and the forearm-to-bicep tie-in. This is the exercise that makes arms look big from the front AND side.',
     svg:`<img src="./images/hammer_curls.png" alt="Hammer Curls">`,
     breathing:'Exhale as you curl up. Inhale as you lower for 3 seconds. Keep breathing steady — one breath per rep. The 3-second negative is crucial — it\'s the eccentric that builds the brachialis which pushes your bicep UP from underneath, making it look bigger.',
     cues:['Neutral grip — palms facing each other throughout (no rotation)','Elbows fixed to sides — zero movement','Curl up — the dumbbell head should reach shoulder level','You should feel this in the OUTSIDE of your upper arm and top of forearm','Lower for 3 full seconds — control the descent completely','Can do alternating or both arms together — alternating gives more focus','This exercise builds the brachioradialis — the forearm "vein muscle"'],
     mistakes:['Rotating wrists (turns into a regular curl, defeats the purpose)','Swinging the upper arm (using front delt instead of brachialis)','Going too fast — 3 second negative is mandatory for brachialis growth','Too heavy — if you need to swing, drop the weight 20%']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     WEDNESDAY — LEGS A (Heavy Strength)
     Squat + RDL dominant · Heavy compounds · Quads, Hams, Glutes, Calves
     The day that separates serious lifters from pretenders
     ═══════════════════════════════════════════════════════════════ */
  {name:'Wednesday',tag:'Legs A — Heavy',tagClass:'legs',
   focus:'Quads (Squat Power) · Hamstrings (RDL Stretch) · Glutes · Calves · Core',
   cardio:'5 min walk ONLY · 3% incline · Save everything for squats',
   exercises:[
    /* — KING OF LEG EXERCISES — */
    {name:'Barbell Back Squat',sets:'4',reps:'6–8',
     tempo:'3-1-2-0',rest:'3 min',
     muscles:'Quads, Glutes, Hamstrings, Core, Erectors — the single most effective lower body exercise. Period.',
     svg:`<img src="./images/barbell_squat.jpg" alt="Barbell Back Squat">`,
     breathing:'At the top: take the BIGGEST breath of your life into your belly (diaphragmatic breathing). Brace your entire core — abs, obliques, pelvic floor — as if someone is about to punch your stomach. Hold that breath as you descend for 3 seconds. Hold through the pause at the bottom (1 sec). Keep holding as you drive up. Exhale ONLY once you pass the sticking point (about halfway up). Take a completely new breath at the top before each rep. This Valsalva technique is ESSENTIAL for spine safety under heavy squats — it creates a pressurized cylinder around your spine.',
     cues:['Bar sits on your UPPER TRAPS (not neck) — pull it into your back','Feet shoulder-width, toes turned out 15-30°','Unrack: step back 2 steps, set feet, take your breath, THEN squat','Break at hips AND knees simultaneously','Drive your knees OUT — they should track over your toes','Go BELOW parallel — hip crease drops below knee line (ATG if mobility allows)','Drive through your WHOLE foot — not toes, not heels — whole foot','Chest stays UP — imagine a spotlight on your chest, keep it shining forward','At the bottom: DON\'T relax — stay tight, pause 1 second, then explode up'],
     mistakes:['Knees caving inward (valgus collapse — serious injury risk)','Heels rising off the floor (put 5 lb plates under heels if needed)','Forward lean / "good morning" squat (weak quads, lower back takes over)','Not hitting depth — parallel is minimum, below parallel is the goal','Relaxing at the bottom ("butt wink") — stay braced through the hole','Looking up or down — eyes straight ahead or slightly up']},

    /* — BEST HAMSTRING EXERCISE — */
    {name:'Romanian Deadlift (Barbell)',sets:'4',reps:'8–10',
     tempo:'3-1-2-0',rest:'2–3 min',
     muscles:'Hamstrings, Glutes, Erectors — the #1 exercise for hamstring growth. The stretch under load is unmatched by any machine.',
     svg:`<img src="./images/romanian_deadlift.png" alt="Romanian Deadlift">`,
     breathing:'Take a belly breath at the top (standing position). Hold it as you hinge forward for 3 seconds — feel the hamstrings stretch. Hold at the bottom for 1 second (maximum stretch position). Exhale as you drive your hips forward to stand up. Breathe at the top, then take a fresh breath before next rep. The held breath protects your lower back during the hip hinge.',
     cues:['Start standing with bar against thighs — overhand grip just outside hips','HINGE at the hips — push your butt STRAIGHT BACK as if closing a car door with it','Knees have a SLIGHT soft bend — but they DON\'T bend more as you descend','Bar stays TOUCHING your legs the entire time — slides down your thighs','Back stays FLAT — imagine a broomstick from your head to tailbone','Lower until you feel a DEEP hamstring stretch — for most people this is mid-shin','Stop when your back starts to round — that\'s your range of motion for today','Drive hips FORWARD to come back up — squeeze glutes hard at the top'],
     mistakes:['Rounding the lower back (dangerous — this is the #1 RDL mistake)','Bending knees too much (turns it into a conventional deadlift — different exercise)','Not keeping bar against legs (lower back takes too much load)','Going too deep past your flexibility (chasing range of motion you don\'t have yet)','Not feeling hamstrings — if you feel only lower back, drop the weight 30% and focus on pushing hips back']},

    /* — QUAD MASS BUILDER — */
    {name:'Leg Press',sets:'4',reps:'10–12',
     tempo:'3-0-2-0',rest:'2 min',
     muscles:'Quads (primary), Glutes, Hamstrings — safe way to overload quads with heavy weight after squats',
     svg:`<img src="./images/leg_press.png" alt="Leg Press">`,
     breathing:'Inhale deeply as the sled comes down (3 sec) — feel the quads stretch. Exhale forcefully as you press the sled up. Don\'t hold breath at the bottom — exhale on the drive. Breathe at the top, then inhale as you lower again. Keep breathing — people pass out on leg press from breath-holding.',
     cues:['Feet shoulder-width, placed in the MIDDLE of the platform','Lower the sled until your knees reach 90° — no more, no less','NEVER lock your knees at the top — keep a slight bend always','Push through your WHOLE foot — drive through heels and balls of feet','Back stays FLAT against pad — if your butt lifts, you\'re going too deep','Control the descent — 3 seconds down, don\'t let the sled fall','For more quad focus: place feet LOWER on platform','For more hamstring/glute: place feet HIGHER on platform'],
     mistakes:['Locking knees at the top — catastrophic knee injury risk (knees can hyperextend)','Going too deep — lower back rounds, hips tuck under (butt wink)','Feet too high on platform (becomes hamstring exercise, not quad)','Turning it into a bouncing exercise — control every inch','One side pushing harder than the other — even force distribution']},

    /* — UNILATERAL QUAD BUILDER — */
    {name:'Bulgarian Split Squat',sets:'3',reps:'10 each leg',
     tempo:'2-1-2-0',rest:'90 sec',
     muscles:'Quads, Glutes, Core, Balance — fixes left/right imbalances. If one leg is weaker, this exercise exposes and fixes it.',
     svg:`<img src="./images/db_lunges.jpg" alt="Bulgarian Split Squat">`,
     breathing:'Inhale as you lower for 2 seconds — feel the quad and hip flexor stretch. Pause 1 second at the bottom. Exhale as you drive up through your front heel. Take a breath at the top before next rep. This is a controlled movement — breathe steadily, don\'t rush.',
     cues:['Rear foot on bench behind you — laces down, not toes','Front foot about 2 feet from the bench — experiment to find your sweet spot','Lower until front thigh is at least parallel to floor','Front shin stays VERTICAL — knee tracks over middle toe','Drive up through the FRONT HEEL only — back leg is just for balance','Hold DBs at your sides — keep torso upright, chest proud','You should feel this mainly in your FRONT quad and glute'],
     mistakes:['Standing too close to bench (knee goes way past toes)','Leaning forward (quad disengages, lower back loads)','Back foot taking too much load — front leg should do 90% of work','Not going deep enough — parallel is the minimum depth','Rushing through reps — this is a balance exercise, control matters']},

    /* — HAMSTRING ISOLATION — */
    {name:'Lying Leg Curl',sets:'4',reps:'10–12',
     tempo:'2-1-3-0',rest:'60 sec',
     muscles:'Hamstrings (Biceps Femoris, Semimembranosus) — isolates the hamstring with zero lower back involvement',
     svg:`<img src="./images/lying_leg_curls.jpg" alt="Lying Leg Curl">`,
     breathing:'Exhale as you curl your heels toward your glutes. Hold the contraction for 1 second while breathing steadily. Inhale as you lower for a FULL 3 seconds — fight the weight all the way down. The 3-second negative is critical — this is where hamstrings respond most.',
     cues:['Lie face down — hips pressed FLAT against the pad','Ankle pad sits on your lower calves (above ankle, below mid-calf)','Curl your heels ALL the way toward your glutes — maximum contraction','Squeeze your hamstrings HARD at the top — hold 1 second','Lower for 3 full seconds — resist gravity the entire way','Point your toes slightly to increase hamstring activation','You should feel a deep burn in the back of your thighs — not your lower back'],
     mistakes:['Hips rising off the pad — this means weight is too heavy','Not going to full contraction at the top (stop when heels touch glutes)','Dropping the weight fast on the way down — you lose 70% of the benefit','Using momentum to swing legs up — reduce weight if needed']},

    /* — QUAD ISOLATION FINISHER — */
    {name:'Leg Extensions',sets:'3',reps:'12–15',
     tempo:'2-1-2-1',rest:'60 sec',
     muscles:'Quadriceps (VMO teardrop + Rectus Femoris) — the exercise that carves quad definition and builds the teardrop above your knee',
     svg:`<img src="./images/leg_extensions.jpg" alt="Leg Extensions">`,
     breathing:'Exhale as you extend your legs to full lockout. Hold at the top for 1 second — squeeze your quads like you\'re flexing them. Inhale as you lower for 2 seconds. Keep breathing steadily — one breath per rep. On the last 3-4 reps when it burns, DON\'T hold your breath — keep exhaling on exertion.',
     cues:['Adjust pad to sit on your lower shin (just above ankles)','Align your knee with the machine\'s pivot point — this is crucial for joint safety','Extend to FULL lockout — straighten your legs completely','Squeeze your quads so hard at the top that you can see the muscle contract','Hold peak contraction for 1 full second — this is where the teardrop carves','Lower slowly for 2 seconds — constant tension, no dropping','Last set: do a drop set — immediately reduce weight 30% and rep to failure'],
     mistakes:['Not achieving full extension — the last 10% of range is where VMO activates most','Going too heavy — this is an isolation exercise, 12-15 reps with a squeeze beats heavy weight','Swinging with momentum — if you need to jerk, it\'s too heavy','Not aligning knee with pivot point — creates shearing force on the knee']},

    /* — CALVES — */
    {name:'Standing Calf Raises',sets:'4',reps:'15–20',
     tempo:'2-2-1-2',rest:'45 sec',
     muscles:'Gastrocnemius (upper calf) — straight legs target the gastrocnemius which gives calves their diamond shape',
     svg:`<img src="./images/standing_calf_raises.jpg" alt="Standing Calf Raises">`,
     breathing:'Exhale as you rise up on your toes. Hold at the top for 2 seconds — breathe shallowly during the hold. Inhale as you lower your heels BELOW the step for 2 seconds. Hold the stretch at the bottom for 2 seconds. This exercise is ALL about time under tension — slow, controlled, full range.',
     cues:['Stand on the edge of a step — balls of feet on the step, heels hanging off','Lower your heels BELOW the step level — feel a deep calf stretch (2 sec)','Rise up on your toes as HIGH as possible — onto the balls of your feet','Squeeze at the very top for 2 full seconds — calves should cramp','Lower slowly for 2 seconds — don\'t just drop','Calves are stubborn muscles — they NEED 15-20 reps and long time under tension','Keep legs straight — this targets the gastrocnemius (upper calf)'],
     mistakes:['Partial range of motion — calves need FULL stretch to FULL contraction','Bouncing at the bottom — this is the #1 reason calves don\'t grow','Going too fast — each rep should take 7-8 seconds total','Too light weight — calves need HEAVY loads with high reps']},

    /* — CORE FINISHER — */
    {name:'Hanging Leg Raises',sets:'3',reps:'12–15',
     tempo:'2-1-2-0',rest:'60 sec',
     muscles:'Lower Abs, Hip Flexors, Deep Core — the hardest and most effective ab exercise. Targets lower abs which crunches can\'t reach.',
     svg:`<img src="./images/hanging_leg_raises.jpg" alt="Hanging Leg Raises">`,
     breathing:'Exhale as you raise your legs — blow all the air out, this helps your abs contract harder. Hold at the top for 1 second — core fully engaged, breathing shallowly. Inhale as you lower for 2 seconds. At the bottom, breathe normally, then exhale on the next raise. The exhale-on-exertion rule is CRITICAL for abs — you can\'t fully contract your abs with a full belly of air.',
     cues:['Hang from pull-up bar — full dead hang, shoulders by ears','Engage your core BEFORE you lift — brace first, then move','Raise STRAIGHT legs to 90° (or higher if you can)','Curl your pelvis UP at the top — this is what activates lower abs vs hip flexors','Control the descent — 2 seconds down, no swinging','Pause at the bottom — completely still — then raise again','If straight legs are too hard, do bent knee raises first and progress'],
     mistakes:['Using momentum to swing legs (zero ab activation)','Not curling the pelvis — just raising legs uses hip flexors, not abs','Bending knees too much (easier but less effective)','Swinging after each rep — you must come to a dead stop','Looking up (strains neck) — eyes forward']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     THURSDAY — PUSH B (Hypertrophy / Pump)
     Higher reps, more isolation, maximum pump
     Mind-muscle connection > weight
     ═══════════════════════════════════════════════════════════════ */
  {name:'Thursday',tag:'Push B — Pump',tagClass:'push',
   focus:'Chest (Pump & Squeeze) · Shoulders (3D Isolation) · Triceps (Burn)',
   cardio:'Cycling · 5 min · Light resistance · Active recovery from leg day',
   exercises:[
    /* — UPPER CHEST FOCUS (START WITH INCLINE ON PUSH B) — */
    {name:'Incline Dumbbell Press',sets:'4',reps:'10–12',
     tempo:'3-1-2-1',rest:'90 sec',
     muscles:'Upper Chest (Clavicular Head) — starting with incline ensures your upper chest gets priority while you\'re fresh',
     svg:`<img src="./images/incline_dumbbell_press.png" alt="Incline Dumbbell Press">`,
     breathing:'Inhale deeply as you lower the dumbbells for 3 seconds — feel the upper chest stretch wide. Hold the stretch 1 second. Exhale as you press up for 2 seconds. Squeeze at the top for 1 second, breathing shallowly. This is lighter than Push A — focus on FEELING the muscle, not moving weight.',
     cues:['Bench at 30° — not a degree steeper','Lower weight than Monday — this is about FEELING, not ego','Lower slowly — 3 full seconds — feel the stretch across your upper chest','Pause at the bottom 1 second — feel the pecs loaded','Press up in a slight arc — DBs nearly touch at top','SQUEEZE your upper chest for 1 second at the top — flex hard','You should feel a deep pump building after the 2nd set'],
     mistakes:['Using Monday\'s heavy weight — this is pump day, drop 20-30%','Not feeling the chest — if you feel shoulders, lower the bench angle','Rushing reps — each rep should take ~7 seconds']},

    /* — MID CHEST SQUEEZE — */
    {name:'Flat Dumbbell Press',sets:'3',reps:'10–12',
     tempo:'3-1-2-0',rest:'90 sec',
     muscles:'Mid Chest — the bread and butter chest exercise with dumbbells. Greater range of motion than barbell.',
     svg:`<img src="./images/flat_dumbbell_press.png" alt="Flat Dumbbell Press">`,
     breathing:'Inhale on the descent (3 sec), hold at the bottom stretch (1 sec), exhale on the press (2 sec). Moderate weight — focus entirely on the chest contraction, not how much you\'re pressing.',
     cues:['Shoulder blades retracted — pinch them together hard','Lower DBs deeper than you would a barbell — DBs go BELOW chest level','Feel the deep pec stretch at the bottom — this is the advantage of DBs','Press up — bring DBs together (almost touching) at the top','Elbows at 45° — never flare to 90°','Every rep should be identical — controlled, deliberate, with intention'],
     mistakes:['Going too heavy on pump day — leave ego at the door','Flat back on bench (retract those shoulder blades!)','Not lowering deep enough — the extra range of motion IS the benefit of DBs']},

    /* — THE BEST CHEST ISOLATION — */
    {name:'Pec Deck Machine',sets:'3',reps:'12–15',
     tempo:'2-2-2-1',rest:'60 sec',
     muscles:'Inner Chest — constant machine tension means your chest NEVER rests during the set. This is the exercise that gives you chest separation.',
     svg:`<img src="./images/pec_deck.jpg" alt="Pec Deck Machine">`,
     breathing:'Exhale as you bring the pads together (2 sec). Hold the squeeze for 2 seconds — breathe shallowly, don\'t release tension. Inhale as you open for 2 seconds. Hold the stretch 1 second. Each rep takes 7 seconds — you should feel your chest filling with blood.',
     cues:['Elbows at 90° resting on pads — NOT hands gripping handles','Back flat against pad — glue yourself to it','Squeeze pads together — focus on SQUEEZING your inner chest, not moving the pads','Hold the squeeze for 2 FULL seconds — imagine crushing something between your pecs','Open slowly — feel the stretch across your chest for 2 seconds','This exercise is about the SQUEEZE, not the weight — go moderate','By set 3, your chest should be so pumped you can barely flex it'],
     mistakes:['Going too heavy (shoulder takes over, you lose the chest connection)','Not holding the squeeze — the 2-second hold is everything','Leaning forward off the pad — stay pinned back','Using hands instead of elbows on the pads — elbows keep pecs engaged']},

    /* — SHOULDER BUILDER — */
    {name:'Arnold Press',sets:'3',reps:'10–12',
     tempo:'2-1-2-0',rest:'90 sec',
     muscles:'All 3 Deltoid Heads — the rotation hits front, side, AND rear delts in one exercise. Arnold\'s favorite for a reason.',
     svg:`<img src="./images/arnold_press.jpg" alt="Arnold Press">`,
     breathing:'Inhale at the bottom (palms facing you). Exhale as you rotate and press up (2 sec). Inhale as you lower and rotate back (2 sec). The breathing follows the rotation — natural and rhythmic. Brace your core throughout — no arching.',
     cues:['Start: DBs at chest height, palms facing YOU','Rotate palms outward as you press overhead — smooth continuous rotation','At the top: palms face FORWARD, arms extended (slight bend in elbows)','Reverse the rotation on the way down — palms end facing you again','The rotation should be SMOOTH and CONTINUOUS — not jerky','Core braced the entire time — zero lower back arch','Feel all three heads of the shoulder working — front delt at bottom, side delt midway, all delts at top'],
     mistakes:['Going too fast — the rotation IS the exercise, don\'t rush it','Incomplete rotation — palms must start facing you and end facing away','Lower back arching — sit on a bench with back support','Pressing with momentum instead of controlled rotation']},

    /* — SIDE DELT CONSTANT TENSION — */
    {name:'Cable Lateral Raise',sets:'4',reps:'15–20',
     tempo:'2-1-1-1',rest:'45 sec',
     muscles:'Lateral (Side) Delts — cable provides constant tension that dumbbells can\'t. Your delts never rest during the set.',
     svg:`<img src="./images/cable_lateral_raise.jpg" alt="Cable Lateral Raise">`,
     breathing:'Exhale as you raise (1 sec). Hold at shoulder height for 1 second. Inhale as you lower (2 sec). Keep breathing steadily — high rep, short rest. You should be breathing heavily by the end of each set.',
     cues:['Cable at lowest position — stand sideways to machine','Reach across your body to grab the cable with your far hand','Raise arm to EXACTLY shoulder height — lead with elbow','Hold at the top 1 second — you\'ll feel the side delt burning like fire','Lower slowly for 2 seconds — the cable tries to pull your arm down, FIGHT IT','Do all reps on one side, then switch immediately — no rest between sides','15-20 reps — by rep 12, it should be burning. Reps 13-20 are where growth happens'],
     mistakes:['Raising above shoulder height — traps steal the work','Using body momentum — stand still, ONLY your arm moves','Going too heavy — use light weight and FEEL the side delt','Not going all the way down — full range of motion, every rep']},

    /* — UPPER CHEST ISOLATION — */
    {name:'Incline Dumbbell Flyes',sets:'3',reps:'12–15',
     tempo:'3-1-2-1',rest:'60 sec',
     muscles:'Upper + Inner Chest — the deep stretch at the bottom is unmatched. This exercise STRETCHES the chest fascia, creating room for growth.',
     svg:`<img src="./images/incline_db_flyes.jpg" alt="Incline Dumbbell Flyes">`,
     breathing:'Inhale as you open your arms (3 sec) — feel the deep chest stretch as your rib cage expands. Hold 1 second at the bottom — this is the growth position. Exhale as you bring the DBs back together (2 sec). Squeeze at the top 1 second. The deep inhale during the stretch literally expands your chest cavity.',
     cues:['Incline bench at 30° — same as incline press','Slight bend in elbows (15-20°) — maintain this bend throughout','Open your arms in a wide ARC — not a pressing motion','Go deep enough to feel a STRETCH across your upper chest — this is the money zone','Don\'t go so deep that your shoulders hurt — stop just before discomfort','Bring DBs together at the top — SQUEEZE your inner chest hard','Hold the squeeze 1 second — then open slowly again','Light weight — 50-60% of what you incline press — this is about the stretch'],
     mistakes:['Arms too straight — elbow stress and less chest activation','Going too heavy — this is an isolation exercise, not a press','Not going deep enough — the stretch is where growth stimulus comes from','Bench too steep — same as incline press, 30° max']},

    /* — TRICEP LONG HEAD — */
    {name:'EZ-Bar Skull Crushers',sets:'3',reps:'10–12',
     tempo:'3-1-2-0',rest:'90 sec',
     muscles:'Triceps (all 3 heads, emphasis on long head) — one of the most effective tricep exercises for mass and the "horseshoe" shape',
     svg:`<img src="./images/skullcrushers.jpg" alt="EZ-Bar Skull Crushers">`,
     breathing:'Inhale as you lower the bar toward your forehead (3 sec). Pause 1 second at the bottom. Exhale as you extend arms (2 sec). The slow descent lets you feel the triceps stretching and loading — this is where growth happens.',
     cues:['Lie on flat bench — arms extended straight up, grip EZ bar shoulder-width','Lower the bar toward your FOREHEAD (not behind head) — 3 seconds','Elbows stay pointing at the ceiling — they don\'t flare or drift','Stop 1 inch above your forehead — pause 1 second','Extend arms back up — squeeze triceps hard at lockout','Upper arms stay perfectly vertical — only forearms move','Feel the stretch in your triceps at the bottom — this loads the long head'],
     mistakes:['Elbows flaring outward — defeats the purpose','Lowering to chin instead of forehead — reduces range of motion','Arms drifting backward (behind head) — changes the exercise angle','Dropping the weight fast — you want 3 seconds down for maximum growth']},

    /* — TRICEP BURNOUT — */
    {name:'Tricep Dips (Bench)',sets:'3',reps:'To failure',
     tempo:'3-0-2-0',rest:'60 sec',
     muscles:'Triceps, Lower Chest, Front Delts — a burnout finisher using bodyweight to completely exhaust your triceps',
     svg:`<img src="./images/tricep_dips.jpg" alt="Tricep Bench Dips">`,
     breathing:'Inhale as you lower for 3 seconds. Exhale as you push up. Don\'t hold your breath — keep breathing even as fatigue hits. When you reach failure, hold at the bottom for 3 seconds (isometric hold) then push out one more rep.',
     cues:['Hands on bench behind you — fingers point forward','Lower until elbows reach 90° — not deeper (shoulder stress)','Push up through your palms — squeeze triceps at the top','Body stays close to the bench — don\'t drift forward','Legs straight for maximum difficulty, bent for easier','GO TO TRUE FAILURE — your last rep should be a struggle','After failure: do 3 partial reps (top half only) for final burn'],
     mistakes:['Going too deep below 90° — shoulder impingement risk','Flaring elbows outward — keep them pointing straight back','Shrugging shoulders up — keep shoulders DOWN and back','Stopping before true failure — this is a finisher, empty the tank']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     FRIDAY — PULL B (Hypertrophy / Pump)
     Higher reps, more isolation, maximum pump
     Different angles from Tuesday for complete back + bicep development
     ═══════════════════════════════════════════════════════════════ */
  {name:'Friday',tag:'Pull B — Pump',tagClass:'pull',
   focus:'Lats (Squeeze) · Mid Back (Volume) · Biceps (Peak & Width) · Traps',
   cardio:'Rowing machine · 5 min light · Activate back before lifting',
   exercises:[
    /* — LAT WIDTH WITH SQUEEZE — */
    {name:'Wide-Grip Lat Pulldown',sets:'4',reps:'10–12',
     tempo:'2-1-3-0',rest:'90 sec',
     muscles:'Lats (width), Teres Major — wider grip = wider lats. The 3-second negative is the growth stimulus.',
     svg:`<img src="./images/lat_pulldown.png" alt="Wide-Grip Lat Pulldown">`,
     breathing:'Exhale as you pull the bar to your upper chest (2 sec). Hold at the bottom for 1 second — squeeze lats hard. Inhale as you release for 3 seconds — feel the lat stretch at the top. Arms fully extended between reps. Keep breathing steadily throughout.',
     cues:['Wide overhand grip — hands 6-8 inches outside shoulders','Pull the bar to your UPPER CHEST — not chin, not collarbone','Drive your elbows DOWN toward your hip pockets — not behind you','Lean back ONLY 15° — no more','Squeeze your lats for 1 second at the bottom — imagine flexing a lat spread','Release slowly for 3 FULL seconds — feel the stretch at the top','Arms fully extended at the top — shoulders by ears, full stretch','Feel this in your ARMPITS and sides of your torso — that\'s your lats'],
     mistakes:['Pulling bar behind the neck — rotator cuff injury risk','Excessive backward lean — turns into a row, not a pulldown','Pulling with biceps — think ELBOWS DOWN, not hands pulling','Not getting full stretch at the top — you need that stretch for growth','Shrugging shoulders up at the top (release and let lats stretch)']},

    /* — MID-BACK THICKNESS — */
    {name:'T-Bar Row',sets:'4',reps:'10–12',
     tempo:'2-1-2-0',rest:'2 min',
     muscles:'Mid Back, Rhomboids, Lower Traps, Lats — builds the thick, dense back that shows through a T-shirt',
     svg:`<img src="./images/bent_over_db_row.jpg" alt="T-Bar Row">`,
     breathing:'Inhale as you lower the weight for 2 seconds — feel back stretch. Exhale as you row up — drive elbows past your torso. Hold 1 second at the top, breathing shallowly. Core braced throughout — don\'t let your lower back round.',
     cues:['Chest against pad (if machine) or bent over at 45° (if landmine)','Pull toward your chest — elbows drive BACK past your torso','Squeeze your shoulder blades together at the top — hold 1 second','Lower for 2 seconds — feel the stretch in your mid-back','Keep your spine neutral — no rounding, no excessive arching','You should feel this between your shoulder blades and in your lats','Heavier than cable rows — this is a mass builder, load it up'],
     mistakes:['Rounding the lower back — dangerous under load','Using momentum to jerk the weight up (makes it a hip exercise)','Not squeezing at the top — the squeeze IS the exercise','Pulling with arms instead of driving elbows back']},

    /* — LAT ISOLATION — */
    {name:'Straight-Arm Lat Pulldown',sets:'3',reps:'12–15',
     tempo:'2-1-2-1',rest:'60 sec',
     muscles:'Lats (pure isolation) — zero bicep involvement. This is how you learn to FEEL your lats. If you struggle with back mind-muscle connection, THIS exercise teaches it.',
     svg:`<img src="./images/lat_pulldown.png" alt="Straight-Arm Lat Pulldown">`,
     breathing:'Exhale as you pull the bar down to your thighs (2 sec). Hold at the bottom for 1 second — squeeze lats. Inhale as you let the bar rise (2 sec). Hold the stretch at the top for 1 second. Keep arms nearly straight — only a slight bend in elbows.',
     cues:['Stand facing the cable — step back 2 feet for full range','Slight forward lean from hips — 15-20°','Arms nearly straight — only a 10° bend in elbows','Pull the bar DOWN to your thighs in an ARC — not a straight line','Squeeze your lats at the bottom — imagine stuffing your armpits down','Hold 1 second at the bottom — you should feel lats cramping','Let the bar rise slowly — feel the stretch all along your lats','This is a LIGHT exercise — it\'s about connection, not weight'],
     mistakes:['Bending elbows too much — turns it into a pushdown','Using too much weight — this is a feel exercise, go light','Not leaning forward — reduces range of motion','Not feeling lats — slow down, squeeze harder, reduce weight']},

    /* — LAT STRETCH + EXPANSION — */
    {name:'Dumbbell Pullover',sets:'3',reps:'12',
     tempo:'3-1-2-0',rest:'60 sec',
     muscles:'Lats, Serratus Anterior, Chest stretch — expands the rib cage and stretches the chest fascia. Arnold did these to build his legendary chest and back.',
     svg:`<img src="./images/db_pullover.jpg" alt="Dumbbell Pullover">`,
     breathing:'Take a DEEP breath as you lower the dumbbell behind your head (3 sec) — literally expand your rib cage with air. This is one of the few exercises where you INTENTIONALLY breathe into your chest (not belly). Hold the stretch 1 second. Exhale as you pull the weight back over. The deep breathing during pullovers is what expands the ribcage over time.',
     cues:['Lie perpendicular across bench — only shoulders on the bench','Hips DROP below bench level — this is crucial for the stretch','Hold one DB with both hands — diamond grip around the handle','Lower the DB behind your head in an arc — feel deep lat stretch','Go as low as your shoulders allow — the stretch is the point','Pull back over using LATS — think about pulling with your armpits','Keep slight bend in elbows throughout — not a press','Breathe DEEPLY — this exercise literally expands your ribcage'],
     mistakes:['Hips rising up to bench level — drop them down for better stretch','Too much weight — this is a stretch exercise, go moderate','Bending elbows too much — turns into a pressing movement','Not going deep enough — the stretch position is where the magic happens']},

    /* — REAR DELT ISOLATION — */
    {name:'Rear Delt Fly (Machine)',sets:'3',reps:'15–20',
     tempo:'2-2-1-0',rest:'45 sec',
     muscles:'Rear Delts, Rhomboids — rounds out the 3D shoulder look and improves posture. Most people have weak rear delts — this fixes it.',
     svg:`<img src="./images/rear_delt_fly.jpg" alt="Rear Delt Fly">`,
     breathing:'Exhale as you open your arms (1 sec). Hold the squeeze for 2 seconds — keep breathing during the hold. Inhale as you close (2 sec). High reps, short rest — keep breathing rhythmic and steady.',
     cues:['Face into the pec deck machine (reversed position) OR bent over with DBs','Arms out to sides — slight elbow bend','Lead with your ELBOWS, not your hands','Squeeze your rear delts at the peak — hold 2 full seconds','You should feel the burn behind your shoulders, not in your traps','Light weight — 15-20 reps — rear delts respond to volume','Control back slowly — 2 seconds — don\'t just let arms fall'],
     mistakes:['Using traps to shrug up (most common mistake)','Too heavy — rear delts are small muscles, they need light weight and high reps','Not holding the squeeze — the 2-second hold is where growth happens','Arms fully straight — slight bend protects elbows']},

    /* — BICEP LONG HEAD (PEAK BUILDER) — */
    {name:'Incline Dumbbell Curl',sets:'3',reps:'10–12',
     tempo:'2-1-3-0',rest:'60 sec',
     muscles:'Biceps Long Head — the incline pre-stretches the long head, which builds the PEAK of your bicep. This is what makes arms look impressive from the front.',
     svg:`<img src="./images/db_bicep_curl.jpg" alt="Incline Dumbbell Curl">`,
     breathing:'Exhale as you curl up (2 sec). Hold at the top 1 second — squeeze and supinate hard. Inhale as you lower for 3 FULL seconds — fight gravity the entire way down. The 3-second negative with arms pre-stretched is what builds the peak.',
     cues:['Incline bench at 45° — arms hang straight down behind your body','This position pre-stretches the bicep long head — you\'ll feel the stretch immediately','Curl up without moving your elbows forward — elbows stay pinned back','At the top: supinate (rotate pinky outward) for peak contraction','Squeeze the bicep HARD at the top — hold 1 second','Lower for 3 FULL seconds — your arms will be shaking, that\'s good','Full extension at the bottom — feel the deep stretch before next rep','Lighter weight than standing curls — the stretch makes this harder'],
     mistakes:['Elbows swinging forward — this is the #1 mistake, kills the stretch benefit','Sitting too upright — you need the 45° incline for the stretch','Rushing the negative — the 3-second lower IS the exercise','Going too heavy — you\'ll compensate with shoulders and lose the stretch']},

    /* — BICEP SHORT HEAD (WIDTH) — */
    {name:'Preacher Curls',sets:'3',reps:'10–12',
     tempo:'2-1-3-0',rest:'60 sec',
     muscles:'Biceps Short Head — builds bicep WIDTH and the full, round shape. The pad eliminates all cheating — pure bicep isolation.',
     svg:`<img src="./images/preacher_curls.jpg" alt="Preacher Curls">`,
     breathing:'Exhale as you curl up (2 sec). Hold the squeeze 1 second. Inhale as you lower for 3 seconds. The slow negative on the preacher bench is brutally effective — your bicep is fully isolated with zero momentum.',
     cues:['Armpits rest on the TOP of the preacher pad — not mid-arm','Arms fully extended at the bottom — feel the DEEP bicep stretch','Curl up to about 90° — don\'t go past or you lose tension','Squeeze the bicep at the top — hold 1 second','Lower for 3 FULL seconds — fight gravity with everything you have','The pad prevents cheating — if you can\'t do the weight clean, go lighter','Use EZ bar or dumbbells — either works, DBs allow more supination'],
     mistakes:['Not extending fully at the bottom — you miss the stretch','Going past 90° at the top — tension drops to zero','Lifting elbows off the pad — defeats the purpose of the preacher bench','Too heavy — if you can\'t do a clean 3-second negative, it\'s too heavy']},

    /* — FOREARM + BICEP TIE-IN — */
    {name:'Reverse Curls (EZ Bar)',sets:'3',reps:'12–15',
     tempo:'2-0-2-0',rest:'45 sec',
     muscles:'Brachioradialis, Forearm Extensors — THE #1 exercise for forearm veins and the forearm-to-bicep tie-in. This is what makes your arms look complete.',
     svg:`<img src="./images/reverse_curls.jpg" alt="Reverse Curls">`,
     breathing:'Exhale as you curl up. Inhale as you lower. Keep breathing steady — high reps, rhythmic breathing. This is a smaller muscle — don\'t hold your breath.',
     cues:['Overhand grip (palms face DOWN) — EZ bar reduces wrist strain','Elbows pinned to sides — strict, zero movement','Curl up — you\'ll feel the TOP of your forearm burning','Lower for 2 seconds — control it','Light weight — forearms respond to high reps and slow tempo','This exercise builds the brachioradialis — the muscle that runs from your elbow to your wrist and is covered in veins','After 3 sets, your forearms should feel pumped and vascular'],
     mistakes:['Going too heavy — wrist strain is real, stay light','Using body swing — strict form only','Elbows drifting forward — pin them to your sides','Too fast — feel each rep, slow and controlled']},

    /* — TRAP BUILDER — */
    {name:'Dumbbell Shrugs',sets:'4',reps:'12–15',
     tempo:'1-2-1-0',rest:'60 sec',
     muscles:'Upper Traps — builds the "yoke" — the thick traps that make you look powerful even in a T-shirt',
     svg:`<img src="./images/db_shrugs.jpg" alt="Dumbbell Shrugs">`,
     breathing:'Exhale as you shrug up (1 sec). Hold at the top for 2 seconds — breathe shallowly. Inhale as you lower (1 sec). The 2-second hold at the top is crucial — traps respond to time under tension.',
     cues:['Heavy dumbbells — traps are strong and respond to heavy loads','Shrug STRAIGHT UP — pull ears to shoulders','Hold the squeeze at the TOP for 2 full seconds — feel your traps cramping','Lower slowly — 1 second — don\'t just drop the weight','Keep your arms straight — this is a shrugging motion, not a curling motion','No rolling — straight up, straight down. Rolling adds zero benefit and risks injury','You should feel this at the base of your neck and top of your shoulders'],
     mistakes:['Rolling shoulders in circles — injury risk, zero benefit','Not holding the squeeze — the 2-second hold is where traps grow','Going too light — traps need HEAVY weight, they\'re a large muscle','Bending elbows (turns into a partial curl)','Rushing reps — slow and deliberate with heavy weight']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     SATURDAY — FULL REST
     Recovery day: muscles repair and grow. Eat protein, sleep well.
     ═══════════════════════════════════════════════════════════════ */
  {name:'Saturday',tag:'Full Rest',tagClass:'rest',rest:true,
   restMsg:'You\'ve trained 5 days straight — chest, back, legs, shoulders, and more. Today your muscles repair micro-tears and come back BIGGER and STRONGER. Rest is when growth ACTUALLY happens — not in the gym. Tomorrow you crush a 2-hour Arms & Forearms session fully recovered.',
   restTips:['Sleep 8+ hours — Growth Hormone peaks during deep sleep','Keep eating protein (130g+) even on rest days — muscles rebuild today','Light 20-min walk promotes blood flow and recovery','Hydrate well — 3L water minimum','Foam roll and stretch any sore areas','Cold shower → improved recovery and vascularity','Meal prep for the week if needed']},

  /* ═══════════════════════════════════════════════════════════════
     SUNDAY — ARMS & FOREARMS (2-Hour Session)
     Biceps 2nd session of the week (Tue + Sun) · All 3 tricep heads
     2 hours = higher volume, full rest between sets, maximum growth
     ═══════════════════════════════════════════════════════════════ */
  {name:'Sunday',tag:'Arms & Forearms (2hr)',tagClass:'core',
   focus:'Biceps (peak + width) · Triceps (all 3 heads) · Forearms · 2-HOUR SESSION',
   cardio:'5 min light cycling — get blood flowing to arms before destroying them',
   exercises:[
    /* — HEAVY TRICEP COMPOUND — */
    {name:'Close-Grip Bench Press',sets:'4',reps:'8–10',
     tempo:'3-0-2-0',rest:'2–3 min',
     muscles:'Triceps (all 3 heads) + Inner Chest — heaviest tricep compound, do it first while fresh',
     svg:`<img src="./images/close_grip_bench.jpg" alt="Close-Grip Bench Press">`,
     breathing:'Deep belly breath at the top, hold through the eccentric (3 sec), exhale through the sticking point. Valsalva breathing every rep — this is a heavy compound.',
     cues:['Hands shoulder-width apart — NOT super close (wrist strain)','Elbows tucked tight to ribcage — shifts load to triceps','Lower bar to lower chest — touch and controlled press','Lock out HARD at top — full tricep contraction','Think "press and squeeze triceps" — not just push','Go heavy here — triceps respond to progressive overload'],
     mistakes:['Grip too narrow (wrist pain + instability)','Flaring elbows out (becomes regular bench)','Bouncing off chest (lose tension)','Not locking out at top (missing peak contraction)']},

    /* — HEAVY BICEP COMPOUND — */
    {name:'EZ-Bar Curl (Strict)',sets:'4',reps:'8–10',
     tempo:'2-1-3-0',rest:'2 min',
     muscles:'Biceps (both heads) — the mass builder. EZ bar = wrist comfort. 2nd bicep session this week.',
     svg:`<img src="./images/barbell_curl.jpg" alt="EZ-Bar Curl">`,
     breathing:'Exhale as you curl up. Hold at the top, squeeze hard. Inhale as you lower for 3 FULL seconds — this slow negative is where the magic happens.',
     cues:['EZ bar — inner angled grip (shoulder width)','Back against wall or post for ZERO cheating','Elbows pinned to torso — don\'t let them move forward','Full curl to peak → squeeze HARD 1 sec → 3 sec negative','Full extension at bottom — no partial reps','Go heavier than Tuesday — you\'re fully rested from yesterday'],
     mistakes:['Swinging body (wall eliminates this)','Elbows drifting forward (front delts steal the work)','Partial reps at bottom (missing stretch)','Going too heavy (form > weight for biceps)']},

    /* — TRICEP LONG HEAD — */
    {name:'Overhead EZ-Bar Extension',sets:'4',reps:'10–12',
     tempo:'3-1-2-0',rest:'90 sec',
     muscles:'Triceps Long Head — the BIGGEST head. Overhead position pre-stretches it maximally.',
     svg:`<img src="./images/skullcrushers.jpg" alt="Overhead Extension">`,
     breathing:'Inhale as you lower the bar BEHIND your head (3 sec). Feel the deep tricep stretch. Exhale as you extend. The overhead stretch is critical for long head growth.',
     cues:['Lie on flat bench — EZ bar overhead','Lower bar BEHIND head (not to forehead) — get full long head stretch','Elbows point at ceiling — they don\'t move','The key: lower BEHIND head for maximum long head stretch','Extend fully — lock out and squeeze triceps HARD','3 sec eccentric into the stretch position'],
     mistakes:['Lowering to forehead only (less long head stretch)','Elbows flaring outward','Not getting full stretch behind head','Using momentum to press up']},

    /* — BICEP PEAK BUILDER — */
    {name:'Preacher Curl (EZ or DB)',sets:'4',reps:'10–12',
     tempo:'2-1-3-0',rest:'90 sec',
     muscles:'Biceps Short Head — builds the PEAK shape. Pad eliminates all cheating — pure bicep.',
     svg:`<img src="./images/preacher_curls.jpg" alt="Preacher Curls">`,
     breathing:'Exhale as you curl up. Hold the squeeze 1 second. Inhale as you lower for 3 seconds. The slow negative on the preacher bench is brutally effective — zero momentum.',
     cues:['Armpits rest on TOP of the pad — fully supported','Arms FULLY extended at bottom — deep bicep stretch','Curl up to about 90° — NOT to shoulder (tension drops)','The pad eliminates ALL cheating — pure bicep work','Hold squeeze 1 sec at top, 3 sec negative','This targets the short head for PEAK shape'],
     mistakes:['Not extending fully at bottom (missing stretch)','Curling past 120° (loses tension)','Lifting elbows off pad (cheating)','Too heavy (bicep tear risk in stretched position)']},

    /* — TRICEP LATERAL HEAD — */
    {name:'Tricep Rope Pushdown',sets:'4',reps:'12–15',
     tempo:'2-0-1-1',rest:'60 sec',
     muscles:'Lateral + Medial Tricep Heads — the horseshoe shape visible from behind',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown">`,
     breathing:'Exhale as you push down and spread the rope. Inhale as it comes back up. One breath per rep.',
     cues:['Lean forward 30° from hips — increases lateral head activation','Elbows PINNED to ribs — non-negotiable','At bottom: SPREAD rope ends apart + PRONATE (pinkies out)','Full lockout every rep — squeeze the horseshoe','3 sec eccentric — fight the cable back up','Leaning forward is the KEY CUE most people miss'],
     mistakes:['Standing upright (less lateral head)','Elbows drifting forward','Not spreading rope at bottom','Body rocking for momentum']},

    /* — BICEP CONSTANT TENSION — */
    {name:'Spider Curls (Incline Bench)',sets:'3',reps:'12–15',
     tempo:'2-0-3-0',rest:'60 sec',
     muscles:'Biceps — constant tension throughout entire ROM. Impossible to cheat.',
     svg:`<img src="./images/spider_curls.jpg" alt="Spider Curls">`,
     breathing:'Exhale as you curl up. Inhale as you lower for 3 seconds. Gravity works against you the ENTIRE time — keep breathing steady.',
     cues:['Lie CHEST-DOWN on incline bench (45–60°)','Arms hang STRAIGHT down — perpendicular to floor','Curl up — gravity works against you the entire time','At peak: squeeze so hard your bicep cramps','3 sec eccentric every rep — max time under tension','This is the best pump exercise for biceps'],
     mistakes:['Moving elbows (they stay locked in space)','Bench too flat (reduces gravity advantage)','Going too heavy (precision work)']},

    /* — TRICEP WEIGHTED DIPS — */
    {name:'Weighted Dips (Tricep Focus)',sets:'4',reps:'8–12',
     tempo:'3-0-2-0',rest:'2 min',
     muscles:'Triceps (all heads), Lower Chest — heavy compound with deep stretch',
     svg:`<img src="./images/tricep_dips.jpg" alt="Dips">`,
     breathing:'Inhale as you lower (3 sec). Exhale as you press up. With 2 hours you can take full rest between sets.',
     cues:['UPRIGHT torso = more tricep focus','Lower until upper arm is parallel to floor (90° elbow)','Drive up through palms — lock out HARD at top','Add weight belt when bodyweight >12 reps easily','Shoulder blades down and back throughout'],
     mistakes:['Going too deep past 90° (shoulder impingement)','Leaning too far forward (shifts to chest)','Kipping or swinging','Flaring elbows too wide']},

    /* — BICEP PEAK CONTRACTION — */
    {name:'Concentration Curl',sets:'3',reps:'10–12 each arm',
     tempo:'2-0-4-0',rest:'60 sec',
     muscles:'Biceps PEAK — highest EMG activation of any curl. Unilateral for symmetry.',
     svg:`<img src="./images/db_bicep_curl.jpg" alt="Concentration Curl">`,
     breathing:'Exhale as you curl up. SQUEEZE at the top for 2 full seconds. Inhale as you lower for 4 seconds. Mind-muscle connection is everything here.',
     cues:['Sit on bench — elbow braced against inner thigh','This isolation eliminates ALL momentum — pure bicep','Curl up slowly — SQUEEZE at top for 2 full seconds','Supinate hard at the top — turn pinky OUT','4 sec negative EVERY rep — this builds the peak'],
     mistakes:['Swinging the dumbbell (elbow stays planted on thigh)','Not squeezing at the top','Rushing the negative']},

    /* — TRICEP KICKBACK — */
    {name:'Cable Tricep Kickback',sets:'3',reps:'12–15 each arm',
     tempo:'2-0-1-1',rest:'60 sec',
     muscles:'Triceps Lateral + Medial Head — peak contraction at lockout carves detail',
     svg:`<img src="./images/tricep_pushdown.png" alt="Cable Kickback">`,
     breathing:'Exhale as you extend fully. Hold the lockout 1 second. Inhale as you return.',
     cues:['Cable at low position — single handle','Hinge forward 90° — upper arm parallel to floor','Extend arm FULLY behind you — lock out completely','Hold lockout 1–2 seconds — squeeze hard','Cable > dumbbell because tension stays at peak'],
     mistakes:['Upper arm dropping (must stay parallel to floor)','Not locking out fully (missing peak contraction)','Swinging the weight']},

    /* — BICEP ARM WIDTH — */
    {name:'Cross-Body Hammer Curl',sets:'3',reps:'10–12 each arm',
     tempo:'2-0-2-0',rest:'60 sec',
     muscles:'Brachialis + Brachioradialis — arm WIDTH builder, pushes bicep UP from underneath',
     svg:`<img src="./images/hammer_curls.png" alt="Hammer Curls">`,
     breathing:'Exhale as you curl across body. Inhale as you lower. Keep it controlled and rhythmic.',
     cues:['Neutral grip (palms face in) — curl ACROSS body toward opposite shoulder','This cross-body angle hits brachialis MORE than standard hammer','The brachialis sits UNDER the bicep — grows it pushes bicep UP','Light-moderate weight — feel the brachialis working'],
     mistakes:['Going straight up instead of across body','Rotating the wrist (must stay neutral)','Using momentum']},

    /* — FOREARMS: REVERSE CURLS — */
    {name:'Reverse Curls (EZ Bar)',sets:'3',reps:'15–20',
     tempo:'2-0-3-0',rest:'45 sec',
     muscles:'Brachioradialis + Forearm Extensors — THE vein builder. Builds the forearm-to-bicep tie-in.',
     svg:`<img src="./images/reverse_curls.jpg" alt="Reverse Curls">`,
     breathing:'Exhale as you curl up. Inhale as you lower for 3 seconds. Keep breathing steady — high reps, rhythmic.',
     cues:['Overhand grip (palms face DOWN) on EZ bar','Elbows pinned to sides — strict form','Curl up — feel the top of your forearm working','Slow 3 sec eccentric — maximize time under tension','Light weight + high reps — forearms are endurance muscles'],
     mistakes:['Going too heavy (wrist strain)','Using body swing','Elbows moving forward']},

    /* — FOREARMS: FARMER\'S WALK — */
    {name:'Farmer\'s Walk (Heavy)',sets:'3',reps:'40–60 seconds',
     tempo:null,rest:'90 sec',
     muscles:'Forearms, Grip Strength, Traps, Core — vascularity builder and grip finisher',
     svg:`<img src="./images/farmers_walk.jpg" alt="Farmer Walk">`,
     breathing:'Breathe naturally — deep steady breaths. Grip is the limiting factor, not breath.',
     cues:['Grab the HEAVIEST dumbbells you can hold for 40+ seconds','Walk slowly with perfect posture — chest tall, shoulders back','CRUSH the handles — grip as hard as possible','When you can\'t hold anymore, that\'s the set','Core stays tight — don\'t lean to either side'],
     mistakes:['Going too light (this should be HEAVY)','Hunching shoulders forward','Letting grip relax — CRUSH the handles']},

    /* — FOREARMS: WRIST CURLS — */
    {name:'Behind-Back Wrist Curls (Barbell)',sets:'3',reps:'20–25',
     tempo:'2-0-2-0',rest:'45 sec',
     muscles:'Forearm Flexors — direct size builder. Behind-back angle = more range of motion.',
     svg:`<img src="./images/wrist_curls.jpg" alt="Wrist Curls">`,
     breathing:'Breathe steadily — high rep, rhythmic. One breath per rep.',
     cues:['Stand — barbell held behind your back','Let bar roll to fingertips, then curl wrist UP','High reps (20+) — forearm flexors are slow-twitch dominant','The roll-to-fingertips technique adds finger flexor work','Burns like fire — that\'s the growth stimulus'],
     mistakes:['Moving the forearm (only the WRIST curls)','Too heavy (wrist injury risk)','Rushing reps']}
  ]}
];


const FOODS = [
  {icon:'🥚',name:'Whole Eggs',protein:'6g / egg',tags:[{l:'6g prot',c:'p'},{l:'5g fat',c:'f'}],tip:'4–5 eggs/day. Yolk has Vitamin D & cholesterol for testosterone. Don\'t skip it.'},
  {icon:'🐔',name:'Chicken Breast',protein:'31g / 100g',tags:[{l:'31g prot',c:'p'},{l:'3.6g fat',c:'f'}],tip:'150g grilled = ~47g protein. Boil, grill or air-fry. Avoid deep frying. Best source.'},
  {icon:'🧀',name:'Paneer (Cottage Cheese)',protein:'18g / 100g',tags:[{l:'18g prot',c:'p'},{l:'21g fat',c:'f'}],tip:'100g at dinner — slow-digesting casein protein that feeds muscles during sleep.'},
  {icon:'🫘',name:'Moong / Masoor Dal',protein:'9g / 100g cooked',tags:[{l:'9g prot',c:'p'},{l:'20g carbs',c:'c'}],tip:'Combine with rice for complete amino acids. Eat 2 katori/day. Chana dal is highest.'},
  {icon:'🥛',name:'Greek Yogurt / Dahi',protein:'10–17g / 100g',tags:[{l:'17g prot',c:'p'},{l:'6g carbs',c:'c'}],tip:'200g Greek yogurt = 17–20g protein. Prefer Epigamia or Sach over regular dahi.'},
  {icon:'🐟',name:'Tuna / Rohu Fish',protein:'22–25g / 100g',tags:[{l:'25g prot',c:'p'},{l:'5g fat',c:'f'}],tip:'Canned tuna (water) is cheapest high-protein food. 1 can = ~25g protein.'},
  {icon:'🥜',name:'Peanut Butter',protein:'4g / tbsp',tags:[{l:'4g prot',c:'p'},{l:'8g fat',c:'f'}],tip:'2 tbsp with breakfast = 8g protein + healthy fats. Choose natural — MuscleBlaze or Pintola.'},
  {icon:'🍶',name:'Milk (Full Fat)',protein:'3.4g / 100ml',tags:[{l:'3.4g prot',c:'p'},{l:'4.7g carbs',c:'c'}],tip:'2 glasses/day = ~17g protein. Drink one glass post-workout mixed with whey if using.'},
];

const MEALS = [
  {time:'6:30 AM\nPre-Workout',name:'Morning Fuel',desc:'2 bananas + black coffee (no sugar)\nor 1 multigrain toast + peanut butter\n🍌 Quick carbs for gym energy',kcal:250,protein:8},
  {time:'8:30 AM\nPost-Workout',name:'Post-Workout Meal',desc:'4 whole eggs (scrambled/boiled) + 2 multigrain bread + 1 glass milk\nor Whey shake + banana\n⚡ MOST IMPORTANT — eat within 45 min',kcal:520,protein:38},
  {time:'1:00 PM\nLunch',name:'Power Lunch',desc:'2 chapati + 1 katori rice + 150g grilled chicken/paneer + 1 katori dal + sabzi\n🍱 Balanced carbs + protein + fibre',kcal:700,protein:45},
  {time:'4:30 PM\nSnack',name:'Afternoon Snack',desc:'200g Greek yogurt + handful roasted chana\nor 1 boiled egg + 1 fruit (apple/orange)\n🥣 Keeps protein topped up',kcal:280,protein:20},
  {time:'8:00 PM\nDinner',name:'Lean Dinner',desc:'2 chapati + 100g paneer sabzi or 150g chicken curry (less oil) + salad\n🌙 Lighter carbs, higher protein',kcal:550,protein:35},
  {time:'10:30 PM\nPre-Sleep',name:'Night Snack',desc:'1 glass warm haldi doodh\nor 50g low-fat paneer cubes\n😴 Casein protein — feeds muscles in sleep',kcal:150,protein:10},
];

const TIPS = [
  {icon:'💤',title:'Sleep 7–8 hours',text:'Growth hormone (GH) is secreted during deep sleep. Skipping sleep = skipping gains. Sleep by 11:30 PM at latest.'},
  {icon:'💧',title:'3–3.5 litres water/day',text:'Dehydration reduces strength by 10–15%. Carry a 1L bottle to gym. Especially important in Bangalore heat.'},
  {icon:'📈',title:'Progressive overload',text:'Every 2 weeks — add 2.5–5 kg or 1–2 extra reps. This is the ONLY mechanism for muscle growth.'},
  {icon:'📏',title:'Form before weight',text:'Ego lifting leads to injury. Use lighter weights with full range of motion. Learn form in first 4 weeks.'},
  {icon:'🧘',title:'Warm up every session',text:'5 min treadmill walk + arm circles + leg swings before lifting. Cold muscles tear. This 5 min saves months.'},
  {icon:'🍕',title:'80/20 diet rule',text:'Eat clean 80% of the time. The remaining 20% (a biryani, a pizza) won\'t kill progress. Consistency > perfection.'},
  {icon:'📸',title:'Track progress monthly',text:'Take a progress photo every 4 weeks in the same light. Scale fluctuates. Photos + tape measure tell the real story.'},
  {icon:'🚫',title:'Avoid beginner mistakes',text:'Don\'t train same muscle 2 days in a row. Don\'t bulk on junk food. Don\'t skip rest days. Don\'t compare to veterans.'},
];

const SUPPS = [
  {name:'Creatine Monohydrate',dose:'5g / day',info:'Most researched supplement. Improves strength 5–15%. Take daily — doesn\'t need to be pre-workout.'},
  {name:'Whey Protein',dose:'1 scoop post-gym',info:'Only if food protein falls short. MuscleBlaze Biozyme or AS-IT-IS Whey are reliable India brands.'},
  {name:'Vitamin D3',dose:'1000–2000 IU / day',info:'Most Indians are deficient. Boosts testosterone, immunity, and bone strength. Critical for gym performance.'},
  {name:'Omega-3 (Fish Oil)',dose:'1g / day',info:'Anti-inflammatory. Reduces joint soreness and speeds recovery. One fish oil capsule with dinner.'},
];

const PROTEIN_FOODS = [
  {name:'4 eggs',g:24},{name:'Chicken 150g',g:46},{name:'Paneer 100g',g:18},
  {name:'Dal 1 bowl',g:10},{name:'Greek Yogurt',g:17},{name:'Whey Scoop',g:24},
  {name:'Milk 250ml',g:8},{name:'Tuna (can)',g:25}
];
