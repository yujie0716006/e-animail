
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import { Swipe, SwipeItem ,Button} from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
new Vue({
  el: '#app',
  router,
  render: h =>h(App)
});
