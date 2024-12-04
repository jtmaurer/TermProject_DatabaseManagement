import React from 'react';
import User from './User';
import Card from './Card';
import './UsersList.css';

const UsersList = ({ users, onDelete }) => {
  if (!users || users.length === 0) {
    return <p>No tickets available.</p>; // Fallback if no users
  }

  return (
    <Card>
      <ul className="realz">
      {users.map((user, index) => (
        <User
          key={user._id || index}
          id={user._id}
          Ticketname={user.Ticketname}
          seatNumber={user.seatNumber}
          onDelete={() => onDelete(index)}
        />
      ))}
    </ul>

    </Card>
    
  );
};

export default UsersList;
