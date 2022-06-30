// from James Johnson: https://medium.com/james-johnson/a-simple-progressive-web-app-tutorial-f9708e5f2605

var cacheName = 'learn-chinese-pwa';
var filesToCache = [
    '/',
    '/index.html',
    '/css/style.css',
    '/js/main.js',
    '/js/enterkey.js',
    '/js/resize.js',
    '/fonts/Hanzi-Pinyin-Font.eot',
    '/fonts/Hanzi-Pinyin-Font.top.ttf',
    '/fonts/Hanzi-Pinyin-Font.woff',
    '/fonts/Hanzi-Pinyin-Font.woff2',
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});