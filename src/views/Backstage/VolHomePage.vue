<template>
<el-header>
    <el-breadcrumb separator="/">
    <el-breadcrumb-item>主页</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">
    <el-card style="height:30%;margin-bottom:2%">
        <div style="text-align: left; margin-left: 3%">
            <h3>我发布的寻人信息</h3>
        </div>
    </el-card>

    <el-card style="height:30%;margin-bottom:2%;">
        <div style="text-align: left; margin-left: 3%">
            <h3>我发布的寻人线索</h3>
        </div>
    </el-card>
    <el-card style="height:30%;margin-bottom:2%;">
    <div style="text-align: left; margin-left: 3%">
        <h3>我报名的志愿活动</h3>
    </div>
</el-card>
  </el-main>

</template>

<style>
.el-header{
     background-color: rgba(255, 255, 255, 1);
     height:60px;
     display: flex;
     justify-content: space-between;
     padding-left: 30;
     align-items: center;
 }
</style>