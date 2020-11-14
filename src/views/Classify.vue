<template>
  <div class="Classify">
    <!-- 头部 -->
    <div class="header" style="position: fixed; width: 100%; z-index: 1000">
      <van-tabs v-model="active">
        <van-tab route :to="{ name: 'Mv' }" title="电影"> </van-tab>
        <van-tab :to="{ name: 'Anime' }" title="动漫"></van-tab>
        <van-tab :to="{ name: 'Tv' }" title="电视剧"></van-tab>
        <van-tab :to="{ name: 'Arts' }" title="综艺"></van-tab>
        <van-tab :to="{ name: 'Jl' }" title="记录片"></van-tab>
      </van-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Classify",
  data() {
    return {
      active: 0,
    };
  },
};
</script>
