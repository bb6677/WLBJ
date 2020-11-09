<template>
  <div class="Mv">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="dabox" v-for="item in Mv" :key="item.veiws">
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
    <!-- <div class="backTop" @click="BackTop">
      <van-icon name="back-top" /> -->
    <!-- </div> -->
  </div>
</template>

<script>
import { AllClasstify } from "@/services/categories";
export default {
  name: "Mv",
  data() {
    return {
      value: 2.5,
      Mv: [],
      loading: false,
      finished: false,
      page: 1,
      // scrolltop: 0,
      // btnflag: flase,
    };
  },

  // async created() {},
  mounted() {
    window.onscroll = this.scrollToTop;
  },
  methods: {
    onLoad() {
      console.log("开始加载数据");
      this.loadData();
    },

    /* 加载数据 */

    async loadData() {
      this.loading = true;

      const res = await AllClasstify({ category: 1, page: this.page });
      // console.log(res.data);
      // console.log(res.data.list);
      // console.log(res.data.page);
      this.page = res.data.page;
      if (this.page < 6) {
        this.page++;
      } else {
        this.finished = true;
      }

      this.Mv = [...this.Mv, ...res.data.list];
      this.loading = false;
    },

    scrollToTop() {
      console.log(document.documentElement.scrollTop);
      console.log(111);
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
  /* position: relative; */
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
.backTop {
  width: 3rem;
  height: 3rem;
  background: cornflowerblue;
  border-radius: 50%;
  position: fixed;
  top: 20rem;
  right: 2rem;
  text-align: center;
  line-height: 3rem;
}
</style>