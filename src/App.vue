<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" background-color="#18222c" mode="horizontal"
    text-color="#fff" active-text-color="#ffd04b" @select="handleSelect">
    <el-menu-item index="2"><router-link to="/">Home</router-link></el-menu-item>
    <el-menu-item index="1"><router-link to="/todo" replace>ToDo</router-link></el-menu-item>
  </el-menu>
  <router-view />
</template>

<script setup>
const handleSelect = () => {
}
</script>
<script>
export default {
  data() {
    return {
      title: "My To Do App",
    };
  },
};
</script>
<style>
body {
  margin: 0;
}

a {
  text-decoration-line: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
