<template>
  <!-- 注册 -->
  <div class="reg">
    <p>注册专属账号</p>
    <!-- logo图 -->
    <img style="width:80%;" src="../assets/timg.jpg" alt="" />
    <!-- 引入vant模板 -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- <div style="margin: 16px"> -->
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
  
      <!-- <van-field
        v-model="repwd"
        type="password"
        name="repwd"
        label="确认密码"
        placeholder="重新输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"/> -->

      <van-button round block type="info" native-type="submit">
        注册
      </van-button>
      <!-- </div> -->
    </van-form>
    <!-- ：to=“” 跳转至相应的页面-->
    <router-link :to="{ name: 'Login' }">注册完成请前往>登录</router-link>
  </div>
</template>

<script>
import { Notify } from "vant";
import { regAPI } from "@/services/auth";
import { setToken } from "@/utils/tools";
export default {
  data() {
    return {
      username: "",
      // repwd: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      // if (this.password != this.repwd) {
      //   Notify({
      //     type: "warning",
      //     message: "两次输入的密码不一致",
      //   });
      //   return;
      // }
      // console.log(values);
      const u = await regAPI(values);
      if (u.code === 1) {
        setToken(u.token);
        this.$router.push({
          name: "Home",
        });
      } else {
        
        Notify({
          type: "warning",
          message: u.info,
        });
      }
      // console.log(u);
    },
  },
};
</script>

<style scoped>
.reg {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(213, 236, 229);
}
p{
  color: rgb(26, 209, 148);
  font-size: 20px;
}
</style>

