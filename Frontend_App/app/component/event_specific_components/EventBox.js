import React from "react";
import { Card, CardContent, Typography, Grid2 } from "@mui/material";

const EventBox = ({ event }) => {
  return (
    <Grid2 item xs={12} sm={6} md={4}>
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
              style={{ width: "100%", maxWidth: "400px", height: "auto" }}
            />
          )}
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default EventBox;
