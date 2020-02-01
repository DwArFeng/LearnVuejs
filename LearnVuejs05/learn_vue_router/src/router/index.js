import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home'
import About from '../components/About'

//1. 通过 Vue.use(插件)，安装插件。
Vue.use(VueRouter);

//2. 创建 routes 数组，存放路由信息。
const routes = [
  {
    //重定向，将默认路径重定向到/home中。
    path: '',
    redirect: '/home',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];

//3. 创建 router 对象。
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

//4. 导出 router。
export default router
