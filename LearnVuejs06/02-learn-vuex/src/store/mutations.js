import {INCREMENT} from "./mutation-types";
import Vue from "vue";

export default {
  //[INCREMENT]是js的固定写法，是指方法名称使用变量来定义。
  [INCREMENT](state) {
    state.counter++;
  },
  decrement(state) {
    state.counter--;
  },
  updateInfo(state) {
    // 对于还未初始化的新字段，没法通过响应式的方法传递给组件。
    // 可以通过Vue.set方法增加属性，并响应式通知到各个组件中。
    // state.info['address'] = 'Los Angeles';
    Vue.set(state.info, 'address', 'Los Angeles');

    // 单纯的调用原生方法删除字段没有办法做到响应式。
    // 可以通过Vue.delete方法删除属性，并响应式通知到各个组件中。
    // delete state.info.age;
    Vue.delete(state.info, 'age');
  }
}