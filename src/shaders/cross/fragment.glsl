varying vec2 vUv;

void main()
{
    vec3 color = vec3(0.0, 0.0, 0.0);

    float thickness = 0.1;
    if (abs(vUv.x - 0.5) < thickness || abs(vUv.y - 0.5) < thickness) {
        color = vec3(1.0, 1.0, 1.0);
    }
    gl_FragColor = vec4(color, 1.0);
}