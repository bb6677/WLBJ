<template>
  <!-- <h1>xiangq</h1> -->

  <div>
    <van-row type="flex" justify="space-between" style="margin-top: 0.5rem;">
      <van-col
        @click="$router.back(-1)"
        span="6"
        left-arrow
        style="margin-left: 0.5rem"
        ><van-icon name="arrow-left"
      /></van-col>
      <van-col span="6">电影详情</van-col>
      <van-col span="6"></van-col>
    </van-row>

    <video
      style="width: 100%; margin-top: 1rem"
      controls
      autoplay
      :src="movie.playUrl"
    ></video>

    <!-- <h1>
      {{ movie.name }}
   
      <van-tag @click="buy(movie)" round type="primary">加入收藏</van-tag>
    </h1> -->

    <van-row type="flex" justify="space-between" style="margin-top: 2rem">
      <van-col span="18"
        ><a
          href=""
          style="
            margin-left: 1rem;
            font-size: 1.2rem;
            color: #000000;
            line-height: 1;
          "
          >{{ movie.name }}</a
        >
      </van-col>
      <!-- <van-col span="6">span: 6</van-col> -->
      <van-col span="6"
        ><van-icon
          @click="buy(movie)"
          :color="movie.isCollectioned ? 'red ' : '#000000'"
          size="2rem"
          name="like"
      /></van-col>
    </van-row>

    <div class="van-multi-ellipsis--l3" style="margin-top: 3rem">
      {{ movie.desc }}
    </div>
    <van-card v-for="item in collec" :key="item.id" />
    <!-- <p>{{ movie.desc }}</p> -->
  </div>
</template>

<script>
import { Toast } from "vant";
import { get } from "@/utils/request.js";
import { del } from "@/utils/request.js";
import { addDetailAPI, loadDetailAPI } from "@/services/detail.js";
import { isLogined } from "@/utils/tools.js";

export default {
  data() {
    return {
      movie: {
        // isCollectioned:true
      },
      // isCollectioned: false,
      collec: [],
    };
  },
  async created() {
    if (this.$route.query.id) {
      await get("/api/v1/movies/" + this.$route.query.id).then((res) => {
        this.movie = res;
      });
    }
    const res1 = await loadDetailAPI(); //获取收藏数据
    console.log(res1);
    res1.forEach((item) => {
      if (item.movie.id == this.$route.query.id) {
        this.movie.isCollectioned = true;
        return;
      }
    });
    console.log(this.isCollectioned);
    // this.collec = res1;
    // if (this.movie.id == this.item.movie.id) {
    //   this.movie.isCollectioned = true;
    // }

    // if(like.indexOf(this.$route.query.id) > -1){
    //   this.movie.isCollectioned = false; //颜色为黑
    // }else{
    //   this.movie.isCollectioned = true; //颜色为红
    // }
    console.log(this.movie);
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    async buy(movie) {
      if(!isLogined()){
        Toast.success("请先登录");

      }else{
         movie.isCollectioned = !movie.isCollectioned;

      // console.log(this.movie);
      // console.log("加入收藏成功");
      if (movie.isCollectioned) {
        await addDetailAPI(movie.id);
        Toast.success("加入收藏成功");

        console.log(movie);
      } else {
        await del("/api/v1/user/collections/" + movie.id);
        Toast.success("删除成功");
      }
      }


     
      // getToken();
      // if (!localStorage.getItem("token")) {
      //   Toast.fail("收藏失败请登录");
      // }
    
      // if(Status==401){
      //   Toast.fail("收藏失败请登录");
      // }
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
  },
};
</script>

<style scoped>
/* .van-icon-arrow-left {
  width: 100%;
} */
</style>
