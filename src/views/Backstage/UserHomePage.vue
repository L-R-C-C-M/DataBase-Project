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

    <el-card style="margin-bottom:2%;">
        <div style="text-align: left; margin-left: 3%; margin-right: 3%">
            <h3>我发布的寻人线索</h3>
            <el-card>
                <el-table :data="clue_list" style="width: 100%" header-align="center">
                <el-table-column prop="ClueDate" label="发布时间" width="200" align="center"/>
                <el-table-column prop= "ClueContent" label="线索内容" align="center">
                </el-table-column>
                </el-table>
                 
                <!--分页-->
                <el-pagination
                align="center"
                v-model:page-size="pagesize"
                :current-page.sync="currentPage"
                :total="total"
                layout="total,prev, pager, next, jumper"
                @current-change="handleCurrentChange"
                />
            </el-card>
    </div>
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
          user_id:608,
          clue_list:[],
          currentPage: 1, //页码
          pagesize: 2, //每页的数量
          total:0,  //总条目数
        }
    },
    mounted(){
      this.getAllCLuesPublished();
    },
    methods:{
        //处理返回时间中的T
        handleTimeString(clue_list)
      {
        for(let i in clue_list)
        {
            clue_list[i].ClueDate=clue_list[i].ClueDate.replace(/T/, "  ")
        }
      },

     getAllCLuesPublished(){
        let temp_list=[];
        api.getAllCLuesPublished(this.user_id,this.currentPage,this.pagesize).then(res =>{
            console.log(res.data);
            temp_list=res.data.data.clue_list;
            this.handleTimeString(temp_list);
            console.log(temp_list);
            this.clue_list=temp_list;
            this.total=res.data.data.total;
        })
      },
      handleCurrentChange(newPage){
        console.log(newPage);
        this.currentPage = newPage;//重新指定当前页
        this.getAllCLuesPublished();
      }
    }
};
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

.el-row {
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4px;
    height:80px;
    align-items: center;
    margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
.el-card{
		margin-bottom:20px;
	}

.el-pagination {
    text-align: center; 
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

</style>