<template>
<el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>主页</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">
    <el-card style="height:30%;margin-bottom:2%">
        <div style="text-align: left; margin-left: 3%">
            <h3>我发布的寻人信息</h3>
        </div>
    </el-card>

    <el-card style="height:30%;margin-bottom:2%;">
        <div style="text-align: left; margin-left: 3%">
            <h3>我发布的寻人线索</h3>
        </div>
    </el-card>
    <el-card style="height:30%;margin-bottom:2%;">
    <div style="text-align: left; margin-left: 3%">
        <h3>我报名的志愿活动</h3>

        <el-row type="flex" justify="space-around" style="align-items: center">
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
                  {{ actitem.VolActName }}
                </div>
                <div>
                  位置：{{ actitem.Province }}{{ actitem.City
                  }}{{ actitem.Area }}
                </div>
                <div>志愿时间：{{ actitem.ExpTime }}</div>
                <div>
                  人数：{{ actitem.SignupPeople }}/{{ actitem.Needpeople }}人
                </div>
                <div>
                  <el-button type="primary" class="button" round
                    >了解详情</el-button
                  >
                </div>
              </div>
            </el-card>

             <!--分页-->
             <el-pagination
                align="center"
                v-model:page-size="pagesize"
                :current-page.sync="currentPage"
                :total="total"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                />

          </el-col>
        </el-row>
    </div>
  </el-card>
  </el-main>
</template>

<script>
import api from "/src/api/index"
import { regionData } from 'element-china-area-data'
    export default{
        name: 'VolHomePage-vue',
        data(){
          return{
            volid:1,
            volActAll:[],
            currentPage: 1, //页码
            pagesize: 2, //每页的数量
            total:0,  //总条目数
          }
        },
        mounted(){
            api
                .getVolAct(volid,currentPage,this.pagesize)
                .then((res) => {
                    console.log("请求成功", res);
                    //volActInfo.value = res.data.volActInfo;
                    volActInfo.value = res.data.data;
                    console.log("获取数据", volActInfo);
                })
                .catch((err) => {
                    console.log("请求失败", err);
                });
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
</style>