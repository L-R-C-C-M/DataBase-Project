<template>
  <el-container style="height: fit-content">
    <el-header class="myHeader3">
      <MainHeader />
      <div style="margin-top: 100px; font-size: 30px; color: white">
        志愿活动
      </div>
    </el-header>
    <el-main>
      <div class="overBlock">
        <el-col class="toptext">志愿活动</el-col>
        <router-link to="/volunAct" class="linktext">更多>></router-link>
        <!--el-link class="linktext">更多>></!--el-link-->
        <el-divider />
        <el-row type="flex" justify="space-around" style="align-items: center">
          <!--列元素居中-->
          <el-col v-for="o in 4" :key="o" :span="5">
            <el-card
              @click="goAct()"
              class="mycard"
              :body-style="{ padding: '0px' }"
            >
              <div class="bottom">
                <div style="color: #67bbff; font-size: 15px; margin: 0 0 10px">
                  "宝贝回家"志愿活动
                </div>
                <div style="background-color: #ffffff">位置：</div>
                <div>志愿时间：</div>
                <div>人数：</div>
                <div>联系人：</div>
                <div>
                  <el-button type="primary" class="button" round
                    >了解详情</el-button
                  >
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <div class="overBlock">
        <el-col class="toptext">志愿机构</el-col>
        <router-link to="/volunInst" class="linktext">更多>></router-link>
        <!--el-link class="linktext">更多>></!--el-link-->
        <el-divider />
        <el-row type="flex" justify="space-around" style="align-items: center">
          <!--列元素居中-->
          <el-col v-for="o in 4" :key="o" :span="5">
            <el-card
              @click="goOrgan()"
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
          </el-col>
        </el-row>
      </div>

      <div class="overBlock">
        <el-col class="toptext">志愿者排行榜</el-col>
        <el-divider />
        <el-row type="flex" justify="space-around" style="align-items: center">
          <!--列元素居中-->
          <el-col :span="11" class="rank">
            <el-row
              v-for="o in 5"
              :key="o"
              class="ranktop"
              style="align-items: center"
            >
              <el-avatar shape="circle" :src="squareUrl" />
              <el-col :span="7">刘琳琳</el-col>
              <el-col :span="7">222222小时</el-col>
              <el-col :span="7">{{ "No." + o }}</el-col>
            </el-row>
          </el-col>
          <div class="divideLine"></div>

          <!--el-divider direction="vertical" /-->

          <el-col :span="11" class="rank">
            <el-row
              v-for="o in 5"
              :key="o"
              class="ranktop"
              style="align-items: center"
            >
              <el-avatar shape="circle" :src="squareUrl" />
              <el-col :span="7">刘琳琳</el-col>
              <el-col :span="7">222222小时</el-col>
              <el-col :span="7">{{ "No." + (o + 5) }}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <Footer></Footer>
  </el-container>
</template>

<script>
import { ref } from "vue";
import MainHeader from "@/views/Frontstage/MainHeader.vue";
import Footer from "@/views/Frontstage/Footer.vue";
export default {
  name: "ref",
  components: {
    MainHeader,
    Footer,
  },
  setup() {
    const currentDate = ref(new Date());
    return {
      currentDate,
    };
  },
  methods: {
    goAct() {
      //跳转至活动详情页面
      this.$router.push({ path: "/volunActInfo", query: {} });
    },
    goOrgan() {
      //跳转至机构详情页面
      this.$router.push({ path: "/volunInstInfo", query: {} });
    },
  },
};
</script>

<style scoped>
.myHeader3 {
  height: 300px;
  background-image: url(../../image/volun.png);
  background-size: cover;
  /* position: relative; */
}
.el-main {
  background-color: #f4f6f9;
  position: relative;
  padding: 2% 5% 2%;
  width: 100%;
  /*top: 250px;
  bottom: 0;
  position: absolute;*/
}
/* .el-footer {
  background-color: #202741;
  color: #dddcdc;
  height: 40px;
  font-size: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
} */
.overBlock {
  margin-bottom: 5%;
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

.mycard {
  background-color: #ffffff;
  border-radius: 10%;
  background-image: url(../assets/hands.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 10px;
}
.bottom {
  border-radius: 10%;
  background-color: #ffffff;
  padding: 14px;
  text-align: left;
  font-size: 8px;
  line-height: 18px;
  margin-top: 50%;
  margin-bottom: 5px;
}

.button {
  float: right;
  background-color: #67bbff;
  padding: 0px;
  width: 40%;
  min-height: fit-content;
  font-size: 10px;
  margin-bottom: 5px;
}
.OrganCard {
  border-radius: 10%;
  background-color: #ffffff;
  margin: 10px;
}
.botInfo {
  padding: 5%;
  min-height: auto;
  font-size: 16px;
  background-color: #ffffff;
}
.rank {
  padding: 2% 2% 2%;
}
.ranktop {
  background-color: #ffffff;
  border-radius: 20px;
  margin: 5% 0 5%;
}

.el-divider--vertical {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  height: 20em;
  width: 0.5px;
  background-color: #044c90;
  border-style: dashed;
  border-spacing: 1px;
  /*border:1px dashed #044C90;*/
}

.divideLine {
  position: absolute;
  /*right: 10px;*/
  width: 1px;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    #044c90 0%,
    #044c90 80%,
    transparent 50%
  );
  background-size: 100% 18px;
  background-repeat: repeat-y;
}
/*.cardImage {
    width: 100%;
    display: block;
}*/
</style>