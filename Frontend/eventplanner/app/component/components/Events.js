'use client';
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import UsersList from '../UsersList';
import AddUser from '../AddUser';
import './Events.css';

const Events = () => {
  const [event, setEvent] = useState([]);
  const [visible, setVisible] = useState(false);

 
  // Move fetchEvents outside of useEffect so it's reusable
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://localhost:8080/events?user_ordered_events=false');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
  
      // Map backend fields to frontend fields
      const updatedData = data.map((item, index) => ({
        id: item.event_id, // Backend field mapped to frontend id
        Eventname: item.event_name, // Map backend field to frontend field
        description: item.description,
        date: item.event_date,
        startTime: item.start_time,
        endTime: item.end_time,
        eventImg: item.event_img,
        Online: item.is_online,
        venueID: item.venue_id,
      }));
      setEvent(updatedData);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  

  // Fetch events on mount
  useEffect(() => {
    fetchEvents();
  }, []);

  const handleAddEvent = (newEvent) => {
    setEvent((prevEvent) => [...prevEvent, { ...newEvent, id: Date.now() }]);
    setVisible(false);
  };

  const handleDelete = (id) => {
    setEvent((prevEvent) => prevEvent.filter((event) => event.id !== id));
  };


  return (
    <div className="events">
      <div className="eventsort">
        <div className="UE">
          <h2>Upcoming </h2>
          <h2 className="purp"> Events </h2>
        </div>

        <div>
          <select>
            <option>Weekdays</option>
          </select>
          <select>
            <option>Event Type</option>
          </select>
          <select>
            <option>Any Category</option>
          </select>
        </div>
      </div>

      <div className="eventholder">
        <Model
          className="formz"
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
            content: {
              width: '500px',
              height: '500px',
              margin: 'auto',
              borderRadius: '10px',
              padding: '20px',
            },
          }}
        >
          <div className="lexz">
            <button className="lex2z" onClick={() => setVisible(false)}>
              X
            </button>
          </div>
          <AddUser onAddUser={handleAddEvent} />
        </Model>
        <div className={`users-list-container ${event.length > 5 ? 'expanded' : ''}`}>
          <UsersList users={event} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Events;
