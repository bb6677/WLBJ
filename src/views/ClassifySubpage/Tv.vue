<template>
  <div class="Tv">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="dabox" v-for="item in Tv" :key="item.id">
        <div class="box_left">
          <img :src="item.coverImage" />
        </div>
        <div class="box_right">
          <h3>{{ item.name }}</h3>
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
  name: "Tv",
  data() {
    return {
      value: 2.5,
      Tv: [],
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
    async loadData() {
      this.loading = true;
      const res = await AllClasstify({ category: 3, page: this.page });
      console.log(res.data.list);
      this.page = res.data.page;
      if (this.page < 6) {
        this.page++;
      } else {
        this.finished = true;
      }
      this.Tv = [...this.Tv, ...res.data.list];
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
  margin-top: 1rem;
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