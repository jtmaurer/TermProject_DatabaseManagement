import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="cta">
        <h2>Make your own Event</h2>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>Create Events</button>
      </div>
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
