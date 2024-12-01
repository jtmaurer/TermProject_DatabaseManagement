"use client";

import React, { useContext, useEffect } from "react";

import Hdr3 from "../demo_components/Hdr3";
import EventList from "../demo_components/EventList";
import { useRouter } from "next/navigation";
import { UserContext } from "../../UserContext";

const MyEvents = () => {
  const { user } = useContext(UserContext); // Access user from context
  const router = useRouter();

  // Redirect to login if not logged in
  useEffect(() => {
    if (!user) {
      console.log("Not Logged In");
      router.push("/demo/login");
    } else {
      console.log("Logged In");
    }
  }, [user, router]);

  // Prevent rendering until user is verified
  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div>
      <Hdr3 />
      <h1>My Events</h1>
      <EventList
        filters={{
          user_ordered_events: true,
          user_id: user.id, // Assuming the user object contains an "id" property
        }}
      />
    </div>
  );
};

export default MyEvents;
