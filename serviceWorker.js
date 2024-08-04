const cacheName = "aba_app_landing";
const assets = [
  "/",
  "/index.html",
  "/css/reset.css",
  "/css/style.css",
  "/img/logo.gif",
  "/favicon.ico",
  "/favicon/android-chrome-192x192.png",
  "/favicon/android-chrome-512x512.png",
  "/favicon/favicon-16x16.png",
  "/favicon/favicon-32x32.png",
  "/img/bism.svg",
  "/img/map.drawio.svg",
  "/js/bionic.js"
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

self.addEventListener('activate', function (event) {
  var cacheKeeplist = [cacheName];
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map(function (key) {
          if (cacheKeeplist.indexOf(key) === -1) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
    registration.update();
  });
}