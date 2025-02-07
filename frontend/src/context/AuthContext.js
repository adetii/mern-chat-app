import { createContext, useContext } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => { // ✅ Fix: Correct function name casing
    return useContext(AuthContext);
};
