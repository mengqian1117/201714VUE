import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
let routes=[
  {path:"/login",component:()=>import("../components/Login.vue")},
  {
    path:"/home",
    component:()=>import("../components/Home.vue"),
    children:[
      {path:"/1-1",component:()=>import("../components/Basic/1-1.vue")}
    ]
  },
];
export default new VueRouter({routes});
