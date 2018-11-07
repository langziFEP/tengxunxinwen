<template>
<div class="box">
  <div class="dj">
    <h1 @click="denglu">点击登录</h1>
    <h2>1s登录，领取积分大奖</h2>
  </div>
  <ul class="woli">
    <li @click="li"><span>消息</span><i>&gt;</i></li>
    <li @click="li"><span>收藏/历史</span><i>&gt;</i></li>
  </ul>
  <ul class="woli">
    <li @click="li"><span>钱包</span><i>&gt;</i></li>
    <li @click="li"><span>红包/活动</span><i>&gt;</i></li>
  </ul>
  <ul class="woli">
    <li @click="li"><span>免流量看新闻</span><i>&gt;</i></li>
    <li @click="li"><span>游戏</span><i>&gt;</i></li>
  </ul>
  <ul class="woli">
    <li @click="li"><span>投诉反馈</span><i>&gt;</i></li>
    <li @click="li"><span>评论</span><i>&gt;</i></li>
  </ul>
</div>
</template>

<script>
export default {
name: "box",
  methods: {
    li() {
      this.$router.push("/nextwo");
    },
    denglu() {
      this.$router.push("/denglu");
    }
  },
}
</script>

<style lang="less">
.box{
  width: 100%;
  height: 100%;
  .dj{
    margin-top: 0.266667rem;
    height: 5.4rem;
    width: 100%;
    background: url('../assets/dl.png') center no-repeat;
    background-size: 100% auto;
    position: relative;
    h1{
      position: absolute;
      top: 2.533333rem;
      left: 25%;
      font-size: 0.426667rem;
    }
    h2{
      position: absolute;
      left: 25%;
      top: 3.2rem;
      font-size: 0.32rem;
    }
  }
   .woli{
    margin-bottom: 0.133333rem;
    background: #fff;
    border-bottom: 0.133333rem solid #f4f6f8;
    li{
      display: flex;
      justify-content: space-between;
      background: url('../assets/xx.png') 10px no-repeat;
      line-height: 1.333333rem;
      font-size: 0.346667rem;
      background-size:0.666667rem; 
      &:active{
        background: skyblue;
      }
      span{
        padding-left: 1.333333rem;
      }
    }
  }
 
}
</style>
