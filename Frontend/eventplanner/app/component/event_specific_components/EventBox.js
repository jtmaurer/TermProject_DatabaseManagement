import React, { useState } from 'react';
import Model from 'react-modal';
import AddUser from '../AddUser2';
import { Card, CardContent, Typography, Grid } from "@mui/material";

const EventBox = ({ event, userId }) => {
  const [visible, setVisible] = useState(false);

  const handleAddEvent = (order) => {
    console.log('New order:', order);
    setVisible(false);
  };

  return (
    <div>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {event.event_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {event.description}
            </Typography>
            <Typography variant="body2">
              <strong>Date:</strong> {event.event_date}
            </Typography>
            <Typography variant="body2">
              <strong>Start Time:</strong> {event.start_time}
            </Typography>
            <Typography variant="body2">
              <strong>Venue:</strong> {event.venue_name} · {event.location}
            </Typography>
            <Typography variant="body2">
              <strong>Price:</strong> ${event.price}
            </Typography>
            {event.image && (
              <img
                src={`data:image/jpeg;base64,${event.image}`}
                alt={event.venue_name}
                style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
              />
            )}
          </CardContent>
        </Card>
      </Grid>
      <button className="purchase" onClick={() => setVisible(true)}>
        Purchase
      </button>
      <Model
        className="formz"
        isOpen={visible}
        onRequestClose={() => setVisible(false)}
        ariaHideApp={false}
        style={{
          overlay: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
          content: {
            width: '500px',
            height: '500px',
            margin: 'auto',
            borderRadius: '10px',
            padding: '20px',
          },
        }}
      >
        <div className="lexz">
          <button className="lex2z" onClick={() => setVisible(false)}>
            X
          </button>
        </div>
        <AddUser
          onAddUser={handleAddEvent}
          eventId={event.event_id}
          userId={userId}
        />
      </Model>
    </div>
  );
};

export default EventBox;
