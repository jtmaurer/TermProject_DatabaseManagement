import React from 'react';
import User from './User';
import Card from './Card';
import './UsersList.css';

const UsersList = ({ users, onDelete }) => {
  if (!users || users.length === 0) {
    return <p>No tickets to display.</p>;
  }

  return (
    
      <ul className="Myrealz">
        {users.map((ticket) => (
          <User
            key={ticket.ticket_id} // Unique key for each ticket
            id={ticket.ticket_id} // Pass ticket ID for deletion
            event_id={ticket.event_id} // Pass event ID
            Eventname={ticket.event_name} // Pass event name
            order_id={ticket.order_id} // Pass order ID
            seat_number={ticket.seat_number} // Pass seat number
            onDelete={onDelete} // Pass the delete handler
          />
        ))}
      </ul>
    
  );
};

export default UsersList;
