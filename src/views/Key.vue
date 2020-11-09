<template>
  <div class="app">
    <van-cell to="/user" icon="arrow-left" />
    <van-form @submit="onSubmit">
      <van-field
        v-model="oldpassword"
        name="oldPassword"
        type="password"
        label="原始密码"
        placeholder="原始密码"
        :rules="[{ required: true, message: '请填写原始密码' }]"
      />
      <van-field
        v-model="newpassword"
        type="password"
        name="newPassword"
        label="新密码"
        placeholder="新密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="repwd"
        type="password"
        name="repwd"
        label="确认密码"
        placeholder="请再一次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
// import { userInfoAPI } from "@/services/auth";
import { Notify } from "vant";
import { keyAPI } from "@/services/auth";
export default {
  data() {
    return {
      oldpassword: "",
      newpassword: "",
      repwd: "",
    };
  },
  methods: {
    onSubmit() {
      if (this.newpassword != this.repwd) {
        Notify({
          type: "warning",
          message: "两次输入的密码不一致",
        });
        return;
      }
      const u = keyAPI({
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
      });
      if (u.code === "success") {
        this.$router.push({
          name: "User",
          query: this.query.pwd,
        });
      } else {
        Notify({
          type: "warning",
          message: u.message,
        });
      }
      console.log(u);
    },
  },
};
</script>

<style scoped>
.van-form {
  margin-top: 1.5rem;
}
</style>