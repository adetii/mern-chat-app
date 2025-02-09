// src/context/AuthProvider.jsx
import { useState } from 'react';
import { AuthContext } from './AuthContext';  // Import from AuthContext.js

export const AuthContextProvider = ({ children }) => {  
    const [authUser, setAuthUser] = useState(
      JSON.parse(localStorage.getItem("chat-user")) || null
    );

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};