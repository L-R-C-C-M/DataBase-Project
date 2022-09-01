<!-- @author:刘睿萌-详情界面的模板 -->
<!-- 菜单没写回调函数 -->
<template>
  <el-container style="height: fit-content">
    <el-header>
      <InfoHeader />
    </el-header>

    <el-main>
      <!-- 这里是页面内容 -->
      <!-- @author:郭静静-发布寻人信息界面内容 -->
      <el-page-header :icon="ArrowLeft" />
      <div style="padding: 5px 10px 15px 500px">
        <el-form
          :model="form"
          label-width="120px"
          justify="center"
          style="max-width: 500px"
        >
          <el-form-item label="寻人类型">
            <el-select v-model="form.type" placeholder="请选择寻人类型">
              <el-option label="家寻亲人" value="家寻亲人" />
              <el-option label="亲人寻家" value="亲人寻家" />
              <el-option label="寻找朋友" value="寻找朋友" />
              <el-option label="寻找恩人" value="寻找恩人" />
              <el-option label="其它寻人" value="其它寻人" />
            </el-select>
          </el-form-item>

          <el-form-item label="被寻人真实姓名 ">
            <el-input v-model="form.name" />
          </el-form-item>

          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="男" />
              <el-radio label="女" />
            </el-radio-group>
          </el-form-item>

          <el-form-item label="出生日期">
            <el-col :span="24">
              <el-date-picker
                v-model="form.birthday"
                type="date"
                placeholder="请选择日期"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>

          <el-form-item label="身高(厘米)">
            <el-input-number
              v-model="form.height"
              :min="1"
              :max="250"
              controls-position="right"
              @change="handleChange"
            />
          </el-form-item>

          <el-form-item label="上传照片">
            <el-upload
              v-model:file-list="fileList"
              class="upload-demo"
              action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
              :on-change="handleChange"
            >
              <el-button type="primary">点击上传</el-button>

              <template #tip>
                <div class="el-upload__tip">图片文件大小需小于500kb</div>
              </template>
            </el-upload>
          </el-form-item>

          <el-form-item label="特征描述">
            <el-input v-model="form.features" type="textarea" />
          </el-form-item>

          <el-form-item label="是否报案">
            <el-radio-group v-model="form.y_n_report">
              <el-radio label="是" />
              <el-radio label="否" />
            </el-radio-group>
          </el-form-item>

          <el-form-item label="失散日期">
            <el-col :span="24">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="请选择日期"
                style="width: 100%"
              />
            </el-col>
          </el-form-item>

          <el-form-item label="选择失散地点">
            <el-cascader
              placeholder="请选择地区"
              size="default"
              :options="regionData"
              v-model="selectedOptions"
              @change="handleChange"
            >
            </el-cascader>
          </el-form-item>

          <el-form-item label="详细失散地点">
            <el-input v-model="form.address" />
          </el-form-item>

          <el-form-item label="联系人">
            <el-input v-model="form.linkman" />
          </el-form-item>

          <el-form-item label="联系方式">
            <el-input v-model="form.telephone" />
          </el-form-item>

          <div style="text-align: center; padding: 5px 10px 15px 150px">
            <el-form-item>
              <el-button type="primary" @click="onSubmit">发布</el-button>
            </el-form-item>
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
import { reactive } from "vue";

import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import { regionData } from "element-china-area-data";
import { ElMessage, ElMessageBox } from "element-plus";

const form = reactive({
  name: "",
  type: "",
  sex: "",
  birthday: "",
  height: "",
  features: "",
  y_n_report: "",
  date: "",
  address: "",
  linkman: "",
  telephone: "",
});

const onSubmit = () => {
  console.log("submit!");

  ElMessageBox.confirm("确认提交寻人信息？", "确认信息", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
  })
    .then(() => {
      ElMessage({
        type: "success",
        message: "提交成功",
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消提交",
      });
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
} */

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
} */

.biaodtext {
  padding: 5px 10px 15px 500px;
}
</style>