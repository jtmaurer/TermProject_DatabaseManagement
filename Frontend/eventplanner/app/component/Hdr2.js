import React from 'react';
import './Hdr.css';
import { useRouter } from 'next/navigation';


const Hdr = () => {
    const router = useRouter();
    return (
        <nav>
            
            <div className='leftHdr'> 
                New logo
            </div>
            <div className='middleHdr'>
                <div className='green'>
                    <button type='button'  onClick={() => router.push('../dashboard')}> Dashboard </button>
                </div>
                <div className='green'>
                    <button type='button' onClick={() => router.push('../Tickets')}> Tickets </button>
                </div>
                <div className='green'>
                    <button type='button' onClick={() => router.push('../about')}> About Us </button>
                </div>
                

            </div>

            <div className='rightHdr'>
                <button type='button' onClick={() => router.push('../signup')}>  Logout  </button>
                
            </div>

        </nav>
    )
}
  
  export default Hdr;