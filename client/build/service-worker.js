"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f48d6ed6ed93785ce74c68562cd4b8ef"],["/static/css/main.f5d4ef9a.css","b93b0484a6d9f3dde68f86978ef60cc5"],["/static/js/main.c3542a32.js","b4e51494cbfe2bffba29b707709b1637"],["/static/media/Evogria Italic.811e4ccd.woff","811e4ccda7ad696affb4fc18d9bc1435"],["/static/media/Evogria.ec97ae08.woff","ec97ae08701c51199f997367871ad4ee"],["/static/media/cad.c9c35b56.png","c9c35b5695caa933c970fe805c7f9fe9"],["/static/media/duckie.72344bd0.jpg","72344bd0b7a91221736ea0a557d029b1"],["/static/media/faceb.9d6f2d09.png","9d6f2d09f9b49094f96465c79b4be3ad"],["/static/media/guardian.b41799ae.png","b41799ae6121501074f970c8993bd9de"],["/static/media/guardian1.818a336b.png","818a336b3651228e187e174257d5804c"],["/static/media/guardianTwo.30563bf9.png","30563bf9a6d9da95e08f1e4097715019"],["/static/media/guradianhero.049c502b.png","049c502bfbf88f6712713f37c767926b"],["/static/media/herotransweb.5c1296cd.png","5c1296cdeb03ffa4b839c4e4652018ea"],["/static/media/leak-detector-background.2bf5d618.jpg","2bf5d618f4e1de50d4e16a2b6d0c7118"],["/static/media/leak.4fa3cc8b.png","4fa3cc8bcf31cd5d1a35c252683059d4"],["/static/media/leaking-pipe.b4b573c0.jpg","b4b573c07b423e7922ee756cd61e5892"],["/static/media/programming.5107beb5.png","5107beb5b057ed0e210de255678c39e6"],["/static/media/purchaseOne.edf5367d.png","edf5367df64aebf63e37b3067eeac30b"],["/static/media/purchaseTwo.c63462c8.png","c63462c89dc64712339a994d8750f953"],["/static/media/researchFirst.b794e8c7.png","b794e8c7c967084f71bd78fdf55dc1fe"],["/static/media/splash2.e5df8cb7.png","e5df8cb73f69f16cf9a134eb7818582a"],["/static/media/valve.2fc1078d.png","2fc1078d41f044057a133c28616f3d95"],["/static/media/video-slate.4ae39d27.jpg","4ae39d27dd52789f9482a6e15effb583"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});