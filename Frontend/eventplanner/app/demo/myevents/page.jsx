"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Hdr3 from "../demo_components/Hdr3";
import EventList from "../demo_components/EventList";

const MyEvents = () => {
  return (
    <div>
      <Hdr3 />
      <h1>My Events</h1>
      <EventList
        filters={{
          user_ordered_events: true,
          user_id: 1
        }}
      />
    </div>
  );
};

export default MyEvents;
