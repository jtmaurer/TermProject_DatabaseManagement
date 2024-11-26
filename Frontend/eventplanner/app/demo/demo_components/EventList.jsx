import React, { useState, useEffect, useContext } from "react";
import EventBox from "./EventBox";
import PropTypes from "prop-types";
import { UserContext } from "../demo_contexts/UserContext";

const EventList = ({ filters }) => {
  const [events, setEvents] = useState([]); // State for the list of events
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const {user_id} = useContext(UserContext);

  // Function to build query string from filters
  const buildQueryString = (filters) => {
    const queryParams = new URLSearchParams();
    console.log(filters)
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
        `http://localhost:8080/events?${queryString}&user_id=${user_id}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await response.json();

      let normalizedEvents = [];

      if (filters.user_ordered_events) {
        // Handle response when user_ordered_events=true
        if (data.order_data_list && Array.isArray(data.order_data_list)) {
          normalizedEvents = data.order_data_list.map((order) => ({
            event: order.order_data,
            tickets: order.tickets,
            order_id: order.order_id,
          }));
        } else {
          throw new Error("Invalid data structure for user_ordered_events");
        }
      } else {
        // Handle response when user_ordered_events=false
        if (Array.isArray(data)) {
          normalizedEvents = data.map((event) => ({
            event,
            tickets: [], // No tickets associated
          }));
        } else {
          throw new Error("Invalid data structure for events");
        }
      }

      setEvents(normalizedEvents); // Update the state with fetched events
      console.log("Fetched events:", normalizedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Log events whenever they change
  useEffect(() => {
    console.log("Events state updated:", events);
  }, [events]);

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
        ? events.map((item) => (
            <EventBox
              key={item.event.event_id}
              event={item.event}
              tickets={item.tickets}
              order_id={item.order_id}
            />
          ))
        : !loading && !error && <p>No events found.</p>}
    </div>
  );
};

// Define PropTypes for type checking
EventList.propTypes = {
  filters: PropTypes.shape({
    user_ordered_events: PropTypes.bool,
    location: PropTypes.string,
    price: PropTypes.number,
    event_date: PropTypes.string,
  }).isRequired,
};

export default EventList;
