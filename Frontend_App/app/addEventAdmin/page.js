"use client";
import React, { useEffect, useContext, useState } from "react";
import "./AddEvent.css";
import Hdr from "../component/Hdr3";
import Footer from "../component/components/Footer";
import { UserContext } from "../UserContext";
import { useRouter } from "next/navigation";

/**
 * Component for adding an event to the system.
 * Includes a form for event details, venue selection, and submission logic.
 *
 * @returns {JSX.Element} The rendered component.
 */

const AddEvent = () => {
  const [venues, setVenues] = useState([]);
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [price, setPrice] = useState("");
  const [venueId, setVenueId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const { user, logout } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log("User in AccountPage:", user); // Debugging log
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  /**
   * Fetches the list of venues from the backend and updates the state.
   *
   * @async
   */
  const fetchVenues = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/venues");
      if (!response.ok) {
        throw new Error("Failed to fetch venues");
      }
      const data = await response.json();
      setVenues(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVenues();
  }, []);

  /**
   * Handles the event submission form by sending data to the backend.
   *
   * @param {Event} e - The form submission event.
   * @async
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const eventData = {
      event_name: eventName,
      description,
      event_date: eventDate,
      start_time: `${startTime}:00`, // Append seconds if missing
      end_time: `${endTime}:00`, // Append seconds if missing
      price: parseFloat(price),
      venue_id: { venue_id: parseInt(venueId, 10) },
    };

    console.log("Payload:", eventData);

    try {
      const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(eventData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        throw new Error("Failed to add event");
      }

      setSuccess(true);
      setEventName("");
      setDescription("");
      setEventDate("");
      setStartTime("");
      setEndTime("");
      setPrice("");
      setVenueId("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Hdr />
      <div className="Adstuff">
        <div className="Adpager">
          <div className="Admiddlez">
            <div className="Admiddle11">
              <div className="Adbordss">
                <h2 className="Adbords11">Add a New Event</h2>
              </div>
            </div>
            <div className="Admiddle33">
              {loading && <p>Loading...</p>}
              {error && <p className="error">Error: {error}</p>}
              {success && (
                <p className="Adsuccess">Event added successfully!</p>
              )}
              <form onSubmit={handleSubmit} className="AdAddEventForm">
                <div className="Adform-group">
                  <label htmlFor="eventName">Event Name:</label>
                  <input
                    type="text"
                    id="eventName"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    required
                  />
                </div>
                <div className="Adform-group">
                  <label htmlFor="description">Description:</label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="Adform-group">
                  <label htmlFor="eventDate">Event Date:</label>
                  <input
                    type="date"
                    id="eventDate"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    required
                  />
                </div>
                <div className="Adform-group">
                  <label htmlFor="startTime">Start Time:</label>
                  <input
                    type="time"
                    id="startTime"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </div>
                <div className="Adform-group">
                  <label htmlFor="endTime">End Time:</label>
                  <input
                    type="time"
                    id="endTime"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </div>
                <div className="Adform-group">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </div>
                <div className="Adform-group">
                  <label htmlFor="venue">Venue:</label>
                  <select
                    id="venue2"
                    value={venueId}
                    onChange={(e) => setVenueId(e.target.value)}
                    required
                  >
                    <option value="">Select a Venue</option>
                    {venues.map((venue) => (
                      <option key={venue.venue_id} value={venue.venue_id}>
                        {venue.venue_name} - {venue.location}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="addEvent" disabled={loading}>
                  Add Event
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="addEFoot">
        <Footer />
      </div>
    </div>
  );
};

export default AddEvent;
