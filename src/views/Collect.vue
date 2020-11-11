<template>
  <div class="collect">
    <van-card
      v-for="item in collects"
      :key="item.id"
      :desc="item.movie.desc"
      :title="item.movie.name"
      :thumb="item.movie.coverImage"
    >
      <template #footer>
        <van-button size="mini" @click="rm(item.movie.id)">删除</van-button>
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
    async rm(item) {
      await del("/api/v1/user/collections/" + item);
      Toast.success("删除成功");
      location.reload();
    },
  },
};
</script>

<style scoped>
.van-cell {
  font-size: 1.5rem;
}
</style>
