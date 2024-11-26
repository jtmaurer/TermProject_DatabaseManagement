// FilterAndList.jsx
import React, { useState } from "react";
import Filter from "./ListFilter"; // Ensure the path is correct
import EventList from "./EventList";

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
      <h1>Events For You</h1>
      <Filter onFilterChange={handleFilterChange} />
      <EventList filters={filters} />
    </div>
  );
};

export default FilterAndList;
