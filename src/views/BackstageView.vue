<!-- @author:杨嘉仪-后台管理界面的模板 -->
<!-- 差图标和颜色 -->
<template>
  <el-container class="home-container" style="height:100%">
        <!-- 头部区 -->
        <el-header>
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
        <el-container style="height:100%">
          <!-- 侧边栏 -->
          <BackstageSideBar/>
          <!-- 右侧内容主体 -->
          <el-main>
            <router-view/>
          </el-main>
        </el-container>
    </el-container>
</template>
 
<script>
  import BackstageSideBar from '@/components/BackstageSideBar'
  export default {
  name: 'BackstageView',
  components: {
    BackstageSideBar
  },
  methods:{
    logout(){
      window.sessionStorage.clear();
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="less" scoped>
html,body{ height:100%; } 
.home-container .el-header{
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
.home-container  .el-main{
     background-color: #eaedf1;
 }
</style>