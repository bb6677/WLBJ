<template>
  <div id="app">
    <router-view class="content" />
    <van-tabbar
      route
      :fixed="false"
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item :to="{ name: 'Home' }" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'Mv' }" icon="apps-o">影库</van-tabbar-item>
      <van-tabbar-item :to="{ name: 'Re' }" icon="video-o"
        >热映</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'User' }" icon="contact"
        >个人中心</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
  watch: {
    $route(to) {
      console.log(to);
      this.active = to.meta.index;
    },
  },
};
</script>
<style>
html,
body {
  height: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.content {
  flex: 1;
  overflow-y: auto;
}
</style>
