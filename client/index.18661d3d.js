import{S as e,i as t,s as a,e as s,c as l,a as n,d as r,b as c,f as i,g as o,n as d,w as u,h,t as f,j as p,k as m,l as v,m as g,o as _,p as $,q as w,r as b,u as E,v as D,x as k,y,z as I,A as V,B as q,C as j,D as O,E as x,F as T,G as z,H as M,I as P,J as S}from"./client.e4b23ecd.js";function N(e){let t,a,u,h,f,p,m,v,g;return{c(){t=s("div"),a=s("div"),u=s("div"),h=s("div"),f=s("div"),p=s("div"),m=s("div"),v=s("div"),g=s("div"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);a=l(s,"DIV",{class:!0}),n(a).forEach(r),u=l(s,"DIV",{class:!0}),n(u).forEach(r),h=l(s,"DIV",{class:!0}),n(h).forEach(r),f=l(s,"DIV",{class:!0}),n(f).forEach(r),p=l(s,"DIV",{class:!0}),n(p).forEach(r),m=l(s,"DIV",{class:!0}),n(m).forEach(r),v=l(s,"DIV",{class:!0}),n(v).forEach(r),g=l(s,"DIV",{class:!0}),n(g).forEach(r),s.forEach(r),this.h()},h(){c(a,"class","svelte-7k6qu0"),c(u,"class","svelte-7k6qu0"),c(h,"class","svelte-7k6qu0"),c(f,"class","svelte-7k6qu0"),c(p,"class","svelte-7k6qu0"),c(m,"class","svelte-7k6qu0"),c(v,"class","svelte-7k6qu0"),c(g,"class","svelte-7k6qu0"),c(t,"class","lds-roller svelte-7k6qu0")},m(e,s){i(e,t,s),o(t,a),o(t,u),o(t,h),o(t,f),o(t,p),o(t,m),o(t,v),o(t,g)},p:d,i:d,o:d,d(e){e&&r(t)}}}class C extends e{constructor(e){super(),t(this,e,null,N,a,{})}}const A={updated:!1,updating:!0},B=u(Object.assign(Object.assign({},A),{available:!1,longitude:null,latitude:null,city:null})),H=u(Object.assign(Object.assign({},A),{available:!1})),J=u(Object.assign({},A));function K(e,t=!1){let a=t?{}:{updated:new Date};e.update((e=>Object.assign(Object.assign(Object.assign({},e),a),{updating:t})))}function F(e){let t,a,d,u,g=e[0].city+"";return{c(){t=s("i"),a=h(),d=s("h1"),u=f(g),this.h()},l(e){t=l(e,"I",{class:!0}),n(t).forEach(r),a=p(e),d=l(e,"H1",{class:!0});var s=n(d);u=m(s,g),s.forEach(r),this.h()},h(){c(t,"class","symbol fas fa-map-marker-alt svelte-9kdo4s"),c(d,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),i(e,a,s),i(e,d,s),o(d,u)},p(e,t){1&t&&g!==(g=e[0].city+"")&&v(u,g)},d(e){e&&r(t),e&&r(a),e&&r(d)}}}function L(e){let t,a;function s(e,a){return 6&a&&(t=null),null==t&&(t=!!(Math.abs(e[1].updated-e[2].updated)>6e5)),t?Z:U}let l=s(e,-1),n=l(e);return{c(){n.c(),a=g()},l(e){n.l(e),a=g()},m(e,t){n.m(e,t),i(e,a,t)},p(e,t){l===(l=s(e,t))&&n?n.p(e,t):(n.d(1),n=l(e),n&&(n.c(),n.m(a.parentNode,a)))},d(e){n.d(e),e&&r(a)}}}function U(e){let t,a,c=e[1].updated.toLocaleString("no-NO",{dateStyle:"medium",timeStyle:"short"})+"";return{c(){t=s("p"),a=f(c)},l(e){t=l(e,"P",{});var s=n(t);a=m(s,c),s.forEach(r)},m(e,s){i(e,t,s),o(t,a)},p(e,t){2&t&&c!==(c=e[1].updated.toLocaleString("no-NO",{dateStyle:"medium",timeStyle:"short"})+"")&&v(a,c)},d(e){e&&r(t)}}}function Z(e){let t,a;return{c(){t=s("p"),a=f("There is more than 10 minutes difference between data updates")},l(e){t=l(e,"P",{});var s=n(t);a=m(s,"There is more than 10 minutes difference between data updates"),s.forEach(r)},m(e,s){i(e,t,s),o(t,a)},p:d,d(e){e&&r(t)}}}function G(e){let t,a,u,g,_,$,w,b,E,D,k,y,I=e[2].now.kp+"",V=e[2].now.kp_max+"",q=e[2].now.kp_min+"";return{c(){t=s("h2"),a=f("KP "),u=f(I),g=h(),_=s("p"),$=s("span"),w=f("↑ KP "),b=f(V),E=h(),D=s("span"),k=f("↓ KP "),y=f(q),this.h()},l(e){t=l(e,"H2",{class:!0});var s=n(t);a=m(s,"KP "),u=m(s,I),s.forEach(r),g=p(e),_=l(e,"P",{});var c=n(_);$=l(c,"SPAN",{classname:!0});var i=n($);w=m(i,"↑ KP "),b=m(i,V),i.forEach(r),E=p(c),D=l(c,"SPAN",{classname:!0});var o=n(D);k=m(o,"↓ KP "),y=m(o,q),o.forEach(r),c.forEach(r),this.h()},h(){c(t,"class","svelte-9kdo4s"),c($,"classname","pr-2"),c(D,"classname","pl-2")},m(e,s){i(e,t,s),o(t,a),o(t,u),i(e,g,s),i(e,_,s),o(_,$),o($,w),o($,b),o(_,E),o(_,D),o(D,k),o(D,y)},p(e,t){4&t&&I!==(I=e[2].now.kp+"")&&v(u,I),4&t&&V!==(V=e[2].now.kp_max+"")&&v(b,V),4&t&&q!==(q=e[2].now.kp_min+"")&&v(y,q)},i:d,o:d,d(e){e&&r(t),e&&r(g),e&&r(_)}}}function Q(e){let t,a;return t=new C({}),{c(){D(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){y(t,e,s),a=!0},p:d,i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function R(e){let t,a,d,u,_,$,w,b,E,D,k,y,I,V,q,j=e[2].now.bz+"",O=e[2].now.bt+"",x=e[1].available&&W(e);return{c(){t=s("div"),a=s("p"),d=f("BZ"),u=h(),_=s("p"),$=f(j),w=h(),b=s("div"),E=s("p"),D=f("BT"),k=h(),y=s("p"),I=f(O),V=h(),x&&x.c(),q=g(),this.h()},l(e){t=l(e,"DIV",{});var s=n(t);a=l(s,"P",{class:!0});var c=n(a);d=m(c,"BZ"),c.forEach(r),u=p(s),_=l(s,"P",{class:!0});var i=n(_);$=m(i,j),i.forEach(r),s.forEach(r),w=p(e),b=l(e,"DIV",{});var o=n(b);E=l(o,"P",{class:!0});var h=n(E);D=m(h,"BT"),h.forEach(r),k=p(o),y=l(o,"P",{class:!0});var f=n(y);I=m(f,O),f.forEach(r),o.forEach(r),V=p(e),x&&x.l(e),q=g(),this.h()},h(){c(a,"class","svelte-9kdo4s"),c(_,"class","svelte-9kdo4s"),c(E,"class","svelte-9kdo4s"),c(y,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),o(t,a),o(a,d),o(t,u),o(t,_),o(_,$),i(e,w,s),i(e,b,s),o(b,E),o(E,D),o(b,k),o(b,y),o(y,I),i(e,V,s),x&&x.m(e,s),i(e,q,s)},p(e,t){4&t&&j!==(j=e[2].now.bz+"")&&v($,j),4&t&&O!==(O=e[2].now.bt+"")&&v(I,O),e[1].available?x?x.p(e,t):(x=W(e),x.c(),x.m(q.parentNode,q)):x&&(x.d(1),x=null)},d(e){e&&r(t),e&&r(w),e&&r(b),e&&r(V),x&&x.d(e),e&&r(q)}}}function W(e){let t,a,d,u,g,_,$,w,b,E,D,k,y,I,V,q=e[1].now.temp+"",j=e[1].now.clouds+"";return{c(){t=s("div"),a=s("p"),d=f("Temp"),u=h(),g=s("p"),_=f(q),$=f("°C"),w=h(),b=s("div"),E=s("p"),D=f("Clouds"),k=h(),y=s("p"),I=f(j),V=f("%"),this.h()},l(e){t=l(e,"DIV",{});var s=n(t);a=l(s,"P",{class:!0});var c=n(a);d=m(c,"Temp"),c.forEach(r),u=p(s),g=l(s,"P",{class:!0});var i=n(g);_=m(i,q),$=m(i,"°C"),i.forEach(r),s.forEach(r),w=p(e),b=l(e,"DIV",{});var o=n(b);E=l(o,"P",{class:!0});var h=n(E);D=m(h,"Clouds"),h.forEach(r),k=p(o),y=l(o,"P",{class:!0});var f=n(y);I=m(f,j),V=m(f,"%"),f.forEach(r),o.forEach(r),this.h()},h(){c(a,"class","svelte-9kdo4s"),c(g,"class","svelte-9kdo4s"),c(E,"class","svelte-9kdo4s"),c(y,"class","svelte-9kdo4s")},m(e,s){i(e,t,s),o(t,a),o(a,d),o(t,u),o(t,g),o(g,_),o(g,$),i(e,w,s),i(e,b,s),o(b,E),o(E,D),o(b,k),o(b,y),o(y,I),o(y,V)},p(e,t){2&t&&q!==(q=e[1].now.temp+"")&&v(_,q),2&t&&j!==(j=e[1].now.clouds+"")&&v(I,j)},d(e){e&&r(t),e&&r(w),e&&r(b)}}}function X(e){let t,a,d,u,f,m,v,g,E,D,k,y,I=!e[0].updating&&e[0].available&&!e[1].updating&&!e[2].updating&&F(e),V=!e[1].updating&&!e[2].updating&&L(e);const q=[Q,G],j=[];function O(e,t){return e[2].updating||e[1].updating?0:1}g=O(e),E=j[g]=q[g](e);let x=!e[2].updating&&!e[1].updating&&R(e);return{c(){t=s("div"),a=s("div"),d=s("div"),I&&I.c(),u=h(),f=s("div"),V&&V.c(),m=h(),v=s("div"),E.c(),D=h(),k=s("div"),x&&x.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);a=l(s,"DIV",{class:!0});var c=n(a);d=l(c,"DIV",{class:!0});var i=n(d);I&&I.l(i),i.forEach(r),u=p(c),f=l(c,"DIV",{class:!0});var o=n(f);V&&V.l(o),o.forEach(r),m=p(c),v=l(c,"DIV",{class:!0});var h=n(v);E.l(h),h.forEach(r),D=p(c),k=l(c,"DIV",{class:!0});var g=n(k);x&&x.l(g),g.forEach(r),c.forEach(r),s.forEach(r),this.h()},h(){c(d,"class","weatherCurrent-data-location svelte-9kdo4s"),c(f,"class","weatherCurrent-data-date"),c(v,"class","weatherCurrent-data-kp svelte-9kdo4s"),c(k,"class","current-details svelte-9kdo4s"),c(a,"class","weatherCurrent-data svelte-9kdo4s"),c(t,"class","weatherCurrent-wrapper svelte-9kdo4s")},m(e,s){i(e,t,s),o(t,a),o(a,d),I&&I.m(d,null),o(a,u),o(a,f),V&&V.m(f,null),o(a,m),o(a,v),j[g].m(v,null),o(a,D),o(a,k),x&&x.m(k,null),y=!0},p(e,[t]){e[0].updating||!e[0].available||e[1].updating||e[2].updating?I&&(I.d(1),I=null):I?I.p(e,t):(I=F(e),I.c(),I.m(d,null)),e[1].updating||e[2].updating?V&&(V.d(1),V=null):V?V.p(e,t):(V=L(e),V.c(),V.m(f,null));let a=g;g=O(e),g===a?j[g].p(e,t):(_(),$(j[a],1,1,(()=>{j[a]=null})),w(),E=j[g],E?E.p(e,t):(E=j[g]=q[g](e),E.c()),b(E,1),E.m(v,null)),e[2].updating||e[1].updating?x&&(x.d(1),x=null):x?x.p(e,t):(x=R(e),x.c(),x.m(k,null))},i(e){y||(b(E),y=!0)},o(e){$(E),y=!1},d(e){e&&r(t),I&&I.d(),V&&V.d(),j[g].d(),x&&x.d()}}}function Y(e,t,a){let s,l,n;return E(e,B,(e=>a(0,s=e))),E(e,H,(e=>a(1,l=e))),E(e,J,(e=>a(2,n=e))),[s,l,n]}!async function(){if("undefined"==typeof window)return;let e;K(B,!0);try{e=await async function(){return new Promise(((e,t)=>{"undefined"!=typeof navigator?navigator.geolocation.getCurrentPosition((t=>{e({longitude:t.coords.longitude,latitude:t.coords.latitude})}),(e=>{t(e)})):t(Error())}))}()}catch(e){return console.log(e),B.update((e=>Object.assign(Object.assign({},e),{available:!1,city:null,longitude:null,latitude:null}))),void K(B,!1)}let t=await fetch(`https://geocode.xyz/${e.latitude},${e.longitude}?geoit=json`),a=await t.json();B.update((t=>Object.assign(Object.assign(Object.assign({},t),{available:!0,city:a.city}),e))),K(B,!1)}(),B.subscribe((async function(e=null){if("undefined"==typeof window)return;if(null===e)return;if(e.updating)return;if(!e.available)return H.update((e=>Object.assign(Object.assign({},e),{available:!1}))),void K(H,!1);K(H,!0);let t=await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${e.latitude}&lon=${e.longitude}`),a=await t.json(),s={clouds:null,temp:null};try{s.clouds=a.properties.timeseries[0].data.instant.details.cloud_area_fraction,s.temp=a.properties.timeseries[0].data.instant.details.air_temperature,a.properties.timeseries=a.properties.timeseries.map((e=>Object.assign(Object.assign({},e),{time:new Date(e.time)})))}catch(e){}H.update((e=>Object.assign(Object.assign({},e),{yr_data_raw:a,now:s,available:!0}))),K(H,!1)})),async function(){if("undefined"==typeof window)return;K(J,!0);let e=await async function(){let e,t={now:{bz:"-",bt:"-",kp:"-",kp_min:"-",kp_max:"-"},usnoaa_data_raw:{solar_wind_mag_field:!1,noaa_planetary_k_index_forecast:!1,geospace_pred_est_kp_1_hour:!1,outlook_27_day:!1}},a=await fetch("https://services.swpc.noaa.gov/products/summary/solar-wind-mag-field.json");t.usnoaa_data_raw.solar_wind_mag_field=await a.json(),t.usnoaa_data_raw.solar_wind_mag_field.TimeStamp=new Date(t.usnoaa_data_raw.solar_wind_mag_field.TimeStamp+" UTC"),t.now.bz=t.usnoaa_data_raw.solar_wind_mag_field.Bz,t.now.bt=t.usnoaa_data_raw.solar_wind_mag_field.Bt,a=await fetch("https://services.swpc.noaa.gov/json/geospace/geospace_pred_est_kp_1_hour.json"),e=await a.json(),e=e.map((e=>Object.assign(Object.assign({},e),{model_prediction_time:new Date(e.model_prediction_time)}))),t.usnoaa_data_raw.geospace_pred_est_kp_1_hour=e,a=await fetch("https://services.swpc.noaa.gov/text/27-day-outlook.txt"),e=await a.text(),e=[...e.matchAll(/^(?<time>\d{4}\s.{3}\s\d{2})\s+(?<flux107>\d+)\s+(?<aindex>\d+)\s+(?<kindex>\d+)$/gm)],e=e.map((e=>Object.assign(Object.assign({},e.groups),{time:new Date(e.groups.time+" UTC")}))),t.usnoaa_data_raw.outlook_27_day=e,a=await fetch("https://services.swpc.noaa.gov/products/noaa-planetary-k-index-forecast.json"),t.usnoaa_data_raw.noaa_planetary_k_index_forecast=await a.json(),t.usnoaa_data_raw.noaa_planetary_k_index_forecast.shift();let s=new Date,l=new Date(0,0,0),n=1e3,r=0;return t.usnoaa_data_raw.noaa_planetary_k_index_forecast.forEach(((e,a)=>{e[1]>r&&(r=e[1]),e[1]<n&&(n=e[1]);let c=new Date(e[0]+" UTC");Math.abs(c.getTime()-s.getTime())<Math.abs(l.getTime()-s.getTime())&&(l=c,t.now.kp=e[1]),t.usnoaa_data_raw.noaa_planetary_k_index_forecast[a]={time:c,kp:e[1],observed:e[2]}})),t.now.kp_min=n.toString(),t.now.kp_max=r.toString(),console.log(t),t}();J.update((t=>Object.assign(Object.assign({},t),e))),K(J,!1)}();class ee extends e{constructor(e){super(),t(this,e,Y,X,a,{})}}function te(e){let t,a;const o=e[1].default,d=V(o,e,e[0],null);return{c(){t=s("div"),d&&d.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var a=n(t);d&&d.l(a),a.forEach(r),this.h()},h(){c(t,"class","chip svelte-6dfxfp")},m(e,s){i(e,t,s),d&&d.m(t,null),a=!0},p(e,[t]){d&&d.p&&(!a||1&t)&&q(d,o,e,e[0],a?O(o,e[0],t,null):j(e[0]),null)},i(e){a||(b(d,e),a=!0)},o(e){$(d,e),a=!1},d(e){e&&r(t),d&&d.d(e)}}}function ae(e,t,a){let{$$slots:s={},$$scope:l}=t;return e.$$set=e=>{"$$scope"in e&&a(0,l=e.$$scope)},[l,s]}class se extends e{constructor(e){super(),t(this,e,ae,te,a,{})}}function le(e){let t,a,u,g,_,$;return{c(){t=s("div"),a=s("div"),u=s("div"),g=h(),_=s("span"),$=f(e[1]),this.h()},l(s){t=l(s,"DIV",{class:!0,style:!0});var c=n(t);a=l(c,"DIV",{class:!0});var i=n(a);u=l(i,"DIV",{class:!0}),n(u).forEach(r),i.forEach(r),g=p(c),_=l(c,"SPAN",{class:!0});var o=n(_);$=m(o,e[1]),o.forEach(r),c.forEach(r),this.h()},h(){c(u,"class","bar svelte-13cwtm1"),c(a,"class","bar-wrapper svelte-13cwtm1"),c(_,"class","value svelte-13cwtm1"),c(t,"class","wrapper svelte-13cwtm1"),x(t,"--progress",100*e[0]+"%")},m(e,s){i(e,t,s),o(t,a),o(a,u),o(t,g),o(t,_),o(_,$)},p(e,[a]){2&a&&v($,e[1]),1&a&&x(t,"--progress",100*e[0]+"%")},i:d,o:d,d(e){e&&r(t)}}}function ne(e,t,a){let{percentage:s}=t,{value:l}=t;return e.$$set=e=>{"percentage"in e&&a(0,s=e.percentage),"value"in e&&a(1,l=e.value)},[s,l]}class re extends e{constructor(e){super(),t(this,e,ne,le,a,{percentage:0,value:1})}}function ce(e){let t,a,u,v,g,_,w,E,V,q,j,O,x;q=new re({props:{percentage:e[0]/9,value:e[0]}});let T=e[5]&&function(e){let t,a,u,v,g,_,$,w,b,E,D,k,y=Math.round(e[3])+"",I=Math.round(e[4])+"";return{c(){t=s("div"),a=s("p"),u=s("i"),v=h(),g=f(y),_=f("°C"),$=h(),w=s("p"),b=s("i"),E=h(),D=f(I),k=f("%"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);a=l(s,"P",{class:!0});var c=n(a);u=l(c,"I",{class:!0}),n(u).forEach(r),v=p(c),g=m(c,y),_=m(c,"°C"),c.forEach(r),$=p(s),w=l(s,"P",{class:!0});var i=n(w);b=l(i,"I",{class:!0}),n(b).forEach(r),E=p(i),D=m(i,I),k=m(i,"%"),i.forEach(r),s.forEach(r),this.h()},h(){c(u,"class","fas fa-thermometer-half svelte-1q08cz7"),c(a,"class","svelte-1q08cz7"),c(b,"class","fas fa-cloud svelte-1q08cz7"),c(w,"class","svelte-1q08cz7"),c(t,"class","svelte-1q08cz7")},m(e,s){i(e,t,s),o(t,a),o(a,u),o(a,v),o(a,g),o(a,_),o(t,$),o(t,w),o(w,b),o(w,E),o(w,D),o(w,k)},p:d,d(e){e&&r(t)}}}(e);return{c(){t=s("div"),a=s("div"),u=s("h3"),v=f(e[2]),g=h(),_=s("p"),w=f(e[1]),E=h(),V=s("div"),D(q.$$.fragment),j=h(),O=s("div"),T&&T.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var c=n(t);a=l(c,"DIV",{class:!0});var i=n(a);u=l(i,"H3",{class:!0});var o=n(u);v=m(o,e[2]),o.forEach(r),g=p(i),_=l(i,"P",{class:!0});var d=n(_);w=m(d,e[1]),d.forEach(r),i.forEach(r),E=p(c),V=l(c,"DIV",{class:!0});var h=n(V);k(q.$$.fragment,h),h.forEach(r),j=p(c),O=l(c,"DIV",{class:!0});var f=n(O);T&&T.l(f),f.forEach(r),c.forEach(r),this.h()},h(){c(u,"class","svelte-1q08cz7"),c(_,"class","svelte-1q08cz7"),c(a,"class","svelte-1q08cz7"),c(V,"class","KP svelte-1q08cz7"),c(O,"class","data svelte-1q08cz7"),c(t,"class","prediction-details svelte-1q08cz7")},m(e,s){i(e,t,s),o(t,a),o(a,u),o(u,v),o(a,g),o(a,_),o(_,w),o(t,E),o(t,V),y(q,V,null),o(t,j),o(t,O),T&&T.m(O,null),x=!0},p(e,[t]){e[5]&&T.p(e,t)},i(e){x||(b(q.$$.fragment,e),x=!0)},o(e){$(q.$$.fragment,e),x=!1},d(e){e&&r(t),I(q),T&&T.d()}}}function ie(e,t=2){let a=e;for(let s=0;s<t-e.length;s++)a="0"+a;return a}function oe(e,t,a){let{prediction:s}=t;let l=s.kp,n=s.time.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.time.getMonth()],r=ie(s.time.getHours().toString())+":"+ie(s.time.getMinutes().toString()),c=s.temp,i=s.clouds,o=s.hasNOMETData;return e.$$set=e=>{"prediction"in e&&a(6,s=e.prediction)},[l,n,r,c,i,o,s]}class de extends e{constructor(e){super(),t(this,e,oe,ce,a,{prediction:6})}}function ue(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function he(e){let t,a;return t=new de({props:{prediction:e[5]}}),{c(){D(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){y(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.prediction=e[5]),t.$set(s)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function fe(e){let t,a,o=e[0],d=[];for(let t=0;t<o.length;t+=1)d[t]=he(ue(e,o,t));const u=e=>$(d[e],1,1,(()=>{d[e]=null}));return{c(){t=s("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=l(e,"DIV",{class:!0});var a=n(t);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(r),this.h()},h(){c(t,"class","prediction-table svelte-dqc8qx")},m(e,s){i(e,t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);a=!0},p(e,[a]){if(1&a){let s;for(o=e[0],s=0;s<o.length;s+=1){const l=ue(e,o,s);d[s]?(d[s].p(l,a),b(d[s],1)):(d[s]=he(l),d[s].c(),b(d[s],1),d[s].m(t,null))}for(_(),s=o.length;s<d.length;s+=1)u(s);w()}},i(e){if(!a){for(let e=0;e<o.length;e+=1)b(d[e]);a=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)$(d[e]);a=!1},d(e){e&&r(t),T(d,e)}}}function pe(e,t,a){let s,l,n;async function r(){if(l.updating||s.updating)return void a(0,n=null);let e=l.usnoaa_data_raw.geospace_pred_est_kp_1_hour.filter((e=>e.model_prediction_time>=new Date));a(0,n=e.map((e=>({time:e.model_prediction_time,kp:Math.round(e.k),temp:null,clouds:null,hasNOMETData:s.available})))),s.available&&n.forEach(((e,t)=>{let l,r,c=new Date(0,0,0),i=!0;s.yr_data_raw.properties.timeseries.forEach(((t,a)=>{let s=new Date(t.time);if(Math.abs(s.getTime()-e.time.getTime())<Math.abs(c.getTime()-e.time.getTime())){if(Math.abs(s.getTime()-e.time.getTime())>18e6)return void(i=!1);c=s,l=t.data.instant.details.air_temperature,r=t.data.instant.details.cloud_area_fraction}})),a(0,n[t]=Object.assign(Object.assign({},n[t]),{temp:l,clouds:r,hasNOMETData:i}),n)}))}return E(e,H,(e=>a(1,s=e))),E(e,J,(e=>a(2,l=e))),J.subscribe(r),H.subscribe(r),[n]}class me extends e{constructor(e){super(),t(this,e,pe,fe,a,{})}}function ve(e){let t,a,o;return a=new se({props:{$$slots:{default:[ge]},$$scope:{ctx:e}}}),{c(){t=s("div"),D(a.$$.fragment),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);k(a.$$.fragment,s),s.forEach(r),this.h()},h(){c(t,"class","svelte-1q08cz7")},m(e,s){i(e,t,s),y(a,t,null),o=!0},p(e,t){const s={};257&t&&(s.$$scope={dirty:t,ctx:e}),a.$set(s)},i(e){o||(b(a.$$.fragment,e),o=!0)},o(e){$(a.$$.fragment,e),o=!1},d(e){e&&r(t),I(a)}}}function ge(e){let t,a=e[0].observed+"";return{c(){t=f(a)},l(e){t=m(e,a)},m(e,a){i(e,t,a)},p(e,s){1&s&&a!==(a=e[0].observed+"")&&v(t,a)},d(e){e&&r(t)}}}function _e(e){let t,a,u,v,g,E,V,q,j,O,x,T,z,M,P="predicted"!=e[0].observed&&ve(e);x=new re({props:{percentage:e[1]/9,value:e[1]}});let S=e[6]&&function(e){let t,a,u,v,g,_,$,w,b,E,D,k,y=Math.round(e[4])+"",I=Math.round(e[5])+"";return{c(){t=s("div"),a=s("p"),u=s("i"),v=h(),g=f(y),_=f("°C"),$=h(),w=s("p"),b=s("i"),E=h(),D=f(I),k=f("%"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);a=l(s,"P",{class:!0});var c=n(a);u=l(c,"I",{class:!0}),n(u).forEach(r),v=p(c),g=m(c,y),_=m(c,"°C"),c.forEach(r),$=p(s),w=l(s,"P",{class:!0});var i=n(w);b=l(i,"I",{class:!0}),n(b).forEach(r),E=p(i),D=m(i,I),k=m(i,"%"),i.forEach(r),s.forEach(r),this.h()},h(){c(u,"class","fas fa-thermometer-half svelte-1q08cz7"),c(a,"class","svelte-1q08cz7"),c(b,"class","fas fa-cloud svelte-1q08cz7"),c(w,"class","svelte-1q08cz7"),c(t,"class","svelte-1q08cz7")},m(e,s){i(e,t,s),o(t,a),o(a,u),o(a,v),o(a,g),o(a,_),o(t,$),o(t,w),o(w,b),o(w,E),o(w,D),o(w,k)},p:d,d(e){e&&r(t)}}}(e);return{c(){t=s("div"),a=s("div"),u=s("h3"),v=f(e[3]),g=h(),E=s("p"),V=f(e[2]),q=h(),P&&P.c(),j=h(),O=s("div"),D(x.$$.fragment),T=h(),z=s("div"),S&&S.c(),this.h()},l(s){t=l(s,"DIV",{class:!0});var c=n(t);a=l(c,"DIV",{class:!0});var i=n(a);u=l(i,"H3",{class:!0});var o=n(u);v=m(o,e[3]),o.forEach(r),g=p(i),E=l(i,"P",{class:!0});var d=n(E);V=m(d,e[2]),d.forEach(r),i.forEach(r),q=p(c),P&&P.l(c),j=p(c),O=l(c,"DIV",{class:!0});var h=n(O);k(x.$$.fragment,h),h.forEach(r),T=p(c),z=l(c,"DIV",{class:!0});var f=n(z);S&&S.l(f),f.forEach(r),c.forEach(r),this.h()},h(){c(u,"class","svelte-1q08cz7"),c(E,"class","svelte-1q08cz7"),c(a,"class","svelte-1q08cz7"),c(O,"class","KP svelte-1q08cz7"),c(z,"class","data svelte-1q08cz7"),c(t,"class","prediction-details svelte-1q08cz7")},m(e,s){i(e,t,s),o(t,a),o(a,u),o(u,v),o(a,g),o(a,E),o(E,V),o(t,q),P&&P.m(t,null),o(t,j),o(t,O),y(x,O,null),o(t,T),o(t,z),S&&S.m(z,null),M=!0},p(e,[a]){"predicted"!=e[0].observed?P?(P.p(e,a),1&a&&b(P,1)):(P=ve(e),P.c(),b(P,1),P.m(t,j)):P&&(_(),$(P,1,1,(()=>{P=null})),w()),e[6]&&S.p(e,a)},i(e){M||(b(P),b(x.$$.fragment,e),M=!0)},o(e){$(P),$(x.$$.fragment,e),M=!1},d(e){e&&r(t),P&&P.d(),I(x),S&&S.d()}}}function $e(e,t=2){let a=e;for(let s=0;s<t-e.length;s++)a="0"+a;return a}function we(e,t,a){let{prediction:s}=t;let l=s.kp,n=s.time.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.time.getMonth()],r=$e(s.time.getHours().toString())+":"+$e(s.time.getMinutes().toString()),c=s.temp,i=s.clouds,o=s.hasNOMETData;return e.$$set=e=>{"prediction"in e&&a(0,s=e.prediction)},[s,l,n,r,c,i,o]}class be extends e{constructor(e){super(),t(this,e,we,_e,a,{prediction:0})}}function Ee(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function De(e){let t,a;return t=new be({props:{prediction:e[5]}}),{c(){D(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){y(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.prediction=e[5]),t.$set(s)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function ke(e){let t,a,o=e[0],d=[];for(let t=0;t<o.length;t+=1)d[t]=De(Ee(e,o,t));const u=e=>$(d[e],1,1,(()=>{d[e]=null}));return{c(){t=s("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=l(e,"DIV",{class:!0});var a=n(t);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(r),this.h()},h(){c(t,"class","prediction-table svelte-dqc8qx")},m(e,s){i(e,t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);a=!0},p(e,[a]){if(1&a){let s;for(o=e[0],s=0;s<o.length;s+=1){const l=Ee(e,o,s);d[s]?(d[s].p(l,a),b(d[s],1)):(d[s]=De(l),d[s].c(),b(d[s],1),d[s].m(t,null))}for(_(),s=o.length;s<d.length;s+=1)u(s);w()}},i(e){if(!a){for(let e=0;e<o.length;e+=1)b(d[e]);a=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)$(d[e]);a=!1},d(e){e&&r(t),T(d,e)}}}function ye(e,t,a){let s,l,n;async function r(){if(l.updating||s.updating)return void a(0,n=null);let e=l.usnoaa_data_raw.noaa_planetary_k_index_forecast.filter((e=>"observed"!==e.observed));a(0,n=e.map((e=>({time:e.time,kp:e.kp,observed:e.observed,temp:null,clouds:null,hasNOMETData:s.available})))),s.available&&n.forEach(((e,t)=>{let l,r,c=new Date(0,0,0);s.yr_data_raw.properties.timeseries.forEach(((t,a)=>{let s=new Date(t.time);Math.abs(s.getTime()-e.time.getTime())<Math.abs(c.getTime()-e.time.getTime())&&(c=s,l=t.data.instant.details.air_temperature,r=t.data.instant.details.cloud_area_fraction)})),a(0,n[t]=Object.assign(Object.assign({},n[t]),{temp:l,clouds:r}),n)}))}return E(e,H,(e=>a(1,s=e))),E(e,J,(e=>a(2,l=e))),J.subscribe(r),H.subscribe(r),[n]}class Ie extends e{constructor(e){super(),t(this,e,ye,ke,a,{})}}function Ve(e){let t,a,d,u,v,g,_,w,E,V,q,j,O;return V=new re({props:{percentage:e[0]/9,value:e[0]}}),{c(){t=s("div"),a=s("div"),d=s("h3"),u=f(e[2]),v=h(),g=s("p"),_=f(e[1]),w=h(),E=s("div"),D(V.$$.fragment),q=h(),j=s("div"),this.h()},l(s){t=l(s,"DIV",{class:!0});var c=n(t);a=l(c,"DIV",{class:!0});var i=n(a);d=l(i,"H3",{class:!0});var o=n(d);u=m(o,e[2]),o.forEach(r),v=p(i),g=l(i,"P",{class:!0});var h=n(g);_=m(h,e[1]),h.forEach(r),i.forEach(r),w=p(c),E=l(c,"DIV",{class:!0});var f=n(E);k(V.$$.fragment,f),f.forEach(r),q=p(c),j=l(c,"DIV",{class:!0}),n(j).forEach(r),c.forEach(r),this.h()},h(){c(d,"class","svelte-1q08cz7"),c(g,"class","svelte-1q08cz7"),c(a,"class","svelte-1q08cz7"),c(E,"class","KP svelte-1q08cz7"),c(j,"class","data svelte-1q08cz7"),c(t,"class","prediction-details svelte-1q08cz7")},m(e,s){i(e,t,s),o(t,a),o(a,d),o(d,u),o(a,v),o(a,g),o(g,_),o(t,w),o(t,E),y(V,E,null),o(t,q),o(t,j),O=!0},p(e,[t]){},i(e){O||(b(V.$$.fragment,e),O=!0)},o(e){$(V.$$.fragment,e),O=!1},d(e){e&&r(t),I(V)}}}function qe(e,t=2){let a=e;for(let s=0;s<t-e.length;s++)a="0"+a;return a}function je(e,t,a){let{prediction:s}=t;let l=s.kp,n=s.time.getDate()+". "+["January","February","March","April","May","June","July","August","September","October","November","December"][s.time.getMonth()],r=qe(s.time.getHours().toString())+":"+qe(s.time.getMinutes().toString()),c=s.temp,i=s.clouds;return e.$$set=e=>{"prediction"in e&&a(5,s=e.prediction)},[l,n,r,c,i,s]}class Oe extends e{constructor(e){super(),t(this,e,je,Ve,a,{prediction:5})}}function xe(e,t,a){const s=e.slice();return s[5]=t[a],s[7]=a,s}function Te(e){let t,a;return t=new Oe({props:{prediction:e[5]}}),{c(){D(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,s){y(t,e,s),a=!0},p(e,a){const s={};1&a&&(s.prediction=e[5]),t.$set(s)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){$(t.$$.fragment,e),a=!1},d(e){I(t,e)}}}function ze(e){let t,a,o=e[0],d=[];for(let t=0;t<o.length;t+=1)d[t]=Te(xe(e,o,t));const u=e=>$(d[e],1,1,(()=>{d[e]=null}));return{c(){t=s("div");for(let e=0;e<d.length;e+=1)d[e].c();this.h()},l(e){t=l(e,"DIV",{class:!0});var a=n(t);for(let e=0;e<d.length;e+=1)d[e].l(a);a.forEach(r),this.h()},h(){c(t,"class","prediction-table svelte-dqc8qx")},m(e,s){i(e,t,s);for(let e=0;e<d.length;e+=1)d[e].m(t,null);a=!0},p(e,[a]){if(1&a){let s;for(o=e[0],s=0;s<o.length;s+=1){const l=xe(e,o,s);d[s]?(d[s].p(l,a),b(d[s],1)):(d[s]=Te(l),d[s].c(),b(d[s],1),d[s].m(t,null))}for(_(),s=o.length;s<d.length;s+=1)u(s);w()}},i(e){if(!a){for(let e=0;e<o.length;e+=1)b(d[e]);a=!0}},o(e){d=d.filter(Boolean);for(let e=0;e<d.length;e+=1)$(d[e]);a=!1},d(e){e&&r(t),T(d,e)}}}function Me(e,t,a){let s,l,n;async function r(){if(l.updating||s.updating)return void a(0,n=null);let e=l.usnoaa_data_raw.outlook_27_day.filter((e=>e.time>=new Date));a(0,n=e.map((e=>({time:e.time,kp:e.kindex,temp:null,clouds:null,hasNOMETData:s.available})))),s.available&&n.forEach(((e,t)=>{let l,r,c=new Date(0,0,0),i=!0;s.yr_data_raw.properties.timeseries.forEach(((t,a)=>{let s=new Date(t.time);if(Math.abs(s.getTime()-e.time.getTime())<Math.abs(c.getTime()-e.time.getTime())){if(Math.abs(s.getTime()-e.time.getTime())>864e5)return void(i=!1);c=s,l=t.data.instant.details.air_temperature,r=t.data.instant.details.cloud_area_fraction}})),a(0,n[t]=Object.assign(Object.assign({},n[t]),{temp:l,clouds:r,hasNOMETData:i}),n)}))}return E(e,H,(e=>a(1,s=e))),E(e,J,(e=>a(2,l=e))),J.subscribe(r),H.subscribe(r),[n]}class Pe extends e{constructor(e){super(),t(this,e,Me,ze,a,{})}}function Se(e){let t,a,u,v,g;return{c(){t=s("div"),a=s("i"),u=h(),v=s("p"),g=f("No prediction data"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);a=l(s,"I",{class:!0}),n(a).forEach(r),u=p(s),v=l(s,"P",{});var c=n(v);g=m(c,"No prediction data"),c.forEach(r),s.forEach(r),this.h()},h(){c(a,"class","fas fa-7x fa-exclamation-triangle"),c(t,"class","no-data svelte-6c4yca")},m(e,s){i(e,t,s),o(t,a),o(t,u),o(t,v),o(v,g)},p:d,i:d,o:d,d(e){e&&r(t)}}}function Ne(e){let t,a,d,u,v,E,V,q,j,O,x,T,S,N,C,A,B,H,J;var K=e[0];return K&&(C=new K({})),{c(){t=s("div"),a=s("h2"),d=f("Forecast"),u=h(),v=s("div"),E=s("div"),V=f("hour"),q=h(),j=s("div"),O=f("3 day"),x=h(),T=s("div"),S=f("Long time"),N=h(),C&&D(C.$$.fragment),A=g(),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=n(t);a=l(s,"H2",{class:!0});var c=n(a);d=m(c,"Forecast"),c.forEach(r),u=p(s),v=l(s,"DIV",{class:!0});var i=n(v);E=l(i,"DIV",{class:!0});var o=n(E);V=m(o,"hour"),o.forEach(r),q=p(i),j=l(i,"DIV",{class:!0});var h=n(j);O=m(h,"3 day"),h.forEach(r),x=p(i),T=l(i,"DIV",{class:!0});var f=n(T);S=m(f,"Long time"),f.forEach(r),i.forEach(r),s.forEach(r),N=p(e),C&&k(C.$$.fragment,e),A=g(),this.h()},h(){c(a,"class","svelte-6c4yca"),c(E,"class","svelte-6c4yca"),z(E,"selected",e[0]==me),c(j,"class","svelte-6c4yca"),z(j,"selected",e[0]==Ie),c(T,"class","svelte-6c4yca"),z(T,"selected",e[0]==Pe),c(v,"class","version-picker svelte-6c4yca"),c(t,"class","header svelte-6c4yca")},m(s,l){i(s,t,l),o(t,a),o(a,d),o(t,u),o(t,v),o(v,E),o(E,V),o(v,q),o(v,j),o(j,O),o(v,x),o(v,T),o(T,S),i(s,N,l),C&&y(C,s,l),i(s,A,l),B=!0,H||(J=[M(E,"click",e[3]),M(j,"click",e[4]),M(T,"click",e[5])],H=!0)},p(e,t){if(1&t&&z(E,"selected",e[0]==me),1&t&&z(j,"selected",e[0]==Ie),1&t&&z(T,"selected",e[0]==Pe),K!==(K=e[0])){if(C){_();const e=C;$(e.$$.fragment,1,0,(()=>{I(e,1)})),w()}K?(C=new K({}),D(C.$$.fragment),b(C.$$.fragment,1),y(C,A.parentNode,A)):C=null}},i(e){B||(C&&b(C.$$.fragment,e),B=!0)},o(e){C&&$(C.$$.fragment,e),B=!1},d(e){e&&r(t),e&&r(N),e&&r(A),C&&I(C,e),H=!1,P(J)}}}function Ce(e){let t,a,o,d;const u=[Ne,Se],h=[];function f(e,t){return e[1].updating||e[2].updating?1:0}return a=f(e),o=h[a]=u[a](e),{c(){t=s("div"),o.c(),this.h()},l(e){t=l(e,"DIV",{class:!0});var a=n(t);o.l(a),a.forEach(r),this.h()},h(){c(t,"class","drawer svelte-6c4yca")},m(e,s){i(e,t,s),h[a].m(t,null),d=!0},p(e,[s]){let l=a;a=f(e),a===l?h[a].p(e,s):(_(),$(h[l],1,1,(()=>{h[l]=null})),w(),o=h[a],o?o.p(e,s):(o=h[a]=u[a](e),o.c()),b(o,1),o.m(t,null))},i(e){d||(b(o),d=!0)},o(e){$(o),d=!1},d(e){e&&r(t),h[a].d()}}}function Ae(e,t,a){let s,l;E(e,H,(e=>a(1,s=e))),E(e,J,(e=>a(2,l=e)));let n=Ie;return[n,s,l,()=>a(0,n=me),()=>a(0,n=Ie),()=>a(0,n=Pe)]}class Be extends e{constructor(e){super(),t(this,e,Ae,Ce,a,{})}}function He(e){let t,a,u,f,m,v;return u=new ee({}),m=new Be({}),{c(){t=h(),a=s("div"),D(u.$$.fragment),f=h(),D(m.$$.fragment),this.h()},l(e){S('[data-svelte="svelte-1q3846k"]',document.head).forEach(r),t=p(e),a=l(e,"DIV",{class:!0});var s=n(a);k(u.$$.fragment,s),f=p(s),k(m.$$.fragment,s),s.forEach(r),this.h()},h(){document.title="Aurora data",c(a,"class","homescreen svelte-pf4p6y")},m(e,s){i(e,t,s),i(e,a,s),y(u,a,null),o(a,f),y(m,a,null),v=!0},p:d,i(e){v||(b(u.$$.fragment,e),b(m.$$.fragment,e),v=!0)},o(e){$(u.$$.fragment,e),$(m.$$.fragment,e),v=!1},d(e){e&&r(t),e&&r(a),I(u),I(m)}}}class Je extends e{constructor(e){super(),t(this,e,null,He,a,{})}}export{Je as default};