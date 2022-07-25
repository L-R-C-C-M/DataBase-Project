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
      <el-table-column prop="user_id" label="用户ID" align="center"/>
      <el-table-column prop="user_name" label="用户昵称" align="center"/>
      <el-table-column prop= "phone_num" label="手机号" align="center"/>
      <el-table-column prop= "report_num" label="举报数量" align="center"/>
      <el-table-column prop= "searchinfo_num" label="发布寻人信息数量" align="center"/>
      <el-table-column prop= "fundation_time" label="创建时间" align="center"/>
      <el-table-column prop= "validate" label="账户" align="center">
        <template #default>
        <el-switch v-model="value1" />
        </template>
      </el-table-column>
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
const value1 = ref(true)
export default {
    data() {
        return {
            tableData: [{
        user_id: '20202020',
        user_name: 'Tom',
        phone_num: '28098908123',
        report_num: '3018239',
        searchinfo_num: '4',
        fundation_time: '2020-12-2',
            }]
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

</style>
 