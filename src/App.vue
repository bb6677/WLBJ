<template>
  <div id="app">
    <router-view class="content" />
    <van-tabbar
      :fixed="false"
      v-model="active"
      active-color="#07c160"
      inactive-color="#000"
    >
      <van-tabbar-item :to="{ name: 'Home' }" icon="home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item :to="{ name: 'Classify' }" icon="apps-o"
        >影库</van-tabbar-item
      >
      <van-tabbar-item icon="video-o">详情</van-tabbar-item>
      <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
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
