!function(){"use strict";const e=1602674940664,t=[{pattern:/^\/$/}],s="cache"+e,a=["/service-worker-index.html","/aurora.jpg","/favicon.png","/global.css","/index.css","/logo-192.png","/logo-512.png","/manifest.json","/postcss.config.js"].map((e=>"/Aurora-data"+e)),n=["/client/inject_styles.5607aec6.js","/client/index.c01a634b.js","/client/client.df220531.js"].map((e=>"/Aurora-data"+e)).concat(a),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(s).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const t of e)t!==s&&await caches.delete(t);self.clients.claim()})))})),self.addEventListener("fetch",(s=>{if("GET"!==s.request.method||s.request.headers.has("range"))return;const a=new URL(s.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&c.has(a.pathname)?s.respondWith(caches.match(s.request)):a.origin===self.origin&&t.find((e=>e.pattern.test(a.pathname)))?s.respondWith(caches.match("/Aurora-data/service-worker-index.html")):"only-if-cached"!==s.request.cache&&s.respondWith(caches.open("offline"+e).then((async e=>{try{const t=await fetch(s.request);return e.put(s.request,t.clone()),t}catch(t){const a=await e.match(s.request);if(a)return a;throw t}})))))}))}();
