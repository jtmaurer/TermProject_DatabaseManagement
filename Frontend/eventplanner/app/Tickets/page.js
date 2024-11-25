'use client';
import React, { useState } from 'react';
import './page.css';
import Model from 'react-modal';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import Hdr from '../component/Hdr2';

const Home = () => {
  const [ticket, setticket] = useState([]);
  const [visible, setVisible] = useState(false);

  const handleAddEvent = (newEvent) => {
    setticket((prevEvent) => [...prevEvent, newEvent]);
    setVisible(false);
  };

  const handleDelete = (id) => {
    setticket((prevEvent) => prevEvent.filter((event) => event._id !== id));
  };

  return (
    <div className="stuff">
      <Hdr />
      <div className="pager">
        <div className="middlez">
          <div className="middle11">
            <div className="bordss">
              <h1 className="bords11">Tickets</h1>
            </div>
          </div>

          <div className="middle33">
            <button className="bords22" onClick={() => setVisible(true)}>
              New Tickets
            </button>
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

            <div
              className={`users-list-container ${
                ticket.length > 5 ? 'expanded' : ''
              }`}
            >
              <UsersList users={ticket} onDelete={handleDelete} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
