import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import './User.css';
import BuyTicketForm from './BuyTicketForm';
import { UserContext } from '../../UserContext';
import ReactModal from 'react-modal';

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
  const [remainingCapacity, setRemainingCapacity] = useState(null);
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchRemainingCapacity = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/events/${id}/remaining-capacity`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch remaining capacity');
        }
        const data = await response.json();
        setRemainingCapacity(data);
      } catch (error) {
        console.error('Error fetching remaining capacity:', error);
      }
    };

    fetchRemainingCapacity();
  }, [id]);

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
      <div
        className="Allimgcontainer"
        {...(remainingCapacity !== null && remainingCapacity > 0
          ? { onClick: handleImageClick }
          : {})}
      >
        {image && (
          <img
            className="AllEvent-image"
            src={image}
            alt={Eventname || 'Event Image'}
          />
        )}
        <div className="Allprice">
          <p>${price}</p>
        </div>
      </div>

      <div
        className="AlleventTitle"
        {...(remainingCapacity !== null && remainingCapacity > 0
          ? { onClick: handleImageClick }
          : {})}
      >
        <h3 className="Allold11">{Eventname}</h3>
      </div>

      <div
        className="AlleventTitle2"
        {...(remainingCapacity !== null && remainingCapacity > 0
          ? { onClick: handleImageClick }
          : {})}
      >
        <h3 className="Allold11">{date}:</h3>
        <h3 className="Allold11">{formatTime(startTime)}</h3>
        <h3 className="Allold11"> - </h3>
        <h3 className="Allold11">{formatTime(endTime)}</h3>
      </div>

      <div
        className="AlleventDetails"
        {...(remainingCapacity !== null && remainingCapacity > 0
          ? { onClick: handleImageClick }
          : {})}
      >
        <p className="Allold11s">
          {online
            ? 'Online Event - Attend Anywhere'
            : `In-Person Event - Venue: ${venue}`}
        </p>
      </div>

      {remainingCapacity !== null && remainingCapacity <= 0 ? (
        <p
          className="SoldOutText"
          style={{ color: 'red', fontWeight: 'bold', textAlign: 'center', margin: '0' }}
        >
          Sold Out
        </p>
      ) : (
        <button
          className="AllpurchaseButton"
          onClick={() => setShowPurchaseForm(!showPurchaseForm)}
        >
          {showPurchaseForm ? 'Cancel' : 'Buy Tickets'}
        </button>
      )}

      {remainingCapacity > 0 && (
        <ReactModal
          isOpen={showPurchaseForm}
          onRequestClose={() => setShowPurchaseForm(false)}
          contentLabel="Buy Tickets"
          ariaHideApp={false}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',  
            },
            content: {
              position: 'fixed',  
              top: '50%',  
              left: '50%',  
              transform: 'translate(-50%, -50%)',  
              maxWidth: '600px',
              width: '90%',  
              maxHeight: '90vh',  
              overflow: 'auto',  
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            },
          }}
        >
          <h2>Buy Tickets</h2>
          <button
            onClick={() => setShowPurchaseForm(false)}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'transparent',
              border: 'none',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          <BuyTicketForm
            eventId={id}
            user_id={user?.id}
            price={price}
            onAddUser={(order) => {
              console.log('Order created:', order);
              setShowPurchaseForm(false);
            }}
          />
        </ReactModal>
      )}
    </div>
  );
};

export default User;
