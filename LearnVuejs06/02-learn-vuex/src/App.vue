<template>
  <div id="app">
    <h2>---------------App内容----------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addClick">+</button>
    <button @click="subClick">-</button>
    <h2>---------------App内容: getters相关的信息----------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>---------------App内容: getters携带入口参数的相关的信息----------------</h2>
    <h2>{{$store.getters.powCounter(3)}}</h2>
    <h2>---------------App内容: info对象的内容是否是响应式的----------------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="infoClick">修改信息</button>
    <h2>---------------Foo内容----------------</h2>
    <foo></foo>
  </div>
</template>

<script>
  import Foo from "./components/Foo";
  import {INCREMENT} from "./store/mutation-types";

  export default {
    name: 'app',
    components: {
      Foo
    },
    methods: {
      addClick() {
        //commit是同步操作。
        this.$store.commit(INCREMENT);
      },
      subClick() {
        this.$store.commit('decrement');
      },
      infoClick() {
        //dispatch是异步操作。
        this.$store.dispatch('aUpdateInfo');
      }
    }
  }
</script>

<style>
</style>
