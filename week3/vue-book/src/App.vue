<template>
  <div>
    <router-view></router-view>
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
</style>
