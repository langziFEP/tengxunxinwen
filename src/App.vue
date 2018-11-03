<template>
  <div id="app">

    <router-view>

    </router-view>

    <!-- <div class="foot"> 
      <router-link to="/" class="li">列表0</router-link>
      <router-link to="/list1">列表1</router-link>
      <router-link to="/list2">列表2</router-link>
    </div> -->
    <footer>
      <router-link tag="dl" to="/">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          列表
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/list1">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          列表2
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/list2">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          列表3
        </dd>
      </dl>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background: #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  dl {
    flex: 1;
  }
  .router-link-exact-active {
    background: red;
  }
}
</style>
