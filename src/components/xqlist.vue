<template>
    <div class="xqlist">
        <button @click="btn">&lt;</button>
        <h1>兴趣分类</h1>
        <ul class="ul">
            <li v-for="(v, i) in arr" :key="i"  @click="t=i" :class="{active:t==i}">{{v}}</li>
        </ul>
        <div v-if="t==0">最新最新最新最新最新最新最新最新最新最新</div>
        <div v-if="t==1">
            <dl class="dl">
                <dt>
                    <img src="../assets/xqlist.png" alt="">
                </dt>
                <dd>
                    <h2>
                        <span>1</span>
                        江歌案庭审
                    </h2>
                    <p>江歌案凶手陈世峰一审获刑20年，已提出上诉。</p>
                    <p>
                        资讯1.2万人参与
                    </p>
                </dd>
            </dl>
            <dl class="dl">
                <dt>
                    <img src="../assets/xqlist.png" alt="">
                </dt>
                <dd>
                    <h2>
                        <span>2</span>
                        江歌案庭审
                    </h2>
                    <p>江歌案凶手陈世峰一审获刑20年，已提出上诉。</p>
                    <p>
                        资讯1.2万人参与
                    </p>
                </dd>
            </dl>
            <dl class="dl">
                <dt>
                    <img src="../assets/xqlist.png" alt="">
                </dt>
                <dd>
                    <h2>
                        <span>3</span>
                        江歌案庭审
                    </h2>
                    <p>江歌案凶手陈世峰一审获刑20年，已提出上诉。</p>
                    <p>
                        资讯1.2万人参与
                    </p>
                </dd>
            </dl>
            <dl class="dl">
                <dt>
                    <img src="../assets/xqlist.png" alt="">
                </dt>
                <dd>
                    <h2>
                        <span>4</span>
                        江歌案庭审
                    </h2>
                    <p>江歌案凶手陈世峰一审获刑20年，已提出上诉。</p>
                    <p>
                        资讯1.2万人参与
                    </p>
                </dd>
            </dl>
             <dl class="dl">
                <dt>
                    <img src="../assets/xqlist.png" alt="">
                </dt>
                <dd>
                    <h2>
                        <span>5</span>
                        江歌案庭审
                    </h2>
                    <p>江歌案凶手陈世峰一审获刑20年，已提出上诉。</p>
                    <p>
                        资讯1.2万人参与
                    </p>
                </dd>
            </dl>
        </div>
        <div v-if="t==2">校园校园校园校园校园校园校园校园校园校园校园校园校园</div>
        <div v-if="t==3">资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯资讯</div>
        <div v-if="t==4">财经财经财经财经财经财经财经财经财经财经财经财经财经</div>
        <div v-if="t==5">科技科技科技科技科技科技科技科技科技科技科技科技科技</div>
        <div v-if="t==6">生活生活生活生活生活生活生活生活生活生活生活生活生活</div>
        
    </div>
</template>

<script>
export default {
  name: "xqlist",
  data() {
    return {
      t: 1,
      arr: ["最新", "热门", "校园", "资讯", "财经", "科技", "生活"]
    };
  },
  methods: {
        btn(){
            this.$router.back()
        }
    }
};
</script>

<style lang='less'>
.xqlist {
    button{
        padding: 0 0.133333rem;
    }
  h1 {
    text-align: center;
    font-size: 0.533333rem;
    line-height: 1.2rem;
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
  .dl{
      display: flex;
      margin-top: 0.133333rem;
      dd{
          margin-left: 0.133333rem;
          h2{
              font-size: 0.426667rem;
              line-height: 0.8rem;
              font-weight: bold;
              span{
                  display: inline-block;
                  padding: 0 0.133333rem;
                  background: hotpink;
                  border-radius: 50%;
              }
          }
          p{
              color: #ccc;
              line-height: 0.6rem
          }
      }

  }
}
</style>
