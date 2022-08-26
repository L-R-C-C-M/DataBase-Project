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
    //1.6 资讯管理
    getAllNews(){
        return axios.get(path.baseUrl0+path.allNews)
    },
}

export default api;