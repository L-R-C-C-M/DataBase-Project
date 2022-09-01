<template>
  <div>
    <!--class="common-layout"-->
    <el-container style="height: fit-content">
      <el-header>
        <InfoHeader />
      </el-header>
      <el-main>
        <el-row>
          <el-button @click="goBack()" type="text" class="return"
            >&lt;&lt;返回</el-button
          >
          <!--el-button @click="prev()">返回</!--el-button-->
        </el-row>
        <el-row>
          <el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div>
            <div class="info">
              <div>| 失踪人姓名：</div>
              <div>| 性别：</div>
              <div>| 年龄：</div>
              <div>| 详细地址：</div>
            </div>
          </div>
        </el-row>
        <el-col class="toptext">特征描述</el-col>
        <div class="text">特征描述</div>

        <el-col class="toptext">寻人线索</el-col>
        <el-row>
          <div class="text">寻人线索1</div>

          <div style="padding: 9px">
            <el-button type="primary" class="actButton" round size="small"
              >举报</el-button
            >
          </div>
        </el-row>

        <el-col class="toptext">跟进志愿者</el-col>
        <div class="text">跟进志愿者</div>

        <div style="padding: 50px 0px 15px 75px">
          <el-form :model="form" label-width="100px" style="max-width: 1500px">
            <el-form-item label="线索描述 ">
              <el-input
                v-model="reporttext"
                :autosize="{ minRows: 10, maxRows: 12 }"
                type="textarea"
              />
            </el-form-item>

            <el-button type="primary" class="actButton" round
              >发布线索</el-button
            >

            <el-button
              type="primary"
              class="actButton"
              round
              @click="goReport(index)"
              >举 报</el-button
            >
          </el-form>
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
export default {
  name: "ref",
  components: {
    InfoHeader,
    Footer,
  },
  setup() {
    const currentDate = ref(new Date());
    return {
      currentDate,
    };
  },
  methods: {
    goReport() {
      this.$router.push({ path: "/report", query: {} });
    },
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style>
/*.el-header.myHeader {
    position: relative;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 60px;
    background-image: none;
    background-color:#32495E;
}*/

/* .detail-view .el-header {
  background-color: #202741;
  color: #ffffff;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
}

.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}

.flex-grow {
  flex-grow: 1;
} */

.el-main {
  background-color: #f4f6f9;
  position: relative;
  padding: 2% 5% 2%;
  width: 100%;
}

/* .el-footer {
  background-color: #202741;
  color: #dddcdc;
  height: 40px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
} */

.return {
  float: left;
  color: grey;
  font-size: 15px;
  margin-bottom: 30px;
  margin-left: 100px;
}

.image {
  object-fit: contain;
  width: 20%;
  height: 250px;
  margin-right: 50px;
  margin-left: 300px;
}

.info {
  padding: 14px;
  text-align: left;
  font-size: 16px;
  line-height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
}

.toptext {
  margin-top: 50px;
  height: 30px;
  text-align: left;
  color: #2e74b6;
  font-size: 25px;
  margin-left: 100px;
  font-weight: bold;
}

.el-divider {
  background-color: #67bbff;
  margin: 20px 0;
}

.text {
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
  margin-top: 10px;
  margin-left: 100px;
}
</style>