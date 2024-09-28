#define NORMAL

varying vec3 vNormal;

float sigmoid(float a, float f) {
    return (1.0 / (1.0 + exp(-f * a)));
}

void main() {
    vec3 normalColor = normalize(vNormal) * 0.5 + 0.5;
    gl_FragColor = vec4(normalColor, 1.0);

    float edgeStrength = length(fwidth(normalColor)) + 0.2;
    edgeStrength = sigmoid(edgeStrength, 15.0);
    edgeStrength = step(0.1, edgeStrength);

    if (edgeStrength > 0.99999999) {
        gl_FragColor = vec4(vec3(0.0), 1.0);
    } else {
        gl_FragColor = vec4(0.8, 0.5, 0.2, 1.0);
    }
}

// float edgeDetection() {
//     // Calcul des dérivées de la position du fragment
//     vec3 dFdxPos = dFdx(vNormal);
//     vec3 dFdyPos = dFdy(vNormal);

//     // Utiliser la norme des dérivées pour détecter les changements
//     float edgeFactor = length(dFdxPos) + length(dFdyPos);
//     return edgeFactor;
// }

// void main() {
//     // Détection des bords
//     float edgeFactor = edgeDetection();

//     // Seuil pour l'affichage des bords
//     float threshold = 0.00000000000001; // Ajuster le seuil pour la sensibilité des bords

//     // Définir les couleurs pour les bords et les surfaces
//     if (edgeFactor > threshold) {
//         gl_FragColor.rgb = vec3(vNormal);  // Noir pour les bords
//     } else {
//         gl_FragColor.rgb = vec3(1.0);  // Blanc pour l'intérieur
//     }

//     gl_FragColor.a = 1.0;  // Opacité à 100%
// }