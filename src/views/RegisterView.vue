<template>
  <el-container style="height: fit-content">
    <!-- <el-header>
      <InfoHeader />
    </el-header> -->
    <el-header style="height: 70px">
      <el-menu
        router
        :default-active="activeIndex"
        class="up-menu"
        mode="horizontal"
        background-color="transparent"
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
        <!-- <div class="flex-grow" />
        <el-menu-item index="/cover">寻人首页</el-menu-item>
        <el-menu-item index="/volunOver">志愿活动</el-menu-item>
        <el-menu-item index="/news">寻人资讯</el-menu-item>
        <el-menu-item index="/department">相关部门信息</el-menu-item>
        <el-menu-item index="/tempBackstage">登录</el-menu-item> -->
      </el-menu>
    </el-header>

    <el-main>
      <!-- 这里是页面内容 -->
      <div style="height: 550px; width: 800px">
        <RegisterCard />
      </div>
      <!-- <span>注册</span> -->
      <!-- <div style="height: 550px; width: 800px">
        <RegisterCard />
      </div> -->
    </el-main>
    <Footer></Footer>
  </el-container>
</template>


<script>
// @ is an alias to /src

//import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
//import LogInCard from "@/components/LogAndRegist/LogInCard";
import RegisterCard from "@/components/LogAndRegist/RegisterCard";
export default {
  name: "MainmenuView",
  components: {
    //LogInCard,
    RegisterCard,
    //InfoHeader,
    Footer,
  },
};
</script>

<!-- css -->
<style scoped>
/* .main-view .el-header {
  color: #ffffff;
  background-image: url("../../image/relevent-department.png");
  background-size: cover;
}
.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}*/
.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}
.el-main {
  background-color: #f4f6f9;
}
/* .el-footer {
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
}*/
</style>