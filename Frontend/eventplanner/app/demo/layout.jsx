// src/app/demo/layout.jsx

"use client";

import React from "react";
import { UserProvider } from "./demo_contexts/UserContext";

const DemoLayout = ({ children }) => {
  return <UserProvider>{children}</ UserProvider>;
};

export default DemoLayout;
