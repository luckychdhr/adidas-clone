import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css'
import { useSelector } from 'react-redux';

const ProductList = () => {

  const { products } = useSelector((cartSlice) => cartSlice.cart)
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))} </div>
  );
};

export default ProductList;
