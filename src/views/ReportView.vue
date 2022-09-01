<!-- @author:郭静静 -->
<!-- 菜单没写回调函数 -->
<template>
  <el-container style="height: fit-content">
    <el-header>
      <InfoHeader />
    </el-header>

    <el-main>
      <!-- 这里是页面内容 -->
      <el-page-header :icon="ArrowLeft" />
      <div style="padding: 5px 10px 15px 500px">
        <el-form :model="form" label-width="100px" style="max-width: 500px">
          <el-form-item label="举报理由 ">
            <el-input
              v-model="reporttext"
              :autosize="{ minRows: 10, maxRows: 12 }"
              type="textarea"
              placeholder="点击输入举报理由"
            />
          </el-form-item>
          <div style="padding: 5px 10px 15px 120px">
            <el-button type="primary" round v-if="reporttext" @click="open2"
              >发布</el-button
            >
            <el-button type="primary" disabled round v-else>发布</el-button>
          </div>
        </el-form>
      </div>
    </el-main>

    <Footer></Footer>
  </el-container>
</template>

<script setup>
//放一些引入的量  如const url =‘balabala'
// import { ref } from 'vue'
// const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
import { ref } from "vue";
import { ArrowLeft } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";

const reporttext = ref("");
const open2 = () => {
  ElMessage({
    message: "发布成功",
    type: "success",
  });
};
</script>


<!-- css -->
<style scoped>
/* .detail-view .el-header {
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
} */

.el-link {
  margin-right: 8px;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
</style>