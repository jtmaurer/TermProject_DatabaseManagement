import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(""); // Initialize as string for controlled input
  const [event_date, setEventDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert price to integer if it's a valid number
    const parsedPrice = price ? parseInt(price, 10) : null;

    // Check if parsedPrice is a valid number
    const finalPrice = !isNaN(parsedPrice) ? parsedPrice : null;

    onFilterChange({
      location,             // string
      price: finalPrice,    // integer or null
      event_date,           // string
      user_ordered_events: false
    });
  };

  const handleReset = () => {
    setLocation("");
    setPrice("");
    setEventDate("");
    onFilterChange({
      location: "",
      price: null,
      event_date: "",
      user_ordered_events: false
    });
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      {/* Location Filter */}
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter City, State"
        />
      </div>
      
      {/* Price Filter */}
      <div>
        <label htmlFor="price">Max Price:</label>
        <input
          type="number" // Changed to number for numeric input
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter Max Price"
          min="0" // Optional: Prevent negative numbers
        />
      </div>
      
      {/* Event Date Filter */}
      <div>
        <label htmlFor="event_date">Date:</label>
        <input
          type="date" // Changed to date for better date handling
          id="event_date"
          value={event_date}
          onChange={(e) => setEventDate(e.target.value)}
        />
      </div>
      
      {/* Buttons */}
      <button type="submit">Apply Filters</button>
      <button type="button" onClick={handleReset}>
        Reset Filters
      </button>
    </form>
  );
};

export default Filter;
