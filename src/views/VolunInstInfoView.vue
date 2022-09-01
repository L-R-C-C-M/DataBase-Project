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
          <!--el-card :body-style="{ padding: '0px' }" shadow="never"-->
          <div>
            <div class="title">上海市嘉定区同济大学团工委</div>
            <div class="info">
              <div>成立时间：</div>
              <div>机构地点：</div>
              <div>联络方式：</div>
            </div>
            <!--div v-for="o in 5" :key="o" class="text item">{{ 'List item ' + o }}</!--div-->
          </div>
          <!--/el-card-->
        </el-row>
        <el-col class="toptext">队伍简介</el-col>
        <el-divider />
        <div class="text">
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
        </div>
        <el-col class="toptext">机构证书</el-col>
        <el-divider />
        <el-image
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="certificate"
        />
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
  width: 20%;
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