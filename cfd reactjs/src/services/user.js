import api from "../contants/api"

export const userService = {
    getInfo(){
        return api.get('/user/get-info')
    }
}
export default userService