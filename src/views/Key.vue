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
    async onSubmit() {
      if (this.oldpassword != this.$route.query.pwd) {
        Notify({
          type: "danger",
          message: "与旧密码不一致",
        });
      } else {
        if (this.newpassword != this.repwd) {
          Notify({
            type: "warning",
            message: "两次输入的密码不一致",
          });
          return;
        }
        const u = await keyAPI({
          oldPassword: this.oldpassword,
          newPassword: this.newpassword,
        });
        if (u.code === 1) {
          Notify({
            type: "success",
            message: "修改成功",
          });
          localStorage.setItem("pwd", this.newPassword);
          this.$router.push({
            name: "User",
          });
        } else {
          Notify({
            type: "danger",
            message: "修改失败",
          });
        }
      }
    },
  },
};
</script>

<style scoped>
.van-form {
  margin-top: 1.5rem;
}
</style>