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
            v-if="volInstInfo.inst_pic != null"
            lazy
            :src="volInstInfo.inst_pic"
            class="image"
          />
          <!-- <el-image lazy :src="instPic" class="image" /> -->
          <el-image
            v-if="volInstInfo.inst_pic == null"
            lazy
            src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg"
            class="image"
          />
          <!--el-card :body-style="{ padding: '0px' }" shadow="never"-->
          <div>
            <div class="title">{{ volInstInfo.inst_name }}</div>
            <div class="info">
              <div>成立时间：{{ volInstInfo.inst_fundationTime }}</div>
              <div>机构地点：{{ volInstInfo.inst_address }}</div>
              <div>联络方式：{{ volInstInfo.inst_contactMethod }}</div>
            </div>
            <!--div v-for="o in 5" :key="o" class="text item">{{ 'List item ' + o }}</!--div-->
          </div>
          <!--/el-card-->
        </el-row>
        <el-col class="toptext">队伍简介</el-col>
        <el-divider />
        <div v-if="volInstInfo.inst_Introduce != null" class="text">
          {{ volInstInfo.inst_Introduce }}
        </div>
        <div v-if="volInstInfo.inst_Introduce == null" class="text">
          暂无简介
        </div>
        <!--div class="text">
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
          这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****
        </!--div-->
        <el-col class="toptext">机构证书</el-col>
        <el-divider />
        <el-image
          v-if="volInstInfo.inst_credUrl != null"
          lazy
          :src="volInstInfo.inst_credUrl"
          class="certificate"
        />
        <!-- <el-image lazy :src="instPic" class="certificate" /> -->
        <el-image
          v-if="volInstInfo.inst_credUrl == null"
          lazy
          src="https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg"
          class="certificate"
        />
      </el-main>
      <Footer></Footer>
    </el-container>
  </div>
</template>

<script>
import api from "/src/api/index";
import { useRoute } from "vue-router";
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
    const route = useRoute();
    const inst_id = route.query.inst_id;
    console.log("接收到的志愿活动id", inst_id);
    let volInstInfo = ref([]);
    let instPic =
      "https://yixun-picture.oss-cn-shanghai.aliyuncs.com/user_head/1.jpeg";
    //axios
    //.get("/api/volActInfo")
    api
      .getVolInstInfo(inst_id)
      .then((res) => {
        console.log("请求成功", res);
        //volInstInfo.value = res.data.volInstInfo;
        volInstInfo.value = res.data.data;
        console.log("获取数据", volInstInfo);
      })
      .catch((err) => {
        console.log("请求失败", err);
      });
    return {
      currentDate,
      instPic,
      volInstInfo,
    };
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
  float: left;
  object-fit: contain;
  width: auto;
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
.toptext {
  margin-top: 50px;
  height: 30px;
  text-align: left;
  color: #2e74b6;
  font-size: 30px;
}

/*格式调整*/
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

.certificate {
  float: left;
  object-fit: contain;
  width: auto;
  height: 200px;
  margin-right: 50px;
  display: block;
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