<!-- @author:杨嘉仪-后台管理界面的模板 -->
<!-- 差图标和颜色 -->
<template>
    <el-container class="home-container">
        <el-header><!-- 头部区 -->
            <div>
                <el-image
              style="height:70%;width:50%;"
              :src="require('../../image/logo.png')"
              fit="contain"
                />
                <span>后台管理系统</span>
            </div>
            <el-button type="info" @click="logout">退出</el-button>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">
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
            <el-menu-item index="1-1">普通用户</el-menu-item>
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
            <!-- 右侧内容主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
 
<script>
export default {
    methods:{
        logout(){
            window.sessionStorage.clear();
            this.$router.push('/login');
        }
    }
};
</script>
 
<style lang="less" scoped>
.home-container{
    height: 100%;
}
 .el-header{
     background-color: #202741;
     display: flex; //设置显示为flex布局
     justify-content: space-between;//设置为flex左右布局
     padding-left: 0;//左内边距为0（Logo贴左边）
     align-items: center;//元素上下居中（防止右边按钮贴上下边）
     color: #fff;
     font-size: 20px;
     > div {//内嵌的div样式
         display: flex;
         align-items: center;//Logo和文字上下居中
         span {
             margin-left: 15px;//文字左侧设置间距，防止与Logo紧贴
         }
     }
 }
  .el-aside{
     background-color: #333744;
 }
  .el-main{
     background-color: #eaedf1;
 }
</style>