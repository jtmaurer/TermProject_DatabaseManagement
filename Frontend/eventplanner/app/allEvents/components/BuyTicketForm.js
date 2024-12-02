import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, MenuItem } from "@mui/material";

const BuyTicketForm = ({ onAddUser, eventId, user_id, price }) => {
    const [numberOfTickets, setNumberOfTickets] = useState(1);
    const [paymentMethod, setPaymentMethod] = useState("");
    const [totalPrice, setTotalPrice] = useState(price || 0);
    const [remainingCapacity, setRemainingCapacity] = useState(null);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    // Fetch remaining capacity
    useEffect(() => {
        const fetchRemainingCapacity = async () => {
            try {
                const response = await fetch(
                    `http://localhost:8080/events/${eventId}/remaining-capacity`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch remaining capacity");
                }
                const data = await response.json();
                setRemainingCapacity(data);
            } catch (error) {
                console.error("Error fetching remaining capacity:", error);
            }
        };

        fetchRemainingCapacity();
    }, [eventId]);

    // Update total price whenever number of tickets or price changes
    useEffect(() => {
        setTotalPrice(numberOfTickets * (price || 0));
    }, [numberOfTickets, price]);

    const handleTicketPurchase = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (numberOfTickets < 1) {
            setError("Please purchase at least one ticket.");
            return;
        }

        if (!paymentMethod) {
            setError("Please select a payment method.");
            return;
        }

        const currentDate = new Date().toISOString().split("T")[0];

        const apiUrl = `http://localhost:8080/order?order_date=${encodeURIComponent(
            currentDate
        )}&number_of_tickets=${encodeURIComponent(
            numberOfTickets
        )}&user_id=${encodeURIComponent(
            user_id
        )}&event_id=${encodeURIComponent(
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
            setSuccess("Tickets purchased successfully!");
            onAddUser(data);
        } catch (err) {
            setError(err.message);
            console.error("Ticket Purchase Error:", err);
        } finally {
            setLoading(false);
        }
    };

    // Render "Sold Out" if no tickets are available
    if (remainingCapacity !== null && remainingCapacity <= 0) {
        return (
            <Typography variant="h6" color="error" style={{ textAlign: "center", marginTop: "1rem" }}>
                Sold Out
            </Typography>
        );
    }

    return (
        <form onSubmit={handleTicketPurchase} style={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6">Purchase Tickets</Typography>
            {error && <Typography color="error">{error}</Typography>}
            {success && <Typography color="primary">{success}</Typography>}
            <TextField
                label="Number of Tickets"
                type="number"
                InputProps={{ inputProps: { min: 1, max: remainingCapacity } }}
                value={numberOfTickets}
                onChange={(e) => setNumberOfTickets(parseInt(e.target.value, 10) || 1)}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Payment Method"
                select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                fullWidth
                margin="normal"
            >
                <MenuItem value="Credit Card">Credit Card</MenuItem>
                <MenuItem value="PayPal">PayPal</MenuItem>
                <MenuItem value="Bank Transfer">Bank Transfer</MenuItem>
            </TextField>
            <Typography>
                Total Price: ${totalPrice.toFixed(2)}
            </Typography>
            <Typography>
                Remaining Capacity: {remainingCapacity || "Loading..."}
            </Typography>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading || remainingCapacity < numberOfTickets}
                style={{ marginTop: "1rem" }}
            >
                {loading ? "Processing..." : "Purchase"}
            </Button>
        </form>
    );
};

export default BuyTicketForm;
