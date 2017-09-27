
import Vue from 'vue'
import App from './app.vue'
import router from './router'
//在入口文件中引入模拟的数据
import "./mock/mockjs";
import { Swipe, SwipeItem ,Button} from 'mint-ui';
import VueLazyload from 'vue-lazyload';
import load from "./components/image/load.gif"
import VueScroller from 'vue-scroller'


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

Vue.use(VueLazyload,{
  loading:load
});
Vue.use(VueScroller)

new Vue({
  el: '#app',
  router,
  render: h =>h(App)
});
