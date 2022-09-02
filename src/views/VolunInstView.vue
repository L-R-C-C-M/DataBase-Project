<template>
  <div>
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
            v-model="inputInst"
            class="search"
            placeholder="请输入志愿机构名..."
            :prefix-icon="Search"
            clearable
            @change="goSearchInst"
          />
        </el-row>
        <el-col class="toptext">志愿机构</el-col>
        <!--el-link class="linktext">更多>></!--el-link-->
        <el-divider />
        <div v-if="volInstList.length == 0">无相关内容</div>
        <el-row
          style="min-height: 300px"
          type="flex"
          justify-content="flex-start"
        >
          <!--列元素居中-->
          <el-col
            v-for="institem in volInstList"
            :key="institem.VolInstId"
            :span="6"
          >
            <el-card
              @click="goInstInfo(institem.VolInstId)"
              class="InstCard"
              :body-style="{ padding: '0px' }"
            >
              <el-row style="padding: 10% 5% 0">
                <el-col :span="6">
                  <el-avatar
                    v-if="institem.InstPicUrl != null"
                    shape="square"
                    :src="institem.InstPicUrl"
                  />
                  <!-- 默认头像 -->
                  <el-avatar
                    v-if="institem.InstPicUrl == null"
                    style=""
                    shape="square"
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    fit="cover"
                  />
                  <!-- <el-avatar shape="square" :src="pic" fit="fill" /> -->
                </el-col>
                <el-col :span="18">
                  <div
                    style="color: #67bbff; font-size: 15px; padding-bottom: 5%"
                  >
                    {{ institem.InstName }}
                  </div>
                  <div style="font-size: 12px; text-align: left">
                    {{ institem.InstSlogan }}
                  </div>
                  <div style="font-size: 12px; text-align: left">
                    |位置：{{
                      codeToText(
                        institem.Province,
                        institem.City,
                        institem.Area
                      )
                    }}
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="botInfo">
                  <div style="color: #2e74b6">{{ institem.PeopleCount }}</div>
                  <div>组织人数</div>
                </el-col>
                <el-col :span="12" class="botInfo">
                  <div style="color: #2e74b6; background-color: #ffffff">
                    {{ institem.FundationTime }}
                  </div>
                  <div>成立时间</div>
                </el-col>
              </el-row>
            </el-card>
          </el-col>

          <!--el-col v-for="o in 4" :key="o" :span="5">
            <el-card
              @click="goInstInfo()"
              class="OrganCard"
              :body-style="{ padding: '0px' }"
            >
              <el-row style="padding: 10% 5% 0">
                <el-col :span="6">
                  <el-avatar shape="square" :src="squareUrl" />
                </el-col>
                <el-col :span="18">
                  <div
                    style="color: #67bbff; font-size: 15px; padding-bottom: 5%"
                  >
                    上海青年志愿者协会
                  </div>
                  <div style="font-size: 12px; text-align: left">
                    青春志，愿美好
                  </div>
                  <div style="font-size: 12px; text-align: left">
                    位置：上海市 徐汇区
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12" class="botInfo">
                  <div style="color: #2e74b6">11444</div>
                  <div>组织人数</div>
                </el-col>
                <el-col :span="12" class="botInfo">
                  <div style="color: #2e74b6; background-color: #ffffff">
                    2020/11
                  </div>
                  <div>成立时间</div>
                </el-col>
              </el-row>
            </el-card>
          </!--el-col-->
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
import api from "/src/api/index";
import { CodeToText } from "element-china-area-data";
import { ref } from "vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import { Search } from "@element-plus/icons-vue";
export default {
  name: "ref",
  components: {
    MainHeader,
    Footer,
  },
  data() {
    return {
      inputInst: "",
      currentPage: 1, //页码
      pagesize: 8, //每页的数量
    };
  },
  setup() {
    const currentDate = ref(new Date());
    //let inputInst = ref("益寻");
    // let volInstAll = ref([]);
    // let volInstSearch = ref([]);
    let volInstList = ref([]);
    let pageNum = ref(1);
    let pageSize = ref(8);
    let total = ref(0);
    api
      .getVolInst(pageNum.value, pageSize.value)
      .then((res) => {
        console.log("请求成功", res);
        volInstList.value = res.data.data.volInst_list;
        total.value = res.data.data.total;
        console.log("获取数据", volInstAll);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });

    return {
      Search,
      currentDate,
      pageNum,
      pageSize,
      total,
      volInstList,
      // volInstAll,
      // volInstSearch,
    };
  },
  methods: {
    codeToText(province, city, area) {
      return CodeToText[province] + CodeToText[city] + CodeToText[area];
    },
    goInstInfo(instID) {
      console.log("志愿机构id:", instID);
      //跳转至机构详情页面
      this.$router.push({
        path: "/volunInstInfo",
        //params: { index: "1" },
        query: { inst_id: instID },
      });
    },
    goSearchInst() {
      // if (this.inputInst === "") {
      //   this.volInstSearch = this.volInstAll;
      //   console.log("搜索空串", this.volInstSearch);
      // } else {
      api
        .getInstSearch(this.inputInst, this.pageNum, this.pageSize)
        .then((res) => {
          console.log("搜索成功", res);
          this.volInstList = res.data.data.volInst_list;
          this.total = res.data.data.total;
          //console.log("搜索结果", this.volInstList);
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
      this.goSearchInst();
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
  /*min-height: 400px;*/
  background-color: #f4f6f9;
  position: relative;
  padding: 2% 5% 2%;
  width: 100%;
  /*top: 250px;
  bottom: 0;
  position: absolute;*/
}
.Parent {
  display: flex;
}
.el-pagination {
  margin: auto;
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

.toptext {
  height: 30px;
  text-align: left;
  color: #2e74b6;
  font-size: 30px;
}

/*格式调整*/
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
.search {
  float: right;
  text-align: right;
  width: 250px;
}

/*.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}*/
.InstCard {
  border-radius: 10%;
  background-color: #ffffff;
  margin: 30px;
}
.botInfo {
  padding: 5%;
  min-height: auto;
  font-size: 16px;
  background-color: #ffffff;
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
/*.bottom {
    border-radius: 10%;
    background-color: #FFFFFF;
    padding: 14px;
    text-align: left;
    font-size: 10px;
    line-height: 18px;
    margin-top: 50%;
    margin-bottom: 5px;
}*/

/*.bottom {
  line-height: 12px;
  display: flex;
  justify-content: space-between;/*在主轴上的对齐方式
  align-items: center;/*在交叉轴上的对齐方式 
}*/
/*.button {
    float: right;
    background-color: #67BBFF;
    padding: 0px;
    min-height: fit-content;
    font-size: 10px;
    margin-bottom: 5px;
}*/

/*.cardImage {
  width: 100%;
  display: block;
}*/
</style>