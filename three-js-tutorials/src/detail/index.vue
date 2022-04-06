<template>
  <div>
    <canvas id="battle" width="500" height="400"></canvas>
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
      const canvas = document.querySelector("#battle");
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

      let X = [0, 1, 2, 3, 4];
      let x, bot;
      // Y=[0,1,2,3,4,5,6,7]
      //   load model
      // load sakura model
      const loader = new GLTFLoader();
      let model, mixer;
      loader.load(
        "/models/calibur/scene.gltf",
        (gltf) => {
          model = gltf.scene;
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
          // console.log(gltf);

          // add animations
          mixer = new THREE.AnimationMixer(model);
          let clip = THREE.AnimationClip.findByName(gltf.animations, "Walk");
          const action = mixer.clipAction(clip);
          action.play();
          animate();
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );

      //   scene.add(model);
      for (x in X) {
        bot = model.clone();
        scene.add(bot);
        bot.position.set(x, 0, x);
        console.log(bot);
      }
      const clock = new THREE.Clock();

      //   var axesHelper = new THREE.AxesHelper(100);
      //   scene.add(axesHelper);

      // render LOOP
      function animate() {
        // internal func: callback in a regular basis
        requestAnimationFrame(animate);

        // rotate
        if (clock) mixer.update(clock.getDelta());
        // model.rotation.y += 0.01;

        renderer.render(scene, camera);
      }
    },
  },
};
</script>
