"use client";
import "./page.css";
import React, { useEffect, useState } from "react";
import Model from "react-modal";
import AddUser from "../MyEvent/components/AddUser";
import { useRouter } from "next/navigation";
import Footer from "../component/components/Footer";
import Hdr from "../component/Hdr2";

/**
 * Component for adding a user to the system.
 * Renders a header, user form, and footer.
 *
 * @returns {JSX.Element} The rendered component.
 */
const Add = () => {
    
  /**
   * Callback for handling a new event addition.
   *
   * @param {Object} newEvent - The event data to add.
   */
  const handleAddEvent = (newEvent) => {
    setEvent((prevEvent) => [...prevEvent, newEvent]);
  };

  return (
    <div>
      <Hdr />
      <AddUser onAddUser={handleAddEvent} />
      <Footer />
    </div>
  );
};

export default Add;
