<template>
  <div style="min-width: 500px">
    <!--class="common-layout"-->
    <el-container style="height: fit-content">
      <el-header class="myHeader3">
        <MainHeader />
      </el-header>
      <el-main>
        <el-row class="search">
          <el-input
            v-model="input"
            placeholder="Please Input"
            :suffix-icon="Search"
          />
        </el-row>
        <el-col class="toptext">志愿活动</el-col>
        <!--el-link class="linktext">更多>></!--el-link-->
        <el-divider />
        <el-row type="flex" justify="space-around" style="align-items: center">
          <!--列元素居中-->
          <el-col v-for="volitem in volActAll" :key="volitem.actID" :span="5">
            <el-card
              @click="goAct()"
              class="mycard"
              :body-style="{ padding: '0px' }"
            >
              <div class="bottom">
                <div style="color: #67bbff; font-size: 15px; margin: 0 0 10px">
                  {{ volitem.name }}
                </div>
                <div>位置：{{ volitem.addr }}</div>
                <div>志愿时间：{{ volitem.date }}</div>
                <div>人数：{{ volitem.tmpNum }}/{{ volitem.aimNum }}人</div>
                <div>
                  <el-button type="primary" class="button" round
                    >了解详情</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>

          <!--el-col v-for="o in 4" :key="o" :span="5">
            <el-card
              @click="goAct()"
              class="mycard"
              :body-style="{ padding: '0px' }"
            >
              <div class="bottom">
                <div style="color: #67bbff; font-size: 15px; margin: 0 0 10px">
                  "宝贝回家"志愿活动
                </div>
                <div>位置：</div>
                <div>志愿时间：</div>
                <div>人数：</div>
                <div>联系人：</div>
                <div>
                  <el-button type="primary" class="button" round
                    >我要报名</el-button
                  >
                </div>
              </div>
            </el-card>
          </!--el-col-->
        </el-row>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
//import axios from "axios";
import api from "/src/api/index";
import { ref } from "vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import { Search } from "@element-plus/icons-vue";
export default {
  name: "ref",
  components: {
    MainHeader,
    Footer,
    Search,
  },
  setup() {
    const currentDate = ref(new Date());
    const input = ref("");
    let volActAll = ref([]);
    //axios
    //.get("/api/volAct")
    api
      .volAct()
      .then((res) => {
        console.log("请求成功", res);
        volActAll.value = res.data.volActAll;
        console.log("获取数据", volActAll);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    return {
      currentDate,
      input,
      volActAll,
    };
  },
  methods: {
    goAct() {
      //跳转至活动详情页面
      this.$router.push({ path: "/volunActInfo", query: { index: "1" } });
    },
  },
  // watch: {
  //   // input(e) {
  //   // }
  // },
};
</script>

<style scoped>
.myHeader3 {
  height: 300px;
  background-image: url(../../image/volun.png);
  background-size: cover;
}
.el-main {
  background-color: #f4f6f9;
  position: relative;
  padding: 2% 5% 2%;
  width: 100%;
}
.toptext {
  height: 30px;
  text-align: left;
  color: #2e74b6;
  font-size: 30px;
} /*格式调整*/
.linktext {
  float: right;
  text-align: right;
  color: grey;
  font-size: 12px;
}
.el-divider {
  background-color: #67bbff;
  /*height: 36px;*/
  margin: 20px 0;
}
/*.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}*/
.search {
  float: right;
  text-align: right;
  width: 250px;
}
.mycard {
  border-radius: 10%;
  background-color: #ffffff;
  background-image: url(../assets/hands.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 10px;
}

/*.text {
  text-align:left;
  font-size: 14px;
}
.item {
  margin-top: 5px;
  margin-bottom: 5px;
}
.time {
  font-size: 12px;
  color: #999;
}*/
.bottom {
  border-radius: 10%;
  background-color: #ffffff;
  padding: 14px;
  text-align: left;
  font-size: 10px;
  line-height: 18px;
  margin-top: 50%;
  margin-bottom: 5px;
}
/*.bottom {
  line-height: 12px;
  display: flex;
  justify-content: space-between;/*在主轴上的对齐方式
  align-items: center;/*在交叉轴上的对齐方式 
}*/
.button {
  float: right;
  background-color: #67bbff;
  padding: 0px;
  width: 40%;
  min-height: fit-content;
  font-size: 10px;
  margin-bottom: 5px;
}
/*.cardImage {
  width: 100%;
  display: block;
}*/
</style>