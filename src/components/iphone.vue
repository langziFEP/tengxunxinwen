<template>
    <div class="box">
        <button @click="btn">返回上一级页面</button>
        <img src="../assets/iphone.png" alt="" class="iponeimg">
    </div>
</template>

<script>
export default {
     methods: {
        btn(){
            this.$router.back()
        }
    }
}
</script>

<style lang='less'>
    .box{
        width: 100%;
        .iponeimg{
            width: 60%;
        }
    }
</style>
