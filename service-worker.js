!function(){"use strict";const e=1602674277086,t="cache"+e,s=["/service-worker-index.html","/aurora.jpg","/favicon.png","/global.css","/index.css","/logo-192.png","/logo-512.png","/manifest.json","/postcss.config.js"].map((e=>"/Aurora-data"+e)),n=["/client/inject_styles.5607aec6.js","/client/index.d2745b3f.js","/client/client.2977978b.js"].map((e=>"/Aurora-data"+e)).concat(s),a=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&a.has(s.pathname)?t.respondWith(caches.match(t.request)):"only-if-cached"!==t.request.cache&&t.respondWith(caches.open("offline"+e).then((async e=>{try{const s=await fetch(t.request);return e.put(t.request,s.clone()),s}catch(s){const n=await e.match(t.request);if(n)return n;throw s}})))))}))}();
