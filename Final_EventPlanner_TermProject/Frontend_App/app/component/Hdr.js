import React from 'react';
import './Hdr.css';
import { useRouter } from 'next/navigation';


const Hdr = () => {
    const router = useRouter();
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
            
                <div className='middleHdr'>
                    <div className='green'>
                        <button type='button'  onClick={() => router.push('../login')}> Login </button>
                    </div>
                    <div className='green1'>
                        <button type='button' onClick={() => router.push('../signup')}> SignUp </button>
                    </div>
                
                    

                </div>
            </div>
            

        

        </nav>
    )
}
  
  export default Hdr;