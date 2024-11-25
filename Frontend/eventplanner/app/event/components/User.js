'use client';

import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = ({ id, Venuename, Capacity, Location, onDelete }) => {
  const router = useRouter();

  return (
    <div className="eventlist11">
      <h1  className="eventold1">{Venuename}</h1>
      <h3 className="eventold11">{Location}</h3>
      <h3 className="eventold11">{Capacity}</h3>
      <hr className="eventbor1" />
      <button className="eventexitX" onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default User;
