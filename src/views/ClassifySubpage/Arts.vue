<template>
  <div class="Arts">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="dabox"
        v-for="item in Arts"
        :key="item.id"
        @click="go(item.id)"
      >
        <div class="box_left">
          <img :src="item.coverImage" />
        </div>
        <div class="box_right">
          <h3>{{ item.name.substr(item.name, 9) }}</h3>
          <van-rate
            class="XX"
            v-model="value"
            allow-half
            void-icon="star"
            void-color="#eee"
          />
          <p>
            <a href="">{{ item.desc }}</a>
          </p>
        </div>
      </div>
    </van-list>
  </div>
</template>

<script>
import { AllClasstify } from "@/services/categories";
export default {
  name: "Arts",
  data() {
    return {
      value: 4.5,
      Arts: [],
      loading: false,
      finished: false,
      page: 1,
    };
  },
  async created() {},
  methods: {
    onLoad() {
      this.loadData();
    },
    go(id) {
      this.$router.push({
        name: "Details",
        query: {
          id: id,
        },
      });
    },
    async loadData() {
      this.loading = true;
      const res = await AllClasstify({ category: 4, page: this.page });

      this.page = res.page;
      if (this.page < 6) {
        this.page++;
      } else {
        this.finished = true;
      }
      this.Arts = [...this.Arts, ...res.list];
      this.loading = false;
    },
  },
};
</script>

<style scoped>
h3,
p {
  padding: 0;
  margin: 0;
}
.Mv {
  display: flex;
  flex-direction: column;
}
.dabox {
  flex: 1;
  display: flex;
  margin-top: 1.5rem;
  height: 10rem;
}
.box_left {
  width: 8rem;
}
.box_left img {
  height: 100%;
}
.box_right {
  height: 10rem;
  overflow: hidden;
}
.box_right h3 {
  margin-left: 2rem;
  margin-top: 1rem;
}
.box_right .XX {
  margin-top: 1rem;
  margin-left: 2rem;
}
.box_right p {
  font-size: 0.7rem;
  text-indent: 1rem;
  margin-top: 1rem;
}
</style>
