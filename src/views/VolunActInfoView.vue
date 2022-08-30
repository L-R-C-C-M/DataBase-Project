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
          <!--el-image还要更改-->
          <!--el-image
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          /-->
          <el-image src="volActInfo.activity_pic" class="image" />
          <!--el-card :body-style="{ padding: '0px' }" shadow="never"-->
          <div>
            <div class="title">{{ volActInfo.activity_name }}</div>
            <div class="info">
              <div>项目编号：{{ volActInfo.activity_id }}</div>
              <div>
                招募人数：{{ volActInfo.activity_signupPeople }}/{{
                  volActInfo.activity_needpeople
                }}人
              </div>
              <div>服务时间：{{ volActInfo.activity_expTime }}</div>
              <div>服务地点：{{ volActInfo.activity_address }}</div>
              <div>发起机构：{{ volActInfo.activity_inst }}</div>
            </div>

            <!--el-button要根据用户类型显示（普通用户禁用，可以设置一个变量用来表明是否禁用在setup里赋值）-->
            <el-button type="primary" class="actButton" round
              >我要报名</el-button
            >
          </div>

          <!--div>
            <div class="title">"宝贝回家"志愿活动</div>
            <div class="info">
              <div>项目编号：</div>
              <div>招募人数：</div>
              <div>服务时间：</div>
              <div>服务地点：</div>
              <div>发起机构：</div>
            </div>
            <el-button type="primary" class="actButton" round
              >我要报名</el-button
            >
          </!--div-->

          <!--/el-card-->
        </el-row>
        <el-col class="toptext">活动详情</el-col>
        <el-divider />
        <div class="text">
          {{ volActInfo.activity_content }}
        </div>
        <!--div class="text">
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
          这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
        </div-->
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import api from "/src/api/index";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";
import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
export default {
  name: "volunActInfoView",
  components: {
    InfoHeader,
    Footer,
  },
  // data() {
  //   return {

  //   }
  // },
  setup() {
    const currentDate = ref(new Date());
    const route = useRoute();
    const act_id = route.query.act_id;
    console.log("接收到的志愿活动id", act_id);
    // axios
    //   .post("/api/volActInfo")
    //   .then((res) => {
    //     console.log("请求成功", res);
    //     volActInfo = res.data.volActInfo;
    //   })
    //   .catch((err) => {
    //     console.log("请求失败", err);
    //   });
    //watch()

    let volActInfo = ref([]);
    //axios
    //.get("/api/volActInfo")
    api
      .getVolActInfo(act_id)
      .then((res) => {
        console.log("请求成功", res);
        //volActInfo.value = res.data.volActInfo;
        volActInfo.value = res.data.data;
        console.log("获取数据", volActInfo);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    return {
      currentDate,
      volActInfo,
    };
  },
  mounted() {
    // const act_id = this.$route.query.act_id;
    // console.log("mounted接收到的志愿活动id", act_id);
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.el-main {
  background-color: #f4f6f9;
  position: relative;
  padding: 2% 5% 2%;
  width: 100%;
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
.return {
  float: left;
  color: grey;
  font-size: 15px;
  margin-bottom: 30px;
}
.image {
  object-fit: contain;
  width: 40%;
  height: 300px;
  margin-right: 50px;
  /*display: block;*/
}
.title {
  text-align: left;
  font-size: 30px;
  color: #2e74b6;
  line-height: 50px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.info {
  padding: 14px;
  text-align: left;
  font-size: 14px;
  line-height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.actButton {
  float: left;
  background-color: #67bbff;
  padding: 0px;
  width: 50%;
  min-height: auto;
  margin-top: 10px;
  margin-bottom: 5px;
}
.toptext {
  margin-top: 50px;
  height: 30px;
  text-align: left;
  color: #2e74b6;
  font-size: 30px;
} /*格式调整*/
.el-divider {
  background-color: #67bbff;
  /*height: 36px;*/
  margin: 20px 0;
}
.text {
  padding-left: 20px;
  padding-right: 20px;
  text-align: left;
}

/*.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}*/

/*.bottom {
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}*/
</style>