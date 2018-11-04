<template>
<div id="box">
  <div id="app">
    <router-view></router-view>
    <fot></fot>
  </div>
</div>
</template>

<script>
import fot from './components/fot.vue'
export default {
  name: "App",
  components: {
    fot
  }
};
</script>

<style lang="less">
#box{
  width: 10rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  width: 9.333333rem;
  margin: 0 auto;
}
</style>
