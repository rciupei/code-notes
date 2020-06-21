/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3c8a2939ea98b31ed1d8.js"
  },
  {
    "url": "framework-8dcecaaefd71e2213eb2.js"
  },
  {
    "url": "1bfc9850-edb3d1679af908b8ad6b.js"
  },
  {
    "url": "app-dc7318f1a525c8541f61.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e8f25e52dcae04590b07a4accfee3f5a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "5d0eb9a2bd5e32ceb45b166cb52b9ed8"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-pages-404-tsx-fa6c1d476f05a190bd44.js"
  },
  {
    "url": "6f89bbd25ed84b02c1c782caf7174e918b7ab15f-44f4fe7f0f956fd3a48c.js"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "9f7e23dffed634bade188874f7c02852"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "097a0308fc1b1a1fc37e774650450f9f"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-note-js-5d59b6803a43c8970e50.js"
  },
  {
    "url": "page-data/example-note/page-data.json",
    "revision": "81437b43337f638c9a4e080fa63e649c"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-notes-js-a4194cfff34a5d6ca3eb.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "a9610547d9331fddf5af82328214a4f0"
  },
  {
    "url": "page-data/my-note/page-data.json",
    "revision": "a58b930fba4bb93625d83adcd798484f"
  },
  {
    "url": "page-data/travis/page-data.json",
    "revision": "7b2c46669f79f7e1ffe088d1130c9921"
  },
  {
    "url": "component---node-modules-gatsby-theme-code-notes-src-templates-tag-page-js-80a330c49c978a6a8506.js"
  },
  {
    "url": "page-data/tag/example/page-data.json",
    "revision": "5f03541a70b6f4c683d97d6c58baa910"
  },
  {
    "url": "page-data/tag/test/page-data.json",
    "revision": "ded0710cfa0eb0dbeaf1e2b05c682b50"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "1a0a6c6783fe03675baabeae66c85029"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/code-notes`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/code-notes/app-dc7318f1a525c8541f61.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/code-notes/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
