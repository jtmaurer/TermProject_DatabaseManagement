
'use client';
import './page.css';
import React, { useEffect, useState } from 'react';
import Model from 'react-modal';
import AddUser from '../component/AddUser';
import { useRouter } from 'next/navigation';
import Footer from '../component/components/Footer';
import Hdr from '../component/Hdr2';

const Add = () => {

    const handleAddEvent = (newEvent) => {
        setEvent((prevEvent) => [...prevEvent, newEvent]);
        
      };
    
    
      


    return (
        <div>
            <Hdr />
            <AddUser onAddUser={handleAddEvent} />
            <Footer />
        </div>
        


    );

};

export default Add;