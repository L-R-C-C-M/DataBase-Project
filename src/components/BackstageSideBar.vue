<!-- @author:何懿励-后台管理界面的模板 -->
<!-- 差图标和颜色 -->
<template>
<!-- 侧边栏 -->
  <el-aside width="200px" style="background-color: #333744">
    <el-menu
      background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/backstage/userManagement">普通用户
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">志愿者</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-sub-menu index="2">
        <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>资讯管理</span>
        </template>
        <el-menu-item-group>
            <el-menu-item index="2-1">已发布资讯</el-menu-item>
            <el-menu-item index="2-2">发布资讯</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>

      <el-menu-item index="3">
        <el-icon><document /></el-icon>
            <span>志愿者审核</span>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>举报处理</span>
      </el-menu-item>

      <el-menu-item index="5">
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
 
 
