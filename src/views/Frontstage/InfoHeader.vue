<!-- @author:刘睿萌-详情界面的顶部导航栏（无背景图片） -->
<template>
  <div class="detail-view">
    <el-header style="height: 55px">
      <el-menu
        router
        :default-active="activeIndex"
        class="up-menu"
        mode="horizontal"
        background-color="#202714"
        text-color="#FFFFFF"
        active-text-color="#2E74B6"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-image
          style="height: 70%; width: 20%"
          :src="require('../../../image/logo.png')"
          fit="contain"
        />
        <div class="flex-grow" />
        <el-menu-item index="/cover">寻人首页</el-menu-item>
        <el-menu-item index="/volunOver">志愿活动</el-menu-item>
        <el-menu-item index="/news">寻人资讯</el-menu-item>
        <el-menu-item index="/department">相关部门信息</el-menu-item>
        <el-menu-item index="/tempBackstage">登录</el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "InfoHeader",
};
//放一些引入的量  如const url =‘balabala'
// import { ref } from 'vue'
// const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>


<!-- css -->
<style scoped>
.detail-view .el-header {
  background-color: #202714;
  color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
}
.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}
.flex-grow {
  flex-grow: 1;
}
</style>