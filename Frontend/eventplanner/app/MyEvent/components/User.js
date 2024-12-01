'use client';

import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = ({ id, event_id, Eventname, order_id, onDelete, seat_number }) => {
  const router = useRouter();

 

  return (
    <div className="list11">

      
      <div className='eventTitle'> 
        <h3 className="old11">{Eventname}</h3>
      </div>
      
      <div className='eventTitle2'> 
        <h3 className="old11">Order id is : {order_id}</h3>
       
        
      </div>
      <h3 className="old111">Seat Number: {seat_number}</h3>
      
     

     
     
    </div>
  );
};

export default User;
