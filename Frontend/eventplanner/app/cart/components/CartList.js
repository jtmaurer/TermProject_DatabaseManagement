import React from 'react';
import CartItem from './CartItem';
import './UsersList.css';

const CartList = ({ items, onDelete }) => {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className='cen'>

      <div className='cbackground'>
        <div className="cart-container">
          <div className="ccart-items">
            {items.map((item, index) => (
              <CartItem key={index} name={item.name} price={item.price} onDelete={() => onDelete(index)} />
            ))}
          </div>
        
        </div>

      </div>
      
      <div className="ccart-total">
          <h3>Total: ${total.toFixed(2)}</h3>
          <button> Checkout </button>
      </div>
    </div>
  );
};

export default CartList;
