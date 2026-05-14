const DAYS = [
  /* ═══════════════════════════════════════════════════════════════
     MONDAY — CHEST + TRICEPS (Heavy Push)
     Sequence: Heavy compound presses → Isolation flyes → Compound tricep → Isolation tricep → Burnout
     ═══════════════════════════════════════════════════════════════ */
  {name:'Monday',tag:'Chest & Triceps',tagClass:'push',
   focus:'Chest (Upper + Lower + Inner) · Triceps (all 3 heads)',
   cardio:'Treadmill · 10 min · Brisk walk 5.5–6 km/h · Incline 3%',
   exercises:[
    /* — COMPOUND PRESSES (heaviest first, you're freshest) — */
    {name:'Flat Dumbbell Press',sets:'4',reps:'8–10',muscles:'Mid Chest, Front Delts, Triceps',
     svg:`<img src="./images/flat_dumbbell_press.png" alt="Flat Dumbbell Press">`,
     cues:['Elbows at 45° — not flared wide','Slight arch in upper back, shoulder blades pinched','Feet flat on floor, drive through heels','Lower to full chest stretch, then explode up','3 sec lower, 1 sec press up'],
     mistakes:['Flaring elbows 90° (shoulder stress)','Bouncing off chest — no momentum','Half reps — full range of motion only','Letting wrists bend backward']},
    {name:'Incline Dumbbell Press',sets:'4',reps:'8–10',muscles:'Upper Chest, Clavicular Head',
     svg:`<img src="./images/incline_dumbbell_press.png" alt="Incline Dumbbell Press">`,
     cues:['Bench at 30–45° — not steeper','Squeeze upper chest hard at top','Elbows tucked 45°, not flared','Raise seat slightly to prevent sliding','Full stretch at the bottom'],
     mistakes:['Bench angle above 60° (becomes shoulder press)','Not retracting shoulder blades','Going too heavy too soon']},
    /* — CHEST ISOLATION (stretch + squeeze after compounds) — */
    {name:'Incline Dumbbell Flyes',sets:'3',reps:'12',muscles:'Upper Chest, Pec stretch',
     svg:`<img src="./images/incline_db_flyes.jpg" alt="Incline Dumbbell Flyes">`,
     cues:['Incline bench at 30°','Slight bend in elbows — arc motion','Open arms wide for deep upper chest stretch','Squeeze pecs together at top','Control the descent — 3 seconds down'],
     mistakes:['Arms too straight (elbow stress)','Bench too steep','Not getting full stretch at the bottom']},
    {name:'Cable Crossover',sets:'3',reps:'12–15',muscles:'Inner Chest, Lower Chest definition',
     svg:`<img src="./images/cable_crossover.jpg" alt="Cable Crossover">`,
     cues:['Step forward, slight forward lean','Hands meet below chest level for lower chest','Squeeze and hold 1 second at the cross','Full stretch at back — feel chest open wide','Light weight — focus on the squeeze'],
     mistakes:['Standing too upright','Using momentum instead of chest','Not crossing hands enough at the bottom']},
    {name:'Pec Deck Machine',sets:'3',reps:'12–15',muscles:'Inner Chest, Chest squeeze isolation',
     svg:`<img src="./images/pec_deck.jpg" alt="Pec Deck Machine">`,
     cues:['Elbows at 90° on pads','Squeeze arms together — pecs do all work','Hold the squeeze for 1–2 seconds','Slow controlled opening — feel the stretch','Keep back flat against pad'],
     mistakes:['Leaning forward off the pad','Using momentum to close arms','Not holding the squeeze']},
    /* — TRICEPS: compound first, then isolation — */
    {name:'Tricep Dips (Bench)',sets:'3',reps:'To failure',muscles:'Triceps, Lower Chest, Front Delts',
     svg:`<img src="./images/tricep_dips.jpg" alt="Tricep Dips">`,
     cues:['Hands on bench behind you, fingers forward','Lower until elbows at 90°','Push up through palms — squeeze triceps','Keep body close to bench','Legs straight for harder, bent for easier'],
     mistakes:['Going too deep (shoulder stress)','Flaring elbows outward','Shrugging shoulders up']},
    {name:'Overhead Tricep Extension',sets:'3',reps:'12',muscles:'Triceps Long Head (biggest head)',
     svg:`<img src="./images/overhead_tricep_extension.jpg" alt="Overhead Tricep Extension">`,
     cues:['Elbows pointing FORWARD — not flaring','Lower DB behind head until 90°','Full lockout extension at the top','Core tight — no lower back arch','Both hands grip one dumbbell securely'],
     mistakes:['Elbows flaring wide','Partial range — missing the stretch','Back arching off the seat pad']},
    {name:'Tricep Rope Pushdown',sets:'3',reps:'12',muscles:'Lateral + Medial Tricep heads',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown">`,
     cues:['Elbows locked tight to torso — key cue','Lean forward slightly at the hip','Spread rope ends apart at the bottom','Full extension — lock out elbows','Control the cable back up slowly'],
     mistakes:['Elbows flaring out to the sides','Using shoulder/body momentum','Not achieving full extension']},
    /* — CHEST ISOLATION (restore flat flyes for inner chest) — */
    {name:'Flat Dumbbell Flyes',sets:'3',reps:'12',muscles:'Mid/Inner Chest, Pec stretch',
     svg:`<img src="./images/db_flyes.jpg" alt="Flat Dumbbell Flyes">`,
     cues:['Flat bench — slight elbow bend throughout','Open arms wide for deep chest stretch','Squeeze pecs together at the top','Control descent — 3 seconds down','Feel the stretch at the bottom'],
     mistakes:['Arms too straight (elbow stress)','Going too heavy','Not getting full stretch']},
    /* — BURNOUT FINISHER — */
    {name:'Push-Ups (Burnout Finisher)',sets:'2',reps:'To failure',muscles:'Chest, Triceps, Core',
     svg:`<img src="./images/push_ups.png" alt="Push-Ups (Finisher)">`,
     cues:['Body is a straight plank — head to heel','Hands slightly wider than shoulders','Chest must touch or graze the floor','Go until absolute failure — this finishes the chest'],
     mistakes:['Hips sagging downward','Only going halfway down','Stopping before true failure']}
  ]},

  /* ═══════════════════════════════════════════════════════════════
     TUESDAY — BACK + TRAPS (Heavy Pull)
     Sequence: Vertical pulls → Horizontal rows → Isolation → Traps
     ═══════════════════════════════════════════════════════════════ */
  {name:'Tuesday',tag:'Back & Traps',tagClass:'pull',
   focus:'Lats (width) · Mid Back (thickness) · Traps · Rear Delts',
   cardio:'Rowing machine · 10 min · Light pace — great back warm-up',
   exercises:[
    /* — VERTICAL PULLS (lat width — heaviest first) — */
    {name:'Pull-Ups (Wide Grip)',sets:'4',reps:'6–10',muscles:'Lats, Teres Major, Biceps, Core',
     svg:`<img src="./images/pullups.jpg" alt="Pull-Ups">`,
     cues:['Grip wider than shoulders — overhand','Pull chest toward bar, not chin','Drive elbows DOWN and BACK','Full dead hang at bottom — no half reps','Control the descent — 3 seconds down'],
     mistakes:['Kipping or swinging','Only pulling chin over (not chest)','Not going to full hang at bottom']},
    {name:'Wide-Grip Lat Pulldown',sets:'4',reps:'10–12',muscles:'Lats (width), Teres Major, Biceps',
     svg:`<img src="./images/lat_pulldown.png" alt="Wide-Grip Lat Pulldown">`,
     cues:['Drive elbows DOWN toward hip pockets','Pull bar to upper chest — NOT chin','Lean back only 15° — not 45°','Arms fully extended at top (full stretch)','Squeeze lats hard at the bottom'],
     mistakes:['Pulling bar behind the neck','Excessive backward lean','Shrugging shoulders up at the top']},
    {name:'Close-Grip Lat Pulldown',sets:'3',reps:'12',muscles:'Lower Lats, Biceps, Rhomboids',
     svg:`<img src="./images/close_grip_lat_pulldown.jpg" alt="Close-Grip Lat Pulldown">`,
     cues:['Use V-bar or narrow handle','Pull to upper chest, lean back 15°','Squeeze lats at bottom — hold 1 sec','Full stretch at top — arms fully extended','Focus on lower lat squeeze'],
     mistakes:['Pulling too far back','Not extending fully at top','Using too much bicep']},
    /* — HORIZONTAL ROWS (mid-back thickness) — */
    {name:'Bent Over Dumbbell Row',sets:'4',reps:'10 each side',muscles:'Lats, Rhomboids, Rear Delts, Traps',
     svg:`<img src="./images/bent_over_db_row.jpg" alt="Bent Over Dumbbell Row">`,
     cues:['Hinge at hips — back parallel to floor','Pull elbow toward hip, not ear','Retract shoulder blade at peak','Full stretch at bottom every rep','Keep spine neutral — no rounding'],
     mistakes:['Rounding the back','Rotating the torso','Pulling too high toward shoulder']},
    {name:'Seated Cable Row',sets:'4',reps:'10–12',muscles:'Mid Back, Rhomboids, Lower Traps',
     svg:`<img src="./images/seated_cable_row.png" alt="Seated Cable Row">`,
     cues:['Pull handle to belly button area','Sit upright — chest tall, no slouching','Pinch shoulder blades together at peak','Zero torso rocking back and forth','Full stretch forward between reps'],
     mistakes:['Rocking the torso for momentum','Pulling too high (to chest)','Slouching forward on the return']},
    /* — ISOLATION + ACCESSORY — */
    {name:'Dumbbell Pullover',sets:'3',reps:'12',muscles:'Lats, Serratus, Chest stretch',
     svg:`<img src="./images/db_pullover.jpg" alt="Dumbbell Pullover">`,
     cues:['Lie across bench — only shoulders on bench','Both hands hold one dumbbell overhead','Lower behind head — feel deep lat stretch','Pull back over chest using lats','Slight bend in elbows throughout'],
     mistakes:['Dropping hips during the movement','Going too heavy','Bending elbows too much (becomes press)']},
    {name:'Cable Face Pulls',sets:'3',reps:'15',muscles:'Rear Delts, Rotator Cuff, Mid Traps',
     svg:`<img src="./images/cable_face_pulls.png" alt="Cable Face Pulls">`,
     cues:['Cable at eye / forehead height','Elbows out — parallel to ground','Pull rope to FOREHEAD (not chin)','Separate hands apart at peak','Light weight — shoulder health exercise'],
     mistakes:['Pulling to chin (traps take over)','Elbows dropping below shoulders','Too much weight = form breakdown']},
    /* — TRAPS (heavy isolation, end of session) — */
    {name:'Dumbbell Shrugs',sets:'4',reps:'15',muscles:'Upper Traps — builds the "yoke"',
     svg:`<img src="./images/db_shrugs.jpg" alt="Dumbbell Shrugs">`,
     cues:['Heavy dumbbells — traps respond to heavy loads','Shrug STRAIGHT UP — ears to shoulders','Hold squeeze at top for 2 seconds','Slow descent — don\'t just drop','NO head rolling or circular motion'],
     mistakes:['Rolling shoulders (injury risk!)','Not holding the squeeze','Going too light — traps need heavy weight']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     WEDNESDAY — LEGS (Quads + Hamstrings + Calves)
     Sequence: Heavy compounds → Compound accessories → Quad isolation → Ham isolation → Calves
     ═══════════════════════════════════════════════════════════════ */
  {name:'Wednesday',tag:'Legs',tagClass:'legs',
   focus:'Quads · Hamstrings · Calves · Core',
   cardio:'5 min walk ONLY · Legs are getting destroyed today!',
   exercises:[
    /* — HEAVY COMPOUNDS (king of exercises first) — */
    {name:'Barbell Squat',sets:'4',reps:'8–10',muscles:'Quads, Hamstrings, Core',
     svg:`<img src="./images/barbell_squat.jpg" alt="Barbell Squat">`,
     cues:['Bar on upper traps — not neck','Feet shoulder-width, toes 15–30° out','Break at hips and knees simultaneously','Go BELOW parallel — ATG if possible','Drive through heels, chest stays tall'],
     mistakes:['Knees caving inward','Heels rising off floor','Leaning too far forward','Not hitting depth']},
    {name:'Leg Press Machine',sets:'4',reps:'10–12',muscles:'Quads, Hamstrings',
     svg:`<img src="./images/leg_press.png" alt="Leg Press Machine">`,
     cues:['Feet shoulder-width, mid-platform','Lower sled to exactly 90° knee bend','NEVER fully lock knees at top','Back flat against pad throughout','Push through the entire foot'],
     mistakes:['Locking knees out','Feet too high/low on platform','Lifting hips off the seat pad']},
    {name:'Romanian Deadlift (DB)',sets:'4',reps:'8–10',muscles:'Hamstrings, Lower Back, Erectors',
     svg:`<img src="./images/romanian_deadlift.png" alt="Romanian Deadlift">`,
     cues:['HINGE at hips — soft knee, not a squat','Keep DBs touching/near legs','BACK FLAT — never round the spine','Stop when you feel hamstring stretch','Squeeze hard coming back up'],
     mistakes:['Rounding the lower back','Bending knees too much','DBs drifting away from legs']},
    /* — COMPOUND ACCESSORY (still multi-joint, but lighter) — */
    {name:'Hack Squat Machine',sets:'4',reps:'10–12',muscles:'Quads (outer sweep), Hamstrings — heavy quad builder',
     svg:`<img src="./images/goblet_squat.png" alt="Hack Squat Machine">`,
     cues:['Feet shoulder-width, low on platform for quad focus','Back flat against pad throughout','Lower until thighs go PAST parallel','Drive through heels — explosive up','Deeper = more quad activation'],
     mistakes:['Feet too high (shifts to hamstrings)','Not going deep enough','Locking knees at the top']},
    {name:'Bulgarian Split Squat',sets:'3',reps:'10 each leg',muscles:'Quads, Glutes, Balance, Core — unilateral strength',
     svg:`<img src="./images/db_lunges.jpg" alt="Bulgarian Split Squat">`,
     cues:['Rear foot elevated on bench behind you','Front shin stays vertical — knee tracks toes','Lower until front thigh is parallel','Drive up through front heel ONLY','Hold DBs at sides for added load'],
     mistakes:['Front knee drifting way past toes','Leaning forward — stay upright','Standing too close to bench']},
    {name:'Walking Dumbbell Lunges',sets:'3',reps:'12 each leg',muscles:'Quads, Hamstrings, Balance, Core',
     svg:`<img src="./images/walking_lunges.jpg" alt="Walking Dumbbell Lunges">`,
     cues:['Long stride — knee stays behind toes','Back knee nearly touches the floor','Torso stays upright throughout','Push off front heel to step forward','Keep DBs at sides, core tight'],
     mistakes:['Short steps','Knee going past toes','Leaning forward too much']},
    /* — QUAD ISOLATION — */
    {name:'Leg Extensions',sets:'4',reps:'12–15',muscles:'Quads (teardrop / VMO isolation)',
     svg:`<img src="./images/leg_extensions.jpg" alt="Leg Extensions">`,
     cues:['Full extension at top — squeeze quad HARD','Slow 3-second descent — constant tension','Pad sits on lower shin, not ankles','Hold peak contraction for 1 second','This carves quad definition'],
     mistakes:['Swinging/using momentum','Not fully extending','Going too heavy — this is isolation']},
    /* — HAMSTRING ISOLATION — */
    {name:'Lying Leg Curl Machine',sets:'4',reps:'10–12',muscles:'Hamstrings (biceps femoris, semimembranosus)',
     svg:`<img src="./images/lying_leg_curls.jpg" alt="Lying Leg Curl">`,
     cues:['Hips stay flat on pad','Knee aligned with machine pivot','Curl heel all the way toward body','Hold contraction 1 second at top','3-second slow descent'],
     mistakes:['Hips rising off the pad','Not full range of motion','Dropping weight too fast']},
    {name:'Seated Leg Curl',sets:'3',reps:'12',muscles:'Hamstrings (semitendinosus focus) — different angle from lying',
     svg:`<img src="./images/seated_leg_curl.jpg" alt="Seated Leg Curl">`,
     cues:['Adjust pad to sit just above ankle','Curl heels UNDER the seat','Hold squeeze for 2 seconds at peak','Slow 3-second release back up','Hits hamstrings from a different stretch angle'],
     mistakes:['Partial range of motion','Using momentum','Not holding the contraction']},
    {name:'Stiff-Leg Deadlift (Barbell)',sets:'3',reps:'10',muscles:'Hamstrings, Lower Back, Glutes — deep stretch',
     svg:`<img src="./images/stiff_leg_deadlift.jpg" alt="Stiff-Leg Deadlift">`,
     cues:['Legs almost straight — very slight knee bend','Hinge at hips — push butt BACK','Bar stays touching legs the entire way','Lower until you feel max hamstring stretch','Squeeze glutes and hams to come back up'],
     mistakes:['Rounding the back','Bending knees too much (becomes RDL)','Going too heavy — stretch is the goal']},
    /* — CALVES (always last — small muscle, high reps) — */
    {name:'Standing Calf Raises',sets:'4',reps:'15–20',muscles:'Gastrocnemius (upper calf)',
     svg:`<img src="./images/standing_calf_raises.jpg" alt="Standing Calf Raises">`,
     cues:['Full range — lower heel BELOW step','Rise ALL the way up on balls of feet','2-second hold at the very top','Slow 3-second descent — no bouncing','Calves grow with TIME under tension'],
     mistakes:['Partial range of motion','Bouncing at the bottom','Too fast — calves need slow reps']},
    {name:'Seated Calf Raise',sets:'4',reps:'15–20',muscles:'Soleus (lower calf — adds width)',
     svg:`<img src="./images/seated_calf_raise.jpg" alt="Seated Calf Raise">`,
     cues:['Knees under pad, balls of feet on edge','Full stretch DOWN — feel deep stretch','Press up all the way — peak contraction','Hold 2 seconds at top, 3 seconds down','Soleus grows with bent-knee work'],
     mistakes:['Bouncing reps','Partial range of motion','Rushing through reps']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     THURSDAY — SHOULDERS + ABS
     Sequence: Heavy presses → Side/rear isolation → Abs (hardest → easiest)
     ═══════════════════════════════════════════════════════════════ */
  {name:'Thursday',tag:'Shoulders & Abs',tagClass:'push',
   focus:'Front · Side · Rear Delts (3D shoulders) · Abs',
   cardio:'Cycling · 10 min · Light resistance · Active recovery',
   exercises:[
    /* — HEAVY COMPOUND PRESSES (freshest = heaviest) — */
    {name:'Seated DB Shoulder Press',sets:'4',reps:'8–10',muscles:'All 3 Deltoid heads, Triceps',
     svg:`<img src="./images/seated_shoulder_press.png" alt="Seated DB Shoulder Press">`,
     cues:['Back flat against bench rest','Start DBs at ear level, palms forward','Don\'t lock elbows at top','Exhale forcefully on the press','No arching lower back off the pad'],
     mistakes:['Back arching away from pad','Pressing DBs apart instead of up','Going behind the head']},
    {name:'Arnold Press',sets:'3',reps:'10',muscles:'All 3 Deltoid Heads (rotation = complete)',
     svg:`<img src="./images/arnold_press.jpg" alt="Arnold Press">`,
     cues:['Start: palms FACING YOU','Rotate outward as arms extend','Fully reverse rotation on descent','Core braced — no back arch','Controlled pace — rotation is the point'],
     mistakes:['Going too fast','Arching lower back','Incomplete rotation range']},
    /* — SIDE DELT ISOLATION (the width builders) — */
    {name:'Dumbbell Lateral Raises',sets:'4',reps:'15',muscles:'Side Deltoids — builds shoulder width',
     svg:`<img src="./images/lateral_raises.png" alt="Dumbbell Lateral Raises">`,
     cues:['Raise ONLY to shoulder height','Slight elbow bend (10–15°) always','Pinky slightly higher than thumb','ZERO swinging — pure shoulder','Slow 3-second descent every rep'],
     mistakes:['Raising arms above shoulder height','Using momentum / body swing','Too heavy = trapezius takes over']},
    {name:'Cable Lateral Raise',sets:'3',reps:'12 each arm',muscles:'Side Delts — constant tension',
     svg:`<img src="./images/cable_lateral_raise.jpg" alt="Cable Lateral Raise">`,
     cues:['Cable set at lowest position','Stand sideways to machine','Raise arm to shoulder height','Constant tension throughout the range','Control the descent — don\'t let cable snap'],
     mistakes:['Leaning away too much','Raising above shoulder height','Using body momentum']},
    /* — FRONT + REAR DELT (complete 3D look) — */
    {name:'Dumbbell Front Raises',sets:'2',reps:'12',muscles:'Anterior (Front) Deltoids',
     svg:`<img src="./images/db_front_raises.jpg" alt="Dumbbell Front Raises">`,
     cues:['Raise to shoulder height max','Thumbs-up grip for shoulder comfort','Zero torso lean backward','Slow 3-second descent','Light weight — don\'t go heavy'],
     mistakes:['Raising above shoulder height','Swinging torso backward','Too heavy']},
    {name:'Rear Delt Fly (Machine or DB)',sets:'3',reps:'15',muscles:'Rear Deltoids, Rhomboids',
     svg:`<img src="./images/rear_delt_fly.jpg" alt="Rear Delt Fly">`,
     cues:['Arms out to sides — slight elbow bend','Lead with elbows, not hands','Squeeze rear delts at peak','Control back slowly — 3 seconds','Light weight — precision work'],
     mistakes:['Using traps to shrug up','Arms fully straight','Going too heavy']},
    /* — ABS: hardest → easiest for max engagement — */
    {name:'Hanging Leg Raises',sets:'3',reps:'12',muscles:'Lower Abs, Hip Flexors, Core',
     svg:`<img src="./images/hanging_leg_raises.jpg" alt="Hanging Leg Raises">`,
     cues:['Hang from pull-up bar — dead hang','Raise STRAIGHT legs to 90° or higher','Control the descent — 3 seconds','Engage core BEFORE lifting legs','No swinging — pause between reps'],
     mistakes:['Using momentum to swing legs','Bending knees too much','Not controlling the negative']},
    {name:'Ab Roller',sets:'3',reps:'10',muscles:'Entire Core, Serratus, Lats',
     svg:`<img src="./images/ab_roller.jpg" alt="Ab Roller">`,
     cues:['Start on knees, hands on roller','Roll out slowly — arms extending','Go as far as you can control','Pull back using abs — NOT hip flexors','Keep lower back from sagging'],
     mistakes:['Going too far and collapsing','Using hip flexors to pull back','Lower back arching excessively']},
    {name:'Cable Crunches',sets:'3',reps:'15',muscles:'Upper Abs, Rectus Abdominis',
     svg:`<img src="./images/cable_crunches.jpg" alt="Cable Crunches">`,
     cues:['Kneel facing cable machine','Hold rope behind head — elbows in','Crunch DOWN — elbows to knees','Squeeze abs hard at the bottom','Rise slowly — maintain tension'],
     mistakes:['Pulling with arms instead of abs','Sitting back on heels','Not rounding spine enough']},
    {name:'Decline Crunches',sets:'3',reps:'15',muscles:'Upper Abs, Rectus Abdominis',
     svg:`<img src="./images/decline_crunches.jpg" alt="Decline Crunches">`,
     cues:['Feet locked on decline bench','Arms crossed over chest or behind head','Crunch up using ABS only','Don\'t come all the way up (hip flexors)','Slow controlled descent'],
     mistakes:['Using momentum to sit up','Coming up too high','Pulling on neck with hands']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     FRIDAY — BACK & BICEPS (2× frequency for both)
     Sequence: Heavy compound pulls → Row variations → Bicep compound → Bicep isolation
     Different angles from Tuesday for complete development
     ═══════════════════════════════════════════════════════════════ */
  {name:'Friday',tag:'Back & Biceps',tagClass:'pull',
   focus:'Lats (width) · Mid Back (thickness) · Biceps (peak + width) — 2× per week',
   cardio:'Rowing machine · 10 min · Light pace — great back warm-up',
   exercises:[
    /* — HEAVY COMPOUND PULLS (freshest = heaviest) — */
    {name:'Conventional Deadlift',sets:'5',reps:'5',muscles:'Entire Posterior Chain, Quads, Core, Grip, Traps',
     svg:`<img src="./images/stiff_leg_deadlift.jpg" alt="Conventional Deadlift">`,
     cues:['Bar over mid-foot, shins touch bar','Hips hinge back — back FLAT, chest up','Drive through heels — push the floor away','Bar stays touching legs the entire pull','Lock out at top — shoulders back, hips through'],
     mistakes:['Rounding the back (major injury risk)','Jerking the bar off floor','Hips shooting up first','Bar drifting away from body']},
    {name:'T-Bar Row',sets:'4',reps:'8–10',muscles:'Mid Back thickness, Lats, Rhomboids',
     svg:`<img src="./images/bent_over_db_row.jpg" alt="T-Bar Row">`,
     cues:['Chest against pad (if machine) or bent over','Pull to chest — squeeze shoulder blades','Elbows drive BACK, not out','3 sec lower — feel the stretch','Heavy compound — go heavy here'],
     mistakes:['Rounding lower back','Using momentum to jerk weight','Not squeezing at the top']},
    {name:'Seated Cable Row (Close Grip)',sets:'4',reps:'10–12',muscles:'Mid Back, Lats, Rhomboids — thickness builder',
     svg:`<img src="./images/seated_cable_row.png" alt="Seated Cable Row">`,
     cues:['Sit tall, chest up, slight lean forward at start','Pull handle to lower chest — elbows past torso','Squeeze shoulder blades together for 2 seconds','Slow controlled release forward','Don\'t lean back excessively — torso stays upright'],
     mistakes:['Leaning too far back (using momentum)','Pulling with arms instead of back','Shrugging shoulders up']},
    /* — LAT ISOLATION (different angles from Tuesday) — */
    {name:'Straight-Arm Lat Pulldown',sets:'3',reps:'12–15',muscles:'Lats isolation — no bicep involvement',
     svg:`<img src="./images/lat_pulldown.png" alt="Straight-Arm Lat Pulldown">`,
     cues:['Stand facing cable, arms extended up','Pull bar down to thighs in arc motion','Keep arms nearly straight — slight bend only','Squeeze lats hard at the bottom','Control the return — feel the stretch'],
     mistakes:['Bending elbows too much (becomes pushdown)','Using momentum','Not feeling lats engage']},
    {name:'Dumbbell Pullover',sets:'3',reps:'12',muscles:'Lats, Serratus, Chest stretch — expands ribcage',
     svg:`<img src="./images/db_pullover.jpg" alt="Dumbbell Pullover">`,
     cues:['Lie across bench — hips below bench level','Hold one DB overhead with both hands','Lower behind head — deep lat stretch','Pull back over chest using lats','Keep slight elbow bend throughout'],
     mistakes:['Bending elbows too much','Not going deep enough for stretch','Using too much weight']},
    /* — BICEPS (2× frequency — different exercises from Saturday) — */
    {name:'Barbell Curl',sets:'4',reps:'8–10',muscles:'Biceps (both heads) — the mass builder',
     svg:`<img src="./images/barbell_curl.jpg" alt="Barbell Curl">`,
     cues:['Shoulder-width grip, elbows pinned to sides','Curl up — squeeze biceps HARD at top','Lower slowly — 3 seconds down','No swinging — if you sway, go lighter','Full extension at the bottom'],
     mistakes:['Swinging torso for momentum','Elbows drifting forward','Not going to full extension']},
    {name:'Incline Dumbbell Curl',sets:'3',reps:'10–12',muscles:'Biceps Long Head — builds the peak',
     svg:`<img src="./images/db_bicep_curl.jpg" alt="Incline Dumbbell Curl">`,
     cues:['Incline bench at 45° — arms hang straight down','Curl up without moving elbows forward','Supinate wrists (turn pinkies out) at the top','Slow 3-second negative — feel the stretch','The incline pre-stretches the long head'],
     mistakes:['Elbows swinging forward','Sitting too upright (defeats the purpose)','Rushing the negative']},
    {name:'Cable Hammer Curl (Rope)',sets:'3',reps:'12',muscles:'Brachialis, Brachioradialis — arm thickness',
     svg:`<img src="./images/cable_hammer_curls.jpg" alt="Cable Hammer Curl">`,
     cues:['Rope attachment on low cable','Neutral grip — palms facing each other','Curl up — keep elbows pinned','Squeeze at top, pull rope ends apart','Constant cable tension = better pump'],
     mistakes:['Elbows moving forward','Using body momentum','Losing neutral grip']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     SATURDAY — ARMS (Biceps + Triceps + FOREARMS)
     Sequence: Compound bi → Compound tri → Isolation bi → Isolation tri → Forearms → Core
     Alternating bi/tri keeps blood flowing and improves pump
     ═══════════════════════════════════════════════════════════════ */
  {name:'Saturday',tag:'Arms & Forearms',tagClass:'core',
   focus:'Biceps (peak + width) · Triceps · FOREARMS (veins!) · Abs',
   cardio:'No cardio — today is pure arm pump day! Blood flow = veins!',
   exercises:[
    /* — COMPOUND MOVES FIRST (heaviest lifts while fresh) — */
    {name:'Close-Grip Bench Press',sets:'3',reps:'10',muscles:'Triceps (all heads), Inner Chest',
     svg:`<img src="./images/close_grip_bench.jpg" alt="Close-Grip Bench Press">`,
     cues:['Hands shoulder-width or slightly narrower','Elbows tucked close to body','Lower bar to lower chest','Press up — lock out at top','Feel triceps doing the work'],
     mistakes:['Grip too narrow (wrist strain)','Flaring elbows out','Bouncing off chest']},
    {name:'Barbell Curl (EZ or Straight)',sets:'3',reps:'10',muscles:'Biceps Brachii — the peak builder',
     svg:`<img src="./images/barbell_curl.jpg" alt="Barbell Curl">`,
     cues:['Shoulder-width grip on bar','Elbows pinned to torso — don\'t move','Full extension at bottom, FULL curl at top','Squeeze the bicep peak HARD — hold 1 sec','Slow 3-second negative — builds veins'],
     mistakes:['Swinging body to lift','Elbows drifting forward','Partial reps — not fully extending']},
    /* — TRICEP ISOLATION — */
    {name:'EZ-Bar Skull Crushers',sets:'3',reps:'10–12',muscles:'Triceps (all 3 heads)',
     svg:`<img src="./images/skullcrushers.jpg" alt="EZ-Bar Skull Crushers">`,
     cues:['Lie on flat bench — arms vertical','Lower bar toward forehead','Elbows stay pointing at ceiling','Extend arms fully — squeeze triceps','Slow controlled descent'],
     mistakes:['Elbows flaring outward','Lowering to chin instead of forehead','Arms drifting backward']},
    {name:'Tricep Rope Pushdown',sets:'3',reps:'12–15',muscles:'Lateral + Medial Tricep heads',
     svg:`<img src="./images/tricep_pushdown.png" alt="Tricep Rope Pushdown">`,
     cues:['Elbows locked tight to torso','Lean forward slightly','SPREAD rope ends apart at bottom','Full extension — lock out completely','Control cable back up slowly'],
     mistakes:['Elbows flaring out','Using shoulder/body momentum','Not spreading rope at bottom']},
    /* — BICEP ISOLATION (peak + width builders) — */
    {name:'Alternate Dumbbell Curl',sets:'3',reps:'10 each arm',muscles:'Biceps — unilateral focus + supination',
     svg:`<img src="./images/alternate_db_curl.jpg" alt="Alternate Dumbbell Curl">`,
     cues:['Start palms facing thighs (neutral)','Supinate (rotate palm up) as you curl','Full squeeze at top — pinky rotated in','Alternate arms — one at a time','Control the negative — don\'t drop'],
     mistakes:['No supination (missing peak contraction)','Both arms at same time','Swinging body']},
    {name:'Hammer Curls',sets:'3',reps:'12 each arm',muscles:'Brachialis, Brachioradialis — arm WIDTH',
     svg:`<img src="./images/hammer_curls.png" alt="Hammer Curls">`,
     cues:['Palms face each other — no rotation','Elbow fixed to side','This builds ARM WIDTH and FOREARM top','Slow controlled descent — 3 seconds','Brachioradialis = the vein muscle'],
     mistakes:['Rotating wrist','Swinging the upper arm','Going too fast']},
    {name:'Preacher Curls',sets:'3',reps:'10',muscles:'Biceps short head — peak isolation',
     svg:`<img src="./images/preacher_curls.jpg" alt="Preacher Curls">`,
     cues:['Armpits rest on top of pad','Arms fully extended at bottom — big stretch','Curl up to 90° — don\'t go past','Squeeze peak hard at top','Slow 3-second descent'],
     mistakes:['Not extending fully at bottom','Going past 90° (loses tension)','Lifting elbows off pad']},
    {name:'Spider Curls',sets:'3',reps:'12',muscles:'Biceps long head — constant tension',
     svg:`<img src="./images/spider_curls.jpg" alt="Spider Curls">`,
     cues:['Lie chest-down on incline bench','Arms hang straight down','Curl up — elbows don\'t move','Gravity pulls down the entire time','Peak squeeze at top — incredible pump'],
     mistakes:['Moving elbows forward','Using momentum','Bench angle too flat']},
    {name:'Concentration Curls',sets:'3',reps:'10 each arm',muscles:'Biceps short head — the PEAK',
     svg:`<img src="./images/concentration_curls.jpg" alt="Concentration Curls">`,
     cues:['Sit on bench, elbow braced on thigh','Curl with ZERO body movement','Squeeze peak so hard it cramps','Full extension — let arm hang straight','This builds the bicep peak shape'],
     mistakes:['Using body momentum','Not bracing elbow','Partial reps at the top']},
    /* — FOREARMS (always last — small muscles, high reps) — */
    {name:'Reverse Curls (EZ Bar)',sets:'3',reps:'12–15',muscles:'Brachioradialis, Forearm Extensors — VEIN builder',
     svg:`<img src="./images/reverse_curls.jpg" alt="Reverse Curls">`,
     cues:['Overhand grip (palms face DOWN)','Elbows pinned to sides — strict','THE #1 forearm vein exercise','Slow descent — milk every rep','Light weight — forearms respond to high reps'],
     mistakes:['Going too heavy (wrist strain)','Using body swing','Elbows moving forward']},
    {name:'Wrist Curls (Up + Down)',sets:'3',reps:'20 each direction',muscles:'Forearm Flexors + Extensors — SIZE',
     svg:`<img src="./images/wrist_curls.jpg" alt="Wrist Curls">`,
     cues:['Forearms on thighs, wrists over knees','Palms UP: curl wrist up — flexors','Palms DOWN: curl wrist up — extensors','High reps (20) — forearms need volume','Let bar roll to fingertips for extra range'],
     mistakes:['Moving the forearm (only WRIST)','Too heavy — wrist injury risk','Rushing reps']},
    {name:'Farmer\'s Walk',sets:'3',reps:'40 seconds',muscles:'Forearms, Grip, Traps, Core — vascularity',
     svg:`<img src="./images/farmers_walk.jpg" alt="Farmer Walk">`,
     cues:['Grab HEAVY dumbbells — heaviest you can hold','Walk slowly, chest tall, shoulders back','Crush the handles — squeeze hard','Builds insane grip + forearm veins','Core tight, don\'t lean to either side'],
     mistakes:['Going too light','Hunching shoulders','Walking too fast']},
    /* — CORE FINISHER — */
    {name:'Dead Bugs + Side Plank (Superset)',sets:'3',reps:'10 each + 30 sec each side',muscles:'Deep Core, Obliques, Transverse Abdominis',
     svg:`<img src="./images/dead_bugs.jpg" alt="Dead Bugs">`,
     cues:['Dead Bug: lower back FLAT on floor','Extend opposite arm and leg','Side Plank: hips HIGH — straight line','No rest between — superset them','Breathe normally throughout'],
     mistakes:['Lower back arching during dead bugs','Hips sagging during side plank','Rushing through the set']}
   ]},

  /* ═══════════════════════════════════════════════════════════════
     SUNDAY — FULL REST
     ═══════════════════════════════════════════════════════════════ */
  {name:'Sunday',tag:'Full Rest',tagClass:'rest',rest:true,
   restMsg:'Your body has completed 6 intense training days hitting EVERY major muscle: Chest, Back, Shoulders, Quads, Hamstrings, Calves, Biceps, Triceps, Forearms, Traps, Abs, Obliques, Core — plus a raw Power & Conditioning day for strength, stamina, and endurance. The micro-tears repair today and muscles come back BIGGER and STRONGER. Enjoy the recovery — you earned it.',
   restTips:['Sleep 8+ hours — GH peaks during deep sleep','Keep eating protein (130g+) even on rest days','Light 20-min walk is perfectly fine — promotes blood flow','Reflect: did you hit all 6 training days this week?','Hydrate well — 3L water minimum','Foam roll and stretch any sore areas','Cold shower → improved recovery and vascularity']}
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
