import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useSelector } from 'react-redux';
import Drawer from './Drawer';

function Header() {
  const { cartCount } = useSelector((cartSlice) => cartSlice.cart);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="drawer-toggle" onClick={toggleDrawer}>
          <i className="fa fa-bars" aria-hidden="true"></i>
        </button>

        <Link to="/" className="logo-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg"
            alt="Adidas Logo"
            className="logo-img"
          />
        </Link>

        <nav className="nav">
          <ul className="nav-menu">
            <li><Link to="/men">MEN</Link></li>
            <li><Link to="/women">WOMEN</Link></li>
            <li><Link to="/kids">KIDS</Link></li>
            <li><Link to="/sports">SPORTS</Link></li>
            <li><Link to="/lifestyle">LIFESTYLE</Link></li>
            <li><Link to="/outlet">OUTLET</Link></li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
        <div className="icons">
          <i className="fa fa-user" aria-hidden="true"></i>
          <i className="fa fa-heart" aria-hidden="true"></i>
          <div className="cart-icon">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </div>
        </div>
      </div>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
    </header>
  );
}

export default Header;
