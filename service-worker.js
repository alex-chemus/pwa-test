(function(){var t={9662:function(t,e,n){var r=n(614),o=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(o(t)+" is not a function")}},9670:function(t,e,n){var r=n(111),o=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(o(t)+" is not an object")}},1318:function(t,e,n){var r=n(5656),o=n(1400),s=n(6244),i=function(t){return function(e,n,i){var a,c=r(e),u=s(c),l=o(i,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},3658:function(t,e,n){"use strict";var r=n(9781),o=n(3157),s=TypeError,i=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(o(t)&&!i(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},4326:function(t,e,n){var r=n(84),o=r({}.toString),s=r("".slice);t.exports=function(t){return s(o(t),8,-1)}},9920:function(t,e,n){var r=n(2597),o=n(3887),s=n(1236),i=n(3070);t.exports=function(t,e,n){for(var a=o(e),c=i.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8880:function(t,e,n){var r=n(9781),o=n(3070),s=n(9114);t.exports=r?function(t,e,n){return o.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},8052:function(t,e,n){var r=n(614),o=n(3070),s=n(6339),i=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:i(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:o.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),o=n(111),s=r.document,i=o(s)&&o(s.createElement);t.exports=function(t){return i?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},8113:function(t,e,n){var r=n(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,e,n){var r,o,s=n(7854),i=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),o=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(o=+r[1]))),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,n){var r=n(7854),o=n(1236).f,s=n(8880),i=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,p,d,y=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[y]||a(y,{}):(r[y]||{}).prototype,l)for(h in e){if(p=e[h],t.dontCallGetSet?(d=o(l,h),f=d&&d.value):f=l[h],n=u(g?h:y+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof p==typeof f)continue;c(p,f)}(t.sham||f&&f.sham)&&s(p,"sham",!0),i(l,h,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,n){var r=n(9781),o=n(2597),s=Function.prototype,i=r&&Object.getOwnPropertyDescriptor,a=o(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&i(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},84:function(t,e,n){var r=n(4374),o=Function.prototype,s=o.call,i=r&&o.bind.bind(s,s);t.exports=function(t){return r?i(t):function(){return s.apply(t,arguments)}}},1702:function(t,e,n){var r=n(4326),o=n(84);t.exports=function(t){if("Function"===r(t))return o(t)}},5005:function(t,e,n){var r=n(7854),o=n(614),s=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),o=n(8554);t.exports=function(t,e){var n=t[e];return o(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(t,e,n){var r=n(1702),o=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(o(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),o=n(7293),s=n(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),o=n(7293),s=n(4326),i=Object,a=r("".split);t.exports=o((function(){return!i("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):i(t)}:i},2788:function(t,e,n){var r=n(1702),o=n(614),s=n(5465),i=r(Function.toString);o(s.inspectSource)||(s.inspectSource=function(t){return i(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,o,s,i=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),p=n(3501),d="Object already initialized",y=a.TypeError,g=a.WeakMap,v=function(t){return s(t)?o(t):r(t,{})},w=function(t){return function(e){var n;if(!c(e)||(n=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return n}};if(i||h.state){var m=h.state||(h.state=new g);m.get=m.get,m.has=m.has,m.set=m.set,r=function(t,e){if(m.has(t))throw y(d);return e.facade=t,m.set(t,e),e},o=function(t){return m.get(t)||{}},s=function(t){return m.has(t)}}else{var b=f("state");p[b]=!0,r=function(t,e){if(l(t,b))throw y(d);return e.facade=t,u(t,b,e),e},o=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:o,has:s,enforce:v,getterFor:w}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},614:function(t,e,n){var r=n(4154),o=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===o}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),o=n(614),s=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==l||n!=u&&(o(e)?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",l=i.POLYFILL="P";t.exports=i},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),o=n(4154),s=o.all;t.exports=o.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),o=n(614),s=n(7976),i=n(3307),a=Object;t.exports=i?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return o(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(7293),o=n(614),s=n(2597),i=n(9781),a=n(6530).CONFIGURABLE,c=n(2788),u=n(9909),l=u.enforce,h=u.get,f=Object.defineProperty,p=i&&!r((function(){return 8!==f((function(){}),"length",{value:8}).length})),d=String(String).split("String"),y=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!s(t,"name")||a&&t.name!==e)&&(i?f(t,"name",{value:e,configurable:!0}):t.name=e),p&&n&&s(n,"arity")&&t.length!==n.arity&&f(t,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?i&&f(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(o){}var r=l(t);return s(r,"source")||(r.source=d.join("string"==typeof e?e:"")),t};Function.prototype.toString=y((function(){return o(this)&&h(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},3070:function(t,e,n){var r=n(9781),o=n(4664),s=n(3353),i=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",p="writable";e.f=r?s?function(t,e,n){if(i(t),e=a(e),i(n),"function"===typeof t&&"prototype"===e&&"value"in n&&p in n&&!n[p]){var r=l(t,e);r&&r[p]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(i(t),e=a(e),i(n),o)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),o=n(6916),s=n(5296),i=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return i(!o(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),o=n(748),s=o.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),o=n(2597),s=n(5656),i=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!o(a,n)&&o(r,n)&&c(l,n);while(e.length>u)o(r,n=e[u++])&&(~i(l,n)||c(l,n));return l}},5296:function(t,e){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},2140:function(t,e,n){var r=n(6916),o=n(614),s=n(111),i=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&o(n=t.toString)&&!s(a=r(n,t)))return a;if(o(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&o(n=t.toString)&&!s(a=r(n,t)))return a;throw i("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),o=n(1702),s=n(8006),i=n(5181),a=n(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=i.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),o=TypeError;t.exports=function(t){if(r(t))throw o("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),o=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=o(t))}},5465:function(t,e,n){var r=n(7854),o=n(3072),s="__core-js_shared__",i=r[s]||o(s,{});t.exports=i},2309:function(t,e,n){var r=n(1913),o=n(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.25.5",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),o=n(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),o=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):s(n,e)}},5656:function(t,e,n){var r=n(8361),o=n(4488);t.exports=function(t){return r(o(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),o=Object;t.exports=function(t){return o(r(t))}},7593:function(t,e,n){var r=n(6916),o=n(111),s=n(2190),i=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!o(t)||s(t))return t;var n,c=i(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!o(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),o=n(2190);t.exports=function(t){var e=r(t,"string");return o(e)?e:e+""}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),o=0,s=Math.random(),i=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),o=n(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(t,e,n){var r=n(7854),o=n(614),s=r.WeakMap;t.exports=o(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),o=n(2309),s=n(2597),i=n(9711),a=n(6293),c=n(3307),u=o("wks"),l=r.Symbol,h=l&&l["for"],f=c?l:l&&l.withoutSetter||i;t.exports=function(t){if(!s(u,t)||!a&&"string"!=typeof u[t]){var e="Symbol."+t;a&&s(l,t)?u[t]=l[t]:u[t]=c&&h?h(e):f(e)}return u[t]}},7658:function(t,e,n){"use strict";var r=n(2109),o=n(7908),s=n(6244),i=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=!function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:u||l},{push:function(t){var e=o(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return i(e,n),n}})},4764:function(){"use strict";try{self["workbox:core:6.5.3"]&&_()}catch(t){}},4523:function(){"use strict";try{self["workbox:precaching:6.5.3"]&&_()}catch(t){}},134:function(){"use strict";try{self["workbox:routing:6.5.3"]&&_()}catch(t){}},294:function(){"use strict";try{self["workbox:strategies:6.5.3"]&&_()}catch(t){}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var s=e[r]={exports:{}};return t[r](s,s.exports,n),s.exports}!function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}();!function(){"use strict";n(7658),n(4764);const t=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},e=t;class r extends Error{constructor(t,n){const r=e(t,n);super(r),this.name=t,this.details=n}}const o={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},s=t=>[o.prefix,t,o.suffix].filter((t=>t&&t.length>0)).join("-"),i=t=>{for(const e of Object.keys(o))t(e)},a={updateDetails:t=>{i((e=>{"string"===typeof t[e]&&(o[e]=t[e])}))},getGoogleAnalyticsName:t=>t||s(o.googleAnalytics),getPrecacheName:t=>t||s(o.precache),getPrefix:()=>o.prefix,getRuntimeName:t=>t||s(o.runtime),getSuffix:()=>o.suffix};function c(t,e){const n=e();return t.waitUntil(n),n}n(4523);const u="__WB_REVISION__";function l(t){if(!t)throw new r("add-to-cache-list-unexpected-type",{entry:t});if("string"===typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new r("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const o=new URL(n,location.href),s=new URL(n,location.href);return o.searchParams.set(u,e),{cacheKey:o.href,url:s.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:t,state:e})=>{e&&(e.originalRequest=t)},this.cachedResponseWillBeUsed=async({event:t,state:e,cachedResponse:n})=>{if("install"===t.type&&e&&e.originalRequest&&e.originalRequest instanceof Request){const t=e.originalRequest.url;n?this.notUpdatedURLs.push(t):this.updatedURLs.push(t)}return n}}}class f{constructor({precacheController:t}){this.cacheKeyWillBeUsed=async({request:t,params:e})=>{const n=(null===e||void 0===e?void 0:e.cacheKey)||this._precacheController.getCacheKeyForURL(t.url);return n?new Request(n,{headers:t.headers}):t},this._precacheController=t}}let p;function d(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(t){p=!1}p=!1}return p}async function y(t,e){let n=null;if(t.url){const e=new URL(t.url);n=e.origin}if(n!==self.location.origin)throw new r("cross-origin-copy-response",{origin:n});const o=t.clone(),s={headers:new Headers(o.headers),status:o.status,statusText:o.statusText},i=e?e(s):s,a=d()?o.body:await o.blob();return new Response(a,i)}const g=t=>{const e=new URL(String(t),location.href);return e.href.replace(new RegExp(`^${location.origin}`),"")};function v(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function w(t,e,n,r){const o=v(e.url,n);if(e.url===o)return t.match(e,r);const s=Object.assign(Object.assign({},r),{ignoreSearch:!0}),i=await t.keys(e,s);for(const a of i){const e=v(a.url,n);if(o===e)return t.match(a,r)}}class m{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}const b=new Set;async function x(){for(const t of b)await t()}function _(t){return new Promise((e=>setTimeout(e,t)))}n(294);function R(t){return"string"===typeof t?new Request(t):t}class C{constructor(t,e){this._cacheKeys={},Object.assign(this,e),this.event=e.event,this._strategy=t,this._handlerDeferred=new m,this._extendLifetimePromises=[],this._plugins=[...t.plugins],this._pluginStateMap=new Map;for(const n of this._plugins)this._pluginStateMap.set(n,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(t){const{event:e}=this;let n=R(t);if("navigate"===n.mode&&e instanceof FetchEvent&&e.preloadResponse){const t=await e.preloadResponse;if(t)return t}const o=this.hasCallback("fetchDidFail")?n.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))n=await t({request:n.clone(),event:e})}catch(i){if(i instanceof Error)throw new r("plugin-error-request-will-fetch",{thrownErrorMessage:i.message})}const s=n.clone();try{let t;t=await fetch(n,"navigate"===n.mode?void 0:this._strategy.fetchOptions);for(const n of this.iterateCallbacks("fetchDidSucceed"))t=await n({event:e,request:s,response:t});return t}catch(a){throw o&&await this.runCallbacks("fetchDidFail",{error:a,event:e,originalRequest:o.clone(),request:s.clone()}),a}}async fetchAndCachePut(t){const e=await this.fetch(t),n=e.clone();return this.waitUntil(this.cachePut(t,n)),e}async cacheMatch(t){const e=R(t);let n;const{cacheName:r,matchOptions:o}=this._strategy,s=await this.getCacheKey(e,"read"),i=Object.assign(Object.assign({},o),{cacheName:r});n=await caches.match(s,i);for(const a of this.iterateCallbacks("cachedResponseWillBeUsed"))n=await a({cacheName:r,matchOptions:o,cachedResponse:n,request:s,event:this.event})||void 0;return n}async cachePut(t,e){const n=R(t);await _(0);const o=await this.getCacheKey(n,"write");if(!e)throw new r("cache-put-with-no-response",{url:g(o.url)});const s=await this._ensureResponseSafeToCache(e);if(!s)return!1;const{cacheName:i,matchOptions:a}=this._strategy,c=await self.caches.open(i),u=this.hasCallback("cacheDidUpdate"),l=u?await w(c,o.clone(),["__WB_REVISION__"],a):null;try{await c.put(o,u?s.clone():s)}catch(h){if(h instanceof Error)throw"QuotaExceededError"===h.name&&await x(),h}for(const r of this.iterateCallbacks("cacheDidUpdate"))await r({cacheName:i,oldResponse:l,newResponse:s.clone(),request:o,event:this.event});return!0}async getCacheKey(t,e){const n=`${t.url} | ${e}`;if(!this._cacheKeys[n]){let r=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))r=R(await t({mode:e,request:r,event:this.event,params:this.params}));this._cacheKeys[n]=r}return this._cacheKeys[n]}hasCallback(t){for(const e of this._strategy.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const n of this.iterateCallbacks(t))await n(e)}*iterateCallbacks(t){for(const e of this._strategy.plugins)if("function"===typeof e[t]){const n=this._pluginStateMap.get(e),r=r=>{const o=Object.assign(Object.assign({},r),{state:n});return e[t](o)};yield r}}waitUntil(t){return this._extendLifetimePromises.push(t),t}async doneWaiting(){let t;while(t=this._extendLifetimePromises.shift())await t}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(t){let e=t,n=!1;for(const r of this.iterateCallbacks("cacheWillUpdate"))if(e=await r({request:this.request,response:e,event:this.event})||void 0,n=!0,!e)break;return n||e&&200!==e.status&&(e=void 0),e}}class O{constructor(t={}){this.cacheName=a.getRuntimeName(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,n="string"===typeof t.request?new Request(t.request):t.request,r="params"in t?t.params:void 0,o=new C(this,{event:e,request:n,params:r}),s=this._getResponse(o,n,e),i=this._awaitComplete(s,o,n,e);return[s,i]}async _getResponse(t,e,n){let o;await t.runCallbacks("handlerWillStart",{event:n,request:e});try{if(o=await this._handle(e,t),!o||"error"===o.type)throw new r("no-response",{url:e.url})}catch(s){if(s instanceof Error)for(const r of t.iterateCallbacks("handlerDidError"))if(o=await r({error:s,event:n,request:e}),o)break;if(!o)throw s}for(const r of t.iterateCallbacks("handlerWillRespond"))o=await r({event:n,request:e,response:o});return o}async _awaitComplete(t,e,n,r){let o,s;try{o=await t}catch(s){}try{await e.runCallbacks("handlerDidRespond",{event:r,request:n,response:o}),await e.doneWaiting()}catch(i){i instanceof Error&&(s=i)}if(await e.runCallbacks("handlerDidComplete",{event:r,request:n,response:o,error:s}),e.destroy(),s)throw s}}class P extends O{constructor(t={}){t.cacheName=a.getPrecacheName(t.cacheName),super(t),this._fallbackToNetwork=!1!==t.fallbackToNetwork,this.plugins.push(P.copyRedirectedCacheableResponsesPlugin)}async _handle(t,e){const n=await e.cacheMatch(t);return n||(e.event&&"install"===e.event.type?await this._handleInstall(t,e):await this._handleFetch(t,e))}async _handleFetch(t,e){let n;const o=e.params||{};if(!this._fallbackToNetwork)throw new r("missing-precache-entry",{cacheName:this.cacheName,url:t.url});{0;const r=o.integrity,s=t.integrity,i=!s||s===r;if(n=await e.fetch(new Request(t,{integrity:"no-cors"!==t.mode?s||r:void 0})),r&&i&&"no-cors"!==t.mode){this._useDefaultCacheabilityPluginIfNeeded();await e.cachePut(t,n.clone());0}}return n}async _handleInstall(t,e){this._useDefaultCacheabilityPluginIfNeeded();const n=await e.fetch(t),o=await e.cachePut(t,n.clone());if(!o)throw new r("bad-precaching-response",{url:t.url,status:n.status});return n}_useDefaultCacheabilityPluginIfNeeded(){let t=null,e=0;for(const[n,r]of this.plugins.entries())r!==P.copyRedirectedCacheableResponsesPlugin&&(r===P.defaultPrecacheCacheabilityPlugin&&(t=n),r.cacheWillUpdate&&e++);0===e?this.plugins.push(P.defaultPrecacheCacheabilityPlugin):e>1&&null!==t&&this.plugins.splice(t,1)}}P.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:t}){return!t||t.status>=400?null:t}},P.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await y(t):t}};class S{constructor({cacheName:t,plugins:e=[],fallbackToNetwork:n=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new P({cacheName:a.getPrecacheName(t),plugins:[...e,new f({precacheController:this})],fallbackToNetwork:n}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(t){this.addToCacheList(t),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(t){const e=[];for(const n of t){"string"===typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:o}=l(n),s="string"!==typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(o)&&this._urlsToCacheKeys.get(o)!==t)throw new r("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(o),secondEntry:t});if("string"!==typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(t)&&this._cacheKeysToIntegrities.get(t)!==n.integrity)throw new r("add-to-cache-list-conflicting-integrities",{url:o});this._cacheKeysToIntegrities.set(t,n.integrity)}if(this._urlsToCacheKeys.set(o,t),this._urlsToCacheModes.set(o,s),e.length>0){const t=`Workbox is precaching URLs without revision info: ${e.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(t)}}}install(t){return c(t,(async()=>{const e=new h;this.strategy.plugins.push(e);for(const[o,s]of this._urlsToCacheKeys){const e=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(o),r=new Request(o,{integrity:e,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:r,event:t}))}const{updatedURLs:n,notUpdatedURLs:r}=e;return{updatedURLs:n,notUpdatedURLs:r}}))}activate(t){return c(t,(async()=>{const t=await self.caches.open(this.strategy.cacheName),e=await t.keys(),n=new Set(this._urlsToCacheKeys.values()),r=[];for(const o of e)n.has(o.url)||(await t.delete(o),r.push(o.url));return{deletedURLs:r}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this._urlsToCacheKeys.get(e.href)}getIntegrityForCacheKey(t){return this._cacheKeysToIntegrities.get(t)}async matchPrecache(t){const e=t instanceof Request?t.url:t,n=this.getCacheKeyForURL(e);if(n){const t=await self.caches.open(this.strategy.cacheName);return t.match(n)}}createHandlerBoundToURL(t){const e=this.getCacheKeyForURL(t);if(!e)throw new r("non-precached-url",{url:t});return n=>(n.request=new Request(t),n.params=Object.assign({cacheKey:e},n.params),this.strategy.handle(n))}}let L;const T=()=>(L||(L=new S),L);n(134);const j="GET",U=t=>t&&"object"===typeof t?t:{handle:t};class q{constructor(t,e,n=j){this.handler=U(e),this.match=t,this.method=n}setCatchHandler(t){this.catchHandler=U(t)}}class k extends q{constructor(t,e,n){const r=({url:e})=>{const n=t.exec(e.href);if(n&&(e.origin===location.origin||0===n.index))return n.slice(1)};super(r,e,n)}}class E{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(t=>{const{request:e}=t,n=this.handleRequest({request:e,event:t});n&&t.respondWith(n)}))}addCacheListener(){self.addEventListener("message",(t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data;0;const n=Promise.all(e.urlsToCache.map((e=>{"string"===typeof e&&(e=[e]);const n=new Request(...e);return this.handleRequest({request:n,event:t})})));t.waitUntil(n),t.ports&&t.ports[0]&&n.then((()=>t.ports[0].postMessage(!0)))}}))}handleRequest({request:t,event:e}){const n=new URL(t.url,location.href);if(!n.protocol.startsWith("http"))return void 0;const r=n.origin===location.origin,{params:o,route:s}=this.findMatchingRoute({event:e,request:t,sameOrigin:r,url:n});let i=s&&s.handler;const a=t.method;if(!i&&this._defaultHandlerMap.has(a)&&(i=this._defaultHandlerMap.get(a)),!i)return void 0;let c;try{c=i.handle({url:n,request:t,event:e,params:o})}catch(l){c=Promise.reject(l)}const u=s&&s.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async r=>{if(u){0;try{return await u.handle({url:n,request:t,event:e,params:o})}catch(s){s instanceof Error&&(r=s)}}if(this._catchHandler)return this._catchHandler.handle({url:n,request:t,event:e});throw r}))),c}findMatchingRoute({url:t,sameOrigin:e,request:n,event:r}){const o=this._routes.get(n.method)||[];for(const s of o){let o;const i=s.match({url:t,sameOrigin:e,request:n,event:r});if(i)return o=i,(Array.isArray(o)&&0===o.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"===typeof i)&&(o=void 0),{route:s,params:o}}return{}}setDefaultHandler(t,e=j){this._defaultHandlerMap.set(e,U(t))}setCatchHandler(t){this._catchHandler=U(t)}registerRoute(t){this._routes.has(t.method)||this._routes.set(t.method,[]),this._routes.get(t.method).push(t)}unregisterRoute(t){if(!this._routes.has(t.method))throw new r("unregister-route-but-not-found-with-method",{method:t.method});const e=this._routes.get(t.method).indexOf(t);if(!(e>-1))throw new r("unregister-route-route-not-registered");this._routes.get(t.method).splice(e,1)}}let N;const K=()=>(N||(N=new E,N.addFetchListener(),N.addCacheListener()),N);function M(t,e,n){let o;if("string"===typeof t){const r=new URL(t,location.href);0;const s=({url:t})=>t.href===r.href;o=new q(s,e,n)}else if(t instanceof RegExp)o=new k(t,e,n);else if("function"===typeof t)o=new q(t,e,n);else{if(!(t instanceof q))throw new r("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});o=t}const s=K();return s.registerRoute(o),o}function I(t,e=[]){for(const n of[...t.searchParams.keys()])e.some((t=>t.test(n)))&&t.searchParams.delete(n);return t}function*A(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:o}={}){const s=new URL(t,location.href);s.hash="",yield s.href;const i=I(s,e);if(yield i.href,n&&i.pathname.endsWith("/")){const t=new URL(i.href);t.pathname+=n,yield t.href}if(r){const t=new URL(i.href);t.pathname+=".html",yield t.href}if(o){const t=o({url:s});for(const e of t)yield e.href}}class D extends q{constructor(t,e){const n=({request:n})=>{const r=t.getURLsToCacheKeys();for(const o of A(n.url,e)){const e=r.get(o);if(e){const n=t.getIntegrityForCacheKey(e);return{cacheKey:e,integrity:n}}}};super(n,t.strategy)}}function F(t){const e=T(),n=new D(e,t);M(n)}function W(t){const e=T();e.precache(t)}function H(t,e){W(t),F(e)}H([{'revision':null,'url':'/pwa-test/css/app.0457deba.css'},{'revision':'a5e9929bd7c386ca2a31f12226c173a9','url':'/pwa-test/icons/icon-144x144.png'},{'revision':'1eb31242523e2413c4af8d3eefb9c56c','url':'/pwa-test/icons/icon-192x192.png'},{'revision':'5794182289ee13aacc7f52c74c89919e','url':'/pwa-test/icons/icon-256x256.png'},{'revision':'5b1143e0c17c6c35bc007f8f4170fe4f','url':'/pwa-test/icons/icon-384x384.png'},{'revision':'a79ca186cecfc081a6133f3b00d2ab41','url':'/pwa-test/icons/icon-512x512.png'},{'revision':'f0b8e3cfc03b84eaff96b17a8134e972','url':'/pwa-test/icons/icon-96x96.png'},{'revision':'90a6abbcab45ca236887144b6ee57ff0','url':'/pwa-test/index.html'},{'revision':null,'url':'/pwa-test/js/app.8c618542.js'},{'revision':null,'url':'/pwa-test/js/chunk-vendors.2aa5bff2.js'},{'revision':'3ac6fa717f0c0e01ea179a0240a2c199','url':'/pwa-test/manifest.json'},{'revision':'b6216d61c03e6ce0c9aea6ca7808f7ca','url':'/pwa-test/robots.txt'}])}()})();
//# sourceMappingURL=service-worker.js.map