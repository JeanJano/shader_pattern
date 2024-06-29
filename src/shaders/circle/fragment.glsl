varying vec2 vUv;

void main()
{
    float strength = 1.0 - step(0.05, abs(distance(vUv, vec2(0.5)) - 0.45));

    gl_FragColor = vec4(vec3(strength), 1.0);
}