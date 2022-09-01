<!-- @author:何懿励-处理举报-->
<template>
  <el-header>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>处理举报</el-breadcrumb-item>
    <el-breadcrumb-item>线索举报</el-breadcrumb-item>
    </el-breadcrumb>
  </el-header>
  <el-main style="background-color: rgba(245, 249, 250, 1)">

   <el-row :gutter="60">
    <el-col :span="5" >
    <div style="background-color: rgba(42, 130, 228, 0.17)" class="card">
    <div class="cicon">
        <el-icon size="60" color="#000000" class="eicon">
            <Document />
        </el-icon>
    </div>
    <div style="padding-left:20px;">
      <span style="font-size:large;">待处理线索<br/><br/></span>
        <span style="font-size:xx-large;">{{clue_repo_notreviewed}}</span>
    </div>
    </div>
    </el-col>

    <el-col :span="5" >
    <div style="background-color: rgba(4, 76, 144, 1)" class="card">
      <div class="cicon">
      <el-icon size="60" color="#FFFFFF" class="eicon">
            <DocumentChecked />
      </el-icon>
      </div>
      <div style="padding-left:20px;">
        <span style="color: #FFFFFF;font-size:large;">已处理线索<br/><br/></span>
        <span style="color: #FFFFFF;font-size:xx-large;">{{clue_repo_reviewed}}</span>
      </div>
    </div>
    </el-col>
  </el-row>

  <el-card>
      <el-table :data="tableData" style="width: 100%" header-align="center">
      <el-table-column type="selection" width="55" align="center"/>
      <el-table-column prop="clue_repo_id" label="线索举报编号" align="center"/>
      <el-table-column prop= "clue_id" label="线索编号" align="center"/>
      <el-table-column prop="user_id" label="举报人编号" align="center"/>
      <el-table-column prop= "repo_content" label="举报内容" align="center"/>
      <el-table-column prop= "repo_time" label="举报时间" align="center"/>
      <el-table-column prop="operation" label="操作" align="center">
        <template v-slot="scope">
          <el-button type="success" plain size="small"
          @click="passRepo(scope.row)">通过</el-button>
          <el-button type="danger" plain size="small"
          @click="rejectRepo(scope.row)">拒绝</el-button>
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
          tableData:[],
          pagenum: 1,  //页数
          pagesize: 5, //每页的数量
          total:0,  //总条目数
          clue_repo_notreviewed:0,
          clue_repo_reviewed:0,
          adminId:1,
        }
    },
    mounted(){
      this.getClueRepoCount();
      this.getClueRepoReviewed();
    },
    methods:{
      getClueRepoCount(){
        api.getClueRepoCount(this.adminId).then(res =>{
            this.clue_repo_notreviewed=res.data.data.clue_repo_review[0].clue_repo_notreviewed;
            this.clue_repo_reviewed=res.data.data.clue_repo_review[0].clue_repo_reviewed;
        })
      },
      getClueRepoReviewed(){
        api.getClueRepoReviewed(this.adminId,this.pagenum,this.pagesize,'N').then(res =>{
            console.log(res.data);
            this.tableData=res.data.data.clue_repo;
            this.total=res.data.data.total;
        })
      },
      async passRepo(userinfo){
        if(confirm("您确定要通过该举报吗？")){
        await api.passClueRepo(userinfo.clue_id).then(res =>{
          this.$message.success('审核成功！');
          this.getClueRepoCount();
          this.getClueRepoReviewed();
        }).catch(err=>{
          console.log(err);
          this.$message.error('审核失败！');
        })
      }
      },
      async rejectRepo(userinfo){
        if(confirm("您确定要驳回该举报吗？")){
        await api.denyClueRepo(userinfo.clue_repo_id).then(res =>{
          this.$message.success('审核成功！');
          this.getClueRepoCount();
          this.getClueRepoReviewed();
        }).catch(err=>{
          console.log(err)
          this.$message.error('审核失败！');
        })
        }
      },
      handleSizeChange(newSize){
        //console.log(newSize);
        this.pagesize = newSize;//重新指定每页数据量
        this.getClueRepoReviewed();//带着新的分页请求获取数据
      },
      handleCurrentChange(newPage){
        //console.log(newPage);
        this.pagenum = newPage;//重新指定当前页
        this.getClueRepoReviewed();
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
 
.el-row:last-child {
  margin-bottom: 0;
}
.el-card{
		margin-bottom:20px; //下边距
	}
.card{
    height:160px;
    margin-bottom :40px;
    text-align: left;
    display:flex;
    align-items: center;
}
.cicon{
    float:left;
    padding-left:20px;
}
.eicon{
    font-size: 80px;
}
</style>
 