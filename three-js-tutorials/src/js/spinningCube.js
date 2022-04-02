// render a spinning cube
import * as THREE from "./three";

// scene, camera, and renderer are must for a threejs project
// scene includes: Mesh, Group, Light, etc. 
const scene = new THREE.Scene();
// where and what to see
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// renderer: scene tree -> 2D image
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// create a cube with deometry(skeleton) & material(surface)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0x00ff00 });  // simplest surface with only color
// const material = new THREE.MeshBasicMaterial({
//     map: new THREE.TextureLoader().load("3.jpg")
// });  // attach texture
// use Phong/ Lambert to adjust more advanced materials
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z=4

// render LOOP
function animate() {
    // internal func: callback in a regular basis
    requestAnimationFrame(animate);

    // rotate
    cube.rotation.x += 0.01; 
    cube.rotation.y += 0.01;

    // tranplace
    // posDiff = 0.01;
    // console.log(cube.position.y, window.innerHeight)
    // if (cube.position.y >= 4 || cube.position.y <= -4)
    //     posDiff = -0.5;
    // cube.position.x += posDiff;
    // cube.position.y += posDiff;
    // cube.position.z += posDiff;

    renderer.render(scene, camera);
};

animate();