'use client';

import React, { useEffect, useState, useContext  } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Events from '../component/filters/FilteredList';
import Footer from '../component/components/Footer';
import Hdr from '../component/Hdr2';
import Hero from './components/Hero'
import { UserContext } from '../UserContext';



const Home = () => {
  const { user, logout} = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log('User in AccountPage:', user); 
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  
  return (
    <div>
      <Hdr />
      
     
      
      <Events />
      <div className='homefoot'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
