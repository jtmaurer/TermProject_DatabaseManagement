'use client';

import React, { useEffect, useState } from 'react';
import './page.css';
import { useRouter } from 'next/navigation';
import Hdr3 from '../demo_components/Hdr3';
import FilterAndList from '../demo_components/FilterAndList';



const Home = () => {
  const router = useRouter();
  
  return (
    <div>
      <Hdr3 />
      <FilterAndList />
    </div>
  );
};

export default Home;
