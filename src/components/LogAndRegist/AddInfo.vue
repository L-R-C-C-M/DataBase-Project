<!-- 登记信息界面卡片 -->
<!-- 可封装在页面主体部分，整体高度占父容器100%，宽度占100% -->
<template>
    <div class="body">
            <el-image
              class="left-image"
              :src="require('../../../image/log-in.png')"
              fit="fill"
            />
            <div class="message-card">
                <el-image
              style="height:15%;width:100%;"
              :src="require('../../../image/logo.png')"
              fit="contain"
                /> 
               
                <div class="input">
                    <span style="text-align: left;padding-top:5%;padding-bottom:2%;">上传头像</span>
                     <form method="post" action="/upload" enctype="multipart/form-data">
                    <input type="file" name="file"><br>
                    <button type="submit" style="position: absolute;width:80px;height:40px;top:185px;left:305px;">提交</button>
                </form>
                    <span style="text-align: left;padding-top:5%;padding-bottom:2%;">性别</span>
                    <el-input
                        v-model="text"
                        placeholder="性别"
                        show-word-limit
                        type="text"
                    />
                    <span style="text-align: left;padding-top:5%;padding-bottom:2%;">电话号码</span>
                    <el-input
                        v-model="input"
                        type="password"
                        placeholder="电话号码"
                        show-password
                    /> 
                    <span style="text-align: left;padding-top:5%;">地址</span>
                     <div id="app">
                    <el-cascader
                        size="large"
                         :options="options"
                            v-model="selectedOptions"
                            @change="handleChange">
                    </el-cascader>
                    </div>
                    、<span style="text-align: left;padding-top:2%;"></span>
                    <el-button type="primary">提交</el-button>
                </div>
                
            </div> 
    </div>
</template>
 
 <script>
// @ is an alias to /src
import { ref } from 'vue'

const text = ref('')
const input = ref('')

  import { regionData } from 'element-china-area-data'
  export default {
    data () {
      return {
        options: regionData,
        selectedOptions: []
      }
    },
 
    methods: {
      handleChange (value) {
        console.log(value)
      }
    }
  }
</script>

<!-- css -->
<style scoped>
.body{
    height:100%;
    width:100%;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.left-image{
    height:100%;
    width:50%; 
    background-color: #000;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
}
.message-card{
    height:100%;
    width:50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top:10%;
    padding-bottom:10%;
    padding-left: 5%;
    padding-right: 5%;
    box-sizing : border-box;
}
.input{
    width:100%;
    height:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
}
.el-link{
    font-size:10px;
}
.tip{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
}

</style>

 
