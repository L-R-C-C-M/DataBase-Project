<template>
<el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>我发布的</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">

               <!-- 我发布的寻人信息 -->
    <el-card style="height:max-content;margin-bottom:2%">
        <div style="text-align: left; margin-left: 3%">
            <h3>我发布的寻人信息</h3>
            <div class="containerFlex" style="margin-bottom:2%">
              <!-- 使用flex布局 -->
              <div
                class="PhotoContainer"
                v-for="item in searchInfo_list"
                :key="item.SearchinfoId"
                >
          <div
            class="PhotoOnly"
            @click="clickPhoto(item.SearchinfoId)"
          >
          <el-row class="myRow">
            <el-col :span="8">
              <div class="thePhoto" style="margin-left: 10%">
                <img
                  fit="cover"
                  style="width: 100%;height:100%;border-radius: 10px 10px 0 0;box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                  src="item.SearchinfoPhotoURL"
                >
              </div>
            </el-col>
            <el-col :span="16">
              <div class="informationBlock">
                <div class="line">
                  <h class="tableTitle">类型:</h>
                  <h>{{item.SearchType}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">姓名:</h>
                  <h>{{item.SoughtPeopleName}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">性别:</h>
                  <h>{{item.SoughtPeopleGender}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">出生日期:</h>
                  <h>{{item.SoughtPeopleBirthday}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">失散日期:</h>
                  <h>{{item.SearchinfoLostdate}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">失散地点/被寻人所在地:</h>
                  <h>{{codeToText(item.Province,item.City,item.Area,item.Detail)}}</h>
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
                v-model:page-size="pagesize_info"
                :current-page.sync="currentPage_info"
                :total="total_info"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange_info"
                />
          </div>
    </div>
    </el-card>
                   <!-- 我发布的寻人线索 -->
    <el-card style="margin-bottom:2%;">
        <div style="text-align: left; margin-left: 3%; margin-right: 3%">
            <h3>我发布的寻人线索</h3>
            <el-card>
                <el-table :data="clue_list" style="width: 100%" header-align="center">
                <el-table-column prop="ClueDate" label="发布时间" width="200" align="center"/>
                <el-table-column prop= "ClueContent" label="线索内容" align="center">
                </el-table-column>
                </el-table>
                <div class="Parent">
                <!--分页-->
                <el-pagination
                v-model:page-size="pagesize"
                :current-page.sync="currentPage"
                :total="total"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                />
                </div>
            </el-card>
    </div>
    </el-card>

                     <!-- 我关注的寻人信息 -->
    <el-card style="height:max-content;margin-bottom:2%">
        <div style="text-align: left; margin-left: 3%">
            <h3>我关注的寻人信息</h3>
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
                v-model:page-size="pagesize_follow"
                :current-page.sync="currentPage_follow"
                :total="total_follow"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange_follow"
                />
          </div>
    </div>
    </el-card>

  </el-main>

</template>

<script>
import api from "/src/api/index"
import {CodeToText } from 'element-china-area-data'

export default {
    data() {
        return {
          user_id:608,
          searchInfo_list:[],
          pagesize_info:3, ///每页数量
          currentPage_info:1, //页码
          total_info:0, //总条目数
          clue_list:[],
          currentPage: 1, //页码
          pagesize: 3, //每页的数量
          total:0,  //总条目数
          follow_list:[],
          currentPage_follow: 1, //页码
          pagesize_follow: 3, //每页的数量
          total_follow:0,  //总条目数
        }
    },
    mounted(){
      this.getAllCLuesPublished();
      this.getAllSearchInfo();
      this.getFollowInfo();
    },
    methods:{
        //处理返回时间中的T
        handleTimeString(clue_list)
      {
        for(let i in clue_list)
        {
            clue_list[i].ClueDate=clue_list[i].ClueDate.replace(/T/, "  ")
        }
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
      //发布的寻人信息
      getAllSearchInfo()
      {
        api.getAllSearchInfoPublished(this.user_id,this.currentPage_info,this.pagesize_info)
          .then(res =>{
                console.log(res.data);
                this.searchInfo_list=res.data.data.searchInfo_list;
                this.total_info=res.data.data.total;
              })
      },
      handleCurrentChange_info(newPage){
            this.currentPage_info = newPage;//重新指定当前页
            this.getAllSearchInfo();
      },
      //发布的寻人线索
        getAllCLuesPublished(){
            let temp_list=[];
            api.getAllCLuesPublished(this.user_id,this.currentPage,this.pagesize).then(res =>{
                console.log(res.data);
                temp_list=res.data.data.clue_list;
                this.handleTimeString(temp_list);
                console.log(temp_list);
                this.clue_list=temp_list;
                this.total=res.data.data.total;
            })
          },
          handleCurrentChange(newPage){
            console.log(newPage);
            this.currentPage = newPage;//重新指定当前页
            this.getAllCLuesPublished();
          },
          //关注的寻人信息
        getFollowInfo(){
          api.getFollowInfo(this.user_id,this.currentPage_follow,this.pagesize_follow)
          .then(res =>{
                console.log(res.data);
                this.follow_list=res.data.data.follow_info;
                this.total_follow=res.data.data.total;
              })
        },
        handleCurrentChange_follow(newPage){
            console.log(newPage);
            this.currentPage_follow = newPage;//重新指定当前页
            this.getFollowInfo();
          },

        },
};
</script>

<style>
.Parent{
  display:flex;
}
.el-header{
     background-color: rgba(255, 255, 255, 1);
     height:60px;
     display: flex;
     justify-content: space-between;
     padding-left: 30;
     align-items: center;
 }

.myRow {
    border-radius: 4px;
    box-shadow: 1px 1px 5px#e2e1e1,1px -1px 5px#e2e1e1,-1px 1px 5px#e2e1e1,-1px -1px 5px#e2e1e1;
    align-items: center;
    margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
.el-card{
		margin-bottom:20px;
	}

.el-pagination {
  margin:auto
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