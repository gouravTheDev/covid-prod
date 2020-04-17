importScripts("/precache-manifest.d9faed250f18703847cec61630429c43.js", "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.core.setCacheNameDetails({ prefix: 'bento-starter' })

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

// Redirect to index.html if sw cannot find matching route
workbox.routing.registerNavigationRoute('/index.html', {
  /* Do not redirect routes used by firebase auth  */
  blacklist: [
    new RegExp('/__/auth/handler'),
    new RegExp('/__/auth/iframe'),
    new RegExp('/.well-known')
  ]
})

workbox.routing.registerRoute(
  /^https:\/\/fonts/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'fonts.googleapis',
    plugins: []
  }),
  'GET'
)

addEventListener('message', messageEvent => {
  if (messageEvent.data === 'skipWaiting') return self.skipWaiting()
})

