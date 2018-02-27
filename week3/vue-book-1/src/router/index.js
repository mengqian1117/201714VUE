import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter);
let routes=[ //meta 路由元信息
  {path:"/",redirect:"/home"},
  {
    path:"/home",
    component:()=>import("../components/Home.vue"),
    meta:{keepAlive:true},
  },
  {
    path:"/list",
    component:()=>import("../components/List.vue")
  },
  {
    path:"/collection",
    component:()=>import("../components/Collection.vue")
  },
  {
    path:"/add",
    component:()=>import("../components/Add.vue"),
  },
  {
    path:"/detail/:id",
    component:()=>import("../components/Detail.vue"),name:"detail",
  },
  {
    path:"*",redirect:"/home",
  },
];
export default new VueRouter({routes})
