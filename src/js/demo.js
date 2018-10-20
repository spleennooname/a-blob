



// script

"use strict"

let canvas,
  gl,
  buffer,
  vertexShader,
  fragShader,
  program,
  vertexPosition,

  uTime,
  uResolution,

  params = {
    screenWidth: 0,
    screenHeight: 0
  },

  stats,

  delta = 0,
  now = 0,
  then = 0;

const fps = 50;
const interval = 1000 / fps;

/** async function importShader(shader) {
  let response = await fetch(shader);
  let data = await response.text();
  return data;
}*/

fragShader = require('../glsl/frag.glsl');
vertexShader = require('../glsl/vert.glsl');

function init() {
  //fragShader = await importShader('./glsl/frag.glsl');
  //vertexShader = await importShader('./glsl/vert.glsl');

  canvas = document.querySelector('#canvas');

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {
    console.log("no WebGL in da house.")
    return;
  }
  if (!(!!window.WebGLRenderingContext) || !gl) {
    throw "no WebGL in da house."
  }

  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.domElement);

  console.log("start WebGL demo...")

  buffer = gl.createBuffer();

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0]), gl.STATIC_DRAW);

  //create program
  program = createProgram(vertexShader, fragShader);

  // time
  uTime = gl.getUniformLocation(program, 'uTime');
  // resolution
  uResolution = gl.getUniformLocation(program, 'uResolution');

  // Tell it to use our program (pair of shaders)
  gl.useProgram(program);

  then = window.performance.now();
  params.start_time = window.performance.now();

  animate();
}

function createProgram(vertex, fragment) {

  const program = gl.createProgram();
  const vert_shader = createShader(vertex, gl.VERTEX_SHADER);
  const frag_shader = createShader(fragment, gl.FRAGMENT_SHADER);

  if (vert_shader === null || frag_shader === null) {
    return null;
  }

  gl.attachShader(program, vert_shader);
  gl.attachShader(program, frag_shader);
  gl.deleteShader(vert_shader);
  gl.deleteShader(frag_shader);

  gl.linkProgram(program);

  return program;
}

function createShader(src, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.log((type == gl.vertexShader ? "VERTEX" : "FRAGMENT") + " SHADER:\n" + gl.getShaderInfoLog(shader));
    return null;
  }
  return shader;
}

function resize() {
  if (canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    params.screenWidth = canvas.width;
    params.screenHeight = canvas.height;

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
  }
}

function animate() {
  requestAnimationFrame(animate);
  now = window.performance.now();
  delta = now - then;
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

  if (!program) {
    return;
  }
  // Clear the canvas AND the depth buffer.
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

  gl.uniform1f(uTime, time);
  gl.uniform2f(uResolution, params.screenWidth, params.screenHeight);

  // Turn on the position attribute
  gl.enableVertexAttribArray(vertexPosition);

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

  // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

  gl.drawArrays(gl.TRIANGLES, 0, 6);

}

//
init();