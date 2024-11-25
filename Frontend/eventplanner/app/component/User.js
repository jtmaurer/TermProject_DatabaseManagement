'use client';

import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = ({ id, Eventname, description, date, onDelete, startTime, endTime, Online, eventImg }) => {
  const router = useRouter();

  const formattedDate = date
    ? new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'No date provided';

  return (
    <div className="list11">
      <div className='imgcontainer'>
        <img
        className="Event-image"
        src={eventImg}
        alt="Event Image"
        />
      </div>
      
      <div className='eventTitle'> 
        <h3 className="old11">{Eventname}</h3>
        <h3 className="old11"> - </h3>
        <h3 className="old11">{description}</h3>
      </div>
      
      <div className='eventTitle2'> 
        <h3 className="old11">{formattedDate}</h3>
        <h3 className="old11">{startTime}</h3>
        <h3 className="old11"> - </h3>
        <h3 className="old11">{endTime}</h3>
      </div>
      
      <h3 className="old11s">
          {Online ? 'Online Event - Attend Anywhere' : 'In-person Event'}
       </h3>

      <hr className="bor1" />
      <button className="exitX" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default User;
