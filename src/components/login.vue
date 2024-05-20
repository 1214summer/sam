<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { RouterLink,useRouter } from 'vue-router';
let account = ref('');
let passw = ref('');
let msg = ref('');
let router = useRouter()
let submit = () => {
    axios({
        method: 'post',
        url: 'http://127.0.0.1:3000/user/login',
        data: {
            username:account.value,
            password:passw.value
        }
    }).then((res) =>{
        console.log(res.data.code);
        console.log(router);
        if(res.data.code==1){
            router.push('/index')
        }
        else {
            msg.value = '账号或者密码错误'
            setTimeout(()=>{
                msg.value = ''
            },1000)
        }
    })
}
</script>


<template>
    <div class="login">
        <div class="wraper">
            <span>账号</span>
            <input v-model="account" type="text" name="account" id="account" maxlength="10" minlength="10"
                autocomplete="false">
        </div>
        <div class="wraper">
            <span>密码</span>
            <input v-model="passw" type="password" name="passw" id="passw" minlength="8" maxlength="16">
        </div>
        <div class="message">{{ msg }}</div>
        <div class=" register">
            <span id="register">
                <RouterLink :to="{
                    path: '/register'
                }">注册</RouterLink>
            </span>
        </div>
        <button id="submit" @click="submit">登录</button>
    </div>
</template>

<style scoped>
.wraper {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: 26px;
    max-height: 32px;
    width: 100%;
    min-width: inherit;
    margin-bottom: 14px;
    background-color:transparent;

}

.wraper:nth-child(4) {
    /* background-color: red; */
    justify-content: end;
}

.wraper span {
    font-size: 16px;
    width: 55px;
    height: 25px;
    text-align: center;

    background-color: #3c3c41;
    border-radius: 10px;
    color:white
}

.wraper input {
    width: 85%;
    min-width: 70%;
    outline: none;
    /* border-radius: 10px; */
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid #acb0b7;
    color: rgb(91 101 122);
    padding-bottom: 5px;
}

.message {
    font-size: 13px;
    color: rgba(250, 44, 25, 1);

}

a {
    text-decoration: none;
    font-size: 16px;
    color:rgb(77, 77, 88);
    background-color: transparent;
    margin-left: 210px;

}

#submit {
    width: 100%;
    min-width: 100%;
    margin-top: 10px;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
    color: #ffffff;
    background-color: #3c3c41;
    /* border: 1px solid #c593dc; */
}
</style>