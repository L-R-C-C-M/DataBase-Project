<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/backstage">Backstage</router-link>|
  <router-link to="/mainmenu">Mainmenu</router-link>|
  <router-link to="/Userbackstage">UserBackstage</router-link>|
  <router-link to="/Volbackstage">Volbackstage</router-link> |
  <router-link to="/VolunOver">志愿活动</router-link>
  <router-view />
  <!-- // keep-alive 查询列表页面查看详情页面时，详情页面返回以后，查询列表页面的查询参数等数据全部缓存，重新查询时重新刷新获取数据。-->

  <!--keep-alive>
    <router-view v-if="$route.meta.keepAlive" />
  </keep-alive>
  <router-view v-if="!$route.meta.keepAlive" /-->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
