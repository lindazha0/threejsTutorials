<template>
  <img alt="Vue logo" src="./assets/logo.png" :width="100">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <SpinningCube/>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import SpinningCube from './components/SpinningCube.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SpinningCube,
  }
}
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
