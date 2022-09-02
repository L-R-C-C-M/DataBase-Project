const base = {
    //公共路径
    baseUrl: "http://8.130.101.207:1827",
    //1.3 获取用户信息
    userInfo: "/api/UserInfo/GetUserInfo",
    //1.3-2 修改个人信息
    changeUserInfo: "/api/UserInfo/ChangeUserInfo",
    //用户登录
    userLogin: "/api/LogIn/LogInCheck",
    //4.1.1 获取志愿活动
    //volAct: "/api/volAct",
    volAct: "/api/Vol/ShowVolActivityList",
    //4.1.2 搜索志愿活动
    searchAct: "/api/Vol/SearchVolActivity",

    //4.1.3 获取志愿活动详细信息
    //volActInfo: "/api/volActInfo",
    volActInfo: "/api/Vol/ShowSingleVolActivity",
    //4.1.4 报名&取消报名志愿活动
    volSignUp: "/api/Vol/SignupOrCancelVolActivity",
    //判断报名状态
    applyState: "/api/Vol/IfApplyActivity",

    //4.2.1 获取志愿机构
    //volInst: "/api/volInst",
    volInst: "/api/Vol/ShowAllVolInstitution",
    //4.2.2 搜索志愿机构
    searchInst: "/api/Vol/SearchVolInst",

    //4.2.3 获取志愿机构详细信息
    //volInstInfo: "/api/volInstInfo",
    volInstInfo: "/api/Vol/ShowSingleVolInstitution",
    //4.3.1 获取志愿时长排在前10的志愿者信息
    volRank: "/api/Vol/ShowTenVolunteer"
}

export default base;