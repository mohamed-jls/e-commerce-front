import{ createContext, useState } from "react";
import { auth } from "../api/AuthApi";
import { useNavigate } from "react-router";


const userContext = createContext();

const AuthProvider=({children})=>{

    const nav = useNavigate()
    const [user, setUser] = useState(null);

    const login=async(user)=>{
        const res  = await auth(user);
        if(res.status===200){
            setUser(res.data);
        }
        return res;
    }

    const logout = ()=>{
        setUser(null);
        nav('/')
    }

    return (
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
    )
}

export {userContext, AuthProvider}
