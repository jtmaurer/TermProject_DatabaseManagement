import React, { useState, useEffect } from "react";
import EventBox from "./EventBox";

const EventList = () => {
  const [events, setEvents] = useState([]); // State for the list of events

  // Fetch the events from the API
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:8080/events?user_ordered_events=false");
      console.log(response);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data); // Update the state with fetched events
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch events when the component loads
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="event-list">
      {events.length > 0 ? (
        events.map((event) => <EventBox key={event.event_id} event={event} />)
      ) : (
        <p>Loading events...</p>
      )}
    </div>
  );
};

export default EventList;
