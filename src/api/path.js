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


     //4.1.1 获取志愿活动
    //volAct: "/api/volAct",
    volAct: "/api/Vol/ShowVolActivityList",
    //4.1.3 获取志愿活动详细信息
    //volActInfo: "/api/volActInfo",
    volActInfo: "/api/Vol/ShowSingleVolActivity",
    //4.2.1 获取志愿机构
    //volInst: "/api/volInst",
    volInst: "/api/Vol/ShowAllVolInstitution",
    //4.2.2 获取志愿机构详细信息
    //volInstInfo: "/api/volInstInfo",
    volInstInfo: "/api/Vol/ShowSingleVolInstitution",
    //4.3.1 获取志愿时长排在前10的志愿者信息
    volRank: "/api/Vol/ShowTenVolunteer"
}

export default base;