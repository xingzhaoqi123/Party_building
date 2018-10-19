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
  interaction: () => import("../views/interaction"),
  info: () => import("../views/info"),
  score: () => import("../views/score"),
  scoredetail: () => import("../views/scoredetail"),
  uppass: () => import("../views/uppass"),
  pay:()=>import('../views/pay'),
  findorg:()=>import('../views/findorg')
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
    },
    {
      path: "/info",
      name: "info",
      meta: {
        name: "个人信息",
        requireAuth: true
      },
      component: components.info
    },
    {
      path: "/updateInfo",
      name: "updateInfo",
      meta: {
        name: "修改个人信息",
        requireAuth: true
      },
      component: components.info
    },
    {
      path: "/score",
      name: "score",
      meta: {
        name: "个人量化积分",
        requireAuth: true
      },
      component: components.score
    },
    {
      path: "/scoredetail",
      name: "scoredetail",
      meta: {
        requireAuth: true,
        name: "积分明细"
      },
      component: components.scoredetail
    },
    {
      path: "/uppass",
      name: "uppass",
      meta: {
        name: "修改密码",
        requireAuth: true
      },
      component: components.uppass
    },{
      path:'/pay',
      name:'pay',
      meta:{
        name:'缴纳党费',
        requireAuth: true
      },
      component:components.pay
    },
    {
      path:'/findorg',
      name:'findorg',
      meta:{
        name:'流动党员找组织',
        requireAuth: true
      },
      component:components.findorg
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
  } else {
    next();
  }
});
export default router;
