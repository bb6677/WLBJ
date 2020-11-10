<template>
  <div class="Re">
    <van-grid :border="false" :column-num="2">
      <van-grid-item
        class="Product"
        v-for="(item, index) in list"
        :key="index"
        @click="go(item.id)"
      >
        <img :src="item.coverImage" alt="" />
        <p>{{ item.name.substr(item.name, 7) }}</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
import { AllClasstify } from "@/services/categories";
export default {
  name: "Re",
  data() {
    return {
      list: [],
    };
  },
  async created() {
    const res = await AllClasstify({ category: 3 });
    console.log(res.list);
    this.list = res.list;
  },
  methods: {
    go(id) {
      this.$router.push({
        name: "Details",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.Product img {
  width: 100%;
}
</style>