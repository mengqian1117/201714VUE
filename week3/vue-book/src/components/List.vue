<template>
<div>
  <VHeader>图书列表</VHeader>
  <ul class="content">
    <router-link tag="li" v-for="(book,i) in books" :to="{name:'detail',params:{id:book.bookId}}" :key="i">
      <img :src="book['bookCover']" alt="">
      <div>
        <h4>{{book["bookName"]}}</h4>
        <p>{{book["bookInfo"]}}</p>
        <b>{{book["bookPrice"]}}</b>
        <button @click.stop="remove(book.bookId)">删除</button>
      </div>
    </router-link>
  </ul>
</div>
</template>
<script>
  import VHeader from "../base/VHeader.vue"
  import {getBooks,deleteBook} from "../api";
  export default {
    name: "list",
    data(){return{books:[],isRemove:"error"}},
    components:{VHeader,},
    methods:{
      async getBooks(){
        this.books=await getBooks();
      },
      async deleteBook(id){
        this.isRemove=await deleteBook(id);
        //修改前端数据
        if(this.isRemove=="success"){
          this.books=this.books.filter(item=>item.bookId!=id);
        }
      },
      remove(id){
        this.deleteBook(id);
      }
    },
    created(){
      this.getBooks();

    }
  }
</script>

<style scoped lang="less">
  .content{
    li{
      display: flex;
      padding: 10px 0;
      border-bottom: 1px solid #bbb;
      img {
        width: 150px;
        height: 150px;
      }
      h4{
        font-size: 22px;
        line-height: 35px;
      }
      p{
        color: #3133eb;
        line-height: 30px;
      }
      b{
        color: orangered;
        line-height: 35px;
      }
      button{
        display: block;
        width: 80px;
        height: 30px;
        background-color: #bd2130;
        color: white;
        border-radius:10px ;
        outline: none;
      }
    }
  }

</style>
