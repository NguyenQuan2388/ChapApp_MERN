import { createContext, useState, useEffect } from "react";
import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){
            const newSocket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id
                }
            });
            setSocket(newSocket);
        }
    }, []);
    return (
        <SocketContext.Provider value={{}}>
            {children}
        </SocketContext.Provider>
    );
};