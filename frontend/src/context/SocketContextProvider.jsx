import { createContext, useContext, useState, useEffect } from "react";
import { useAuthContext } from './AuthContext';
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
    const { authUser } = useAuthContext(); // Get authUser from context
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    useEffect(() => {
        if (!authUser) return; // Ensure user is authenticated

        const socket = io("https://my-chat-app-production.onrender.com", {
            query: { userId: authUser._id }, // Attach userId to query
        });

        setSocket(socket); // Store socket in state

        socket.on("getOnlineUsers", (users) => {
            setOnlineUsers(users);
        });

        return () => socket.disconnect(); // Cleanup on unmount
    }, [authUser]); // Re-run effect if authUser changes

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
