import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ({ onAddUser }) => {
  const [Venuename, setVenuename] = useState('');
  const [Location, setLocation] = useState('');
  const [Capacity, setCapacity] = useState('');


  const handleSubmit = (eventz) => {
    eventz.preventDefault();

    if (!Venuename || !Capacity || !Location) return;

    const newEvent = { Venuename, Capacity, Location };
    onAddUser(newEvent);

    // Clear form fields
    setVenuename('');
    setCapacity('');
    setLocation('');
  };

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <label>Venue Name:</label>
        <input
          type="text"
          value={Venuename}
          onChange={(e) => setVenuename(e.target.value)}
        />
        <label>Location:</label>
        <input
          type="text"
          value={Location}
          onChange={(e) => setLocation(e.target.value)} // Corrected
        />
        <label>Capacity:</label>
        <input
          type="number"
          value={Capacity}
          onChange={(e) => setCapacity(e.target.value)} // Corrected
        />
        <div className='buttonHolder'>
          <Button className="subz" type="submit">Add Event</Button>
        </div>
        
      </form>
    </Card>
  );
};

export default AddUser;
