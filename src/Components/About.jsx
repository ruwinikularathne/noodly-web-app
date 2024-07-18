import React from 'react';
import './index.css';
import aboutBackground from '../images/about-background.png';
import noodlesImage from '../images/noodles2.png';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-background"></div>
      <div className="about-container">
        <div className="about-image">
          <img src={noodlesImage} alt="Noodles" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>At Noodly, we specialize in delicious and convenient noodle dishes that are perfect for takeaway. Our recipes are crafted with the freshest ingredients and a passion for flavor.</p>
          <p>Our chefs take pride in preparing meals that are not only quick and tasty but also balanced and nutritious.</p>
          <div className="about-buttons">
            <button className="about-btn" onClick={() => window.location.href = '#contact'}>Contact Us</button>
            <button className="about-btn" onClick={() => window.location.href = '#order'}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
