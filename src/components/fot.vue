<template>
<div class="myfooter">
       <footer>
      <router-link tag="p" to="/yaowen">
          要闻
      </router-link>
      <router-link tag="p" to="/shipin">
          视频
      </router-link>
      <router-link tag="p" to="/tuijian">
          推荐
      </router-link>
      <router-link tag="p" to="/wo">
          我
      </router-link>
    </footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang='less'>
.myfooter {
  footer {
    width: 100%;
    height: 1.066667rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
      flex: 1;
      text-align: center;
      line-height: 1.066667rem;
      cursor: pointer;
    }
    .router-link-exact-active {
      background: skyblue;
      color: red;
    }
  }
}
</style>
