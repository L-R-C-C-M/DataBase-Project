<!-- @author:何懿励-用户后台-申请做志愿者 -->
<template>
      <el-header>
        <el-breadcrumb separator="/">
        <el-breadcrumb-item>申请成为志愿者</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>

      <el-main style="background-color: rgba(245, 249, 250, 1)">
        <el-card v-if="review_status == 0" style="height:100%;width:100%;">
          <div style="margin-top: 20px">
            <span style="font-size: 150%; ">请完善您的个人信息</span>
          </div>
        <el-form :model="form" label-position="left" label-width="100px" style="margin-left: 3%; margin-top: 3%; margin-right: 5%;" >
            <el-form-item label="特长" style="margin-bottom: 3%; ">
                <el-input v-model="apply_content.Specialty" 
                 :autosize="{ minRows: 5}"
                 type="textarea"
                 placeholder="填写你的特长"></el-input>
            </el-form-item>

            <el-form-item label="背景经历" style="margin-bottom: 3%; margin-top: 2%">
                <el-input v-model="apply_content.Background" 
                 :autosize="{ minRows: 10}"
                 type="textarea"
                 placeholder="填写你的背景经历"></el-input>
            </el-form-item>

            <el-form-item label="职业" style="margin-bottom: 3%;">
                <el-input v-model="apply_content.Career"
                :autosize="{ minRows: 3}"
                type="textarea"
                placeholder="填写你的职业"></el-input>
            </el-form-item>

            <div>
            <el-button type="primary" @click="save">发 布</el-button>
            </div>

        </el-form>
        </el-card>
        
        <el-card v-else-if="review_status ==1" class="card">
          <div style="margin-top: 200px">
            <span style="font-size: 150%; ">您已申请，请耐心等待结果。</span>
          </div></el-card>
        <el-card v-else-if="review_status ==2" class="card">
          <div style="margin-top: 200px">
            <span style="font-size: 150%; ">很遗憾，您的申请未通过。</span>
          </div></el-card>
        <el-card v-else="review_status ==3" class="card"><div style="margin-top: 200px">
            <span style="font-size: 150%; ">您的申请已通过！恭喜您成为一名志愿者！</span>
          </div></el-card>
      </el-main>
    </template>
    
    <script>
    import {ref} from "vue"
    import api from "/src/api/index"
    
    export default{
        data(){
          return{
            admin_id:4,
            review_status:0,  //0：未申请 1：已申请  2：已审核未通过   3：已审核通过
            apply_content:{
              UserId: 610,
              Specialty: '',
              Background: '',
              Career: '',
            },
          }
        },
        mounted(){
          api.isReviewApply(this.apply_content.UserId).then(res =>{
            console.log(res.data);
            this.review_status=res.data.data.ApplyHistory;
          })
        },
        methods:{
          save() {
            console.log(this.apply_content);
            api.userApplyVolunteer(this.apply_content.UserId,this.apply_content.Specialty,this.apply_content.Background,this.apply_content.Career).then(res =>{
              console.log(res.data);
              this.review_status=1;
            })
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
    
  .card{
    height:100%;
    width:100%;
  }

</style>