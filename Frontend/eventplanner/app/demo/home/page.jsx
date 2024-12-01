'use client';

import React, { useContext, useEffect } from 'react'; // Add useContext to the import
import './page.css';
import { useRouter } from 'next/navigation';
import Hdr3 from '../demo_components/Hdr3';
import FilterAndList from '../demo_components/FilterAndList';
import { UserContext } from "../../../app/UserContext";

const Home = () => {
  const router = useRouter();
  const { user } = useContext(UserContext); // Access the UserContext

  useEffect(() => {
    if (!user) {
      router.push('/demo/login');
    }
  }, [user, router]);

  return (
    <div>
      <Hdr3 />
      <FilterAndList />
    </div>
  );
};

export default Home;
