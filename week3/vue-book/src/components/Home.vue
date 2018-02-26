<template>
<div>
  <VHeader :f="0">首页</VHeader>
  <div class="content">
    <Swiper :slides="slides"></Swiper>
  </div>
</div>
</template>

<script>
  import VHeader from "../base/VHeader.vue"
  import Swiper from "../base/Swiper.vue"
  //导入api中的方法
  import {getSlides} from "../api";

  export default {
    name: "home",
    data(){return{slides:[]}},
    components:{VHeader,Swiper},
    created(){
      getSlides().then((res)=>{
        this.slides=res.data
      })
    }
  }
</script>

<style scoped>

</style>
