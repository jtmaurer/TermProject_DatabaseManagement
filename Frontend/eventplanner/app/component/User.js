import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

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
  onDelete,
}) => {
  const router = useRouter();
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

  /* <div className="eventDetails">
        <p className="old11s">Venue: {venue}</p>
      </div>
      */

  return (
    <div className="OGlist11" onClick={() => router.push('../../login')}>
      <div className="OGimgcontainer">
        {image && (
          <img
            className="OGEvent-image"
            src={image}
            alt={Eventname || 'Event Image'}
          />
        )}

        <div className='OGprice'>
          <p>
            ${price}
          </p>
        </div>
      </div>

      <div className="OGeventTitle">
        <h3 className="OGold11">{Eventname}</h3>
      </div>

      <div className="OGeventTitle2">
        <h3 className="OGold11">{date}:</h3>
       
        <h3 className="OGold11">{formatTime(startTime)}</h3>
        <h3 className="OGold11"> - </h3>
        <h3 className="OGold11">{formatTime(endTime)}</h3>
      </div>

      

      <div className="OGeventDetails">
        <p className="OGold11s">
          {online
            ? 'Online Event - Attend Anywhere'
            : `In-Person Event - Venue: ${venue} `}
        </p>
      </div>

      {/* <hr className="bor1" />
      <button className="exitX" onClick={() => onDelete(id)}>
        Delete
      </button> */}
    </div>
  );
};

export default User;
