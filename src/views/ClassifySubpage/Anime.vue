<template>
  <div class="Anime">
    <div class="dabox" v-for="item in Anime" :key="item.id">
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
  </div>
</template>

<script>
import { AllClasstify } from "@/services/categories";
export default {
  name: "Anime",
  data() {
    return {
      value: 4,
      Anime: [],
    };
  },
  async created() {
    const res = await AllClasstify({ category: 2 });
    console.log(res.data.list);
    this.Anime = res.data.list;
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