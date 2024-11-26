import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";

const EventBox = ({ event, tickets, order_id }) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardContent>
          {order_id && (
            <Typography variant="body2" style={{ marginTop: "10px" }}>
              <strong>Order ID:</strong> {order_id}
            </Typography>
          )}
          {tickets && tickets.length > 0 && (
            <div style={{ marginTop: "10px" }}>
              <Typography variant="h6" component="div">
                Tickets:
              </Typography>
              {tickets.map((ticket) => (
                <div key={ticket.ticket_id}>
                  <Typography variant="body2" >
                    Ticket ID: {ticket.ticket_id}{" "}
                    {ticket.order_id && `(Order ID: ${ticket.order_id})`}
                  </Typography>
                  <Typography variant="body2" >
                    Seat: {ticket.seat_number}{" "}
                    {ticket.order_id && `(Order ID: ${ticket.order_id})`}
                  </Typography>
                </div>
              ))}
            </div>
          )}
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
              style={{
                width: "100%",
                maxWidth: "400px",
                height: "auto",
                marginTop: "10px",
              }}
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
};

// Define PropTypes for type checking
EventBox.propTypes = {
  event: PropTypes.shape({
    event_id: PropTypes.number.isRequired,
    event_name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    event_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    venue_name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
    // Add other event properties as needed
  }).isRequired,
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      ticket_id: PropTypes.number.isRequired,
      seat_number: PropTypes.string.isRequired,
      order_id: PropTypes.number,
    })
  ),
  order_id: PropTypes.number,
};

EventBox.defaultProps = {
  tickets: [],
  order_id: null,
};

export default EventBox;
