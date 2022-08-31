<template>
<el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>主页</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">
    <el-card style="height:auto;margin-bottom:2%">
        <div style="text-align: left; margin-left: 3%">
            <h3>我跟进的寻人信息</h3>
                             <!-- 我跟进的寻人信息 -->
            <div class="containerFlex" style="margin-bottom:2%">
              <div
                class="PhotoContainer"
                v-for="item in follow_list"
                :key="item.search_info_id"
                >
          <div
            class="PhotoOnly"
            @click="clickPhoto(item.search_info_id)"
          >
          <el-row class="myRow">
            <el-col :span="8">
              <div class="thePhoto" style="margin-left: 10%">
                <img
                  fit="cover"
                  style="width: 100%;height:100%;border-radius: 10px 10px 0 0;box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                  src="item.search_info_photourl"
                >
              </div>
            </el-col>
            <el-col :span="16">
              <div class="informationBlock">
                <div class="line">
                  <h class="tableTitle">类型:</h>
                  <h>{{item.search_type}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">姓名:</h>
                  <h>{{item.sought_people_name}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">性别:</h>
                  <h>{{item.sought_people_gender}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">出生日期:</h>
                  <h>{{item.sought_people_birthday}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">失散日期:</h>
                  <h>{{item.search_info_lostdate}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">失散地点/被寻人所在地:</h>
                  <h>{{codeToText(item.province_id,item.city_id,item.Area,item.detail)}}</h>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <div class="Parent">
        <!--分页-->
        <el-pagination
                align="center"
                v-model:page-size="pagesize_follow"
                :current-page.sync="currentPage_follow"
                :total="total_follow"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange_follow"
                />
          </div>
        </div>
    </el-card>

    <el-card style="height:auto ;margin-bottom:2%;">
    <div style="text-align: left; margin-left: 3%">
        <h3>我报名的志愿活动</h3>

        <el-row type="flex" justify="space-around" style="align-items: center;margin-bottom:1%">
          <!--列元素居中-->
          <el-col
            v-for="actitem in volActAll"
            :key="actitem.VolActId"
            :span="5"
          >
            <!--el-card的背景图片还未更改使用变量-->
            <el-card
              @click="goActInfo(actitem.VolActId)"
              class="mycard"
              :body-style="{ padding: '0px' }"
            >
              <div class="bottom">
                <div style="color: #67bbff; font-size: 15px; margin: 0 0 10px">
                  {{ actitem.vol_act_name }}
                </div>
                <div>
                  活动地址：{{ codeToText(actitem.province_id,actitem.city_id,actitem.area_id,actitem.detail) }}
                </div>
                <div>志愿时间：{{ actitem.vol_act_time }}</div>
                <div>
                  人数：{{ actitem.province_id }}人
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
                align="center"
                v-model:page-size="pagesize"
                :current-page.sync="currentPage"
                :total="total"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                />
              </div>
    </div>
  </el-card>
  </el-main>
</template>

<script>
import api from "/src/api/index"
import {CodeToText } from 'element-china-area-data'

    export default{
        name: 'VolHomePage-vue',
        data(){
          return{
            volid:2,
            follow_list:[],
            currentPage_follow: 1, //页码
            pagesize_follow: 3, //每页的数量
            total_follow:0,  //总条目数
            
            volActAll:[],
            currentPage: 1, //页码
            pagesize: 3, //每页的数量
            total:0,  //总条目数
            
          }
        },
        mounted(){
          this.getVolApplyAct()
          this.getFollowUpInfo()
        },
        methods:{
            //点击跳转
            goActInfo(actID) {
                console.log("志愿活动id:", actID);
                //跳转至活动详情页面
                this.$router.push({
                    path: "/volunActInfo",
                    query: { act_id: actID },
                });
                },
                //获取志愿活动信息
                getVolApplyAct()
                {
                      api
                    .getVolApplyAct(this.volid,this.currentPage,this.pagesize)
                    .then((res) => {
                        console.log("请求成功", res.data);
                        //volActInfo.value = res.data.volActInfo;
                        this.volActAll = res.data.data.vol_act_info;
                        this.total=res.data.data.total;
                        console.log("获取数据", this.volActAll);
                    })
                    .catch((err) => {
                        console.log("请求失败", err);
                    });
                },

                //更新分页
                handleCurrentChange(newPage){
                    console.log(newPage);
                    this.currentPage = newPage;//重新指定当前页
                    this.getVolApplyAct();
                },
                //区域码转地址
                codeToText(province,city,area,detail)
                {
                  return (CodeToText[province] + CodeToText[city] + CodeToText[area]+detail)
                },
                //寻人信息跳转  
                clickPhoto(id)
                {
                  console.log(id);
                //跳转至活动详情页面
                this.$router.push({
                  path: "/volunActInfo",
                  //params: {  }, path和params不能同时使用，会使params失效，要用params需要将path替代为name(router名)
                  query: { act_id: actID },
                  });
                },
                //跟进的寻人信息
                getFollowUpInfo(){
                  api.getFollowUpInfo(this.volid,this.currentPage_follow,this.pagesize_follow)
                  .then(res =>{
                        console.log(res.data);
                        this.follow_list=res.data.data.followup_info;
                        this.total_follow=res.data.data.total;
                      })
                },
                handleCurrentChange_follow(newPage){
                    console.log(newPage);
                    this.currentPage_follow = newPage;//重新指定当前页
                    this.getFollowUpInfo();
                  },
        }
    }


</script>

<style>
.el-header{
     background-color: rgba(255, 255, 255, 1);
     height:60px;
     display: flex;
     justify-content: space-between;
     padding-left: 30;
     align-items: center;
 }

 .bottom {
  border-radius: 10%;
  background-color: #ffffff;
  padding: 14px;
  text-align: left;
  font-size: 10px;
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

.mycard {
  border-radius: 10%;
  background-color: #ffffff;
    /** 使用var()获取变量，参数就是变量名 */
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 10px;
}

.myRow {
    border-radius: 4px;
    box-shadow: 1px 1px 5px#e2e1e1,1px -1px 5px#e2e1e1,-1px 1px 5px#e2e1e1,-1px -1px 5px#e2e1e1;
    align-items: center;
    margin-bottom: 20px;
}

.thePhoto {
    height: 100%;
  }
  .informationBlock {
    padding-left: 5%;
    padding-top: 5%;
    padding-bottom: 8%;
    display: inline-block;
  }
  .informationBlock .line {
    padding-top: 10px;
    float: inline-start;
  }
  .informationBlock .tableTitle {
    color: #2e74b6;
    font-weight: 700;
  }

  h {
    font-size: 12px;
  }

  .containerFlex {
    display: flex;
    flex-direction: row; /*容器内成员的排列方式为从左到右*/
    flex-wrap: wrap; /*换行方式，放不下就换行*/
    justify-content: flex-start; /*项目在主轴上的对齐方式*/
    align-content: flex-start;
  }
  .PhotoContainer {
    width: 420px;
    height: 100%;
    margin-bottom: 20px;
    margin-right: 1.5%;
  }
  .PhotoOnly {
    width: 95%;
    height: 100%;
    margin: 0 auto;
    margin-top: 5px;
    border-radius: 10px !important;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px !important; */
    background-color: #ffffff;
    cursor: pointer;
  }
</style>