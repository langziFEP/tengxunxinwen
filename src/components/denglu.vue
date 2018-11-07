<template>
    <div class="denglu">
        <button @click="btn">返回上一级页面</button>
        <div class="dlk">
            <form action="">
                <p><label for="">账号：</label><input type="text" id="ip1"></p>
                <p><label for="">密码：</label><input type="text" id="ip2"></p>
                <p><button @click="dl">登录</button><button>注册</button></p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
     methods: {
        btn(){
            this.$router.back();
        },
        dl(){
            if(ip1.value==''){
                alert('账号密码不能为空')
            }else{
                this.$router.push('/yaowen');
            }

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
                line-height: 1.333333rem;
                button{
                    padding: 0.1rem;
                    margin: 0.2rem;
                    cursor: pointer;
                }
            }
        }
    }
</style>
