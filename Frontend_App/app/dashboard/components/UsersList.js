import React from 'react';
import User from './User';
import Card from './Card';
import './UsersList.css';

const UsersList = ({ users, onDelete }) => {
  return (
    <Card>
      <ul className="realz">
        {users.map((user, index) => (
          <User
            key={user._id || index} 
            id={user._id}
            Eventname={user.Eventname} 
            description={user.description} 
            date={user.date} 
            startTime={user.startTime}
            endTime={user.endTime} 
            onDelete={onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
