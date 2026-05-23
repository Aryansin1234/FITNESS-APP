const DAYS = [
  /* ═══════════════════════════════════════════════════════════════
     MONDAY — CHEST + TRICEPS (Heavy Push)
     Evidence-based: 2 heavy compounds → 1 stretch-focused isolation → 1 peak-contraction isolation → Triceps (long head → lateral head)
     Research: Schoenfeld 2021 — chest grows best with 12–20 sets/week split across 2 frequencies
     ═══════════════════════════════════════════════════════════════ */
  {name:'Monday',tag:'Chest & Triceps + Forearms',tagClass:'push',
   focus:'Chest (Upper + Mid + Stretch) · Triceps (Long + Lateral head) · Forearms',
   cardio:'Incline treadmill walk · 10 min · 6 km/h · 4% incline',
   exercises:[
    /* — HEAVY COMPOUND #1: The progressive overload king — */
    {name:'Flat Dumbbell Press',sets:'4',reps:'6–8',muscles:'Mid Chest, Front Delts, Triceps — PRIMARY mass builder',
     svg:`<img src="./images/flat_dumbbell_press.png" alt="Flat Dumbbell Press">`,
     cues:['Retract scapulae HARD — pinch shoulder blades like you\'re cracking a walnut','Elbows at 45° angle — protects shoulder joint','Slight arch in UPPER back only (not lower)','Feet flat, drive through heels into floor','Full stretch at bottom → explosive press → squeeze at top','3 sec eccentric, 1 sec pause at bottom, explode up'],
     mistakes:['Flaring elbows 90° (shoulder impingement)','Flat back — you NEED scapular retraction','Bouncing DBs off chest','Pressing too high (above eyes) — press to upper chest level','Letting wrists collapse backward']},
    /* — HEAVY COMPOUND #2: Upper chest is genetically hard to grow — must overload it — */
    {name:'Incline Dumbbell Press (30°)',sets:'4',reps:'8–10',muscles:'Upper Chest (Clavicular Head) — the "shelf" builder',
     svg:`<img src="./images/incline_dumbbell_press.png" alt="Incline Dumbbell Press">`,
     cues:['Bench at exactly 30° — research shows 30° activates upper chest MORE than 45°','Scapulae retracted and depressed','Slight seat incline to prevent sliding','Press toward ceiling — DBs converge slightly at top','Full deep stretch at bottom — feel upper pec stretch','Touch-and-go at bottom, squeeze hard at top'],
     mistakes:['Bench above 45° (becomes anterior delt press)','Not retracting scapulae','Pressing DBs straight up instead of slight arc inward','Short-range reps — the STRETCH at bottom is where growth happens']},
    /* — STRETCH-FOCUSED ISOLATION: Muscles grow most in lengthened position (Schoenfeld 2023) — */
    {name:'Incline Dumbbell Flyes',sets:'3',reps:'10–12',muscles:'Upper + Inner Chest — maximal stretch stimulus',
     svg:`<img src="./images/incline_db_flyes.jpg" alt="Incline Dumbbell Flyes">`,
     cues:['30° incline — same as press','Slight bend in elbows (15–20°) — maintain throughout','Open arms WIDE — go as deep as comfortable for maximum stretch','The STRETCH at the bottom is the growth stimulus','Squeeze pecs together at top — don\'t clank DBs','4 second eccentric descent — TIME in the stretch = growth'],
     mistakes:['Arms too straight (bicep tendon stress)','Not going deep enough — the stretch IS the exercise','Going too heavy (this is feel-based, not ego-based)','Bench too steep']},
    /* — PEAK-CONTRACTION ISOLATION: Cable provides constant tension through full ROM — */
    {name:'Cable Flyes (Mid or Low-to-High)',sets:'3',reps:'12–15',muscles:'Inner Chest squeeze + constant tension throughout ROM',
     svg:`<img src="./images/cable_crossover.jpg" alt="Cable Flyes">`,
     cues:['Cables at mid-height for overall chest, low for upper chest','Step forward into split stance for stability','Slight forward lean — chest drives the motion','Hands cross OVER each other at peak — supinate slightly','Hold the squeeze for 2 full seconds at peak contraction','Constant tension = no rest point = more metabolic stress'],
     mistakes:['Standing too upright (turns into front delt)','Using momentum/body english','Not crossing hands at peak — you lose inner chest squeeze','Too heavy — cables are for FEEL, not ego']},
    /* — TRICEPS: Long head first (largest head, crosses shoulder joint — needs overhead stretch) — */
    {name:'Overhead Cable Tricep Extension',sets:'3',reps:'10–12',muscles:'Triceps LONG HEAD — the biggest head (60% of arm size)',
     svg:`<img src="./images/overhead_tricep_extension.jpg" alt="Overhead Cable Tricep Extension">`,
     cues:['Face AWAY from cable, rope behind head','Step forward into lunge for stability','Elbows point forward and UP — don\'t flare','Extend fully — lock out and squeeze','The stretch at the bottom is CRITICAL — long head crosses shoulder','Cable > dumbbell because tension stays constant at the stretch'],
     mistakes:['Elbows flaring sideways (shifts to lateral head)','Not getting full stretch behind head','Arching lower back — brace core','Using too much weight — this is stretch-focused']},
    /* — TRICEPS: Lateral head (the "horseshoe" shape visible from side) — */
    {name:'Tricep Rope Pushdown',sets:'3',reps:'12–15',muscles:'Lateral + Medial heads — the "horseshoe"',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown">`,
     cues:['Elbows PINNED to ribs — this is non-negotiable','Lean forward slightly from hips','At the bottom: SPREAD rope ends apart and pronate (turn pinkies out)','Full lockout — squeeze the lateral head','Slow 3 sec return — don\'t let cable snap back','Light weight — feel > ego on this'],
     mistakes:['Elbows drifting forward (turns into a press)','Not spreading rope at bottom','Body rocking for momentum','Partial reps — FULL extension every rep']},
    /* — TRICEPS: Compound burnout — bench dips provide high stretch on long head under load — */
    {name:'Weighted Dips (Chest/Tricep)',sets:'3',reps:'8–12',muscles:'Triceps, Lower Chest — heavy compound stretch',
     svg:`<img src="./images/tricep_dips.jpg" alt="Dips">`,
     cues:['Upright torso = more tricep; lean forward = more chest','Lower until upper arm is parallel to floor (90° elbow)','Drive up through palms — lock out at top','Add weight belt when bodyweight feels easy (>12 reps)','Shoulder blades down and back throughout'],
     mistakes:['Going too deep past 90° (shoulder impingement)','Flaring elbows wide','Kipping or swinging','Forward lean too much if targeting triceps']},
    /* — FINISHER: Metabolic stress via blood flow — */
    {name:'Push-Ups (Mechanical Drop Set)',sets:'2',reps:'To absolute failure',muscles:'Chest, Triceps, Core — metabolic finisher',
     svg:`<img src="./images/push_ups.png" alt="Push-Ups">`,
     cues:['Start WIDE grip — failure → immediately switch to normal grip → failure → narrow grip → failure','That\'s ONE set — no rest between grip changes','Chest touches floor every rep — full ROM','This drives maximum blood flow and metabolic stress','The pump = cell swelling = growth signal'],
     mistakes:['Hips sagging (weak core)','Stopping at moderate effort — push to TRUE failure','Partial reps — chest to floor is mandatory']},
    /* — FOREARMS (Daily): Wrist curls for flexor size — */
    {name:'Wrist Curls (Dumbbell)',sets:'3',reps:'20–25',muscles:'Forearm Flexors — daily forearm training for size & vascularity',
     svg:`<img src="./images/wrist_curls.jpg" alt="Wrist Curls">`,
     cues:['Sit on bench — forearms resting on thighs, wrists hanging off knees','Let DB roll to fingertips → curl wrist up → squeeze at top','High reps (20+) — forearm flexors are slow-twitch dominant','The burn = growth. Push through it.','2 sec squeeze at top, slow release','Do both arms simultaneously or alternate'],
     mistakes:['Moving the forearm (only the WRIST curls)','Too heavy (wrist injury risk)','Rushing reps — slow = growth','Stopping when it burns (push through)']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     TUESDAY — BACK + TRAPS + BICEPS (Heavy Pull + Biceps Session 1)
     Evidence-based: Vertical pull (width) → Horizontal row (thickness) → Stretch isolation → Traps → Biceps
     Research: Back responds to both high load + high volume. Biceps 2×/week (Tue + Sat) with 72hr rest.
     ═══════════════════════════════════════════════════════════════ */
  {name:'Tuesday',tag:'Back, Traps & Biceps',tagClass:'pull',
   focus:'Lats (width) · Mid Back (thickness) · Traps · Rear Delts · Biceps · Forearms',
   cardio:'Rowing machine · 8 min · Light pace — activates lats + opens shoulders',
   exercises:[
    /* — VERTICAL PULL #1: Nothing builds lat width like weighted pull-ups — */
    {name:'Pull-Ups (Wide Grip)',sets:'4',reps:'6–10 (add weight when >10)',muscles:'Lats, Teres Major, Lower Traps, Biceps',
     svg:`<img src="./images/pullups.jpg" alt="Pull-Ups">`,
     cues:['Grip 1.5× shoulder width — overhand','Initiate by DEPRESSING scapulae (pull shoulders down first)','Drive elbows DOWN and BACK toward hip pockets','Pull CHEST to bar — not just chin over','Full dead hang at bottom — full scapular protraction','3 sec eccentric every rep — this is where growth happens','Add weight belt when you hit 10+ clean reps'],
     mistakes:['Kipping or using momentum','Only getting chin over (partial ROM)','Not going to full dead hang (missing lat stretch)','Shrugging shoulders up at the top']},
    /* — VERTICAL PULL #2: Heavier progressive overload than pull-ups — */
    {name:'Lat Pulldown (Wide, Pronated)',sets:'4',reps:'10–12',muscles:'Lats (width), Teres Major — heavier overload possible',
     svg:`<img src="./images/lat_pulldown.png" alt="Lat Pulldown">`,
     cues:['Grip outside shoulders — pronated (overhand)','Lean back 15° MAX — no more','Drive elbows DOWN toward hip pockets — not back','Pull to upper chest, never behind neck','Arms FULLY extended at top — complete lat stretch','Squeeze lats at bottom — hold 1 sec','Think "elbows into back pockets"'],
     mistakes:['Pulling behind neck (shoulder impingement)','Excessive backward lean (becomes a row)','Using biceps — think ELBOWS not HANDS','Not extending fully at top — missing the stretch']},
    /* — HORIZONTAL ROW #1: Heavy compound for mid-back thickness — */
    {name:'Barbell Bent-Over Row',sets:'4',reps:'6–8',muscles:'Lats, Rhomboids, Rear Delts, Erectors — #1 thickness builder',
     svg:`<img src="./images/bent_over_db_row.jpg" alt="Barbell Row">`,
     cues:['Hinge at hips — torso 45–60° to floor','Overhand or underhand grip (underhand = more lats)','Pull bar to lower chest/upper abdomen','RETRACT scapulae hard at the top — squeeze 1 sec','Lower fully — arms straight, lats stretched','Keep spine NEUTRAL — never round','This is your heaviest row — progressive overload priority'],
     mistakes:['Rounding the lumbar spine','Torso coming too upright (becomes a shrug)','Not retracting scapulae at the top','Rowing to belly button (too low for lat engagement)']},
    /* — HORIZONTAL ROW #2: Chest-supported = zero cheating, pure back isolation — */
    {name:'Chest-Supported Dumbbell Row',sets:'3',reps:'10–12',muscles:'Mid Back, Rhomboids, Rear Delts — ZERO momentum possible',
     svg:`<img src="./images/bent_over_db_row.jpg" alt="Chest-Supported Row">`,
     cues:['Lie face-down on incline bench (30–45°)','Let DBs hang — full scapular protraction at bottom','Row DBs up — elbows drive BACK past torso','SQUEEZE shoulder blades together at top — hold 2 sec','Chest against pad = IMPOSSIBLE to cheat','3 sec eccentric — feel the stretch at bottom','This mid-back isolation is unmatched'],
     mistakes:['Lifting chest off pad (defeats the purpose)','Rowing too high (traps take over)','Not getting full stretch at bottom','Shrugging shoulders up']},
    /* — HORIZONTAL ROW #3: Cable for constant tension — */
    {name:'Seated Cable Row (V-Grip)',sets:'3',reps:'10–12',muscles:'Mid Back, Rhomboids, Lower Traps — constant tension',
     svg:`<img src="./images/seated_cable_row.png" alt="Seated Cable Row">`,
     cues:['V-grip or close grip attachment','Sit tall, chest proud — no slouching','Pull to lower chest — elbows drive past torso','PINCH shoulder blades at peak — hold 2 sec','Full stretch forward between reps — let lats elongate','Zero torso rocking — strict movement'],
     mistakes:['Rocking torso for momentum','Pulling to belly (too low)','Slouching — stay tall','Not getting full stretch between reps']},
    /* — STRETCH-FOCUSED: Back grows most in lengthened position (Maeo 2022) — */
    {name:'Dumbbell Pullover',sets:'3',reps:'12–15',muscles:'Lats (stretched position), Serratus — maximal lat stretch',
     svg:`<img src="./images/db_pullover.jpg" alt="Dumbbell Pullover">`,
     cues:['Lie across bench — only upper back supported, hips dropped','Both hands hold ONE dumbbell overhead','Lower behind head — go DEEP for maximum lat stretch','Pull back using LATS — not chest or arms','Slight elbow bend (20°) maintained throughout','The deep stretch IS the stimulus — go as deep as safe','Drop hips slightly for even greater stretch'],
     mistakes:['Not going deep enough (missing growth stimulus)','Too heavy (losing control in stretched position)','Bending elbows too much (becomes skull crusher)','Hips too high — drop them for more stretch']},
    /* — REAR DELTS + SHOULDER HEALTH: Critical for posture and injury prevention — */
    {name:'Cable Face Pulls (with External Rotation)',sets:'4',reps:'15–20',muscles:'Rear Delts, External Rotators, Mid Traps — SHOULDER HEALTH',
     svg:`<img src="./images/cable_face_pulls.png" alt="Cable Face Pulls">`,
     cues:['Cable at face height — rope attachment','Pull toward FOREHEAD — not chin or chest','Elbows HIGH and OUT — above shoulder level','At peak: externally rotate (thumbs point BEHIND you)','This is THE exercise for shoulder longevity','Hold peak position 2 sec every rep','Light weight — this is NEVER a heavy exercise'],
     mistakes:['Pulling to chin (becomes a row)','Elbows dropping below shoulders','Too heavy = traps and biceps dominate','Not externally rotating at the end']},
    /* — TRAPS: Heavy loads — traps are built for heavy carrying — */
    {name:'Dumbbell Shrugs (2-sec hold)',sets:'4',reps:'12–15',muscles:'Upper Traps — the "yoke" builder',
     svg:`<img src="./images/db_shrugs.jpg" alt="Dumbbell Shrugs">`,
     cues:['HEAVY dumbbells — traps are designed for heavy loads','Shrug STRAIGHT UP — pull ears to shoulders','HOLD squeeze at top for 2 FULL seconds — this is key','Slow 3 sec descent — constant tension','Slight forward lean increases upper trap activation','Use straps if grip fails — don\'t let grip limit traps'],
     mistakes:['Rolling shoulders in circles (cervical spine risk!)','Not holding the squeeze (makes it useless)','Going too light — traps need HEAVY progressive overload','Bending elbows (turns into a curl)']},
    /* — BICEP #1: Heavy compound curl — the mass builder (Biceps 1st session of the week) — */
    {name:'Barbell Curl (Strict)',sets:'4',reps:'6–8',muscles:'Biceps (both heads) — PRIMARY bicep mass builder',
     svg:`<img src="./images/barbell_curl.jpg" alt="Barbell Curl">`,
     cues:['Shoulder-width grip — EZ bar or straight','Elbows PINNED to sides — absolutely zero movement','Curl up — squeeze biceps HARD at top — hold 1 sec','3 second eccentric EVERY rep — slow descent builds size','Full extension at bottom — NO partial reps','If you swing, the weight is TOO HEAVY. Lighten it.','Strict form > heavy weight for biceps'],
     mistakes:['Swinging torso for momentum (defeats purpose)','Elbows drifting forward (front delts take over)','Partial reps — not fully extending at bottom','Going too heavy (ego > stimulus)']},
    /* — BICEP #2: Incline position = long head stretched = peak builder — */
    {name:'Incline Dumbbell Curl (45°)',sets:'3',reps:'10–12',muscles:'Biceps LONG HEAD — the peak builder (stretched position)',
     svg:`<img src="./images/db_bicep_curl.jpg" alt="Incline Dumbbell Curl">`,
     cues:['Incline bench at 45° — arms hang straight DOWN behind body','This position PRE-STRETCHES the long head (peak of bicep)','Curl up without elbows moving forward at all','Supinate (turn pinkies out) at the top for peak squeeze','4 sec eccentric — feel the stretch as arms extend','The long head in stretch = peak growth stimulus','Lighter weight than standing — this is about the STRETCH'],
     mistakes:['Elbows swinging forward (eliminates the stretch benefit)','Sitting too upright (defeats the purpose of incline)','Rushing the negative (missing growth stimulus)','Using momentum to curl up']},
    /* — BICEP #3: Hammer for brachialis — builds arm THICKNESS — */
    {name:'Cable Hammer Curl (Rope)',sets:'3',reps:'12–15',muscles:'Brachialis + Brachioradialis — arm THICKNESS and forearm tie-in',
     svg:`<img src="./images/cable_hammer_curls.jpg" alt="Cable Hammer Curl">`,
     cues:['Rope attachment on LOW cable','Neutral grip — palms face each other throughout','Elbows pinned — don\'t let them drift','Squeeze hard at top — pull rope ends apart','Cable provides constant tension (better than DB hammers)','The brachialis pushes the bicep UP — makes arms look bigger','This also builds the forearm-to-bicep tie-in'],
     mistakes:['Elbows moving forward (removes brachialis focus)','Supinating wrists (this is NEUTRAL grip only)','Using body momentum','Losing the neutral grip position']},
    /* — FOREARMS (Daily): Dead hangs for grip endurance after all the pulling — */
    {name:'Dead Hang (Overhand Grip)',sets:'3',reps:'30–60 seconds',muscles:'Forearm Flexors, Grip Endurance — builds crushing grip + forearm veins',
     svg:`<img src="./images/pullups.jpg" alt="Dead Hang">`,
     cues:['Hang from pull-up bar with overhand grip — full bodyweight','Squeeze the bar as HARD as possible — active grip','Shoulders down and back (don\'t shrug)','Hold until grip completely fails — that\'s your set','This also decompresses the spine after heavy shrugs','Progress: add weight via dip belt when 60 sec is easy'],
     mistakes:['Relaxing the grip (actively CRUSH the bar)','Shrugging shoulders up to ears','Swinging body','Giving up before true grip failure']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     WEDNESDAY — LEGS (Quads + Hamstrings + Calves)
     Evidence-based: Heavy compound → Unilateral → Quad isolation → Hip-hinge → Ham isolation → Calves
     Research: Squats + hip-hinge + isolation = complete leg development. 9 exercises max.
     ═══════════════════════════════════════════════════════════════ */
  {name:'Wednesday',tag:'Legs + Forearms',tagClass:'legs',
   focus:'Quads · Hamstrings · Glutes · Calves · Forearms',
   cardio:'5 min walk ONLY · Save all energy for legs',
   exercises:[
    /* — HEAVY COMPOUND #1: The king of ALL exercises — nothing builds legs like squats — */
    {name:'Barbell Back Squat',sets:'4',reps:'6–8',muscles:'Quads, Glutes, Hamstrings, Core, Erectors — the KING',
     svg:`<img src="./images/barbell_squat.jpg" alt="Barbell Squat">`,
     cues:['Bar on upper traps (high bar) — not neck','Feet shoulder-width, toes pointed 15–30° out','Break at hips AND knees simultaneously','Go BELOW parallel — ATG (ass to grass) if mobility allows','Drive through MID-FOOT (not just heels) — whole foot pressure','Chest stays tall, eyes forward — never look down','Brace core HARD — take a big breath, hold it during rep','This is your #1 progressive overload exercise for legs'],
     mistakes:['Knees caving inward (push them OUT over toes)','Heels rising off floor (ankle mobility issue — elevate heels)','Leaning too far forward (weak quads or tight ankles)','Not hitting depth — below parallel is NON-NEGOTIABLE','Butt wink at bottom (stop just above where spine rounds)']},
    /* — HEAVY COMPOUND #2: Allows even heavier loads without spinal compression — */
    {name:'Leg Press (High + Wide)',sets:'4',reps:'10–12',muscles:'Quads, Glutes, Hamstrings — HEAVY without spinal load',
     svg:`<img src="./images/leg_press.png" alt="Leg Press">`,
     cues:['Feet HIGH and WIDE on platform for more glute/hamstring','Lower sled until 90° knee bend — full ROM','Push through WHOLE FOOT — not just toes','Back stays FLAT against pad — never lift off','NEVER lock knees at top — stop just short','Go heavy here — no spinal compression means more plates','3 sec eccentric, explode up'],
     mistakes:['Locking knees out (serious injury risk — hyperextension)','Feet too low (excessive knee stress)','Hips lifting off pad (lower back rounds)','Partial reps — 90° knee bend minimum']},
    /* — HIP HINGE: Best hamstring + glute builder that exists — */
    {name:'Romanian Deadlift (Barbell)',sets:'4',reps:'8–10',muscles:'Hamstrings, Glutes, Erectors — #1 hamstring builder',
     svg:`<img src="./images/romanian_deadlift.png" alt="Romanian Deadlift">`,
     cues:['HINGE at hips — push butt BACK like closing a car door with your butt','Soft knee bend (15–20°) — this is NOT a squat','Bar stays TOUCHING legs the entire way down','BACK IS FLAT — neutral spine always — never round','Lower until you feel deep hamstring stretch','Squeeze GLUTES hard coming up — hips drive forward','The stretch at the bottom = where hamstrings GROW'],
     mistakes:['Rounding the lower back (this causes disc issues)','Bending knees too much (becomes a squat)','Bar drifting away from legs','Not feeling hamstrings (means you\'re squatting it)','Going too heavy too fast — feel > weight here']},
    /* — UNILATERAL: Fixes imbalances + more quad activation per leg — */
    {name:'Bulgarian Split Squat',sets:'3',reps:'8–10 each leg',muscles:'Quads, Glutes, Adductors — unilateral king',
     svg:`<img src="./images/db_lunges.jpg" alt="Bulgarian Split Squat">`,
     cues:['Rear foot elevated on bench — laces down','Front foot 2–3 feet ahead of bench','Front shin stays VERTICAL — knee tracks over toes','Lower until front thigh is below parallel','Drive up through front heel ONLY — feel quad and glute','Hold DBs at sides or goblet position','This fixes left/right imbalances like nothing else'],
     mistakes:['Standing too close to bench (knee goes way past toes)','Leaning forward (stay upright)','Back foot pushing off (front leg does ALL the work)','Not going deep enough — below parallel for full quad stretch']},
    /* — QUAD ISOLATION: Lengthened-focused leg extension for quad growth — */
    {name:'Leg Extension (Slow Eccentric)',sets:'4',reps:'12–15',muscles:'Quads (VMO teardrop + Rectus Femoris) — pure isolation',
     svg:`<img src="./images/leg_extensions.jpg" alt="Leg Extensions">`,
     cues:['Pad sits on LOWER shin, not ankles','Full extension at top — SQUEEZE quad HARD for 2 sec','4 second eccentric descent — this is key for growth','Don\'t let weight stack touch at bottom — constant tension','Point toes slightly inward for more VMO (inner quad)','Moderate weight — this is FEEL-based, not ego-based','The slow eccentric is where muscle damage happens'],
     mistakes:['Swinging/using momentum (completely defeats purpose)','Not fully extending at top','Going too heavy — this is isolation, not compound','Letting weight slam down at bottom']},
    /* — HAMSTRING ISOLATION: Lying curl is the best for biceps femoris — */
    {name:'Lying Leg Curl',sets:'4',reps:'10–12',muscles:'Hamstrings (biceps femoris focus) — best ham isolation',
     svg:`<img src="./images/lying_leg_curls.jpg" alt="Lying Leg Curl">`,
     cues:['Hips stay FLAT on pad — don\'t let them rise','Knee joint aligned with machine pivot point','Curl heel ALL the way to glutes — full contraction','Hold peak contraction 1–2 seconds','3 second eccentric — fight the weight down','Dorsiflex feet (toes toward shins) for more ham activation'],
     mistakes:['Hips rising off pad (means too heavy)','Partial range of motion at top','Dropping weight down instead of controlling it','Pointing toes (reduces hamstring activation)']},
    /* — SEATED CURL: Different angle = different hamstring activation — */
    {name:'Seated Leg Curl',sets:'3',reps:'10–12',muscles:'Hamstrings (semitendinosus) — stretch-focused angle',
     svg:`<img src="./images/seated_leg_curl.jpg" alt="Seated Leg Curl">`,
     cues:['Starting position: legs extended = hamstrings STRETCHED','This pre-stretch makes it superior for growth (lengthened training)','Curl heels under seat — full contraction','Hold squeeze 2 sec at peak','Slow 3 sec return — feel the stretch as legs extend','Lighter than lying curl — focus on the stretch stimulus'],
     mistakes:['Partial ROM — full extension AND full contraction','Using momentum','Not holding the squeeze','Seat position wrong — align knee with pivot']},
    /* — CALVES: Gastrocnemius (straight leg) — */
    {name:'Standing Calf Raises (Full ROM)',sets:'4',reps:'12–15',muscles:'Gastrocnemius (upper calf) — the main visible calf muscle',
     svg:`<img src="./images/standing_calf_raises.jpg" alt="Standing Calf Raises">`,
     cues:['Full ROM is EVERYTHING for calves — go all the way DOWN and UP','Lower heel BELOW the step — deep stretch for 2 sec','Rise ALL the way up on balls of feet — peak contraction 2 sec','Every rep: 2 sec stretch + 2 sec squeeze = time under tension','Calves grow from TIME UNDER TENSION, not from fast bouncing','Go moderately heavy — calves can handle load','Straight legs = gastrocnemius (the big diamond)'],
     mistakes:['Bouncing at the bottom (zero stimulus)','Partial range — FULL stretch to FULL contraction','Going too fast — calves need SLOW reps','Not holding the stretch at the bottom']},
    /* — CALVES: Soleus (bent leg) — builds lower calf width — */
    {name:'Seated Calf Raise',sets:'4',reps:'15–20',muscles:'Soleus (lower/inner calf) — adds WIDTH that shows from the side',
     svg:`<img src="./images/seated_calf_raise.jpg" alt="Seated Calf Raise">`,
     cues:['Knees bent = soleus takes over from gastrocnemius','Full stretch DOWN — feel deep pull in lower calf','Press up all the way — peak contraction squeeze','2 sec hold at top, 3 sec stretch at bottom','Higher reps (15–20) because soleus is slow-twitch dominant','The soleus makes your calf look THICK from the side view'],
     mistakes:['Bouncing through reps (the #1 calf growth killer)','Partial range of motion','Rushing — soleus needs slow, controlled TUT','Not going heavy enough — progressive overload still matters']},
    /* — FOREARMS (Daily): Plate pinch for thumb & grip strength — */
    {name:'Plate Pinch Hold',sets:'3',reps:'30–45 seconds',muscles:'Forearm Extensors, Thumb Strength, Grip — builds pinch grip & forearm density',
     svg:`<img src="./images/farmers_walk.jpg" alt="Plate Pinch">`,
     cues:['Pinch 2 plates together (smooth sides OUT) with fingers + thumb','Hold at your side — arm straight','Squeeze as hard as possible — don\'t let plates slip','Builds the extensors and thumb muscles most exercises miss','Progress: add more plates or switch to heavier ones','The forearm pump from this is INSANE'],
     mistakes:['Using ridged/easy-grip plates (smooth sides out for challenge)','Gripping too close to edge','Not going to true failure','Resting plates on thigh']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     THURSDAY — SHOULDERS + ABS
     Evidence-based: Heavy press → SIDE DELT priority (the width builder) → Rear delt → Abs
     Research: Side delts are KEY for wide shoulders. Front delts already get worked from all pressing.
     Front raises are REMOVED — anterior delts get 15+ sets/week from chest + shoulder pressing already.
     ═══════════════════════════════════════════════════════════════ */
  {name:'Thursday',tag:'Shoulders & Abs + Forearms',tagClass:'push',
   focus:'Side Delts (WIDTH) · Rear Delts (3D) · Overhead Press · Abs · Forearms',
   cardio:'Cycling · 8 min · Light resistance · Active recovery',
   exercises:[
    /* — HEAVY COMPOUND PRESS: The #1 overhead strength builder — */
    {name:'Seated Dumbbell Shoulder Press',sets:'4',reps:'6–10',muscles:'All 3 Deltoid heads, Triceps — primary overhead mass builder',
     svg:`<img src="./images/seated_shoulder_press.png" alt="Seated DB Shoulder Press">`,
     cues:['Back flat against pad — no arching','Start DBs at ear level, palms forward','Press UP and slightly IN — DBs converge at top','Don\'t lock elbows at very top — constant tension','3 sec eccentric (lower slowly) — don\'t drop','Control the weight — no momentum','This is your main progressive overload exercise for shoulders'],
     mistakes:['Back arching off pad (lower back injury risk)','Pressing DBs apart (lateral) instead of up','Going behind the head (shoulder impingement)','Using momentum/bounce at bottom','Too heavy = form breakdown and injury']},
    /* — SIDE DELT #1: The single most important exercise for wide shoulders — */
    {name:'Dumbbell Lateral Raises (Slow Eccentric)',sets:'4',reps:'12–15',muscles:'Side (Lateral) Deltoids — THE width builder. Priority exercise.',
     svg:`<img src="./images/lateral_raises.png" alt="Dumbbell Lateral Raises">`,
     cues:['Raise to shoulder height ONLY — not above','Lead with ELBOWS, not hands (imagine pouring water from a jug)','Slight elbow bend (15°) maintained throughout','Lean forward 10° — takes traps out of it','4 sec eccentric EVERY rep — slow descent is where growth happens','Pinky HIGHER than thumb at the top (internal rotation)','LIGHT weight — if you swing, it\'s too heavy. Side delts are SMALL.'],
     mistakes:['Raising above shoulder height (traps take over)','Using momentum/body swing (defeats the purpose)','Too heavy — #1 mistake. Side delts respond to TIME UNDER TENSION, not load','Shrugging up (traps stealing from delts)','Standing too upright (lean forward slightly)']},
    /* — SIDE DELT #2: Cable provides tension in STRETCHED position (bottom) where DBs have zero tension — */
    {name:'Cable Lateral Raise (Behind Body)',sets:'3',reps:'12–15 each arm',muscles:'Side Delts — constant tension including at stretch',
     svg:`<img src="./images/cable_lateral_raise.jpg" alt="Cable Lateral Raise">`,
     cues:['Cable at lowest position — stand sideways','Cable passes BEHIND your body (not in front) — this increases stretch','Raise arm to shoulder height — no higher','Constant cable tension = stimulus even at bottom (unlike DBs)','Slow 3 sec eccentric — fight the cable down','This fills the gap where dumbbells are weakest (bottom of ROM)','Lean slightly away from cable for even more stretch'],
     mistakes:['Leaning away too much (body english)','Raising above shoulder height (traps)','Cable in FRONT of body (less stretch)','Using body momentum']},
    /* — REAR DELT: Critical for 3D look and shoulder health — */
    {name:'Reverse Pec Deck (Rear Delt Fly)',sets:'4',reps:'15–20',muscles:'Rear Deltoids, Rhomboids — the 3D shoulder look',
     svg:`<img src="./images/rear_delt_fly.jpg" alt="Rear Delt Fly">`,
     cues:['Sit facing the machine pad','Hands at shoulder height — neutral or pronated grip','Drive elbows BACK — lead with elbows, not hands','SQUEEZE rear delts at peak — hold 2 seconds','Slow 3 sec return — constant tension','Light weight — rear delts are SMALL, they need precision','This creates the "3D" roundness when viewed from the side'],
     mistakes:['Using traps to shrug up','Going too heavy (traps and rhomboids take over)','Arms fully straight (should have slight bend)','Not holding the squeeze at peak']},
    /* — SIDE DELT #3: Machine laterals for the final metabolic pump — */
    {name:'Machine Lateral Raise (or DB Partial Raises)',sets:'3',reps:'15–20 (partials OK)',muscles:'Side Delts — metabolic stress finisher for WIDTH',
     svg:`<img src="./images/lateral_raises.png" alt="Machine Lateral Raise">`,
     cues:['If no machine: use lighter DBs and do partial reps (bottom to 45°)','Partials in the stretched position are extremely effective','Burn = metabolic stress = growth signal','Keep tension constant — don\'t rest at bottom','This is a BURNOUT — push to failure + 5 more','Total side delt volume today: 10 sets — optimal per research'],
     mistakes:['Going too heavy (defeats the metabolic purpose)','Resting at the bottom between reps','Stopping at mild burn — push THROUGH the burn','Shrugging traps up']},
    /* — ABS: Evidence-based order — loaded movements before bodyweight — */
    {name:'Hanging Leg Raises (Straight Leg)',sets:'3',reps:'10–15',muscles:'Lower Abs, Hip Flexors, Core — hardest ab exercise',
     svg:`<img src="./images/hanging_leg_raises.jpg" alt="Hanging Leg Raises">`,
     cues:['Dead hang from pull-up bar — full extension','Raise STRAIGHT legs to 90° or HIGHER (toes to bar if possible)','POSTERIOR PELVIC TILT at top — curl pelvis up','Control descent — 3 sec negative, zero swinging','Engage core BEFORE lifting legs (draw navel in)','The pelvic tilt at top is what makes this an AB exercise, not hip flexor'],
     mistakes:['Using momentum/swinging','Bending knees too much (makes it too easy)','Not curling pelvis (just doing hip flexion)','Dropping legs fast (zero eccentric stimulus)']},
    {name:'Ab Wheel Rollout',sets:'3',reps:'8–12',muscles:'Entire Core, Serratus, Lats — anti-extension king',
     svg:`<img src="./images/ab_roller.jpg" alt="Ab Roller">`,
     cues:['Start on knees, hands on roller','TUCK pelvis (posterior tilt) — squeeze glutes','Roll out slowly — arms extending, spine stays NEUTRAL','Go only as far as you can WITHOUT lower back sagging','Pull back using ABS — think "crunch" on the return','Breathe out hard on the way back','Progress: knees → toes when strong enough'],
     mistakes:['Lower back sagging/arching (spine compression)','Going too far out (losing control)','Using hip flexors to pull back','Holding breath']},
    {name:'Cable Crunches',sets:'3',reps:'12–15',muscles:'Upper Abs (Rectus Abdominis) — the "six-pack" muscle',
     svg:`<img src="./images/cable_crunches.jpg" alt="Cable Crunches">`,
     cues:['Kneel facing cable — rope behind head','Crunch by CURLING spine — round your back','Elbows drive TOWARD knees','Squeeze abs HARD at bottom — hold 1 sec','Rise slowly — maintain constant cable tension','The crunch comes from SPINAL FLEXION, not hip flexion','Think: ribs toward pelvis'],
     mistakes:['Pulling with arms (arms just hold the rope)','Sitting back on heels (hip flexion, not spinal)','Not rounding spine enough (missing the contraction)','Too heavy = loss of mind-muscle connection']},
    /* — FOREARMS (Daily): Reverse wrist curls for extensor development — */
    {name:'Reverse Wrist Curls (Dumbbell)',sets:'3',reps:'15–20',muscles:'Forearm Extensors — builds the TOP of forearm for balanced development',
     svg:`<img src="./images/reverse_curls.jpg" alt="Reverse Wrist Curls">`,
     cues:['Forearms on thighs — palms face DOWN (overhand)','Curl wrist UP against gravity — squeeze extensors at top','These are harder than regular wrist curls — use lighter weight','Builds the top of the forearm (brachioradialis area)','Prevents wrist imbalances and tendinitis','Slow controlled reps — 2 sec up, 2 sec down'],
     mistakes:['Going too heavy (extensor muscles are smaller)','Moving the forearm (isolate the wrist only)','Rushing through reps','Skipping these — extensors prevent injury']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     FRIDAY — BACK (Heavy Pull Day 2)
     Evidence-based: Heavy compound → Lat isolation → Stretch focus → Forearms
     Research: Back trained 2×/week (Tue + Fri). Biceps moved to Tue + Sat for optimal 72hr rest.
     Different angles/exercises from Tuesday for complete development
     ═══════════════════════════════════════════════════════════════ */
  {name:'Friday',tag:'Back (Heavy) + Forearms',tagClass:'pull',
   focus:'Lats (width) · Mid Back (thickness) · Posterior Chain · Forearms',
   cardio:'Rowing machine · 8 min · Light pace — activates pulling muscles',
   exercises:[
    /* — HEAVY COMPOUND #1: The ultimate posterior chain builder — */
    {name:'Conventional Deadlift',sets:'4',reps:'5 (heavy)',muscles:'Entire Posterior Chain — Erectors, Glutes, Hamstrings, Traps, Lats, Core',
     svg:`<img src="./images/stiff_leg_deadlift.jpg" alt="Conventional Deadlift">`,
     cues:['Bar over MID-FOOT — shins 1 inch from bar','Hip hinge back — grab bar, then drop hips until shins touch bar','Back FLAT — chest up, lats engaged (protect the bar)','Drive through WHOLE foot — push the floor away','Bar stays TOUCHING legs the entire pull — scrape shins','Lock out at top — shoulders back, hips through, squeeze glutes','Reset every rep from dead stop — no bouncing','This builds raw strength like nothing else'],
     mistakes:['Rounding the back (MAJOR disc injury risk)','Jerking the bar (pull slack out first, then drive)','Hips shooting up before shoulders (means too heavy)','Bar drifting away from body (use lats to keep it close)','Bouncing reps off floor (reset each rep)']},
    /* — ROW VARIATION: Different from Tuesday (T-bar for thickness) — */
    {name:'T-Bar Row (Landmine or Machine)',sets:'4',reps:'8–10',muscles:'Mid Back thickness, Lats, Rhomboids — heavy rowing',
     svg:`<img src="./images/bent_over_db_row.jpg" alt="T-Bar Row">`,
     cues:['Chest against pad (machine) or bent 45° (landmine)','Close/neutral grip — targets thickness more','Pull to lower chest/upper abdomen','SQUEEZE shoulder blades together HARD at top — hold 2 sec','3 sec eccentric — feel the full lat stretch at bottom','Go heavy — this is a mass builder','Different grip angle from Tuesday rows targets different fibers'],
     mistakes:['Rounding lower back (if free-standing)','Using momentum to jerk weight up','Not squeezing at the top (missing the contraction)','Too much upright lean (becomes a shrug)']},
    /* — LAT ISOLATION: No bicep involvement — pure lat work — */
    {name:'Straight-Arm Lat Pulldown',sets:'3',reps:'12–15',muscles:'Lats ISOLATION — zero bicep involvement. Pure lat.',
     svg:`<img src="./images/lat_pulldown.png" alt="Straight-Arm Lat Pulldown">`,
     cues:['Stand facing cable — rope or straight bar, high pulley','Arms nearly straight (slight 10° bend only)','Pull bar down to thighs in wide ARC motion','Use LATS — think "push elbows into pockets" without bending','Squeeze lats HARD at bottom — hold 1 sec','Slow controlled return — feel lat stretch at top','This pre-exhausts lats without fatiguing biceps'],
     mistakes:['Bending elbows too much (becomes a pushdown/row)','Using momentum/body rocking','Not feeling lats — means you\'re using arms','Going too heavy']},
    /* — STRETCH-FOCUSED: Loaded lat stretch drives maximum hypertrophy — */
    {name:'Dumbbell Pullover (Deep Stretch)',sets:'3',reps:'12',muscles:'Lats in deepest stretch, Serratus, Long head tricep',
     svg:`<img src="./images/db_pullover.jpg" alt="Dumbbell Pullover">`,
     cues:['Lie across bench — only upper back on bench','HIPS DROPPED below bench level — this increases stretch','Both hands hold ONE dumbbell overhead','Lower behind head — go as DEEP as mobility allows','The stretch at the bottom = where lats grow MOST','Pull back using LATS (not chest/arms)','Moderate weight — feel > load'],
     mistakes:['Hips too high (reduces lat stretch)','Not going deep enough (missing the key stimulus)','Using too heavy weight (losing stretch quality)','Bending elbows excessively (becomes tricep work)']},
    /* — FOREARMS (Daily): Towel grip hangs for thick forearms — */
    {name:'Towel Hang (or Thick Bar Hold)',sets:'3',reps:'20–40 seconds',muscles:'Forearm Flexors, Grip Strength — thick grip = bigger forearms',
     svg:`<img src="./images/pullups.jpg" alt="Towel Hang">`,
     cues:['Drape a towel over pull-up bar — grip the towel ends','Hang with full bodyweight — thick grip forces forearms to work 2× harder','Squeeze the towel HARD — don\'t let it slip','This builds grip strength that transfers to all pulling exercises','If no towel: use Fat Gripz or wrap a towel around dumbbells','Hold until complete grip failure'],
     mistakes:['Using a thin towel (use a thick gym towel)','Not squeezing hard enough','Giving up too early — push to failure','Swinging or kipping']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     SATURDAY — FULL REST
     Recovery day: muscles repair and grow. Eat protein, sleep well.
     ═══════════════════════════════════════════════════════════════ */
  {name:'Saturday',tag:'Full Rest',tagClass:'rest',rest:true,
   restMsg:'Your body has completed 5 intense training days. Today your muscles repair micro-tears and come back BIGGER and STRONGER. Rest is when growth ACTUALLY happens — don\'t skip it. Tomorrow you\'ll crush a 2-hour arm session fully recovered.',
   restTips:['Sleep 8+ hours — GH peaks during deep sleep','Keep eating protein (130g+) even on rest days','Light 20-min walk promotes blood flow and recovery','Hydrate well — 3L water minimum','Foam roll and stretch any sore areas','Cold shower → improved recovery and vascularity','Meal prep for the week if needed']},

  /* ═══════════════════════════════════════════════════════════════
     SUNDAY — ARMS & FOREARMS (2-Hour Session — Biceps 2nd session of the week)
     Evidence-based: Alternate bi/tri supersets for blood flow → Forearm finisher
     Research: Arms grow from VOLUME + VARIETY of angles. 2× bicep frequency (Tue + Sun).
     2 hours allows higher volume with full rest between sets for maximum strength.
     ═══════════════════════════════════════════════════════════════ */
  {name:'Sunday',tag:'Arms & Forearms (2hr)',tagClass:'core',
   focus:'Biceps (peak + width) · Triceps (all 3 heads) · Forearms · 2-HOUR SESSION',
   cardio:'5 min light cycling — get blood flowing to arms before destroying them',
   exercises:[
    /* — HEAVY TRICEP COMPOUND: Heaviest tricep movement — do it first while fresh — */
    {name:'Close-Grip Bench Press',sets:'4',reps:'8–10',muscles:'Triceps (all 3 heads) — the heaviest tricep compound',
     svg:`<img src="./images/close_grip_bench.jpg" alt="Close-Grip Bench Press">`,
     cues:['Hands SHOULDER-WIDTH (not closer — wrist strain)','Elbows tucked tight to ribcage — this shifts load to triceps','Lower bar to lower chest — touch and press','Lock out HARD at top — full tricep contraction','Think "press and squeeze triceps" — not just push','Go heavy here — triceps respond to progressive overload on compounds'],
     mistakes:['Grip too narrow (wrist strain + instability)','Flaring elbows out (becomes regular bench)','Bouncing off chest (lose tension)','Not locking out at top (missing contraction)']},
    /* — HEAVY BICEP COMPOUND: The EZ bar strict curl — bicep mass builder — */
    {name:'EZ-Bar Curl (Strict)',sets:'4',reps:'8–10',muscles:'Biceps (both heads) — the mass builder. EZ bar = wrist comfort.',
     svg:`<img src="./images/barbell_curl.jpg" alt="EZ-Bar Curl">`,
     cues:['EZ bar — inner angled grip (shoulder width)','Back against wall or post for ZERO cheating','Elbows pinned to torso — don\'t let them move forward','Full curl to peak → squeeze HARD 1 sec → 3 sec negative','Full extension at bottom — no partial reps','Wall support = impossible to cheat = maximum bicep stimulus','Go heavier than Tuesday — you\'re fully rested from yesterday'],
     mistakes:['Swinging body (wall eliminates this)','Elbows drifting forward (front delts steal the work)','Partial reps at bottom (missing stretch)','Going too heavy (form > weight for biceps)']},
    /* — TRICEP: Long head in stretch (crosses shoulder joint) — */
    {name:'Overhead EZ-Bar Extension (Skull Crusher variation)',sets:'4',reps:'10–12',muscles:'Triceps (long head emphasis) — stretch at the bottom is key',
     svg:`<img src="./images/skullcrushers.jpg" alt="Overhead Extension">`,
     cues:['Lie on flat bench — EZ bar overhead','Lower bar BEHIND head (not to forehead) — get full long head stretch','Elbows point at ceiling — they don\'t move','The key: lower BEHIND head for maximum long head stretch','Extend fully — lock out and squeeze triceps HARD','This hits the long head harder than standard skull crushers','3 sec eccentric into the stretch position'],
     mistakes:['Lowering to forehead only (less long head stretch)','Elbows flaring outward','Not getting full stretch behind head','Using momentum to press up']},
    /* — BICEP: Preacher for short head (peak) — supported = zero cheating — */
    {name:'Preacher Curl (EZ or DB)',sets:'4',reps:'10–12',muscles:'Biceps SHORT HEAD — builds the PEAK shape',
     svg:`<img src="./images/preacher_curls.jpg" alt="Preacher Curls">`,
     cues:['Armpits rest on TOP of the pad — fully supported','Arms FULLY extended at bottom — deep bicep stretch','Curl up to about 120° — NOT to shoulder (tension drops)','The pad eliminates ALL cheating — pure bicep work','Hold squeeze 1 sec at top, 3 sec negative','This targets the short head (inner bicep) for PEAK shape','Don\'t go too heavy — the stretch at bottom is risky if ego lifting'],
     mistakes:['Not extending fully at bottom (missing stretch)','Curling past 120° (loses tension on bicep)','Lifting elbows off pad (cheating)','Too heavy (bicep tear risk in stretched position)']},
    /* — TRICEP: Rope pushdown — lateral head (the "horseshoe") — */
    {name:'Tricep Rope Pushdown (Lean Forward)',sets:'4',reps:'12–15',muscles:'Tricep LATERAL HEAD — the "horseshoe" visible from behind',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown">`,
     cues:['Lean forward 30° from hips — this increases lateral head activation','Elbows PINNED to ribs — non-negotiable','At bottom: SPREAD rope ends apart + PRONATE (pinkies out)','Full lockout every rep — squeeze the horseshoe','3 sec eccentric — fight the cable back up','Leaning forward is the KEY CUE that most people miss','Moderate weight — feel the lateral head burn'],
     mistakes:['Standing upright (less lateral head, more long head)','Elbows drifting forward','Not spreading rope at bottom','Body rocking for momentum']},
    /* — BICEP: Spider curls — constant tension, zero momentum possible — */
    {name:'Spider Curls (Incline Bench)',sets:'3',reps:'12–15',muscles:'Biceps — constant tension throughout entire ROM. Impossible to cheat.',
     svg:`<img src="./images/spider_curls.jpg" alt="Spider Curls">`,
     cues:['Lie CHEST-DOWN on incline bench (45–60°)','Arms hang STRAIGHT down — perpendicular to floor','Curl up — gravity works against you the ENTIRE time','At peak: squeeze so hard your bicep cramps','The unique angle = no dead spot in the movement','This is the best "pump" exercise for biceps','3 sec eccentric every rep — max time under tension'],
     mistakes:['Moving elbows (they stay locked in space)','Using momentum (impossible if done right)','Bench too flat (reduces the gravity advantage)','Going too heavy (this is precision work)']},
    /* — TRICEP: Dips — heavy compound stretch on long head — */
    {name:'Weighted Dips (Upright — Tricep Focus)',sets:'4',reps:'8–12',muscles:'Triceps (all heads), Lower Chest — heavy compound with deep stretch',
     svg:`<img src="./images/tricep_dips.jpg" alt="Dips">`,
     cues:['UPRIGHT torso = more tricep focus','Lower until upper arm is parallel to floor (90° elbow)','Drive up through palms — lock out HARD at top','Add weight belt when bodyweight >12 reps easily','Shoulder blades down and back throughout','2 hours means you can add this extra compound — take full rest between sets'],
     mistakes:['Going too deep past 90° (shoulder impingement)','Leaning too far forward (shifts to chest)','Kipping or swinging','Flaring elbows too wide']},
    /* — BICEP: Concentration curl — peak contraction king — */
    {name:'Concentration Curl (Seated)',sets:'3',reps:'10–12 each arm',muscles:'Biceps PEAK — highest EMG activation of any curl (Boeckh-Behrens study)',
     svg:`<img src="./images/db_bicep_curl.jpg" alt="Concentration Curl">`,
     cues:['Sit on bench — elbow braced against inner thigh','This isolation eliminates ALL momentum — pure bicep','Curl up slowly — SQUEEZE at top for 2 full seconds','Supinate hard at the top — turn pinky OUT','4 sec negative EVERY rep — this builds the peak','Research shows this has the HIGHEST bicep EMG of any curl','The mind-muscle connection here is unmatched'],
     mistakes:['Swinging the dumbbell (elbow stays planted on thigh)','Not squeezing at the top','Rushing the negative (the eccentric IS the growth)','Using too heavy weight (precision > load)']},
    /* — TRICEP: Kickbacks — underrated for lateral head peak contraction — */
    {name:'Cable Tricep Kickback',sets:'3',reps:'12–15 each arm',muscles:'Triceps (lateral + medial head) — peak contraction at lockout',
     svg:`<img src="./images/tricep_pushdown.png" alt="Cable Kickback">`,
     cues:['Cable at low position — single handle','Hinge forward 90° — upper arm parallel to floor','Extend arm FULLY behind you — lock out completely','The peak contraction at full extension is the MONEY','Hold lockout 1–2 seconds — squeeze hard','Cable > dumbbell because tension stays at peak','This carves detail into the tricep'],
     mistakes:['Upper arm dropping (must stay parallel to floor)','Not locking out fully (missing the peak contraction)','Swinging the weight','Standing too upright']},
    /* — BICEP: Cross-body hammer — brachialis for arm WIDTH — */
    {name:'Cross-Body Hammer Curl',sets:'3',reps:'10–12 each arm',muscles:'Brachialis + Brachioradialis — arm WIDTH builder',
     svg:`<img src="./images/hammer_curls.png" alt="Hammer Curls">`,
     cues:['Neutral grip (palms face in) — curl ACROSS body toward opposite shoulder','This cross-body angle hits brachialis MORE than standard hammer','The brachialis sits UNDER the bicep — when it grows, it pushes bicep UP','Slow controlled movement — no swinging','This builds the forearm-to-bicep tie-in (the "vein highway")','Light-moderate weight — feel the brachialis working'],
     mistakes:['Going straight up instead of across body','Swinging the upper arm','Rotating the wrist (must stay neutral)','Using momentum']},
    /* — TRICEP: Overhead single-arm extension — medial head finisher — */
    {name:'Single-Arm Overhead DB Extension',sets:'3',reps:'12–15 each arm',muscles:'Triceps (long + medial head) — unilateral for balanced arms',
     svg:`<img src="./images/overhead_tricep_extension.jpg" alt="Overhead DB Extension">`,
     cues:['One DB overhead — single arm','Lower behind head — full long head stretch','Elbow points at ceiling — don\'t let it flare','Extend fully — squeeze at top','This fixes left/right tricep imbalances','Lighter weight — focus on the stretch and squeeze','With 2 hours you can afford this extra isolation work'],
     mistakes:['Elbow flaring outward','Not getting full stretch behind head','Arching lower back','Using too much weight']},
    /* — FOREARMS: Reverse curls — the #1 forearm vein exercise — */
    {name:'Reverse Curls (EZ Bar)',sets:'3',reps:'15–20',muscles:'Brachioradialis + Forearm Extensors — THE vein builder',
     svg:`<img src="./images/reverse_curls.jpg" alt="Reverse Curls">`,
     cues:['Overhand grip (palms face DOWN) on EZ bar','Elbows pinned to sides — strict form','Curl up — feel the top of your forearm working','This is THE #1 exercise for forearm veins and size','Slow 3 sec eccentric — maximize time under tension','Light weight + high reps — forearms are endurance muscles','The vein that runs along the top of your forearm grows from this'],
     mistakes:['Going too heavy (wrist strain and poor form)','Using body swing','Elbows moving forward','Wrist bending backward']},
    /* — FOREARMS: Farmer's walk — grip, traps, core, veins — */
    {name:'Farmer\'s Walk (Heavy)',sets:'3',reps:'40–60 seconds',muscles:'Forearms, Grip Strength, Traps, Core — vascularity builder',
     svg:`<img src="./images/farmers_walk.jpg" alt="Farmer Walk">`,
     cues:['Grab the HEAVIEST dumbbells you can hold for 40+ seconds','Walk slowly with perfect posture — chest tall, shoulders back','CRUSH the handles — grip as hard as possible','This builds freaky grip strength + forearm vascularity','Core stays tight — don\'t lean to either side','When you can\'t hold anymore, that\'s the set','Also builds traps passively (heavy load on shoulders)'],
     mistakes:['Going too light (this should be HEAVY)','Hunching shoulders forward','Walking too fast (not the point)','Letting grip relax — CRUSH the handles']},
    /* — FOREARMS: Wrist work — direct forearm size — */
    {name:'Behind-Back Wrist Curls (Barbell)',sets:'3',reps:'20–25',muscles:'Forearm Flexors — direct SIZE builder',
     svg:`<img src="./images/wrist_curls.jpg" alt="Wrist Curls">`,
     cues:['Stand — barbell held behind your back','Let bar roll to fingertips, then curl wrist UP','This behind-back angle = more range of motion than seated','High reps (20+) — forearm flexors are slow-twitch dominant','Squeeze at top, full stretch at bottom','The "roll to fingertips" technique adds finger flexor work too','Burns like fire — that\'s the growth stimulus'],
     mistakes:['Moving the forearm (only the WRIST curls)','Too heavy (wrist injury risk)','Rushing through reps (slow = growth)','Stopping when it burns (push through it)']},
    /* — FOREARMS: Wrist roller for the ultimate forearm pump finisher — */
    {name:'Wrist Roller (or Towel Wringing)',sets:'3',reps:'2–3 rolls up + down',muscles:'ALL forearm muscles — the ultimate forearm pump finisher',
     svg:`<img src="./images/wrist_curls.jpg" alt="Wrist Roller">`,
     cues:['Arms extended in front — roll weight UP by rotating wrists','Then reverse — roll it DOWN slowly','This hits EVERY forearm muscle simultaneously','If no wrist roller: wring a thick wet towel for same effect','The pump from this is unmatched — veins will pop','Perfect finisher for a 2-hour arm session'],
     mistakes:['Arms dropping (keep them parallel to floor)','Rolling too fast (slow = more tension)','Using too much weight (form first)','Not doing both directions (up AND down)']}
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
