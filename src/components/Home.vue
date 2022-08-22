<template>
  <div>
    home11
    <el-button type="primary" size="default" @click="toLogin">去登陆</el-button>

    <router-link to="/login"></router-link>
    <router-view />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const toLogin = () => {
  router.push("/login");
};
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