import React from 'react';
import './Drawer.css'; 

const Drawer = ({ isOpen, onClose }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>
        &times; 
      </button>
      <nav className="drawer-nav">
        <ul>
          <li><a href="/men">MEN</a></li>
          <li><a href="/women">WOMEN</a></li>
          <li><a href="/kids">KIDS</a></li>
          <li><a href="/sports">SPORTS</a></li>
          <li><a href="/lifestyle">LIFESTYLE</a></li>
          <li><a href="/outlet">OUTLET</a></li>
          <li><a href="/help">HELP</a></li>
          <li><a href="/orders">ORDERS AND RETURNS</a></li>
          <li><a href="/signup">SIGN UP</a></li>
          <li><a href="/login">LOG IN</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
