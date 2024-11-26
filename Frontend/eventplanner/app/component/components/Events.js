'use client';
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import UsersList from '../UsersList';
import AddUser from '../AddUser';
import './Events.css';

const Events = () => {
  const events = new Array(6).fill({
    title: 'BestSeller Book Bootcamp',
    location: 'Online Event',
    time: 'March 30 | 9:00 AM',
  });

  const [event, setEvent] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleAddEvent = (newEvent) => {
    setEvent((prevEvent) => [...prevEvent, newEvent]);
    setVisible(false);

  };


  const handleDelete = id => {
    setEvent((prevEvent) => prevEvent.filter(event => event.id !== id));
    
  };

  /* Add this below anywhere to test container 
  <button className='bords22' onClick={() => setVisible(true)}> New Event </button> */

  return (
    <div className="events">
      <div className='eventsort'>
        <div className='UE'>
          <h2>Upcoming </h2>
          <h2 className='purp'> Events </h2>
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


      <div className='eventholder'>
      
            <Model
              className='formz'
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
              <div className='lexz'>
                <button className='lex2z' onClick={() => setVisible(false)}> X </button>
              </div>
              <AddUser onAddUser={handleAddEvent} />
            </Model>
        <div
          className={`users-list-container ${
            Event.length > 5 ? 'expanded' : ''
          }`}
          >
          <UsersList
                
            users={event}
            onDelete={handleDelete}
                  
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
