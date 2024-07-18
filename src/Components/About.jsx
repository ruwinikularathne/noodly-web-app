import React from 'react';
import noodles2 from '../images/noodles2.png'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>About Us</h2>
        <p>At Noodly, we specialize in delicious and convenient noodle dishes that are perfect for takeaway. Our recipes are crafted with the freshest ingredients and a passion for flavor.</p>
        <img src={noodles2} alt="Delicious noodles" className="about-image" />
      </div>
    </section>
  );
};

export default About;
