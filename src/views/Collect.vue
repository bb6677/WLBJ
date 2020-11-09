<template>
  <div class="collect">
    <van-card
      v-for="movie in collects"
      :key="movie.id"
      :desc="movie.product.desc"
      :title="movie.product.name"
      :thumb="movie.product.coverImage"
    >
      <template #footer>
        <van-button size="mini" @click="rm(movie)">删除</van-button>
        <!-- <van-button size="mini">按钮</van-button> -->
      </template>
    </van-card>
  </div>
</template>

<script>
import { loadDetailAPI } from "@/services/detail.js";
import { del } from "@/utils/request.js";
import { Toast } from "vant";
export default {
  name: "Collect",
  data() {
    return {
      collects: [],
    };
  },
  async created() {
    const res = await loadDetailAPI();
    console.log(res);
    this.collects = res;
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async rm(movie) {
      await del("/api/v1/user/collections/ + this.id");
      Toast.success("删除成功");
    },
  },
};
</script>

<style></style>
