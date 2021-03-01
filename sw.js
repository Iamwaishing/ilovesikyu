const cacheName = 'love_v3';

// install cache
self.addEventListener('install', e => {
	e.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll(["./",
							"./photos.html",
							"./videos.html",
							"./activities",
							"./index.js",
							"./sw.js",
							"./manifest.json",
							"./script/jquery-3.5.1.js",
							"./script/jquery.rwdImageMaps.js",
							"./script/jssor.slider-27.5.0.min.js",
							"./script/moment-with-locales.js",
							"./script/myScript.js",
							"./style/style.css",
							"./style/bootstrap.min.css",
							"./images/icon.png",
							"./images/icon-72x72.png",
							"./images/icon-96x96.png",
							"./images/icon-128x128.png",
							"./images/icon-144x144.png",
							"./images/icon-152x152.png",
							"./images/icon-192x192.png",
							"./images/icon-384x384.png",
							"./images/icon-512x512.png",
							"./images/bg.jpg",
							"./images/life.png",
							"./images/livevid.png",
							"./images/spin.svg",
							"./images/spinner.gif",
							"./images/streetvid.png",
							"./images/vid.png"
							]) + self.skipWaiting();
							
		})
	);
});

// request cache
self.addEventListener('fetch', (event) => {
	event.respondWith(
	  caches.match(event.request).then((resp) => {
		return resp || fetch(event.request).then((response) => {
		  return caches.open(cacheName).then((cache) => {
			cache.put(event.request, response.clone());
			return response;
		  });
		});
	  })
	);
});

// update and delete old cache
self.addEventListener('activate', (event) => {
	var cacheKeeplist = [cacheName];
  
	event.waitUntil(
	  caches.keys().then((keyList) => {
		return Promise.all(keyList.map((key) => {
		  if (cacheKeeplist.indexOf(key) === -1) {
			return caches.delete(key);
		  }
		}));
	  })
	);
  });