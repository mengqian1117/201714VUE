<template>
<div>
  <VHeader :f="0">首页</VHeader>
  <div class="content">
    <Loading v-if="isLoading"></Loading>
    <template v-else>
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
    </template>
  </div>
</div>
</template>

<script>
  import VHeader from "../base/VHeader.vue"
  import Swiper from "../base/Swiper.vue"
  import Loading from "../base/Loading.vue"
  //导入api中的方法
  import {getAll} from "../api";
  export default {
    name: "home",
    data(){return{slides:[],hotBook:[],isLoading:true}},
    components:{VHeader,Swiper,Loading},
    created(){
      this.getAll();
    },
    methods:{
      async getAll(){
        [this.slides,this.hotBook]=await getAll();
        //走到这里说明数据获取完成 让this.isLoading变成false
        this.isLoading=false;
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
