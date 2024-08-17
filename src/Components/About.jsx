import React from 'react';
import './index.css';
import noodlesImage from '../images/noodles5.png';

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
          <p>At Noodly, we specialize in delicious and convenient noodle dishes that are perfect for takeaway...</p>
          <p>Our chefs take pride in preparing meals that are not only quick and tasty but also balanced and nutritious.</p>
          <p>You can order your noodles and take them away or we are here to deliver your faourite noodle dishes to your door bell.</p>
          <div className="about-buttons">
            <button className="about-btn" onClick={() => window.location.hash = 'contact'}>Contact Us</button>
            <button className="about-btn" onClick={() => window.location.hash = 'menu'}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
