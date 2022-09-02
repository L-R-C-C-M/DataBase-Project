<!-- @author:杨芾卉-寻人资讯主页面 -->
<template>
  <div class="common-layout">
    <el-container style="height: fit-content">
      <el-header class="myHeader2">
        <MainHeader />
        <div style="margin-top: 100px; font-size: 30px; color: white">
          寻人资讯
        </div>
      </el-header>

      <!-- 这是页面主体 -->
      <el-main>
        <!-- 这是搜索框 -->
        <el-row>
          <el-col>
            <div class="demo-input-size" style="margin: 10px">
              <el-input
                type="text"
                v-model="input2"
                class="search-width"
                size="default"
                placeholder="搜索..."
                :suffix-icon="Search"
                clearable
                @clear="clear"
              />
            </div>
          </el-col>
        </el-row>
        <!-- 这是筛选按钮 -->
        <el-row>
          <el-col :span="6" :offset="2">
            <el-button>全部</el-button>
            <el-button>寻人新闻</el-button>
            <el-button>寻人政策</el-button>
          </el-col>
        </el-row>
        <!-- 这是资讯内容 -->
        <el-space direction="vertical" style="margin: 10px">
          <div class="box1" onclick="window.open('/newsInfo','_self')">
            点我进入寻人资讯详情页
          </div>
          <div class="box1"></div>
          <div class="box1"></div>
        </el-space>
        <!-- 这是页数选择 -->
        <div
          class="example-pagination-block"
          style="display: flex; justify-content: center"
        >
          <el-pagination layout="prev, pager, next" :total="100" />
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";

const input2 = ref("");
</script>

<style lang="less">
.search-width {
  width: 300px;
  color: #202741;
}

.box1 {
  width: 700px;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 10px; //margin设置资讯间的距离
  line-height: 200px; //设置div内文字垂直居中
  cursor: pointer;
  /* 下面是阴影设置，还是取消啦 */
  /* box-shadow: 1px 1px 5px 0px rgb(78, 77, 77); */
}

.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
/* 把页面切换的背景色设置为和主背景颜色相同 */
.el-pager li {
  background: #f4f6f9;
}

.el-pagination .btn-next,
.el-pagination .btn-prev {
  background-color: #f4f6f9;
}

.el-pagination button:disabled {
  background-color: #f4f6f9;
}

.myHeader2 {
  height: 300px;
  background-image: url(../../image/report.png);
  background-size: cover;
}
/* 主界面模板的样式 */
// .main-view .el-header {
//   color: #ffffff;
//   background-image: url("../../image/report.png");
//   background-size: cover;
// }
// .up-menu {
//   height: 55px;
//   width: 100%;
//   align-items: center;
// }
.el-main {
  background-color: #f4f6f9;
}
// .el-footer {
//   background-color: #202741;
//   color: #dddcdc;
//   height: 40px;
//   font-size: 8px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }
// .flex-grow {
//   flex-grow: 1;
// }
</style>