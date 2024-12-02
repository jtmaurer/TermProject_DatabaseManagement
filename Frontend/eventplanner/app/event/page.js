'use client';
import './page.css';
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import UsersList from './components/UsersList';
import UsersList2 from './components/UsersList2';
import AddUser from './components/AddUser';
import AddUser2 from './components/AddBookings';
import { useRouter } from 'next/navigation';
import Hdr from '../component/Hdr2';


const Home = () => {

  const [event, setEvent] = useState([]);
  const [Booking, setBooking] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [filter, setFilter] = useState('All');

  const router = useRouter();
  
  const handleAddEvent = (newEvent) => {
    setEvent((prevEvent) => [...prevEvent, newEvent]);
    setVisible(false);
  };


  const handleDelete = id => {
    setEvent((prevEvent) => prevEvent.filter(event => event.id !== id));
    
  };

  const handleAddEvent2 = (newBook) => {
    setBooking((prevBook) => [...prevBook, newBook]);
    setVisible2(false);
  };


  const handleDelete2 = id => {
    setBooking((prevBook) => prevEvent.filter(Booking => Booking.id !== id));
    
  };

  return (
    <div className='eventstuff'>
      <Hdr />
      <div className='eventpager'>
        <div className='eventmiddlez'>
          <div className='eventmiddle11'>
            <div className='eventbordss'>
              <h1 className='eventbords11'> Events Info</h1>
            </div>
          </div>

          <div className='eventmiddle33'>

            <div className='ven'>  
              <p> Venues:  </p>
            

              <button className='eventbords22' onClick={() => setVisible(true)}> New Venue </button>
            </div>
            <Model
              className='eventformz'
              isOpen={visible}
              onRequestClose={() => setVisible(false)}
              ariaHideApp={false}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                position: 'absolute', 
                  top: `${window.scrollY + window.innerHeight / 2}px`, 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  maxWidth: '600px',
                  width: '90%', 
                  maxHeight: '415px', 
                  overflow: 'auto', 
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className='eventlexz'>
                <button className='eventlex2z' onClick={() => setVisible(false)}> X </button>
              </div>
              <AddUser onAddUser={handleAddEvent} />
            </Model>

            <div
              className={`eventusers-list-container ${
                Event.length > 3 ? 'expanded' : ''
              }`}
            >
              <UsersList
               
                users={event}
                onDelete={handleDelete}
        
              />
            </div>
          </div>

          <div className='eventmiddle33'>

          <div className='ven'>  
              <p> Bookings:  </p>

            <button className='eventbords22' onClick={() => setVisible2(true)}> New Booking </button>
          </div>
            <Model
              className='formz'
              isOpen={visible2}
              onRequestClose={() => setVisible2(false)}
              ariaHideApp={false}
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.75)',
                },
                position: 'absolute', 
                  top: `${window.scrollY + window.innerHeight / 2}px`, 
                  left: '50%',
                  transform: 'translate(-50%, -50%)', 
                  maxWidth: '600px',
                  width: '90%', 
                  maxHeight: '415px', 
                  overflow: 'auto', 
                  padding: '20px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className='eventlexz'>
                <button className='eventlex2z' onClick={() => setVisible2(false)}> X </button>
              </div>
              <AddUser2 onAddUser={handleAddEvent2} />
            </Model>

            <div
              className={`eventusers-list-container ${
                Event.length > 3 ? 'expanded' : ''
              }`}
            >
              <UsersList2
               
                users={Booking}
                onDelete={handleDelete2}
                filter={filter}
              />
            </div>
          </div>
          <div className='total'>
            <p>Total:  </p>
            <button> Pay</button>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default Home;
