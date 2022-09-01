<!-- @author:杨嘉仪-主界面的顶部导航栏（有背景图片，导航栏原背景颜色为透明） -->
<template>
  <div class="main-view">
    <el-header style="height: 200px; background-image: `url(${img}) `">
      <!--el-header style="height:200px;{'background-image:'url('+img+')'}"-->
      <!--el-header style="height:200px;{'background-image:'url('+img+')'}"-->
      <!--el-header style="bg"-->
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
          :src="require('../../../image/logo.png')"
          fit="contain"
        />
        <div class="flex-grow" />
        <el-menu-item index="0">寻人首页</el-menu-item>
        <el-menu-item index="/VolunOver">志愿活动</el-menu-item>
        <el-menu-item index="2">寻人资讯</el-menu-item>
        <el-menu-item index="3">相关部门信息</el-menu-item>
        <el-menu-item index="/tempBackstage">登录</el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
export default {
  name: "MenuHeader",
  props: {
    bgimg: {
      type: String,
      default: "volun.png" /*加载失败时显示的默认图片*/,
    },
  },
  data() {
    return {
      /*bg: { backgroundImage: "url(" + "./././image/volun.png" + ")" },*/
      img: require("../../../image/volun.png"),
    };
  },
  created() {
    console.log("bgimg:" + this.bgimg);
  },
};
</script>


<style scoped>
.main-view .el-header {
  color: #ffffff;
  /*background-image: "url(" + require("../../../image/"+"volun.png") + ")";
  /*background-image: url("../../image/relevent-department.png");*/
  background-size: cover;
}

.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}
.flex-grow {
  flex-grow: 1;
}
</style>