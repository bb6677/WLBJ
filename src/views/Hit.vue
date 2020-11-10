<template>
  <div class="Hit">
    <Swriper />

    <van-tabs style="position: static" v-model="activeName">
      <van-tab title="正在热播" name="a" :to="{ name: 'Re' }"></van-tab>
      <van-tab title="即将上映" name="b" :to="{ name: 'Release' }"></van-tab>
    </van-tabs>
    <router-view />
  </div>
</template>

<script>
import Swriper from "../components/Swripe";

export default {
  name: "Hit",
  data() {
    return {
      activeName: 0,
    };
  },
  components: {
    Swriper,
  },
};
</script>

<style>
html,
body,
.Hit {
  height: 100%;
  width: 100%;
}
.Hit {
  display: flex;
  flex-direction: column;
}
.Tabbar_top {
  height: 5rem;
  width: 100%;
  display: flex;
}
.left {
  height: 100%;
  width: 50%;
  text-align: center;
  line-height: 5rem;
}
.left:hover {
  border-bottom: red solid 3px;
}
.right {
  height: 100%;
  width: 50%;
  text-align: center;
  line-height: 5rem;
}
.right:hover {
  border-bottom: red solid 3px;
}
</style>