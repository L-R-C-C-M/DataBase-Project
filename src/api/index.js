//
import axios from "../utils/request"
import path from "../api/path"

const api = {
    //1.3 获取用户信息
    getUserInfo(id){
        return axios.get(path.baseUrl+path.userInfo,{params:{user_id:id}})
    },
    //1.4 用户管理
    getAllNorUser(pagenum,pagesize){
        return axios.get(path.baseUrl0+path.allNorUser,{params:{pagenum:pagenum,pagesize:pagesize}})
    },
    //1.4.1 封禁用户
    banUser(userid){
        return axios.post(path.baseUrl0+path.banUser,null,{params:{userid:userid}})
    },
    //1.4.2 删除用户
    deleteUser(userid){
        return axios.post(path.baseUrl0+path.deleteUser,null,{params:{userid:userid}})
    },
    //1.5 志愿者管理
    getAllVol(pagenum,pagesize){
        return axios.get(path.baseUrl0+path.allVol,{params:{pagenum:pagenum,pagesize:pagesize}})
    },
    //1.6 资讯管理
    getAllNews(pagenum,pagesize){
        return axios.get(path.baseUrl0+path.allNews,{params:{pagenum:pagenum,pagesize:pagesize}})
    },
    //1.7.1 获得审核数量
    getVolApplyCount(adminId,){
        return axios.get(path.baseUrl0+path.volApplyCount,{params:{adminId:adminId}})
    },
    //1.7.2 获得需要审核的志愿者信息
    getVolApplyReviewed(adminId,pagenum,pagesize,review){
        return axios.get(path.baseUrl0+path.volApplyReviewed,{params:{adminId:adminId,pagenum:pagenum,pagesize:pagesize,review:review}})
    },
    //1.7.3 通过志愿者申请
    passVolApply(volapplyid){
        return axios.post(path.baseUrl0+path.passVolApply,null,{params:{volapplyid:volapplyid}})
    },
    //1.7.4 拒绝志愿者申请
    denyVolApply(volapplyid){
        return axios.post(path.baseUrl0+path.denyVolApply,null,{params:{volapplyid:volapplyid}})
    },
    //1.8.1 获得信息举报数量
    getInfoRepoCount(adminId){
        return axios.get(path.baseUrl0+path.infoRepoCount,{params:{adminId:adminId}})
    },
    //1.8.2 获得线索举报数量
    getClueRepoCount(adminId){
        return axios.get(path.baseUrl0+path.clueRepoCount,{params:{adminId:adminId}})
    },
    //1.8.3 获得信息举报信息
    getInfoRepoReviewed(adminId,pagenum,pagesize,review){
        return axios.get(path.baseUrl0+path.infoRepoReviewed,{params:{adminId:adminId,pagenum:pagenum,pagesize:pagesize,review:review}})
    },
    //1.8.4 获得线索举报信息
    getClueRepoReviewed(adminId,pagenum,pagesize,review){
        return axios.get(path.baseUrl0+path.clueRepoReviewed,{params:{adminId:adminId,pagenum:pagenum,pagesize:pagesize,review:review}})
    },
    //1.8.5 通过举报
    passInfoRepo(infoid){
        return axios.post(path.baseUrl0+path.passInfoRepo,null,{params:{infoid:infoid}})
    },
    //1.8.6 拒绝举报
    denyInfoRepo(inforepoid){
        return axios.post(path.baseUrl0+path.denyInfoRepo,null,{params:{inforepoid:inforepoid}})
    },
    //1.8.7 通过举报
    passClueRepo(clueid){
        return axios.post(path.baseUrl0+path.passClueRepo,null,{params:{clueid:clueid}})
    },
    //1.8.8 拒绝举报
    denyClueRepo(cluerepoid){
        return axios.post(path.baseUrl0+path.denyClueRepo,null,{params:{cluerepoid:cluerepoid}})
    },
}

export default api;