!function(){"use strict";const e=1651144159321,t=[{pattern:/^\/$/}],s=`cache${e}`,n=["/service-worker-index.html","/aurora.jpg","/favicon.png","/global.css","/index.css","/logo-192.png","/logo-512.png","/manifest.json","/postcss.config.js"].map((e=>"/Aurora-data"+e)),a=["/client/client.e4b23ecd.js","/client/inject_styles.5607aec6.js","/client/index.18661d3d.js"].map((e=>"/Aurora-data"+e)).concat(n),c=new Set(a);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(a))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const n=new URL(s.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&c.has(n.pathname)?s.respondWith(caches.match(s.request)):n.origin===self.origin&&t.find((e=>e.pattern.test(n.pathname)))?s.respondWith(caches.match("/Aurora-data/service-worker-index.html")):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open(`offline${e}`).then((async e=>{try{const t=await fetch(s.request);return e.put(s.request,t.clone()),t}catch(t){const n=await e.match(s.request);if(n)return n;throw t}})))))}))}();
