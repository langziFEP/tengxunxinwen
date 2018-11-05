<template>
    <div class="denglu">
        <button @click="btn">返回上一级页面</button>
        <div class="dlk">
            <form action="">
                <p><label for="">账号：</label><input type="text"></p>
                <p><label for="">密码：</label><input type="text"></p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
     methods: {
        btn(){
            this.$router.back()
        }
    }
};
</script>

<style lang="less">
    .denglu{
        .dlk{
            position: absolute;
            top: 30%;
            left: 30%;
            p{
                line-height: 1.333333rem
            }
        }
    }
</style>
