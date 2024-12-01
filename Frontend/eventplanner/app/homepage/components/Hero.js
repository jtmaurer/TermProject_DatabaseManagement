import React, { useState } from "react";
import PropTypes from "prop-types";

import './Hero.css';

const Hero = ({ onFilterChange }) => {
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

  
  


  return (
    <div className="HOGhero">
      <img
        className="HOGhero-image"
        src="https://varioproductions.com/wp-content/uploads/2019/11/people-sitting-on-gang-chairs-2774556.jpg"
        alt="Event Banner"
      />
      <form onSubmit={handleSubmit} className="HOGsearch-bar">
        <div className='HOGheroholder'>
            <div className='HOGselecter2'>
              <label htmlFor="HOGlocation">Location:</label>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Enter City, State"
                />
            </div>

          

            
            <div className='HOGselecter'>
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

           



            <div className='HOGselecter'>
              <label htmlFor="event_date">Date:</label>
                <input
                  type="date" // Changed to date for better date handling
                  id="event_date"
                  value={event_date}
                  onChange={(e) => setEventDate(e.target.value)}
                />
            </div>

         
            <button type="submit"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/768px-Magnifying_glass_icon.svg.png'/> </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
