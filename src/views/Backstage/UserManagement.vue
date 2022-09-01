<!-- @author:何懿励-后台用户管理-普通用户 -->
<template>
  <el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>普通用户</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">

  
  <el-card>
    <el-row :gutter="20">
      <el-col :span="1">
        <span style="text-align: center">搜索</span>
      </el-col>
      <el-col :span="7">
        <el-input placeholder="请输入要搜索的用户昵称" v-model="search_content" clearable @clear="returnToNol"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button slot="append" type="primary" :icon="Search" @click="getUserByName">search</el-button>
      </el-col>
    </el-row>
  </el-card>
  <el-card>
      <el-table :data="tableData" style="width: 100%" header-align="center">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column prop="user_id" label="用户ID" align="center"/>
      <el-table-column prop="user_name" label="昵称" align="center"/>
      <el-table-column prop= "phone_num" label="电话" align="center"/>
      <el-table-column prop= "info_report_num" label="举报寻人信息数量" align="center"/>
      <el-table-column prop= "clue_report_num" label="举报线索数量" align="center"/>
      <el-table-column prop= "search_info_num" label="发布寻人信息数量" align="center"/>
      <el-table-column prop= "clue_num" label="发布线索数量" align="center"/>
      <el-table-column prop= "fundation_time" label="创建时间" align="center"/>
      <el-table-column prop= "user_state" label="账户禁用" align="center">
        <template v-slot="scope">
          <el-switch v-model="scope.row.user_state"
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="Y"
          inactive-value="N"
          @change="userStateChange(scope.row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="operation" label="操作" align="center">
        <template v-slot="scope">
          <el-button type="danger" icon="DeleteFilled" size="small"
          @click="deleteUser(scope.row)">删除</el-button>
        </template>
      </el-table-column>
      </el-table>

      <!--分页-->
      <el-pagination
      v-model:currentPage="pagenum"
      v-model:page-size="pagesize"
      :page-sizes="[1, 2, 5, 10]"
      :total="total"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      />
  </el-card>
  
  </el-main>
</template>
 
<script>
import { ref } from 'vue'
import api from "/src/api/index"
const value1 = ref(true)
export default {
    data() {
        return {
          tableData: [],
          pagenum: 1,  //页数
          pagesize: 5, //每页的数量
          total:0,  //总条目数
          search_content: "",
          in_search: false,
        }
    },
    mounted(){
      this.getAllNorUser();
    },
    methods:{
      getAllNorUser(){
        api.getAllNorUser(this.pagenum,this.pagesize).then(res =>{
            //console.log(res.data);
            this.tableData=res.data.data.user_info;
            this.total=res.data.data.total;
        })
      },
      returnToNol()
      {
        console.log("11111111");
        this.in_search=false;
        this.getAllNorUser();
      },
      getUserByName(){
        api.getUserByName(this.search_content,this.pagenum,this.pagesize).then(res =>{
            //console.log(res.data);
            this.in_search=true;
            this.tableData=res.data.data.user_info;
            this.total=res.data.data.total;
        })
      },
      async userStateChange(userinfo){
        //console.log(userinfo.user_id);
        if(userinfo.isactive=='N')
        {
          alert("用户已被删除！");
          userinfo.user_state=(userinfo.user_state=='Y'?'N':'Y');
          return;
        }
        await api.banUser(userinfo.user_id).then(res =>{
          this.$message.success('更新用户状态成功！');
        }).catch(err=>{
          console.log(err)
          userinfo.user_state=(userinfo.user_state=='Y'?'N':'Y');//操作失败状态恢复
          this.$message.error('更新用户状态失败！');
        })
      },
      async deleteUser(userinfo){
        //console.log(userinfo.user_id);
        if(userinfo.isactive=='N')
        {
          alert("用户已被删除！");
          return;
        }
        if(confirm("您确定要删除该用户吗？")){
        await api.deleteUser(userinfo.user_id).then(res =>{
          this.$message.success('删除用户成功！');
          this.getAllNorUser();
        }).catch(err=>{
          console.log(err)
          this.$message.error('删除用户失败！');
        })
        }
      },
      handleSizeChange(newSize){
        //console.log(newSize);
        this.pagesize = newSize;//重新指定每页数据量
        if(this.in_search)
          this.getUserByName();
        else
          this.getAllNorUser();//带着新的分页请求获取数据
      },
      handleCurrentChange(newPage){
        //console.log(newPage);
        this.pagenum = newPage;//重新指定当前页
        if(this.in_search)
          this.getUserByName();
        else
          this.getAllNorUser();
      }
    }
};
</script>

<style lang="less" scoped>
.el-header{
     background-color: rgba(255, 255, 255, 1);
     height:60px;
     display: flex; //设置显示为flex布局
     justify-content: space-between;//设置为flex左右布局
     padding-left: 30;//左内边距为20（Logo贴左边）
     align-items: center;//元素上下居中
 }
 
  .el-row {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    height:80px;
    align-items: center;//元素上下居中
    margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-card{
		margin-bottom:20px; //下边距
	}
.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

</style>
 