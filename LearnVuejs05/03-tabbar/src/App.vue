<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home">
        <img alt="" slot="item_icon" src="./assets/img/tabbar/home.png">
        <img alt="" slot="item_icon_active" src="./assets/img/tabbar/home_active.png">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img alt="" slot="item_icon" src="./assets/img/tabbar/category.png">
        <img alt="" slot="item_icon_active" src="./assets/img/tabbar/category_active.png">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img alt="" slot="item_icon" src="./assets/img/tabbar/shopcart.png">
        <img alt="" slot="item_icon_active" src="./assets/img/tabbar/shopcart_active.png">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img alt="" slot="item_icon" src="./assets/img/tabbar/profile.png">
        <img alt="" slot="item_icon_active" src="./assets/img/tabbar/profile_active.png">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: "App",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>