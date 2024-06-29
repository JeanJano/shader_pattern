varying vec2 vUv;

void main()
{
    vec3 color = vec3(0.0, 0.0, 0.0);
    if (vUv.x < 0.1 || vUv.x > 0.9 || vUv.y < 0.1 || vUv.y > 0.9) {
        color = vec3(1.0, 1.0, 1.0);
    } else {
        color = vec3(0.0, 0.0, 0.0);
    }
    gl_FragColor = vec4(color, 1.0);
}