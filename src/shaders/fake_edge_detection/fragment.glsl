varying vec2 vUv;

void main() {
    vec3 color = vec3(0.0);
    if (vUv.x < 0.025 || vUv.x > 0.975 || vUv.y < 0.025 || vUv.y > 0.975) {
        color = vec3(1.0);
    } else {
        color = vec3(0.0);
    }
    gl_FragColor = vec4(color, 1.0);

}