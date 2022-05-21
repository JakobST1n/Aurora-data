import{S as e,i as t,s as a,e as s,c as r,a as n,d as l,b as o,f as i,g as c,n as d,w as u,h,j as p,k as f,l as m,t as v,m as g,o as _,p as w,q as $,r as k,u as b,v as E,x as y,y as D,z as I,A as V,B as x,C as T,D as q,E as S,F as P,G as M,H as N,I as j,J as A,K as C}from"./client.4b77ae53.js";function O(e){let t,a,u,h,p,f,m,v,g;return{c(){t=s("div"),a=s("div"),u=s("div"),h=s("div"),p=s("div"),f=s("div"),m=s("div"),v=s("div"),g=s("div"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);a=r(s,"DIV",{class:!0}),n(a).forEach(l),u=r(s,"DIV",{class:!0}),n(u).forEach(l),h=r(s,"DIV",{class:!0}),n(h).forEach(l),p=r(s,"DIV",{class:!0}),n(p).forEach(l),f=r(s,"DIV",{class:!0}),n(f).forEach(l),m=r(s,"DIV",{class:!0}),n(m).forEach(l),v=r(s,"DIV",{class:!0}),n(v).forEach(l),g=r(s,"DIV",{class:!0}),n(g).forEach(l),s.forEach(l),this.h()},h(){o(a,"class","svelte-7k6qu0"),o(u,"class","svelte-7k6qu0"),o(h,"class","svelte-7k6qu0"),o(p,"class","svelte-7k6qu0"),o(f,"class","svelte-7k6qu0"),o(m,"class","svelte-7k6qu0"),o(v,"class","svelte-7k6qu0"),o(g,"class","svelte-7k6qu0"),o(t,"class","lds-roller svelte-7k6qu0")},m(e,s){i(e,t,s),c(t,a),c(t,u),c(t,h),c(t,p),c(t,f),c(t,m),c(t,v),c(t,g)},p:d,i:d,o:d,d(e){e&&l(t)}}}class F extends e{constructor(e){super(),t(this,e,null,O,a,{})}}const J=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];function B(e){if(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(e))return e;if(/^\d{4}\s[a-z,A-Z]+\s\d{2}$/.test(e)){let t=e.split(" ");return e=`${t[0]}-${function(e,t=2){let a=e.toString();for(;t-a.length>0;)a="0"+a;return a}(function(e){if("string"!=typeof e)throw new Error(`Cannot get month number of ${typeof e}...`);if(e.length<3)throw new Error(`Cannot get month number string "${e}" of length ${e.length}...`);e=e.substring(0,3).toLowerCase();let t=J.indexOf(e)+1;if(-1===t)throw new Error(`Could not find the month ${e}.`);return t}(t[1]))}-${t[2]}T00:00:00Z`}return/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/.test(e)?e.replace(" ","T")+"Z":/^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}.\d{4}/.test(e)?e.replace(" ","T").split(".")[0]+"Z":(console.warn(e),e)}function H(e){return e=B(e),new Date(e)}const K={updated:new Date(0,0,0),updating:!0};let z=U("navigator_location"),Z=U("earth_weather"),L=U("space_weather");const W=u(X("navigator_location")?function(e){return e.updated=new Date(e.updated),e}(z):{...K,available:!1,longitude:null,latitude:null,city:null}),G=u(X("earth_weather")?function(e){let t=e;return t.updated=new Date(t.updated),t.yr_data_raw.properties.meta.updated_at=new Date(t.yr_data_raw.properties.meta.updated_at),t.yr_data_raw.properties.timeseries=t.yr_data_raw.properties.timeseries.map((e=>({...e,time:new Date(e.time)}))),t}(Z):{...K,available:!1}),R=u(X("space_weather")?function(e){let t=e;return t.updated=new Date(t.updated),t.usnoaa_data_raw.geospace_pred_est_kp_1_hour=t.usnoaa_data_raw.geospace_pred_est_kp_1_hour.map((e=>({...e,model_prediction_time:new Date(e.model_prediction_time)}))),t.usnoaa_data_raw.noaa_planetary_k_index_forecast=t.usnoaa_data_raw.noaa_planetary_k_index_forecast.map((e=>({...e,time:new Date(e.time)}))),t.usnoaa_data_raw.outlook_27_day=t.usnoaa_data_raw.outlook_27_day.map((e=>({...e,time:new Date(e.time)}))),t.usnoaa_data_raw.solar_wind_mag_field.TimeStamp=new Date(t.usnoaa_data_raw.solar_wind_mag_field.TimeStamp),t}(L):{...K});function Q(e,t){"undefined"!=typeof window&&localStorage.setItem(e,JSON.stringify(t))}function U(e){if("undefined"!=typeof window)return JSON.parse(localStorage.getItem(e))}function X(e){return"undefined"!=typeof window&&localStorage.hasOwnProperty(e)}async function Y(){if("undefined"==typeof window)return;let e;te(W,!0),console.debug("Attempting to get browser geolocation.");try{e=await async function(){return new Promise(((e,t)=>{"undefined"!=typeof navigator?navigator.geolocation.getCurrentPosition((t=>{e({longitude:t.coords.longitude,latitude:t.coords.latitude})}),(e=>{t(e)})):t(Error())}))}()}catch(e){if(0==h(W).available)return;return console.warn(`Could not get browser geolocation (${e}).`),W.update((e=>({...e,available:!1,city:null,longitude:null,latitude:null}))),void te(W,!1)}if(console.debug("Got geolocation from browser."),h(W).available&&Date.now()-h(W).updated<3e5)return console.debug("Not fetching city name, as the location a short time ago."),void te(W,!1,!1);console.debug("Attempting to get city name from geolocation.");let t={city:void 0};try{let a=await fetch(`https://geocode.xyz/${e.latitude},${e.longitude}?geoit=json`);t=await a.json()}catch(e){console.error(`Could not get city name (${e})`)}console.debug("Got city name from browser."),W.update((a=>({...a,available:!0,city:t.city,...e}))),te(W,!1)}async function ee(){if("undefined"==typeof window)return;if(Date.now()-h(R).updated<3e5)return void console.debug("Skipping fetch of space weather as the data was fetched very recently.");let e;te(R,!0),console.debug("Attempting to fetch space weather data.");try{e=await async function(){let e,t={now:{bz:"-",bt:"-",kp:"-",kp_min:"-",kp_max:"-"},usnoaa_data_raw:{solar_wind_mag_field:!1,noaa_planetary_k_index_forecast:!1,geospace_pred_est_kp_1_hour:!1,outlook_27_day:!1}};console.debug("Fetch solar-wind-mag-field data from SWPC-NOAA.");let a=await fetch("https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json");e=await a.json(),e.TimeStamp=H(e.TimeStamp),t.usnoaa_data_raw.solar_wind_mag_field=e,t.now.bz=t.usnoaa_data_raw.solar_wind_mag_field.Bz,t.now.bt=t.usnoaa_data_raw.solar_wind_mag_field.Bt,console.debug(e),console.debug("Fetch 1-hour kp predictions from SWPC-NOAA."),a=await fetch("https://services.swpc.noaa.gov/json/geospace/geospace_pred_est_kp_1_hour.json"),e=await a.json(),e=e.map((e=>({...e,model_prediction_time:H(e.model_prediction_time)}))),t.usnoaa_data_raw.geospace_pred_est_kp_1_hour=e,console.debug(e),console.debug("Fetch 27-day outlook from SWPC-NOAA."),a=await fetch("https://services.swpc.noaa.gov/text/27-day-outlook.txt"),e=await a.text(),console.debug(e),e=[...e.matchAll(/^(?<time>\d{4}\s.{3}\s\d{2})\s+(?<flux107>\d+)\s+(?<aindex>\d+)\s+(?<kindex>\d+)$/gm)],console.debug(e),e=e.map((e=>({...e.groups,time:H(e.groups.time)}))),t.usnoaa_data_raw.outlook_27_day=e,console.debug(e),console.debug("Fetch planetary k-index forecast from SWPC-NOAA."),a=await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json"),e=await a.json(),e.shift(),t.usnoaa_data_raw.noaa_planetary_k_index_forecast=e,console.debug(e);let s=new Date,r=new Date(0,0,0),n=1e3,l=0;return t.usnoaa_data_raw.noaa_planetary_k_index_forecast.forEach(((e,a)=>{e[1]>l&&(l=e[1]),e[1]<n&&(n=e[1]);let o=H(e[0]);Math.abs(o.getTime()-s.getTime())<Math.abs(r.getTime()-s.getTime())&&(r=o,t.now.kp=e[1]),t.usnoaa_data_raw.noaa_planetary_k_index_forecast[a]={time:o,kp:e[1],observed:e[2]}})),t.now.kp_min=n.toString(),t.now.kp_max=l.toString(),console.debug("Fetched Space weather"),console.log(t),t}()}catch(e){return console.error(e),void te(R,!1,!1)}R.update((t=>({...t,...e}))),te(R,!1)}function te(e,t=!1,a=!0){let s={};a&&!t&&(s={updated:new Date}),e.update((e=>({...e,...s,updating:t})))}function ae(e){let t,a,c;function d(e,t){return void 0!==e[2].city?re:se}let u=d(e),h=u(e);return{c(){t=s("i"),a=p(),h.c(),c=f(),this.h()},l(e){t=r(e,"I",{class:!0}),n(t).forEach(l),a=m(e),h.l(e),c=f(),this.h()},h(){o(t,"class","symbol fas fa-map-marker-alt svelte-9kdo4s")},m(e,s){i(e,t,s),i(e,a,s),h.m(e,s),i(e,c,s)},p(e,t){u===(u=d(e))&&h?h.p(e,t):(h.d(1),h=u(e),h&&(h.c(),h.m(c.parentNode,c)))},d(e){e&&l(t),e&&l(a),h.d(e),e&&l(c)}}}function se(e){let t,a,d,u,h,p,f=e[2].longitude+"",m=e[2].latitude+"";return{c(){t=s("h1"),a=v("long: "),d=v(f),u=s("br"),h=v("lat: "),p=v(m),this.h()},l(e){t=r(e,"H1",{class:!0});var s=n(t);a=g(s,"long: "),d=g(s,f),u=r(s,"BR",{}),h=g(s,"lat: "),p=g(s,m),s.forEach(l),this.h()},h(){o(t,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),c(t,a),c(t,d),c(t,u),c(t,h),c(t,p)},p(e,t){4&t&&f!==(f=e[2].longitude+"")&&w(d,f),4&t&&m!==(m=e[2].latitude+"")&&w(p,m)},d(e){e&&l(t)}}}function re(e){let t,a,d=e[2].city+"";return{c(){t=s("h1"),a=v(d),this.h()},l(e){t=r(e,"H1",{class:!0});var s=n(t);a=g(s,d),s.forEach(l),this.h()},h(){o(t,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),c(t,a)},p(e,t){4&t&&d!==(d=e[2].city+"")&&w(a,d)},d(e){e&&l(t)}}}function ne(e){let t,a,s;function r(e,a){return 24&a&&(t=null),null==t&&(t=!!(Math.abs(e[3].updated-e[4].updated)>6e5)),t?oe:le}let n=r(e,-1),o=n(e),c=e[1]>=3e5&&ie(e);return{c(){o.c(),a=p(),c&&c.c(),s=f()},l(e){o.l(e),a=m(e),c&&c.l(e),s=f()},m(e,t){o.m(e,t),i(e,a,t),c&&c.m(e,t),i(e,s,t)},p(e,t){n===(n=r(e,t))&&o?o.p(e,t):(o.d(1),o=n(e),o&&(o.c(),o.m(a.parentNode,a))),e[1]>=3e5?c?c.p(e,t):(c=ie(e),c.c(),c.m(s.parentNode,s)):c&&(c.d(1),c=null)},d(e){o.d(e),e&&l(a),c&&c.d(e),e&&l(s)}}}function le(e){let t,a,o=e[0].toLocaleString("no-NO",{dateStyle:"medium",timeStyle:"short"})+"";return{c(){t=s("p"),a=v(o)},l(e){t=r(e,"P",{});var s=n(t);a=g(s,o),s.forEach(l)},m(e,s){i(e,t,s),c(t,a)},p(e,t){1&t&&o!==(o=e[0].toLocaleString("no-NO",{dateStyle:"medium",timeStyle:"short"})+"")&&w(a,o)},d(e){e&&l(t)}}}function oe(e){let t,a;return{c(){t=s("p"),a=v("There is more than 10 minutes difference between data updates")},l(e){t=r(e,"P",{});var s=n(t);a=g(s,"There is more than 10 minutes difference between data updates"),s.forEach(l)},m(e,s){i(e,t,s),c(t,a)},p:d,d(e){e&&l(t)}}}function ie(e){let t,a,d,u,h,p=Math.round(e[1]/60/1e3)+"";return{c(){t=s("span"),a=s("i"),d=v(" Data is "),u=v(p),h=v(" minutes old!"),this.h()},l(e){t=r(e,"SPAN",{style:!0});var s=n(t);a=r(s,"I",{class:!0}),n(a).forEach(l),d=g(s," Data is "),u=g(s,p),h=g(s," minutes old!"),s.forEach(l),this.h()},h(){o(a,"class","symbol fas fa-exclamation-circle"),_(t,"color","red")},m(e,s){i(e,t,s),c(t,a),c(t,d),c(t,u),c(t,h)},p(e,t){2&t&&p!==(p=Math.round(e[1]/60/1e3)+"")&&w(u,p)},d(e){e&&l(t)}}}function ce(e){let t,a,u,h,f,_,$,k,b,E,y,D,I=e[4].now.kp+"",V=e[4].now.kp_max+"",x=e[4].now.kp_min+"";return{c(){t=s("h2"),a=v("KP "),u=v(I),h=p(),f=s("p"),_=s("span"),$=v("↑ KP "),k=v(V),b=p(),E=s("span"),y=v("↓ KP "),D=v(x),this.h()},l(e){t=r(e,"H2",{class:!0});var s=n(t);a=g(s,"KP "),u=g(s,I),s.forEach(l),h=m(e),f=r(e,"P",{});var o=n(f);_=r(o,"SPAN",{classname:!0});var i=n(_);$=g(i,"↑ KP "),k=g(i,V),i.forEach(l),b=m(o),E=r(o,"SPAN",{classname:!0});var c=n(E);y=g(c,"↓ KP "),D=g(c,x),c.forEach(l),o.forEach(l),this.h()},h(){o(t,"class","svelte-9kdo4s"),o(_,"classname","pr-2"),o(E,"classname","pl-2")},m(e,s){i(e,t,s),c(t,a),c(t,u),i(e,h,s),i(e,f,s),c(f,_),c(_,$),c(_,k),c(f,b),c(f,E),c(E,y),c(E,D)},p(e,t){16&t&&I!==(I=e[4].now.kp+"")&&w(u,I),16&t&&V!==(V=e[4].now.kp_max+"")&&w(k,V),16&t&&x!==(x=e[4].now.kp_min+"")&&w(D,x)},i:d,o:d,d(e){e&&l(t),e&&l(h),e&&l(f)}}}function de(e){let t,a;return t=new F({}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){V(t,e,s),a=!0},p:d,i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){x(t,e)}}}function ue(e){let t,a,d,u,h,_,$,k,b,E,y,D,I,V,x,T=e[4].now.bz+"",q=e[4].now.bt+"",S=e[3].available&&he(e);return{c(){t=s("div"),a=s("p"),d=v("BZ"),u=p(),h=s("p"),_=v(T),$=p(),k=s("div"),b=s("p"),E=v("BT"),y=p(),D=s("p"),I=v(q),V=p(),S&&S.c(),x=f(),this.h()},l(e){t=r(e,"DIV",{});var s=n(t);a=r(s,"P",{class:!0});var o=n(a);d=g(o,"BZ"),o.forEach(l),u=m(s),h=r(s,"P",{class:!0});var i=n(h);_=g(i,T),i.forEach(l),s.forEach(l),$=m(e),k=r(e,"DIV",{});var c=n(k);b=r(c,"P",{class:!0});var p=n(b);E=g(p,"BT"),p.forEach(l),y=m(c),D=r(c,"P",{class:!0});var v=n(D);I=g(v,q),v.forEach(l),c.forEach(l),V=m(e),S&&S.l(e),x=f(),this.h()},h(){o(a,"class","svelte-9kdo4s"),o(h,"class","svelte-9kdo4s"),o(b,"class","svelte-9kdo4s"),o(D,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),c(t,a),c(a,d),c(t,u),c(t,h),c(h,_),i(e,$,s),i(e,k,s),c(k,b),c(b,E),c(k,y),c(k,D),c(D,I),i(e,V,s),S&&S.m(e,s),i(e,x,s)},p(e,t){16&t&&T!==(T=e[4].now.bz+"")&&w(_,T),16&t&&q!==(q=e[4].now.bt+"")&&w(I,q),e[3].available?S?S.p(e,t):(S=he(e),S.c(),S.m(x.parentNode,x)):S&&(S.d(1),S=null)},d(e){e&&l(t),e&&l($),e&&l(k),e&&l(V),S&&S.d(e),e&&l(x)}}}function he(e){let t,a,d,u,h,f,_,$,k,b,E,y,D,I,V,x=e[3].now.temp+"",T=e[3].now.clouds+"";return{c(){t=s("div"),a=s("p"),d=v("Temp"),u=p(),h=s("p"),f=v(x),_=v("°C"),$=p(),k=s("div"),b=s("p"),E=v("Clouds"),y=p(),D=s("p"),I=v(T),V=v("%"),this.h()},l(e){t=r(e,"DIV",{});var s=n(t);a=r(s,"P",{class:!0});var o=n(a);d=g(o,"Temp"),o.forEach(l),u=m(s),h=r(s,"P",{class:!0});var i=n(h);f=g(i,x),_=g(i,"°C"),i.forEach(l),s.forEach(l),$=m(e),k=r(e,"DIV",{});var c=n(k);b=r(c,"P",{class:!0});var p=n(b);E=g(p,"Clouds"),p.forEach(l),y=m(c),D=r(c,"P",{class:!0});var v=n(D);I=g(v,T),V=g(v,"%"),v.forEach(l),c.forEach(l),this.h()},h(){o(a,"class","svelte-9kdo4s"),o(h,"class","svelte-9kdo4s"),o(b,"class","svelte-9kdo4s"),o(D,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),c(t,a),c(a,d),c(t,u),c(t,h),c(h,f),c(h,_),i(e,$,s),i(e,k,s),c(k,b),c(b,E),c(k,y),c(k,D),c(D,I),c(D,V)},p(e,t){8&t&&x!==(x=e[3].now.temp+"")&&w(f,x),8&t&&T!==(T=e[3].now.clouds+"")&&w(I,T)},d(e){e&&l(t),e&&l($),e&&l(k)}}}function pe(e){let t,a,d,u,h,f,v,g,_,w,y,D,I=!e[2].updating&&e[2].available&&!e[3].updating&&!e[4].updating&&ae(e),V=!e[3].updating&&!e[4].updating&&ne(e);const x=[de,ce],T=[];function q(e,t){return e[4].updating||e[3].updating?0:1}g=q(e),_=T[g]=x[g](e);let S=!e[4].updating&&!e[3].updating&&ue(e);return{c(){t=s("div"),a=s("div"),d=s("div"),I&&I.c(),u=p(),h=s("div"),V&&V.c(),f=p(),v=s("div"),_.c(),w=p(),y=s("div"),S&&S.c(),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);a=r(s,"DIV",{class:!0});var o=n(a);d=r(o,"DIV",{class:!0});var i=n(d);I&&I.l(i),i.forEach(l),u=m(o),h=r(o,"DIV",{class:!0});var c=n(h);V&&V.l(c),c.forEach(l),f=m(o),v=r(o,"DIV",{class:!0});var p=n(v);_.l(p),p.forEach(l),w=m(o),y=r(o,"DIV",{class:!0});var g=n(y);S&&S.l(g),g.forEach(l),o.forEach(l),s.forEach(l),this.h()},h(){o(d,"class","weatherCurrent-data-location svelte-9kdo4s"),o(h,"class","weatherCurrent-data-date"),o(v,"class","weatherCurrent-data-kp svelte-9kdo4s"),o(y,"class","current-details svelte-9kdo4s"),o(a,"class","weatherCurrent-data svelte-9kdo4s"),o(t,"class","weatherCurrent-wrapper svelte-9kdo4s")},m(e,s){i(e,t,s),c(t,a),c(a,d),I&&I.m(d,null),c(a,u),c(a,h),V&&V.m(h,null),c(a,f),c(a,v),T[g].m(v,null),c(a,w),c(a,y),S&&S.m(y,null),D=!0},p(e,[t]){e[2].updating||!e[2].available||e[3].updating||e[4].updating?I&&(I.d(1),I=null):I?I.p(e,t):(I=ae(e),I.c(),I.m(d,null)),e[3].updating||e[4].updating?V&&(V.d(1),V=null):V?V.p(e,t):(V=ne(e),V.c(),V.m(h,null));let a=g;g=q(e),g===a?T[g].p(e,t):($(),k(T[a],1,1,(()=>{T[a]=null})),b(),_=T[g],_?_.p(e,t):(_=T[g]=x[g](e),_.c()),E(_,1),_.m(v,null)),e[4].updating||e[3].updating?S&&(S.d(1),S=null):S?S.p(e,t):(S=ue(e),S.c(),S.m(y,null))},i(e){D||(E(_),D=!0)},o(e){k(_),D=!1},d(e){e&&l(t),I&&I.d(),V&&V.d(),T[g].d(),S&&S.d()}}}function fe(e,t,a){let s,r,n;y(e,W,(e=>a(2,s=e))),y(e,G,(e=>a(3,r=e))),y(e,R,(e=>a(4,n=e)));let l=new Date(0,0,0),o=0;return setInterval((function(){let e=h(G).updated,t=h(R).updated,s=new Date;s-t>s-e?(a(0,l=t),a(1,o=s-t)):(a(0,l=e),a(1,o=s-e))}),500),[l,o,s,r,n]}Y(),W.subscribe((async function(e=null){if("undefined"==typeof window)return;if(null===e)return;if(e.updating)return;if(!e.available)return G.update((e=>({...e,available:!1}))),void te(G,!1);if(h(G).available&&Date.now()-h(G).updated<3e5)return void console.debug("Skipping fetch of earth weather as the data was fetched very recently.");te(G,!0),console.debug("Attempting to fetch earth weather data from api-met.");let t=await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${e.latitude}&lon=${e.longitude}`),a=await t.json(),s={clouds:null,temp:null};try{s.clouds=a.properties.timeseries[0].data.instant.details.cloud_area_fraction,s.temp=a.properties.timeseries[0].data.instant.details.air_temperature,a.properties.timeseries=a.properties.timeseries.map((e=>({...e,time:H(e.time)})))}catch(e){return console.errpr(`Could not get earth weather data (${e})`),void te(G,!1,!1)}console.debug("Fetched earth weather successfully."),G.update((e=>({...e,yr_data_raw:a,now:s,available:!0}))),te(G,!1)})),ee(),setInterval(Y,15e4),setInterval(ee,15e4),W.subscribe((e=>Q("navigator_location",e))),G.subscribe((e=>Q("earth_weather",e))),R.subscribe((e=>Q("space_weather",e)));class me extends e{constructor(e){super(),t(this,e,fe,pe,a,{})}}function ve(e){let t,a;const c=e[1].default,d=T(c,e,e[0],null);return{c(){t=s("div"),d&&d.c(),this.h()},l(e){t=r(e,"DIV",{class:!0});var a=n(t);d&&d.l(a),a.forEach(l),this.h()},h(){o(t,"class","chip svelte-1jb0ny7")},m(e,s){i(e,t,s),d&&d.m(t,null),a=!0},p(e,[t]){d&&d.p&&(!a||1&t)&&q(d,c,e,e[0],a?P(c,e[0],t,null):S(e[0]),null)},i(e){a||(E(d,e),a=!0)},o(e){k(d,e),a=!1},d(e){e&&l(t),d&&d.d(e)}}}function ge(e,t,a){let{$$slots:s={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&a(0,r=e.$$scope)},[r,s]}class _e extends e{constructor(e){super(),t(this,e,ge,ve,a,{})}}function we(e){let t,a,u,h,f,$;return{c(){t=s("div"),a=s("div"),u=s("div"),h=p(),f=s("span"),$=v(e[1]),this.h()},l(s){t=r(s,"DIV",{class:!0,style:!0});var o=n(t);a=r(o,"DIV",{class:!0});var i=n(a);u=r(i,"DIV",{class:!0}),n(u).forEach(l),i.forEach(l),h=m(o),f=r(o,"SPAN",{class:!0});var c=n(f);$=g(c,e[1]),c.forEach(l),o.forEach(l),this.h()},h(){o(u,"class","bar svelte-1mo8cjf"),o(a,"class","bar-wrapper svelte-1mo8cjf"),o(f,"class","value svelte-1mo8cjf"),o(t,"class","wrapper svelte-1mo8cjf"),_(t,"--progress",100*e[0]+"%")},m(e,s){i(e,t,s),c(t,a),c(a,u),c(t,h),c(t,f),c(f,$)},p(e,[a]){2&a&&w($,e[1]),1&a&&_(t,"--progress",100*e[0]+"%")},i:d,o:d,d(e){e&&l(t)}}}function $e(e,t,a){let{percentage:s}=t,{value:r}=t;return e.$$set=e=>{"percentage"in e&&a(0,s=e.percentage),"value"in e&&a(1,r=e.value)},[s,r]}class ke extends e{constructor(e){super(),t(this,e,$e,we,a,{percentage:0,value:1})}}function be(e){let t,a,u,h,f,_,w,$,b,y,T,q,S;y=new ke({props:{percentage:e[0]/9,value:e[0]}});let P=e[5]&&function(e){let t,a,u,h,f,_,w,$,k,b,E,y,D=Math.round(e[3])+"",I=Math.round(e[4])+"";return{c(){t=s("div"),a=s("p"),u=s("i"),h=p(),f=v(D),_=v("°C"),w=p(),$=s("p"),k=s("i"),b=p(),E=v(I),y=v("%"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);a=r(s,"P",{class:!0});var o=n(a);u=r(o,"I",{class:!0}),n(u).forEach(l),h=m(o),f=g(o,D),_=g(o,"°C"),o.forEach(l),w=m(s),$=r(s,"P",{class:!0});var i=n($);k=r(i,"I",{class:!0}),n(k).forEach(l),b=m(i),E=g(i,I),y=g(i,"%"),i.forEach(l),s.forEach(l),this.h()},h(){o(u,"class","fas fa-thermometer-half svelte-m9qkku"),o(a,"class","svelte-m9qkku"),o(k,"class","fas fa-cloud svelte-m9qkku"),o($,"class","svelte-m9qkku"),o(t,"class","svelte-m9qkku")},m(e,s){i(e,t,s),c(t,a),c(a,u),c(a,h),c(a,f),c(a,_),c(t,w),c(t,$),c($,k),c($,b),c($,E),c($,y)},p:d,d(e){e&&l(t)}}}(e);return{c(){t=s("div"),a=s("div"),u=s("h3"),h=v(e[2]),f=p(),_=s("p"),w=v(e[1]),$=p(),b=s("div"),D(y.$$.fragment),T=p(),q=s("div"),P&&P.c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var o=n(t);a=r(o,"DIV",{class:!0});var i=n(a);u=r(i,"H3",{class:!0});var c=n(u);h=g(c,e[2]),c.forEach(l),f=m(i),_=r(i,"P",{class:!0});var d=n(_);w=g(d,e[1]),d.forEach(l),i.forEach(l),$=m(o),b=r(o,"DIV",{class:!0});var p=n(b);I(y.$$.fragment,p),p.forEach(l),T=m(o),q=r(o,"DIV",{class:!0});var v=n(q);P&&P.l(v),v.forEach(l),o.forEach(l),this.h()},h(){o(u,"class","svelte-m9qkku"),o(_,"class","svelte-m9qkku"),o(a,"class","svelte-m9qkku"),o(b,"class","KP svelte-m9qkku"),o(q,"class","data svelte-m9qkku"),o(t,"class","prediction-details svelte-m9qkku")},m(e,s){i(e,t,s),c(t,a),c(a,u),c(u,h),c(a,f),c(a,_),c(_,w),c(t,$),c(t,b),V(y,b,null),c(t,T),c(t,q),P&&P.m(q,null),S=!0},p(e,[t]){e[5]&&P.p(e,t)},i(e){S||(E(y.$$.fragment,e),S=!0)},o(e){k(y.$$.fragment,e),S=!1},d(e){e&&l(t),x(y),P&&P.d()}}}function Ee(e,t=2){let a=e;for(let s=0;s<t-e.length;s++)a="0"+a;return a}function ye(e,t,a){let{prediction:s}=t;let r=s.kp,n=s.time.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.time.getMonth()],l=Ee(s.time.getHours().toString())+":"+Ee(s.time.getMinutes().toString()),o=s.temp,i=s.clouds,c=s.hasNOMETData;return e.$$set=e=>{"prediction"in e&&a(6,s=e.prediction)},[r,n,l,o,i,c,s]}class De extends e{constructor(e){super(),t(this,e,ye,be,a,{prediction:6})}}function Ie(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function Ve(e){let t,a;return t=new De({props:{prediction:e[5]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){V(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.prediction=e[5]),t.$set(s)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){x(t,e)}}}function xe(e){let t,a,c=e[0],d=[];for(let t=0;t<c.length;t+=1)d[t]=Ve(Ie(e,c,t));const u=e=>k(d[e],1,1,(()=>{d[e]=null}));return{c(){t=s("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var a=n(t);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(l),this.h()},h(){o(t,"class","prediction-table svelte-1uc0m3l")},m(e,s){i(e,t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);a=!0},p(e,[a]){if(1&a){let s;for(c=e[0],s=0;s<c.length;s+=1){const r=Ie(e,c,s);d[s]?(d[s].p(r,a),E(d[s],1)):(d[s]=Ve(r),d[s].c(),E(d[s],1),d[s].m(t,null))}for($(),s=c.length;s<d.length;s+=1)u(s);b()}},i(e){if(!a){for(let e=0;e<c.length;e+=1)E(d[e]);a=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)k(d[e]);a=!1},d(e){e&&l(t),M(d,e)}}}function Te(e,t,a){let s,r,n;async function l(){if(r.updating||s.updating)return void a(0,n=null);let e=r.usnoaa_data_raw.geospace_pred_est_kp_1_hour.filter((e=>e.model_prediction_time>=new Date));a(0,n=e.map((e=>({time:e.model_prediction_time,kp:Math.round(e.k),temp:null,clouds:null,hasNOMETData:s.available})))),s.available&&n.forEach(((e,t)=>{let r,l,o=new Date(0,0,0),i=!0;s.yr_data_raw.properties.timeseries.forEach(((t,a)=>{let s=new Date(t.time);if(Math.abs(s.getTime()-e.time.getTime())<Math.abs(o.getTime()-e.time.getTime())){if(Math.abs(s.getTime()-e.time.getTime())>18e6)return void(i=!1);o=s,r=t.data.instant.details.air_temperature,l=t.data.instant.details.cloud_area_fraction}})),a(0,n[t]=Object.assign(Object.assign({},n[t]),{temp:r,clouds:l,hasNOMETData:i}),n)}))}return y(e,G,(e=>a(1,s=e))),y(e,R,(e=>a(2,r=e))),R.subscribe(l),G.subscribe(l),[n]}class qe extends e{constructor(e){super(),t(this,e,Te,xe,a,{})}}function Se(e){let t,a,c;return a=new _e({props:{$$slots:{default:[Pe]},$$scope:{ctx:e}}}),{c(){t=s("div"),D(a.$$.fragment),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);I(a.$$.fragment,s),s.forEach(l),this.h()},h(){o(t,"class","svelte-m9qkku")},m(e,s){i(e,t,s),V(a,t,null),c=!0},p(e,t){const s={};257&t&&(s.$$scope={dirty:t,ctx:e}),a.$set(s)},i(e){c||(E(a.$$.fragment,e),c=!0)},o(e){k(a.$$.fragment,e),c=!1},d(e){e&&l(t),x(a)}}}function Pe(e){let t,a=e[0].observed+"";return{c(){t=v(a)},l(e){t=g(e,a)},m(e,a){i(e,t,a)},p(e,s){1&s&&a!==(a=e[0].observed+"")&&w(t,a)},d(e){e&&l(t)}}}function Me(e){let t,a,u,h,f,_,w,y,T,q,S,P,M,N,j="predicted"!=e[0].observed&&Se(e);S=new ke({props:{percentage:e[1]/9,value:e[1]}});let A=e[6]&&function(e){let t,a,u,h,f,_,w,$,k,b,E,y,D=Math.round(e[4])+"",I=Math.round(e[5])+"";return{c(){t=s("div"),a=s("p"),u=s("i"),h=p(),f=v(D),_=v("°C"),w=p(),$=s("p"),k=s("i"),b=p(),E=v(I),y=v("%"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);a=r(s,"P",{class:!0});var o=n(a);u=r(o,"I",{class:!0}),n(u).forEach(l),h=m(o),f=g(o,D),_=g(o,"°C"),o.forEach(l),w=m(s),$=r(s,"P",{class:!0});var i=n($);k=r(i,"I",{class:!0}),n(k).forEach(l),b=m(i),E=g(i,I),y=g(i,"%"),i.forEach(l),s.forEach(l),this.h()},h(){o(u,"class","fas fa-thermometer-half svelte-m9qkku"),o(a,"class","svelte-m9qkku"),o(k,"class","fas fa-cloud svelte-m9qkku"),o($,"class","svelte-m9qkku"),o(t,"class","svelte-m9qkku")},m(e,s){i(e,t,s),c(t,a),c(a,u),c(a,h),c(a,f),c(a,_),c(t,w),c(t,$),c($,k),c($,b),c($,E),c($,y)},p:d,d(e){e&&l(t)}}}(e);return{c(){t=s("div"),a=s("div"),u=s("h3"),h=v(e[3]),f=p(),_=s("p"),w=v(e[2]),y=p(),j&&j.c(),T=p(),q=s("div"),D(S.$$.fragment),P=p(),M=s("div"),A&&A.c(),this.h()},l(s){t=r(s,"DIV",{class:!0});var o=n(t);a=r(o,"DIV",{class:!0});var i=n(a);u=r(i,"H3",{class:!0});var c=n(u);h=g(c,e[3]),c.forEach(l),f=m(i),_=r(i,"P",{class:!0});var d=n(_);w=g(d,e[2]),d.forEach(l),i.forEach(l),y=m(o),j&&j.l(o),T=m(o),q=r(o,"DIV",{class:!0});var p=n(q);I(S.$$.fragment,p),p.forEach(l),P=m(o),M=r(o,"DIV",{class:!0});var v=n(M);A&&A.l(v),v.forEach(l),o.forEach(l),this.h()},h(){o(u,"class","svelte-m9qkku"),o(_,"class","svelte-m9qkku"),o(a,"class","svelte-m9qkku"),o(q,"class","KP svelte-m9qkku"),o(M,"class","data svelte-m9qkku"),o(t,"class","prediction-details svelte-m9qkku")},m(e,s){i(e,t,s),c(t,a),c(a,u),c(u,h),c(a,f),c(a,_),c(_,w),c(t,y),j&&j.m(t,null),c(t,T),c(t,q),V(S,q,null),c(t,P),c(t,M),A&&A.m(M,null),N=!0},p(e,[a]){"predicted"!=e[0].observed?j?(j.p(e,a),1&a&&E(j,1)):(j=Se(e),j.c(),E(j,1),j.m(t,T)):j&&($(),k(j,1,1,(()=>{j=null})),b()),e[6]&&A.p(e,a)},i(e){N||(E(j),E(S.$$.fragment,e),N=!0)},o(e){k(j),k(S.$$.fragment,e),N=!1},d(e){e&&l(t),j&&j.d(),x(S),A&&A.d()}}}function Ne(e,t=2){let a=e;for(let s=0;s<t-e.length;s++)a="0"+a;return a}function je(e,t,a){let{prediction:s}=t;let r=s.kp,n=s.time.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.time.getMonth()],l=Ne(s.time.getHours().toString())+":"+Ne(s.time.getMinutes().toString()),o=s.temp,i=s.clouds,c=s.hasNOMETData;return e.$$set=e=>{"prediction"in e&&a(0,s=e.prediction)},[s,r,n,l,o,i,c]}class Ae extends e{constructor(e){super(),t(this,e,je,Me,a,{prediction:0})}}function Ce(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function Oe(e){let t,a;return t=new Ae({props:{prediction:e[5]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){V(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.prediction=e[5]),t.$set(s)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){x(t,e)}}}function Fe(e){let t,a,c=e[0],d=[];for(let t=0;t<c.length;t+=1)d[t]=Oe(Ce(e,c,t));const u=e=>k(d[e],1,1,(()=>{d[e]=null}));return{c(){t=s("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var a=n(t);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(l),this.h()},h(){o(t,"class","prediction-table svelte-1uc0m3l")},m(e,s){i(e,t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);a=!0},p(e,[a]){if(1&a){let s;for(c=e[0],s=0;s<c.length;s+=1){const r=Ce(e,c,s);d[s]?(d[s].p(r,a),E(d[s],1)):(d[s]=Oe(r),d[s].c(),E(d[s],1),d[s].m(t,null))}for($(),s=c.length;s<d.length;s+=1)u(s);b()}},i(e){if(!a){for(let e=0;e<c.length;e+=1)E(d[e]);a=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)k(d[e]);a=!1},d(e){e&&l(t),M(d,e)}}}function Je(e,t,a){let s,r,n;async function l(){if(r.updating||s.updating)return void a(0,n=null);let e=r.usnoaa_data_raw.noaa_planetary_k_index_forecast.filter((e=>"observed"!==e.observed));a(0,n=e.map((e=>({time:e.time,kp:e.kp,observed:e.observed,temp:null,clouds:null,hasNOMETData:s.available})))),s.available&&n.forEach(((e,t)=>{let r,l,o=new Date(0,0,0);s.yr_data_raw.properties.timeseries.forEach(((t,a)=>{let s=new Date(t.time);Math.abs(s.getTime()-e.time.getTime())<Math.abs(o.getTime()-e.time.getTime())&&(o=s,r=t.data.instant.details.air_temperature,l=t.data.instant.details.cloud_area_fraction)})),a(0,n[t]=Object.assign(Object.assign({},n[t]),{temp:r,clouds:l}),n)}))}return y(e,G,(e=>a(1,s=e))),y(e,R,(e=>a(2,r=e))),R.subscribe(l),G.subscribe(l),[n]}class Be extends e{constructor(e){super(),t(this,e,Je,Fe,a,{})}}function He(e){let t,a,d,u,h,f,_,w,$,b;return _=new ke({props:{percentage:e[0]/9,value:e[0]}}),{c(){t=s("div"),a=s("div"),d=s("h3"),u=v(e[1]),h=p(),f=s("div"),D(_.$$.fragment),w=p(),$=s("div"),this.h()},l(s){t=r(s,"DIV",{class:!0});var o=n(t);a=r(o,"DIV",{class:!0});var i=n(a);d=r(i,"H3",{class:!0});var c=n(d);u=g(c,e[1]),c.forEach(l),i.forEach(l),h=m(o),f=r(o,"DIV",{class:!0});var p=n(f);I(_.$$.fragment,p),p.forEach(l),w=m(o),$=r(o,"DIV",{class:!0}),n($).forEach(l),o.forEach(l),this.h()},h(){o(d,"class","svelte-m9qkku"),o(a,"class","svelte-m9qkku"),o(f,"class","KP svelte-m9qkku"),o($,"class","data svelte-m9qkku"),o(t,"class","prediction-details svelte-m9qkku")},m(e,s){i(e,t,s),c(t,a),c(a,d),c(d,u),c(t,h),c(t,f),V(_,f,null),c(t,w),c(t,$),b=!0},p(e,[t]){},i(e){b||(E(_.$$.fragment,e),b=!0)},o(e){k(_.$$.fragment,e),b=!1},d(e){e&&l(t),x(_)}}}function Ke(e,t=2){let a=e;for(let s=0;s<t-e.length;s++)a="0"+a;return a}function ze(e,t,a){let{prediction:s}=t;let r=s.kp,n=s.time.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.time.getMonth()];Ke(s.time.getHours().toString()),Ke(s.time.getMinutes().toString());let l=s.temp,o=s.clouds;return e.$$set=e=>{"prediction"in e&&a(4,s=e.prediction)},[r,n,l,o,s]}class Ze extends e{constructor(e){super(),t(this,e,ze,He,a,{prediction:4})}}function Le(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function We(e){let t,a;return t=new Ze({props:{prediction:e[5]}}),{c(){D(t.$$.fragment)},l(e){I(t.$$.fragment,e)},m(e,s){V(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.prediction=e[5]),t.$set(s)},i(e){a||(E(t.$$.fragment,e),a=!0)},o(e){k(t.$$.fragment,e),a=!1},d(e){x(t,e)}}}function Ge(e){let t,a,c=e[0],d=[];for(let t=0;t<c.length;t+=1)d[t]=We(Le(e,c,t));const u=e=>k(d[e],1,1,(()=>{d[e]=null}));return{c(){t=s("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var a=n(t);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(l),this.h()},h(){o(t,"class","prediction-table svelte-1uc0m3l")},m(e,s){i(e,t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);a=!0},p(e,[a]){if(1&a){let s;for(c=e[0],s=0;s<c.length;s+=1){const r=Le(e,c,s);d[s]?(d[s].p(r,a),E(d[s],1)):(d[s]=We(r),d[s].c(),E(d[s],1),d[s].m(t,null))}for($(),s=c.length;s<d.length;s+=1)u(s);b()}},i(e){if(!a){for(let e=0;e<c.length;e+=1)E(d[e]);a=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)k(d[e]);a=!1},d(e){e&&l(t),M(d,e)}}}function Re(e,t,a){let s,r,n;async function l(){if(r.updating||s.updating)return void a(0,n=null);let e=r.usnoaa_data_raw.outlook_27_day.filter((e=>e.time>=new Date));a(0,n=e.map((e=>({time:e.time,kp:e.kindex,temp:null,clouds:null,hasNOMETData:s.available})))),s.available&&n.forEach(((e,t)=>{let r,l,o=new Date(0,0,0),i=!0;s.yr_data_raw.properties.timeseries.forEach(((t,a)=>{let s=new Date(t.time);if(Math.abs(s.getTime()-e.time.getTime())<Math.abs(o.getTime()-e.time.getTime())){if(Math.abs(s.getTime()-e.time.getTime())>864e5)return void(i=!1);o=s,r=t.data.instant.details.air_temperature,l=t.data.instant.details.cloud_area_fraction}})),a(0,n[t]=Object.assign(Object.assign({},n[t]),{temp:r,clouds:l,hasNOMETData:i}),n)}))}return y(e,G,(e=>a(1,s=e))),y(e,R,(e=>a(2,r=e))),R.subscribe(l),G.subscribe(l),[n]}class Qe extends e{constructor(e){super(),t(this,e,Re,Ge,a,{})}}function Ue(e){let t,a,u,h,f;return{c(){t=s("div"),a=s("i"),u=p(),h=s("p"),f=v("No prediction data"),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);a=r(s,"I",{class:!0}),n(a).forEach(l),u=m(s),h=r(s,"P",{});var o=n(h);f=g(o,"No prediction data"),o.forEach(l),s.forEach(l),this.h()},h(){o(a,"class","fas fa-7x fa-exclamation-triangle"),o(t,"class","no-data svelte-1soiua")},m(e,s){i(e,t,s),c(t,a),c(t,u),c(t,h),c(h,f)},p:d,i:d,o:d,d(e){e&&l(t)}}}function Xe(e){let t,a,d,u,h,_,w,y,T,q,S,P,M,C,O,F,J,B,H;var K=e[0];return K&&(O=new K({})),{c(){t=s("div"),a=s("h2"),d=v("Forecast"),u=p(),h=s("div"),_=s("div"),w=v("hour"),y=p(),T=s("div"),q=v("3 day"),S=p(),P=s("div"),M=v("Longterm"),C=p(),O&&D(O.$$.fragment),F=f(),this.h()},l(e){t=r(e,"DIV",{class:!0});var s=n(t);a=r(s,"H2",{class:!0});var o=n(a);d=g(o,"Forecast"),o.forEach(l),u=m(s),h=r(s,"DIV",{class:!0});var i=n(h);_=r(i,"DIV",{class:!0});var c=n(_);w=g(c,"hour"),c.forEach(l),y=m(i),T=r(i,"DIV",{class:!0});var p=n(T);q=g(p,"3 day"),p.forEach(l),S=m(i),P=r(i,"DIV",{class:!0});var v=n(P);M=g(v,"Longterm"),v.forEach(l),i.forEach(l),s.forEach(l),C=m(e),O&&I(O.$$.fragment,e),F=f(),this.h()},h(){o(a,"class","svelte-1soiua"),o(_,"class","svelte-1soiua"),N(_,"selected",e[0]==qe),o(T,"class","svelte-1soiua"),N(T,"selected",e[0]==Be),o(P,"class","svelte-1soiua"),N(P,"selected",e[0]==Qe),o(h,"class","version-picker svelte-1soiua"),o(t,"class","header svelte-1soiua")},m(s,r){i(s,t,r),c(t,a),c(a,d),c(t,u),c(t,h),c(h,_),c(_,w),c(h,y),c(h,T),c(T,q),c(h,S),c(h,P),c(P,M),i(s,C,r),O&&V(O,s,r),i(s,F,r),J=!0,B||(H=[j(_,"click",e[3]),j(T,"click",e[4]),j(P,"click",e[5])],B=!0)},p(e,t){if(1&t&&N(_,"selected",e[0]==qe),1&t&&N(T,"selected",e[0]==Be),1&t&&N(P,"selected",e[0]==Qe),K!==(K=e[0])){if(O){$();const e=O;k(e.$$.fragment,1,0,(()=>{x(e,1)})),b()}K?(O=new K({}),D(O.$$.fragment),E(O.$$.fragment,1),V(O,F.parentNode,F)):O=null}},i(e){J||(O&&E(O.$$.fragment,e),J=!0)},o(e){O&&k(O.$$.fragment,e),J=!1},d(e){e&&l(t),e&&l(C),e&&l(F),O&&x(O,e),B=!1,A(H)}}}function Ye(e){let t,a,c,d;const u=[Xe,Ue],h=[];function p(e,t){return e[1].updating||e[2].updating?1:0}return a=p(e),c=h[a]=u[a](e),{c(){t=s("div"),c.c(),this.h()},l(e){t=r(e,"DIV",{class:!0});var a=n(t);c.l(a),a.forEach(l),this.h()},h(){o(t,"class","drawer svelte-1soiua")},m(e,s){i(e,t,s),h[a].m(t,null),d=!0},p(e,[s]){let r=a;a=p(e),a===r?h[a].p(e,s):($(),k(h[r],1,1,(()=>{h[r]=null})),b(),c=h[a],c?c.p(e,s):(c=h[a]=u[a](e),c.c()),E(c,1),c.m(t,null))},i(e){d||(E(c),d=!0)},o(e){k(c),d=!1},d(e){e&&l(t),h[a].d()}}}function et(e,t,a){let s,r;y(e,G,(e=>a(1,s=e))),y(e,R,(e=>a(2,r=e)));let n=Be;return[n,s,r,()=>a(0,n=qe),()=>a(0,n=Be),()=>a(0,n=Qe)]}class tt extends e{constructor(e){super(),t(this,e,et,Ye,a,{})}}function at(e){let t,a,u,h,f,v;return u=new me({}),f=new tt({}),{c(){t=p(),a=s("div"),D(u.$$.fragment),h=p(),D(f.$$.fragment),this.h()},l(e){C('[data-svelte="svelte-1q3846k"]',document.head).forEach(l),t=m(e),a=r(e,"DIV",{class:!0});var s=n(a);I(u.$$.fragment,s),h=m(s),I(f.$$.fragment,s),s.forEach(l),this.h()},h(){document.title="Aurora data",o(a,"class","homescreen svelte-pf4p6y")},m(e,s){i(e,t,s),i(e,a,s),V(u,a,null),c(a,h),V(f,a,null),v=!0},p:d,i(e){v||(E(u.$$.fragment,e),E(f.$$.fragment,e),v=!0)},o(e){k(u.$$.fragment,e),k(f.$$.fragment,e),v=!1},d(e){e&&l(t),e&&l(a),x(u),x(f)}}}class st extends e{constructor(e){super(),t(this,e,null,at,a,{})}}export{st as default};
