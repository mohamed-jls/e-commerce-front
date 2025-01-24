import{ createContext, useState } from "react";
import { auth } from "../api/AuthApi";


const userContext = createContext();

const AuthProvider=({children})=>{
    const [user, setUser]=useState(null);

    const login=async(user)=>{
        const res  =await auth(user);
        if(res.status===200){
            setUser(res.data);
        }
        return res;
    }

    const logout = ()=>{
        setUser(null);
    }

    return (
        <userContext.Provider value={{user, login, logout}}>
            {children}
        </userContext.Provider>
    )
}

export {userContext, AuthProvider}
