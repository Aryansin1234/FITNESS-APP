const DAYS = [
  /* ═══════════════════════════════════════════════════════════════
     MONDAY — CHEST + TRICEPS (Heavy Push)
     Heavy compounds for chest mass + tricep isolation
     ═══════════════════════════════════════════════════════════════ */
  {name:'Monday',tag:'Chest & Triceps',tagClass:'push',
   focus:'Chest (Upper + Lower + Inner) · Triceps (all 3 heads)',
   cardio:'Treadmill · 10 min · Brisk walk 5.5–6 km/h · Incline 3%',
   exercises:[
    {name:'Flat Dumbbell Press',sets:'4',reps:'8–10',muscles:'Mid Chest, Front Delts, Triceps',
     svg:`<img src="./images/flat_dumbbell_press.png" alt="Flat Dumbbell Press" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Elbows at 45° — not flared wide','Slight arch in upper back, shoulder blades pinched','Feet flat on floor, drive through heels','Wrists straight — never bent back','Lower to full chest stretch, then explode up','3 sec lower, 1 sec press up'],
     mistakes:['Flaring elbows 90° (shoulder stress)','Bouncing off chest — no momentum','Half reps — full range of motion only','Letting wrists bend backward']},
    {name:'Incline Dumbbell Press',sets:'4',reps:'8–10',muscles:'Upper Chest, Clavicular Head',
     svg:`<img src="./images/incline_dumbbell_press.png" alt="Incline Dumbbell Press" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Bench at 30–45° — not steeper','Squeeze upper chest hard at top','Elbows tucked 45°, not flared','Raise seat slightly to prevent sliding','Full stretch at the bottom — feel the upper chest open'],
     mistakes:['Bench angle above 60° (becomes shoulder press)','Not retracting shoulder blades','Going too heavy too soon']},
    {name:'Dumbbell Flyes',sets:'3',reps:'12',muscles:'Chest (inner + sternal), Pec stretch',
     svg:`<img src="./images/db_flyes.jpg" alt="Dumbbell Flyes" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Slight bend in elbows — never straighten','Open arms wide until deep chest stretch','Squeeze pecs together at the top like hugging','Control the descent — 3 seconds down','Think "hugging a tree" arc motion'],
     mistakes:['Arms too straight (elbow joint stress)','Going too heavy — this is a stretch movement','Not getting full stretch at the bottom']},
    {name:'Cable Crossover',sets:'3',reps:'12–15',muscles:'Inner Chest, Lower Chest definition',
     svg:`<img src="./images/cable_crossover.jpg" alt="Cable Crossover" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Step forward, slight forward lean','Hands meet below chest level for lower chest','Squeeze and hold 1 second at the cross','Full stretch at back — feel chest open wide','Light weight — focus on the squeeze'],
     mistakes:['Standing too upright','Using momentum instead of chest','Not crossing hands enough at the bottom']},
    {name:'Tricep Rope Pushdown',sets:'3',reps:'12',muscles:'Lateral + Medial Tricep heads',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Elbows locked tight to torso — key cue','Lean forward slightly at the hip','Spread rope ends apart at the bottom','Full extension — lock out elbows at bottom','Control the cable back up slowly'],
     mistakes:['Elbows flaring out to the sides','Using shoulder/body momentum','Not achieving full extension at bottom']},
    {name:'Overhead Tricep Extension',sets:'3',reps:'12',muscles:'Triceps Long Head (biggest head)',
     svg:`<img src="./images/overhead_tricep_extension.jpg" alt="Overhead Tricep Extension" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Elbows pointing FORWARD — not flaring out','Lower DB behind head until 90° — feel the stretch','Full lockout extension at the top','Core tight — no lower back arch','Both hands grip one dumbbell securely'],
     mistakes:['Elbows flaring wide to the sides','Partial range — missing the stretch','Back arching off the seat pad']},
    {name:'Push-Ups (Burnout Finisher)',sets:'2',reps:'To failure',muscles:'Chest, Triceps, Core',
     svg:`<img src="./images/push_ups.png" alt="Push-Ups (Finisher)" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Body is a straight plank — head to heel','Hands slightly wider than shoulders','Chest must touch or graze the floor','Squeeze core and glutes throughout','Go until absolute failure — this finishes the chest'],
     mistakes:['Hips sagging downward','Only going halfway down','Stopping before true failure']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     TUESDAY — BACK + TRAPS (Heavy Pull)
     Build the V-taper: wide lats, thick back, cobra traps
     ═══════════════════════════════════════════════════════════════ */
  {name:'Tuesday',tag:'Back & Traps',tagClass:'pull',
   focus:'Lats (width) · Mid Back (thickness) · Traps · Rear Delts',
   cardio:'Rowing machine · 10 min · Light pace — great back warm-up',
   exercises:[
    {name:'Wide-Grip Lat Pulldown',sets:'4',reps:'10–12',muscles:'Lats (width), Teres Major, Biceps',
     svg:`<img src="./images/lat_pulldown.png" alt="Wide-Grip Lat Pulldown" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Drive elbows DOWN toward your hip pockets','Pull bar to upper chest — NOT chin/neck','Lean back only 15° — not 45°','Arms fully extended at top (full stretch)','Squeeze lats hard at the bottom position'],
     mistakes:['Pulling bar behind the neck (injury risk!)','Excessive backward lean (becomes a row)','Shrugging shoulders up at the top']},
    {name:'Seated Cable Row',sets:'4',reps:'10–12',muscles:'Mid Back, Rhomboids, Lower Traps',
     svg:`<img src="./images/seated_cable_row.png" alt="Seated Cable Row" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Pull handle to belly button area','Sit upright — chest tall, no slouching','Pinch shoulder blades together at peak','Zero torso rocking back and forth','Full stretch forward between reps'],
     mistakes:['Rocking the torso for momentum','Pulling too high (to chest)','Slouching forward on the return']},
    {name:'One-Arm Dumbbell Row',sets:'3',reps:'10 each side',muscles:'Lats, Rhomboids, Rear Delts',
     svg:`<img src="./images/one_arm_row.png" alt="One-Arm Dumbbell Row" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Back parallel to floor — like a table top','Pull elbow toward hip, not toward ear','Don\'t rotate your spine at all','Full arm hang at the bottom each rep','Retract shoulder blade at peak contraction'],
     mistakes:['Rotating spine — twisting the back','Pulling too high (to shoulder level)','Rounding the back — major injury risk']},
    {name:'Cable Face Pulls',sets:'3',reps:'15',muscles:'Rear Delts, Rotator Cuff, Mid Traps',
     svg:`<img src="./images/cable_face_pulls.png" alt="Cable Face Pulls" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Cable at eye / forehead height','Elbows out — parallel to ground','Pull rope to FOREHEAD (not chin)','Separate hands apart at peak — external rotation','Light weight — shoulder health exercise too'],
     mistakes:['Pulling to chin (traps take over)','Elbows dropping below shoulder height','Too much weight = form breakdown']},
    {name:'Dumbbell Shrugs',sets:'4',reps:'15',muscles:'Upper Traps — builds the "yoke"',
     svg:`<img src="./images/db_shrugs.jpg" alt="Dumbbell Shrugs" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Heavy dumbbells — traps respond to heavy loads','Shrug STRAIGHT UP — ears to shoulders','Hold squeeze at the top for 2 seconds','Slow descent — don\'t just drop','NO head rolling or circular motion'],
     mistakes:['Rolling shoulders (injury risk!)','Not holding the squeeze at the top','Going too light — traps need heavy weight']},
    {name:'Close-Grip Lat Pulldown',sets:'3',reps:'12',muscles:'Lower Lats, Biceps, Rhomboids',
     svg:`<img src="./images/close_grip_lat_pulldown.jpg" alt="Close-Grip Lat Pulldown" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Use V-bar or narrow handle attachment','Pull to upper chest, lean back 15°','Squeeze lats at bottom — hold 1 sec','Full stretch at top — arms fully extended','Focus on lower lat squeeze'],
     mistakes:['Pulling too far back (becomes a row)','Not extending fully at top','Using too much bicep']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     WEDNESDAY — LEGS (Quad-focused + Glutes)
     Build great looking legs: sweeping quads, round glutes
     ═══════════════════════════════════════════════════════════════ */
  {name:'Wednesday',tag:'Legs (Quads)',tagClass:'legs',
   focus:'Quads (sweep + tear-drop) · Glutes · Calves',
   cardio:'5 min walk ONLY · Legs are getting destroyed today!',
   exercises:[
    {name:'Leg Press Machine',sets:'4',reps:'10–12',muscles:'Quads, Glutes, Hamstrings',
     svg:`<img src="./images/leg_press.png" alt="Leg Press Machine" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Feet shoulder-width, mid-platform position','Lower sled to exactly 90° knee bend','NEVER fully lock knees at top','Back flat against pad throughout','Push through the entire foot — not toes only'],
     mistakes:['Locking knees out (knee joint stress)','Feet too high/low on platform','Lifting hips off the seat pad']},
    {name:'Goblet Squat (Dumbbell)',sets:'4',reps:'10–12',muscles:'Quads, Glutes, Core, Hip Flexors',
     svg:`<img src="./images/goblet_squat.png" alt="Goblet Squat (Dumbbell)" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Heels shoulder-width, toes 30° out','Go deep — hips below knee level (ATG)','Chest stays TALL — don\'t lean forward','Knees track over toes — push out','Hold DB at chest, use elbows to push knees'],
     mistakes:['Heels rising off floor (flexibility issue)','Knees caving inward (weak glutes)','Leaning torso too far forward']},
    {name:'Leg Extensions',sets:'3',reps:'12–15',muscles:'Quads (teardrop / VMO isolation)',
     svg:`<img src="./images/leg_extensions.jpg" alt="Leg Extensions" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Full extension at top — squeeze the quad HARD','Slow 3-second descent — constant tension','Pad sits on lower shin, not on ankles','Hold peak contraction for 1 second','This is what carves quad definition'],
     mistakes:['Swinging/using momentum','Not fully extending (missing the squeeze)','Going too heavy — this is isolation']},
    {name:'Walking Dumbbell Lunges',sets:'3',reps:'12 each leg',muscles:'Quads, Glutes, Balance, Core',
     svg:`<img src="./images/walking_lunges.jpg" alt="Walking Dumbbell Lunges" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Long stride — knee stays behind toes','Back knee nearly touches the floor','Torso stays upright throughout','Push off front heel to step forward','Keep DBs at sides, core tight'],
     mistakes:['Short steps (less glute activation)','Knee going past toes','Leaning forward too much']},
    {name:'Hip Thrust (Barbell or DB)',sets:'3',reps:'12',muscles:'Glutes (maximus), Hamstrings',
     svg:`<img src="./images/hip_thrust.jpg" alt="Hip Thrust" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Upper back on bench, feet flat on floor','Drive hips UP — squeeze glutes at top HARD','Chin tucked — don\'t hyperextend neck','Hold peak contraction for 2 seconds','Lower slowly — don\'t just drop'],
     mistakes:['Hyperextending lower back at top','Feet too close or too far from body','Not squeezing glutes at peak']},
    {name:'Standing Calf Raises',sets:'4',reps:'15',muscles:'Gastrocnemius (upper calf)',
     svg:`<img src="./images/standing_calf_raises.jpg" alt="Standing Calf Raises" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Full range — lower heel BELOW step level','Rise ALL the way up on balls of feet','2-second hold at the very top','Slow 3-second descent — no bouncing','Calves grow with TIME under tension'],
     mistakes:['Partial range of motion','Bouncing at the bottom','Too fast — calves need slow reps']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     THURSDAY — SHOULDERS + ABS
     Complete shoulder development (3D delts) + core work
     ═══════════════════════════════════════════════════════════════ */
  {name:'Thursday',tag:'Shoulders & Abs',tagClass:'push',
   focus:'Front · Side · Rear Delts (3D shoulders) · Abs',
   cardio:'Cycling · 10 min · Light resistance · Active recovery',
   exercises:[
    {name:'Seated DB Shoulder Press',sets:'4',reps:'8–10',muscles:'All 3 Deltoid heads, Triceps',
     svg:`<img src="./images/seated_shoulder_press.png" alt="Seated DB Shoulder Press" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Back flat against bench back rest','Start DBs at ear level, palms forward','Don\'t lock elbows at top','Exhale forcefully on the press up','No arching lower back off the pad'],
     mistakes:['Back arching away from pad','Pressing DBs apart instead of up','Going behind the head (shoulder stress)']},
    {name:'Arnold Press',sets:'3',reps:'10',muscles:'All 3 Deltoid Heads (rotation = complete)',
     svg:`<img src="./images/arnold_press.jpg" alt="Arnold Press" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Start: palms FACING YOU (like top of a curl)','Rotate outward as arms extend upward','Fully reverse the rotation on descent','Core braced throughout — no back arch','Controlled pace — the rotation is the point'],
     mistakes:['Going too fast (losing the rotation benefit)','Arching lower back on the press up','Incomplete rotation range']},
    {name:'Dumbbell Lateral Raises',sets:'4',reps:'15',muscles:'Side Deltoids — builds shoulder width',
     svg:`<img src="./images/lateral_raises.png" alt="Dumbbell Lateral Raises" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Raise ONLY to shoulder height — no higher','Slight elbow bend (10–15°) always','Pinky slightly higher than thumb (pour water tilt)','ZERO swinging — pure shoulder movement','Slow 3-second descent every rep'],
     mistakes:['Raising arms above shoulder height','Using momentum / body swing','Too heavy = trapezius takes over']},
    {name:'Dumbbell Front Raises',sets:'2',reps:'12',muscles:'Anterior (Front) Deltoids',
     svg:`<img src="./images/db_front_raises.jpg" alt="Dumbbell Front Raises" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Raise to shoulder height max — no higher','Thumbs-up grip helps with shoulder comfort','Zero torso lean backward','Slow 3-second descent','Light weight — don\'t go heavy here'],
     mistakes:['Raising above shoulder height (impingement)','Swinging torso backward','Too heavy — use very light dumbbells']},
    {name:'Rear Delt Fly (Machine or DB)',sets:'3',reps:'15',muscles:'Rear Deltoids, Rhomboids',
     svg:`<img src="./images/rear_delt_fly.jpg" alt="Rear Delt Fly" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Arms out to sides — slight elbow bend','Lead with elbows, not hands','Squeeze rear delts hard at peak','Control back slowly — 3 seconds','Light weight — this is precision work'],
     mistakes:['Using traps to shrug up','Arms fully straight (elbow stress)','Going too heavy — form collapses']},
    {name:'Hanging Leg Raises',sets:'3',reps:'12',muscles:'Lower Abs, Hip Flexors, Core',
     svg:`<img src="./images/hanging_leg_raises.jpg" alt="Hanging Leg Raises" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Hang from pull-up bar — dead hang start','Raise STRAIGHT legs to 90° or higher','Control the descent — 3 seconds down','Engage core BEFORE lifting legs','No swinging — pause between reps'],
     mistakes:['Using momentum to swing legs up','Bending knees too much','Not controlling the negative']},
    {name:'Cable Crunches',sets:'3',reps:'15',muscles:'Upper Abs, Rectus Abdominis',
     svg:`<img src="./images/cable_crunches.jpg" alt="Cable Crunches" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Kneel facing the cable machine','Hold rope behind head — elbows in','Crunch DOWN — bring elbows to knees','Squeeze abs hard at the bottom','Rise slowly — maintain tension throughout'],
     mistakes:['Pulling with arms instead of abs','Sitting back on heels','Not rounding the spine enough']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     FRIDAY — LEGS 2 (Hamstring + Posterior Chain focus)
     Complete legs with hamstrings, glutes, calves for balance
     ═══════════════════════════════════════════════════════════════ */
  {name:'Friday',tag:'Legs (Hams)',tagClass:'legs',
   focus:'Hamstrings · Glutes · Calves · Lower Back',
   cardio:'5 min incline walk ONLY · Heavy posterior chain day',
   exercises:[
    {name:'Romanian Deadlift (DB)',sets:'4',reps:'8–10',muscles:'Hamstrings, Glutes, Lower Back',
     svg:`<img src="./images/romanian_deadlift.png" alt="Romanian Deadlift (DB)" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['HINGE at hips — soft knee, not a squat','Keep DBs touching/near legs on way down','BACK FLAT — never round the spine','Stop when you feel hamstring pull/stretch','Squeeze glutes hard as you come back up'],
     mistakes:['Rounding the lower back — #1 injury risk','Bending knees too much (becomes a squat)','DBs drifting away from legs']},
    {name:'Lying Leg Curl Machine',sets:'4',reps:'10–12',muscles:'Hamstrings (all 3 heads)',
     svg:`<img src="./images/leg_curl.png" alt="Lying Leg Curl Machine" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Hips stay flat on pad throughout','Knee aligned with machine pivot point','Curl heel all the way toward glutes','Hold contraction 1 second at top','3-second slow descent — don\'t drop it'],
     mistakes:['Hips rising off the pad','Not going through full range of motion','Dropping weight too fast on return']},
    {name:'Leg Press (High & Wide)',sets:'3',reps:'12',muscles:'Glutes, Hamstrings, Inner Thighs',
     svg:`<img src="./images/leg_press.png" alt="Leg Press High Wide" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Feet HIGH on platform, WIDE stance','Toes pointed slightly outward','Push through heels — not toes','This foot position shifts load to glutes/hams','Same 90° depth rule applies'],
     mistakes:['Feet too low (quad dominant again)','Knees caving inward','Not going deep enough']},
    {name:'Hip Thrust (Barbell or DB)',sets:'3',reps:'12',muscles:'Glutes (maximus), Hamstrings',
     svg:`<img src="./images/hip_thrust.jpg" alt="Hip Thrust" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Upper back on bench, feet flat on floor','Drive hips UP — squeeze glutes at top HARD','Chin tucked — don\'t hyperextend neck','Hold peak contraction for 2 seconds','Lower slowly — control the negative'],
     mistakes:['Hyperextending lower back at top','Feet too close or too far','Not squeezing glutes at peak']},
    {name:'Seated Calf Raise',sets:'4',reps:'15–20',muscles:'Soleus (lower calf — adds width)',
     svg:`<img src="./images/seated_calf_raise.jpg" alt="Seated Calf Raise" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Knees under pad, balls of feet on edge','Full stretch DOWN — feel deep calf stretch','Press up all the way — peak contraction','Hold 2 seconds at top, 3 seconds down','Soleus only grows with bent-knee calf work'],
     mistakes:['Bouncing reps — no tension','Partial range of motion','Rushing through reps']},
    {name:'Bicycle Crunches',sets:'3',reps:'20 (10 each side)',muscles:'Obliques, Upper & Lower Abs',
     svg:`<img src="./images/bicycle_crunches.jpg" alt="Bicycle Crunches" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Hands behind head — don\'t pull on neck','Opposite elbow touches opposite knee','Fully extend the non-working leg','Rotate from the TORSO, not just elbows','Controlled pace — 2 seconds per rep'],
     mistakes:['Pulling on the neck with hands','Not rotating enough','Going too fast and losing form']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     SATURDAY — ARMS (Biceps + Triceps + FOREARMS) + ABS
     Vein-popping arms: bicep peaks, horseshoe triceps,
     thick forearms with visible veins
     ═══════════════════════════════════════════════════════════════ */
  {name:'Saturday',tag:'Arms & Forearms',tagClass:'core',
   focus:'Biceps (peak + width) · Triceps · FOREARMS (veins!) · Abs',
   cardio:'No cardio — today is pure arm pump day! Blood flow = veins!',
   exercises:[
    {name:'Barbell Curl (EZ or Straight)',sets:'3',reps:'10',muscles:'Biceps Brachii — the peak builder',
     svg:`<img src="./images/barbell_curl.jpg" alt="Barbell Curl" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Shoulder-width grip on bar','Elbows pinned to torso — they do NOT move','Full extension at bottom — FULL curl at top','Squeeze the bicep peak HARD at top — hold 1 sec','Slow 3-second negative — THIS builds veins'],
     mistakes:['Swinging body to lift (ego lifting)','Elbows drifting forward','Partial reps — not fully extending']},
    {name:'Hammer Curls',sets:'3',reps:'12 each arm',muscles:'Brachialis, Brachioradialis — ARM WIDTH + forearm veins',
     svg:`<img src="./images/hammer_curls.png" alt="Hammer Curls" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Palms face each other throughout — no rotation','Elbow fixed to side — don\'t let it drift','This builds ARM WIDTH and FOREARM top','Slow controlled descent — 3 seconds down','Brachioradialis = the vein muscle of forearms'],
     mistakes:['Rotating wrist (that\'s a regular curl)','Swinging the upper arm forward','Going too fast — lose forearm activation']},
    {name:'Concentration Curls',sets:'3',reps:'10 each arm',muscles:'Biceps short head — the PEAK',
     svg:`<img src="./images/concentration_curls.jpg" alt="Concentration Curls" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Sit on bench, elbow braced on inner thigh','Curl with ZERO body movement','Squeeze the peak so hard it cramps','Full extension — let arm hang straight','This is what builds the bicep peak shape'],
     mistakes:['Using body momentum','Not bracing elbow against thigh','Partial reps at the top']},
    {name:'EZ-Bar Skull Crushers',sets:'3',reps:'10–12',muscles:'Triceps (all 3 heads, long head stretch)',
     svg:`<img src="./images/skullcrushers.jpg" alt="EZ-Bar Skull Crushers" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Lie on flat bench — arms vertical','Lower bar toward forehead (hence "skull crusher")','Elbows stay pointing at ceiling — don\'t flare','Extend arms fully — squeeze triceps at top','Slow controlled descent — never fast'],
     mistakes:['Elbows flaring outward','Lowering to chin instead of forehead','Arms drifting backward (becomes pullover)']},
    {name:'Tricep Rope Pushdown',sets:'3',reps:'12–15',muscles:'Lateral + Medial Tricep heads',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Elbows locked tight to torso','Lean forward slightly at the hip','SPREAD rope ends apart at the bottom','Full extension — lock out completely','Control the cable back up slowly'],
     mistakes:['Elbows flaring out to sides','Using shoulder/body momentum','Not spreading rope at bottom']},
    {name:'Reverse Curls (EZ Bar)',sets:'3',reps:'12–15',muscles:'Brachioradialis, Forearm Extensors — VEIN builder',
     svg:`<img src="./images/reverse_curls.jpg" alt="Reverse Curls" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Overhand grip (palms face DOWN)','Elbows pinned to sides — strict form','This is THE #1 forearm vein exercise','Slow descent — milk every rep for forearm burn','Light weight — forearms respond to high reps'],
     mistakes:['Going too heavy (wrist strain)','Using body swing','Elbows moving forward']},
    {name:'Wrist Curls (Palms Up + Palms Down)',sets:'3',reps:'20 each direction',muscles:'Forearm Flexors + Extensors — forearm SIZE',
     svg:`<img src="./images/wrist_curls.jpg" alt="Wrist Curls" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Rest forearms on thighs, wrists over knees','Palms UP: curl wrist up — squeeze forearm flexors','Palms DOWN: curl wrist up — hits extensors','High reps (20) — forearms need volume','Let the bar roll to fingertips for extra range'],
     mistakes:['Moving the forearm (only WRIST moves)','Too heavy — wrist injury risk','Rushing reps — go slow for the burn']},
    {name:'Farmer\'s Walk',sets:'3',reps:'40 seconds',muscles:'Forearms, Grip, Traps, Core — overall vascularity',
     svg:`<img src="./images/farmers_walk.jpg" alt="Farmer Walk" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Grab HEAVY dumbbells — heaviest you can hold','Walk slowly with chest tall, shoulders back','Crush the handles — squeeze as hard as possible','This builds insane grip + forearm veins','Core tight, don\'t lean to either side'],
     mistakes:['Going too light (grip must be challenged)','Hunching shoulders forward','Walking too fast — this is grip endurance']},
    {name:'Dead Bugs + Side Plank (Superset)',sets:'3',reps:'10 each + 30 sec each side',muscles:'Deep Core, Obliques, Transverse Abdominis',
     svg:`<img src="./images/dead_bugs.jpg" alt="Dead Bugs" style="width:100%;height:100%;object-fit:cover;border-radius:8px">`,
     cues:['Dead Bug: lower back FLAT on floor always','Extend opposite arm and leg simultaneously','Side Plank: hips HIGH — straight line head to feet','No rest between the two — superset them','Breathe normally throughout both exercises'],
     mistakes:['Lower back arching during dead bugs','Hips sagging during side plank','Rushing through the set']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     SUNDAY — FULL REST
     ═══════════════════════════════════════════════════════════════ */
  {name:'Sunday',tag:'Full Rest',tagClass:'rest',rest:true,
   restMsg:'Your body has completed 6 intense training days hitting EVERY muscle group: Chest, Back, Shoulders, Quads, Hamstrings, Glutes, Calves, Biceps, Triceps, Forearms, Traps, Abs, Obliques and Core. The micro-tears repair today and muscles come back BIGGER and STRONGER. Enjoy the recovery — you earned it.',
   restTips:['Sleep 8+ hours — GH peaks during deep sleep','Keep eating your protein (130g+) even on rest days','Light 20-min walk is perfectly fine — promotes blood flow','Reflect: did you hit all 6 training days this week?','Hydrate well — 3L water minimum','Foam roll and stretch any sore areas','Cold shower → improved recovery and vascularity']}
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
