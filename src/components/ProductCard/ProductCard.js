import React, { useState } from 'react';
import './ProductCard.css';
import QuantitySelector from './QuantitySelector';
import { useDispatch } from 'react-redux';
import { handleCart } from '../../redux/slices/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const decreaseQuantity = () => {
    dispatch(handleCart({type:'remove',id:product.id}))
  };

  const increaseQuantity = () => {
    dispatch(handleCart({type:'add',id:product.id}))
  };

  return (
    <div className="product-card">
      <img
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        src={isHovered ? product.frontImage : product.image}
        alt={product.name}
      />
      <div className='product-card-details'>
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        {product.quantity > 0 ?
          <QuantitySelector
            decreaseQuantity={decreaseQuantity}
            increaseQuantity={increaseQuantity}
            quantity={product.quantity}
          />
          :
          <button onClick={increaseQuantity}>Add to Cart</button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
