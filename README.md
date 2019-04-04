# A BLOB

> A WebGL blob and how-to.

Hello. You can consider this example as a knowledge base for learning the following topics:

* how to use webgl vanilla - no frameworks -
* how to use phong shading in a fragment shader
* how to approach the SDF/Raymarching in GLSL (Signed Distance Functions)
* how to control the framerate in a render loop
* how to use webpack for build quick webgl demos

[![](http://img.youtube.com/vi/q1z-KaTRMiM/0.jpg)](http://www.youtube.com/watch?v=q1z-KaTRMiM "A BLOB")

## demo

 [https://a-blob.surge.sh](https://a-blob.surge.sh)

## setup

``` bash
# install dependencies
npm i

# serve with hot reload at https://localhost:8080
npm run dev

# build for production with minification
npm run build
```

## references

* [http://iquilezles.org/www/articles/distfunctions/distfunctions.htm](http://iquilezles.org/www/articles/distfunctions/distfunctions.htm)
* [http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/](http://www.neilmendoza.com/glsl-rotation-about-an-arbitrary-axis/)
* [https://en.wikipedia.org/wiki/Phong_reflection_model#Description](https://en.wikipedia.org/wiki/Phong_reflection_model#Description)
* [http://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/](http://jamie-wong.com/2016/07/15/ray-marching-signed-distance-functions/)