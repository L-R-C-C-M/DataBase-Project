<template>
  <router-link to="/backstage">Backstage</router-link>|
  <router-link to="/Userbackstage">UserBackstage</router-link>|
  <router-link to="/Volbackstage">Volbackstage</router-link>
  <router-view />
</template>

<style>
html,
body {
  height: 100%;
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
