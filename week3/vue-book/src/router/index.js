import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../components/Home.vue"
import List from "../components/List.vue"
import Add from "../components/Add.vue"
import Collection from "../components/Collection.vue"
Vue.use(VueRouter);
let routes=[
  {path:"/",component:Home},
  {path:"/home",component:Home},
  {path:"/list",component:List},
  {path:"/collection",component:Collection},
  {path:"/add",component:Add},
  {path:"*",redirect:"/home"},
];
export default new VueRouter({routes})
