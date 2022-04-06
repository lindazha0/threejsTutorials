<template>
  <div>
    <el-row>
      <img alt="Vue logo" src="/img/logo.png" width="100%" height="10"/>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <trois msg="Welcome to My Vue.js App with Three.js" />
      </el-col>
      <el-col :span="12">
        <troisModel />
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12">
        <three />
      </el-col>
      <el-col :span="12">
        <threeModel />
      </el-col>
    </el-row>
  </div>
</template>


<script>
/* eslint-disable */
import HelloWorld from "./TroisCube.vue";
import troisModel from "./TroisLoadModel.vue";
import ThreeJS from "./ThreeJS.vue";
import ThreeJSModel from "./ThreeJSModel.vue";

export default {
  components: { ThreeJS },
  name: "DisplayAll",
  components: {
    trois: HelloWorld,
    troisModel,
    three: ThreeJS,
    threeModel: ThreeJSModel,
  },
};
</script>

