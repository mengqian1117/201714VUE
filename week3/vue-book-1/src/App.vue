<template>
  <div>
    <!--有一些页面组件需要缓存有一些不需要 此时需要做区分-->
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>

    <!--下面是不缓存的-->
    <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>
<script>
  //将Tab组件导入
  import Tab from "./base/Tab.vue"
  export default {
    components:{Tab,}
  }
</script>
<style>
/*一般都是清除一些默认样式,全局样式*/
  *{padding: 0;margin: 0}
  a{text-decoration: none}
  ul,li{list-style: none}
  .content{
    position:absolute ;
    top:50px;
    bottom: 50px;
    width: 100%;
    overflow-y: auto;
  }
  input{
    border: 1px solid #c8cbcf;
    padding: 0 10px;
  }
</style>
