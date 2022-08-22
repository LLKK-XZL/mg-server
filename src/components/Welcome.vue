<template>
  <div>
    欢迎
    <router-view />
  </div>
</template>

<script setup>
</script>

<style>
@import url("../assets/css/global.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /* 字体抗锯齿 */
  -moz-osx-font-smoothing: grayscale; /* macOS 抗锯齿 灰度抗锯齿渲染 */
  text-align: center;
  color: #2c3e50;
}
</style>