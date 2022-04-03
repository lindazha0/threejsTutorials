<template>
  <div>
    <canvas id="model" width="400" height="300"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
// render a spinning cube
import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  mounted() {
    //   window.innerWidth=300
    this.render();
  },
  data() {
    return {
      text: require("/Users/linda/Desktop/threejsTutorials/three-js-tutorials/src/assets/3.jpg"),
    };
  },
  methods: {
    render() {
      // scene, camera, and renderer are must for a threejs project
      // scene includes: Mesh, Group, Light, etc.
      const scene = new THREE.Scene();
      scene.background = new THREE.Color("#eee");

      // get canvas
      const canvas = document.querySelector("#model");
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

      const geometry = new THREE.OctahedronGeometry();
      //   const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // simplest surface with only color
      const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(this.text),
      }); // attach texture
      // use Phong/ Lambert to adjust more advanced materials
      const cube = new THREE.Mesh(geometry, material);
      // eslint-disable-next-line
      scene.add(cube);

      //   load model
      // load sakura model
    //   const loader = new GLTFLoader();
    //   loader.load(
    //     "/Users/linda/Desktop/threejsTutorials/three-js-tutorials/src/assets/models/sakura/scene.gltf",
    //     function (gltf) {
    //       gltf.scene.scale.setScalar(0.3);
    //       // gltf.scene.rotation.y = -Math.PI / 2;

    //       sakura = gltf.scene;
    //       sakura.position.y = 3;
    //       scene.add(sakura);
    //     },
    //     function (xhr) {
    //       console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    //     },
    //     function (error) {
    //       console.log("An error happened while loading sakura");
    //     }
    //   );

      //   loader.load(
      //     "/Users/linda/Desktop/threejsTutorials/three-js-tutorials/src/assets/models/calibur/scene.gltf",
      //     (gltf) => {
      //       let model = gltf.scene;
      //       model.traverse((o) => {
      //       //将图片作为纹理加载
      //       let explosionTexture = new THREE.TextureLoader().load(
      //         '/seraphine/textures/Mat_cwfyfr1_userboy17.bmp_diffuse.png'
      //       )
      //       //调整纹理图的方向
      //       explosionTexture.flipY = false
      //       //将纹理图生成基础网格材质(MeshBasicMaterial)
      //       const material = new THREE.MeshBasicMaterial({
      //         map: explosionTexture,
      //       })
      //       //给模型每部分上材质
      //       o.material = material
      //     })
      //       scene.add(model);
      //     },
      //     undefined,
      //     function (error) {
      //       console.error(error);
      //     }
      //   );
    },
  },
};
</script>
