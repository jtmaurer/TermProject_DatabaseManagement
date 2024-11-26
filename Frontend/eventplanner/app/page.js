'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Hero from './component/components/Hero';
import Events from './component/components/Events';
import Footer from './component/components/Footer';
import Hdr from './component/Hdr';



const Home = () => {
  const router = useRouter();
  

  /* To test this function go to component/components/Events */

  return (
    <div>
      <Hdr />
      <Hero />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
