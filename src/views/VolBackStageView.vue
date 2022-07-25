<!-- @author:刘筱科-志愿者后台管理界面 -->
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
            <el-button class="exit-button" type="info" @click="logout">
              <el-icon style="vertical-align: middle;">
                <SwitchButton />
              </el-icon>
              <span> 退出 </span>
            </el-button>
        </el-header>
        
        <!-- 页面主体区域 -->
        <el-container style="height:100%">
          <!-- 侧边栏 -->
          <VolBackstageSideBar/>
          <!-- 右侧内容主体 -->
          <el-container style="height:100%" direction="vertical">
            <router-view/>
          </el-container>
        </el-container>
    </el-container>
</template>
 
<script>
  import VolBackstageSideBar from '@/views/Backstage/VolBackstageSideBar'
  export default {
  name: 'VolBackstageView',
  components: {
    VolBackstageSideBar
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
     height:70px;
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
.home-container  .el-main{
     background-color: #eaedf1;
 }
</style>