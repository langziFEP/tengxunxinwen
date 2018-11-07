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
    </div>
    
      <div v-if="t==1">
        <div class="dujia">
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
        </div>
      </div>
      <div v-if="t==2">
        <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">新华社长篇述评告诉你习近平如何领航中国经济</router-link>
          <p><span>置顶</span>5586评论</p>
        </dd>
        <dt>
          <img src="../assets/xjp.png" alt="">
        </dt>
      </dl>
      </div>
      <div v-if="t==3">
        <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">马蓉发新声明却被官方打脸，小号关注解密她的真实心声</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/marong.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">马蓉发新声明却被官方打脸，小号关注解密她的真实心声</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/marong.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">马蓉发新声明却被官方打脸，小号关注解密她的真实心声</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/marong.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">马蓉发新声明却被官方打脸，小号关注解密她的真实心声</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/marong.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">马蓉发新声明却被官方打脸，小号关注解密她的真实心声</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/marong.png" alt="">
        </dt>
      </dl>
      <dl class="dl">
        <dd>
          <router-link tag="h1" to="/yw1">马蓉发新声明却被官方打脸，小号关注解密她的真实心声</router-link>
          <p><span>热点</span>558评论</p>
        </dd>
        <dt>
          <img src="../assets/marong.png" alt="">
        </dt>
      </dl>
      
      </div>
      <div v-if="t==4">
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
      <div v-if="t==5">
        <div class="xsd-banner">
          <img src="../assets/dujia1.png" alt="">
          <h1>
            为什么中国人认为“江歌案”判轻了，日本方面...
          </h1>
          <p>
            <span>腾讯·大家</span>
            <i>5586评</i>
          </p>
        </div>
        <div class="jp">
          <span>
            精品栏目
          </span>
          <i>全部></i>
        </div>
        <div class="wms">
          <dl class="wm">
            <dt>
              <img src="../assets/wm.png" alt="">
            </dt>
            <dd>
              <p>我们视频</p>
            </dd>
          </dl>
          <dl class="wm">
            <dt>
              <img src="../assets/wm.png" alt="">
            </dt>
            <dd>
              <p>政事儿</p>
            </dd>
          </dl>
          <dl class="wm">
            <dt>
              <img src="../assets/wm.png" alt="">
            </dt>
            <dd>
              <p>虎嗅APP</p>
            </dd>
          </dl>
          <dl class="wm">
            <dt>
              <img src="../assets/wm.png" alt="">
            </dt>
            <dd>
              <p>360</p>
            </dd>
          </dl>
        </div>
        <div class="xsd-banner">
          <img src="../assets/dujia1.png" alt="">
          <h1>
            为什么中国人认为“江歌案”判轻了，日本方面...
          </h1>
          <p>
            <span>腾讯·大家</span>
            <i>5586评</i>
          </p>
        </div>
      </div>
      <div v-if="t==6">
        <div class="dujia">
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
            </dd>
          </dl>
          <dl class="dj">
            <dt><img src="../assets/dujia.png" alt=""></dt>
            <dd>
              <h1>
                女子为30万保养费拉3个闺蜜下水&nbsp;&nbsp;自己反被骗七千&nbsp;&nbsp;智商捉急
              </h1>
              <p><span>新闻哥</span><i>176评</i></p>
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
      // background: url(../../../assets/fangdajing.png);
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
.dujia{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  .dj{
    width: 45%;
    margin-right: 0.2rem;
    dt{
      img{
        width: 4.6rem;
        height: 6.4rem;
      }
    }
    dd{
      width: 90%;
      text-align: center;
      h1{
        font-weight: bolder;
        line-height: .5rem;
        font-size: .373333rem;
      }
      p{
        display: flex;
        justify-content: space-between;
        padding-top: .133333rem;
        span{
          font-weight: bolder;
          font-size: .32rem;
        }
        i{
          color: #ccc;
          padding: 0 .133333rem;
        }
      }
    }
  }
}
.xsd-banner{
  width: 100%;
  border-bottom: 1px solid #ccc;
  img{
    width: 100%;
  }
  h1{
    line-height: .933333rem;
    font-weight: bolder;
    font-size: .426667rem;
  }
  p{
    line-height: .666667rem;
    span{
      font-weight: bolder;
      font-size: .32rem;
    }
    i{
      color: #ccc;
      padding: 0 .266667rem;
    }
  }
}
.jp{
  justify-content: space-between;
  display: flex;
  line-height: 1.733333rem;
  span{
    font-weight: bolder;
    font-size: .426667rem;
  }
  i{
    font-weight: bold;
    font-size: .32rem;
    padding: 0 .2rem;
  }
}
.wms{
  display: flex;
  .wm{
    flex: 1;
    dt{
      img{
        width: 2rem;
        height: 2.4rem;
      }
    }
    dd{
      p{
        text-align: center;
        line-height: .533333rem;
      }
    }
    
  }
}
</style>
