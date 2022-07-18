<template>
<span>主界面的模板 <br /></span>
  <el-container class="main-view" style="height:700px;">
      <el-header style="height:200px;">
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
              style="height:70%;width:20%;"
              :src="require('../../image/logo.png')"
              fit="contain"
            />
            <div class="flex-grow" />
            <el-menu-item index="0">寻人首页</el-menu-item>
            <el-menu-item index="1">志愿活动</el-menu-item>
            <el-menu-item index="2">寻人资讯</el-menu-item>
            <el-menu-item index="3">相关部门信息</el-menu-item>
            <el-menu-item index="4">登录</el-menu-item>
          </el-menu>
      </el-header>

      <el-main>
        <!-- 这里是页面内容 -->
      </el-main>
      <el-footer>
            <el-image
              style="height:70%;width:20%;"
              :src="require('../../image/logo.png')"
              fit="contain"
            />
            <span style="display:block;text-align:right;">客服 : +7 700 000 000 <br /> yixun@163.edu</span>
      </el-footer>
  </el-container>
</template>

<!-- css -->
<style scoped>
.main-view .el-header {
  color: #FFFFFF;
  background-image:url("../../image/relevent-department.png") ;
  background-size: cover;
}
.up-menu{
  height:55px;
  width:100%;
  align-items: center;
}
.el-main{
     background-color: #F4F6F9;
}
.el-footer {
  background-color: #202741;
  color:#dddcdc;
  height:40px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.flex-grow {
  flex-grow: 1;
}
</style>