<template>
  <div style="min-width: 500px">
    <!--class="common-layout"-->
    <el-container style="height: fit-content">
      <el-header class="myHeader3">
        <MainHeader />
        <div style="margin-top: 100px; font-size: 30px; color: white">
          志愿活动
        </div>
      </el-header>
      <el-main>
        <el-row class="search">
          <el-input
            v-model="inputAct"
            placeholder="请输入志愿活动名..."
            :prefix-icon="Search"
            clearable
            @change="goSearchAct"
          />
        </el-row>
        <el-col class="toptext">志愿活动</el-col>
        <!--el-link class="linktext">更多>></!--el-link-->
        <el-divider />
        <div v-if="volActList.length == 0">无相关内容</div>
        <el-row
          style="min-height: 300px"
          type="flex"
          justify-content="flex-start"
        >
          <!--列元素居中-->
          <el-col
            v-for="actitem in volActList"
            :key="actitem.VolActId"
            :span="6"
          >
            <!--el-card的背景图片还未更改使用变量-->
            <el-card
              @click="goActInfo(actitem.VolActId)"
              class="mycard"
              :body-style="{ padding: '0px' }"
            >
              <el-image
                v-if="actitem.ActPicUrl == null"
                style="width: 100%; height: 150px"
                :src="pic"
                fit="cover"
              />

              <el-image
                v-if="actitem.ActPicUrl != null"
                style="width: 100%; height: 150px"
                :src="actitem.ActPicUrl"
                :fit="cover"
              />

              <div class="bottom">
                <div style="color: #67bbff; font-size: 15px; margin: 0 0 10px">
                  {{ actitem.VolActName }}
                </div>
                <div>
                  位置：{{
                    codeToText(actitem.Province, actitem.City, actitem.Area)
                  }}
                </div>
                <div>志愿时间：{{ actitem.ExpTime }}</div>
                <div>
                  人数：{{ actitem.SignupPeople }}/{{ actitem.Needpeople }}人
                </div>
                <div>
                  <el-button type="primary" class="button" round
                    >了解详情</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <div class="Parent">
          <!--分页-->
          <el-pagination
            v-model:page-size="pagesize"
            :current-page="currentPage"
            :total="total"
            layout="total,prev, pager, next, jumper"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
//import axios from "axios";
import api from "/src/api/index";
import { CodeToText } from "element-china-area-data";
import { ref } from "vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import { Search } from "@element-plus/icons-vue";
export default {
  name: "ref",
  data() {
    return {
      inputAct: "",
      currentPage: 1, //页码
      pagesize: 8, //每页的数量
    };
  },
  components: {
    MainHeader,
    Footer,
  },

  setup() {
    const currentDate = ref(new Date());
    // let input = ref("");
    // console.log("输入内容", input);
    let volActList = ref([]);
    // let volActAll = ref([]);
    // let volActSearch = ref([]);
    let pageNum = ref(1);
    let pageSize = ref(8);
    let total = ref(0);
    let pic =
      "https://yixun-picture.oss-cn-shanghai.aliyuncs.com/user_head/1.jpeg";
    //let inputAct = ref("就很好");
    //axios
    //.get("/api/volAct")
    api //获取所有的志愿活动列表
      .getVolAct(pageNum.value, pageSize.value)
      .then((res) => {
        console.log("请求成功", res);
        volActList.value = res.data.data.activity_list;
        //volActAll.value = res.data.volActAll;
        total.value = res.data.data.total;
        //console.log("获取数据", this.volActList);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });

    return {
      Search,
      pic,
      currentDate,
      pageNum,
      pageSize,
      total,
      volActList,
      // volActAll,
      // volActSearch,
    };
  },
  // mounted() {
  //   this.goSearchAct();
  // },
  methods: {
    codeToText(province, city, area) {
      return CodeToText[province] + CodeToText[city] + CodeToText[area];
    },
    goActInfo(actID) {
      console.log("志愿活动id:", actID);
      //跳转至活动详情页面
      this.$router.push({
        path: "/volunActInfo",
        //params: {  }, path和params不能同时使用，会使params失效，要用params需要将path替代为name(router名)
        query: { act_id: actID },
      });
    },
    //搜索志愿活动
    goSearchAct() {
      api
        .getActSearch(this.inputAct, this.pageNum, this.pageSize)
        .then((res) => {
          console.log("搜索成功", res);
          this.volActList = res.data.data.activity_list;
          this.total = res.data.data.total;
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
      // }
    },
    //更新分页
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.currentPage = newPage; //重新指定当前页
      this.goSearchAct();
    },
  },
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
.Parent {
  display: flex;
}
.el-pagination {
  margin: auto;
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
  /* background-image: url(../assets/hands.png); */
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 30px;
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
  margin-top: 0%;
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