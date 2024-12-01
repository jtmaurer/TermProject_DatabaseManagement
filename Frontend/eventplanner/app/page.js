'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Hero from './component/components/Hero';
import Events from './component/filters/FilteredList2';
import Footer from './component/components/Footer';
import Hdr from './component/Hdr';



const Home = () => {
  const router = useRouter();
  

  /* To test this function go to component/components/Events */

  return (
    <div>
      <Hdr />

      <Events />
      <div className='OGfoot'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
