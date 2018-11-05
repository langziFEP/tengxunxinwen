<template>
<div class="tuijian">
    <div class="head">
        <span>
            &lt;&nbsp;发现
        </span>
        <span>推荐</span>
        <span></span>
    </div>
    <router-link tag="h2" to="/xqlist">登录刷新，看更多兴趣推荐></router-link>
    <h3>荷兰超模简单装备出行，着腿这气质感觉要突破天际了！</h3>
    <div class="banner">
        <img src="../assets/banner.png" alt="">
    </div>
    <p><span>星际里的世界</span><span>293评论</span></p>
    <div class="iphone">
        <h1>iPhoneX发布前，设计图纸被“员工”里应外合盗窃</h1>
        <div>
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
        </div>
      </div>
      <div class="iphone">
        <h1>iPhoneX发布前，设计图纸被“员工”里应外合盗窃</h1>
        <div>
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
        </div>
      </div>
      <div class="iphone">
        <h1>iPhoneX发布前，设计图纸被“员工”里应外合盗窃</h1>
        <div>
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: "box",
  methods: {
    img() {
      this.$router.push("/iphone");
    }
  }
};
</script>

<style lang="less">
.tuijian {
  font-size: 0.426667rem;
  .head {
    display: flex;
    width: 100%;
    line-height: 1.2rem;
    font-weight: bolder;
    border-bottom: 1px solid #ccc;
    span {
      flex: 1;
    }
    :nth-child(2) {
      text-align: center;
    }
  }
  h2 {
    line-height: 1.333333rem;
    text-align: center;
    color: #178eff;
  }
  h3 {
    line-height: 0.666667rem;
    font-weight: bold;
  }
  .banner {
    img {
      width: 100%;
    }
  }
  p {
    span {
      padding: 0.133333rem;
      color: #ccc;
      line-height: 0.48rem;
      font-size: 0.293333rem;
    }
  }
  .iphone {
    h1 {
      font-size: 0.426667rem;
      line-height: 0.746667rem;
      font-weight: bolder;
    }
    div {
      display: flex;
      img {
        flex: 1;
        width: 2.933333rem;
        height: 2.24rem;
      }
    }
  }
}
</style>
