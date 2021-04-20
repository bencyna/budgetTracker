const STATIC_CACHE = "static-cache-v1";
const RUNTIME_CACHE = "runtime-cache";

const FILES_TO_CACHE = [
  "/",
  "/index.html",
  "/dist/manifest.json",
  "/styles.css",
  "/dist/index.bundle.js",
  "/dist/db.bundle.js",

  "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/4.3.1/materia/bootstrap.css",
  "https://use.fontawesome.com/releases/v5.8.2/css/all.css",

  "/icons/icon-192x192.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", (event) => {
  const currentCaches = [STATIC_CACHE, RUNTIME_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        // return array of cache names that are old to delete
        return cacheNames.filter(
          (cacheName) => !currentCaches.includes(cacheName)
        );
      })
      .then((cachesToDelete) => {
        return Promise.all(
          cachesToDelete.map((cacheToDelete) => {
            return caches.delete(cacheToDelete);
          })
        );
      })
      .then(() => self.clients.claim())
  );
});
