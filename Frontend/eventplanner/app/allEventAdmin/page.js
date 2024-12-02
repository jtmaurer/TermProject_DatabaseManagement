'use client';

import React, { useEffect, useState , useContext} from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Hero2 from './components/Hero';
import Events from '../component/filters/FilteredList';
import EventList from '../component/filters/FilteredList';
import Footer from '../component/components/Footer';
import Hdr from '../component/Hdr3';
import { UserContext } from '../UserContext';



const Home = () => {
  const router = useRouter();
  const { user, logout} = useContext(UserContext);
  useEffect(() => {
    console.log('User in AccountPage:', user); // Debugging log
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);
  

  return (
    <div>
      <Hdr />
       <Hero2 />
      <Events /> 
      {/*Events For You
      <EventList />*/}
      <div className='AllEvFoot'>
        <Footer />
      </div>
      
    </div>
  );
};

export default Home;
