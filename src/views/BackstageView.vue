<!-- @author:杨嘉仪-后台管理界面的模板 -->
<!-- 差图标 -->
<template>
    <el-container class="home-container">
        <el-header ><!-- 头部区 -->
            <div>
                <el-image
              style="height:70%;width:50%;"
              :src="require('../../image/logo.png')"
              fit="contain"
                />
                <span>后台管理系统</span>
            </div>
            <el-button class="exit-button" type="info" @click="logout">
              <el-icon style="vertical-align: middle;">
                <SwitchButton />
              </el-icon>
              <span> 退出 </span>
            </el-button>
        </el-header>
        <!-- 页面主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside width="200px">
                 <el-menu
          background-color="#323A52"
          text-color="#fff"
          active-text-color="#2C9EF7">
          <el-sub-menu index="1">
          <template #title>
              <el-icon class="icon">
              <User />
              </el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">普通用户</el-menu-item>
            <el-menu-item index="1-2">志愿者</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon class="icon"><DocumentCopy /></el-icon>
            <span>资讯管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">已发布资讯</el-menu-item>
            <el-menu-item index="2-2">发布资讯</el-menu-item>
          </el-menu-item-group>
         </el-sub-menu>
        <el-menu-item index="3">
          <el-icon class="icon"><Coordinate /></el-icon>
          <span>志愿者审核</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon class="icon"><MessageBox /></el-icon>
          <span>举报处理</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon class="icon"><setting /></el-icon>
          <span>设置</span>
        </el-menu-item>
                </el-menu>
            </el-aside>
            <!-- 右侧内容主体 -->
            <el-main>Main</el-main>
        </el-container>
    </el-container>
</template>
 
<script >

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
     height:55px;
     display: flex; //设置显示为flex布局
     justify-content: space-between;//设置为flex左右布局
     padding-left: 30;//左内边距为20（Logo贴左边）
     padding-right: 30;
     align-items: center;//元素上下居中
     color: #B5C4D0;
     > div {//内嵌的div样式
         display: flex;
         align-items: center;//Logo和文字上下居中
         span {
             margin-left: 15px;//文字左侧设置间距，防止与Logo紧贴
         }
     }
 }
 .exit-button{
  background-color:rgba(0, 0, 0,0);
  color:#fff;
  border-color: rgba(0, 0, 0,0);
 }
  .el-aside{
     background-color: #323A52;
 }
  .el-main{
     background-color: #F4F6F9;
 }
</style>