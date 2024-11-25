import React from 'react';
import './Hdr.css';
import { useRouter } from 'next/navigation';


const Hdr = () => {
    const router = useRouter();
    return (
        <nav>
            
          
            <div className='middleHdr'>
                <div className='green'>
                    <button type='button'  onClick={() => router.push('../login')}> Login </button>
                </div>
                <div className='green'>
                    <button type='button' onClick={() => router.push('../signup')}> SignUp </button>
                </div>
            
                

            </div>

        

        </nav>
    )
}
  
  export default Hdr;