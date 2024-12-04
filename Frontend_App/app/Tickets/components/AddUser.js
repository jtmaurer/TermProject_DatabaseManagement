import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ({ onAddUser }) => {
  const [Ticketname, setTicketname] = useState('');
  const [seatNumber, setseatNumber] = useState('');


  const handleSubmit = (Ticketz) => {
    Ticketz.preventDefault();

    if (!Ticketname || !seatNumber ) return;

    const newEvent = { Ticketname, seatNumber};
    onAddUser(newEvent);

    // Clear form fields
    setTicketname('');
    setseatNumber('');
    
  };

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <label>Ticket Name:</label>
        <input
          type="text"
          value={Ticketname}
          onChange={(e) => setTicketname(e.target.value)}
        />
        <label>Seat Number:</label>
        <input
          type="number"
          value={seatNumber}
          onChange={(e) => setseatNumber(e.target.value)}
        />
        
        <div className='buttonHolder'>
          <Button className="subz" type="submit">Add Event</Button>
        </div>
        
      </form>
    </Card>
  );
};

export default AddUser;
