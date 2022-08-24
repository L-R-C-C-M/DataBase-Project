<template>
  <div class="quit" onclick="window.open('/department','_self')">
    {{ icon }}<span>返回</span>
  </div>
  <div style="text-align: left">相关部门详情页</div>
  <div class="pic">这里是部门图片</div>
  <div style="text-align: left">
    <p>所在城市：</p>
    <p>联系方式：</p>
    <p>官方网站：</p>
    <p>详细地址：</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icon: "<<",
    };
  },
};
</script>

<style scoped>
.pic {
  width: 400px;
  height: 400px;
  background: #19568f;
}

.quit {
  text-align: left;
  cursor: pointer;
}
</style>