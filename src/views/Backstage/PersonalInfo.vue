<!-- @author:刘筱科-个人信息 -->
<template>
<el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>个人信息</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">
  <div style="text-align: center">
    <el-card style="width:100%;">
      <el-form label-width="80px">
        <div style="text-align: center; margin: 10px 0">
          <el-upload v-if="!isEdit"
              class="avatar-uploader"
              action
              :auto-upload="false"
		          ref="upload"
              disabled
              :show-file-list="false"
              :on-change="onUploadChange"
          >
            <img v-if="this.form.user_head" :src="form.user_head" class="avatar">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
          <el-upload v-if="isEdit"
              class="avatar-uploader"
              action
              :auto-upload="false"
		          ref="upload"
              :show-file-list="false"
              :on-change="onUploadChange"
          >
            <img v-if="this.form.user_head" :src="this.form.user_head" class="avatar">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
        <el-row :gutter="20" style="margin-top: 30px;margin-bottom: 30px;">
            <el-col :span="10"><el-form-item label="ID">
                <el-input  v-model="form.user_id" autocomplete="off" disabled></el-input>
            </el-form-item></el-col>
            <el-col :span="10"><el-form-item label="昵称">
                <el-input  v-if="!isEdit"  v-model="form.user_name" autocomplete="off" disabled></el-input>
                <el-input  v-if="!isChange[0]&&isEdit"  @change="changeBorderColor(0)" v-model="form.user_name" autocomplete="off"></el-input>
                <el-input  v-if="isChange[0]&&isEdit" class="input-highlight" v-model="form.user_name" autocomplete="off"></el-input>
            </el-form-item></el-col>
            <el-col :span="10"> <el-form-item label="电话">
                <el-input  v-if="!isEdit"  v-model="form.user_phonenum" autocomplete="off" disabled></el-input>
                <el-input v-if="!isChange[1]&&isEdit"  @change="changeBorderColor(1)" v-model="form.user_phonenum" autocomplete="off"></el-input>
                <el-input v-if="isChange[1]&&isEdit" class="input-highlight" v-model="form.user_phonenum" autocomplete="off"></el-input>
             </el-form-item></el-col>
             <el-col :span="10"> <el-form-item label="邮箱">
                <el-input  v-if="!isEdit"  v-model="form.user_mailbox" autocomplete="off" disabled></el-input>
                <el-input  v-if="!isChange[2]&&isEdit"  @change="changeBorderColor(2)" v-model="form.user_mailbox" autocomplete="off"></el-input>
                <el-input  v-if="isChange[2]&&isEdit" class="input-highlight" v-model="form.user_mailbox" autocomplete="off"></el-input>
             </el-form-item></el-col>
             <el-col :span="10"> <el-form-item label="地址">
             <div style="display: flex; flex-direction:row; justify-content: space-around;">
             <el-cascader v-if="!isEdit"
                  size="default"
                  :options="options"
                  disabled
                  v-model="selectedOptions"
                  @change="handleChange">
               </el-cascader>
              <el-cascader v-if="!isChange[4]&&isEdit"
                  size="default"
                  :options="options"
                  v-model="selectedOptions"
                  @change="handleChange">
               </el-cascader>
               <el-cascader v-if="isChange[4]&&isEdit" class="cascader-highlight"
                  size="default"
                  :options="options"
                  v-model="selectedOptions"
                  @change="handleChange">
               </el-cascader>
                 <el-input style="width:auto" v-if="!isEdit"  v-model="form.user_address" autocomplete="off" disabled></el-input>
                 <el-input style="width:auto" v-if="!isChange[3]&&isEdit"  @change="changeBorderColor(3)" v-model="form.user_address" autocomplete="off"></el-input>
                 <el-input style="width:auto" v-if="isChange[3]&&isEdit"  class="input-highlight" v-model="form.user_address" autocomplete="off"></el-input>
                 </div>
             </el-form-item></el-col>
        </el-row>
      </el-form>
      <div v-if="isEdit" class="buttoncom" style="text-align: center">
        <el-button type="primary" @click="save">确 定</el-button>
        <el-button type="info" @click="resetData">重 置</el-button>
      </div>
      <div v-else class="buttoncom" style="text-align: center">
        <el-button type="primary" @click="edit">修 改</el-button>
      </div>
    </el-card>
  </div>
  </el-main>
</template>

<script>
import api from "/src/api/index"
import { regionData } from 'element-china-area-data'

export default{
    name: 'information-vue',
    data(){
      return{
        options: regionData,
        selectedOptions:[],
        user_id:'1',
        form: {},
        isChange:[false,false,false,false,false],
        isEdit:false
        //avatarUrl:null
      }
    },
    methods:{
      //修改状态
      edit(){
        this.isEdit=true
      },
      //保存
      save() {
        console.log(this.form.user_head)
        api.uploadAvator(this.form.user_id,this.form.user_head)
        .then(res =>{
              console.log(res.data); })
        api.changeUserInfo(this.form.user_id,this.form.user_name,this.form.user_phonenum,this.form.user_mailbox,this.form.user_province,this.form.user_city,this.form.user_area,this.form.user_address)
                .then(res =>{
                  if(res.data.status==true)
                  {
                    this.$message({
                        type: 'success',
                      message: '修改成功!'
                      })
                  }
                  else
                  {
                    this.$message({
                        type: 'error',
                      message: '发布失败'
                      });
                  }
                   })
        this.isChange=[false,false,false,false,false]
        this.isEdit=false
      },

      //三级省市区修改
      handleChange(value){
        this.form.user_province=value[0];
        this.form.user_city=value[1];
        this.form.user_area=value[2];
        this.isChange[4]=true;
      },
      handleAvatarSuccess(res){
        //res就是文件的路径
       console.log(res)
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
            this.form.user_head = e.target.result;
            console.log(this.form.user_head)//图片的base64数据
        }
      },

      changeBorderColor(index){
        this.isChange[index]=true;
      },

      // 重置
      resetData(){ 
        Object.assign(this.$data, this.$options.data.call(this));
         api.getUserInfo(this.user_id).then(res =>{
            console.log(res.data);
            this.form=res.data.data;
            this.selectedOptions=[this.form.user_province,this.form.user_city,this.form.user_area];
            this.isEdit=true
        })
      }
    },

    //初始化
    created(){
      api.getUserInfo(this.user_id).then(res =>{
            console.log(res.data);
            this.form=res.data.data;
            this.selectedOptions=[this.form.user_province,this.form.user_city,this.form.user_area];
        })
        .catch(err =>{
          allert("个人信息查询失败！");
        })
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

.avatar-uploader {
  text-align: center;
  padding-bottom: 10px;
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
  width: 138px;
  height: 138px;
  line-height: 138px;
  text-align: center;
}
.avatar {
  width: 138px;
  height: 138px;
  display: block;
}
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 50px;
}


.input-highlight{
  --el-input-border-color: #409eff;
  --el-input-focus-border-color: var(--el-input-border-color);
  --el-input-hover-border-color:var(--el-input-border-color);
}

.cascader-highlight{
  --el-border-color: #409eff;
  --el-input-focus-border-color: var(--el-input-border-color);
  --el-input-hover-border-color:var(--el-input-border-color);
}

.buttoncom{
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding-left: 25%;    
    padding-right: 25%;
}


</style>