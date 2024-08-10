import React from 'react';
import './index.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Sign Up</p>
          <p>Phone: 011 45 67 890</p>
          <p>contact@noodly.com</p>
        </div>
        <div className="footer-column">
          <h3>Referral Terms</h3>
          <p>Support</p>
          <p>FAQs</p>
          <p>Contact Support</p>
        </div>
        <div className="footer-column">
          <h3>Help Center</h3>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <div className="footer-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0801370558074!2d144.96315771531587!3d-37.81410797975139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727b8f116db0b7!2sFederation+Square!5e0!3m2!1sen!2sau!4v1551954618214"
            width="250"
            height="250"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
      <div className="footer-bottom">
        <p>@ 2024 Noodly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
