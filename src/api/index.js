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
    volAct() {
        return axios.get(path.volAct)
    },
    //10.1 登录发送验证信息
    loginCheck(phonenumber, password) {
        return axios.post(path.baseUrl + path.loginCheck, { user_phone: phonenumber, user_password: password })
    },
    //7.1 展示寻人资讯卡片
    newsCard(news_type, pageNum, pageSize) {
        return axios.get(path.baseUrl + path.newsCard, { params: { news_type: news_type, pageNum: pageNum, pageSize: pageSize } })
    },
    //7.2 展示寻人资讯详情页
    newsInfo(newsid){
        return axios.get(path.baseUrl + path.newsInfo, { params: { news_id: newsid } })
    },
    //7.3 搜索资讯
    searchNews(search, pageNum,pageSize) {
        return axios.post(path.baseUrl + path.searchNews, { search: search, pageNum: pageNum, pageSize: pageSize })
    },
    //8.1 展示相关部门信息卡片
    departmentCard(province, city) {
        return axios.get(path.baseUrl + path.departmentCard, { params: { province: province, city: city } })
    },
    //8.2 展示相关部门详情
    departmentDetail(dpid){
        return axios.get(path.baseUrl + path.departmentDetail, { params: { DP_id: dpid } })

    }
}

export default api;