<template>
  <!-- unlike name: this file import model with troisjs -->
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png" :width="10"> -->
    <el-row>
      <el-button round icon="Refresh" @click="moveOct" />
    </el-row>
    <el-row>
      <Renderer
        ref="renderer"
        antialias
        :orbit-ctrl="{ enableDamping: true, target }"
        shadow
        width="400"
        height="300"
      >
        <Camera :position="{ x: 100, y: 200, z: 300 }" />
        <Scene ref="scene" background="#a0a0a0">
          <!-- <HemisphereLight /> -->

          <DirectionalLight
            :position="{ x: 0, y: 200, z: 100 }"
            cast-shadow
            :shadow-camera="{ top: 180, bottom: -120, left: -120, right: 120 }"
          />

          <Octahedron
            ref="oct"
            :radius="30"
            :position="{ x: -50, y: 40, z: -50 }"
            cast-shadow
          >
            <PhongMaterial color="#E74866" />
          </Octahedron>

          <Box
            ref="box"
            :size="30"
            :position="{ x: 50, y: 40, z: 50 }"
            :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
            cast-shadow
          >
            <PhysicalMaterial color="#55A4F3" />
          </Box>

          <Plane
            :width="1000"
            :height="1000"
            :rotation="{ x: -Math.PI / 2 }"
            receive-shadow
          >
            <PhongMaterial>
              <Texture
                src="https://th.bing.com/th/id/OIP.E4JUVdyJbjn7V1tnxNhRwAHaF7?pid=ImgDet&rs=1"
              />
              <!-- <Texture
                src="/Users/linda/Desktop/threejsTutorials/three-js-tutorials/public/assets/3.jpg"
              /> -->
            </PhongMaterial>
          </Plane>

          <!-- <FbxModel
          src="/Users/linda/Desktop/threejsTutorials/three-js-tutorials/src/assets/models/SambaDancing.fbx"
          @load="onLoad"
        /> -->
          <!-- <FbxModel src="https://github.com/troisjs/troisjs.github.io/blob/master/src/public/assets/models/Samba%20Dancing.fbx" @load="onLoad" /> -->
        </Scene>
      </Renderer>
    </el-row>
  </div>
</template>
  
  <script>
/* eslint-disable */
// Model from mixamo.com
import { AnimationMixer, Clock, Fog, GridHelper, Vector3 } from "three";
// import {
//   // AmbientLight,
//   Camera,
//   DirectionalLight,
//   FbxModel,
//   HemisphereLight,
//   Renderer,
//   PhongMaterial,
//   Plane,
//   Scene,
// } from "troisjs";

export default {
  // components: {
  //   // AmbientLight,
  //   Camera,
  //   DirectionalLight,
  //   FbxModel,
  //   HemisphereLight,
  //   Renderer,
  //   PhongMaterial,
  //   Plane,
  //   Scene,
  // },
  data() {
    return {
      // text: require("/Users/linda/Desktop/threejsTutorials/three-js-tutorials/public/assets/3.jpg"),
      target: new Vector3(0, 100, 0),
    };
  },
  mounted() {
    const scene = this.$refs.scene.scene;
    scene.fog = new Fog(0xa0a0a0, 200, 1000);

    const grid = new GridHelper(2000, 20, 0x000000, 0x000000);
    grid.material.opacity = 0.5;
    grid.material.transparent = true;
    this.$refs.scene.add(grid);
    this.animate();
  },
  methods: {
    // render LOOP
    animate() {
      // rotate
      const oct = this.$refs.oct.mesh;
      const cube = this.$refs.box.mesh;

      this.$refs.renderer.onBeforeRender(() => {
        oct.rotation.y += 0.01;
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });
    },
    moveOct() {
      // move two mesh
      const oct = this.$refs.oct.mesh;
      const cube = this.$refs.box.mesh;
      // transplace: comment them to learn about axis!
      let pos = [-50, -20, 0, 20, 50];
      oct.position.x = pos[Math.floor(Math.random() * 5)];
      oct.position.z = pos[Math.floor(Math.random() * 5)];
      cube.position.x = pos[Math.floor(Math.random() * 5)];
      cube.position.z = pos[Math.floor(Math.random() * 5)];
    },
    onLoad(object) {
      this.mixer = new AnimationMixer(object);
      const action = this.mixer.clipAction(object.animations[0]);
      action.play();

      object.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });

      this.clock = new Clock();
      this.$refs.renderer.onBeforeRender(this.updateMixer);
    },
    updateMixer() {
      this.mixer.update(this.clock.getDelta());
    },
  },
};
</script>