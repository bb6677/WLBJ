<template>
  <!-- 注册 -->
  <div class="reg">
    <p>注册专属账号</p>
    <!-- logo图 -->
    <!-- <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false"
      :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :rules="[{ required: true }]">
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload> -->
    <!-- <van-uploader :after-read="afterRead" " /> -->
    <!-- 引入vant模板 -->
    <van-form @submit="onSubmit">
      <van-uploader :after-read="afterRead" :preview-image="true" :max-count="1" v-model="fileList" class="pic" />

      <van-field v-model="username" name="userName" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />

      <van-field v-model="nickName" name="nickName" label="昵称" placeholder="昵称"
        :rules="[{ required: true, message: '请填写昵称' }]" />

      <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />

      <van-field v-model="repwd" type="password" name="repwd" label="确认密码" placeholder="重新输入密码"
        :rules="[{ required: true, message: '请重试' }]" />

      <van-field v-model="gender" name="gender" label="性别" placeholder="性别"
        :rules="[{ required: true,message: '请填写性别'}]" />

      <!-- <van-field name="radio" label="性别">
        <template #input>
          <van-radio-group v-model="radio" name="radio" direction="horizontal" :rules="[{ required: true }]">
            <van-radio name="1">男</van-radio>
            <van-radio name="2">女</van-radio>
          </van-radio-group>
        </template>
      </van-field> -->

      <van-button round block type="info" native-type="submit" style="margin: 10px 0">
        注册
      </van-button>
      <!-- </div> -->
    </van-form>
    <!-- ：to=“” 跳转至相应的页面-->
    <router-link style="margin: 10px 0" :to="{ name: 'Login' }">注册完成请前往>登录</router-link>
  </div>
</template>

<script>
import { Notify } from "vant";
import { Toast } from "vant";
import { regAPI, imgAPI } from "@/services/auth";
import { setToken } from "@/utils/tools";
export default {
  data () {
    return {
      username: "",
      repwd: "",
      nickName: "",
      password: "",
      gender: "",
      imageUrl: "",
      fileList: [],
    };
  },
  methods: {
    // async handleAvatarSuccess (res, files) {
    //   this.imageUrl = URL.createObjectURL(files.raw);
    //   console.log("地址：" + this.imageUrl);
    //   console.log(files);
    //   const data = new FormData();
    //   console.log(data)
    //   data.append("file", files.raw);
    //   console.log(data)
    //   const httpImg = await imgAPI(data);
    //   console.log(httpImg)
    //   this.imageUrl = 'http://localhost:1337' + httpImg.fileName.split(".tmp")[1]
    //   console.log(httpImg.fileName.split(".tmp")[1]);
    // },
    // beforeAvatarUpload (file) {
    //   const isJPG = file.type === "image/jpeg";
    //   const isLt2M = file.size / 1024 / 1024 < 2;

    //   if (!isJPG) {
    //     this.$message.error("上传头像图片只能是 JPG 格式!");
    //   }
    //   if (!isLt2M) {
    //     this.$message.error("上传头像图片大小不能超过 2MB!");
    //   }
    //   return isJPG && isLt2M;
    // },
    async afterRead (files) {

      // 此时可以自行将文件上传至服务器
      console.log(files);
      const data = new FormData();
      data.append("file", files.file);
      const httpImg = await imgAPI(data);
      console.log(httpImg.fileName.split(".tmp")[1]);
      this.imageUrl = httpImg.fileName.split(".tmp")[1];
    },
    async onSubmit (values) {
      if (this.password != this.repwd) {
        Notify({
          type: "warning",
          message: "两次输入的密码不一致",
        });
        return;
      }
      console.log(values);
      const u = await regAPI(values);
      // let u =res.data
      if (u.code === 1) {
        setToken(u.token);
        Toast.success('注册成功');
        setTimeout(() => {
          this.$router.push({
            name: "Login",
          });
        }, 2000)

      } else {
        Notify({
          type: "warning",
          message: u.info,
        });
      }
      console.log(u);
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
p {
  color: rgb(26, 209, 148);
  font-size: 20px;
}
/* .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
} */
.pic {
  display: flex;
  justify-content: center;
}
</style>

