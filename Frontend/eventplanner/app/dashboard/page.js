'use client';
import './page.css';
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { useRouter } from 'next/navigation';
import Hdr from '../component/Hdr2';


const Home = () => {

  const [event, setEvent] = useState([]);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState('All');

  const router = useRouter();
  
  const handleAddEvent = (newEvent) => {
    setEvent((prevEvent) => [...prevEvent, newEvent]);
    setVisible(false);
  };


  const handleDelete = id => {
    setEvent((prevEvent) => prevEvent.filter(event => event.id !== id));
    
  };

  return (
    <div className='stuff'>
      <Hdr />
      <div className='pager'>
        <div className='middlez'>
          <div className='middle11'>
            <div className='bordss'>
              <h1 className='bords11'> Events </h1>
            </div>
          </div>

          <div className='middle33'>

           

            <button className='bords22' onClick={() => setVisible(true)}> New Event </button>
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
                filter={filter}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
