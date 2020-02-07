<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#d81e06">
        <img alt="" slot="item_icon" src="@assets/img/tabbar/home.png">
        <img alt="" slot="item_icon_active" src="@assets/img/tabbar/home_active.png">
        <div slot="item_text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#d81e06">
        <img alt="" slot="item_icon" src="@assets/img/tabbar/category.png">
        <img alt="" slot="item_icon_active" src="@assets/img/tabbar/category_active.png">
        <div slot="item_text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="#d81e06">
        <img alt="" slot="item_icon" src="@assets/img/tabbar/shopcart.png">
        <img alt="" slot="item_icon_active" src="@assets/img/tabbar/shopcart_active.png">
        <div slot="item_text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="#d81e06">
        <img alt="" slot="item_icon" src="@assets/img/tabbar/profile.png">
        <img alt="" slot="item_icon_active" src="@assets/img/tabbar/profile_active.png">
        <div slot="item_text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>