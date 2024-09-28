varying vec2 vUv;

float edgeFactor(vec2 uv) {
    // Calculate screen-space derivatives
    vec2 dxy = fwidth(uv);
    // Determine edge thickness relative to screen size
    vec2 edge = smoothstep(vec2(0.0), dxy * 1.5, uv) * smoothstep(vec2(0.0), dxy * 1.5, 1.0 - uv);
    // Return the minimum factor to create a uniform border thickness
    return min(edge.x, edge.y);
}

void main() {
    // Use the edge factor to determine the border color
    float edge = edgeFactor(vUv);
    vec3 color = mix(vec3(1.0), vec3(0.0), edge); // Black borders, white surface
    gl_FragColor = vec4(color, 1.0);
}