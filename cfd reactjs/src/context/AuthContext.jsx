import { createContext, useState } from "react";
import {authService} from '../services/auth'
import { userService } from "../services/user";
import { TOKEN_STORAGE_KEY } from "../contants/key";
export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState()

    const handleLogin = async (data) => {
        const res = await authService.login(data);
        if(res.message){
            return res.message
        }

        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(res.data))

        const user = await userService.getInfo()
        setUser(user.data)
    }

    const handleLogout = () => {

    }
    return <AuthContext.Provider value={{user, handleLogin, handleLogout}}>{children}</AuthContext.Provider>
}