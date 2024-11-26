import React, { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ({ onAddUser, eventId, userId }) => {
  const [orderDate, setOrderDate] = useState('');
  const [uzerId, setuzerId] = useState('');
  const [numberOfTickets, setNumberOfTickets] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const orderData = {
      order_date: orderDate,
      number_of_tickets: parseInt(numberOfTickets, 10),
      user_id: userId, // Pass as integer
      event_id: eventId, // Pass as integer
    };
  
    try {
      const response = await axios.get('http://localhost:8080/order', { params: orderData });
      console.log('Order created successfully:', response.data);
    } catch (error) {
      console.error('Error creating order:', error.response?.data || error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Order Date:</label>
      <input
        type="date"
        value={orderDate}
        onChange={(e) => setOrderDate(e.target.value)}
      />
      <label>Number of Tickets:</label>
      <input
        type="number"
        value={numberOfTickets}
        onChange={(e) => setNumberOfTickets(e.target.value)}
      />
      <button type="submit">Submit Order</button>
    </form>
  );
};


export default AddUser;
