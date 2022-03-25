import axios from "axios";
import { parsePath } from "react-router-dom";
import { TOKEN_STORAGE_KEY } from "./key";
const api = axios.create({
    baseURL: process.env.REACT_APP_HOST
})

api.interceptors.response.use((res) => {

    return res.data;
})

api.interceptors.request.use((config) => {
    let token = localStorage.getItem(TOKEN_STORAGE_KEY);
    if(token){
        token = JSON.parse(token)
        config.headers.Authorization = `Bearer ${token.accessToken}`
    }
    return config;
})
export default api