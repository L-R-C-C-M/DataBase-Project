<!-- @author:刘睿萌-登录界面卡片 -->
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
          v-model="phonenumber"
          type="text"
          placeholder="手机号"
          clearable
          @clear="clear"
          show-word-limit
        />
        <el-input
          v-model="password"
          type="password"
          placeholder="密码"
          clearable
          @clear="clear"
          show-password
          @keyup.enter="login"
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
        <el-button type="primary" @click="login">登录</el-button>
        <div>id为:{{ this.$store.state.user_id }}</div>
        <div class="tip">
          <el-link>忘记密码</el-link>
          <el-link>没有账号？立即注册</el-link>
        </div>
      </div>
    </div>
  </div>
</template>
 
 <script>
// @ is an alias to /src
import axios from "axios";
import api from "/src/api/index";
import { ref } from "vue";

export default {
  methods: {
    login() {
      var _this = this;
      api.loginCheck(Number(this.phonenumber), this.password).then((res) => {
        console.log(res.data);
        //用户信息存进sessionstorage
        sessionStorage.setItem("user", JSON.stringify(res.data.data));//总信息
        sessionStorage.setItem("userid", JSON.stringify(res.data.data.user_id));
        sessionStorage.setItem("volid", JSON.stringify(res.data.data.vol_id));
        sessionStorage.setItem("useridentity", JSON.stringify(res.data.data.identity));
        //将用户信息放入vuex中  ？？？怎么不好使了没传进去？
        _this.$store.dispatch("setUser", JSON.stringify(res.data.data));
        //打印id  调用vuex存的，好像没传进去
        console.log(_this.$store.state.user_id);
        this.$router.push('/test');
      });
    },
  },

  setup() {
    const text = ref("");
    const phonenumber = ref("");
    const password = ref("");

    return {
      text,
      phonenumber,
      password,
    };
  },
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
.el-link {
  font-size: 10px;
}
.tip {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
 
