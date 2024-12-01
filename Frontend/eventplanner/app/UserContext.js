"use client";

import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

// Create the UserContext
export const UserContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  logout: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUserState] = useState(null);
  const [token, setTokenState] = useState(null);

  // Load user and token from localStorage on app initialization
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser) {
      setUserState(JSON.parse(storedUser));
    }

    if (storedToken) {
      setTokenState(storedToken);
    }
  }, []);

  // Save user to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Save token to localStorage when it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  // Method to set the user state
  const setUser = (newUser, newToken) => {
    setUserState(newUser);
    setTokenState(newToken);
  };

  // Logout function
  const logout = () => {
    setUserState(null);
    setTokenState(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        setUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// PropTypes for validation
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
