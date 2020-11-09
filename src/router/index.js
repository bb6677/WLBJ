import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/classify",
    name: "Classify",
    component: () => import("../views/Classify.vue"),
    children: [
      {
        path: "/mv",
        name: "Mv",
        component: () => import("../views/ClassifySubpage/Mv.vue"),
      },
      {
        path: "/anime",
        name: "Anime",
        component: () => import("../views/ClassifySubpage/Anime.vue"),
      },
      {
        path: "/tv",
        name: "Tv",
        component: () => import("../views/ClassifySubpage/Tv.vue"),
      },
      {
        path: "/arts",
        name: "Arts",
        component: () => import("../views/ClassifySubpage/Arts.vue"),
      },
      {
        path: "/jl",
        name: "Jl",
        component: () => import("../views/ClassifySubpage/Jl.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
