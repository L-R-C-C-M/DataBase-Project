<template>
  <div>
    <!--class="common-layout"-->
    <el-container class="main-view" style="height:700px;">
      <el-header style="height:200px;">
        <el-menu :default-active="this.$router.path" router class="up-menu" mode="horizontal"
          background-color="rgba(0, 0, 0, 0)" text-color="#FFFFFF" active-text-color="#2E74B6" :ellipsis="false"
          @select="handleSelect">
          <el-image style="height:70%;width:20%;" :src="require('../../image/logo.png')" fit="contain" />
          <div class="flex-grow" />
          <el-menu-item index="0">寻人首页</el-menu-item>
          <el-menu-item index="/VolunOver">志愿活动</el-menu-item>
          <el-menu-item index="2">寻人资讯</el-menu-item>
          <el-menu-item index="3">相关部门信息</el-menu-item>
          <el-menu-item index="4">登录</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-row class="search">
          <el-input v-model="input" placeholder="Please Input" :suffix-icon="Search" />
        </el-row>
        <el-col class="toptext">志愿活动</el-col>
        <!--el-link class="linktext">更多>></!--el-link-->
        <el-divider />
        <el-row type="flex" justify="space-around" style="align-items: center">
          <!--列元素居中-->
          <el-col v-for="(o) in 4" :key="o" :span="5">
            <el-card @click="goAct()" class="mycard" :body-style="{ padding: '0px' }">
              <div class="bottom">
                <div style="color:#67BBFF;font-size:15px;margin:0 0 10px;">"宝贝回家"志愿活动</div>
                <div>位置：</div>
                <div>志愿时间：</div>
                <div>人数：</div>
                <div>联系人：</div>
                <div>
                  <el-button type="primary" class="button" round>我要报名</el-button>
                </div>
              </div>
            </el-card>


            <!--el-card :body-style="{ padding: '0px' }">
              <el-image src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="cardImage" />
              <div style="padding: 14px">
                <span>"宝贝回家"志愿活动</span>
                <div class="bottom">
                <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
                <time class="time">{{ currentDate }}</!--time>
                <el-button type="primary" class="button" round>我要报名</el-button>
                </div>
              </div>
            </!--el-card-->
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <el-image style="height:70%;width:20%;" :src="require('../../image/logo.png')" fit="contain" />
        <span style="display:block;text-align:right;">客服 : +7 700 000 000 <br /> yixun@163.edu</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search } from '@element-plus/icons-vue';
export default {
  name: "ref",
  setup() {
    const currentDate = ref(new Date());
    const input = ref('');
    return {
      currentDate,
      input,
      Search
    }
  },
  methods: {
    goAct() { //跳转至活动详情页面
      this.$router.push({ path: '/VolunAct', query: { index: '1' } });
    }
  },
  watch: {
    // input(e) {
    // }
  }
  
};
</script>

<style>
/*.el-header{
  position: relative;
  height:250px;
  width:100%;
  text-align: center;
  line-height: 60px;
  background-image: url(../assets/volun.png);
  background-repeat: no-repeat;
  background-size:100%;
}*/
.main-view .el-header {
  color: #FFFFFF;
  background-image: url("../assets/volun.png");
  background-size: cover;
}
.up-menu {
  height: 55px;
  width: 100%;
  align-items: center;
}
.flex-grow {
  flex-grow: 1;
}
.el-main {
    background-color: #F4F6F9;
    position: relative;
    padding: 2% 5% 2%;
    width: 100%;
  /*top: 250px;
  bottom: 0;
  position: absolute;*/
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
.toptext{
  height:30px;
  text-align: left;
  color:#2E74B6;
  font-size: 30px;
} /*格式调整*/
.linktext{
  float:right;
  text-align: right;
  color: grey;
  font-size: 12px;
}
.el-divider {
  background-color: #67BBFF;
  /*height: 36px;*/
  margin: 20px 0;
}
/*.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}*/
.search{
  float: right;
  text-align: right;
  width:250px;
}
.mycard {
  border-radius: 10%;
  background-color: #FFFFFF;
  background-image: url(../assets/hands.png);
  background-repeat: no-repeat;
  background-size: 100%;
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
  background-color: #FFFFFF;
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
  background-color:#67BBFF;
  padding: 0px;
  min-height: fit-content;
  font-size:10px;
  margin-bottom: 5px;
}
/*.cardImage {
  width: 100%;
  display: block;
}*/
</style>