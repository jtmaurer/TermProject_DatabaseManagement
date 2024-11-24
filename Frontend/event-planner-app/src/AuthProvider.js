import React, { createContext, useState, useContext } from "react";

// Create Auth Context
const AuthContext = createContext();

/**
 * The global context that holds the authorization token or JWT.
 * @param {children} children 
 * @returns 
 */
export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(null);

  const login = (token) => {
    setAuthToken(token);
    // Optional: Persist token in localStorage/sessionStorage
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem("authToken");
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom Hook to Use Auth Context
export const useAuth = () => useContext(AuthContext);
