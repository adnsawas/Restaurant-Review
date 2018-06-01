self.addEventListener('install', function(event) {
  console.log('Installed');

  event.waitUntil(
    caches.open('restaurants-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/css/styles.css',
        '/data/restaurants.json',
        '/js/dbhelper.js',
        '/js/main.js',
        '/js/restaurant_info.js',
        '/sw.js',
        '/sw_reg.js'
        ]);
    })
  );
});


self.addEventListener('activate', function(event) {
  console.log('Activated');
});


self.addEventListener('fetch', function(event) {
  console.log('fetching from SW', event.request);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});