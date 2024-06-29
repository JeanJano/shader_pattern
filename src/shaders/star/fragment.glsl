#define PI 3.1415926535897932384626433832795

varying vec2 vUv;

vec2 rotate(vec2 uv, float rotation, vec2 pos) {
    return vec2(
        cos(rotation) * (uv.x - pos.x) - sin(rotation) * (uv.y - pos.y) + pos.x,
        sin(rotation) * (uv.x - pos.x) + cos(rotation) * (uv.y - pos.y) + pos.y
    );
}

void main() {
    vec2 rotatedUv = rotate(vUv, PI * 0.25, vec2(0.5));
    float strength = 0.15 / distance(vec2(rotatedUv.x, (rotatedUv.y - 0.5) * 5.0 + 0.5), vec2(0.5));
    strength *= 0.15 / (distance(vec2(rotatedUv.y, (rotatedUv.x - 0.5) * 5.0 + 0.5), vec2(0.5)));
    gl_FragColor = vec4(vec3(strength), 1.0);
}