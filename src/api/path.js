const base = {
    //公共路径
    baseUrl: "http://8.130.101.207:1827",
    baseUrl0: "http://8.130.101.207:5927",
    //1.3 获取用户信息
    userInfo: "/api/UserInfo/GetUserInfo",
    //1.4 用户管理
    allNorUser: "/api/Admin/GetAllNorUser",
    //1.4.1 封禁用户
    banUser: "/api/Admin/BanUser",
    //1.4.2 删除用户
    deleteUser: "/api/Admin/DeleteUser",
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
    
}

export default base;