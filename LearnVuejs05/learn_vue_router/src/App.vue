<template>
  <div id="app">
    <!--
    to属性: 跳转到指定的url pattern中。
    tag属性: router-link的渲染样式，默认为a（超链接）。
    replace属性: 禁止路由跳转后通过浏览器的后腿前进切换路由（原理是通过 history.replaceState()）实现跳转。
     -->
    <router-link replace to="/home">首页</router-link>
    <router-link replace to="/about">关于</router-link>
    <router-link :to="'/user/'+userId" replace>用户</router-link>
    <router-link :to="{path: '/profile', query: {
      name: 'Dwarfeng',
      age: '18',
      height: 1.83
    }}" replace>档案
    </router-link>
    <hr>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <hr>
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {
        userId: "zhangsan",
      };
    },
    methods: {
      homeClick: function () {
        this.$router.push("/home")
      },
      aboutClick: function () {
        this.$router.push("/about")
      },
      userClick: function () {
        this.$router.push("/user/" + this.userId);
      },
      profileClick: function () {
        this.$router.push({
          path: "/profile",
          query: {
            name: "Dwarfeng",
            age: '18',
            height: 1.83
          }
        })
      }
    }
  }
</script>

<style>
  .router-link-active {
    color: red;
  }
</style>
