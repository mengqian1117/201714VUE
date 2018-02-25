<template>
  <ul class="footer">
    <router-link to="/home" tag="li">
      <span class="iconfont icon-home"></span>
      <span>首页</span>
    </router-link>
    <router-link to="/list" tag="li">
      <span class="iconfont icon-liebiao"></span>
      <span>列表</span>
    </router-link>
    <router-link to="/collection" tag="li">
      <span class="iconfont icon-shoucang"></span>
      <span>收藏</span>
    </router-link>
    <router-link to="/add" tag="li">
      <span class="iconfont icon-tianjia"></span>
      <span>添加</span>
    </router-link>
  </ul>
</template>

<script>
    export default {
        name: "tab"
    }
</script>

<style scoped lang="less">
.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  height: 50px;
  border-top: 1px solid gainsboro;
  display: flex;
  width: 100%;
  li{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    text-align: center;
    color:blue;
    &.router-link-active{
      color: orangered;
    }
  }
}
</style>
