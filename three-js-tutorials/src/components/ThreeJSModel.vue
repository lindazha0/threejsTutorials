<template>
  <div>
    <canvas id="model" width="400" height="300"></canvas>
  </div>
</template>

<script>
/* eslint-disable */
// render a spinning cube
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default {
  mounted() {
    //   window.innerWidth=300
    this.render();
  },
  data() {
    return {
      //   text: require("../public/assets/3.jpg"),
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
        map: new THREE.TextureLoader().load("/img/copy.jpg"),
      }); // attach texture
      //   use Phong/ Lambert to adjust more advanced materials
      const oct = new THREE.Mesh(geometry, material);
      oct.position.set(-1, -1, 1);
      scene.add(oct);

      //   load model
      // load sakura model
      const loader = new GLTFLoader();
      let sakura;
      loader.load(
        `/sakura/scene.gltf`,
        function (gltf) {
          gltf.scene.scale.setScalar(0.3);
          // gltf.scene.rotation.y = -Math.PI / 2;

          sakura = gltf.scene;
          sakura.position.y = 2;
          scene.add(sakura);
          animate();
          console.log(sakura);
        },
        function (xhr) {
          if (xhr.loaded < xhr.total) {
            console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          }
          return;
        },
        function (error) {
          console.log("An error happened while loading sakura");
          console.error(error);
        }
      );

      var axesHelper = new THREE.AxesHelper(100);
      scene.add(axesHelper);

      loader.load(
        "/models/calibur/scene.gltf",
        (gltf) => {
          let model = gltf.scene;
          model.traverse((o) => {
            //将图片作为纹理加载
            let explosionTexture = new THREE.TextureLoader().load(
              "/models/calibur/textures/Limbs_baseColor.png"
            );
            //调整纹理图的方向
            explosionTexture.flipY = false;
            //将纹理图生成基础网格材质(MeshBasicMaterial)
            const material = new THREE.MeshBasicMaterial({
              map: explosionTexture,
            });
            //给模型每部分上材质
            o.material = material;
          });
          scene.add(model);
          model.position.set(2, -2, -1);
          console.log(model);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
      // render LOOP
      function animate() {
        // internal func: callback in a regular basis
        requestAnimationFrame(animate);

        // rotate
        oct.rotation.y += 0.01;
        sakura.rotation.y += 0.01;
        // model.rotation.y += 0.01;

        renderer.render(scene, camera);
      }
    },
  },
};
</script>

<style scoped>
#model {
  float: right;
}
</style>
