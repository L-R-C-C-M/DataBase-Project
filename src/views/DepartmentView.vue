<!-- @author:杨芾卉-相关部门信息主页面（侧边导航） -->
<!-- 有bug 路由没有设置好 -->
<template>
  <el-container style="height: fit-content">
    <el-header class="myHeader4">
      <MainHeader />
      <div style="margin-top: 100px; font-size: 30px; color: white">
        相关部门信息
      </div>
    </el-header>

    <el-main style="padding: 0px; height: 100%">
      <div class="cascader">
        <!-- 这是左侧级联选择 -->
        <el-cascader-panel
          size="large"
          :options="options"
          @change="handleChange"
        >
        </el-cascader-panel>
        <div class="clear"></div>

        <div class="containerFlex">
          <div
            class="containerBox"
            v-for="(item, index) in dpt_list"
            :key="index"
          >
            <!-- 这是区名 -->
            <div class="area">{{ codeToText(dpt_list[index].Area) }}</div>
            <!-- 下面是卡片 -->
            <div class="info-box">
              <div style="margin-top: 7%">
                <span class="title">公安局</span>
                <div
                  class="detail"
                  @click="goDepartmentDetail(dpt_list[index].DpId)"
                >
                  查看{{ icon }}<br />
                </div>
              </div>
              <span>电话：{{ dpt_list[index].ContactMethod }}<br /></span>
              <span>地址：{{ dpt_list[index].Detail }}</span>
              <div style="margin-top: 7%">
                <span class="title">政府办</span>
                <div
                  class="detail"
                  onclick="window.open('/department/detail','_self')"
                >
                  查看{{ icon }}<br />
                </div>
              </div>
              <span>电话：0459-6666666<br /></span>
              <span>地址：黄浦区xx路xx号</span>
            </div>
          </div>
        </div>
      </div>
    </el-main>

    <Footer></Footer>
  </el-container>
</template>


<script>
import { ref } from "vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import { provinceAndCityData } from "element-china-area-data";
import api from "/src/api/index";
import { CodeToText } from "element-china-area-data";

export default {
  components: {
    MainHeader,
    Footer,
  },

  data() {
    return {
      icon: ">>",
      options: provinceAndCityData,
      dpt_list: [],
      start_value: ["450000", "450100"],
    };
  },
  mounted() {
    this.getDepartmentCard(this.start_value);
  },

  methods: {
    //点击跳转
    goDepartmentDetail(dp_id) {
      console.log("部门id:", dp_id);
      //跳转至资讯详情页面
      this.$router.push({
        path: "/department/detail",
        query: { DpId: dp_id },
      });
    },

    handleChange(value) {
      console.log(value[0]);
      console.log(value[1]);
      this.getDepartmentCard(value);
    },
    getDepartmentCard(value) {
      api
        .departmentCard(value[0], value[1])
        .then((res) => {
          console.log("请求成功", res.data);
          this.dpt_list = res.data.data.DP_list;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    //区域码转地址
    codeToText(area) {
      return CodeToText[area];
    },
  },
};
</script>

<!-- css -->
<style lang="less" scoped>
.el-cascader-panel {
  height: 600px;
}

.myHeader4 {
  height: 300px;
  background-image: url(../../image/relevent-department.png);
  background-size: cover;
}

/deep/.el-cascader-menu {
  background-color: #ffffff;
}

/deep/.el-scrollbar__wrap {
  height: 100%;
}

.containerBox {
  width: 350px;
  height: fit-content;
}
.el-main {
  background-color: #f4f6f9;
}

.area {
  font-weight: 900;
  margin-top: 10px;
  text-align: left;
  color: #19568f;
  font-size: 25px;
}

.cascader {
  display: flex;
  justify-content: space-between;
}
.info-box {
  width: 300px;
  height: 200px;
  /* margin-top: 30px; */
  /* margin-left: 30px; */
  /* margin-left: 35px; */
  margin-right: 35px;
  margin-bottom: 35px;
  margin-top: 20px;
  background: #ffffff;
  border-radius: 10px;
  text-align: left;
  box-shadow: 1px 1px 5px 0px rgb(78, 77, 77);
}
.containerFlex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;

  height: 100%;
  width: 1000px;
  text-align: center;
}
.clear {
  clear: both;
}
p {
  font-weight: 800;
  padding-top: 15px;
  padding-left: 5px;
  color: #19568f;
}
span {
  padding-left: 5px;
}
.title {
  font-weight: 800;
  color: #19568f;
  text-align: left;
}
.detail {
  display: inline;
  margin-left: 60%;
  cursor: pointer;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>