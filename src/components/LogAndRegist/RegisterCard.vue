<!-- 注册界面卡片 -->
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
        style="height: 15%; width: 100%"
        :src="require('../../../image/logo.png')"
        fit="contain"
      />
      <div class="input">
        <el-input
          v-model="text"
          maxlength="20"
          placeholder="用户名"
          show-word-limit
          type="text"
        />
        <el-input
          v-model="text"
          type="password"
          placeholder="邮箱"
          show-password
        />
        <el-input
          v-model="text"
          placeholder="手机号"
          show-word-limit
          type="text"
          style="margin-right: 3%"
        />
        <el-input
          v-model="input"
          type="password"
          placeholder="密码"
          show-password
        />
        <el-input
          v-model="input"
          type="password"
          placeholder="确认密码"
          show-password
        />
      </div>
      <el-button @click="goRegister()" type="primary">注册</el-button>
    </div>
  </div>
</template>
 
 <script>
// @ is an alias to /src
import { ref } from "vue";

export default {
  methods: {
    goRegister() {
      this.$router.push({
        path: "/addInfo",
        //params: {  }, path和params不能同时使用，会使params失效，要用params需要将path替代为name(router名)
        query: {},
      });
    },
  },
};
// const text = ref();
// const input = ref("");
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
.left-image {
  height: 100%;
  width: 50%;
  background-color: #000;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
.message-card {
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}
.input {
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
 
