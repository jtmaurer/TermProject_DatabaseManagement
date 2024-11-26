import React, { useState, useEffect } from "react";
import EventBox from "./EventBox";

const EventList = ({ filters }) => {
  const [events, setEvents] = useState([]); // State for the list of events
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Function to build query string from filters
  const buildQueryString = (filters) => {
    const queryParams = new URLSearchParams();

    // Iterate over each filter and append to queryParams
    Object.keys(filters).forEach((key) => {
      if (
        filters[key] !== undefined &&
        filters[key] !== null &&
        filters[key] !== ""
      ) {
        queryParams.append(key, filters[key]);
      }
    });

    return queryParams.toString();
  };

  // Fetch the events from the API
  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryString = buildQueryString(filters);
      const response = await fetch(
        `http://localhost:8080/events?${queryString}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await response.json();
      setEvents(data); // Update the state with fetched events
    } catch (error) {
      console.error("Error fetching events:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch events when the component loads or when filters change
  useEffect(() => {
    fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]); // Dependency on filters

  return (
    <div className="event-list">
      {loading && <p>Loading events...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && events.length > 0
        ? events.map((event) => <EventBox key={event.event_id} event={event} />)
        : !loading && !error && <p>No events found.</p>}
    </div>
  );
};

export default EventList;
