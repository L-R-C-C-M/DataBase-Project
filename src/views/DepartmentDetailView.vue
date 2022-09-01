<template>
  <el-container style="height: fit-content">
    <el-header>
      <InfoHeader />
    </el-header>

    <el-main>
      <el-button @click="goBack()" type="text" class="return"
            >&lt;&lt;返回</el-button
          >
      <!-- <div class="quit" onclick="window.open('/department','_self')">
        {{ icon }}<span>返回</span>
      </div> -->
      <div style="margin-left: 35%; margin-top: 3%">
        <div class="title">{{this.dpinfo_list.DP_name}}</div>
        <div class="pic">
          <!-- <el-image
            style="width: 300px; height: 150px"
            :src="dpinfo_list.Cover"
            fit="cover"
          ></el-image> -->
        </div>
        <div style="text-align: left">
          <p>所在城市：{{ this.dpinfo_list.DP_city }}</p>
          <p>联系方式：{{ this.dpinfo_list.DP_contact }}</p>
          <p>官方网站：{{ this.dpinfo_list.DP_web }}</p>
          <p>详细地址：{{ this.dpinfo_list.DP_address }}</p>
        </div>
      </div>
    </el-main>

    <Footer></Footer>
  </el-container>
</template>

<script>
import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import api from "/src/api/index";

export default {
  data() {
    return {
      icon: "<<",
      dpid: null,
      dpinfo_list: [],
    };
  },

  components: { InfoHeader, Footer },

  mounted() {
    this.dpid = this.$route.query.DpId;
    console.log("mounted接收到的id：", this.dpid);
    this.getDepartmentDetail();
  },

  methods: {
    goBack() {
      this.$router.back();
    },
    getDepartmentDetail() {
      api
        .departmentDetail(this.dpid)
        .then((res) => {
          console.log("请求成功", res.data);
          this.dpinfo_list = res.data.data;
          //this.newstitle = res.data.data.news_title;
          //this.newstime = res.data.data.news_time;
          //console.log("获取数据", this.news_list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
  },
};
</script>

<style scoped>
.pic {
  width: 400px;
  height: 400px;
  background: #19568f;
}
.title {
  font-weight: 800;
  color: #19568f;
  text-align: left;
  margin-bottom:10px;
  font-size: 30px;
}
.return {
  float: left;
  color: grey;
  font-size: 15px;
  margin-bottom: 30px;
}
.quit {
  text-align: left;
  cursor: pointer;
}
</style>