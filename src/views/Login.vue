<template>
   <!-- 登录 -->
  <div class="reg">
    <p>请先登录</p>
    <!-- logo图 -->
    <img style="width:80%;" src="../assets/timg.jpg" alt="" />
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
    <router-link :to="{name: 'Reg'}">没有账号请>注册</router-link>
  </div>
</template>
  
<script>
import { Notify } from "vant";
import { loginAPI } from "@/services/auth";
import { setToken } from "@/utils/tools";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
    const res = await loginAPI(values);
      let u =res.data
      if (u.code === 1) {
        setToken(u.token);
        this.$router.push({
          name: "User",
        });
      } else {
        Notify({
          type: "warning",
          message: u.info,
        });
      }
    },
  },
};
</script>

<style scoped>
.reg{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(213, 236, 229);
  border-radius: 5px 5px;
}
p{
  color: rgb(26, 209, 148);
  font-size: 20px;
}
</style>