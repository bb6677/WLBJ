<template>
  <!-- <h1>xiangq</h1> -->

  <div>
    <router-link :to="{ name: 'Home' }">
      <van-nav-bar :fixed="false" title="电影详情" left-arrow>
        <template #right> </template> </van-nav-bar
    ></router-link>

    <video style="width:100%" controls autoplay :src="movie.playUrl"></video>

    <!-- <h1>
      {{ movie.name }}
   
      <van-tag @click="buy(movie)" round type="primary">加入收藏</van-tag>
    </h1> -->

    <van-row type="flex" justify="space-between" style="margin-top:2rem">
      <van-col span="12"
        ><a href="" style=" margin-left:1rem; font-size:2rem;color:#000000">{{
          movie.name
        }}</a>
      </van-col>
      <!-- <van-col span="6">span: 6</van-col> -->
      <van-col span="6"
        ><van-icon
          @click="buy(movie)"
          size="2rem"
          name="like"
      /></van-col>
    </van-row>

    <div class="van-multi-ellipsis--l3" style="margin-top:3rem">
      {{ movie.desc }}
    </div>
    <!-- <p>{{ movie.desc }}</p> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import { get } from "@/utils/request.js";
import { addDetailAPI } from "@/services/detail.js";

export default {
  data() {
    return {
      movie: {},
    };
  },
  async created() {
    if (this.$route.query.id) {
      await get("/api/v1/movies/" + this.$route.query.id).then((res) => {
        this.movie = res.data;
      });
    }

    console.log(this.movie);
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async buy(movie) {
      console.log("加入收藏成功");
      await addDetailAPI(movie.id);
      Toast.success("加入收藏成功");
    },
  },

  // watch: {
  //   async $route() {
  //     if (this.$route.query.id) {
  //       const res = await axios.get(
  //         "/api/v1/movies/:" +
  //           this.$route.query.id
  //       );
  //       console.log(res.data);
  //       this.movie = res.data.data.basic;
  //     }
  //   },
  // },
};
</script>

<style scoped>
</style>
