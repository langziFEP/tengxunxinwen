<template>
    <div class="box">
        <button @click="btn">返回上一级页面</button>
        <p>
            <img src="../assets/iphone.png" alt="" class="iponeimg">
        </p>
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
            margin-top: 2.666667rem;
            width: 100%;
        }
    }
</style>
