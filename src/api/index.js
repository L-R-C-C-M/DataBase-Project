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
        return axios.put(path.baseUrl0+path.banUser,null,{params:{userid:userid}})
    },
    //1.4.2 删除用户
    deleteUser(userid){
        return axios.delete(path.baseUrl0+path.deleteUser,{params:{userid:userid}})
    },
    //1.6.1 删除资讯
    deleteNews(newsid){
        return axios.delete(path.baseUrl0+path.deleteNews,{params:{newsid:newsid}})
    },
    //1.4.3 搜索
    getUserByName(word,pagenum,pagesize){
        return axios.get(path.baseUrl0+path.userByName,{params:{word:word,pagenum:pagenum,pagesize:pagesize}})
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
        return axios.put(path.baseUrl0+path.passVolApply,null,{params:{volapplyid:volapplyid}})
    },
    //1.7.4 拒绝志愿者申请
    denyVolApply(volapplyid){
        return axios.put(path.baseUrl0+path.denyVolApply,null,{params:{volapplyid:volapplyid}})
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
        return axios.delete(path.baseUrl0+path.passInfoRepo,null,{params:{infoid:infoid}})
    },
    //1.8.6 拒绝举报
    denyInfoRepo(inforepoid){
        return axios.post(path.baseUrl0+path.denyInfoRepo,null,{params:{inforepoid:inforepoid}})
    },
    //1.8.7 通过举报
    passClueRepo(clueid){
        return axios.put(path.baseUrl0+path.passClueRepo,null,{params:{clueId:clueId}})
    },
    //1.8.8 拒绝举报
    denyClueRepo(cluerepoid){
        return axios.put(path.baseUrl0+path.denyClueRepo,null,{params:{cluerepoid:cluerepoid}})
    },
    
    //2.4 用户申请成为志愿者
    userApplyVolunteer(UserId,Specialty,Background,Career){
        return axios.post(path.baseUrl1+path.userApplyVolunteer,{UserId:UserId,Specialty:Specialty,Background:Background,Career:Career})
    },
    //2.5 判断用户是否有正在审核中
    isReviewApply(user_id){
        return axios.get(path.baseUrl1+path.isReviewApply,{params:{user_id:user_id}})
    },
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
//————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————


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
    //1.1-3返回所有志愿机构id和名称
    getAllVolInst()
    {
        return axios.get(path.baseUrl+path.getAllVolInst)
    },
    //1.3-2 修改个人信息
    changeUserInfo(user_id,user_name,user_phone,user_email,user_province,user_city,user_area,user_address){
        return axios.put(path.baseUrl+path.changeUserInfo,{user_id:user_id,user_name:user_name,user_phone:user_phone,user_email:user_email,user_province:user_province,user_city:user_city,user_area:user_area,user_address:user_address})
    },

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
    //2.2 展示用户发布的所有寻人线索
    getAllCLuesPublished(user_id,pageNum,pageSize)
    {
        return axios.get(path.baseUrl+path.getAllCLuesPublished,{params:{user_id:user_id,pageNum:pageNum,pageSize:pageSize}})
    },
    //3.2 展示志愿者报名的所有志愿活动
    getVolAct(volid,pagenum,pagesize)
    {
        return axios.get(path.baseUrl+path.getVolAct,{params:{volid:volid,pagenum:pagenum,pagesize:pagesize}})
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
    //用户删除自己发布的寻人信息
    userDeleteInfo(userid,infoid)
    {
        return axios.delete(path.baseUrlh+path.userDeleteInfo,{params:{userid:userid,infoid:infoid}})
    },
    ////用户删除自己发布的寻人线索
    userDeleteClue(userid,clueid)
    {
        return axios.delete(path.baseUrlh+path.userDeleteClue,{params:{userid:userid,clueid:clueid}})
    }

}

export default api;