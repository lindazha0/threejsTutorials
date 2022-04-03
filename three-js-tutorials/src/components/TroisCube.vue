<template>
  <div class="hello">
    <img alt="Vue logo" src="../../public/img/logo.png" :width="10">
    <h1>{{ msg }}</h1>
    <Renderer
      ref="renderer"
      resize
      antialias
      :orbit-ctrl="{
        autoRotate: true,
        enableDamping: true,
        dampingFactor: 0.05,
      }"
    >
      <Camera :position="{ x: 0, y: 0, z: 10 }" />
      <Scene background="#ffffff">
        <Box
          ref="mesh"
          :size="3"
          :rotation="{ y: Math.PI / 4, z: Math.PI / 4 }"
        >
          <!-- <MatcapMaterial name="2E763A_78A0B7_B3D1CF_14F209" /> -->
          <PhongMaterial>
            <Texture src="/img/copy.jpg" />
          </PhongMaterial>
        </Box>
      </Scene>
    </Renderer>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
