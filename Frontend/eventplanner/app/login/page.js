'use client';
import './page.css';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const loginup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const router = useRouter();

  return (
    <div className="loginstuff">
      


      <div className='loginRight'>
      
        <div className='loginHolder'> 
            <div className='loginTitle'>
              <b className='loginbolded'> Sign In to Event Hive</b>
            </div>
            
  
            <label className="input-group">
              <p className="input-label">Your Email:</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </label>
            <label className="input-group">
              <div className='loginPass'>
                <p className="input-label"> Your Password:</p>
                <div> Forgot your password? </div>
              </div>
              
              <input
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              
              />
            </label>
            
          <div className="loginup-button-holder">
            <button onClick={() => router.push('/dashboard')} className="loginup-button">Login In</button>
          </div>
        </div>
      </div>

      <div className='loginLeft'>
        
          <div className="go-to-log">
              <b>Welcome back</b>
              <button onClick={() => router.push('/signup')}>Sign Up</button>
          </div>
        
      </div>


    </div>
  );
};

export default loginup;
