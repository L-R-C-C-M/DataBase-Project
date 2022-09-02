//
import axios from "../utils/request"
import path from "../api/path"

const api = {
    //1.3 获取用户信息
    getUserInfo(id) {
        return axios.get(path.baseUrl + path.userInfo, { params: { user_id: id } })
    },
    //1.3-2 修改个人信息
    changeUserInfo(user_id, user_name, user_phone, user_email) {
        return axios.put(path.baseUrl + path.changeUserInfo, { user_id: user_id, user_name: user_name, user_phone: user_phone, user_email: user_email, user_province: "云南省", user_city: "昆明市", user_area: "五华区", user_address: "一二一大街" })
    },
    //用户登录
    login(phonenum, password) {
        return axios.post(path.baseUrl + path.userLogin, { "user_phone": phonenum, "user_password": password })
    },
    //4.1.1 获取志愿活动列表
    getVolAct(pageNum, pageSize) {
        return axios.get(path.baseUrl + path.volAct, { params: { pageNum: pageNum, pageSize: pageSize } })
    },
    //4.1.2 搜索志愿活动
    getActSearch(act_name, pageNum, pageSize) {
        return axios.post(path.baseUrl + path.searchAct, { "search": act_name, "pageNum": pageNum, "pageSize": pageSize })
    },

    //4.1.3 获取志愿活动详细信息
    getVolActInfo(act_id) {
        //return axios.get(path.volActInfo, { params: { volAct_id: actID } })
        return axios.get(path.baseUrl + path.volActInfo, { params: { VolActId: act_id } })
    },
    //4.1.4 报名&取消报名志愿活动
    getSignUp(vol_id, act_id) {
        return axios.get(path.baseUrl + path.volSignUp, { params: { VolId: vol_id, VolActId: act_id } })
    },
    //获取报名状态
    getApplyState(vol_id, act_id) {
        return axios.get(path.baseUrl + path.applyState, { params: { vol_id: vol_id, volAct_id: act_id } })
    },

    //4.2.1 获取志愿机构列表
    getVolInst(pageNum, pageSize) {
        return axios.get(path.baseUrl + path.volInst, { params: { pageNum: pageNum, pageSize: pageSize } })
    },
    //4.2.2 搜索志愿机构
    getInstSearch(inst_name, pageNum, pageSize) {
        return axios.post(path.baseUrl + path.searchInst, { "search": inst_name, "pageNum": pageNum, "pageSize": pageSize })
    },

    //4.2.3 获取志愿机构详细信息
    getVolInstInfo(inst_id) {
        return axios.get(path.baseUrl + path.volInstInfo, { params: { VolInstId: inst_id } })
    },
    //4.3 获取志愿时长排在前10的志愿者信息
    getVolRank() {
        return axios.get(path.baseUrl + path.volRank)
    }
}

export default api;