"use client";
import "./page.css";
import React, { useEffect, useState, useContext } from "react";
import UsersList from "./components/UsersList";
import Footer from "../component/components/Footer";
import Hdr from "../component/Hdr2";
import { UserContext } from "../UserContext";
import { useRouter } from "next/navigation";

const Home = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      console.log("Not Logged In");
      router.push("/login");
    }
  }, [user, router]);

  const fetchTicketsByUser = async (userId) => {
    try {
      setLoading(true);
      console.log("Fetching tickets for user:", userId); // Log user ID
      const response = await fetch(
        `http://localhost:8080/tickets?user_id=${userId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tickets");
      }
      const data = await response.json();
      console.log("Fetched tickets:", data); // Log fetched data
      setTickets(data);
      console.log(tickets);
      setError(null);
    } catch (error) {
      console.error("Error fetching tickets:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchTicketsByUser(user.id);
    }
  }, [user]);

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  return (
    <div className="Mystuff">
      <Hdr />
      <div className="Mypager">
        <div className="Mymiddlez">
          <div className="Mymiddle11">
            <div className="Mybordss">
              <h1 className="Mybords11">My Tickets</h1>
            </div>
          </div>

          <div className="Mymiddle33">
            <div
              className={`Myusers-list-container ${
                tickets.length > 5 ? "expanded" : ""
              }`}
            >
              {loading && <p>Loading tickets...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && <UsersList tickets={tickets} />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
