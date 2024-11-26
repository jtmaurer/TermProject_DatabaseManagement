// src/contexts/UserContext.jsx

import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// Create the UserContext with default value null
export const UserContext = createContext({
  user_id: 1,
  setUserId: () => {},
  clearUserId: () => {},
});

// Create a Provider component
export const UserProvider = ({ children }) => {
  const [user_id, setUserIdState] = useState(1);

  // Method to set the user_id
  const setUserId = (id) => {
    if (typeof id === "number") {
      setUserIdState(id);
    } else {
      console.error("setUserId: ID must be a number.");
    }
  };

  // Method to clear the user_id (set to null)
  const clearUserId = () => {
    setUserIdState(null);
  };

  return (
    <UserContext.Provider value={{ user_id, setUserId, clearUserId }}>
      {children}
    </UserContext.Provider>
  );
};

// Define PropTypes for type checking
UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
