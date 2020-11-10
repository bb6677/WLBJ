
import Vue from "vue";
import VueRouter from "vue-router";
import {
  isLogined
} from "../utils/tools"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
  component: () => import("../views/Home.vue"),
  
  },
  { //注册页面路由文件
    path: 'reg',
    name: 'Reg',
    component: () => import('../views/Reg.vue') //所在路径
  },
  { //登录页面路由文件
    path: 'login',
    name: 'Login',
    component: () => import('../views/Login.vue') //所在路径
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../views/Details.vue"),
  },
  {
    path: "/collect",
    name: "Collect",
    component: () => import("../views/Collect.vue"),
  },
  {
    path: "/classify",
    name: "Classify",
    component: () => import("../views/Classify.vue"),
   
    children: [{
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
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
    meta: {
      needLogin: true, //访问时需要登录才能访问
    },
  },
  {
    path: "/key",
    name: "Key",
    component: () => import("../views/Key.vue"),
    meta: {
      needLogin: true, //访问时需要登录才能访问
    },
  },
  {
    path: "/person",
    name: "Person",
    component: () => import("../views/Person.vue"),
    meta: {
      needLogin: true, //访问时需要登录才能访问
    },
  },
  {
    path: "/collect",
    name: "Collect",
    component: () => import("../views/Collect.vue"),
    meta: {
      needLogin: true, //访问时需要登录才能访问
    },
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({
        name: "Login"
      });
    }
  } else {
    next();
  }
});

export default router;