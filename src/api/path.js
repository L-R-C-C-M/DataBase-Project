const base = {
    //公共路径
    baseUrl: "http://8.130.101.207:1827",
    baseUrlh: "http://8.130.101.207:5927",
    //1.1 发布资讯
    releaseNews:"/api/Administrator/ReleaseNews",
    //1.1-1 上传资讯图片
    addNewsCover:"/api/Administrator/AddNewsCover",
    //1.1-2管理员发布志愿活动
    releaseVolActivity:"/api/Administrator/ReleaseVolActivity",
    //发布志愿活动图片
    addVolActivityPic:"/api/Administrator/AddVolActivityPic",
    //1.1-3返回所有志愿机构id和名称
    getAllVolInst:"/api/Administrator/GetAllVolInst",
    baseUrl0: "http://8.130.101.207:5927",
    baseUrl1: "http://8.130.101.207:10105",
    //1.3 获取用户信息
    userInfo: "/api/UserInfo/GetUserInfo",
    //1.3-2 修改个人信息
    changeUserInfo: "/api/UserInfo/ChangeUserInfo",
    //上传头像
    uploadAvator:"/api/UserInfo/upLoadUserHead",
    //2.1 展示用户发布的所有寻人信息
    getAllSearchInfoPublished:"/api/UserOperation/GetAllSearchInfoPublished",
    //2.2 展示用户发布的所有寻人线索
    getAllCLuesPublished:"/api/UserOperation/GetAllCLuesPublished",
    //2.3 展示用户关注的所有寻人信息
    getFollowInfo:"/api/UserOperation/GetFollowInfo",
    //3.1 展示志愿者跟进的所有寻人信息
    getFollowUpInfo:"/api/Vol/GetFollowUpInfo",
    //3.2 展示志愿者报名的所有志愿活动
    getVolApplyAct:'/api/Vol/GetVolAct',
    //用户删除自己发布的寻人信息
    userDeleteInfo:"/api/User/UserDeleteInfo",
    //用户删除自己发布的寻人线索
    userDeleteClue:"/api/User/UserDeleteClue",

    //1.4 用户管理
    allNorUser: "/api/Admin/GetAllNorUser",
    //1.4.1 封禁用户
    banUser: "/api/Admin/BanUser",
    //1.4.2 删除用户
    deleteUser: "/api/Admin/DeleteUser",
    //1.4.3 搜索
    userByName: "/api/Admin/GetUserByName",
    //1.5 志愿者管理
    allVol: "/api/Admin/GetAllVol",
    //1.6 资讯管理
    allNews: "/api/Admin/GetAllNews",
    //1.7.1 获得审核数量
    volApplyCount: "/api/Admin/GetVolApplyCount",
    //1.7.2 获得需要审核的志愿者信息
    volApplyReviewed: "/api/Admin/GetVolApplyReviewed",
    //1.7.3 通过志愿者申请
    passVolApply: "/api/Admin/PassVolApply",
    //1.7.4 拒绝志愿者申请
    denyVolApply: "/api/Admin/DenyVolApply",
    //1.8.1 获得信息举报数量
    infoRepoCount: "/api/Admin/GetInfoRepoCount",
    //1.8.2 获得线索举报数量
    clueRepoCount: "/api/Admin/GetClueRepoCount",
    //1.8.3 获得信息举报信息
    infoRepoReviewed: "/api/Admin/GetInfoRepoReviewed",
    //1.8.4 获得线索举报信息
    clueRepoReviewed: "/api/Admin/GetClueRepoReviewed",
    //1.8.5 通过举报
    passInfoRepo: "/api/Admin/PassInfoRepo",
    //1.8.6 拒绝举报
    denyInfoRepo: "/api/Admin/DenyInfoRepo",
    //1.8.7 通过举报
    passClueRepo: "/api/Admin/PassClueRepo",
    //1.8.8 拒绝举报
    denyClueRepo: "/api/Admin/DenyClueRepo",

    //2.4 用户申请成为志愿者
    userApplyVolunteer: "/api/LogIn/UserApplyVolunteer",
    //2.5 判断用户是否有正在审核中
    isReviewApply: "/api/LogIn/IsReviewApply",

    //1.1 发布资讯
    releaseNews:"/api/Administrator/ReleaseNews",
    //1.1-1 上传资讯图片
    addNewsCover:"/api/Administrator/AddNewsCover",
    //1.1-2管理员发布志愿活动
    releaseVolActivity:"/api/Administrator/ReleaseVolActivity",
    //1.1-3返回所有志愿机构id和名称
    getAllVolInst:"/api/Administrator/GetAllVolInst",
    //1.3 获取用户信息
    userInfo: "/api/UserInfo/GetUserInfo",
    //1.3-2 修改个人信息
    changeUserInfo: "/api/UserInfo/ChangeUserInfo",
    //上传头像
    uploadAvator:"/api/UserInfo/upLoadUserHead",
    //2.1 展示用户发布的所有寻人线索
    getAllCLuesPublished:"/api/UserOperation/GetAllCLuesPublished",
    //3.2 展示志愿者报名的所有志愿活动
    getVolAct:'/api/Vol/GetVolAct',
    
}

export default base;