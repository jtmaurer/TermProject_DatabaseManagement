'use client';

import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = ({ id, Ticketname, seatNumber, onDelete }) => {
  const router = useRouter();

  return (
    <div className="list11">
      <h1 onClick={() => router.push(`/pages/${id}`)} className="old1">
        {Ticketname}
      </h1>
      <h3 className="old11">{seatNumber}</h3>

      <hr className="bor1" />
      <button className="exitX" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
