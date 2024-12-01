import React from 'react';
import User from './User';
import Card from './Card';
import './UsersList.css';

const UsersList = ({ users, onDelete }) => {
  if (!users || users.length === 0) {
    return <p>No events to display.</p>;
  }

  return (
    <Card>
      <ul className="OGrealz">
        {users.map((user, index) => (
          <User
            key={user.event_id || index} // Use event_id from the backend
            id={user.event_id}
            Eventname={user.event_name}
            description={user.description}
            date={user.event_date}
            startTime={user.start_time}
            endTime={user.end_time}
            online={user.online}
            price={user.price}
            venue={user.venue_name || 'Unknown Venue'} // Use venue_name directly
            image={user.image} // Pass the image URL
            onDelete={onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
