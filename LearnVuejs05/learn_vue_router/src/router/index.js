import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
};

//此处使用懒加载的方式加载组件。
const Home = () => import("../components/Home");
const About = () => import("../components/About");
const User = () => import("../components/User");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const Profile = () => import("../components/Profile");

//1. 通过 Vue.use(插件)，安装插件。
Vue.use(VueRouter);

//2. 创建 routes 数组，存放路由信息。
const routes = [
  {
    //重定向，将默认路径重定向到/home中。
    path: '',
    redirect: '/home',
    component: Home,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        //重定向，将默认路径重定向到/home/news中。
        path: '',
        redirect: 'news',
        component: Home,
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      },
    ],
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    }
  }
];

//3. 创建 router 对象。
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(function (to, from, next) {
  document.title = to.matched[0].meta.title;
  next();
});

//4. 导出 router。
export default router
