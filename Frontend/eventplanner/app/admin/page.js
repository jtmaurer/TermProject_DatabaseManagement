'use client';
import './page.css';
import React, { useState } from 'react';
import Hdr from '../component/Hdr3';
import Model from 'react-modal';
import Footer from '../component/components/Footer';

const AccountPage = () => {
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState('bob');
  const [profilePic, setProfilePic] = useState('https://i.gyazo.com/4446d7ff66010b8a004b3a94b592e7a3.png');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveChanges = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Here you can handle saving changes (currently frontend-only)
    alert('Profile updated successfully!');
    setVisible(false);
  };

  return (
    <div className="stuff">
      <Hdr />
      <div className="pager">
        <div className="middlez">
          <div className="middle11">
            <div className="bordss">
              <h1 className="bords11">My Account</h1>
            </div>
          </div>

          <div className="middle33">
            <div className="profile-section">
              <div className="profile-image">
                <img src={profilePic} alt="Profile" />
              </div>
              <div className="profile-info">
                <h2>Username: {username}</h2>
                <p>Email: asdf@example.com</p>
              </div>
            </div>

            <div className="actions">
              

              <button className="action-button">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
