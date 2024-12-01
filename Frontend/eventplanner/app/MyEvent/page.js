'use client';
import './page.css';
import React, { useEffect, useState, useContext } from 'react';
import Model from 'react-modal';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { useRouter } from 'next/navigation';
import Footer from '../component/components/Footer';
import Hdr from '../component/Hdr2';
import { UserContext } from '../UserContext';

const Home = () => {
  const [tickets, setTickets] = useState([]); // User tickets state
  const [visible, setVisible] = useState(false); // Modal visibility
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const { user } = useContext(UserContext); // User context for authentication
  const router = useRouter();

  // Redirect to login if not logged in
  useEffect(() => {
    if (!user) {
      console.log('Not Logged In');
      router.push('/login');
    }
  }, [user, router]);

  // Fetch tickets for the authenticated user
  const fetchTicketsByUser = async (userId) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:8080/tickets?user_id=${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      const data = await response.json();
      console.log('Fetched tickets:', data);
      setTickets(data);
      setError(null);
      console.log(tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch tickets when the component mounts
  useEffect(() => {
    if (user) {
      fetchTicketsByUser(user.id); // Ensure user ID is passed correctly
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
                tickets.length > 5 ? 'expanded' : ''
              }`}
            >
              {loading && <p>Loading tickets...</p>}
              {error && <p>Error: {error}</p>}
              {!loading && !error && (
                <UsersList
                  users={tickets} // Pass the tickets as "users" for rendering
                  onDelete={(id) => setTickets((prev) => prev.filter((ticket) => ticket.id !== id))}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
