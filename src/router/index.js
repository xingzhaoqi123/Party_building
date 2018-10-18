import Vue from "vue";
import Router from "vue-router";
import store from "../store";
Vue.use(Router);

const components = {
  home: () => import("../views/home/home"),
  login: () => import("../views/login"),
  inform: () => import("../views/inform"),
  my_party: () => import("../views/my_party"),
  newsDetail: () => import("../views/newsDetail"),
  newseye: () => import("../views/newseye"),
  life: () => import("../views/life"),
  anytimephoto: () => import("../views/anytimephoto"),
  today: () => import("../views/today"),
  interaction: () => import("../views/interaction")
};

if (sessionStorage.getItem("token")) {
  store.commit("SET_TOKEN", sessionStorage.getItem("token"));
}
const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",

      component: components.home
    },
    {
      path: "/login",
      meta: {
        name: "login"
      },
      component: components.login
    },
    {
      path: "/inform",
      meta: {
        name: "inform"
      },
      component: components.inform
    },
    {
      path: "/my_party",
      meta: {
        name: "my_party"
      },
      component: components.my_party
    },
    {
      path: "/newsDetail/:id",
      name: "newsDetail",
      component: components.newsDetail
    },
    {
      path: "/newseye",
      name: "newseye",
      component: components.newseye
    },
    {
      path: "/life",
      meta: {
        name: "掌上组织生活"
      },
      component: components.life
    },
    {
      path: "/study",
      name: "study",
      meta: {
        name: "政治学习"
      },
      component: components.newseye
    },
    {
      path: "/anytimestudy",
      name: "anytimestudy",
      meta: {
        name: "随时对地学"
      },
      component: components.newseye
    },
    {
      path: "/anytimephoto",
      name: "anytimephoto",
      meta: {
        name: "随时随地拍"
      },
      component: components.anytimephoto
    },
    {
      path: "/oneclick",
      name: "oneclick",
      component: components.newseye
    },
    {
      path: "/today",
      meta: {
        name: "党史上的今天"
      },
      component: components.today
    },
    {
      path: "/activity",
      name: "activity",
      component: components.newseye
    },
    {
      path: "/System",
      name: "System",
      component: components.newseye
    },
    {
      path: "/interaction",
      name: "interaction",
      meta: {
        name: "党员云互动",
        requireAuth: true
      },
      component: components.interaction
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
    }
  }else{
    next();
  }
});
export default router;
