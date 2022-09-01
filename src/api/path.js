const base = {
    //公共路径
    baseUrl: "http://8.130.101.207:1827",
    //1.3 获取用户信息
    userInfo: "/api/UserInfo/GetUserInfo",
    //1.3-2 修改个人信息
    changeUserInfo: "/api/UserInfo/ChangeUserInfo",
    //4.1.1 获取志愿活动
    volAct: "/api/volAct",
    //10.1 登录验证
    loginCheck: "/api/LogIn/LogInCheck",
    //7.1 展示寻人资讯卡片
    newsCard: "/api/News/GetAllNews",
    //7.2 展示寻人资讯详情
    newsInfo: "/api/News/GetNewsDetail",
    //7.3 搜索寻人资讯
    searchNews: "/api/News/SearchNews",
    //8.1 展示相关部门信息卡片
    departmentCard: "/api/RelatedDp/GetRelatedDps",
    //8.2 展示相关部门详情
    departmentDetail:"/api/RelatedDp/GetDPDetail",
}

export default base;