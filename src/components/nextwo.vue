<template>
    <div>
        <button @click="btn">返回上一级页面</button>
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
        这里是下一页
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

<style>
</style>
