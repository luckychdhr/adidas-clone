import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Adidas Outlet Clone. All rights reserved.</p>
      <nav>
        <ul>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Use</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
