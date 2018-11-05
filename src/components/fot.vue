<template>
<div class="myfooter">
       <footer>
      <router-link tag="dl" to="/yaowen">
            <dl>
        <dt>
          
        </dt>
        <dd>
          要闻
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/shipin">
            <dl>
        <dt>
          
        </dt>
        <dd>
          视频
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/tuijian">
            <dl>
        <dt>
          
        </dt>
        <dd>
          推荐
        </dd>
      </dl>
      </router-link>
      <router-link tag="dl" to="/wo">
            <dl>
        <dt>
          
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
    height: 1.066667rem;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #cccccc;
    display: flex;
    align-items: center;
    justify-content: center;
    dl {
      flex: 1;
      height: 100%;
      text-align: center;
      dd{
        line-height: 1.066667rem;
      }
    }
    .router-link-exact-active {
      background: skyblue;
      color: red;
    }
  }
}
</style>
