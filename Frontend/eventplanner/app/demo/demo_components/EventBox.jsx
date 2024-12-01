import {React, useState, useContext} from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Model from "react-modal";
import AddUser from "@/app/component/AddUser";
import { UserContext } from "../demo_contexts/UserContext";
import BuyTicketForm from "./BuyTicketForm";
import { useRouter } from "next/navigation";

const EventBox = ({ event, tickets, order_id }) => {
  const [visible, setVisible] = useState(false);
  const {user_id} = useContext(UserContext);
  const router = useRouter();

  const handleAddEvent = (order) => {
    console.log("New order:", order);
    setVisible(false);
    router.push("/demo/myevents");
  };

  return (
    <div>
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
                    <Typography variant="body2">
                      Ticket ID: {ticket.ticket_id}{" "}
                      {ticket.order_id && `(Order ID: ${ticket.order_id})`}
                    </Typography>
                    <Typography variant="body2">
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
    src={event.image} // Directly use the image URL
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
      {!order_id && (
      <><button className="purchase" onClick={() => setVisible(true)}>
          Purchase
        </button><Model
          className="formz"
          isOpen={visible}
          onRequestClose={() => setVisible(false)}
          ariaHideApp={false}
          style={{
            overlay: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
            content: {
              width: "500px",
              height: "500px",
              margin: "auto",
              borderRadius: "10px",
              padding: "20px",
            },
          }}
        >
            <div className="lexz">
              <button className="lex2z" onClick={() => setVisible(false)}>
                X
              </button>
            </div>
            <BuyTicketForm
              onAddUser={handleAddEvent}
              eventId={event.event_id}
              user_id={user_id} />
          </Model></>
      )}
    </div>
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
