!function(e){var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,r){if(!g[e]||!m[e])return;for(var n in m[e]=!1,r)Object.prototype.hasOwnProperty.call(r,n)&&(h[n]=r[n]);0==--D&&0===I&&y()}(e,n),r&&r(e,n)};var n,o=!0,t="901521fb7954f930d6de",i=1e4,a={},c=[],s=[];function d(e){var r=V[e];if(!r)return T;var o=function(o){return r.hot.active?(V[o]?-1===V[o].parents.indexOf(e)&&V[o].parents.push(e):(c=[e],n=o),-1===r.children.indexOf(o)&&r.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),c=[]),T(o)},t=function(e){return{configurable:!0,enumerable:!0,get:function(){return T[e]},set:function(r){T[e]=r}}};for(var i in T)Object.prototype.hasOwnProperty.call(T,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(o,i,t(i));return o.e=function(e){return"ready"===p&&f("prepare"),I++,T.e(e).then(r,function(e){throw r(),e});function r(){I--,"prepare"===p&&(R[e]||P(e),0===I&&0===D&&y())}},o.t=function(e,r){return 1&r&&(e=o(e)),T.t(e,-2&r)},o}function l(e){var r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:n!==e,active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)r._acceptedDependencies[e[o]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=r._disposeHandlers.indexOf(e);n>=0&&r._disposeHandlers.splice(n,1)},check:G,apply:w,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var r=u.indexOf(e);r>=0&&u.splice(r,1)},data:a[e]};return n=void 0,r}var u=[],p="idle";function f(e){p=e;for(var r=0;r<u.length;r++)u[r].call(null,e)}var A,h,M,D=0,I=0,R={},m={},g={};function v(e){return+e+""===e?+e:e}function G(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return o=e,f("check"),(r=i,r=r||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var o=new XMLHttpRequest,i=T.p+""+t+".hot-update.json";o.open("GET",i,!0),o.timeout=r,o.send(null)}catch(e){return n(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===o.status)e();else if(200!==o.status&&304!==o.status)n(new Error("Manifest request to "+i+" failed."));else{try{var r=JSON.parse(o.responseText)}catch(e){return void n(e)}e(r)}}})).then(function(e){if(!e)return f("idle"),null;m={},R={},g=e.c,M=e.h,f("prepare");var r=new Promise(function(e,r){A={resolve:e,reject:r}});h={};return P(0),"prepare"===p&&0===I&&0===D&&y(),r});var r}function P(e){g[e]?(m[e]=!0,D++,function(e){var r=document.createElement("script");r.charset="utf-8",r.src=T.p+""+e+"."+t+".hot-update.js",document.head.appendChild(r)}(e)):R[e]=!0}function y(){f("ready");var e=A;if(A=null,e)if(o)Promise.resolve().then(function(){return w(o)}).then(function(r){e.resolve(r)},function(r){e.reject(r)});else{var r=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&r.push(v(n));e.resolve(r)}}function w(r){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var n,o,i,s,d;function l(e){for(var r=[e],n={},o=r.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var t=o.pop(),i=t.id,a=t.chain;if((s=V[i])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(s.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<s.parents.length;c++){var d=s.parents[c],l=V[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([d]),moduleId:i,parentId:d};-1===r.indexOf(d)&&(l.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),u(n[d],[i])):(delete n[d],r.push(d),o.push({chain:a.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function u(e,r){for(var n=0;n<r.length;n++){var o=r[n];-1===e.indexOf(o)&&e.push(o)}}r=r||{};var A={},D=[],I={},R=function(){console.warn("[HMR] unexpected require("+G.moduleId+") to disposed module")};for(var m in h)if(Object.prototype.hasOwnProperty.call(h,m)){var G;d=v(m);var P=!1,y=!1,w=!1,N="";switch((G=h[m]?l(d):{type:"disposed",moduleId:m}).chain&&(N="\nUpdate propagation: "+G.chain.join(" -> ")),G.type){case"self-declined":r.onDeclined&&r.onDeclined(G),r.ignoreDeclined||(P=new Error("Aborted because of self decline: "+G.moduleId+N));break;case"declined":r.onDeclined&&r.onDeclined(G),r.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+G.moduleId+" in "+G.parentId+N));break;case"unaccepted":r.onUnaccepted&&r.onUnaccepted(G),r.ignoreUnaccepted||(P=new Error("Aborted because "+d+" is not accepted"+N));break;case"accepted":r.onAccepted&&r.onAccepted(G),y=!0;break;case"disposed":r.onDisposed&&r.onDisposed(G),w=!0;break;default:throw new Error("Unexception type "+G.type)}if(P)return f("abort"),Promise.reject(P);if(y)for(d in I[d]=h[d],u(D,G.outdatedModules),G.outdatedDependencies)Object.prototype.hasOwnProperty.call(G.outdatedDependencies,d)&&(A[d]||(A[d]=[]),u(A[d],G.outdatedDependencies[d]));w&&(u(D,[G.moduleId]),I[d]=R)}var b,X=[];for(o=0;o<D.length;o++)d=D[o],V[d]&&V[d].hot._selfAccepted&&X.push({module:d,errorHandler:V[d].hot._selfAccepted});f("dispose"),Object.keys(g).forEach(function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)});for(var _,F,x=D.slice();x.length>0;)if(d=x.pop(),s=V[d]){var S={},E=s.hot._disposeHandlers;for(i=0;i<E.length;i++)(n=E[i])(S);for(a[d]=S,s.hot.active=!1,delete V[d],delete A[d],i=0;i<s.children.length;i++){var L=V[s.children[i]];L&&((b=L.parents.indexOf(d))>=0&&L.parents.splice(b,1))}}for(d in A)if(Object.prototype.hasOwnProperty.call(A,d)&&(s=V[d]))for(F=A[d],i=0;i<F.length;i++)_=F[i],(b=s.children.indexOf(_))>=0&&s.children.splice(b,1);for(d in f("apply"),t=M,I)Object.prototype.hasOwnProperty.call(I,d)&&(e[d]=I[d]);var O=null;for(d in A)if(Object.prototype.hasOwnProperty.call(A,d)&&(s=V[d])){F=A[d];var H=[];for(o=0;o<F.length;o++)if(_=F[o],n=s.hot._acceptedDependencies[_]){if(-1!==H.indexOf(n))continue;H.push(n)}for(o=0;o<H.length;o++){n=H[o];try{n(F)}catch(e){r.onErrored&&r.onErrored({type:"accept-errored",moduleId:d,dependencyId:F[o],error:e}),r.ignoreErrored||O||(O=e)}}}for(o=0;o<X.length;o++){var Q=X[o];d=Q.module,c=[d];try{T(d)}catch(e){if("function"==typeof Q.errorHandler)try{Q.errorHandler(e)}catch(n){r.onErrored&&r.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:n,originalError:e}),r.ignoreErrored||O||(O=n),O||(O=e)}else r.onErrored&&r.onErrored({type:"self-accept-errored",moduleId:d,error:e}),r.ignoreErrored||O||(O=e)}}return O?(f("fail"),Promise.reject(O)):(f("idle"),new Promise(function(e){e(D)}))}var V={};function T(r){if(V[r])return V[r].exports;var n=V[r]={i:r,l:!1,exports:{},hot:l(r),parents:(s=c,c=[],s),children:[]};return e[r].call(n.exports,n,n.exports,d(r)),n.l=!0,n.exports}T.m=e,T.c=V,T.d=function(e,r,n){T.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},T.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},T.t=function(e,r){if(1&r&&(e=T(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(T.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)T.d(n,o,function(r){return e[r]}.bind(null,o));return n},T.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return T.d(r,"a",r),r},T.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},T.p="",T.h=function(){return t},d(5)(T.s=5)}([function(e,r){!function(){for(var e=0,r=["webkit","moz"],n=0;n<r.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[r[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[r[n]+"CancelAnimationFrame"]||window[r[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(r,n){var o=(new Date).getTime(),t=Math.max(0,16-(o-e)),i=window.setTimeout(function(){r(o+t)},t);return e=o+t,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},function(e,r,n){},function(e,r,n){window,e.exports=function(e){var r={};function n(o){if(r[o])return r[o].exports;var t=r[o]={i:o,l:!1,exports:{}};return e[o].call(t.exports,t,t.exports,n),t.l=!0,t.exports}return n.m=e,n.c=r,n.d=function(e,r,o){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)n.d(o,t,function(r){return e[r]}.bind(null,t));return o},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=1)}([function(e,r,n){var o,t,i,a;function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a=function(e){"use strict";var r=function(){function e(e){this.cache=new Map,this.userAgent=e||(window&&window.navigator?window.navigator.userAgent:""),this.android=!/like android/i.test(this.userAgent)&&/android/i.test(this.userAgent),this.iOS=this.match(1,/(iphone|ipod|ipad)/i).toLowerCase()}return e.prototype.match=function(e,r){var n=this.userAgent.match(r);return n&&1<n.length&&n[e]||""},Object.defineProperty(e.prototype,"isMobile",{get:function(){return this.cache.get("isMobile")||(!this.isTablet&&(/[^-]mobi/i.test(this.userAgent)||"iphone"===this.iOS||"ipod"===this.iOS||this.android||/nexus\s*[0-6]\s*/i.test(this.userAgent))?(this.cache.set("isMobile",!0),!0):(this.cache.set("isMobile",!1),!1))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isTablet",{get:function(){return this.cache.get("isTablet")||(/tablet/i.test(this.userAgent)&&!/tablet pc/i.test(this.userAgent)||"ipad"===this.iOS||this.android&&!/[^-]mobi/i.test(this.userAgent)||!/nexus\s*[0-6]\s*/i.test(this.userAgent)&&/nexus\s*[0-9]+/i.test(this.userAgent)?(this.cache.set("isTablet",!0),!0):(this.cache.set("isTablet",!1),!1))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isDesktop",{get:function(){var e=this.cache.get("isDesktop");if(e)return e;var r=!this.isMobile&&!this.isTablet;return this.cache.set("isDesktop",r),r},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isiOS",{get:function(){return this.cache.get("isiOS")||!!this.iOS&&{name:"iOS",version:this.match(1,/os (\d+([_\s]\d+)*) like mac os x/i).replace(/[_\s]/g,".")}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isAndroid",{get:function(){return this.cache.get("isAndroid")||!!this.android&&{name:"Android",version:this.match(1,/android[ \/-](\d+(\.\d+)*)/i)}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"browser",{get:function(){var e=this.cache.get("browser");if(e)return e;var r,n=this.match(1,/version\/(\d+(\.\d+)?)/i);return r=/opera/i.test(this.userAgent)?{name:"Opera",version:n||this.match(1,/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr\/|opios/i.test(this.userAgent)?{name:"Opera",version:this.match(1,/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||n}:/SamsungBrowser/i.test(this.userAgent)?{name:"Samsung Internet for Android",version:n||this.match(1,/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(this.userAgent)?{name:"Yandex Browser",version:n||this.match(1,/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(this.userAgent)?{name:"UC Browser",version:this.match(1,/(?:ucbrowser)[\s\/](\d+(\.\d+)?)/i)}:/msie|trident/i.test(this.userAgent)?{name:"Internet Explorer",version:this.match(1,/(?:msie |rv:)(\d+(\.\d+)?)/i)}:/edg([ea]|ios)/i.test(this.userAgent)?{name:"Microsoft Edge",version:this.match(2,/edg([ea]|ios)\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(this.userAgent)?{name:"Firefox",version:this.match(1,/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)}:/chromium/i.test(this.userAgent)?{name:"Chromium",version:this.match(1,/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||n}:/chrome|crios|crmo/i.test(this.userAgent)?{name:"Chrome",version:this.match(1,/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/safari|applewebkit/i.test(this.userAgent)?{name:"Safari",version:n}:{name:this.match(1,/^(.*)\/(.*) /),version:this.match(2,/^(.*)\/(.*) /)},this.cache.set("browser",r),r},enumerable:!0,configurable:!0}),e}();e.DetectUA=r,Object.defineProperty(e,"__esModule",{value:!0})},"object"==c(r)&&void 0!==e?a(r):(t=[r],void 0===(i="function"==typeof(o=a)?o.apply(r,t):o)||(e.exports=i))},function(e,r,n){"use strict";n.r(r);var o=n(0),t=["736 - AMD Radeon HD 7290","726 - AMD Radeon HD 8180","724 - AMD Radeon HD 7310","722 - AMD Radeon HD 7340","718 - Intel HD Graphics (Bay Trail)","677 - Intel HD Graphics (Ivy Bridge)","673 - AMD Radeon HD 8210","649 - AMD Radeon HD 8250","648 - AMD Radeon R6 (Mullins)","647 - AMD Radeon HD 8240","639 - AMD Radeon HD 8280","636 - Intel HD Graphics (Cherry Trail)","635 - AMD Radeon R2 (Mullins/Beema/Carrizo-L)","614 - Intel HD Graphics (Haswell)","605 - Intel HD Graphics 400 (Braswell)","604 - Intel HD Graphics (Braswell)","603 - Intel HD Graphics 405 (Braswell)","583 - Intel HD Graphics 500","582 - Intel UHD Graphics 600","581 - AMD Radeon HD 8330","580 - AMD Radeon HD 8350G","567 - AMD Radeon HD 8400","563 - AMD Radeon HD 8450G","554 - Intel HD Graphics 4200","553 - AMD Radeon R2 (Stoney Ridge)","552 - AMD Radeon R3 (Mullins/Beema)","551 - AMD Radeon R4 (Beema)","550 - AMD Radeon R5 (Beema/Carrizo-L)","548 - Intel HD Graphics (Broadwell)","547 - AMD Radeon R4 (Kaveri)","546 - AMD Radeon R4 (Stoney Ridge)","542 - Intel HD Graphics 4000","541 - AMD Radeon HD 7480D","533 - Intel HD Graphics 505","532 - Intel UHD Graphics 605","531 - Intel HD Graphics 5300","502 - Intel HD Graphics 510","501 - Intel HD Graphics 610","500 - Intel HD Graphics 4400","499 - Intel HD Graphics 515","492 - AMD Radeon HD 8470D","483 - AMD Radeon HD 8550G","467 - Intel HD Graphics 5000","464 - AMD Radeon HD 7660G","463 - NVIDIA GeForce 710M","460 - AMD Radeon R5 (Kaveri)","459 - AMD Radeon R5 (Carrizo)","458 - Intel HD Graphics 615","457 - Intel UHD Graphics 615","456 - Intel UHD Graphics 617","447 - Intel HD Graphics 5500","445 - Intel HD Graphics 4600","442 - AMD Radeon HD 8610G","440 - Intel Iris Graphics 5100","438 - NVIDIA Quadro K610M","437 - Intel HD Graphics 6000","431 - AMD Radeon R5 M420","430 - AMD Radeon R5 M315","428 - AMD Radeon R5 M320","425 - AMD Radeon R5 (Stoney Ridge)","424 - NVIDIA GeForce GT 720M","423 - Intel Iris Graphics 6100","422 - Intel HD Graphics 520","421 - AMD Radeon RX Vega 3","420 - NVIDIA GeForce 820M","419 - NVIDIA GeForce 910M","417 - AMD Radeon R5 M255","416 - AMD Radeon R5 M430","415 - AMD Radeon R5 M330","412 - AMD Radeon HD 7560D","406 - AMD Radeon HD 8650G","390 - NVIDIA Quadro K1000M","388 - AMD Radeon HD 7660D","387 - AMD Radeon R6 M255DX","380 - Intel HD Graphics 5600","370 - AMD FirePro W2100","361 - AMD Radeon R6 (Kaveri)","349 - AMD Radeon R6 (Carrizo)","348 - Intel HD Graphics 620","347 - Intel UHD Graphics 620","346 - AMD Radeon R5 (Bristol Ridge)","344 - Intel HD Graphics P530","343 - Intel HD Graphics 530","342 - Intel HD Graphics P630","341 - Intel HD Graphics 630","340 - Intel UHD Graphics 630","339 - AMD Radeon RX Vega 6","337 - AMD Radeon 520","336 - AMD Radeon R7 M340","329 - AMD Radeon R7 M440","328 - AMD Radeon R8 M445DX","325 - NVIDIA GeForce 920M","323 - AMD Radeon R7 M360","320 - AMD Radeon R7 M460","318 - AMD Radeon R7 (Kaveri)","317 - AMD Radeon R7 (Carrizo)","316 - NVIDIA GeForce GT 640M","315 - AMD Radeon R7 (Bristol Ridge)","311 - AMD Radeon R7 M265","307 - AMD FirePro M4100","304 - NVIDIA GeForce GT 730M","294 - AMD FirePro M4000","292 - NVIDIA GeForce 825M","290 - NVIDIA GeForce GT 735M","287 - NVIDIA Quadro K2000M","283 - Intel Iris Graphics 540","282 - NVIDIA GeForce 920MX","281 - Intel Iris Plus Graphics 640","280 - NVIDIA GeForce MX110","279 - NVIDIA GeForce 830M","278 - AMD Radeon 530","277 - Intel Iris Graphics 550","276 - NVIDIA GeForce 930M","275 - Intel Iris Plus Graphics 650","274 - NVIDIA GeForce GT 740M","273 - AMD Radeon R7 384 Cores (Kaveri Desktop)","272 - Intel Iris Pro Graphics 5200","271 - AMD Radeon R7 512 Cores (Kaveri Desktop)","268 - NVIDIA GeForce GT 745M","266 - NVIDIA GeForce 840M","265 - NVIDIA Quadro M500M","260 - AMD Radeon R7 M445","259 - Intel Iris Plus Graphics 655","258 - AMD Radeon R9 M375","257 - AMD FirePro W4190M","256 - NVIDIA Quadro M600M","254 - NVIDIA GeForce 930MX","253 - NVIDIA GeForce 940M","252 - AMD Radeon RX Vega 8","251 - NVIDIA Quadro K1100M","250 - NVIDIA Quadro M520","249 - NVIDIA GeForce 940MX","248 - NVIDIA GeForce MX130","247 - NVIDIA GeForce MX230","246 - Intel Iris Pro Graphics 6200","245 - NVIDIA GeForce GT 750M","240 - AMD FirePro W4100","239 - AMD FirePro W4170M","237 - AMD Radeon R7 M465","235 - AMD Radeon R9 M265X","232 - NVIDIA GeForce 845M","230 - NVIDIA GeForce GT 755M","229 - AMD Radeon R7 250","224 - NVIDIA Quadro K2100M","223 - AMD FirePro M5100","222 - AMD FirePro M6000","220 - NVIDIA Quadro K3000M","214 - AMD FirePro W5130M","213 - NVIDIA Maxwell GPU Surface Book (940M, GDDR5)","207 - AMD Radeon R9 M370X","206 - AMD FirePro W5170M","205 - NVIDIA Quadro K3100M","194 - AMD Radeon R9 M470","189 - Intel Iris Pro Graphics 580","188 - Intel Iris Pro Graphics P580","187 - AMD Radeon RX Vega 10","186 - NVIDIA Quadro K4000M","182 - NVIDIA Quadro P500","180 - NVIDIA GeForce 945M","175 - AMD Radeon RX Vega 11","173 - NVIDIA Quadro M620","172 - NVIDIA Quadro M1000M","171 - NVIDIA GeForce GTX 850M","170 - AMD Radeon R9 M385X","169 - AMD Radeon R9 M470X","168 - AMD Radeon Pro 450","167 - NVIDIA GeForce GTX 950M","159 - NVIDIA GeForce GTX 860M","158 - AMD Radeon Pro WX 3100 Mobile","157 - AMD Radeon RX 540","155 - NVIDIA Quadro K4100M","154 - NVIDIA Quadro K5000M","153 - NVIDIA Quadro M2000M","152 - NVIDIA GeForce MX150","151 - NVIDIA GeForce MX250","150 - NVIDIA Quadro P600","149 - NVIDIA GeForce GT 1030 (Desktop)","148 - AMD Radeon Pro 455","147 - AMD Radeon Pro 555","146 - AMD Radeon Pro 555X","145 - NVIDIA Quadro M1200","141 - AMD Radeon RX 550 (Laptop)","140 - AMD Radeon RX 550X (Laptop)","138 - NVIDIA GeForce GTX 960M","137 - AMD Radeon Pro WX 4130","136 - AMD Radeon Pro 460","135 - AMD Radeon Pro 560","134 - AMD Radeon Pro 560X","132 - AMD FirePro M6100","131 - AMD Radeon R9 M390","128 - AMD Radeon RX 460 (Laptop)","121 - NVIDIA GeForce GTX 870M","120 - NVIDIA Quadro M2200","119 - AMD Radeon RX 560 (Laptop)","118 - AMD Radeon RX 560X (Laptop)","117 - NVIDIA GeForce GTX 965M","115 - AMD Radeon Pro WX 4150","114 - AMD Radeon RX 460 (Desktop)","112 - NVIDIA Quadro P1000","111 - NVIDIA Quadro K5100M","107 - AMD Radeon R9 270X","106 - NVIDIA GeForce GTX 950","105 - NVIDIA GeForce GTX 880M","103 - AMD Radeon R7 370","102 - AMD Radeon R9 M395","101 - AMD FirePro W7170M","100 - NVIDIA GeForce GTX 1050 Max-Q","99 - NVIDIA GeForce GTX 1050 (Laptop)","98 - NVIDIA GeForce GTX 1050 (Desktop)","97 - NVIDIA Quadro M3000M","94 - AMD Radeon R9 M485X","93 - AMD Radeon Pro Vega 16","92 - AMD Radeon Pro WX Vega M GL","91 - AMD Radeon RX Vega M GL / 870","90 - AMD Radeon R9 M395X","85 - NVIDIA Quadro M4000M","84 - NVIDIA GeForce GTX 970M","83 - NVIDIA Quadro P2000 Max-Q","82 - NVIDIA Quadro P2000","81 - NVIDIA GeForce GTX 1050 Ti Max-Q","80 - NVIDIA GeForce GTX 1050 Ti (Desktop)","79 - NVIDIA GeForce GTX 1050 Ti (Laptop)","78 - NVIDIA GeForce GTX 960","77 - AMD Radeon R9 380","76 - AMD Radeon R9 280X","75 - NVIDIA Quadro M5000M","74 - AMD Radeon Pro Vega 20","73 - AMD Radeon RX Vega M GH","72 - NVIDIA GeForce GTX 980M","65 - AMD Radeon R9 290X","62 - AMD Radeon RX 470 (Laptop)","61 - AMD Radeon RX 570 (Laptop)","60 - AMD Radeon RX 570X (Laptop)","59 - AMD Radeon RX 470 (Desktop)","58 - AMD Radeon Pro WX 7100","56 - NVIDIA Quadro P3000 Max-Q","55 - NVIDIA GeForce GTX 1060 Max-Q","54 - NVIDIA GeForce GTX 970","53 - NVIDIA Quadro P3000","52 - AMD Radeon RX Vega Mobile","50 - AMD Radeon RX 580 (Laptop)","49 - AMD Radeon RX 580X (Laptop)","48 - NVIDIA Quadro P3200","47 - NVIDIA Quadro P4000 Max-Q","46 - NVIDIA GeForce GTX 1060 (Laptop)","45 - AMD Radeon RX 480 (Desktop)","44 - NVIDIA Quadro P4000","43 - NVIDIA GeForce GTX 1660 Ti (Laptop)","42 - NVIDIA GeForce GTX 1060 (Desktop)","40 - AMD Radeon R9 390X","39 - NVIDIA Quadro M5500","38 - NVIDIA GeForce GTX 980 (Laptop)","37 - AMD Radeon RX 580 (Desktop)","36 - AMD Radeon RX 590 (Desktop)","35 - NVIDIA GeForce GTX 980","34 - AMD Radeon R9 Nano","33 - AMD Radeon R9 Fury","31 - NVIDIA Quadro P5000 Max-Q","30 - NVIDIA GeForce GTX 1070 Max-Q","29 - NVIDIA GeForce GTX 980 Ti","28 - NVIDIA Quadro P5000","27 - NVIDIA Quadro P4200","26 - NVIDIA GeForce GTX 1070 (Laptop)","25 - NVIDIA GeForce GTX 1080 Max-Q","24 - NVIDIA GeForce GTX 1070 (Desktop)","23 - AMD Radeon Pro Vega 56","22 - NVIDIA GeForce RTX 2060 Max-Q","21 - NVIDIA Quadro P5200","19 - NVIDIA GeForce RTX 2060 (Laptop)","18 - NVIDIA GeForce GTX 1070 Ti (Desktop)","17 - NVIDIA GeForce RTX 2060 (Desktop)","16 - NVIDIA GeForce GTX 1080 (Laptop)","15 - AMD Radeon RX Vega 64","14 - NVIDIA GeForce RTX 2070 Max-Q","13 - NVIDIA GeForce RTX 2070 (Laptop)","12 - NVIDIA GeForce GTX 1080 (Desktop)","11 - NVIDIA GeForce RTX 2070 (Desktop)","10 - NVIDIA GeForce GTX 1070 SLI (Laptop)","9 - NVIDIA GeForce GTX 1070 SLI (Desktop)","8 - NVIDIA GeForce GTX 1080 SLI (Laptop)","7 - NVIDIA Titan X Pascal","6 - NVIDIA GeForce GTX 1080 Ti (Desktop)","5 - NVIDIA GeForce RTX 2080 Max-Q","4 - NVIDIA GeForce RTX 2080 (Laptop)","3 - NVIDIA GeForce RTX 2080 (Desktop)","2 - NVIDIA GeForce RTX 2080 Ti (Desktop)","1 - NVIDIA Titan RTX"],i=["876 - ARM Mali-200","875 - Qualcomm Adreno 200","874 - PowerVR SGX530","873 - PowerVR SGX531","872 - PowerVR SGX535","871 - Vivante GC800","870 - Qualcomm Adreno 203","869 - Qualcomm Adreno 205","867 - PowerVR SGX540","865 - NVIDIA GeForce ULP (Tegra 2)","864 - ARM Mali-400 MP","863 - ARM Mali-400 MP2","862 - Vivante GC1000+ Dual-Core","861 - Qualcomm Adreno 220","860 - Broadcom VideoCore-IV","859 - NVIDIA GeForce ULP (Tegra 3)","858 - ARM Mali-400 MP4","857 - Vivante GC4000","856 - Qualcomm Adreno 225","848 - Qualcomm Adreno 302","847 - Vivante GC7000UL","846 - ARM Mali-T720","845 - Qualcomm Adreno 304","844 - Qualcomm Adreno 305","843 - Qualcomm Adreno 306","842 - Qualcomm Adreno 308","841 - PowerVR SGX544","840 - ARM Mali-T720 MP2","839 - PowerVR SGX544MP2","838 - PowerVR SGX545","835 - PowerVR SGX543MP2","825 - PowerVR SGX543MP3","817 - ARM Mali-T830 MP1","816 - ARM Mali-450 MP4","815 - ARM Mali-T720 MP4","814 - PowerVR GE8100","813 - PowerVR GE8320","812 - ARM Mali-T760 MP2","811 - Qualcomm Adreno 320","810 - ARM Mali-T624","809 - PowerVR SGX543MP4","782 - ARM Mali-T830 MP2","781 - Qualcomm Adreno 405","780 - PowerVR G6200","779 - NVIDIA GeForce Tegra 4","774 - ARM Mali-T604 MP4","768 - ARM Mali-T830 MP3","767 - ARM Mali-T860 MP2","763 - Qualcomm Adreno 505","762 - Qualcomm Adreno 506","761 - Qualcomm Adreno 508","760 - Qualcomm Adreno 509","759 - ARM Mali-T628 MP4","758 - PowerVR SGX554MP4","720 - ARM Mali-T760 MP4","719 - ARM Mali-T628 MP6","718 - Intel HD Graphics (Bay Trail)","717 - PowerVR G6400","716 - PowerVR GX6250","715 - PowerVR G6430","714 - Qualcomm Adreno 330","713 - Qualcomm Adreno 510","712 - Qualcomm Adreno 512","637 - ARM Mali-G51 MP4","636 - Intel HD Graphics (Cherry Trail)","634 - Qualcomm Adreno 616","633 - Qualcomm Adreno 418","613 - Qualcomm Adreno 420","612 - PowerVR GX6450","602 - ARM Mali-T880 MP2","601 - ARM Mali-T760 MP6","569 - ARM Mali-T880 MP4","568 - ARM Mali-G72 MP3","549 - Qualcomm Adreno 430","544 - ARM Mali-G71 MP2","543 - ARM Mali-T760 MP8","498 - ARM Mali-T880 MP12","497 - Apple A9 / PowerVR GT7600","496 - NVIDIA Tegra K1 Kepler GPU","495 - PowerVR GXA6850","494 - Qualcomm Adreno 530","455 - ARM Mali-G71 MP8","454 - ARM Mali-G72 MP12","453 - ARM Mali-G71 MP20","452 - ARM Mali-G72 MP18","451 - Qualcomm Adreno 540","450 - ARM Mali-G76 MP10","449 - Qualcomm Adreno 630","448 - Qualcomm Adreno 640","432 - Apple A10 Fusion GPU / PowerVR","345 - NVIDIA Tegra X1 Maxwell GPU","322 - Apple A9X / PowerVR Series 7XT","286 - Apple A10X Fusion GPU / PowerVR","285 - Apple A11 Bionic GPU","284 - Apple A12 Bionic GPU","255 - Apple A12X Bionic GPU"],a=function(e,r){var n=0;return r.map(function(r){var o=Math.round(e.length/100*r),t=e.slice(n,n+o);return n+=o,t})};function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(r,"getGPUTier",function(){return p});var s=new o.DetectUA;function d(e){return e.toLowerCase().split("- ")[1].split(" /")[0]}function l(e){return e.replace(/[\D]/g,"")}var u=function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.mobileBenchmarkPercentages=[10,40,30,20],this.desktopBenchmarkPercentages=[10,40,30,20],this.forceRendererString=!1,this.forceMobile=!1,c(this,r);var n,o,u,p,f=s.isMobile||s.isTablet||this.forceMobile,A=!f,h=function(){var e={alpha:!1,stencil:!1,antialias:!1,depth:!1,failIfMajorPerformanceCaveat:!0},r=document.createElement("canvas"),n=r.getContext("webgl",e)||r.getContext("experimental-webgl",e);return!!(n&&n instanceof WebGLRenderingContext)&&n}();if(!h)return f?{tier:"GPU_MOBILE_TIER_0",type:"WEBGL_UNSUPPORTED"}:{tier:"GPU_DESKTOP_TIER_0",type:"WEBGL_UNSUPPORTED"};n=!1===this.forceRendererString?function(e){if(e){var r=e.getExtension("WEBGL_debug_renderer_info");return r&&e.getParameter(r.UNMASKED_RENDERER_WEBGL)}return!1}(h):this.forceRendererString,(p=n.toLowerCase()).includes("angle (")&&p.includes("direct3d")&&(p=p.replace("angle (","").split(" direct3d")[0]),p.includes("nvidia")&&p.includes("gb")&&(p=p.split(/\dgb/)[0]);var M=(n=p).replace(/[\D]/g,"");if(/(radeon hd 6970m|radeon hd 6770m|radeon hd 6490m|radeon hd 6630m|radeon hd 6750m|radeon hd 5750|radeon hd 5670|radeon hd 4850|radeon hd 4870|radeon hd 4670|geforce 9400m|geforce 320m|geforce 330m|geforce gt 130|geforce gt 120|geforce gtx 285|geforce 8600|geforce 9600m|geforce 9400m|geforce 8800 gs|geforce 8800 gt|quadro fx 5|quadro fx 4|radeon hd 2600|radeon hd 2400|radeon hd 2600|mali-4|mali-3|mali-2)/.test(n))return f?{tier:"GPU_MOBILE_TIER_0",type:"BLACKLISTED"}:{tier:"GPU_DESKTOP_TIER_0",type:"BLACKLISTED"};if(f){var D=a(i,this.mobileBenchmarkPercentages),I=n.includes("adreno"),R=n.includes("apple"),m=n.includes("mali")&&!n.includes("mali-t"),g=n.includes("mali-t"),v=n.includes("nvidia"),G=n.includes("powervr");return D.forEach(function(e,r){return e.forEach(function(e){var n=d(e),t=l(n);(n.includes("adreno")&&I||n.includes("apple")&&R||n.includes("mali")&&!n.includes("mali-t")&&m||n.includes("mali-t")&&g||n.includes("nvidia")&&v||n.includes("powervr")&&G)&&t.includes(M)&&(o="GPU_MOBILE_TIER_".concat(r),u="BENCHMARK - ".concat(n))})}),o||(o="GPU_MOBILE_TIER_1",u="FALLBACK"),{tier:o,type:u}}if(A){var P=a(t,this.desktopBenchmarkPercentages),y=n.includes("intel"),w=n.includes("amd"),V=n.includes("nvidia");return P.forEach(function(e,r){return e.forEach(function(e){var n=d(e),t=l(n);(n.includes("intel")&&y||n.includes("amd")&&w||n.includes("nvidia")&&V)&&t.includes(M)&&(o="GPU_DESKTOP_TIER_".concat(r),u="BENCHMARK - ".concat(n))})}),o||(o="GPU_DESKTOP_TIER_1",u="FALLBACK"),{tier:o,type:u}}return{tier:o,type:u}};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new u(e)}}])},function(e,r){e.exports="precision highp float;\r\n\r\nattribute vec3 position;\r\n\r\nvoid main() {\r\n    gl_Position = vec4(position, 1.0);\r\n}"},function(e,r){e.exports="\r\nprecision highp float;\r\n\r\n// uniforms: time and size screen\r\n\r\nuniform float uTime;\r\nuniform vec2 uResolution;\r\n/* uniform sampler2D uImage; */\r\n// raymarch constants\r\n\r\nconst int MAX_MARCHING_STEPS = 100;\r\nconst float MIN_DISTANCE = 0.0;\r\nconst float MAX_DISTANCE = 120.0;\r\nconst float EPSILON = 0.0001;\r\n\r\n// phong shading constants\r\n\r\n#define AMBIENT vec3(1.0, 0.4, 1.0) * 0.25\r\n#define DIFFUSE vec3(1.0, 0.0, 0.0)\r\n#define SPECULAR vec3(1.0, 1.0, 1.0)\r\n#define SHININESS 8.0\r\n\r\n/**\r\n * Signed distance function for a torus;\r\n */\r\nfloat torus(vec3 p, vec2 t) {\r\n    vec2 q = vec2(length(p.xz) - t.x, p.y);\r\n    return length(q) - t.y;\r\n}\r\n\r\n/*\r\n*   twist transformation\r\n*/\r\nvec3 twist(vec3 p) {\r\n    float c = cos(sin(uTime * 2.0) * 2.2 * p.y);\r\n    float s = sin(tan(uTime * 0.5) * 3.0 * p.y);\r\n    mat2 m = mat2(c, -s, s, c);\r\n    return vec3(m * p.xz, p.y);\r\n}\r\n\r\nmat4 rotationMatrix(vec3 axis, float angle) {\r\n    vec3 a = normalize(axis);\r\n    float s = sin(angle) * -1.0;\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    return mat4(\r\n        oc * a.x * a.x + c, oc * a.x * a.y - a.z * s, oc * a.z * a.x + a.y * s, 0.0,\r\n        oc * a.x * a.y + a.z * s, oc * a.y * a.y + c, oc * a.y * a.z - a.x * s, 0.0,\r\n        oc * a.z * a.x - a.y * s, oc * a.y * a.z + a.x * s, oc * a.z * a.z + c, 0.0,\r\n        0.0, 0.0, 0.0, 0.0\r\n    );\r\n}\r\n\r\nvec3 rotator(vec3 p, mat4 m) {\r\n    vec3 q = (m * vec4(p, 0.0)).xyz;\r\n    return q;\r\n}\r\n\r\nfloat scene(vec3 p) {\r\n    vec3 t = twist(p);\r\n    mat4 matrix = rotationMatrix(vec3(0.0, 1.0, 1.0), uTime);\r\n    vec3 r = rotator(t, matrix);\r\n    return torus(r, vec2(0.4, 0.4));\r\n}\r\n\r\n/**\r\n * Return the shortest distance from the eyepoint to the scene surface along\r\n * the marching direction. If no part of the surface is found between start and end,\r\n * return end.\r\n *\r\n * eye: the eye point, acting as the origin of the ray\r\n * direction: the normalized direction to march in\r\n * start: the starting distance away from the eye\r\n * end: the max distance away from the eye to march before giving up\r\n */\r\nfloat raymarch(vec3 eye, vec3 direction, float startDistance, float endDistance) {\r\n    float depth = startDistance;\r\n    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {\r\n        float dist = scene(eye + depth * direction);\r\n        if (dist < EPSILON) {\r\n            return depth;\r\n        }\r\n        depth += dist;\r\n        if (depth >= endDistance) {\r\n            return endDistance;\r\n        }\r\n    }\r\n    return endDistance;\r\n}\r\n\r\n/**\r\n * Return the normalized direction to march in from the eye point for a single pixel.\r\n *\r\n * fov: vertical field of view in degrees\r\n * size: resolution of the output image\r\n * fragCoord: the x,y coordinate of the pixel in the output image\r\n */\r\nvec3 rayDirection(float fov, vec2 size, vec2 fragCoord) {\r\n    vec2 xy = fragCoord - size / 2.0;\r\n    float z = size.y / tan( radians(fov) / 2.0);\r\n    return normalize(vec3(xy, -z));\r\n}\r\n\r\n/**\r\n * Using the gradient of the SDF, estimate the normal on the surface at point p.\r\n */\r\nvec3 estimateNormal(vec3 p) {\r\n\r\n    vec3 p_x_1 = vec3(p.x + EPSILON, p.y, p.z);\r\n    vec3 p_x_2 = vec3(p.x - EPSILON, p.y, p.z);\r\n    float x = scene(p_x_1) - scene(p_x_2);\r\n\r\n    vec3 p_y_1 = vec3(p.x, p.y + EPSILON, p.z);\r\n    vec3 p_y_2 = vec3(p.x, p.y - EPSILON, p.z);\r\n    float y = scene(p_y_1) - scene( p_y_2);\r\n\r\n    vec3 p_z_1 = vec3(p.x, p.y, p.z + EPSILON);\r\n    vec3 p_z_2 = vec3(p.x, p.y, p.z - EPSILON);\r\n    float z = scene(p_z_1) - scene(p_z_2);\r\n\r\n    return normalize( vec3(x, y, z ));\r\n}\r\n\r\nvec3 phongLighting(vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity) {\r\n    vec3 N = estimateNormal(p);\r\n    vec3 L = normalize(lightPos - p);\r\n    vec3 V = normalize(eye - p);\r\n    vec3 R = normalize(reflect(-L, N));\r\n\r\n    float dotLN = dot(L, N);\r\n    float dotRV = dot(R, V);\r\n\r\n    // no light return black\r\n    if (dotLN < 0.0) {\r\n        return vec3(0.0, 0.0, 0.0);\r\n    }\r\n\r\n    // no specular, return only diffuse\r\n    if (dotRV < 0.0) {\r\n        return lightIntensity * (diffuse * dotLN);\r\n    }\r\n\r\n    // return phong color with diffuse & specular\r\n    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, alpha));\r\n}\r\n\r\n/**\r\n * Lighting via Phong illumination.\r\n *\r\n * The vec3 returned is the RGB color of that point after lighting is applied.\r\n * ambient: Ambient color\r\n * diffuse: Diffuse color\r\n * specular: Specular color\r\n * alpha: Shininess coefficient\r\n * p: position of point being lit\r\n * eye: the position of the camera\r\n *\r\n * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description\r\n */\r\nvec3 phongIllumination(vec3 ambient, vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye) {\r\n\r\n    vec3 color = ambient;\r\n    //vec3 light1Pos = vec3(4.0, 5.0, 5.0);\r\n\r\n    vec3 light1Pos = vec3(4.0 * sin(uTime),\r\n                          2.0,\r\n                          4.0 * cos(uTime));\r\n\r\n    vec3 light2Pos = vec3(4.0 * sin(uTime),\r\n                          2.0,\r\n                          5.0 * sin(uTime));\r\n\r\n    vec3 light1Intensity = vec3(0.4, 0.4, 0.4);\r\n\r\n    vec3 light2Intensity = vec3(0.2, 0.2, 0.2);\r\n\r\n    color += phongLighting(diffuse, specular, alpha, p, eye, light1Pos, light1Intensity);\r\n    color += phongLighting(diffuse, specular, alpha, p, eye, light2Pos, light2Intensity);\r\n\r\n    return color;\r\n}\r\n\r\nvoid main() {\r\n\r\n    vec2 uv = gl_FragCoord.xy / uResolution.xy;\r\n\r\n    /* vec4 texcol = texture2D(uImage, uv); */\r\n\r\n    // the direction\r\n    vec3 dir = rayDirection(50.0, uResolution.xy, gl_FragCoord.xy);\r\n\r\n    // the eye\r\n    vec3 eye = vec3(0.0, 0.0, 5.0);\r\n\r\n    // compute distance\r\n    float dist = raymarch(eye, dir, MIN_DISTANCE, MAX_DISTANCE);\r\n\r\n    if (dist > MAX_DISTANCE - EPSILON) {\r\n        // return black\r\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r\n        return;\r\n    }\r\n\r\n    // closest point on the surface to the eyepoint along the view ray\r\n    vec3 p = eye + dist * dir;\r\n\r\n    // compute color for point\r\n    vec3 color = phongIllumination(AMBIENT, DIFFUSE, SPECULAR, SHININESS, p, eye);\r\n\r\n    gl_FragColor =  vec4(color, 1.0);\r\n}"},function(e,r,n){"use strict";n.r(r);n(0),n(1);var o,t,i,a,c,s,d,l,u=n(2),p=n(3),f=n(4),A=[],h=0,M=320,D=320,I=0,R=0,m=60,g=1e3/m;function v(){return-1!==i.tier.indexOf("MOBILE_TIER_0")||-1!==i.tier.indexOf("MOBILE_TIER_1")&&window.devicePixelRatio>1?1:window.devicePixelRatio}function G(){i=Object(u.getGPUTier)({mobileBenchmarkPercentages:[10,40,30,20],desktopBenchmarkPercentages:[10,40,30,20]});var e="devicePixelRatio="+window.devicePixelRatio+", applied: "+v()+" tier="+i.tier+" type="+i.type;document.querySelector(".log").innerHTML=e,h=v(),m=-1!==i.tier.indexOf("MOBILE_TIER_0")&&window.devicePixelRatio>=1?50:60,g=1e3/m,(l=new Stats).showPanel(0),document.body.appendChild(l.domElement),a=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,4,4,-1]),t.STATIC_DRAW),(c=function(e,r){var n=t.createProgram(),o=P(r,t.FRAGMENT_SHADER);t.attachShader(n,o);var i=P(e,t.VERTEX_SHADER);if(t.attachShader(n,i),t.linkProgram(n),!t.getProgramParameter(n,t.LINK_STATUS)&&!t.isContextLost())return console.warn("createProgram error"),null;return n}(p,f))&&(t.useProgram(c),s=t.getUniformLocation(c,"uTime"),d=t.getUniformLocation(c,"uResolution"),A=t.getAttribLocation(c,"position"),t.enableVertexAttribArray(A),t.vertexAttribPointer(A,2,t.FLOAT,!1,0,0),w(),R=window.performance.now(),y())}function P(e,r){var n=t.createShader(r);return t.shaderSource(n,e),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||t.isContextLost()?n:(console.warn("createShader error",t.getShaderInfoLog(n)),null)}function y(){requestAnimationFrame(y);var e,r,n,i=(I=window.performance.now())-R;if(i>g){R=I-i%g;var a=I/1e3;l.begin(),r=Math.floor(o.clientWidth*h),n=Math.floor(o.clientHeight*h),o.width===r&&o.height===n||(o.width=r,o.height=n,M=o.width,D=o.height,t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight)),e=a,t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.uniform1f(s,e),t.uniform2f(d,M,D),t.drawArrays(t.TRIANGLES,0,3),l.end()}}function w(){cancelAnimationFrame(y)}!function(){o=document.querySelector("#canvas");try{t=o.getContext("webgl")||o.getContext("experimental-webgl")}catch(e){return void console.warn("no WebGL in da house.")}if(!t)throw"no WebGL in da house.";o.addEventListener("webglcontextlost",function(e){console.warn("lost"),e.preventDefault(),w()},!1),o.addEventListener("webglcontextrestored",function(e){console.warn("restored"),G()},!1),G()}()}]);