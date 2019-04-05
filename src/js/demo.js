// script

'use strict';

let canvas,
  gl,
  positionBuffer,
  vertexShader = require('../glsl/vert.glsl'),
  fragShader = require('../glsl/frag.glsl'),
  program,
  rafID = -1,
  vertexPosition = [],
  uTime,
  uResolution,
  screenWidth = 320,
  screenHeight = 320,
  stats,
  now = 0,
  then = 0;

const fps = 60;
const interval = 1000 / fps;

function init() {
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
}

function createProgram(vertex, fragment) {
  const program = gl.createProgram();
  const vs = createShader(vertex, gl.VERTEX_SHADER);
  const fs= createShader(fragment, gl.FRAGMENT_SHADER);

  if (vs === null || fs === null) {
    return null;
  }

  gl.attachShader(program, vs);
  gl.attachShader(program, fs);

  gl.linkProgram(program);
  const success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!success) {
    console.warn('createProgram error');
  }
  gl.deleteShader(vs);
  gl.deleteShader(fs);

  return success ? program : null;
}

function createShader(src, type) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
  if (!success) {
    console.warn('createShader error', gl.getShaderInfoLog(shader));
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
init();

start();
