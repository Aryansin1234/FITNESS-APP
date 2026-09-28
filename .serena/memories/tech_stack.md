# Tech Stack

## Languages
- HTML5, CSS3, Vanilla JS (ES6+)
- No framework, no build step

## Key CSS Variables (dark theme)
- `--bg`: #0d0810 (deep plum)
- `--accent` / `--rose`: #f4a7c0 (rose pink)
- `--lavender` / `--purple`: #c4a9f5
- `--mint` / `--green`: #6ee9c2
- `--blue`: #7ec8f5
- `--gradient-accent`: rose → orange
- `--gradient-green`: mint → blue

## Storage
- All state in `localStorage` (setsDone, completedDays, proteinG, waterGlasses, weightLog, workoutLog)
- Keys prefixed `af_`

## PWA
- Service worker: `sw.js`
- Manifest: `manifest.json`
