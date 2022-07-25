<!-- @author:刘筱科-资讯管理-发布资讯 -->
<template>
<el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>资讯管理</el-breadcrumb-item>
    <el-breadcrumb-item>发布资讯</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">
    <el-card style="height:100%;width:100%;">
    <div style="margin-left: 3%; margin-top: 3%">
        <el-form-item label="文章标题" style="margin-bottom: 3%">
            <el-input v-model="article.title" 
             :autosize="{ minRows: 1}"
             type="textarea"
             placeholder="请输入文章标题"></el-input>
        </el-form-item>
        <el-form-item label="文章封面">
            <div style="text-align: left;">
            <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="article.coverUrl" :src="article.coverUrl" class="avatar">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>  
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过5M</div>
            </div>
        </el-form-item>
        <el-form-item label="文章内容" style="margin-bottom: 3%; margin-top: 2%">
            <el-input v-model="article.content" 
             :autosize="{ minRows: 10}"
             type="textarea"
             placeholder="请输入文章内容"></el-input>
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
export default{
    name: 'InformationRelease-vue',
    data(){
      return{
        article:{
          title:"",
          coverUrl:null,
          content:""
          }
      }
    },
    //
    setup(){
        

    },
    methods:{
      save() {

      },
      handleAvatarSuccess(res){
        //res就是文件的路径
       this.form.avatarUrl = res
      },
      beforeAvatarUpload(file) {
        const isJPGPNG=false;
        if (file.type === 'image/jpeg' ||file.type ==='image/png')
            isJPGPNG=true;
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isJPGPNG) {
          this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
        }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPGPNG && isLt5M;
      }
    }
    
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