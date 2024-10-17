import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ProductList from '../components/ProductList/ProductList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main className='homepage'>
        <h1>Welcome to Adidas Outlet</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
