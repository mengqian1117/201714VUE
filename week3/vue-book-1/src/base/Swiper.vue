<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,index) in slides" :key="index">
      <img :src="slide" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoPlay:true
        },
      }
    },
    mounted() {},
    props:["slides"]
  }
</script>
<style scoped>
  img{
    width: 100%;
  }
</style>
