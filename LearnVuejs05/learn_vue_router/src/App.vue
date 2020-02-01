<template>
  <div id="app">
    <!--
    to属性: 跳转到指定的url pattern中。
    tag属性: router-link的渲染样式，默认为a（超链接）。
    replace属性: 禁止路由跳转后通过浏览器的后腿前进切换路由（原理是通过 history.replaceState()）实现跳转。
     -->
    <router-link replace tag="button" to="/home">首页</router-link>
    <router-link replace tag="button" to="/about">关于</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "App"
  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
