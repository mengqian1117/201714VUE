
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//导入轮播插件
import Swiper from "vue-awesome-swiper"
//导入轮播样式
import 'swiper/dist/css/swiper.css'
//Vue use轮播插件
Vue.use(Swiper);
new Vue({
  el: '#app',
  router,
  render:(h)=>h(App)
});
