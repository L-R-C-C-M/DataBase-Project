//
import axios from "../utils/request"
import path from "../api/path"

const api = {
    //1.3 获取用户信息
    getUserInfo(id){
        return axios.get(path.baseUrl+path.userInfo,{params:{user_id:id}})
    },

    //1.1-2管理员发布志愿活动
    releaseVolActivity(act_name,act_content,act_time,need_people,act_province,act_city,act_area,act_address,contact_method,volInst_Id)
    {
        return axios.post(path.baseUrl+path.releaseVolActivity,{act_name:act_name,act_content:act_content,act_time:act_time,need_people:need_people,
            act_province:act_province,act_city:act_city,act_area:act_area,act_address:act_address,contact_method:contact_method,volInst_Id:volInst_Id})
    },
    //发布志愿活动图片
    addVolActivityPic(volAct_id,volAct_pic)
    {
        return axios.put(path.baseUrl+path.addVolActivityPic,{volAct_id:volAct_id,volAct_pic:volAct_pic})
    },
    //1.1-3返回所有志愿机构id和名称
    getAllVolInst()
    {
        return axios.get(path.baseUrl+path.getAllVolInst)
    },
    //1.3-2 修改个人信息
    changeUserInfo(user_id,user_name,user_phone,user_email,user_province,user_city,user_area,user_address){
        return axios.put(path.baseUrl+path.changeUserInfo,{user_id:user_id,user_name:user_name,user_phone:user_phone,user_email:user_email,user_province:user_province,user_city:user_city,user_area:user_area,user_address:user_address})
    },
    //上传头像
    uploadAvator(user_id,user_head){
        return axios.put(path.baseUrl+path.uploadAvator,{user_id:user_id,user_head:user_head})
    },
    //1.1 发布资讯
    releaseNews(id,news_content,news_title,news_type){
        return axios.post(path.baseUrl+path.releaseNews,{admin_id:id,news_content:news_content,news_title:news_title,news_type:news_type})
    },
    addNewsCover(news_id,news_cover){
        return axios.put(path.baseUrl+path.addNewsCover,{news_id:news_id,news_cover:news_cover})

    },
    //2.1 展示用户发布的所有寻人信息
    getAllSearchInfoPublished(user_id,pageNum,pageSize)
    {
        return axios.get(path.baseUrl+path.getAllSearchInfoPublished,{params:{user_id:user_id,pageNum:pageNum,pageSize:pageSize}})
    },
    //2.2 展示用户发布的所有寻人线索
    getAllCLuesPublished(user_id,pageNum,pageSize)
    {
        return axios.get(path.baseUrl+path.getAllCLuesPublished,{params:{user_id:user_id,pageNum:pageNum,pageSize:pageSize}})
    },
    //2.3 展示用户关注的所有寻人信息
    getFollowInfo(user_id,pagenum,pagesize)
    {
        return axios.get(path.baseUrl+path.getFollowInfo,{params:{userid:user_id,pagenum:pagenum,pagesize:pagesize}})
    },
    //3.1 展示志愿者跟进的所有寻人信息
    getFollowUpInfo(volid,pagenum,pagesize)
    {
        return axios.get(path.baseUrlh+path.getFollowUpInfo,{params:{volid:volid,pagenum:pagenum,pagesize:pagesize}})
    },
    //3.2 展示志愿者报名的所有志愿活动
    getVolApplyAct(volid,pagenum,pagesize)
    {
        return axios.get(path.baseUrlh+path.getVolApplyAct,{params:{volid:volid,pagenum:pagenum,pagesize:pagesize}})
    },


    // //4.1.1 获取志愿活动
    // getVolAct() {
    //     return axios.get(path.baseUrl + path.volAct)
    // },
    //4.1.2 获取志愿活动详细信息
    getVolActInfo(act_id) {
        //return axios.get(path.volActInfo, { params: { volAct_id: actID } })
        return axios.get(path.baseUrl + path.volActInfo, { params: { VolActId: act_id } })
    },
    //4.2.1 获取志愿机构
    getVolInst() {
        return axios.get(path.baseUrl + path.volInst)
    },
    //4.2.2 获取志愿机构详细信息
    getVolInstInfo(inst_id) {
        return axios.get(path.baseUrl + path.volInstInfo, { params: { VolInstId: inst_id } })
    },
    //4.3.1 获取志愿时长排在前10的志愿者信息
    getVolRank() {
        return axios.get(path.baseUrl + path.volRank)
    }
}

export default api;