<template>
  <div id="app">
    <transition name="el-fade-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {
  }
</script>
<style>
  *{
    padding: 0;
    margin: 0;
  }
  body,html{
    width: 100%;
    height: 100%;
    background-color: #004085;
    overflow: hidden;
  }
</style>
