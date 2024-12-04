import React from 'react';
import User from './User';
import './UsersList.css';

const UsersList = ({ tickets }) => {
  if (!tickets || tickets.length === 0) {
    return <p>No tickets to display.</p>;
  }

  return (
    <ul className="Myrealz">
      {tickets.map((ticket) => (
        <User
          key={ticket.ticket_id}
          id={ticket.ticket_id}
          event_id={ticket.event_id}
          Eventname={ticket.event_name}
          order_id={ticket.order_id}
          seat_number={ticket.seat_number}
          payment_method={ticket.payment_method}
          price={ticket.price}
        />
      ))}
    </ul>
  );
};


export default UsersList;
