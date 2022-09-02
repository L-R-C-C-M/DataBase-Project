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
            v-if="volActInfo.activity_pic != null"
            lazy
            :src="volActInfo.activity_pic"
            class="InstImage"
          />
          <!-- 默认图片 -->
          <el-image
            v-if="volActInfo.activity_pic == null"
            lazy
            src="https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg"
            class="InstImage"
          />
          <!-- <el-image lazy :src="pic" class="InstImage" /> -->
          <div>
            <div class="title">{{ volActInfo.activity_name }}</div>
            <div class="actInfo">
              <div>项目编号：{{ volActInfo.activity_id }}</div>
              <div>
                招募人数：{{ volActInfo.activity_signupPeople }}/{{
                  volActInfo.activity_needpeople
                }}人
              </div>
              <div>服务时间：{{ volActInfo.activity_expTime }}</div>
              <div>服务地点：{{ volActInfo.activity_address }}</div>
              <div>发起机构：{{ volActInfo.activity_inst }}</div>
              <div>联络方式：{{ volActInfo.activity_contactMethod }}</div>
            </div>

            <!--普通用户禁止报名-->
            <el-button
              v-show="
                !isVolunteer &&
                volActInfo.activity_signupPeople <
                  volActInfo.activity_needpeople
              "
              type="primary"
              class="actButton"
              round
              disabled
              >志愿者可报名</el-button
            >
            <!--普通用户且报名人数已满或已到报名时间，则报名结束-->
            <el-button
              v-show="
                !isVolunteer &&
                (!volActInfo.is_overdue ||
                  volActInfo.activity_signupPeople >=
                    volActInfo.activity_needpeople)
              "
              type="primary"
              class="actButton"
              round
              disabled
              >报名结束</el-button
            >
            <!--是志愿者但已到活动时间或报名人数已满，则报名结束-->
            <el-button
              v-show="
                isVolunteer &&
                (!volActInfo.is_overdue ||
                  volActInfo.activity_signupPeople >=
                    volActInfo.activity_needpeople)
              "
              type="primary"
              class="actButton"
              round
              @click="goSignUp(vol_id, volActInfo.activity_id)"
              disabled
              >报名结束</el-button
            >

            <!--是志愿者且报名人数未满、报名时间未截止，则可以报名-->
            <el-button
              v-show="
                isVolunteer &&
                volActInfo.is_overdue &&
                volActInfo.activity_signupPeople <
                  volActInfo.activity_needpeople
              "
              type="primary"
              class="actButton"
              round
              @click="goSignUp()"
              >{{ signup }}</el-button
            >
          </div>
        </el-row>
        <el-col class="toptext">活动详情</el-col>
        <el-divider />
        <div v-if="volActInfo.activity_content == null" class="text">
          暂无活动介绍
        </div>
        <div v-if="volActInfo.activity_content != null" class="text">
          {{ volActInfo.activity_content }}
        </div>
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
  setup() {
    const currentDate = ref(new Date());
    console.log("当前时间", currentDate);
    const route = useRoute();
    const act_id = route.query.act_id;
    console.log("接收到的志愿活动id", act_id);

    const vol_id = 2;
    let signup = ref("我要报名");
    let is_applied = ref(false);
    let volActInfo = ref([]);
    let isVolunteer = ref(true);
    let pic =
      "https://yixun-picture.oss-cn-shanghai.aliyuncs.com/user_head/1.jpeg";
    //axios
    //.get("/api/volActInfo")
    api //获取单个志愿活动详细信息
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
    //console.log("志愿者", vol_id);
    //console.log("志愿活动", act_id);

    api //获取志愿者是否已报名当前志愿活动
      .getApplyState(vol_id, act_id)
      .then((res) => {
        console.log("判断成功", res);
        is_applied.value = res.data.data.is_applied;
        if (is_applied.value == "true") signup.value = "已报名";
      })
      .catch((err) => {
        console.log("判断失败", err);
      });

    return {
      pic,
      vol_id,
      act_id,
      is_applied,
      signup,
      currentDate,
      volActInfo,
      isVolunteer,
    };
  },
  mounted() {
    // const act_id = this.$route.query.act_id;
    // console.log("mounted接收到的志愿活动id", act_id);
    //this.checkApplyState();
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goSignUp() {
      api
        .getSignUp(this.vol_id, this.act_id)
        .then((res) => {
          // console.log("报名", res);
          // console.log("报名的志愿者id", this.vol_id);
          // console.log("报名的志愿活动id", this.act_id);

          if (this.is_applied == "false") {
            console.log("ApplyState", res.data.data.ApplyState);
            if (res.data.data.ApplyState) {
              //报名成功
              this.signup = "报名成功，请及时联系负责人";
              this.is_applied = "true"; //修改报名状态
              this.volActInfo.activity_signupPeople += 1;
            }
            //报名失败
            else this.signup = "报名失败，请稍后重试";
          } else {
            //原先已报名
            if (res.data.data.ApplyState)
              //取消报名失败
              this.signup = "取消报名失败，请稍后重试";
            else {
              this.signup = "我要报名";
              this.is_applied = "false"; //修改报名状态
              this.volActInfo.activity_signupPeople -= 1;
            }
          }
        })
        .catch((err) => {
          console.log("报名失败", err);
        });
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
.InstImage {
  object-fit: contain;
  width: auto;
  height: 250px;
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
.actInfo {
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
  width: 100%;
  min-width: fit-content;
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