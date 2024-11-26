"use client";

import React, { useContext, useEffect } from "react";
import "./page.css";
import Hdr3 from "../demo_components/Hdr3";
import EventList from "../demo_components/EventList";
import { UserContext } from "../demo_contexts/UserContext.jsx";


const MyEvents = () => {
  const { user_id } = useContext(UserContext);

  return (
    <div>
      <Hdr3 />
      <h1>My Events</h1>
      <EventList
        filters={{
          user_ordered_events: true,
          user_id: user_id 
        }}
      />
    </div>
  );
};

export default MyEvents;
