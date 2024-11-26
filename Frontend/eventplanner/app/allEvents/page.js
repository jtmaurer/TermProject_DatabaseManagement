'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Hero2 from './components/Hero';
import Events from './components/Events';
import EventList from '../component/event_specific_components/EventList';
import Footer from '../component/components/Footer';
import Hdr from '../component/Hdr2';



const Home = () => {
  const router = useRouter();
  

  return (
    <div>
      <Hdr />
      {/* <Hero2 /> */}
      {/* <Events /> */}
      Events For You
      <EventList />
      <Footer />
    </div>
  );
};

export default Home;
