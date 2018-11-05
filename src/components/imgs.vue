<template>
    <div class="box">
        <button @click="btn">返回上一级页面</button>
        <div class="p">
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
            <p>其实这里应该有个视频的</p>
        </div>
        
    </div>
</template>

<script>
export default {
  methods: {
    btn() {
      this.$router.back();
    }
  }
};
</script>

<style lang='less'>
    .p{
        p{
            line-height: 0.466667rem;
        }
    }
</style>
