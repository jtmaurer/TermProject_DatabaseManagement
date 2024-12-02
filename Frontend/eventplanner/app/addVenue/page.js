'use client';
import React, { useEffect, useContext, useState } from 'react';
import './AddVenue.css';
import Hdr from '../component/Hdr3';
import { UserContext } from '../UserContext';
import Footer from '../component/components/Footer';
import { useRouter } from 'next/navigation';



const AddVenue = () => {
  const [venueName, setVenueName] = useState('');
  const [location, setLocation] = useState('');
  const [capacity, setCapacity] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { user, logout} = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log('User in AccountPage:', user); // Debugging log
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const venueData = {
      venue_name: venueName,
      location,
      capacity: parseInt(capacity, 10),
      image,
    };

    try {
      const response = await fetch('http://localhost:8080/venues', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(venueData),
      });

      if (!response.ok) {
        throw new Error('Failed to add venue');
      }

      setSuccess(true);
      setVenueName('');
      setLocation('');
      setCapacity('');
      setImage('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div >
        <Hdr />
        <div className='Vstuff'>

            <div className="Vpager">
                <div className='Vmiddlez'>
                    <div className='Vmiddle11'>
                        <div className='Vbordss'>
                            <h2 className="Vbords11" >Add a New Venue</h2>
                        </div>
                        
                    </div>
                    
                
                <div className="Vmiddle33">
                    {loading && <p>Loading...</p>}
                    {error && <p className="error">Error: {error}</p>}
                    {success && <p className="success">Venue added successfully!</p>}
                    <form onSubmit={handleSubmit} className="VAddVenueForm">
                        <div className="Vform-group">
                        <label htmlFor="venueName">Venue Name:</label>
                        <input
                            type="text"
                            id="venueName"
                            value={venueName}
                            onChange={(e) => setVenueName(e.target.value)}
                            required
                        />
                        </div>
                        <div className="Vform-group">
                        <label htmlFor="location">Location:</label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            required
                        />
                        </div>
                        <div className="Vform-group">
                        <label htmlFor="capacity">Capacity:</label>
                        <input
                            type="number"
                            id="capacity"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            required
                        />
                        </div>
                        <div className="Vform-group">
                        <label htmlFor="image">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                        </div>
                        <button type="submit" className='addingV' disabled={loading}>
                        Add Venue
                        </button>
                    </form>
                    
                </div>

                </div>
            
            </div>


        </div>
        <div className='vFoot'>
          <Footer />
        </div>
        
    </div>
    
   
  );
};

export default AddVenue;
