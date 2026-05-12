# Aryan's Fitness App 💪

A personal fitness PWA (Progressive Web App) with a **Push/Pull/Legs** workout plan, protein tracker, rest timer, and Indian diet guide — designed for lean muscle recomp.

## Features

- 🏋️ **6-Day PPL Split** — Full exercise details with SVG illustrations, form cues, and common mistakes
- ⏱️ **Rest Timer** — Preset rest periods with audio notification when done
- 🥚 **Protein Tracker** — Track daily protein intake with one-tap food buttons
- 🍱 **Meal Plan** — Full-day Indian meal plan (~2350 kcal, ~148g protein)
- 💡 **Recovery Tips** — Sleep, hydration, supplements, and injury prevention
- 📱 **Installable PWA** — Works offline, install on your home screen
- 💾 **Auto-Save** — All progress saved to localStorage, protein resets daily

## Tech Stack

- Vanilla HTML / CSS / JavaScript (zero dependencies)
- Service Worker for offline caching
- Web Audio API for timer notifications
- localStorage for data persistence

## Deploy to GitHub Pages

1. **Create a GitHub repository**
2. **Push this code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fitness PWA"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/Fitness-App.git
   git push -u origin main
   ```
3. **Enable GitHub Pages:**
   - Go to repo **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**
4. Your app will be live at `https://YOUR_USERNAME.github.io/Fitness-App/`

## Project Structure

```
Fitness-App/
├── index.html        # Main HTML with PWA tags & layout
├── style.css         # All styles (mobile-first, dark theme)
├── data.js           # Workout data, food lists, meal plans
├── app.js            # App logic, localStorage, timer, navigation
├── sw.js             # Service worker for offline support
├── manifest.json     # PWA manifest
├── .nojekyll         # Disable Jekyll on GitHub Pages
├── icons/
│   ├── icon-192.png  # App icon (small)
│   └── icon-512.png  # App icon (large)
└── README.md
```

## License

Personal project — feel free to fork and customize for your own fitness goals!
