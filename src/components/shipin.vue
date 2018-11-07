<template>
<div class="shipin">
    <ul class="spul">
        <li v-for="(v, i) in arr" :key="i"  @click="t=i" :class="{active:t==i}">{{v}}</li>
    </ul>
    <div v-if="t==0" class="tj">
        <dl>
            <dt>
                <img src="../assets/shipin.png" alt="" @click="img">
            </dt>
            <dd>
                <p>
                    <span>唱出心声</span>
                    <span>❤140</span>
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="../assets/shipin.png" alt="" @click="img">
            </dt>
            <dd>
                <p>
                    <span>唱出心声</span>
                    <span>❤140</span>
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="../assets/shipin.png" alt="" @click="img">
            </dt>
            <dd>
                <p>
                    <span>唱出心声</span>
                    <span>❤140</span>
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="../assets/shipin.png" alt="" @click="img">
            </dt>
            <dd>
                <p>
                    <span>唱出心声</span>
                    <span>❤140</span>
                </p>
            </dd>
        </dl>
        <dl>
            <dt>
                <img src="../assets/shipin.png" alt="" @click="img">
            </dt>
            <dd>
                <p>
                    <span>唱出心声</span>
                    <span>❤140</span>
                </p>
            </dd>
        </dl>
    </div>
    <div v-if="t==1">直播直播直播直播直播直播直播直播直播</div>
    <div v-if="t==2">搞笑搞笑搞笑搞笑搞笑搞笑搞笑搞笑搞笑</div>
    <div v-if="t==3">社会社会社会社会社会社会社会社会社会</div>
    <div v-if="t==4">轨迹轨迹轨迹轨迹轨迹轨迹轨迹轨迹轨迹</div>
    <div v-if="t==5">生活生活生活生活生活生活生活生活生活</div>
    <div v-if="t==6">才艺才艺才艺才艺才艺才艺才艺才艺才艺</div>
</div>
</template>

<script>
export default {
  name: "shipin",
  data() {
    return {
      t: 0,
      arr: ["推荐", "直播", "搞笑", "社会", "轨迹", "生活", "才艺"]
    };
  },
  methods: {
    img() {
      this.$router.push("/imgs");
    }
  }
};
</script>

<style lang='less'>
.shipin {
  .spul {
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
  .tj {
    dl {
      dt {
        img {
          width: 100%;
        }
      }
      dd {
        p {
          line-height: 1.466667rem;
          display: flex;
          justify-content: space-between;
          span {
            padding: 0 0.266667rem;
          }
        }
      }
    }
  }
}
</style>
