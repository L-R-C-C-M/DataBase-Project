<template>
    <div>
        <!--class="common-layout"-->
        <el-container class="detail-view" style="height:700px;">
            <el-header style="height:55px;">
                <el-menu :default-active="this.$router.path" router class="up-menu" mode="horizontal"
                    background-color="#202741" text-color="#FFFFFF" active-text-color="#2E74B6" :ellipsis="false"
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
                <el-row>
                    <el-button @click="goBack()" type="text" class="return">&lt;&lt;返回</el-button>
                    <!--el-button @click="prev()">返回</!--el-button-->
                </el-row>
                <el-row>
                    <el-image
                        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        class="image" />
                    <!--el-card :body-style="{ padding: '0px' }" shadow="never"-->
                    <div>
                        <div class="title">"宝贝回家"志愿活动</div>
                        <div class="info">
                            <div>项目编号：</div>
                            <div>招募人数：</div>
                            <div>服务时间：</div>
                            <div>服务地点：</div>
                            <div>发起机构：</div>
                        </div>
                        <!--div v-for="o in 5" :key="o" class="text item">{{ 'List item ' + o }}</!--div-->
                        <el-button type="primary" class="actButton" round>我要报名</el-button>
                    </div>
                    <!--/el-card-->
                </el-row>
                <el-col class="toptext">活动详情</el-col>
                <el-divider />
                <div class="text">
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                    这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~
                </div>
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
export default {
    name: "ref",
    setup() {
        const currentDate = ref(new Date());
        return {
            currentDate,
        }
    },
     methods: {
        goBack() {
             this.$router.back();
        }
    }
};
</script>

<style>



/*.el-header.myHeader {
    position: relative;
    height: 50px;
    width: 100%;
    text-align: center;
    line-height: 60px;
    background-image: none;
    background-color:#32495E;
}*/

.detail-view .el-header {
    background-color: #202741;
    color: #FFFFFF;
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
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
    object-fit: contain;
    width: 40%;
    height: 300px;
    margin-right: 50px;
    /*display: block;*/
}
.title {
    text-align: left;
    font-size: 30px;
    color: #2E74B6;
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
.actButton {
    float: left;
    background-color: #67BBFF;
    padding: 0px;
    min-height: auto;
    margin-top: 10px;
    margin-bottom: 5px;
}
.toptext {
    margin-top: 50px;
    height: 30px;
    text-align: left;
    color: #2E74B6;
    font-size: 30px;
}/*格式调整*/
.el-divider {
    background-color: #67BBFF;
    /*height: 36px;*/
    margin: 20px 0;
}
.text{
    padding-left:20px;
    padding-right:20px;
    text-align: left;
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