'use client';
import React, { useEffect, useContext } from 'react';
import './Hdr.css';
import { useRouter } from 'next/navigation';
import { UserContext } from '../UserContext';


const Hdr = () => {
    const router = useRouter();
    const { user, logout} = useContext(UserContext);

    useEffect(() => {
        console.log('User in AccountPage:', user); 
        if (!user) {
          router.push('/login');
        }
      }, [user, router]);

      const handleLogout = () => {
        logout(); 
        router.push('/login'); 
      };
    return (
        <nav>
            <div className='navba'>
                <div className='logoeh'>
                    <b>
                        Event
                    </b>
                    <b className='hive'>
                        Hive
                    </b>
                </div>

                <div className='middleBut'>
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../admin')}> Dashboard </button>
                    </div>
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../addVenue')}> Add Venues </button>
                    </div>
                    <div className='green2'>
                        <button type='button' onClick={() => router.push('../addEventAdmin')}> Add Events </button>
                    </div>
                    
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../allEventAdmin')}> All Events </button>
                    </div>
                    
                    
                
                    

                </div>
            
                <div className='middleHdr'>
                    <div className='green'>
                        <button type='button'  onClick={handleLogout}> LogOut </button>
                    </div>
                    
                
                    

                </div>
            </div>
            

        

        </nav>
    )
}
  
  export default Hdr;