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
          key={user.id} 
          id={user.id} 
          Eventname={user.Eventname}
          description={user.description}
          date={user.date}
          startTime={user.startTime}
          endTime={user.endTime}
          eventImg={user.eventImg}
          Online={user.Online}
          onDelete={onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
