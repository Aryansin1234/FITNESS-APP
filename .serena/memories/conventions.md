# Conventions

## data.js structure
- `DAYS[]`: workout days (7 entries Mon–Sun). Each has `{name, tag, tagClass, focus, cardio, exercises[]}` or `{rest:true, restMsg, restTips[]}`.
- Each exercise: `{name, sets, reps, tempo, rest, muscles, svg, breathing, cues[], mistakes[]}`
- `FOODS[]`, `MEALS[]`, `PROTEIN_FOODS[]`, `TIPS[]`, `SUPPS[]` — arrays of plain objects

## Rendering
- `renderWorkout()` reads `DAYS[currentDay]` and writes to `#workout-content`
- Food tags use class `ftag-${tag.c}` — valid values: green, blue, accent, purple
- Protein target is hardcoded as `72` in `updateProteinUI()` in app.js

## CSS
- Use CSS custom properties from `:root` for all colors
- Light theme overrides in `:root[data-theme="light"]`
- All media queries at bottom of style.css
