!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!b[e]||!_[e])return;for(var r in _[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(v[r]=n[r]);0==--y&&0===g&&E()}(e,r),n&&n(e,r)};var r,t=!0,o="bfb94ed96935737bcfc8",i=1e4,a={},c=[],d=[];function s(e){var n=P[e];if(!n)return D;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(c=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),c=[]),D(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(n){D[e]=n}}};for(var i in D)Object.prototype.hasOwnProperty.call(D,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,o(i));return t.e=function(e){return"ready"===f&&p("prepare"),g++,D.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===f&&(w[e]||A(e),0===g&&0===y&&E())}},t.t=function(e,n){return 1&n&&(e=t(e)),D.t(e,-2&n)},t}function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:S,apply:I,status:function(e){if(!e)return f;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:a[e]};return r=void 0,n}var u=[],f="idle";function p(e){f=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,v,m,y=0,g=0,w={},_={},b={};function x(e){return+e+""===e?+e:e}function S(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return t=e,p("check"),(n=i,n=n||1e4,new Promise(function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,i=D.p+""+o+".hot-update.json";t.open("GET",i,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+i+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}})).then(function(e){if(!e)return p("idle"),null;_={},w={},b=e.c,m=e.h,p("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});v={};return A(0),"prepare"===f&&0===g&&0===y&&E(),n});var n}function A(e){b[e]?(_[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=D.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function E(){p("ready");var e=h;if(h=null,e)if(t)Promise.resolve().then(function(){return I(t)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var r in v)Object.prototype.hasOwnProperty.call(v,r)&&n.push(x(r));e.resolve(n)}}function I(n){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var r,t,i,d,s;function l(e){for(var n=[e],r={},t=n.slice().map(function(e){return{chain:[e],id:e}});t.length>0;){var o=t.pop(),i=o.id,a=o.chain;if((d=P[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var c=0;c<d.parents.length;c++){var s=d.parents[c],l=P[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[i]?(r[s]||(r[s]=[]),u(r[s],[i])):(delete r[s],n.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function u(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var h={},y=[],g={},w=function(){console.warn("[HMR] unexpected require("+S.moduleId+") to disposed module")};for(var _ in v)if(Object.prototype.hasOwnProperty.call(v,_)){var S;s=x(_);var A=!1,E=!1,I=!1,O="";switch((S=v[_]?l(s):{type:"disposed",moduleId:_}).chain&&(O="\nUpdate propagation: "+S.chain.join(" -> ")),S.type){case"self-declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(A=new Error("Aborted because of self decline: "+S.moduleId+O));break;case"declined":n.onDeclined&&n.onDeclined(S),n.ignoreDeclined||(A=new Error("Aborted because of declined dependency: "+S.moduleId+" in "+S.parentId+O));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(S),n.ignoreUnaccepted||(A=new Error("Aborted because "+s+" is not accepted"+O));break;case"accepted":n.onAccepted&&n.onAccepted(S),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(S),I=!0;break;default:throw new Error("Unexception type "+S.type)}if(A)return p("abort"),Promise.reject(A);if(E)for(s in g[s]=v[s],u(y,S.outdatedModules),S.outdatedDependencies)Object.prototype.hasOwnProperty.call(S.outdatedDependencies,s)&&(h[s]||(h[s]=[]),u(h[s],S.outdatedDependencies[s]));I&&(u(y,[S.moduleId]),g[s]=w)}var z,T=[];for(t=0;t<y.length;t++)s=y[t],P[s]&&P[s].hot._selfAccepted&&T.push({module:s,errorHandler:P[s].hot._selfAccepted});p("dispose"),Object.keys(b).forEach(function(e){!1===b[e]&&function(e){delete installedChunks[e]}(e)});for(var N,R,L=y.slice();L.length>0;)if(s=L.pop(),d=P[s]){var F={},H=d.hot._disposeHandlers;for(i=0;i<H.length;i++)(r=H[i])(F);for(a[s]=F,d.hot.active=!1,delete P[s],delete h[s],i=0;i<d.children.length;i++){var M=P[d.children[i]];M&&((z=M.parents.indexOf(s))>=0&&M.parents.splice(z,1))}}for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(d=P[s]))for(R=h[s],i=0;i<R.length;i++)N=R[i],(z=d.children.indexOf(N))>=0&&d.children.splice(z,1);for(s in p("apply"),o=m,g)Object.prototype.hasOwnProperty.call(g,s)&&(e[s]=g[s]);var j=null;for(s in h)if(Object.prototype.hasOwnProperty.call(h,s)&&(d=P[s])){R=h[s];var C=[];for(t=0;t<R.length;t++)if(N=R[t],r=d.hot._acceptedDependencies[N]){if(-1!==C.indexOf(r))continue;C.push(r)}for(t=0;t<C.length;t++){r=C[t];try{r(R)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:R[t],error:e}),n.ignoreErrored||j||(j=e)}}}for(t=0;t<T.length;t++){var U=T[t];s=U.module,c=[s];try{D(s)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:r,originalError:e}),n.ignoreErrored||j||(j=r),j||(j=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||j||(j=e)}}return j?(p("fail"),Promise.reject(j)):(p("idle"),new Promise(function(e){e(y)}))}var P={};function D(n){if(P[n])return P[n].exports;var r=P[n]={i:n,l:!1,exports:{},hot:l(n),parents:(d=c,c=[],d),children:[]};return e[n].call(r.exports,r,r.exports,s(n)),r.l=!0,r.exports}D.m=e,D.c=P,D.d=function(e,n,r){D.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,n){if(1&n&&(e=D(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(D.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)D.d(r,t,function(n){return e[n]}.bind(null,t));return r},D.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(n,"a",n),n},D.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},D.p="",D.h=function(){return o},s(0)(D.s=0)}([function(e,n,r){"use strict";r.r(n);r(1),r(2),r(3)},function(e,n,r){},function(e,n){!function(){for(var e=0,n=["webkit","moz"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n,r){var t=(new Date).getTime(),o=Math.max(0,16-(t-e)),i=window.setTimeout(function(){n(t+o)},o);return e=t+o,i}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}()},function(e,n,r){"use strict";var t,o,i,a,c,d,s,l=r(4),u=r(5),f=[],p=320,h=320,v=0,m=0,y=1e3/60;function g(e,n){var r=o.createShader(n);return o.shaderSource(r,e),o.compileShader(r),o.getShaderParameter(r,o.COMPILE_STATUS)?r:(console.warn("createShader error",o.getShaderInfoLog(r)),null)}function w(){requestAnimationFrame(w);var e,n,r,i=(v=window.performance.now())-m;if(i>y){m=v-i%y;var a=v/1e3;s.begin(),n=t.clientWidth,r=t.clientHeight,t.width==n&&t.height==r||(t.width=n,t.height=r,p=t.width,h=t.height,o.viewport(0,0,o.drawingBufferWidth,o.drawingBufferHeight)),e=a,o.clear(o.COLOR_BUFFER_BIT|o.DEPTH_BUFFER_BIT),o.uniform1f(c,e),o.uniform2f(d,p,h),o.drawArrays(o.TRIANGLES,0,3),s.end()}}function _(){cancelAnimationFrame(w)}!function(){t=document.querySelector("#canvas");try{o=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(e){return void console.warn("no WebGL in da house.")}if(!o)throw"no WebGL in da house.";(s=new Stats).showPanel(0),document.body.appendChild(s.domElement),i=o.createBuffer(),o.bindBuffer(o.ARRAY_BUFFER,i),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,-1,4,4,-1]),o.STATIC_DRAW),(a=function(e,n){var r=o.createProgram(),t=g(e,o.VERTEX_SHADER),i=g(n,o.FRAGMENT_SHADER);if(null===t||null===i)return null;o.attachShader(r,t),o.attachShader(r,i),o.linkProgram(r);var a=o.getProgramParameter(r,o.LINK_STATUS);return a||console.warn("createProgram error"),o.deleteShader(t),o.deleteShader(i),a?r:null}(l,u))&&(o.useProgram(a),c=o.getUniformLocation(a,"uTime"),d=o.getUniformLocation(a,"uResolution"),f=o.getAttribLocation(a,"position"),o.enableVertexAttribArray(f),o.vertexAttribPointer(f,2,o.FLOAT,!1,0,0))}(),_(),m=window.performance.now(),w()},function(e,n){e.exports="attribute vec3 position;\r\n\r\nvoid main() {\r\n    gl_Position = vec4(position, 1.0);\r\n}"},function(e,n){e.exports="\r\nprecision highp float;\r\n\r\n// uniforms: time and size screen\r\n\r\nuniform float uTime;\r\nuniform vec2 uResolution;\r\n\r\n// raymarch constants\r\n\r\nconst int MAX_MARCHING_STEPS = 100;\r\nconst float MIN_DISTANCE = 0.0;\r\nconst float MAX_DISTANCE = 120.0;\r\nconst float EPSILON = 0.0001;\r\n\r\n// phong shading constants\r\n\r\n#define AMBIENT vec3(1.0, 0.4, 1.0) * 0.25\r\n#define DIFFUSE vec3(1.0, 0.0, 0.0)\r\n#define SPECULAR vec3(1.0, 1.0, 1.0)\r\n#define SHININESS 8.0\r\n\r\n/**\r\n * Signed distance function for a torus;\r\n */\r\nfloat torus(vec3 p, vec2 t) {\r\n    vec2 q = vec2(length(p.xz) - t.x, p.y);\r\n    return length(q) - t.y;\r\n}\r\n\r\n/*\r\n*   twist transformation\r\n*/\r\nvec3 twist(vec3 p) {\r\n    float c = cos(sin(uTime * 2.0) * 2.2 * p.y);\r\n    float s = sin(tan(uTime * 0.5) * 3.0 * p.y);\r\n    mat2 m = mat2(c, -s, s, c);\r\n    return vec3(m * p.xz, p.y);\r\n}\r\n\r\nmat4 rotationMatrix(vec3 axis, float angle) {\r\n    vec3 a = normalize(axis);\r\n    float s = sin(angle) * -1.0;\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    return mat4(\r\n        oc * a.x * a.x + c, oc * a.x * a.y - a.z * s, oc * a.z * a.x + a.y * s, 0.0,\r\n        oc * a.x * a.y + a.z * s, oc * a.y * a.y + c, oc * a.y * a.z - a.x * s, 0.0,\r\n        oc * a.z * a.x - a.y * s, oc * a.y * a.z + a.x * s, oc * a.z * a.z + c, 0.0,\r\n        0.0, 0.0, 0.0, 0.0\r\n    );\r\n}\r\n\r\nvec3 rotator(vec3 p, mat4 m) {\r\n    vec3 q = (m * vec4(p, 0.0)).xyz;\r\n    return q;\r\n}\r\n\r\nfloat scene(vec3 p) {\r\n    vec3 t = twist(p);\r\n    mat4 matrix = rotationMatrix(vec3(0.0, 1.0, 1.0), uTime);\r\n    vec3 r = rotator(t, matrix);\r\n    return torus(r, vec2(0.4, 0.4));\r\n}\r\n\r\n/**\r\n * Return the shortest distance from the eyepoint to the scene surface along\r\n * the marching direction. If no part of the surface is found between start and end,\r\n * return end.\r\n *\r\n * eye: the eye point, acting as the origin of the ray\r\n * direction: the normalized direction to march in\r\n * start: the starting distance away from the eye\r\n * end: the max distance away from the eye to march before giving up\r\n */\r\nfloat raymarch(vec3 eye, vec3 direction, float startDistance, float endDistance) {\r\n    float depth = startDistance;\r\n    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {\r\n        float dist = scene(eye + depth * direction);\r\n        if (dist < EPSILON) {\r\n            return depth;\r\n        }\r\n        depth += dist;\r\n        if (depth >= endDistance) {\r\n            return endDistance;\r\n        }\r\n    }\r\n    return endDistance;\r\n}\r\n\r\n/**\r\n * Return the normalized direction to march in from the eye point for a single pixel.\r\n *\r\n * fov: vertical field of view in degrees\r\n * size: resolution of the output image\r\n * fragCoord: the x,y coordinate of the pixel in the output image\r\n */\r\nvec3 rayDirection(float fov, vec2 size, vec2 fragCoord) {\r\n    vec2 xy = fragCoord - size / 2.0;\r\n    float z = size.y / tan( radians(fov) / 2.0);\r\n    return normalize(vec3(xy, -z));\r\n}\r\n\r\n/**\r\n * Using the gradient of the SDF, estimate the normal on the surface at point p.\r\n */\r\nvec3 estimateNormal(vec3 p) {\r\n\r\n    vec3 p_x_1 = vec3(p.x + EPSILON, p.y, p.z);\r\n    vec3 p_x_2 = vec3(p.x - EPSILON, p.y, p.z);\r\n    float x = scene(p_x_1) - scene(p_x_2);\r\n\r\n    vec3 p_y_1 = vec3(p.x, p.y + EPSILON, p.z);\r\n    vec3 p_y_2 = vec3(p.x, p.y - EPSILON, p.z);\r\n    float y = scene(p_y_1) - scene( p_y_2);\r\n\r\n    vec3 p_z_1 = vec3(p.x, p.y, p.z + EPSILON);\r\n    vec3 p_z_2 = vec3(p.x, p.y, p.z - EPSILON);\r\n    float z = scene(p_z_1) - scene(p_z_2);\r\n\r\n    return normalize( vec3(x, y, z ));\r\n}\r\n\r\nvec3 phongLighting(vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity) {\r\n    vec3 N = estimateNormal(p);\r\n    vec3 L = normalize(lightPos - p);\r\n    vec3 V = normalize(eye - p);\r\n    vec3 R = normalize(reflect(-L, N));\r\n\r\n    float dotLN = dot(L, N);\r\n    float dotRV = dot(R, V);\r\n\r\n    // no light return black\r\n    if (dotLN < 0.0) {\r\n        return vec3(0.0, 0.0, 0.0);\r\n    }\r\n\r\n    // no specular, return only diffuse\r\n    if (dotRV < 0.0) {\r\n        return lightIntensity * (diffuse * dotLN);\r\n    }\r\n\r\n    // return phong color with diffuse & specular\r\n    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, alpha));\r\n}\r\n\r\n/**\r\n * Lighting via Phong illumination.\r\n *\r\n * The vec3 returned is the RGB color of that point after lighting is applied.\r\n * ambient: Ambient color\r\n * diffuse: Diffuse color\r\n * specular: Specular color\r\n * alpha: Shininess coefficient\r\n * p: position of point being lit\r\n * eye: the position of the camera\r\n *\r\n * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description\r\n */\r\nvec3 phongIllumination(vec3 ambient, vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye) {\r\n\r\n    vec3 color = ambient;\r\n    //vec3 light1Pos = vec3(4.0, 5.0, 5.0);\r\n\r\n    vec3 light1Pos = vec3(4.0 * sin(uTime),\r\n                          2.0,\r\n                          4.0 * cos(uTime));\r\n\r\n    vec3 light2Pos = vec3(4.0 * sin(uTime),\r\n                          2.0,\r\n                          5.0 * sin(uTime));\r\n\r\n    vec3 light1Intensity = vec3(0.4, 0.4, 0.4);\r\n\r\n    vec3 light2Intensity = vec3(0.2, 0.2, 0.2);\r\n\r\n    color += phongLighting(diffuse, specular, alpha, p, eye, light1Pos, light1Intensity);\r\n    color += phongLighting(diffuse, specular, alpha, p, eye, light2Pos, light2Intensity);\r\n\r\n    return color;\r\n}\r\n\r\nvoid main() {\r\n\r\n    // the direction\r\n    vec3 dir = rayDirection(50.0, uResolution.xy, gl_FragCoord.xy);\r\n\r\n    // the eye\r\n    vec3 eye = vec3(0.0, 0.0, 5.0);\r\n\r\n    // compute distance\r\n    float dist = raymarch(eye, dir, MIN_DISTANCE, MAX_DISTANCE);\r\n\r\n    if (dist > MAX_DISTANCE - EPSILON) {\r\n        // return black\r\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r\n        return;\r\n    }\r\n\r\n    // closest point on the surface to the eyepoint along the view ray\r\n    vec3 p = eye + dist * dir;\r\n\r\n    // compute color for point\r\n    vec3 color = phongIllumination(AMBIENT, DIFFUSE, SPECULAR, SHININESS, p, eye);\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}"}]);