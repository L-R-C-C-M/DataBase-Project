<!-- @author:刘筱科-资讯管理-发布资讯 -->
<template>
    <el-header>
        <el-breadcrumb separator="/">
        <el-breadcrumb-item>发布志愿活动</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main style="background-color: rgba(245, 249, 250, 1)">
        <el-card style="height:max-content;width:100%;">
        <div style="margin-left: 3%; margin-top: 3%; margin-right: 5%;">
            <el-form-item label="活动名称" style="margin-bottom: 3%; width:500px;">
                <el-input v-model="this.activity.act_name" 
                 :autosize="{ minRows: 1}"
                 type="textarea"
                 placeholder="请输入活动名称"></el-input>
            </el-form-item>

            <el-form-item label="活动图片">
            <div style="text-align: left;">
            <el-upload
            class="avatar-uploader"
            action
            :auto-upload="false"
		        ref="upload"
            :show-file-list="false"
            :on-change="onUploadChange">
            <img v-if="this.activity.imageurl" :src="this.activity.imageurl" class="avatar">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>  
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5M</div>
            </div>
        </el-form-item>

            <el-form-item label="活动内容" style="margin-bottom: 3%; margin-top: 2%">
                <el-input v-model="activity.act_content" 
                 :autosize="{ minRows: 10}"
                 type="textarea"
                 placeholder="请输入活动内容"></el-input>
            </el-form-item>

            <el-form-item label="志愿机构" style="margin-bottom: 3%; margin-top: 2%">
                <el-select v-model="activity.volInst_Id" filterable placeholder="志愿机构">
                    <el-option
                    v-for="item in volInstOptions"
                    :key="item.VolInstId"
                    :label="item.InstName"
                    :value="item.VolInstId">
                    </el-option>
                </el-select>
            </el-form-item>


            <el-form-item label="活动人数" style="margin-bottom: 3%; width: 200px;">
                <el-input v-model="activity.need_people"
                 type="number"
                 placeholder="请输入活动人数"></el-input>
            </el-form-item>

            <el-form-item label="活动时间" style="margin-bottom: 3%">
                <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
                </el-date-picker>
            </el-form-item>

            <el-form-item label="活动地址" style="margin-bottom: 3%">
                <el-cascader
                  size="default"
                  :options="options"
                  v-model="selectedOptions"
                  placeholder="省-市-区"
                  @change="handleChange">
               </el-cascader>
               <el-input style="width:auto"  v-model="activity.act_address" autocomplete="off"  placeholder="详细地址"></el-input>
            </el-form-item>

            <el-form-item label="联系方式" style="margin-bottom: 3%;width:300px;">
                <el-input v-model="activity.contact_method"
                 placeholder="请输入联系方式"></el-input>
            </el-form-item>

            <div>
            <el-button type="primary" @click="save">发 布</el-button>
          </div>
        </div>
    
        </el-card>
        </el-main>
    </template>
    
    <script>
    import {ref} from "vue"
    import api from "/src/api/index"
    import { regionData } from 'element-china-area-data'

    
    export default{
        name: 'InformationRelease-vue',
        data(){
          return{
            admin_id:1,
            options: regionData,
            selectedOptions:[],
            activity:{
              act_name:'',
              act_content:'',
              act_time:'',
              need_people:'',
              act_province:'',
              act_city:'',
              act_area:'',
              act_address:'',
              contact_method:'',
              volInst_Id:'',
              imageurl:'',
            },
            volInstOptions:[],
            value1: [],
          }
        },
        mounted(){
            api.getAllVolInst()
            .then(res =>{
                console.log(res.data)
                this.volInstOptions=res.data.data.clue_list
            })
        },
        methods:{
            //三级省市区修改
            handleChange(value){
                this.activity.act_province=value[0];
                this.activity.act_city=value[1];
                this.activity.act_area=value[2];
            },
      
          save() {
            console.log(this.activity)
            this.activity.act_time=this.formatDateValue(this.value1[0])
            console.log(this.activity.act_time)
            api.releaseVolActivity(this.activity.act_name,this.activity.act_content,this.formatDateValue(this.value1[0]),Number(this.activity.need_people),this.activity.act_province,this.activity.act_city,this.activity.act_area,this.activity.act_address,this.activity.contact_method,this.activity.volInst_Id)
              .then(res =>{
                  console.log(res.data); 
                  if(res.data.status==true)
                  {
                    api.addVolActivityPic(this.admin_id,this.activity.imageurl)
                    this.$message({
                        type: 'success',
                      message: '发布成功!'
                      })
                      Object.assign(this.$data, this.$options.data.call(this));
                  }
                  else
                  {
                    this.$message({
                        type: 'error',
                      message: '发布失败'
                      });
                  } 
            })
          },

            //时间处理函数
            // 给后端发送日期格式
            formatDateValue(now) {
                var year = this.dateZero(now.getFullYear()); //取得4位数的年份
                var month = this.dateZero(now.getMonth() + 1); //取得日期中的月份，其中0表示1月，11表示12月
                var date = this.dateZero(now.getDate()); //返回日期月份中的天数（1到31）
                var hour = this.dateZero(now.getHours()); //返回日期中的小时数（0到23）
                var minute = this.dateZero(now.getMinutes()); //返回日期中的分钟数（0到59）
                var second = this.dateZero(now.getSeconds()); //返回日期中的秒数（0到59）
                return year + "-" + month + "-" + date + "T" + hour + ":" + minute + ":" + second;
            },
            // 日期前面加0
            dateZero(time) {
                if (time < 10) {
                    time = "" + "0" + time;
                }
                return time;
            },

             //选择上传图片
            onUploadChange(file)
            {
              const isIMAGE = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png'|| file.raw.type === 'image/gif');
              const isLt1M = file.size / 1024 / 1024 < 5;

              if (!isIMAGE) {
                this.$message.error('上传文件只能是图片格式!');
                return false;
              }
              if (!isLt1M) {
                this.$message.error('上传文件大小不能超过 5MB!');
                return false;
              }
              var reader = new FileReader();
              reader.readAsDataURL(file.raw);
              reader.onload = (e) => {
                  this.activity.imageurl = e.target.result;
                  console.log(this.activity.imageurl)//图片的base64数据
              }
            },
        },
    }
    
    </script>
    
    <style>
    h6{
        color:rgb(184, 184, 184)
    }
    
    .el-header{
         background-color: rgba(255, 255, 255, 1);
         height:60px;
         display: flex;
         justify-content: space-between;
         padding-left: 30;
         align-items: center;
     }
    
      .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
      }
      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
      }
      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    </style>