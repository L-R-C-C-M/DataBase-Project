<!---登录界面卡片 -->
<!-- 可封装在页面主体部分，整体高度占父容器100%，宽度占100% -->
<template>
  <div class="body">
    <el-image
      style="
        height: 100%;
        width: 50%;
        background-color: #000;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      "
      :src="require('../../../image/log-in.png')"
      fit="fill"
    />
    <div class="message-card">
      <el-image
        style="height: 20%; width: 100%"
        :src="require('../../../image/logo.png')"
        fit="contain"
      />
      <div
        style="
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <el-input
          v-model="text"
          :placeholder="phonenumber"
          show-word-limit
          type="number"
          @input="handlerChangeText()"
        />
        <el-input
          v-model="input"
          type="password"
          minlength="1"
          :placeholder="password"
          show-password
          @input="handlerChangePassword()"
        />
      </div>
      <div
        style="
          width: 100%;
          height: 25%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        "
      >
        <el-button @click="checkUser()" type="primary">登录</el-button>
        <div class="tip">
          <el-link>忘记密码</el-link>
          <!-- <el-link>没有账号？立即注册</el-link> -->
          <router-link to="/register" class="registerLink"
            >没有账号？立即注册</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
// @ is an alias to /src
//import axios from "axios";
import api from "/src/api/index";
import { ref } from "vue";

export default {
  data() {
    return {
      text: "",
      input: "",
      phonenumber: "手机号",
      password: "密码",
    };
  },
  methods: {
    checkUser() {
      // if (this.text > 10000000000 && this.input != "") {
      //   console.log(this.text);
      api
        .login(this.text, this.input)
        .then((res) => {
          console.log("登录请求成功", res.data);
        })
        .catch((err) => {
          console.log("登录请求失败", err.data);
        });
      // } else {
      //   //this.text = "";
      //   this.input = "";
      //   console.log("输入的电话", this.text);
      //   if (this.text < 10000000000) this.phonenumber = "格式错误";
      //   if (this.input == "") this.password = "密码不能为空";
      // }
    },
    handlerChangeText() {
      //if (this.text < 10000000000) this.phonenumber = "格式错误";
    },
    handlerChangePassword() {
      //if (this.input == "") this.password = "密码不能为空";
    },
  },
  //注释掉的代码是获取数据用的，加载界面的同时会获取数据
  // mounted(){
  //     axios({
  //         method:"get",
  //         url:"http://8.130.101.207:1827/Login/GetHello"
  //     }).then(res=>{
  //         console.log(res.data);
  //     })
  // }
};
</script>

<!-- css -->
<style scoped>
.body {
  height: 100%;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.message-card {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 15%;
  padding-bottom: 15%;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}
.registerLink {
  font-size: 10px;
}
.tip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
 
