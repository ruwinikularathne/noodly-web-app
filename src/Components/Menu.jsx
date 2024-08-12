import React from 'react';
import './index.css';
import noodlesImage from '../images/noodles2.png';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Spicy Sichuan Noodles', priceRegular: '300 LKR', priceLarge: '500 LKR' },
    { id: 2, name: 'Chicken Chow Mein', priceRegular: '320 LKR', priceLarge: '520 LKR' },
    { id: 3, name: 'Egg Noodles', priceRegular: '350 LKR', priceLarge: '550 LKR' },
    { id: 4, name: 'Vegetable Hakka Noodles', priceRegular: '300 LKR', priceLarge: '500 LKR' },
    { id: 5, name: 'Shrimp Pad Thai', priceRegular: '320 LKR', priceLarge: '520 LKR' },
    { id: 6, name: 'Garlic Noodles', priceRegular: '350 LKR', priceLarge: '550 LKR' },
    { id: 7, name: 'Sesame Noodles', priceRegular: '300 LKR', priceLarge: '500 LKR' },
    { id: 8, name: 'Peanut Butter Noodles', priceRegular: '320 LKR', priceLarge: '520 LKR' },
    { id: 9, name: 'Thai Drunken Noodles', priceRegular: '350 LKR', priceLarge: '550 LKR' },
    { id: 10, name: 'Singapore Noodles', priceRegular: '300 LKR', priceLarge: '500 LKR' },
    { id: 11, name: 'Dan Dan Noodles', priceRegular: '320 LKR', priceLarge: '520 LKR' },
    { id: 12, name: 'Japanese Udon', priceRegular: '350 LKR', priceLarge: '550 LKR' },
    { id: 13, name: 'Korean Japchae', priceRegular: '300 LKR', priceLarge: '500 LKR' },
    { id: 14, name: 'Korean Ramen Noodles', priceRegular: '320 LKR', priceLarge: '520 LKR' },
    { id: 15, name: 'Cheese Chicken Noodles', priceRegular: '350 LKR', priceLarge: '550 LKR' },
  ];

  return (
    <div className="menu-section">
      <h2>Menu</h2>
      <div className="menu-container">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <img src={noodlesImage} alt={item.name} className="menu-image" />
            <h3>{item.name}</h3>
            <p>R: {item.priceRegular} | L: {item.priceLarge}</p>
            <button className="order-btn">Order</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
