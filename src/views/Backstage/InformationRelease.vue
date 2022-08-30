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
    <div style="margin-left: 3%; margin-top: 3%; margin-right: 5%;">
        <el-form-item label="文章标题" style="margin-bottom: 3%">
            <el-input v-model="this.article.title" 
             :autosize="{ minRows: 1}"
             type="textarea"
             placeholder="请输入文章标题"></el-input>
        </el-form-item>
         <el-form-item label="文章类型" style="margin-bottom: 3%">
            <el-radio-group v-model="this.article.type">
              <el-radio-button label="寻人新闻"></el-radio-button>
              <el-radio-button label="寻人政策"></el-radio-button>
            </el-radio-group>        
         </el-form-item>
        <el-form-item label="文章封面">
            <div style="text-align: left;">
            <el-upload
            class="avatar-uploader"
            action
            :auto-upload="false"
		        ref="upload"
            :show-file-list="false"
            :on-change="onUploadChange">
            <img v-if="this.article.imageurl" :src="this.article.imageurl" class="avatar">
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
import api from "/src/api/index"

export default{
    name: 'InformationRelease-vue',
    data(){
      return{
        admin_id:1,
        article:{
          title:'',
          type:'',
          content:'',
          imageurl:'',
          id:''
        },
      }
    },
    methods:{
      save() {
        console.log(this.article)
        api.releaseNews(this.admin_id,this.article.content,this.article.title,this.article.type)
          .then(res =>{
              this.article.id=res.data.data.news_id;
              console.log(res.data.data.news_id);
               api.addNewsCover(this.article.id,this.article.imageurl)
                  .then(res =>{
                    Object.assign(this.$data, this.$options.data.call(this));
;})      
               })
      },

       //选择上传图片
       onUploadChange(file)
      {
        const isIMAGE = (file.raw.type === 'image/jpeg' || file.raw.type === 'image/png'|| file.raw.type === 'image/gif');
        const isLt1M = file.size / 1024 / 1024 < 1;

        if (!isIMAGE) {
          this.$message.error('上传文件只能是图片格式!');
          return false;
        }
        if (!isLt1M) {
          this.$message.error('上传文件大小不能超过 1MB!');
          return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file.raw);
        reader.onload = (e) => {
            this.article.imageurl = e.target.result;
            console.log(this.article.imageurl)//图片的base64数据
        }
      },
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