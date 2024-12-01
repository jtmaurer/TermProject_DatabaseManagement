'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Events from '../component/filters/FilteredList';
import Footer from '../component/components/Footer';
import Hdr from '../component/Hdr2';
import Hero from './components/Hero'



const Home = () => {
  const router = useRouter();
  

  /* To test this function go to component/components/Events */

  return (
    <div>
      <Hdr />
      <Hero />
      <Events />
      <div className='OGfoot'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
