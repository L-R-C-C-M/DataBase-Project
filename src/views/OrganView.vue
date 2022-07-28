<template>
    <div>
        <!--class="common-layout"-->
        <el-container class="main-view" style="height:700px;">
            <el-header style="height:200px;">
                <el-menu :default-active="this.$router.path" router class="up-menu" mode="horizontal"
                    background-color="rgba(0, 0, 0, 0)" text-color="#FFFFFF" active-text-color="#2E74B6"
                    :ellipsis="false" @select="handleSelect">
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
                    <el-input v-model="input" class="search" placeholder="Please Input" :suffix-icon="Search" />
                </el-row>
                <el-col class="toptext">志愿机构</el-col>
                <!--el-link class="linktext">更多>></!--el-link-->
                <el-divider />
                <el-row type="flex" justify="space-around" style="align-items: center">
                    <!--列元素居中-->
                    <el-col v-for="(o) in 4" :key="o" :span="5">
                        <el-card @click="goOrgan()" class="OrganCard" :body-style="{ padding: '0px' }">
                            <el-row style="padding:10% 5% 0">
                                <el-col :span="6">
                                    <el-avatar shape="square" :src="squareUrl" />
                                </el-col>
                                <el-col :span="18">
                                    <div style="color:#67BBFF;font-size:15px;padding-bottom: 5%;">上海青年志愿者协会</div>
                                    <div style="font-size:12px;text-align: left;">青春志，愿美好</div>
                                    <div style="font-size:12px;text-align: left;">位置：上海市 徐汇区</div>
                                </el-col>
                            </el-row>
                                <el-row>
                                    <el-col :span="12" class="botInfo">
                                        <div style="color:#2E74B6">11444</div>
                                        <div>组织人数</div>
                                    </el-col>
                                    <el-col :span="12" class="botInfo">
                                        <div style="color:#2E74B6;background-color:#FFFFFF;">2020/11</div>
                                        <div>成立时间</div>
                                    </el-col>
                                </el-row>
                            </el-card>
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
        goOrgan() { //跳转至机构详情页面
            this.$router.push({ path: '/VolunOrgan', query: { index: '1' } });
        }
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

.toptext {
    height: 30px;
    text-align: left;
    color: #2E74B6;
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
    background-color: #67BBFF;
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
.OrganCard {
    border-radius: 10%;
    background-color: #FFFFFF;
}
.botInfo {
    padding: 5%;
    min-height: auto;
    font-size: 16px;
    background-color: #FFFFFF;
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