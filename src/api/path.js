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
    userDeleteClue:"/api/User/UserDeleteClue"

}

export default base;