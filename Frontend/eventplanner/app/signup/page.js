'use client';
import './page.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const router = useRouter();

  return (
    <div className="signstuff">
      


      <div className='signLeft'>
        
          <div className="go-to-log">
              <b>Welcome back</b>
              <button onClick={() => router.push('/login')}>Login</button>
          </div>
        
      </div>


      <div className='signRight'>
      
        <div className='signHolder'> 
            <div className='signTitle'>
              <b className='signbolded'> Sign Up to Event Hive</b>
            </div>
            
            <label className="input-group">
              <p className="input-label">Your Name:</p>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
              />
            </label>
            <label className="input-group">
              <p className="input-label">Email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </label>
            <label className="input-group">
              <p className="input-label">Password:</p>
              <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              
              />
            </label>
            <label className="input-group">
              <p className="input-label">Confirm Password:</p>
              <input
                type='text'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                
              />
            </label>
          <div className="signup-button-holder">
            <button onClick={() => router.push('/login')} className="signup-button">Sign Up</button>
          </div>
        </div>
      </div>




    </div>
  );
};

export default Signup;
