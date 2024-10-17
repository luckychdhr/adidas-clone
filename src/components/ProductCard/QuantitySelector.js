import React, { useState } from 'react';
import './QuantitySelector.css';

const QuantitySelector = ({ increaseQuantity,decreaseQuantity,quantity }) => {

  return (
    <div className="quantity-selector">
      <button className="quantity-button" onClick={decreaseQuantity}>-</button>
      <span className="quantity-display">{quantity}</span>
      <button className="quantity-button" onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
