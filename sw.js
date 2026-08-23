const CACHE = "student-radar-v6";
const APP_SHELL = ["./", "./index.html", "./papers.html", "./cet.html", "./feedback.html", "./privacy.html", "./404.html", "./styles.css", "./app.js", "./papers.js", "./cet.js", "./feedback.js", "./share.js", "./data/events.js", "./data/papers.js", "./sources.html", "./icon.svg", "./share-card.png", "./manifest.webmanifest"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))));
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html"))));
});
