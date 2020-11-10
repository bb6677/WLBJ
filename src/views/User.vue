<template>
  <div class="app">
    <div class="user-img">
      <van-image
        round
        width="100px"
        height="100px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
    </div>

    <h1>{{ user.userName }}</h1>
    <div class="content" route>
      <van-cell to="/collect" title="我的收藏" is-link icon="like" />
      <van-cell
        :to="{ name: 'Key', query: { pwd: $route.query.pwd } }"
        title="修改密码"
        is-link
        icon="setting"
      />
      <van-cell to="/person" title="修改个人信息" is-link icon="setting" />
      <van-button type="danger" size="large" @click="goBack()"
        >退出登录</van-button
      >
    </div>
  </div>
</template>

<script>
import { userInfoAPI } from "@/services/auth";
import { removeToken } from "@/utils/tools";
export default {
  name: "User",
  data() {
    return {
      user: {},
    };
  },
  async created() {
    let res = await userInfoAPI();
    console.log(res);
    // res = res.data;
    this.user = res;
    console.log(res);
  },
  methods: {
    goBack() {
      this.$router.push({
        name: "Login",
      });
      removeToken();
    },
  },
};
</script>

<style scoped>
.van-cell {
  margin: 2rem auto;
  font-size: 1rem;
  padding-left: 1rem;
}
.user-img {
  margin: 2rem;
  display: flex;
  text-align: center;
}
.user-img h1 {
  margin-left: 1rem;
  line-height: 3rem;
}
</style>