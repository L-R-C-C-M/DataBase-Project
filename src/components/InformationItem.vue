<template>
    <div class="containerFlex">
      <!-- 使用flex布局 -->
      <div
        class="PhotoContainer"
        v-for="(item,index) in lostInfoList"
        :key="index"
      >
        <!-- 被寻人照片 -->
        <div
          class="PhotoOnly"
          @click="clickPhoto(index)"
        >
          <el-row>
            <el-col :span="8">
              <div class="thePhoto">
                <img
                  fit="cover"
                  style="width: 100%;height:100%;border-radius: 10px 10px 0 0;box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                  src='../../image/test.png'
                >
              </div>
            </el-col>
            <el-col :span="16">
              <div class="informationBlock">
                <div class="line">
                  <h class="tableTitle">类型:</h>
                  <h>{{lostInfoList[index].StayType}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">姓名:</h>
                  <h>{{lostInfoList[index].StayName}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">性别:</h>
                  <h>{{lostInfoList[index].StayPrice}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">出生日期:</h>
                  <h>{{lostInfoList[index].StayType}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">失散日期:</h>
                  <h>{{lostInfoList[index].StayType}}</h>
                </div>
                <div class="line">
                  <h class="tableTitle">失散地点/被寻人所在地:</h>
                  <h>{{lostInfoList[index].StayType}}</h>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data () {
      return {
        //写一些数据试试
        colors: ['#a3c6ea', '#70a8c4', '#559bcb'],
        lostInfoList: [
          {
            StayType: '问我吗',
            StayName: '幽兰拿铁',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          },
          {
            StayType: '不清楚',
            StayName: '去不成的长沙',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          }, {
            StayType: '不知道',
            StayName: '哈哈哈哈哈',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          }, {
            StayType: 'Starry',
            StayName: '55555',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          }, {
            StayType: 'Missing',
            StayName: '气泡水',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          }, {
            StayType: '房源类型',
            StayName: '房源名称加载中...',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          }, {
            StayType: '房源类型',
            StayName: '房源名称加载中...',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          }, {
            StayType: '房源类型',
            StayName: '房源名称加载中...',
            UserAvatar: 'https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/用户白名单.png',
            StayPrice: 399,
            UserId: 11111,
            StayCommentRate: 4.9,
            StayCommentNum: 0,
            StayPic: ['https://joes-bucket.oss-cn-shanghai.aliyuncs.com/img/房屋 (2).png'],
          },
        ],
        stayIdList: [10059, 10200, 10062, 10147, 10183, 10192, 10199, 10201],
  
      }
    },
    methods: {
      clickPhoto (index) {
        //点击跳转到寻人信息的详情页
        this.$router.push({ path: "../views/LostInfo", query: {} });
      },
      //为了把数据传出去
      // getInfo () {
      //   return {
      //     currentData: this.lostInfoList
      //   }
      // }
    }
  }
  </script>
  
  <style scoped>
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
    margin-left: 25px;
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
    -webkit-transition: all 200ms ease-in;
  }
  </style>