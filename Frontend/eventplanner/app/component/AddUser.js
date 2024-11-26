import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ({ onAddUser }) => {
  const [Eventname, setEventname] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [description, setDescription] = useState('');
  const [eventImg, seteventImg] = useState('');
  const [Online, setOnline] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (eventz) => {
    eventz.preventDefault();
  
   
    if (!Eventname || !description || !date || !endTime || !startTime || !eventImg) return;
  
    
    const newEvent = {
      id: Date.now(), 
      Eventname,
      description,
      date,
      endTime,
      startTime,
      eventImg,
      Online,
    };
  
    onAddUser(newEvent); 
  
   
    setEventname('');
    setDescription('');
    setDate('');
    setEndTime('');
    setStartTime('');
    seteventImg('');
    setOnline(false);
  };
  

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <label>Event Name:</label>
        <input
          type="text"
          value={Eventname}
          onChange={(e) => setEventname(e.target.value)}
        />
        <label>Description:</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Start Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)} // Corrected
        />
        <label>End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)} // Corrected
        />
        <label>Event Image URL:</label>
        <input
          type="url"
          value={eventImg}
          onChange={(e) => seteventImg(e.target.value)} // Corrected
        />

        <label>Is It Online?:</label>
        <input
          type="checkbox"
          value={Online}
          onChange={(e) => setOnline(e.target.checked)} // Corrected
        />
        <div className='buttonHolder'>
          <Button className="subz" type="submit">Add Event</Button>
        </div>
        
      </form>
    </Card>
  );
};

export default AddUser;
