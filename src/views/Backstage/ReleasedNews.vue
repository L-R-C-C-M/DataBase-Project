<!-- @author:何懿励-资讯管理-普通用户 -->
<template>
  <el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>资讯管理</el-breadcrumb-item>
    <el-breadcrumb-item>已发布资讯</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">

  
  <el-card>
    <el-row :gutter="20">
      <el-col :span="1">
        <span style="text-align: center">搜索</span>
      </el-col>
      <el-col :span="7">
        <el-input></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" :icon="Search">search</el-button>
      </el-col>
    </el-row>
  </el-card>
  <el-card>
      <el-table :data="tableData" style="width: 100%" header-align="center">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column prop="news_id" label="资讯编号" align="center"/>
      <el-table-column prop="news_title" label="资讯标题" align="center"/>
      <el-table-column prop= "news_time" label="发布时间" align="center"/>
      <el-table-column prop= "administrator_id" label="管理员编号" align="center"/>
      <el-table-column prop= "news_type" label="资讯类型" align="center"/>
      <el-table-column prop="operation" label="操作" align="center">
        <template #default="scope">
        <el-button size="small">Edit</el-button>
        <el-button size="small">Delete</el-button>
        </template>
      </el-table-column>
      </el-table>
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
            tableData: [{
        news_id: '20202020',
        news_title: 'Tom',
        news_time: '28098908123',
        administrator_id: '3018239',
        news_type: '4',
            }]
        }
    },
    mounted(){
      api.getAllNews().then(res =>{
            console.log(res.data);
            this.tableData=res.data.data.news_info;
        })
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

</style>
 