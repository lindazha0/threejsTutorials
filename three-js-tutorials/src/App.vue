<template>
  <div>
    <el-row>
      <img alt="Vue logo" src="./assets/logo.png" :width="100" />
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
      <HelloWorld msg="Welcome to Your Vue.js App" />
      </el-col>
      <el-col :span="6">
      <SpinningCube />
      </el-col>
      <el-col :span="6">
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </el-col>
      <el-col :span="6">
        <HelloWorld msg="Welcome to Your Vue.js App" />
      </el-col>
    </el-row>
  </div>
</template>


<script>
/* eslint-disable */
import HelloWorld from "./components/HelloWorld.vue";
import SpinningCube from "./components/SpinningCube.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SpinningCube,
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
