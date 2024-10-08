import * as THREE from 'three'
import { AmbientLight } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import circleFragmentShader from './shaders/circle/fragment.glsl'
import circleVertexShader from './shaders/circle/vertex.glsl'
import crossFragmentShader from './shaders/cross/fragment.glsl'
import crossVertexShader from './shaders/cross/vertex.glsl'
import fakeEdgeDetectionFragmentShader from './shaders/fake_edge_detection/fragment.glsl'
import fakeEdgeDetectionVertexShader from './shaders/fake_edge_detection/vertex.glsl'
import lightFragmentShader from './shaders/light/fragment.glsl'
import lightVertexShader from './shaders/light/vertex.glsl'
import noiseFragmentShader from './shaders/noise/fragment.glsl'
import noiseVertexShader from './shaders/noise/vertex.glsl'
import noisePerlinFragmentShader from './shaders/noise_perlin/fragment.glsl'
import noisePerlinVertexShader from './shaders/noise_perlin/vertex.glsl'
import psychedelicFragmentShader from './shaders/psychedelic/fragment.glsl'
import psychedelicVertexShader from './shaders/psychedelic/vertex.glsl'
import squareFragmentShader from './shaders/square_outline/fragment.glsl'
import squateVertexShader from './shaders/square_outline/vertex.glsl'
import starFragmentShader from './shaders/star/fragment.glsl'
import starVertexShader from './shaders/star/vertex.glsl'
import waveDistortionFragmentShader from './shaders/wave_distortion/fragment.glsl'
import waveDistortionVertexShader from './shaders/wave_distortion/vertex.glsl'


const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

/**
 * Test mesh
 */
// Geometry
const geometry = new THREE.PlaneGeometry(1, 1, 32, 32)
const boxGeometry = new THREE.BoxGeometry(1, 1, 0.25);

// circleMaterial
const circleMaterial = new THREE.ShaderMaterial({
    vertexShader: circleVertexShader,
    fragmentShader: circleFragmentShader,
})

// crossMaterial
const crossMaterial = new THREE.ShaderMaterial({
    vertexShader: crossVertexShader,
    fragmentShader: crossFragmentShader,
})

// squareMaterial
const squareMaterial = new THREE.ShaderMaterial({
    vertexShader: squateVertexShader,
    fragmentShader: squareFragmentShader
})

// noiseMaterial
const noiseMaterial = new THREE.ShaderMaterial({
    vertexShader: noiseVertexShader,
    fragmentShader: noiseFragmentShader
})

// lightMaterial
const lightMaterial = new THREE.ShaderMaterial({
    vertexShader: lightVertexShader,
    fragmentShader: lightFragmentShader
})

// starMaterial
const starMaterial = new THREE.ShaderMaterial({
    vertexShader: starVertexShader,
    fragmentShader: starFragmentShader
})

// waveDistortionMaterial
const waveDistortionMaterial = new THREE.ShaderMaterial({
    vertexShader: waveDistortionVertexShader,
    fragmentShader: waveDistortionFragmentShader
})

// psychedelicMaterial
const psychedelicMaterial = new THREE.ShaderMaterial({
    vertexShader: psychedelicVertexShader,
    fragmentShader: psychedelicFragmentShader
})

// noisePerlinMaterial
const noisePerlinMaterial = new THREE.ShaderMaterial({
    vertexShader: noisePerlinVertexShader,
    fragmentShader: noisePerlinFragmentShader
})

// fakeEdgeDetection
const fakeEdgeDetectionMaterial = new THREE.ShaderMaterial({
    vertexShader: fakeEdgeDetectionVertexShader,
    fragmentShader: fakeEdgeDetectionFragmentShader,
})

// Mesh
const circle = new THREE.Mesh(geometry, circleMaterial)
const cross = new THREE.Mesh(geometry, crossMaterial)
const square = new THREE.Mesh(geometry, squareMaterial)
const noise = new THREE.Mesh(geometry, noiseMaterial)
const light = new THREE.Mesh(geometry, lightMaterial)
const star = new THREE.Mesh(geometry, starMaterial)
const waveDistortion = new THREE.Mesh(geometry, waveDistortionMaterial)
const psychedelic = new THREE.Mesh(geometry, psychedelicMaterial)
const noisePerlin = new THREE.Mesh(geometry, noisePerlinMaterial)
const fakeEdgeDetection = new THREE.Mesh(boxGeometry, fakeEdgeDetectionMaterial)
scene.add(circle)
scene.add(cross)
scene.add(square)
scene.add(noise)
scene.add(light)
scene.add(star)
scene.add(waveDistortion)
scene.add(psychedelic)
scene.add(noisePerlin)
scene.add(fakeEdgeDetection)

// Position
circle.position.set(-1, 1, 0)
cross.position.set(1, 1, 0)
square.position.set(-1, -1, 0)
noise.position.set(-3, -1, 0)
light.position.set(3, -1, 0)
star.position.set(3, 1, 0)
waveDistortion.position.set(-3, 1, 0)
psychedelic.position.set(-3, 3, 0)
noisePerlin.position.set(-3, -3, 0)
fakeEdgeDetection.position.set(-1, -3, 0)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * light
 */

const ambiantLight = new AmbientLight(0xffffff, 1)
scene.add(ambiantLight)

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 5)
scene.add(camera)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const tick = () =>
{
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()