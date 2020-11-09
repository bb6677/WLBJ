<template>
  <!-- 注册 -->
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

      <van-field
        v-model="repwd"
        type="password"
        name="repwd"
        label="确认密码"
        placeholder="重新输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"/>
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <!-- ：to=“” 跳转至相应的页面-->
    <router-link :to="{name: Login}">已注册>前往登录</router-link>
  </div>
</template>

<script>
import { Notify } from 'vant';//导入vant中的Notify
export default {
  data(){
    return{
      username:'',
      password:'',
      repwd:'',
    }
  },
  methods:{
    onSubmit(values){
      if(this.password!=this.repwd){ //判断两次密码是否一致 不一致返回问题
        Notify({
          type:'warning',
          message:'密码不一致,请重试',
        })
      }
      console.log(values);
    }
  }
};
</script>
// 样式属性
<style scoped>
.reg{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>>

