<!-- @author:杨芾卉-相关部门信息右侧页面 -->
<template>
  <div style="width: fit-content; margin-left: 25%">
    <p style="width: fit-content">
      子路由的参数index为：{{ $route.params.dpt_id }}
    </p>
  </div>
  <div style="display: flex; width: fit-content; margin-left: 0%">
    <div class="info-box">
      <div style="margin-top: 7%">
        <span class="title">公安局</span>
        <!-- <router-link 
        :to="{
          path:'/department/${data.dpt_id}/detail'
        }">查看{{ icon }}</router-link> -->
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
        <!-- <div class="detail" @click="routeToDetail">查看{{ icon }}<br /></div> -->
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
      <div style="margin-top: 7%">
        <span class="title">政府办</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
    </div>

    <div class="info-box">
      <div style="margin-top: 7%">
        <span class="title">公安局</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
      <div style="margin-top: 7%">
        <span class="title">政府办</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
    </div>
  </div>

  <div style="display: flex">
    <div class="info-box">
      <div style="margin-top: 7%">
        <span class="title">公安局</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
      <div style="margin-top: 7%">
        <span class="title">政府办</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
    </div>

    <div class="info-box">
      <div style="margin-top: 7%">
        <span class="title">公安局</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
      <div style="margin-top: 7%">
        <span class="title">政府办</span>
        <div class="detail" onclick="window.open('/department/detail','_self')">
          查看{{ icon }}<br />
        </div>
      </div>
      <span>电话：0459-6666666<br /></span>
      <span>地址：黄浦区xx路xx号</span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      icon: ">>",
    };
  },
};
</script>

<style scoped>
.info-box {
  width: 300px;
  height: 200px;
  margin-top: 30px;
  margin-left: 30px;
  background: #ffffff;
  border-radius: 10px;
  text-align: left;
  box-shadow: 1px 1px 5px 0px rgb(78, 77, 77);
}

p {
  font-weight: 800;
  padding-top: 15px;
  padding-left: 5px;
  color: #19568f;
}
span {
  padding-left: 5px;
}
.title {
  font-weight: 800;
  color: #19568f;
  text-align: left;
}
.detail {
  display: inline;
  margin-left: 60%;
  cursor: pointer;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>