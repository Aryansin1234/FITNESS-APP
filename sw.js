// ══════════════════════════════════════════════════════════════════════════════
//   VIDHA FITNESS APP — SERVICE WORKER
//   Cache-first for static assets, network-first for fonts
//   Version: bump CACHE_NAME to force update on all clients
// ══════════════════════════════════════════════════════════════════════════════

const CACHE_NAME = 'vidha-fit-v7';

// Core app shell — always cached
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './app.js',
  './manifest.json',
  // Icons
  './icons/favicon.ico',
  './icons/favicon.svg',
  './icons/favicon-16.png',
  './icons/favicon-32.png',
  './icons/icon-144.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/apple-touch-icon-152.png',
  './icons/apple-touch-icon-167.png',
];

// Exercise images — only those actually referenced in data.js
const IMAGE_ASSETS = [
  // Phase 1 images
  './images/w_breathing.jpg',
  './images/w_stretch.jpg',
  './images/w_hip_thrust.jpg',
  './images/w_core.jpg',
  './images/w_warmup.jpg',
  './images/w_gym_general.jpg',
  './images/w_glute.jpg',
  './images/w_yoga.jpg',
  './images/w_lunges.jpg',
  './images/w_walk.jpg',
  // Phase 2 images
  './images/w_squat.jpg',
  './images/w_deadlift.jpg',
  './images/w_pushup.jpg',
  './images/w_row.jpg',
  './images/w_plank.jpg',
  './images/w_sumo_squat.jpg',
  // Phase 3 images
  './images/w_leg_press.jpg',
  './images/w_chest_press.jpg',
  './images/w_lat_pulldown.jpg',
  './images/w_shoulder_press.jpg',
  './images/w_curl.jpg',
  './images/w_lateral_raise.jpg',
];

const ALL_ASSETS = [...CORE_ASSETS, ...IMAGE_ASSETS];

// ── INSTALL ───────────────────────────────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache core assets immediately, images lazily
      return cache.addAll(CORE_ASSETS).then(() => {
        // Cache images in background — don't block install
        cache.addAll(IMAGE_ASSETS).catch(() => {});
      });
    })
  );
  self.skipWaiting();
});

// ── ACTIVATE ──────────────────────────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── FETCH ─────────────────────────────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Google Fonts — network first, cache fallback
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Same-origin: cache first, network fallback, cache dynamically
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;

        return fetch(event.request)
          .then(response => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
            }
            return response;
          })
          .catch(() => {
            // Offline fallback — serve index.html for navigation requests
            if (event.request.destination === 'document') {
              return caches.match('./index.html');
            }
          });
      })
    );
    return;
  }

  // All other requests — network only
  event.respondWith(fetch(event.request).catch(() => {}));
});
