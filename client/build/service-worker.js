"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","ff4f81c68ed91bbe984dddc1b91a0016"],["/static/css/main.fd24ae00.css","3745334ee16fcce7dfdf3b6615a2f1ca"],["/static/js/main.2a332849.js","7ae7bbbf22ddb8425859fcab1781dfbf"],["/static/media/077.5d1a02ea.jpg","5d1a02ea9aad9da2f2d6c236905bd90e"],["/static/media/098.ace574fc.jpg","ace574fcbca1aaa705f4e910034579b9"],["/static/media/Evogria Italic.811e4ccd.woff","811e4ccda7ad696affb4fc18d9bc1435"],["/static/media/Evogria.ec97ae08.woff","ec97ae08701c51199f997367871ad4ee"],["/static/media/cad.c9c35b56.png","c9c35b5695caa933c970fe805c7f9fe9"],["/static/media/duckie.72344bd0.jpg","72344bd0b7a91221736ea0a557d029b1"],["/static/media/faceb.9d6f2d09.png","9d6f2d09f9b49094f96465c79b4be3ad"],["/static/media/guardian.b41799ae.png","b41799ae6121501074f970c8993bd9de"],["/static/media/guardian1.818a336b.png","818a336b3651228e187e174257d5804c"],["/static/media/guardianTwo.30563bf9.png","30563bf9a6d9da95e08f1e4097715019"],["/static/media/guradianhero.049c502b.png","049c502bfbf88f6712713f37c767926b"],["/static/media/half-g.4fce23a7.png","4fce23a771414c29950761a1a50db94f"],["/static/media/herotransweb.5c1296cd.png","5c1296cdeb03ffa4b839c4e4652018ea"],["/static/media/how-slider-3.a92341a3.png","a92341a3d81c48b37b16dcc25bf18439"],["/static/media/how-slider-4.47af3b88.png","47af3b88584aaa4ccbe92db09d9c1a6f"],["/static/media/how-slider-5.3728342e.png","3728342ea7413031480a8c4eee6743fd"],["/static/media/leak-detector-background.2bf5d618.jpg","2bf5d618f4e1de50d4e16a2b6d0c7118"],["/static/media/leak.4fa3cc8b.png","4fa3cc8bcf31cd5d1a35c252683059d4"],["/static/media/leaking-pipe.b4b573c0.jpg","b4b573c07b423e7922ee756cd61e5892"],["/static/media/programming.5107beb5.png","5107beb5b057ed0e210de255678c39e6"],["/static/media/purchaseOne.edf5367d.png","edf5367df64aebf63e37b3067eeac30b"],["/static/media/purchaseTwo.c63462c8.png","c63462c89dc64712339a994d8750f953"],["/static/media/researchFirst.b794e8c7.png","b794e8c7c967084f71bd78fdf55dc1fe"],["/static/media/splash2.e5df8cb7.png","e5df8cb73f69f16cf9a134eb7818582a"],["/static/media/valve.2fc1078d.png","2fc1078d41f044057a133c28616f3d95"],["/static/media/video-slate.4ae39d27.jpg","4ae39d27dd52789f9482a6e15effb583"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});