
precision highp float;

// uniforms: time and size screen

uniform float uTime;
uniform vec2 uResolution;
/* uniform sampler2D uImage; */
// raymarch constants

const int MAX_MARCHING_STEPS = 100;
const float MIN_DISTANCE = 0.0;
const float MAX_DISTANCE = 120.0;
const float EPSILON = 0.0001;

// phong shading constants

#define AMBIENT vec3(1.0, 0.4, 1.0) * 0.25
#define DIFFUSE vec3(1.0, 0.0, 0.0)
#define SPECULAR vec3(1.0, 1.0, 1.0)
#define SHININESS 8.0

/**
 * Signed distance function for a torus;
 */
float torus(vec3 p, vec2 t) {
    vec2 q = vec2(length(p.xz) - t.x, p.y);
    return length(q) - t.y;
}

/*
*   twist transformation
*/
vec3 twist(vec3 p) {
    float c = cos(sin(uTime * 2.0) * 2.2 * p.y);
    float s = sin(tan(uTime * 0.5) * 3.0 * p.y);
    mat2 m = mat2(c, -s, s, c);
    return vec3(m * p.xz, p.y);
}

mat4 rotationMatrix(vec3 axis, float angle) {
    vec3 a = normalize(axis);
    float s = sin(angle) * -1.0;
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
        oc * a.x * a.x + c, oc * a.x * a.y - a.z * s, oc * a.z * a.x + a.y * s, 0.0,
        oc * a.x * a.y + a.z * s, oc * a.y * a.y + c, oc * a.y * a.z - a.x * s, 0.0,
        oc * a.z * a.x - a.y * s, oc * a.y * a.z + a.x * s, oc * a.z * a.z + c, 0.0,
        0.0, 0.0, 0.0, 0.0
    );
}

vec3 rotator(vec3 p, mat4 m) {
    vec3 q = (m * vec4(p, 0.0)).xyz;
    return q;
}

float scene(vec3 p) {
    vec3 t = twist(p);
    mat4 matrix = rotationMatrix(vec3(0.0, 1.0, 1.0), uTime);
    vec3 r = rotator(t, matrix);
    return torus(r, vec2(0.4, 0.4));
}

/**
 * Return the shortest distance from the eyepoint to the scene surface along
 * the marching direction. If no part of the surface is found between start and end,
 * return end.
 *
 * eye: the eye point, acting as the origin of the ray
 * direction: the normalized direction to march in
 * start: the starting distance away from the eye
 * end: the max distance away from the eye to march before giving up
 */
float raymarch(vec3 eye, vec3 direction, float startDistance, float endDistance) {
    float depth = startDistance;
    for (int i = 0; i < MAX_MARCHING_STEPS; i++) {
        float dist = scene(eye + depth * direction);
        if (dist < EPSILON) {
            return depth;
        }
        depth += dist;
        if (depth >= endDistance) {
            return endDistance;
        }
    }
    return endDistance;
}

/**
 * Return the normalized direction to march in from the eye point for a single pixel.
 *
 * fov: vertical field of view in degrees
 * size: resolution of the output image
 * fragCoord: the x,y coordinate of the pixel in the output image
 */
vec3 rayDirection(float fov, vec2 size, vec2 fragCoord) {
    vec2 xy = fragCoord - size / 2.0;
    float z = size.y / tan( radians(fov) / 2.0);
    return normalize(vec3(xy, -z));
}

/**
 * Using the gradient of the SDF, estimate the normal on the surface at point p.
 */
vec3 estimateNormal(vec3 p) {

    vec3 p_x_1 = vec3(p.x + EPSILON, p.y, p.z);
    vec3 p_x_2 = vec3(p.x - EPSILON, p.y, p.z);
    float x = scene(p_x_1) - scene(p_x_2);

    vec3 p_y_1 = vec3(p.x, p.y + EPSILON, p.z);
    vec3 p_y_2 = vec3(p.x, p.y - EPSILON, p.z);
    float y = scene(p_y_1) - scene( p_y_2);

    vec3 p_z_1 = vec3(p.x, p.y, p.z + EPSILON);
    vec3 p_z_2 = vec3(p.x, p.y, p.z - EPSILON);
    float z = scene(p_z_1) - scene(p_z_2);

    return normalize( vec3(x, y, z ));
}

vec3 phongLighting(vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye, vec3 lightPos, vec3 lightIntensity) {
    vec3 N = estimateNormal(p);
    vec3 L = normalize(lightPos - p);
    vec3 V = normalize(eye - p);
    vec3 R = normalize(reflect(-L, N));

    float dotLN = dot(L, N);
    float dotRV = dot(R, V);

    // no light return black
    if (dotLN < 0.0) {
        return vec3(0.0, 0.0, 0.0);
    }

    // no specular, return only diffuse
    if (dotRV < 0.0) {
        return lightIntensity * (diffuse * dotLN);
    }

    // return phong color with diffuse & specular
    return lightIntensity * (diffuse * dotLN + specular * pow(dotRV, alpha));
}

/**
 * Lighting via Phong illumination.
 *
 * The vec3 returned is the RGB color of that point after lighting is applied.
 * ambient: Ambient color
 * diffuse: Diffuse color
 * specular: Specular color
 * alpha: Shininess coefficient
 * p: position of point being lit
 * eye: the position of the camera
 *
 * See https://en.wikipedia.org/wiki/Phong_reflection_model#Description
 */
vec3 phongIllumination(vec3 ambient, vec3 diffuse, vec3 specular, float alpha, vec3 p, vec3 eye) {

    vec3 color = ambient;
    //vec3 light1Pos = vec3(4.0, 5.0, 5.0);

    vec3 light1Pos = vec3(4.0 * sin(uTime),
                          2.0,
                          4.0 * cos(uTime));

    vec3 light2Pos = vec3(4.0 * sin(uTime),
                          2.0,
                          5.0 * sin(uTime));

    vec3 light1Intensity = vec3(0.4, 0.4, 0.4);

    vec3 light2Intensity = vec3(0.2, 0.2, 0.2);

    color += phongLighting(diffuse, specular, alpha, p, eye, light1Pos, light1Intensity);
    color += phongLighting(diffuse, specular, alpha, p, eye, light2Pos, light2Intensity);

    return color;
}

void main() {

    vec2 uv = gl_FragCoord.xy / uResolution.xy;

    /* vec4 texcol = texture2D(uImage, uv); */

    // the direction
    vec3 dir = rayDirection(50.0, uResolution.xy, gl_FragCoord.xy);

    // the eye
    vec3 eye = vec3(0.0, 0.0, 5.0);

    // compute distance
    float dist = raymarch(eye, dir, MIN_DISTANCE, MAX_DISTANCE);

    if (dist > MAX_DISTANCE - EPSILON) {
        // return black
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        return;
    }

    // closest point on the surface to the eyepoint along the view ray
    vec3 p = eye + dist * dir;

    // compute color for point
    vec3 color = phongIllumination(AMBIENT, DIFFUSE, SPECULAR, SHININESS, p, eye);

    gl_FragColor =  vec4(color, 1.0);
}