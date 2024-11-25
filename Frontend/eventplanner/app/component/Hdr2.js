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

                <div className='middleBut'>
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../dashboard')}> Dashboard </button>
                    </div>
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../MyEvent')}> My Events </button>
                    </div>
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../AddEvent')}> Create An Event </button>
                    </div>
                    <div className='green2'>
                        <button type='button'  onClick={() => router.push('../allEvents')}> All Events </button>
                    </div>
                    
                    
                
                    

                </div>
            
                <div className='middleHdr'>
                    <div className='green'>
                        <button type='button'  onClick={() => router.push('../')}> LogOut </button>
                    </div>
                    
                
                    

                </div>
            </div>
            

        

        </nav>
    )
}
  
  export default Hdr;