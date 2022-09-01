// import Vue from 'vue' 呃呃这个写法是旧版本的，不适用
// import Vuex from 'vuex'
import { createStore } from 'vuex'
import * as getters from'./getters'
import * as mutations from'./mutations'
import * as actions from'./actions'
// Vue.use(Vuex);
 
const store = createStore({
  //存储用户登录信息的一个状态
  state:{
    identity:null,//用户身份
    user_id:null,
    vol_id:null,
    //isLogin:false,//登录状态
  },
  //关联着其他三个目录，目的松耦合
  getters,
  mutations,
  actions
})
export default store;