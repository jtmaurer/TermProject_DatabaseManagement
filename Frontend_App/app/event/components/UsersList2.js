import React from 'react';
import User from './User2';
import Card from './Card';
import './UsersList.css';

const UsersList = ({ users, onDelete }) => {
  return (
    <Card>
      <ul className="eventrealz">
        {users.map((user, index) => (
          <User
            key={user._id || index} 
            id={user._id}
            BookingName={user.BookingName} 
            BookingDate={user.BookingDate} 
            Tickets={user.Tickets}  
            onDelete={onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
