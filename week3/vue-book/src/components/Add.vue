<template>
  <div>
    <VHeader>添加图书</VHeader>
    <ul class="content">
      <li>
        <label for="bookName">图书的名称</label>
        <input type="text" id="bookName" v-model="book.bookName">
      </li>
      <li>
        <label for="bookCover">图书的封面</label>
        <input type="text" id="bookCover" v-model="book.bookCover">
      </li>
      <li>
        <label for="bookInfo">图书的信息</label>
        <input type="text" id="bookInfo" v-model="book.bookInfo">
      </li>
      <li>
        <label for="bookPrice">图书的价格</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice">
      </li>
      <li>
        <button @click="addBook">增加</button>
      </li>
    </ul>
  </div>
</template>

<script>
  import VHeader from "../base/VHeader.vue"
  import {addBook} from "../api";

  export default {
    name: "add",
    data() {
      return {book: {}}
    },
    methods: {
      async addBook() {
        await addBook(this.book);
        //跳转到 /list
        setTimeout(()=>{
          this.$router.push("/list");
        },1000);
      }
    },
    components: {VHeader}
  }
</script>

<style scoped lang="less">
  ul {
    li {
      margin: 20px;
      label {
        display: block;
        font-size: 26px;
        color: #bd2130;
      }
      input {
        height: 40px;
        margin: 10px 0;
        width: 80%;
        font-size: 20px;
      }
      button {
        display: block;
        width: 100px;
        height: 40px;
        background-color: #00b3ee;
        color: white;
        border-radius: 5px;
        font-size: 26px;
        margin: 20px auto;
      }
    }
  }
</style>
