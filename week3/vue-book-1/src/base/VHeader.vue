<template>
<div class="nav">
  <i class="iconfont icon-fanhui" v-if="f" @click="back"></i>
  <h2>
    <slot></slot>
  </h2>
</div>
</template>

<script>
  export default {
    name: "v-header",
    data(){
      return {}
    },
    props:{
      f:{
        //type:Boolean,
        default:false,
        //默认是不显示 如果使用组件的时候传一个 :f="true" 此时就会显示
      }
    },
    methods:{
      back(){
        //$route $router
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
.nav{
  position: fixed;
  width: 100%;
  height: 50px;
  left: 0;
  top:0;
  background-color: blue;
  h2{
    position: absolute;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: white;
    width: 100%;
    top:0;
  }
  i{
    position: absolute;
    left: 0;
    font-size: 24px;
    color: white;
    height: 50px;
    line-height: 50px;
  }
}
</style>
