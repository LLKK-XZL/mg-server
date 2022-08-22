<template>
  <div>
    <h1>登录</h1>
    <el-button type="primary" size="default" @click="goHome">回首页</el-button>

    <router-link to="/home">lalala</router-link>
    <router-view />
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { useRouter } from "vue-router";
defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
const router = useRouter();
const goHome = () => {
  router.push("/welcome");
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; /* 字体抗锯齿 */
  -moz-osx-font-smoothing: grayscale; /* macOS 抗锯齿 灰度抗锯齿渲染 */
  text-align: center;
  color: #2c3e50;
}
</style>