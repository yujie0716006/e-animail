import Vue from 'vue'
import Router from 'vue-router'
import homePage from "../components/home-page/home-page.vue";

Vue.use(Router);

export default new Router({
  routes:[
    {
      path:"/homePage",
      component:homePage
    },
    {
      path:"/",
      redirect:homePage
    },
  ]
})
