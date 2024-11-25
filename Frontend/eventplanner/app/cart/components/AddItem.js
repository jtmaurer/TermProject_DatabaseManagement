import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim() === '' || itemPrice.trim() === '' || isNaN(itemPrice)) {
      return; 
    }

    const newItem = { name: itemName, price: parseFloat(itemPrice) };
    onAddItem(newItem);

    
    setItemName('');
    setItemPrice('');
  };

  return (
    <Card className="input">
      <form onSubmit={handleSubmit}>
        <label>Item Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <label>Item Price:</label>
        <input
          type="text"
          value={itemPrice}
          onChange={(e) => setItemPrice(e.target.value)}
        />
        <div className="buttonHolder">
          <Button className="subz" type="submit">Add Item</Button>
        </div>
      </form>
    </Card>
  );
};

export default AddItem;
