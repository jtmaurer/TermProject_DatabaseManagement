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
  event_id,
  Eventname,
  order_id,
  seat_number,
  payment_method,
  price,
}) => {
  return (
    <div className="list11">
      <div className="eventTitle">
        <h3 className="old11">{Eventname}</h3>
      </div>

      <div className="eventTitle2">
        <h3 className="old11">Order ID: {order_id}</h3>
        <h3 className="old11">Seat Number: {seat_number}</h3>
        <h3 className="old11">Payment Method: {payment_method}</h3>
        <h3 className="old11">Price: ${price?.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default User;
