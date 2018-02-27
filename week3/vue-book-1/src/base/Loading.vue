<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
  .loading{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto;
    margin-top:100px;
    position: relative;
    border:5px solid lightgreen;
    -webkit-animation: turn 2s linear infinite;
  }
  .loading span{
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: lightgreen;
    position: absolute;
    left: 50%;
    margin-top: -15px;
    margin-left: -15px;
    -webkit-animation: changeBgColor 2s linear infinite;
  }
  @-webkit-keyframes changeBgColor{
    0%{
      background: lightgreen;
    }
    100%{
      background: lightblue;
    }
  }
  @-webkit-keyframes turn{
    0%{
      -webkit-transform: rotate(0deg);
      border-color: lightgreen;
    }
    100%{
      -webkit-transform: rotate(360deg);
      border-color: lightblue;
    }
  }
</style>
