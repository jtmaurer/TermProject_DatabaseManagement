import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ({ onAddUser }) => {
  const [BookingName, setBookingName] = useState('');
  const [Tickets, setTickets] = useState('');
  const [BookingDate, setBookingDate] = useState('');

  const handleSubmit = (eventz) => {
    eventz.preventDefault();

    if (!BookingName || !Tickets || !BookingDate) return;

    const newEvent = { BookingName, BookingDate, Tickets };
    onAddUser(newEvent);

    // Clear form fields
    setBookingName('');

    setBookingDate('');
 
    setTickets('');
  };

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <label>Booking's Name:</label>
        <input
          type="text"
          value={BookingName}
          onChange={(e) => setBookingName(e.target.value)}
        />
        <label>Number of Tickets:</label>
        <input
          type="number"
          value={Tickets}
          onChange={(e) => setTickets(e.target.value)}
        />
        <label>BookingDate:</label>
        <input
          type="Date"
          value={BookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
       
        <div className='buttonHolder'>
          <Button className="subz" type="submit">Add Booking</Button>
        </div>
        
      </form>
    </Card>
  );
};

export default AddUser;
