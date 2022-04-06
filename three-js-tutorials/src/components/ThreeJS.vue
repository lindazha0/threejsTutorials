<template>
  <div id='threeCanvas'>
    <canvas id="cube" width="300" height="300"></canvas>
  </div>
</template>

<script>
// render a spinning cube
import * as THREE from "three";

export default {
  name: "ThreeJS",
  mounted() {
    this.render();
  },
  data() {
    return {
      // text: require("../public/assets/3.jpg"),
    };
  },
  methods: {
    render() {
      // scene, camera, and renderer are must for a threejs project
      // scene includes: Mesh, Group, Light, etc.
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#eee");

      // get canvas
      const canvas = document.querySelector("#cube");
      // renderer: scene tree -> 2D image
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      //   renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // where and what to see
      const camera = new THREE.PerspectiveCamera(
        75, // fov: Number
        window.innerWidth / window.innerHeight, // aspect:Number
        0.1, // near: Number
        1000 // far: Number
      );
      camera.position.z = 4; // since the cube will be put (0,0,0)

      // create a cube with deometry(skeleton) & material(surface)
      const geometry = new THREE.IcosahedronGeometry();
      //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // simplest surface with only color
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load("/img/copy.jpg"),
      }); // attach texture
      // use Phong/ Lambert to adjust more advanced materials
      const cube = new THREE.Mesh(geometry, material);
      // eslint-disable-next-line
      let pos = [-2, -1, 0, 1, 2];
      cube.position.y = 0;
      cube.position.x = 0;
      cube.position.z = 0;
      scene.add(cube);

      // render LOOP
      function animate() {
        // internal func: callback in a regular basis
        requestAnimationFrame(animate);

        // rotate
        // cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // transplace: comment them to learn about axis!
        // cube.position.x =  pos[ Math.floor(Math.random()*5)]
        // cube.position.y =  pos[ Math.floor(Math.random()*5)]
        // cube.position.z =  pos[ Math.floor(Math.random()*5)]

        renderer.render(scene, camera);
      }
      animate();
    },
  },
};
</script>
