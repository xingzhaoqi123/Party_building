import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const components = {
  home: () => import("../views/home/home"),
  login: () => import("../views/login"),
  inform: () => import("../views/inform"),
  my_party: () => import("../views/my_party"),
  newsDetail: () => import("../views/newsDetail")
};
export default new Router({
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
      path: "/newsDetail",
      meta: {
        name: "随时随地学"
      },
      component: components.newsDetail
    }
  ]
});
