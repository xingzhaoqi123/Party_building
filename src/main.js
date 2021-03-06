// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Mint from "mint-ui";
import 'mint-ui/lib/style.css'
import "lib-flexible";
import util from "./util/index";
import store from "./store";
Vue.use(Mint);
Vue.config.productionTip = false;
Vue.prototype.$axios = util.axios;


new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
