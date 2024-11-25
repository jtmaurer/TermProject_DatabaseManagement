'use client';

import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = ({ id, Eventname, description, date, onDelete, startTime, endTime }) => {
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
      <h1 onClick={() => router.push(`/pages/${id}`)} className="old1">{Eventname}</h1>
      <h3 className="old11">{description}</h3>
      <h3 className="old11">{formattedDate}</h3>
      <h3 className="old11">{startTime}</h3>
      <h3 className="old11">{endTime}</h3>
      <hr className="bor1" />
      <button className="exitX" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default User;
