<template>
  <!--router-link to="/">Home</!--router-link> |
  <router-link to="/about">About</router-link>
  <router-link-- to="/">首页</router-link-->
  <router-view />

  <!-- // keep-alive 查询列表页面查看详情页面时，详情页面返回以后，查询列表页面的查询参数等数据全部缓存，重新查询时重新刷新获取数据。-->

  <!--keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive" /-->
</template>
<script>
// export default {
//   name:'App',
//   methods: {
//     //判断是否已经登录状态
//     isLogin() {
//       //判断sessionStorage中是否有登录信息
//       if (sessionStorage.getItem("user") != null) {
//         //存在登录信息就从sessionStorage中提取状态再传值给vuex中
//         this.$store.commit("userStatus", sessionStorage.getItem("user"));
//       } else {
//         //登录不成功就将vuex中的state清空
//         this.$store.commit("userStatus", null);
//       }
//       //返回登录状态islogin
//       //return this.$store.getters.isLogin;
//     },
//   },
//   created() {
//     this.isLogin();
//   },
// };
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
html,
body {
  height: 100%;
  width: 100%;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
