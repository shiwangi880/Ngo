import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} <strong>Shiwangi Kumari</strong> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
