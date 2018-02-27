
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

//导入animate.css 插件 并使用
import Animate from "animate.css"
Vue.use(Animate);
// 导入图片懒加载的chajian 并使用
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2158979218,969345114&fm=200&gp=0.jpg',
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519734236550&di=5ca41d066a2782eae8e7f2f19cb420d0&imgtype=0&src=http%3A%2F%2Fwww.carmenor.com%2Fqqwebhimgs%2Fuploads%2Fbd4064715.jpg',
  attempt: 1
});
new Vue({
  el: '#app',
  router,
  render:(h)=>h(App)
});
