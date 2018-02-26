<template>
<div>
  <VHeader :f="0">首页</VHeader>
  <div class="content">
    <Swiper :slides="slides"></Swiper>
    <div class="hotBook">
      <h2>热门图书</h2>
      <ul>
        <li v-for="book in hotBook">
          <img :src="book['bookCover']" alt="">
          <b>{{book['bookName']}}</b>
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import VHeader from "../base/VHeader.vue"
  import Swiper from "../base/Swiper.vue"
  //导入api中的方法
  import {getSlides,getHot} from "../api";

  export default {
    name: "home",
    data(){return{slides:[],hotBook:[]}},
    components:{VHeader,Swiper},
    created(){
      this.getSlides();
      this.getHot();
    },
    methods:{
      async getSlides(){
        //使用 async await语法糖 直接获取 promise实例的then中的res
        this.slides=await getSlides();
      },
      async getHot(){
        this.hotBook=await getHot();
      }
    }
  }
</script>

<style scoped lang="less">
.hotBook{
  width: 90%;
  margin: 0 auto;
  h2{
    margin-left: 20px;
    color: #00b3ee;
  }
  ul{
    display: flex;
    flex-wrap: wrap;/*换行*/
    padding-bottom: 14px;
    li{
      width: 50%;
      text-align: center;
      margin: 5px 0;
      img{
        width:100%;
      }
    }
  }
}
</style>
