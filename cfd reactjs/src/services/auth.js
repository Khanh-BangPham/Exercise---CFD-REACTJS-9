import api from "../contants/api"

export const authService = {
    login(data){
        return api.post('/login', data);
    }
}