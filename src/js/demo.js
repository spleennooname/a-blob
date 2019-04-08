import '../scss/styles.scss';
import { getGPUTier } from 'detect-gpu';

'use strict';

let canvas, gl,
  GPUTier,
  positionBuffer,
  vertexShader = require('../glsl/vert.glsl'),
  fragShader = require('../glsl/frag.glsl'),
  program,
  rafID = -1,
  vertexPosition = [],
  realToCSSPixels = 0,

  uTime,
  uResolution,

  screenWidth = 320,
  screenHeight = 320,
  stats,
  now = 0,
  then = 0,

  fps = 60,
  interval = 1000 / fps;

function getBestPixelRatio() {
  return GPUTier.tier.indexOf("MOBILE_TIER_0") !== -1 || GPUTier.tier.indexOf("MOBILE_TIER_1") !== -1 && window.devicePixelRatio > 1 ? 1 : window.devicePixelRatio;
}

function getBestFPS() {
  return GPUTier.tier.indexOf('MOBILE_TIER_0') !== -1 && window.devicePixelRatio >= 1 ? 50 : 60;
}

function demo() {

  canvas = document.querySelector('#canvas');

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {
    console.warn('no WebGL in da house.');
    return;
  }

  if (!gl) {
    throw 'no WebGL in da house.';
    return;
  }

  canvas.addEventListener('webglcontextlost', event => {
    console.warn('lost');
    event.preventDefault();
    stop();
  }, false);

  canvas.addEventListener('webglcontextrestored', event => { console.warn('restored'); init(); }, false);

  init();

  //gl.getExtension('WEBGL_lose_context').restoreContext();
  //gl.getExtension('WEBGL_lose_context').loseContext();
}

function init() {

  GPUTier = getGPUTier({
     mobileBenchmarkPercentages: [10, 40, 30, 20], // (Default) [TIER_0, TIER_1, TIER_2, TIER_3]
     desktopBenchmarkPercentages: [10, 40, 30, 20], // (Default) [TIER_0, TIER_1, TIER_2, TIER_3]
   });

   //console.log(GPUTier);
  const log = 'devicePixelRatio=' + window.devicePixelRatio + ', applied: ' + getBestPixelRatio() + ' tier=' + GPUTier.tier + ' type=' + GPUTier.type;

  document.querySelector('.log').innerHTML = log;

  realToCSSPixels = getBestPixelRatio();
  fps = getBestFPS();
  interval = fps/ 1000;

  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.domElement);

  // create a buffer with single clipspace
  positionBuffer = gl.createBuffer();
  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    /**new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0,
      -1.0,  1.0
    ]),*/
    // quad
    //new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]),
    new Float32Array([-1, -1, -1, 4, 4, -1]),
    gl.STATIC_DRAW
  );

  //create program
  program = createProgram(vertexShader, fragShader);
  if (!program) {
    return;
  }

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  // time
  uTime = gl.getUniformLocation(program, 'uTime');

  // resolution
  uResolution = gl.getUniformLocation(program, 'uResolution');

  // Look up where the vertex data needs to
  vertexPosition = gl.getAttribLocation(program, 'position');

  // Turn on the position attribute
  gl.enableVertexAttribArray(vertexPosition);

  // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

  start();
}

function createProgram(vertex, fragment) {
  const program = gl.createProgram();

  const fs = createShader(fragment, gl.FRAGMENT_SHADER);
  gl.attachShader(program, fs);

  const vs = createShader(vertex, gl.VERTEX_SHADER);
  gl.attachShader(program, vs);

  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS) && !gl.isContextLost() ) {
    console.warn('createProgram error');
    return null;
  }
  return program;
}

function createShader(src, type) {
  const shader = gl.createShader(type);

  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS) && !gl.isContextLost()) {
    console.warn('createShader error', gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}

function resize() {
 // Lookup the size the browser is displaying the canvas in CSS pixels
  // and compute a size needed to make our drawingbuffer match it in
  // device pixels.
  var displayWidth  = Math.floor(canvas.clientWidth  * realToCSSPixels);
  var displayHeight = Math.floor(canvas.clientHeight * realToCSSPixels);
  // Check if the canvas is not the same size.
  if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
     // Make the canvas the same size
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    screenWidth = canvas.width;
    screenHeight = canvas.height;
    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

function animate() {
  rafID = requestAnimationFrame(animate);
  now = window.performance.now();
  let delta = now - then;
  if (delta > interval) {
    then = now - (delta % interval);
    let t = now / 1000;
    stats.begin();
    resize();
    render(t);
    stats.end();
  }
}

function render(time) {
  // Clear the canvas AND the depth buffer.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  // set uniforms
  gl.uniform1f(uTime, time);
  gl.uniform2f(uResolution,screenWidth, screenHeight);
  //gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

function start() {
  stop();
  then = window.performance.now();
  animate();
}

function stop() {
  rafID = cancelAnimationFrame(animate);
}

function destroy() {
  stop();
  gl.deleteBuffer(positionBuffer);
  gl.deleteProgram(program);
}

//
demo();