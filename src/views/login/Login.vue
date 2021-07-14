<template>
    <div class="wrapper">
        <img class="wrapper_img" src="http://www.dell-lee.com/imgs/vue3/user.png">
        <div class="wrapper_input">
            <input class="wrapper_input_content" type="text" placeholder="请输入手机号">
        </div>
        <div class="wrapper_input">
            <input class="wrapper_input_content" placeholder="请输入密码" type="text">
        </div>
        <div class="wrapper_login-button" @click="handleLogin">登录</div>
        <div class="wrapper_login-link">立即注册</div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default{
    name:'Login',
    setup(){
        const router = useRouter();
        const handleLogin = () => {
            localStorage.isLogin = true;
            router.push({name:'Home'});
        }
        return { handleLogin }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
.wrapper{
    position:absolute;
    top:50%;
    left:0;
    right:0;
    transform:translateY(-50%);
    &_img{
      width:.66rem;
      height:.66rem;
      display: block;
      margin:0 auto .4rem auto;
    }
    &_input{
        height:.48rem;
        margin:0 .4rem .16rem .4rem;
        background:#f9f9f9;
        border:1px solid rgba(0,0,0,.1);
        border-radius:6px;
        padding:0 .16rem;
        box-sizing:border-box;
        &_content{
            width:100%;
            border:none;
            outline:none;
            line-height:.48rem;
            background:none;
            font-size:.16rem;
            color:$content-notice-fontcolor;
            &::placeholder{
                color:$content-notice-fontcolor;               
            }
        }
    }
    &_login-button{
        background:#0091ff;
        border-radius:.04rem;
        color:#fff;
        margin:.32rem .4rem .16rem .4rem;
        height:.48rem;
        line-height:.48rem;
        font-size:.16rem;
        text-align: center;
    }
    &_login-link{
        color:$content-notice-fontcolor;
        //line-height:.48rem;
        font-size:.14rem;
        text-align: center;
    }
}
</style>
