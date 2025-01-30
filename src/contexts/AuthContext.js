import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../api/AuthApi";

const userContext = createContext();

const AuthProvider = ({ children }) => {
    const nav = useNavigate();

    // Properly parse localStorage data
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem('user');
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const login = async (user) => {
        const res = await auth(user);
        if (res.status === 200) {
            setUser(res.data);
            localStorage.setItem('user', JSON.stringify(res.data));
        }
        return res;
    };

    const logout = () => {
        console.log('logout ...');
        setUser(null);
        localStorage.removeItem('user');
        nav('/');
    };

    return (
        <userContext.Provider value={{ user, login, logout }}>
            {children}
        </userContext.Provider>
    );
};

export { userContext, AuthProvider };
