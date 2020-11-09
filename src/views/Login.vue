<template>
   <!-- 登录 -->
  <div class="reg">
    <!-- logo图 -->
    <img src="" alt="" />
    <!-- 引入vant模板 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"/>

      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"/>
      <div style="margin: 16px">

      
        <van-button round block type="info" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
    <!-- ：to=“” 跳转至相应的页面-->
    <router-link :to="{name: 'Reg'}">已注册>请登录</router-link>
  </div>
</template>
  
<script>
// import { Notify } from 'vant' 登录页不需要判断密码一致性
export default {
   data(){
     return{
       username:'',
       passworrd:'',
     }
   } ,
  methods:{
    onSubmit(){
      
    }
  }
}
</script>

<style scoped>
.reg{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>