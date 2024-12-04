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
  startTime,
  endTime,
  price,
  venue,
  online,
  image,
  onDelete,
}) => {
  const router = useRouter();
  const formatTime = (time) => {
    if (!time) return "";
    const [hours, minutes, seconds] = time.split(":");
    const date = new Date();
    date.setHours(parseInt(hours, 10));
    date.setMinutes(parseInt(minutes, 10));
    date.setSeconds(parseInt(seconds, 10));

    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  /* <div className="eventDetails">
        <p className="old11s">Venue: {venue}</p>
      </div>
      */

  return (
    <div className="OGlist11" onClick={() => router.push("../../login")}>
      <div className="OGimgcontainer">
        {image && (
          <img
            className="OGEvent-image"
            src={image}
            alt={Eventname || "Event Image"}
          />
        )}

        <div className="OGprice">
          <p>${price}</p>
        </div>
      </div>

      <div className="OGeventTitle">
        <h3 className="OGold11">{Eventname}</h3>
      </div>

      <div className="OGeventTitle2">
        <h3 className="OGold11">{date}:</h3>

        <h3 className="OGold11">{formatTime(startTime)}</h3>
        <h3 className="OGold11"> - </h3>
        <h3 className="OGold11">{formatTime(endTime)}</h3>
      </div>

      <div className="OGeventDetails">
        <p className="OGold11s">
          {online
            ? "Online Event - Attend Anywhere"
            : `In-Person Event - Venue: ${venue} `}
        </p>
      </div>

      {/* <hr className="bor1" />
      <button className="exitX" onClick={() => onDelete(id)}>
        Delete
      </button> */}
    </div>
  );
};

export default User;
