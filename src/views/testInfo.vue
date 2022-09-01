<template>
  <div>用户id为:{{userInfo}}</div>
  <!-- <div>用户身份为：{{ this.$store.state.identity }}</div> -->
</template>
<script setup>
const userInfo = JSON.parse(sessionStorage.getItem("userid"));
</script>
