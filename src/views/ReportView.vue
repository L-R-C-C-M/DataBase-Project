<!-- @author:刘睿萌-详情界面的模板 -->
<!-- 菜单没写回调函数 -->
<template>
  <!--<span>详情界面的模板</span>-->
  <el-container class="detail-view" style="height: 500px">
    <el-header style="height: 55px">
      <el-menu
        :default-active="activeIndex"
        class="up-menu"
        mode="horizontal"
        background-color="#202741"
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
      <el-page-header :icon="ArrowLeft" />
      <div style="padding:5px 10px 15px 500px; ">
      <el-form :model="form" label-width="100px" style="max-width: 500px" >
        <el-form-item label="举报理由 ">
          <el-input
            v-model="reporttext"
            :autosize="{ minRows: 10, maxRows: 12 }"
            type="textarea"
            placeholder="点击输入举报理由"
          />
        </el-form-item>
 <div style="padding:5px 10px 15px 120px; ">
        <el-button type="primary" round v-if="reporttext">发布</el-button>
        <el-button type="primary" disabled round v-else>发布</el-button>
</div>
      </el-form>
      </div>
    </el-main>

    <el-footer>
      <el-image
        style="height: 70%; width: 20%"
        :src="require('../../image/logo.png')"
        fit="contain"
      />
      <span style="display: block; text-align: right"
        >客服 : +7 700 000 000 <br />
        yixun@163.edu</span
      >
    </el-footer>
  </el-container>
</template>

<script setup>
//放一些引入的量  如const url =‘balabala'
// import { ref } from 'vue'
// const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
  import { ref } from 'vue'
  import { ArrowLeft } from '@element-plus/icons-vue'
  const reporttext = ref('')
</script>


<!-- css -->
<style scoped>
.detail-view .el-header {
  background-color: #202741;
  color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
}
.main-view .el-header {
  color: #ffffff;
  background-image: url("../../image/relevent-department.png");
  background-size: cover;
}
.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}
.el-main {
  background-color: #f4f6f9;
}
.el-footer {
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
}

.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}

</style>