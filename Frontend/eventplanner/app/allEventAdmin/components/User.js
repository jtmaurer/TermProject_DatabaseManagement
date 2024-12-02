'use client';
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation'; 
import './User.css';
import BuyTicketForm from './BuyTicketForm';
import { UserContext } from '../../UserContext';

const User = ({
  id,
  Eventname,
  description,
  date,
  startTime,
  endTime,
  price,
  venue,
  online,
  image,
}) => {
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const router = useRouter();
  const { user } = useContext(UserContext); 

  const formatTime = (time) => {
    if (!time) return '';
    const [hours, minutes, seconds] = time.split(':');
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(parseInt(seconds, 10));

    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  const handleImageClick = () => {
    router.push(`/event/${id}`); 
  };

  return (
    <div className="Alllist11">
      <div className="Allimgcontainer">
        {image && (
          <img
            className="AllEvent-image"
            src={image}
            alt={Eventname || 'Event Image'}
            onClick={handleImageClick} // Navigate to the details page on click
          />
        )}
        <div className="Allprice">
          <p>${price}</p>
        </div>
      </div>

      <div className="AlleventTitle">
        <h3 className="Allold11">{Eventname}</h3>
      </div>

      <div className="AlleventTitle2">
        <h3 className="Allold11">{date}:</h3>
        <h3 className="Allold11">{formatTime(startTime)}</h3>
        <h3 className="Allold11"> - </h3>
        <h3 className="Allold11">{formatTime(endTime)}</h3>
      </div>

      <div className="AlleventDetails">
        <p className="Allold11s">
          {online
            ? 'Online Event - Attend Anywhere'
            : `In-Person Event - Venue: ${venue}`}
        </p>
      </div>

      
    </div>
  );
};

export default User;
