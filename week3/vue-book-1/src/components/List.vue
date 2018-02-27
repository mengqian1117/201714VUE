<template>
<div>
  <VHeader>图书列表</VHeader>
  <div class="content">
    <pull-to :top-load-method="topRefresh" :top-config="topConfig">
      <ul>
        <router-link tag="li" v-for="(book,i) in books" :to="{name:'detail',params:{id:book.bookId}}" :key="i">
          <img v-lazy="book['bookCover']" alt=""/>
          <div>
            <h4>{{book["bookName"]}}</h4>
            <p>{{book["bookInfo"]}}</p>
            <b>{{book["bookPrice"]}}</b>
            <button @click.stop="remove(book.bookId)">删除</button>
          </div>
        </router-link>
      </ul>
    </pull-to>
  </div>
</div>
</template>
<script>
  import VHeader from "../base/VHeader.vue"
  import PullTo from 'vue-pull-to'
  import {getBooks,deleteBook} from "../api"
  export default {
    name: "list",
    data(){return{books:[],isRemove:"error",hasMore:true,page:0,topConfig:{
        pullText: '下拉刷新', // 下拉时显示的文字
        triggerText: '释放更新', // 下拉到触发距离时显示的文字
        loadingText: '加载中...', // 加载中的文字
        doneText: '加载完成', // 加载完成的文字
        failText: '加载失败', // 加载失败的文字
        loadedStayTime: 400, // 加载完后停留的时间ms
        stayDistance: 50, // 触发刷新后停留的距离
        triggerDistance: 70 // 下拉刷新触发的距离
      }}},
    components:{VHeader,PullTo,},
    methods:{
      async getBooks(){
        if(this.hasMore){
          let{hasMore,books}=await getBooks(this.page);
          this.hasMore=hasMore;
          //this.books=this.books.unshift(...books);
          //this.books=[...this.books,...books];
          this.books=[...books,...this.books];
          //改变this.page
          this.page=this.books.length;
        }
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
      },
      topRefresh(loaded){
        setTimeout(()=>{
          if(this.hasMore){
            this.getBooks();
          }else {
            this.topConfig.doneText="没有更多数据了..."
          }
          loaded("done");
        },2000)
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
