self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
  self.skipWaiting();
});
 
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
 
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
 
