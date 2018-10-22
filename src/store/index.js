import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: "",
    userinfo: {}
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
      sessionStorage.token = token;
    },
    DEL_TOKEN(state) {
      state.token = "";
      sessionStorage.removeItem("token");
      state.userinfo = {};
      sessionStorage.removeItem("userinfo");
    },
    GET_USERINFO(state, userinfo) {
      state.userinfo = userinfo;
      sessionStorage.userinfo = userinfo;
    }
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        setItem: (key, value) => sessionStorage.setItem(key, value),
        removeItem: key => sessionStorage.removeItem(key)
      }
    })
  ]
});
export default store;
