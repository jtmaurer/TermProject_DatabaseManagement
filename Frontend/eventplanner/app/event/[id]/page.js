'use client';

import React, { useState, useEffect , useContext } from 'react';
import { useParams } from 'next/navigation';
import './page.css';
import Hdr2 from '../../../app/component/Hdr2'
import Footer from '@/app/component/components/Footer';
import { useRouter } from 'next/navigation';
import { UserContext } from '../../UserContext';
import BuyTicketForm from '@/app/allEvents/components/BuyTicketForm';
import ReactModal from 'react-modal'; // Import React Modal

const EventDetails = () => {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext); // User context for authentication
  const [showPurchaseForm, setShowPurchaseForm] = useState(false);
  const router = useRouter();
  

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (!user) {
      console.log('Not Logged In');
      router.push('/login');
    }
  }, [user, router]);

  useEffect(() => {
    // Ensure React Modal app element is set
    if (typeof window !== 'undefined') {
      const appElement = document.getElementById('__next');
      if (appElement) {
        ReactModal.setAppElement(appElement); // Set app element for accessibility
      }
    }
  }, []);

  useEffect(() => {
    const fetchEventDetails = async () => {
      if (!id) {
        console.error('ID is undefined or null');
        setError('Invalid event ID.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`http://localhost:8080/events/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch event details');
        }

        const data = await response.json();
        setEvent(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (loading) return <p>Loading event details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!event) return <p>No event found.</p>;

  const {
    event_name,
    description,
    event_date,
    start_time,
    end_time,
    price,
    online,
    venue_name,
    capacity,
    image,
    location,
  } = event;

  return (
    <div className="event-details">
      <Hdr2 />

      <div className="imagez">
        {event.venue_image ? (
          <img
            src={event.venue_image ? event.venue_image : `http://localhost:8080/${event.venue_image}`}
            alt={event.venue_name || 'Venue Image'}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        ) : (
          <p>Image not available</p>
        )}
      </div>
      <div className="theBody">
        <div className="wow">
          <div className="titlecard">
            <h1> Event </h1>
            <p>{event_name}</p>
          </div>

          <div className="decriptionz">
            <h1> Description </h1>
            <p>{description}</p>
          </div>
        </div>
        <div className="info">
          <h1> Info </h1>
          <div className="tie">
            <p>Date: {event_date}</p>
            <p>
              Time: {start_time} - {end_time}
            </p>
            <p>Price: ${price}</p>
            <p> Location: {event.location}</p>
            <p>{online ? 'Online Event' : `Venue: ${venue_name}, Location: ${location}, Capacity: ${capacity}`}</p>
          </div>
          <h1>Book Tickets</h1>
          <div className='buttonholder'>
            <button
              className="purchaseButton"
              onClick={() => setShowPurchaseForm(true)}
            >
              Buy Tickets
            </button>
          </div>
          

          <ReactModal
            isOpen={showPurchaseForm}
            onRequestClose={() => setShowPurchaseForm(false)}
            contentLabel="Buy Tickets"
            ariaHideApp={false} // Disable app hiding temporarily
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                maxWidth: '600px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '8px',
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
              user_id={user?.id} // Replace with actual logged-in user ID
              onAddUser={(order) => {
                console.log('Order created:', order);
                setShowPurchaseForm(false); // Close modal after form submission
              }}
            />
          </ReactModal>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventDetails;
