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
        <template v-slot="scope">
          <el-button type="danger" icon="DeleteFilled" size="small"
          @click="deleteNews(scope.row)">删除</el-button>
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
          total:100,  //总条目数
        }
    },
    mounted(){
      this.getAllNews();
    },
    methods:{
      getAllNews(){
        api.getAllNews(this.pagenum,this.pagesize).then(res =>{
            console.log(res.data);
            this.tableData=res.data.data.news_info;
            this.total=res.data.data.total;
        })
      },
      async deleteNews(userinfo){
        if(userinfo.Isactive=='N')
        {
          alert("资讯已被删除！");
          return;
        }
        console.log(userinfo.news_id);
        if(confirm("您确定要删除这条资讯吗？")){
        await api.deleteNews(userinfo.news_id).then(res =>{
          this.$message.success('删除资讯成功！');
          this.getAllNews();
        }).catch(err=>{
          console.log(err)
          this.$message.error('删除资讯失败！');
        })
        }
      },
      handleSizeChange(newSize){
        //console.log(newSize);
        this.pagesize = newSize;//重新指定每页数据量
        this.getAllNews();//带着新的分页请求获取数据
      },
      handleCurrentChange(newPage){
        //console.log(newPage);
        this.pagenum = newPage;//重新指定当前页
        this.getAllNews();
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
 