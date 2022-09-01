<template>
  <el-container style="height: fit-content">
    <el-header>
      <InfoHeader />
    </el-header>

    <el-main>
      <!-- 这里是页面内容 -->
      <div style="height: 550px; width: 800px">
        <LogInCard />
      </div>
      <span>注册</span>
      <div style="height: 550px; width: 800px">
        <RegisterCard />
      </div>
      <span>找回密码</span>
      <div style="height: 550px; width: 800px">
        <ForgetPasswordCard />
      </div>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>


<script>
// @ is an alias to /src

import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import LogInCard from "@/components/LogAndRegist/LogInCard";
import RegisterCard from "@/components/LogAndRegist/RegisterCard";
import ForgetPasswordCard from "@/components/LogAndRegist/ForgetPasswordCard";
export default {
  name: "MainmenuView",
  components: {
    LogInCard,
    RegisterCard,
    ForgetPasswordCard,
    InfoHeader,
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