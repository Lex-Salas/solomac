
self.addEventListener("install", event => {
    console.log("Service Worker instalado");
    event.waitUntil(
        caches.open("solomac-cache").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/app.js",
                "/manifest.json",
                "/icons/icon-192.png",
                "/icons/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
