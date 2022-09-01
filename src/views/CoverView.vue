<template>
  <div>
    <el-container style="height: fit-content">
      <el-header>
        <InfoHeader />
      </el-header>
      <el-main style="background-color: #f5f5f5">
        <!-- 这里是页面内容 -->
        <!-- 地图定位到当前地点并显示其周围信息 -->
        <gaodeMap></gaodeMap>
        <div id="release">
          <el-button
            @click="goReleaseMissingInfo()"
            color="#044C90"
            :dark="isDark"
            >发布寻人信息</el-button
          >
        </div>
        <div class="slogen" background-image="../../image/map-test.png">
          千里寻人，你我助力
        </div>
        <Search></Search>

        <div style="margin-top: 1%; margin-right: 1%; margin-bottom: 1%">
          <h
            style="
              padding-right: 85%;
              font-size: 8px;
              font-weight: 600;
              color: #c2c2c2;
            "
          >
            共搜索到
            <h style="color: #2e74b6"> {{ searchNum }}条 </h>寻人信息
          </h>
        </div>
        <lostInformationBlock></lostInformationBlock>

        <div
          class="demo-pagination-block"
          style="margin-left: 30%; margin-top: 30px"
        >
          <div class="demonstration"></div>
          <el-pagination
            v-model:currentPage="LostInfo.pagenum"
            v-model:page-size="LostInfo.pagesize"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>

        <div class="last-page">
          <div class="bottom-style">
            <div class="logo-bottom">
              <img class="hand" src="../../image/hand.jpg" />
            </div>
            <div class="total-number">
              <div class="total-item">
                |已发布启事 {{ padding1(itemNum, length) }}个
              </div>
              <div class="total-item">
                |共收到线索 {{ padding1(clueNum, length) }}条
              </div>
              <div class="total-item">
                |累计已帮助 {{ padding1(peopleNum, length) }}人
              </div>
            </div>
          </div>
        </div>
      </el-main>

      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
//引入的自定义组件命名必须是Xxxx或xxxXxxx
import InfoHeader from "@/views/Frontstage/InfoHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
import Search from "@/components/Search.vue";
import lostInformationBlock from "@/components/lostInformationBlock";
import gaodeMap from "@/components/GaodeMap";
import { random } from "lodash";
// this.$axios.defaults.baseURL = 'http://localhost:8080/mainmenu'
// this.$axios.defaults.timeout = 1000

export default {
  components: {
    Search,
    lostInformationBlock,
    gaodeMap,
    InfoHeader,
    Footer,
  },
  data() {
    return {
      //筛选到多少条信息
      searchNum: 130,
      //统计数据保留的位数
      length: 7,
      //统计数据
      itemNum: Math.random() * 10000,
      clueNum: Math.random() * 10000,
      peopleNum: Math.random() * 10000,
      //分页
      total: 50,
      LostInfo: {
        query: "",
        pagenum: 1,
        pagesize: 1,
      },
    };
  },
  methods: {
    goReleaseMissingInfo() {
      this.$router.push({ path: "/up_missingperson", query: {} });
    },
    //分页
    handleSizeChange(newSize) {
      console.log(newSize);
      this.LostInfo.pagesize = newSize;
      // this.userlistinfo()
    },
    // 监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      //把最新的页码（newPage）赋值给 动态的 pagenum
      this.pagenum = newPage;
      //this.userlistinfo()

      //axios还不完善
      // this.$axios({
      //   url: baseUrl + "product-comments/getCommentsByProId/" + this.productId,
      //   methods: "get",
      //   params: {
      //     pageNum: this.pageNum,
      //     pageSize: this.pageSize,
      //   }
      // }).then((res) => {
      //   console.log(res.data);
      //   //得到数据 重新渲染即可
      //   let vo = res.data.data;
      //   this.productComments = vo
      //   this.pageCount = vo.total
      // })
    },
    //迭代方法补0
    padding1(num, length) {
      num = parseInt(num);
      for (var len = (num + "").length; len < length; len = num.length) {
        num = "0" + num;
      }
      return num;
    },
  },
};
</script>


<!-- css -->
<style scoped>
/* .main-view .el-header {
  color: #ffffff;
  /* background-image: url("../../image/relevent-department.png"); */
/*background-size: cover;
} */
/* .up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
} */
/* .pages-item {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  color: #2e74b6;
} */
/* .el-footer {
  background-color: #202741;
  color: #dddcdc;
  height: 40px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
} */
/* .flex-grow {
  flex-grow: 1;
} */
#release {
  z-index: 1;
  padding: 0;
  width: 180%;
  margin-top: 20px;
  margin-right: 10px;
}
.slogen {
  z-index: 1;
  color: #2e74b6;
  padding-left: 30%;
  padding-right: 30%;
  padding-top: 10px;
  font-size: 40px;
  font-weight: bold;
}
.el-row:first-child {
  margin-top: 20px;
}
.el-row:last-child {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  background-color: #2e74b6;
  color: #ffffff;
  font-size: 6px;
  margin-bottom: 5px;
  margin-top: 5px;
  min-height: 36px;
}
.grid-content-right {
  color: #2e74b6;
}

.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.last-page {
  margin-top: 40px;
  background-color: #32495e;
}
.last-page .bottom-style {
  padding-top: 100px;
  display: flex;
}
.last-page .bottom-style .logo-bottom {
  width: 60%;
}
.last-page .bottom-style .hand {
  display: flex;
  width: 80%;
  height: 100%;
  margin-bottom: 0;
  margin-left: 40px;
}
.last-page .bottom-style .total-number {
  margin-left: 0;
}
.last-page .bottom-style .total-number .total-item {
  color: #ffffff;
  font-size: 26px;
  font-family: "Oxygen";
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
  padding-top: 25px;
}
</style>




