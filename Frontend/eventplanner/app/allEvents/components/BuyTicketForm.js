"use client";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { TextField, Button, Typography, MenuItem } from "@mui/material";

const BuyTicketForm = ({ onAddUser, eventId, user_id, price }) => {
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [totalPrice, setTotalPrice] = useState(price || 0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  // Debug: Log the price received from the parent
  useEffect(() => {
    console.log("Received price from parent:", price);
  }, [price]);

  // Update total price whenever number of tickets or price changes
  useEffect(() => {
    setTotalPrice(numberOfTickets * (price || 0)); // Default to 0 if price is undefined
  }, [numberOfTickets, price]);

  const handleTicketPurchase = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Basic validation
    if (numberOfTickets < 1) {
      setError("Please purchase at least one ticket.");
      return;
    }
    if (!paymentMethod) {
      setError("Please select a payment method.");
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
    )}&payment_method=${encodeURIComponent(
      paymentMethod
    )}&amount=${encodeURIComponent(totalPrice)}`;

    setLoading(true);

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to purchase tickets.");
      }

      const data = await response.json();

      // Assuming the API returns the created order details
      setSuccess("Tickets purchased successfully!");
      onAddUser(data); // Notify the parent component
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
        onChange={(e) => setNumberOfTickets(parseInt(e.target.value, 10) || 1)}
        required
        fullWidth
        margin="normal"
      />

      {/* Payment Method Input */}
      <TextField
        label="Payment Method"
        select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        required
        fullWidth
        margin="normal"
      >
        <MenuItem value="Credit Card">Credit Card</MenuItem>
        <MenuItem value="PayPal">PayPal</MenuItem>
        <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
      </TextField>

      {/* Display Total Price */}
      <Typography variant="body1" style={{ marginTop: "10px" }}>
        <strong>Total Price:</strong> ${totalPrice ? totalPrice.toFixed(2) : "0.00"}
      </Typography>

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

// Define default props
BuyTicketForm.defaultProps = {
  price: 0, // Default price to 0 if not provided
};

// Define PropTypes for type checking
BuyTicketForm.propTypes = {
  onAddUser: PropTypes.func.isRequired,
  eventId: PropTypes.number.isRequired,
  user_id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
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
