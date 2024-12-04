"use client";

import React from "react";
import "./User.css";
import { useRouter } from "next/navigation";

/**
 * Component for displaying event details and managing interactions like navigation.
 *
 * @param {Object} props - Component props.
 * @param {number} props.id - The event ID.
 * @param {string} props.Eventname - The event name.
 * @param {string} props.description - The event description.
 * @param {string} props.date - The event date.
 * @param {string} props.startTime - The start time of the event.
 * @param {string} props.endTime - The end time of the event.
 * @param {number} props.price - The price of the event.
 * @param {string} props.venue - The venue of the event.
 * @param {boolean} props.online - Whether the event is online.
 * @param {string} props.image - The image URL for the event.
 * @returns {JSX.Element} The rendered component.
 */
const User = ({ id, Venuename, Capacity, Location, onDelete }) => {
  const router = useRouter();

  return (
    <div className="eventlist11">
      <h1 className="eventold1">{Venuename}</h1>
      <h3 className="eventold11">{Location}</h3>
      <h3 className="eventold11">{Capacity}</h3>
      <hr className="eventbor1" />
      <button className="eventexitX" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
