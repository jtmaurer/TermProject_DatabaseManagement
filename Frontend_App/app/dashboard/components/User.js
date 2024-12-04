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
const User = ({
  id,
  Eventname,
  description,
  date,
  onDelete,
  startTime,
  endTime,
}) => {
  const router = useRouter();

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "No date provided";

  return (
    <div className="list11">
      <h1 onClick={() => router.push(`/pages/${id}`)} className="old1">
        {Eventname}
      </h1>
      <h3 className="old11">{description}</h3>
      <h3 className="old11">{formattedDate}</h3>
      <h3 className="old11">{startTime}</h3>
      <h3 className="old11">{endTime}</h3>
      <hr className="bor1" />
      <button className="exitX" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default User;
