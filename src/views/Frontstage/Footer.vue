<template>
  <el-footer>
    <el-image
      style="height: 70%; width: 20%"
      :src="require('../../../image/logo.png')"
      fit="contain"
    />
    <span style="display: block; text-align: right"
      >客服 : +7 700 000 000 <br />
      yixun@163.edu</span
    >
  </el-footer>
</template>

<style scoped>
.el-footer {
  background-color: #202741;
  color: #dddcdc;
  height: 40px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>