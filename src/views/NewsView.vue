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
                v-model="search_info"
                class="search-width"
                size="default"
                placeholder="搜索资讯..."
                :suffix-icon="Search"
                clearable
                @clear="clear"
                @keyup.enter="getSearch"
              />
              <el-button style="margin-left: 5px" @click="getSearch"
                >搜索</el-button
              >
            </div>
          </el-col>
        </el-row>
        <!-- 这是筛选按钮 -->
        <el-row>
          <el-col :span="6" :offset="2">
            <el-button @click="getType1">全部</el-button>
            <el-button @click="getType2">寻人新闻</el-button>
            <el-button @click="getType3">寻人政策</el-button>
          </el-col>
        </el-row>
         
        <!-- 这是资讯内容 -->   
        <div class="containerFlex">
          <div
            class="box1"
            v-for="(item, index) in news_list"
            :key="index"
            @click="goNewsInfo(news_list[index].NewsId)"
          >
            <div class="cover">
              <el-image
                style="width: 300px; height: 150px"
                :src="news_list[index].Cover"
                fit="cover"
              ></el-image>
            </div>

            <div class="title">{{ news_list[index].Title }}</div>
            <div class="text">
              {{ news_list[index].NewsContent.substring(0, 150) }}
            </div>
          </div>
        </div>

        <!-- 这是页数选择 -->
        <div
          class="example-pagination-block"
          style="display: flex; justify-content: center"
        >
          <el-pagination
            v-model:page-size="pagesize"
            :current-page="currentPage"
            layout="prev, pager, next"
            :total="total"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import api from "/src/api/index";
import { Search } from "@element-plus/icons-vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
export default {
  components: {
    MainHeader,
    Footer,
    Search,
  },
  data() {
    return {
      news_list: [], //资讯信息
      currentPage: 1, //页码
      pagesize: 3, //每页的数量
      total: 0, //总条目数
      news_type: "全部",//资讯类型
      search_info: "", //搜索框内容
      search: "",//传给api的搜索参数
    };
  },
  mounted() {
    this.getNewsCard();
  },

  methods: {
    //点击跳转
    goNewsInfo(news_id) {
      console.log("资讯id:", news_id);
      //跳转至资讯详情页面
      this.$router.push({
        path: "/newsInfo",
        query: { NewsId: news_id },
      });
    },
    //获取寻人资讯卡片信息
    getNewsCard() {
      api
        .newsCard(this.news_type, this.currentPage, this.pagesize)
        .then((res) => {
          console.log("请求成功", res.data);
          this.news_list = res.data.data.news_list;
          this.total = res.data.data.total;
          console.log("获取数据", this.news_list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    //搜索寻人资讯
    searchNewsInfo() {
      api
        .searchNews(this.search, this.currentPage, this.pagesize)

        .then((res) => {
          console.log("输入参数：",this.search);
          console.log("请求成功", res.data);
          this.news_list = res.data.data.news_list;
          this.total = res.data.data.total;
          console.log("获取数据", this.news_list);
        })
        .catch((err) => {
          console.log("请求失败", err);
        });
    },
    //获取搜索框信息
    getSearch() {
      this.search = this.search_info;
      this.searchNewsInfo();
    },
    //分类筛选
    getType1() {
      this.news_type = "全部";
      this.getNewsCard();
    },
    getType2() {
      this.news_type = "寻人新闻";
      this.getNewsCard();
    },
    getType3() {
      this.news_type = "寻人政策";
      this.getNewsCard();
    },

    //分页
    handleCurrentChange(newPage) {
      console.log(newPage);
      this.currentPage = newPage; //重新指定当前页
      this.getNewsCard();
    },
  },
  // setup() {
  //   const search = ref("");
  //   return {
  //     search,
  //   };
  // },
};
</script>

<style lang="less">
.search-width {
  width: 300px;
  color: #202741;
}
.cover {
  // background-color: rgb(135, 160, 236);
  width: 300px;
  height: 150px;
  float: right;
  margin-top: 35px;
  margin-right: 15px;
  display: inline;
}
.title {
  width: 350px;
  text-align: left;
  font-size: 23px;
  font-weight: 700;
  margin-top: 25px;
  margin-left: 15px;
}
.text {
  width: 350px;
  font-size: 13px;
  text-align: left;
  margin-left: 15px;
  margin-top: 10px;
}
.containerFlex {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
}

.box1 {
  width: 700px;
  height: 220px;
  background: #ffffff;
  border-radius: 10px;
  margin-bottom: 15px;
  // line-height: 200px;
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
.el-main {
  background-color: #f4f6f9;
}
</style>