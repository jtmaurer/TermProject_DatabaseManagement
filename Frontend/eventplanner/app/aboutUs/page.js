'use client';
import './page.css';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Hdr from '../component/Hdr';

const Home2 = () => {
  const [displayUsername, setDisplayUsername] = useState('First Last Name');
  const [displayEmail, setDisplayEmail] = useState('asdf@email.com');
  const [displayImage, setDisplayImage] = useState('https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png');
  const router = useRouter();

  
  
  return (
    <div className='aboutstuff'>
      <div>
        <Hdr />
      </div>
      <div className='aboutpager'>
        

        <div className='aboutmiddlez'>
          <div className='aboutmiddle11'>
            <div className='aboutbordss'>
              <h1 className='aboutbords11'> About Us </h1>
            </div>
          </div>

          <div className='aboutmiddle33'>
          <div className='aboutDescription2'>
            
            <div className='metext2'>
              <p>Welcome to Event Planner, where your vision becomes our mission! We are passionate about creating unforgettable experiences, whether it's an elegant wedding, a corporate gathering, a milestone celebration, or a fun-filled party. With a keen eye for detail, creative flair, and a commitment to excellence, we handle every aspect of your event planning journey, from concept to execution. Our dedicated team works closely with you to bring your dreams to life, ensuring your event is stress-free, seamless, and tailored to your unique style and needs. Let us make your special moments extraordinary!  </p>

            </div>

          </div>
        

        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
