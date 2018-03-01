import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
let routes=[
  {path:"/login",component:()=>import("../components/Login.vue")},
];
export default new VueRouter({routes});
