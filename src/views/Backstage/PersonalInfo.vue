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
      <el-form label-width="80px" size="small">
        <div style="text-align: center; margin: 10px 0">
          <el-upload
              class="avatar-uploader"
              action="http://localhost:9090/file/upload"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
          >
            <img v-if="form.avatarUrl" :src="form.avatarUrl" class="avatar">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </div>
        <el-row :gutter="20" style="margin-top: 30px;margin-bottom: 30px;">
            <el-col :span="10"><el-form-item label="ID">
                <el-input v-model="form.user_id" autocomplete="off" disabled></el-input>
            </el-form-item></el-col>
            <el-col :span="10"><el-form-item label="昵称">
                <el-input  v-if="!isChange[0]"  @change="changeBorderColor(0)" v-model="form.user_name" autocomplete="off"></el-input>
                <el-input  v-else class="input-highlight" v-model="form.username" autocomplete="off"></el-input>
            </el-form-item></el-col>
            <el-col :span="10"> <el-form-item label="电话">
                <el-input v-if="!isChange[1]"  @change="changeBorderColor(1)" v-model="form.user_phonenum" autocomplete="off"></el-input>
                <el-input  v-else class="input-highlight" v-model="form.phone" autocomplete="off"></el-input>
             </el-form-item></el-col>
             <el-col :span="10"> <el-form-item label="邮箱">
                <el-input v-if="!isChange[2]"  @change="changeBorderColor(2)" v-model="form.user_mailbox" autocomplete="off"></el-input>
                <el-input  v-else class="input-highlight" v-model="form.email" autocomplete="off"></el-input>
             </el-form-item></el-col>
             <el-col :span="10"> <el-form-item label="地址">
                <el-input v-if="!isChange[3]"  @change="changeBorderColor(3)" v-model="form.user_address" autocomplete="off"></el-input>
                <el-input  v-else class="input-highlight" v-model="form.address" autocomplete="off"></el-input>
             </el-form-item></el-col>
        </el-row>
      </el-form>
      <div class="buttoncom" style="text-align: center">
        <el-button type="primary" @click="save">确 定</el-button>
        <el-button type="info" @click="resetData">重 置</el-button>
      </div>
    </el-card>
  </div>
  </el-main>
</template>

<script>
import api from "/src/api/index"

export default{
    name: 'information-vue',
    data(){
      return{
        user_id:'11',
        form: {},
        isChange:[false,false,false,false]
      }
    },
    methods:{
      save() {

      },
      handleAvatarSuccess(res){
        //res就是文件的路径
       this.form.avatarUrl = res
      },
      changeBorderColor(index){
        console.log("概念");
        this.isChange[index]=true;
      },
      resetData(){ // 更新时调用
         Object.assign(this.$data, this.$options.data.call(this));
         api.getUserInfo(this.user_id).then(res =>{
            console.log(res.data);
            this.form=res.data.data;
        })
      }
    },
    mounted(){
      api.getUserInfo(this.user_id).then(res =>{
            console.log(res.data);
            this.form=res.data.data;
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

.buttoncom{
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding-left: 25%;    
    padding-right: 25%;
}


</style>