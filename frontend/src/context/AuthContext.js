// src/context/AuthContext.js
import { createContext, useContext } from "react";

export const AuthContext = createContext();

// Create and export the hook here
export const useAuthContext = () => {
  return useContext(AuthContext);
};