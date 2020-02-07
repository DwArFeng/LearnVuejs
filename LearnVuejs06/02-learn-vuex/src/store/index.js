import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
import moduleB from "./modules/moduleB";

Vue.use(Vuex);

const state = {
  counter: 0,
  info: {
    name: 'Kobe',
    age: 40,
    height: 1.98
  }
};

export default new Vuex.Store({
  state,
  //mutations定义所有的同步操作。
  mutations,
  //actions中定义所有的异步操作。
  actions,
  //模块用来给需要分离的变量提供单独的空间。
  modules: {
    moduleA,
    moduleB
  },
  getters
})
