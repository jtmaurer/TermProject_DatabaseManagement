'use client';
import './page.css';
import React, { useEffect, useContext, useState } from 'react';
import Hdr from '../component/Hdr3';
import Model from 'react-modal';
import { UserContext } from '../UserContext';
import { useRouter } from 'next/navigation';
import Footer from '../component/components/Footer';

const AccountPage = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState('bob');
  const [profilePic, setProfilePic] = useState('https://i.gyazo.com/4446d7ff66010b8a004b3a94b592e7a3.png');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { user, logout} = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log('User in AccountPage:', user); 
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const handleLogout = () => {
    logout(); // Call the logout function
    router.push('/login'); // Redirect to login page
  };

  return (
    <div className="Adminstuff">
      <Hdr />
      <div className="Adminpager">
        <div className="Adminmiddlez">
          <div className="Adminmiddle11">
            <div className="Adminbordss">
              <h1 className="Adminbords11">My Account</h1>
            </div>
          </div>

          <div className="Adminmiddle33">
            <div className="Adminprofile-section">
              <div className="Adminprofile-image">
                <img src={profilePic} alt="Profile" />
              </div>
              <div className="Adminprofile-info">
                <h2>Username: admin</h2>
                <p>Email: admin@gmail.com</p>
              </div>
            </div>

            <div className="Adminactions">
              

              <button className="Adminaction-button" onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className='aFoot'> 
        <Footer />
      </div>
      
    </div>
  );
};

export default AccountPage;
