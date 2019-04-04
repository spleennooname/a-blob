// script

'use strict';

let canvas,
  gl,
  buffer,
  vertexShader = require('../glsl/vert.glsl'),
  fragShader = require('../glsl/frag.glsl'),
  program,
  vertexPosition = [],
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

const fps = 60;
const interval = 1000 / fps;

function init() {

  canvas = document.querySelector('#canvas');

  try {
    gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  } catch (err) {
    console.log('no WebGL in da house.');
    return;
  }

  if (!gl) {
    throw 'no WebGL in da house.';
    return;
  }

  stats = new Stats();
  stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
  document.body.appendChild(stats.domElement);

  // create a buffer with single clipspace (2 triangles)
  buffer = gl.createBuffer();

  // Bind the position buffer.
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
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
    new Float32Array([
      -1, -1,
      -1,  1,
       1, -1,
       1,  1]),
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
  uTime = gl.getUniformLocation(program, "uTime");

  // resolution
  uResolution = gl.getUniformLocation(program, "uResolution");

  // Look up where the vertex data needs to
  vertexPosition = gl.getAttribLocation(program, "position");

  then = window.performance.now();
  params.start_time = window.performance.now();

  // Turn on the position attribute
  gl.enableVertexAttribArray(vertexPosition);

  // Tell the position attribute how to get data out of positionBuffer (ARRAY_BUFFER)
  gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);

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
    console.log(
      (type == gl.vertexShader ? "VERTEX" : "FRAGMENT") +
        " SHADER:\n" +
        gl.getShaderInfoLog(shader)
    );
    return null;
  }
  return shader;
}

function resize() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  if (canvas.width != w || canvas.height != h) {
    canvas.width = w;
    canvas.height = h;
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
    then = now - delta % interval;
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

  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}

//
init();