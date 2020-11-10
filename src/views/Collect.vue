<template>
  <div class="collect">
    <div class="content">
      <van-row type="flex" justify="space-between" style="margin-top:.5rem">
        <van-col
          @click="$router.back(-1)"
          span="6"
          left-arrow
          style="margin-left:.5rem"
          ><van-icon name="arrow-left"
        /></van-col>
        <van-col span="6">我的收藏</van-col>
        <van-col span="6"></van-col>
      </van-row>
      <div class="item" v-for="movie in collects" :key="movie.id" style="margin-top:.5rem">
        <van-checkbox
          style="width:1.5rem"
          v-model="movie.checked"
        ></van-checkbox>
        <van-card
          style="flex:1"
          :desc="movie.product.desc"
          :title="movie.product.name"
          :thumb="movie.product.coverImage"
        >
          <!-- <template #footer>
          <van-button size="mini" @click="rm(movie)">删除</van-button> -->
          <!-- <van-button size="mini">按钮</van-button> -->
          <!-- </template> -->
        </van-card>
      </div>
    </div>

    <van-submit-bar button-text="删除" @submit="onSubmit(movie)">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <!-- <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template> -->
    </van-submit-bar>
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
  computed: {
    checked: {
      set(v) {
        this.collects.forEach((movie) => (movie.checked = v));
      },
      get() {
        return (
          this.collects.length ===
          this.collects.filter((movie) => movie.checked).length
        );
      },
    },
  },
  async created() {
    const res = await loadDetailAPI();
    console.log(res);
    this.collects = res.map((movie) => ({ ...movie, checked: false }));
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async onSubmit(movie) {
      await del("/api/v1/user/collections/ + this.id");
      Toast.success("删除成功");
    },
  },
};
</script>

<style scoped>
.cart{
  display: flex;
  flex-direction: column;
}
.cart .content{
  flex: 1;
  overflow: auto;
}
.item {
  display: flex;
  justify-content: center;
}
.van-icon-arrow-left {
  width: 100%;
}
</style>
