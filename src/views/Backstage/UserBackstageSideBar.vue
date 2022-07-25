<!-- @author:刘筱科-后台管理界面的侧边导航栏 -->
<template>
<!-- 侧边栏 -->
  <el-aside width="200px" style="background-color: #323A52">
    <el-menu
      background-color="#323A52"
        text-color="#fff"
        active-text-color="#2C9EF7"
        router>

      <el-menu-item index="/UserBackstage/UserHomePage">
        <el-icon><User /></el-icon>
        <span>主页</span>
      </el-menu-item>

      <el-menu-item index="/UserBackstage/PersonalInfo">
        <el-icon><setting /></el-icon>
        <span>个人信息</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>
export default{
    name:'UserBackstageSideBar'
}

</script>
