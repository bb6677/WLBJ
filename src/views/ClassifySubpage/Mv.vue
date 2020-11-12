<template>
  <div class="Mv">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div
        class="dabox"
        v-for="item in Mv"
        :key="item.veiws"
        @click="go(item.id)"
      >
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
    <!-- <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop> -->
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
      scrollTop: "",
      goTopShow: false,
    };
  },

  methods: {
    onLoad() {
      console.log("开始加载数据");
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

    /* 加载数据 */

    async loadData() {
      this.loading = true;

      const res = await AllClasstify({ category: 1, page: this.page });
      // console.log(res.data);
      // console.log(res.data.list);
      // console.log(res.data.page);
      console.log(res.page);
      this.page = res.page;
      if (this.page < 6) {
        this.page++;
      } else {
        this.finished = true;
      }

      this.Mv = [...this.Mv, ...res.list];
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
  margin-top: 2.6rem;
  display: flex;
  flex-direction: column;
  /* position: relative; */
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
.goTop {
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
.goTop:hover .goTopIcon {
  color: rgba(51, 153, 255, 1);
}
.goTopIcon {
  font-size: 20px;
  color: rgba(51, 153, 255, 0.8);
}
</style>