//
import axios from "../utils/request"
import path from "../api/path"

const api = {
    //1.3 获取用户信息
    getUserInfo(id){
        return axios.get(path.baseUrl+path.userInfo,{params:{user_id:id}})
    }
}

export default api;