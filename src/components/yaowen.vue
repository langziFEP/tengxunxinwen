<template>
<div class="box">
 <header>
     <img src="../assets/top1.png" alt="">
     <input type="text" placeholder="大家都在搜：考研泄题系假消息">
 </header>
 <nav>
    <ul class="ul">
      <li v-for="(v, i) in arr" :key="i"  @click="t=i" :class="{active:t==i}">{{v}}</li>
    </ul>
</nav>

    <div v-if="t==0" class="yw">
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <div class="rd">
        <img src="../assets/banner.png" alt="">
      <router-link tag="p" to="/redian">查看更多热点事件&nbsp;></router-link>
      </div>
      <div class="iphone">
        <h1>iPhoneX发布前，设计图纸被“员工”里应外合盗窃</h1>
        <div>
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
          <img src="../assets/iphone.png" alt="" @click="img">
        </div>
      </div>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">网红直播看腻了，现在该轮到动物上台了</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/dongwu.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">网红直播看腻了，现在该轮到动物上台了</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/dongwu.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">网红直播看腻了，现在该轮到动物上台了</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/dongwu.png" alt="">
        </dt>
      </dl>




      <ul>
        <!-- <li @click="xjp">习京平</li> -->
      <!-- <router-link tag="h1" class="teshu" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link> -->
        
      </ul>
    </div>
    

      <div v-if="t==1">1111111111111111</div>
      <div v-if="t==2">22222222222</div>
      <div v-if="t==3">3333333333</div>
      <div v-if="t==4">44444444</div>
      <div v-if="t==5">44444444</div>
      <div v-if="t==6">
        <div class="dujia">
          <dl>
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
            </dd>
          </dl>
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
  },
  data() {
    return {
      t: 0,
      arr: ["要闻", "视频", "北京", "娱乐", "体育", "新时代", "独家"]
    };
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

.box {
  width: 100%;
  height: 100%;
  header {
    width: 100%;
    display: flex;
    margin-top: 0.466667rem;
    img {
      width: 0.733333rem;
      height: 0.733333rem;
    }
    input {
      width: 80%;
      height: 0.8rem;
      border: none;
      background: #f3f6f8;
      border-radius: 0.8rem;
      padding-left: 1.066667rem;
    }
  }
  .ul {
    display: flex;
    margin-top: 0.4rem;
    border-bottom: 1px solid #ccc;
    li {
      flex: 1;
      font-size: 0.426667rem;
      text-align: center;
      line-height: 1.066667rem;
      cursor: pointer;
      &.active {
        font-weight: bolder;
        border-bottom: 3px solid skyblue;
      }
    }
  }
}
.dl {
  display: flex;
  justify-content: space-between;
  margin: .266667rem 0;
  dd {
    position: relative;
    h1 {
      font-weight: bolder;
      line-height: 0.64rem;
      font-size: 0.426667rem;
    }
    p {
      position: absolute;
      bottom: 0;
      left: 0.133333rem;
      span {
        color: skyblue;
        padding: 0 0.133333rem;
      }
    }
  }
  dt {
    img {
      width: 3.066667rem;
      height: 2.133333rem;
    }
  }
}
.rd {
  img {
    width: 100%;
  }
  p {
    text-align: center;
    line-height: 1.2rem;
    font-weight: bolder;
    font-size: 0.426667rem;
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
</style>
