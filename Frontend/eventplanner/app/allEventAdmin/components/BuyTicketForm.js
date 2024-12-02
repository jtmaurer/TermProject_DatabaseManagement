// src/components/BuyTicketForm.jsx

"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Typography } from "@mui/material";

const BuyTicketForm = ({ onAddUser, eventId, user_id }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleTicketPurchase = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (numberOfTickets < 1) {
      setError("Please purchase at least one ticket.");
      return;
    }

    // Generate current date in YYYY-MM-DD format
    const currentDate = new Date().toISOString().split("T")[0];

    // Construct the API URL with query parameters
    const apiUrl = `http://localhost:8080/order?order_date=${encodeURIComponent(
      currentDate
    )}&number_of_tickets=${encodeURIComponent(
      numberOfTickets
    )}&user_id=${encodeURIComponent(user_id)}&event_id=${encodeURIComponent(
      eventId
    )}`;

    setLoading(true);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to purchase tickets.");
      }

      const data = await response.json();

      
      setSuccess("Tickets purchased successfully!");
      onAddUser(data); 

    } catch (err) {
      setError(err.message);
      console.error("Ticket Purchase Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleTicketPurchase} style={styles.form}>
      <Typography variant="h6" gutterBottom>
        Purchase Tickets
      </Typography>
      {error && (
        <Typography variant="body2" color="error" gutterBottom>
          {error}
        </Typography>
      )}
      {success && (
        <Typography variant="body2" color="primary" gutterBottom>
          {success}
        </Typography>
      )}
      <TextField
        label="Number of Tickets"
        type="number"
        InputProps={{ inputProps: { min: 1 } }}
        value={numberOfTickets}
        onChange={(e) => setNumberOfTickets(parseInt(e.target.value, 10))}
        required
        fullWidth
        margin="normal"
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={loading}
        fullWidth
        style={{ marginTop: "20px" }}
      >
        {loading ? "Processing..." : "Purchase"}
      </Button>
    </form>
  );
};

// Define PropTypes for type checking
BuyTicketForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: "2rem",            
    borderRadius: "8px",         
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
    maxWidth: "500px",         
    margin: "0 auto",           
  },
};

export default BuyTicketForm;
