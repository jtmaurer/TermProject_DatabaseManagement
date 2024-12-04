// FilterAndList.jsx
import React, { useState } from "react";
import Hero from "../components/Hero"; // Ensure the path is correct
import EventList from "../components/Events";

const FilterAndList = () => {
  const [filters, setFilters] = useState({
    location: "",
    price: null, // Initialize as null to match Filter's reset
    event_date: "",
    user_ordered_events: false
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="events-page">
     
      <Hero onFilterChange={handleFilterChange} />
      <EventList filters={filters} />
    </div>
  );
};

export default FilterAndList;
