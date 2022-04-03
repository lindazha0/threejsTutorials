<template>
  <div>
    <el-row>
      <img alt="Vue logo" src="./assets/logo.png" width="1000" height="10"/>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <troisInternal msg="Welcome to Your Vue.js App" />
      </el-col>
      <el-col :span="12">
        <troisModel />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <threeJS />
      </el-col>
      <el-col :span="12">
        <threeModel />
      </el-col>
    </el-row>
  </div>
</template>


<script>
/* eslint-disable */
import HelloWorld from "./components/TroisCube.vue";
import troisModel from "./components/TroisLoadModel.vue";
import ThreeJS from "./components/ThreeJS.vue";
import ThreeJSModel from "./components/ThreeJSModel.vue";

export default {
  components: { ThreeJS },
  name: "App",
  components: {
    troisInternal: HelloWorld,
    troisModel,
    threeJS: ThreeJS,
    threeModel: ThreeJSModel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
