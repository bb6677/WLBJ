<template>
  <div class="Swriper">
    <div class="top">
      <van-swipe autoplay="3000" style="height: 200px" vertical>
        <van-swipe-item v-for="image in images" :key="image.id">
          <img style="height: 200px" :src="image.coverImage" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { loadProductsFromServer } from "../services/products";

export default {
  name: "Swripe",
  data() {
    return {
      images: [],
    };
  },
  async created() {
    const res = await loadProductsFromServer();
    console.log(res.list);
    this.images = res.list;
  },
};
</script>

<style>
.top img {
  width: 100%;
  height: 100%;
}
</style>