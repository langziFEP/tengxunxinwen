<template>
<div class="myfooter">
       <footer>
      <router-link tag="dl" to="/yaowen">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          要闻
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/shipin">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          视频
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/tuijian">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          推荐
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/wo">
            <dl>
        <dt>
          1
        </dt>
        <dd>
          我
        </dd>
      </dl>
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
    position: fixed;
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
}
</style>
