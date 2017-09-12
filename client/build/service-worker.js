"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","b19a9b90c1fc2a2662f3935c85e0920c"],["/static/css/main.f9000f1f.css","0bc2097016f5297dccac0535f9a83c7d"],["/static/js/main.c0a44f64.js","c29489d72194875cf1662b6860d65d5d"],["/static/media/077.5d1a02ea.jpg","5d1a02ea9aad9da2f2d6c236905bd90e"],["/static/media/098.ace574fc.jpg","ace574fcbca1aaa705f4e910034579b9"],["/static/media/Evogria Italic.811e4ccd.woff","811e4ccda7ad696affb4fc18d9bc1435"],["/static/media/Evogria.ec97ae08.woff","ec97ae08701c51199f997367871ad4ee"],["/static/media/app-extras.d309a595.png","d309a5952ce2599cc14016450b3de7ac"],["/static/media/appstores.d7eb8fba.png","d7eb8fba58a859421225637ada01b65e"],["/static/media/buy-1-thumb.6aeaae93.jpg","6aeaae93893f7fdc930db41a5e9f8eff"],["/static/media/buy-1.0ffe499b.jpg","0ffe499b22a4207a0abf8c52b92eaad4"],["/static/media/buy-2-thumb.52815ddb.jpg","52815ddb6fef2a1105ef0362724fbcfd"],["/static/media/buy-2.bdef112a.jpg","bdef112a494fe62529c193fdcab00b3b"],["/static/media/buy-3.68b9a4fd.jpg","68b9a4fd56f781d7febfc5c644771865"],["/static/media/buy-4-thumb.dc2dac0c.jpg","dc2dac0c994eedf8d088a298ee90fad4"],["/static/media/buy-4.be19939d.jpg","be19939d99dc0e440ad7aebc0c9a7def"],["/static/media/buy-5-thumb.116b7a7c.jpg","116b7a7c53c38bda48c1ca542ab1bc73"],["/static/media/buy-5.40167586.jpg","401675865685e9ec40ebda9881e5715a"],["/static/media/buy-card-1.1b91389b.png","1b91389bb0a50d0cf6ea1c9ca4f6e4bc"],["/static/media/buy-card-2.c9fab22d.png","c9fab22d6892190e5a5dc0634a047cc4"],["/static/media/buy-card-3.f5514f5b.png","f5514f5bd3181b41d281923d63a77968"],["/static/media/cad.c9c35b56.png","c9c35b5695caa933c970fe805c7f9fe9"],["/static/media/drip-drip.384ed8d2.png","384ed8d2b361cd881d9ed4a9f1b82452"],["/static/media/duckie.72344bd0.jpg","72344bd0b7a91221736ea0a557d029b1"],["/static/media/faceb.9d6f2d09.png","9d6f2d09f9b49094f96465c79b4be3ad"],["/static/media/guardian-set.acf9e48c.jpg","acf9e48c7caebdfb4e52073cb584d3cd"],["/static/media/guardian-wire-1.3c669b76.jpg","3c669b762c5c72abc24341b61c6e8567"],["/static/media/guardian.b41799ae.png","b41799ae6121501074f970c8993bd9de"],["/static/media/guardian1.818a336b.png","818a336b3651228e187e174257d5804c"],["/static/media/guardianTwo.30563bf9.png","30563bf9a6d9da95e08f1e4097715019"],["/static/media/guradianhero.049c502b.png","049c502bfbf88f6712713f37c767926b"],["/static/media/half-duck.239aa6cf.png","239aa6cf71c2cf580bf8181e44a25942"],["/static/media/half-g.4fce23a7.png","4fce23a771414c29950761a1a50db94f"],["/static/media/hand-app.ab0fe215.png","ab0fe2150e81d3d12eaf5f7847034ca2"],["/static/media/herotransweb.891d6a9e.png","891d6a9e97ab038b33a5ba58f213704f"],["/static/media/home-duckie.1935b2d8.jpg","1935b2d88653d7ccd6b1f366bb12a947"],["/static/media/home-valve-recut.787a1801.png","787a1801672b0bf0fa6951e2d388feaf"],["/static/media/how-slider-3.a92341a3.png","a92341a3d81c48b37b16dcc25bf18439"],["/static/media/how-slider-4.47af3b88.png","47af3b88584aaa4ccbe92db09d9c1a6f"],["/static/media/how-slider-5.3728342e.png","3728342ea7413031480a8c4eee6743fd"],["/static/media/leak-detector-background.2bf5d618.jpg","2bf5d618f4e1de50d4e16a2b6d0c7118"],["/static/media/leak.4fa3cc8b.png","4fa3cc8bcf31cd5d1a35c252683059d4"],["/static/media/leaking-pipe.b4b573c0.jpg","b4b573c07b423e7922ee756cd61e5892"],["/static/media/photo2.5084515e.png","5084515e6ace80af30d05613a85f5a57"],["/static/media/programming.5107beb5.png","5107beb5b057ed0e210de255678c39e6"],["/static/media/purchaseOne.edf5367d.png","edf5367df64aebf63e37b3067eeac30b"],["/static/media/purchaseTwo.c63462c8.png","c63462c89dc64712339a994d8750f953"],["/static/media/researchFirst.b794e8c7.png","b794e8c7c967084f71bd78fdf55dc1fe"],["/static/media/splash2.877eeddd.png","877eeddd0974c717aabf4eaf9427da79"],["/static/media/tiles.1b0fd153.jpg","1b0fd15362f2af005ba33333c093642b"],["/static/media/toilet.d3234977.jpg","d32349771a5459092d9bd5fefc27e4a3"],["/static/media/valve-tiles.9cbfe11f.jpg","9cbfe11f3ee636f4c2407cf45611c8a0"],["/static/media/valve.2fc1078d.png","2fc1078d41f044057a133c28616f3d95"],["/static/media/vc-section-1.af7c9cc3.jpg","af7c9cc3128d88cabb32de20b7c71cc2"],["/static/media/video-slate.a75c98f3.jpg","a75c98f3c6cf0fdc32a85c759cf2a022"],["/static/media/water-bg.2647f2c6.jpg","2647f2c604e95eb24036f51035841413"],["/static/media/water-detector-big-cut.a3c1ff4f.png","a3c1ff4f52a0fc76c033df29b86a35ed"],["/static/media/water-detector-section-1.ea6674dd.png","ea6674dd2ca33d802eefeba1cf5a2de6"],["/static/media/water-detector-section-2.2a9b07f8.png","2a9b07f8db1b7b58edb9a66427f8185f"],["/static/media/water-detector-section-3.834724fb.jpg","834724fb499628d262b4bf06e445f602"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var d=new URL(e);return t&&d.pathname.match(t)||(d.search+=(d.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),d.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),d=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),d]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(c)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});