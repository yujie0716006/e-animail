import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../components/home-page/home-page.vue";
import Variety from "../components/variety/variety.vue";
import ShopCart from "../components/shopCart/shopCart.vue";
import Center from "../components/center/center.vue";
import ZhuLiang from "../components/home-page/zhuliang.vue"
import YiLiao from "../components/home-page/yiliaobaojian.vue"
import LingShi from "../components/home-page/liingshiwanju.vue"
import RiChu from "../components/home-page/richuwaiyong.vue"
import MeiRong from "../components/home-page/meirongxiangbo.vue"
import Home from "../components/home-page/home.vue"
import Login from "../components/center/login.vue"

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes:[
    //这里的路由分别为首页，分类，购物车，我的路由
    {
      path:"/",
      redirect:'/homepage'
    },
    {
      path:"/homepage",
      component:HomePage,
      //上面是第一层路由，当点击首页的时候，会有下面的几个子路由
      children:[
        {
          path:"/homepage",
          redirect:"/homepage/home"
        },
        {
          path:"home",
          component:Home
        },
        {
          path:"zhuliang",
          component:ZhuLiang
        },
        {
          path:"yiliao",
          component:YiLiao
        },
        {
          path:"lingshi",
          component:LingShi
        },
        {
          path:"richu",
          component:RiChu
        },
        {
          path:"meirong",
          component:MeiRong
        },
      ]
    },
    {
      path:"/variety",
      component:Variety
    },
    {
      path:"/shopCart",
      component:ShopCart
    },
    {
      path:"/center",
      component:Center
    },
  //  这是显示在app上面的注册的路由，因为我要显示在app主页面上面，所以我要将他映射成主页上的路由
    {
      path:"/login",
      component:Login
    }
  ]
})
