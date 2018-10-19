!function(n){function e(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s="NHnr")}({"99+j":function(n,e,r){"use strict";function t(n,e){var r=l.createProgram(),t=i(n,l.VERTEX_SHADER),o=i(e,l.FRAGMENT_SHADER);return null===t||null===o?null:(l.attachShader(r,t),l.attachShader(r,o),l.deleteShader(t),l.deleteShader(o),l.linkProgram(r),r)}function i(n,e){var r=l.createShader(e);return l.shaderSource(r,n),l.compileShader(r),l.getShaderParameter(r,l.COMPILE_STATUS)?r:(console.log((e==l.vertexShader?"VERTEX":"FRAGMENT")+" SHADER:\n"+l.getShaderInfoLog(r)),null)}function o(){s.width==s.clientWidth&&s.height==s.clientHeight||(s.width=s.clientWidth,s.height=s.clientHeight,g.screenWidth=s.width,g.screenHeight=s.height,l.viewport(0,0,l.drawingBufferWidth,l.drawingBufferHeight))}function a(){requestAnimationFrame(a),o(),c()}function c(){h&&(g.time=(window.performance.now()-g.start_time)/1e3,l.clear(l.COLOR_BUFFER_BIT|l.DEPTH_BUFFER_BIT),l.uniform1f(v,g.time),l.uniform2f(p,g.screenWidth,g.screenHeight),l.drawArrays(l.TRIANGLES,0,6))}var s=void 0,l=void 0,u=void 0,f=void 0,d=void 0,h=void 0,m=void 0,v=void 0,p=void 0,g={start_time:window.performance.now(),time:0,screenWidth:0,screenHeight:0};d=r("T7YF"),f=r("fg2A"),function(){s=document.querySelector("canvas");try{l=s.getContext("webgl")||s.getContext("experimental-webgl")}catch(n){return void console.log("no WebGL in da house.")}if(!window.WebGLRenderingContext||!l)throw"no WebGL in da house.";console.log("start WebGL demo..."),u=l.createBuffer(),l.bindBuffer(l.ARRAY_BUFFER,u),l.bufferData(l.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]),l.STATIC_DRAW),h=t(f,d),l.vertexAttribPointer(m,2,l.FLOAT,!1,0,0),l.enableVertexAttribArray(m),v=l.getUniformLocation(h,"uTime"),p=l.getUniformLocation(h,"uResolution"),l.useProgram(h),a()}()},"D85/":function(n,e){},NHnr:function(n,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r("D85/"),i=(r.n(t),r("afNs")),o=(r.n(i),r("99+j"));r.n(o)},T7YF:function(n,e){n.exports="\r\nprecision highp float;\r\n\r\n// uniforms: time and size screen\r\n\r\nuniform float uTime;\r\nuniform vec2 uResolution;\r\n\r\n// raymarch constants\r\n\r\nconst int MAX_MARCHING_STEPS = 255;\r\nconst float MIN_DISTANCE = 0.0;\r\nconst float MAX_DISTANCE = 120.0;\r\nconst float EPSILON = 0.0001;\r\n\r\n// phong shading constants\r\n\r\n#define AMBIENT vec3(1.0, 0.4, 1.0)\r\n#define DIFFUSE vec3(1.0, 0.0, 0.0)\r\n#define SPECULAR vec3(1.0, 1.0, 1.0)\r\n#define SHININESS 8.0\r\n\r\n/* Distance functions from http://iquilezles.org/www/articles/distfunctions/distfunctions.htm */\r\n\r\n/**\r\n * Signed distance function for a torus;\r\n */\r\nfloat torus(vec3 p, vec2 t) {\r\n    vec2 q = vec2(length(p.xz) - t.x, p.y);\r\n    return length(q) - t.y;\r\n}\r\n\r\n/**\r\n * twist transformation\r\n */\r\nvec3 twist(vec3 p) {\r\n    float c = cos(sin(uTime * 2.0) * 2.2 * p.y);\r\n    float s = sin(tan(uTime * 0.5) * 3.0 * p.y);\r\n    mat2 m = mat2(c, -s, s, c);\r\n    return vec3(m * p.xz, p.y);\r\n}\r\n\r\n/* Rotation matrix function from http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/ */\r\nmat4 rotationMatrix(vec3 axis, float angle) {\r\n    vec3 a = normalize(axis);\r\n    float s = sin(angle) * -1.0;\r\n    float c = cos(angle);\r\n    float oc = 1.0 - c;\r\n    return mat4(\r\n        oc * a.x * a.x + c, oc * a.x * a.y - a.z * s, oc * a.z * a.x + a.y * s, 0.0,\r\n        oc * a.x * a.y + a.z * s, oc * a.y * a.y + c, oc * a.y * a.z - a.x * s, 0.0,\r\n        oc * a.z * a.x - a.y * s, oc * a.y * a.z + a.x * s, oc * a.z * a.z + c, 0.0,\r\n        0.0, 0.0, 0.0, 0.0\r\n    );\r\n}\r\n\r\n/* mat4 viewMatrix(vec3 eye, vec3 center, vec3 up) {\r\n    vec3 f = normalize(center - eye);\r\n    vec3 s = normalize(cross(f, up));\r\n    vec3 u = cross(s, f);\r\n    return mat4(\r\n        vec4(s, 0.0),\r\n        vec4(u, 0.0),\r\n        vec4(-f, 0.0),\r\n        vec4(0.0, 0.0, 0.0, 1)\r\n    );\r\n}\r\n */\r\n\r\nvec3 rotator(vec3 p, mat4 m) {\r\n    vec3 q = (m * vec4(p, 0.0)).xyz;\r\n    return q;\r\n}\r\n\r\n\r\n/**\r\n * Return the shortest distance from the eyepoint to the scene surface along\r\n * the marching direction. If no part of the surface is found between start and end,\r\n * return end.\r\n *\r\n * eye: the eye point, acting as the origin of the ray\r\n * direction: the normalized direction to march in\r\n * start: the starting distance away from the eye\r\n * end: the max distance away from the eye to march before giving up\r\n */\r\nfloat raymarch(vec3 eye, vec3 direction, float startDistance, float endDistance) {\r\n    float depth = startDistance;\r\n    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {\r\n        float dist = scene(eye + depth * direction);\r\n        if (dist < EPSILON) {\r\n            return depth;\r\n        }\r\n        depth += dist;\r\n        if (depth >= endDistance) {\r\n            return endDistance;\r\n        }\r\n    }\r\n    return endDistance;\r\n}\r\n\r\n/**\r\n * Return the normalized direction to march in from the eye point for a single pixel.\r\n *\r\n * fov: vertical field of view in degrees\r\n * size: resolution of the output image\r\n * fragCoord: the x,y coordinate of the pixel in the output image\r\n */\r\nvec3 rayDirection(float fov, vec2 size, vec2 fragCoord) {\r\n    vec2 xy = fragCoord - size / 2.0;\r\n    float z = size.y / tan( radians(fov) / 2.0);\r\n    return normalize(vec3(xy, -z));\r\n}\r\n\r\n/**\r\n * Signed distance function describing the scene.\r\n *\r\n *\r\n * Absolute value of the return value indicates the distance to the surface.\r\n * Sign indicates whether the point is inside or outside the surface,\r\n * negative indicating inside.\r\n */\r\nfloat scene(vec3 p) {\r\n    vec3 t = twist(p);\r\n    mat4 matrix = rotationMatrix(vec3(0.0, 1.0, 1.0), uTime);\r\n    vec3 r = rotator(t, matrix);\r\n    return torus(r, vec2(0.4, 0.4));\r\n}\r\n\r\n\r\nvec3 estimateNormal(vec3 p, float time) {\r\n    return normalize(vec3(\r\n        scene(vec3(p.x + EPSILON, p.y, p.z)) - scene(vec3(p.x - EPSILON, p.y, p.z)),\r\n        scene(vec3(p.x, p.y + EPSILON, p.z)) - scene(vec3(p.x, p.y - EPSILON, p.z)),\r\n        scene(vec3(p.x, p.y, p.z + EPSILON)) - scene(vec3(p.x, p.y, p.z - EPSILON))\r\n    ));\r\n}\r\n\r\n\r\nvec3 phongLighting(vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity, float time) {\r\n    vec3 N = estimateNormal(p, time);\r\n\r\n    vec3 L = normalize(lightPos - p);\r\n    vec3 V = normalize(eye - p);\r\n    vec3 R = normalize(reflect(-L, N));\r\n\r\n    float dotLN = dot(L, N);\r\n    float dotRV = dot(R, V);\r\n\r\n     // return black\r\n    if (dotLN < 0.0) {\r\n        return vec3(0.0, 0.0, 0.0);\r\n    }\r\n\r\n    // return phong color with diffuse contrib without specular\r\n    if (dotRV < 0.0) {\r\n        return lightIntensity * (diffuse * dotLN);\r\n    }\r\n\r\n    // return phong color with diffuse & specular contributions\r\n    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, alpha));\r\n}\r\n\r\n/**\r\n * Lighting via Phong illumination.\r\n *\r\n * The vec3 returned is the RGB color of that point after lighting is applied.\r\n * ambient: Ambient color\r\n * diffuse: Diffuse color\r\n * specular: Specular color\r\n * alpha: Shininess coefficient\r\n * p: position of point being lit\r\n * eye: the position of the camera\r\n *\r\n * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description\r\n */\r\nvec3 phongIllumination(vec3 ambient, vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, float time) {\r\n    const vec3 ambientLight = 0.25 * vec3(1.0, 1.0, 1.0);\r\n    vec3 color = ambientLight * ambient;\r\n    vec3 light1Pos = vec3(4.0, 5.0, 5.0);\r\n    vec3 light1Intensity = vec3(0.4, 0.4, 0.4);\r\n    color += phongLighting(diffuse, specular, alpha, p, eye, light1Pos, light1Intensity, time);\r\n    return color;\r\n}\r\n\r\nvoid main() {\r\n\r\n    // the direction\r\n    vec3 dir = rayDirection(50.0, uResolution.xy, gl_FragCoord.xy);\r\n\r\n    // the eye\r\n    vec3 eye = vec3(0.0, 0.0, 5.0);\r\n\r\n    // compute distance\r\n    float dist = raymarch(eye, dir, MIN_DISTANCE, MAX_DISTANCE);\r\n    if (dist > MAX_DISTANCE - EPSILON) {\r\n        // return black\r\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\r\n        return;\r\n    }\r\n\r\n    // closest point on the surface to the eyepoint along the view ray\r\n    vec3 p = eye + dist * dir;\r\n\r\n    // compute color for point\r\n    vec3 color = phongIllumination(AMBIENT, DIFFUSE, SPECULAR, SHININESS, p, eye, uTime);\r\n\r\n    gl_FragColor = vec4(color, 1.0);\r\n}"},afNs:function(n,e){!function(){for(var n=0,e=["webkit","moz"],r=0;r<e.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[e[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[r]+"CancelAnimationFrame"]||window[e[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,r){var t=(new Date).getTime(),i=Math.max(0,16-(t-n)),o=window.setTimeout(function(){e(t+i)},i);return n=t+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(n){clearTimeout(n)})}()},fg2A:function(n,e){n.exports="attribute vec3 position;\r\n\r\nvoid main() {\r\n    gl_Position = vec4(position, 1.0);\r\n}"}});