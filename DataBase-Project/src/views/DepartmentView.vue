<!-- @author:杨芾卉-相关部门信息主页面（侧边导航） -->
<!-- 有bug 路由没有设置好 -->
<template>
  <el-container class="main-view" style="height: 700px">
    <el-header style="height: 200px">
      <el-menu
        :default-active="activeIndex"
        class="up-menu"
        mode="horizontal"
        background-color="rgba(0, 0, 0, 0)"
        text-color="#FFFFFF"
        active-text-color="#2E74B6"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-image
          style="height: 70%; width: 20%"
          :src="require('../../image/logo.png')"
          fit="contain"
        />

        <div style="margin-left: 280px; margin-top: 170px; font-size: larger">
            <span>相关部门信息</span>
          </div>

        <div class="flex-grow" />
        <el-menu-item index="0">寻人首页</el-menu-item>
        <el-menu-item index="1">志愿活动</el-menu-item>
        <el-menu-item index="2">寻人资讯</el-menu-item>
        <el-menu-item index="3">相关部门信息</el-menu-item>
        <el-menu-item index="4">登录</el-menu-item>
      </el-menu>
    </el-header>

    <el-main style="padding: 0px">
      <el-container style="height: 100%">
      <!-- 左侧菜单导航栏 -->
        <el-container style="height: 100%">
          <el-menu
            default-active="$route.path"
            class="el-menu-vertical-demo"
            collapse="true"
            router="true"
            unique-opened="true"
            @open="handleOpen"
            @close="handleClose"
            @select="handleSelect"
          >
            <el-sub-menu index="1">
              <template #title>
                <el-icon>上海市</el-icon>
              </template>
              <el-menu-item index="department/1/1-1">黄浦区</el-menu-item>
              <el-menu-item index="department/1/1-2">徐汇区</el-menu-item>
              <el-menu-item index="department/1/1-3">杨浦区</el-menu-item>
              <el-menu-item index="department/1/1-4">嘉定区</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="2">
              <template #title>
                <el-icon><span>江苏省</span></el-icon>
              </template>
              <el-menu-item index="2-1">南京市</el-menu-item>
              <el-menu-item index="2-2">苏州市</el-menu-item>
              <el-menu-item index="2-3">无锡市</el-menu-item>
              <el-menu-item index="2-4">扬州市</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon>黑龙江省</el-icon>
              </template>
              <el-menu-item index="3-1">哈尔滨市</el-menu-item>
              <el-menu-item index="3-2">大庆市</el-menu-item>
              <el-menu-item index="3-3">漠河市</el-menu-item>
              <el-menu-item index="3-4">鸡西市</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="4">
              <template #title>
                <el-icon>广东省</el-icon>
              </template>
              <el-menu-item index="4-1">广州市</el-menu-item>
              <el-menu-item index="4-2">深圳市</el-menu-item>
              <el-menu-item index="4-3">珠海市</el-menu-item>
              <el-menu-item index="4-4">汕头市</el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-container>
        <!-- 右侧主体页面 -->
        <el-container style="height: 100%" direction="vertical">
          <router-view />
        </el-container>
      </el-container>
    </el-main>
    <el-footer>
      <el-image
        style="height: 70%; width: 20%"
        :src="require('../../image/logo.png')"
        fit="contain"
      />
      <span style="display: block; text-align: right"
        >客服 : +7 700 000 000 <br />
        yixun@163.edu</span
      >
    </el-footer>
  </el-container>
</template>


<script>
import { ref } from "vue";
export default {
  
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    }
  }
}
const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<!-- css -->
<style scoped>
.el-menu-vertical-demo {
  /* border: 3px solid black; */
  width: 150px;
  height: 100vh;
  margin-left: 0px;
  margin-top: 0px;
}

.el-icon {
  /* border: 3px solid black; */
  left: 35%;
}

/* 下面是主页面模板的样式 */
.main-view .el-header {
  color: #ffffff;
  background-image: url("../../image/relevent-department.png");
  background-size: cover;
}
.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}
.el-main {
  background-color: #f4f6f9;
}
.el-footer {
  background-color: #202741;
  color: #dddcdc;
  height: 40px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-grow {
  flex-grow: 1;
}
</style>