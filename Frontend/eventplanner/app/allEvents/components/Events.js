'use client';
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import UsersList from './UsersList';
import BuyTicketForm from './BuyTicketForm';
import ReactModal from 'react-modal';
import './Events.css';

const Events = ({ filters }) => {
  const [events, setEvents] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const buildQueryString = () => {
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

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const queryString = buildQueryString(filters);
      console.log("API URL:", `http://localhost:8080/events?${queryString}`);
  
      const response = await fetch(`http://localhost:8080/events?${queryString}`);
      console.log("Raw response status:", response.status);
  
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
  
      const data = await response.json();
      console.log("Raw response data:", data);
  
      // Normalize the fetched data
      const normalizedEvents = data.map((event) => ({
        event_id: event.event_id,
        event_name: event.event_name,
        description: event.description,
        event_date: event.event_date,
        start_time: event.start_time,
        end_time: event.end_time,
        price: event.price,
        venue_name: event.venue_name,
        image: event.image,
        online: event.online,
      }));
  
      setEvents(normalizedEvents); 
      console.log("Normalized events:", normalizedEvents);
    } catch (error) {
      console.error("Error fetching events:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Events state updated:", events);
  }, [events]);

  // Fetch events when the component loads or when filters change
  useEffect(() => {
    fetchEvents();
    
  }, [JSON.stringify(filters)]); 

  const handleDelete = (id) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.event_id !== id));
  };

  return (
    <div className="Allevents">
      <div className="Alleventsort">
        <div className="AllUE">
          <h2>Upcoming</h2>
          <h2 className="Allpurp"> Events </h2>
        </div>

        
      </div>

      <div className="Alleventholder">
        <div
          className={`Allusers-list-container ${
            events.length > 5 ? 'expanded' : ''
          }`}
        >
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <UsersList users={events} onDelete={handleDelete} />
          )}
        </div>
        
      </div>
    </div>
  );
};

export default Events;
