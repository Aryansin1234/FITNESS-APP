const CACHE_NAME = 'aryan-fitness-v3';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './data.js',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/flat_dumbbell_press.png',
  './images/incline_dumbbell_press.png',
  './images/db_flyes.jpg',
  './images/cable_crossover.jpg',
  './images/tricep_pushdown.png',
  './images/overhead_tricep_extension.jpg',
  './images/push_ups.png',
  './images/lat_pulldown.png',
  './images/seated_cable_row.png',
  './images/one_arm_row.png',
  './images/cable_face_pulls.png',
  './images/db_shrugs.jpg',
  './images/close_grip_lat_pulldown.jpg',
  './images/leg_press.png',
  './images/goblet_squat.png',
  './images/leg_extensions.jpg',
  './images/walking_lunges.jpg',
  './images/hip_thrust.jpg',
  './images/standing_calf_raises.jpg',
  './images/seated_shoulder_press.png',
  './images/arnold_press.jpg',
  './images/lateral_raises.png',
  './images/db_front_raises.jpg',
  './images/rear_delt_fly.jpg',
  './images/hanging_leg_raises.jpg',
  './images/cable_crunches.jpg',
  './images/romanian_deadlift.png',
  './images/leg_curl.png',
  './images/seated_calf_raise.jpg',
  './images/bicycle_crunches.jpg',
  './images/barbell_curl.jpg',
  './images/hammer_curls.png',
  './images/concentration_curls.jpg',
  './images/skullcrushers.jpg',
  './images/reverse_curls.jpg',
  './images/wrist_curls.jpg',
  './images/farmers_walk.jpg',
  './images/dead_bugs.jpg',
];

// Install — cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching app assets');
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — cache first, network fallback
self.addEventListener('fetch', event => {
  // Handle cross-origin requests (Google Fonts etc.) — network first
  if (!event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      fetch(event.request).then(response => {
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => caches.match(event.request))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache new requests dynamically (except non-GET)
        if (event.request.method !== 'GET') return response;
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        return response;
      }).catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
