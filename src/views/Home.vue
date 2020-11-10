<template>
  <div class="home">
    <!-- 头部 -->
    <header>
      <div class="header_left">
        <p style="color: #70f3ff">W</p>
        <p style="color: #2edfa3">L</p>
        <p style="color: #cca4e3">B</p>
        <p style="color: #e4c6d0">J</p>
      </div>

      <div class="Inp">
        <van-icon name="search" class="icon" />
        <input class="input" type="text" placeholder="瞄准？" />
        <p>搜索</p>
      </div>

      <div class="block">
        <el-avatar
          :size="30"
          :src="circleUrl"
          :to="{ name: 'User' }"
        ></el-avatar>
      </div>
    </header>

    <!-- 中间部分的展示 -->
    <section>
      <!-- 轮播 -->
      <div class="banner">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="item in Mv" :key="item.id">
            <img :src="item.coverImage" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 广告 -->
      <div class="Guanggao">
        <van-notice-bar class="guang" left-icon="volume-o" :scrollable="false">
          <van-swipe
            vertical
            class="notice-swipe"
            :autoplay="3000"
            :show-indicators="false"
          >
            <van-swipe-item style="color: #ff2121"
              >我们是国家的主人，应该处处为国家着想。</van-swipe-item
            >
            <van-swipe-item style="color: #884898"
              >自己活着,就是为了使别人过得更美好。</van-swipe-item
            >
            <van-swipe-item style="color: #1bd1a5"
              >愿你观影愉快！！！！！！</van-swipe-item
            >
          </van-swipe>
        </van-notice-bar>
      </div>
      <!-- 列表 -->
      <div class="List">
        <!--  -->
        <div class="List_one">
          <div class="List_one_1">
            <h3>热播电影</h3>
            <router-link :to="{ name: 'Mv' }">
              <div class="Gd">
                查看更多<span class="el-icon-d-arrow-right"></span>
              </div>
            </router-link>
          </div>
          <div class="dianying">
            <div
              class="Dy"
              v-for="item in Mv"
              :key="item.id"
              @click="go(item.id)"
            >
              <img :src="item.coverImage | dalImg" />
              <h4>{{ item.name }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="List_one">
          <div class="List_one_1">
            <h3>热播动漫</h3>
            <router-link :to="{ name: 'Anime' }">
              <div class="Gd">
                查看更多<span class="el-icon-d-arrow-right"></span>
              </div>
            </router-link>
          </div>
          <div class="dianying">
            <div
              class="Dy"
              v-for="item in Anime"
              :key="item.id"
              @click="go(item.id)"
            >
              <img :src="item.coverImage | dalImg" />
              <h4>{{ item.name }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="List_one">
          <div class="List_one_1">
            <h3>热播电视剧</h3>
            <router-link :to="{ name: 'Tv' }">
              <div class="Gd">
                查看更多<span class="el-icon-d-arrow-right"></span>
              </div>
            </router-link>
          </div>
          <div class="dianying">
            <div
              class="Dy"
              v-for="item in Tv"
              :key="item.id"
              @click="go(item.id)"
            >
              <img :src="item.coverImage | dalImg" />
              <h4>{{ item.name }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="List_one">
          <div class="List_one_1">
            <h3>综艺</h3>
            <router-link :to="{ name: 'Arts' }">
              <div class="Gd">
                查看更多<span class="el-icon-d-arrow-right"></span>
              </div>
            </router-link>
          </div>
          <div class="dianying">
            <div
              class="Dy"
              v-for="item in Arts"
              :key="item.id"
              @click="go(item.id)"
            >
              <img :src="item.coverImage | dalImg" />
              <h4>{{ item.name.substr(item.name, 9) }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="List_one">
          <div class="List_one_1">
            <h3>纪录片</h3>
            <router-link :to="{ name: 'Jl' }">
              <div class="Gd">
                查看更多<span class="el-icon-d-arrow-right"></span>
              </div>
            </router-link>
          </div>
          <div class="dianying">
            <div
              class="Dy"
              v-for="item in Jl"
              :key="item.id"
              @click="go(item.id)"
            >
              <img :src="item.coverImage | dalImg" />
              <h4>{{ item.name.substr(item.name, 9) }}</h4>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 大结束标签 -->
  </div>
</template>

<script>
// @ is an alias to /src
import { AllClasstify } from "@/services/categories";

export default {
  name: "Home",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      value: "",
      banner: [
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1565889135,3937952124&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3214997018,3874142819&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=147680031,2968660845&fm=26&gp=0.jpg",
        "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1982976409,4170210720&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1974636853,585963635&fm=26&gp=0.jpg",
      ],
      Mv: [],
      Anime: [],
      Tv: [],
      Arts: [],
      Jl: [],
    };
  },
  async created() {
    /* 电影 */
    const res1 = await AllClasstify({ category: 1 });
    console.log(res1);
    this.Mv = res1.list;
    /* 动漫 */
    const res2 = await AllClasstify({ category: 2 });
    this.Anime = res2.list;
    /* 电视剧 */
    const res3 = await AllClasstify({ category: 3 });
    this.Tv = res3.list;
    /* 综艺 */
    const res4 = await AllClasstify({ category: 4 });
    this.Arts = res4.list;
    /* 纪录片 */
    const res5 = await AllClasstify({ category: 5 });
    this.Jl = res5.list;
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
  components: {},
};
</script>
<style scoped>
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
p,
h1,
h3,
h4 {
  margin: 0;
  padding: 0;
}
.home {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
}
header {
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.header_left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15%;
}
.header_left p {
  font-weight: 600;
  font-size: 1.3rem;
}
header .Inp {
  height: 2rem;
  width: 60%;
  border: orangered 1px solid;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  margin-top: 0.35rem;
}
.Inp .input {
  width: 9rem;
  display: inline-block;
  font-size: 1rem;
  text-indent: 1rem;
  border: none;
  outline: none;
}
.Inp .icon {
  font-size: 1.5rem;
  text-indent: 0.3rem;
  font-weight: 700;
  color: gray;
}
.Inp p {
  width: 3rem;
  height: 2rem;
  color: #ffffff;
  font-weight: 500;
  text-align: center;
  line-height: 2rem;
  border-radius: 0 2rem 2rem 0;
  background: red;
  margin-top: 0.5px;
}
header .block {
  margin-top: 0.4rem;
}

/* 列表 */
section {
  flex: 1;
  overflow: auto;
}
/* 轮播样式 */
.my-swipe .van-swipe-item img {
  width: 100%;
  height: 10rem;
}
/* 广告 */
.Guanggao .notice-swipe {
  height: 40px;
  line-height: 40px;
}
.Guanggao .guang {
  background: #f0fcff;
  font-size: 1rem;
  font-weight: 700;
}

/* 热播 */
.List_one_1 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.8rem;
  margin-top: 1rem;
}
.dianying {
  height: 14rem;
  /* width: 1000px; */
  display: flex;
  align-items: center;
  overflow-x: auto;
}
.Dy {
  width: 7.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin: 0 0.14rem;

  flex-shrink: 0;
}
.Dy img {
  width: 100%;
}
.Dy h4 {
  font-size: 0.8rem;
}
.Dy p {
  font-size: 0.8rem;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
