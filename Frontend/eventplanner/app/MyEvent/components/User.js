'use client';

import React from 'react';
import './User.css';
import { useRouter } from 'next/navigation';

const User = ({ id, event_id, Eventname, order_id, seat_number, payment_method, price }) => {
  return (
      <div className="list11">
          <div className="eventTitle">
              <h3 className="old11">{Eventname}</h3>
          </div>

          <div className="eventTitle2">
              <h3 className="old11">Order ID: {order_id}</h3>
              <h3 className="old11">Seat Number: {seat_number}</h3>
              <h3 className="old11">Payment Method: {payment_method}</h3>
              <h3 className="old11">Price: ${price?.toFixed(2)}</h3>
          </div>
      </div>
  );
};



export default User;
