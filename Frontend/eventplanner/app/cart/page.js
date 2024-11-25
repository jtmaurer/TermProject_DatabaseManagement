'use client'; 
import React, { useState } from 'react';
import AddItem from './components/AddItem';
import CartList from './components/CartList';
import Hdr from '../component/Hdr2';
import './page.css';

const Page = () => {
  const [cart, setCart] = useState([]);
  const [visible, setVisible] = useState(false); 

  const handleAddItem = (newItem) => {
    setCart((prevCart) => [...prevCart, newItem]);
    setVisible(false); 
  };

  const handleDeleteItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };
/*  <button onClick={() => setVisible(!visible)}>
            {visible ? 'Hide Add Item' : 'Show Add Item'}
          </button>

  */
  return (
    <div className="cstuff">
      <Hdr />
     
      <div className='cpager'>
          <div className='cmiddlez'> 
            <div className='cmiddle11'>
              <h1>Shopping Cart</h1>
              
              
            </div>

            <div className='cmiddle33'>
              
              {visible && <AddItem onAddItem={handleAddItem} />} {}
              <CartList items={cart} onDelete={handleDeleteItem}/>
            </div>
        
          </div>
      </div>
      
    </div>
  );
};

export default Page;
