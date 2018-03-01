<template>
  <el-form label-width="0px" class="el-login">
    <h2 class="title">系统登录</h2>
    <el-form-item>
      <el-input type="text" placeholder="账号" v-model="user.user"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="密码" v-model="user.pw"></el-input>
    </el-form-item>
    <el-checkbox class="remember" v-model="isRemember">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%" @click="getLogin">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import {login} from "../api"
  export default {
    name: "login",
    data(){
      return {user:{user:"",pw:""},isRemember:true}
    },
    methods:{
      async getLogin(){
        let {code,message,user}=await login(this.user);
        if(code){
          //判断isRemember的值 是否记录缓存
          if(this.isRemember){
            localStorage.setItem("user",JSON.stringify(this.user));
          }
          //跳转home
          this.$router.push("/home")
        }else {alert(message);}
      }
    },
    created(){
      if(localStorage.getItem("user")){
        this.user=JSON.parse(localStorage.getItem("user"));
      }
    },
  }
</script>

<style scoped lang="less">
.el-login{
  width: 350px;
  border-radius: 5px;
  background-color: white;
  background-clip:padding-box ;
  padding: 35px 35px 15px 35px;
  margin: 100px auto;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title{
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }
}
</style>
