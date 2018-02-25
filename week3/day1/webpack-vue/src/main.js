//导入Vue 模块
import Vue from "vue"

//通过 import Vue from "vue" 导入的vue 只有runtime没有compiler(识别不了template)

//import Vue from "vue/dist/vue.js"
//通过 import Vue from "vue/dist/vue.js" 是 runtime+compiler

//导入组件
import App from "./App.vue";//后缀不可以省略
let vm=new Vue({
    el:"#app",
    //render:(h)=>h(组件)
    render:(h)=>h(App)
});