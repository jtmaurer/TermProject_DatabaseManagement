import React from 'react';
import './CartItem.css';

const CartItem = ({ name, price, onDelete }) => {
  return (
    <div className='holderz'>
      <div className="cart-item">
        <span>{name}</span>
        <div className='price'>
          <span>${price.toFixed(2)}</span>
          <button onClick={onDelete} className="X">X</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
