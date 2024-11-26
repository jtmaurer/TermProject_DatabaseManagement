import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <img
        className="hero-image"
        src="https://varioproductions.com/wp-content/uploads/2019/11/people-sitting-on-gang-chairs-2774556.jpg"
        alt="Event Banner"
      />
      <div className="search-bar">
        <div className='heroholder'>
            <div className='selecter'>
              <label> Looking For</label>
              <select>
                  <option>Choose event type</option>
              </select>
            </div>
            
            <div className='selecter'>
              <label> Location</label>
              <select>
                <option>Choose location</option>
              </select>
            </div>

            <div className='selecter'>
              <label> When </label>
              <select>
                  <option>Choose date & time</option>
              </select>
            </div>
            <button><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/768px-Magnifying_glass_icon.svg.png'/> </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
