import React from 'react';
import './index.css';
import foodImage from '../images/noodles1.png';

const Home = () => {
  return (
    <div className="banner-background">
      <div className="home-container">
        <div className="home-content">
          <h1>Welcome to Noodly</h1>
          <p>Your favorite yummy noodles takeaway restaurant!</p>
          <p>Experience the joy of Delight in Every Bite!</p>
          <p>Order quick, Eat fresh</p>
          <button className="order-now-btn" onClick={() => window.location.href = '#menu'}>
            Order Now
          </button>
        </div>
        <div className="home-image">
          <img src={foodImage} alt="Delicious noodles" />
        </div>
      </div>
    </div>
  );
};

export default Home;
