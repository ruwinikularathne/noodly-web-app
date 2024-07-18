import React from 'react';
import './index.css';
import testimonialImage from '../images/testimonial.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      comment: "The noodles here are amazing! Definitely the best I've ever had. The flavors are rich and authentic, and the texture of the noodles is perfect. I've tried several different dishes, and each one has been fantastic. The portions are generous, and the price is reasonable. I also appreciate the quick and friendly service. This place has become my go-to spot for noodles.",
      rating: 5,
      name: "John Doe"
    },
    {
      id: 2,
      comment: "Quick service and delicious food. I highly recommend this place. The menu offers a great variety of options, and everything I've tried has been delicious. The staff is always friendly and efficient, and the food is prepared quickly without compromising on quality. The atmosphere is casual and welcoming, making it a great place for a quick meal or a casual dinner with friends. Overall, a wonderful dining experience.",
      rating: 4,
      name: "Jane Smith"
    },
    {
      id: 3,
      comment: "Great variety and quality. Will be ordering again soon! I love that there are so many different noodle dishes to choose from, and each one is made with high-quality ingredients. The flavors are bold and well-balanced, and the presentation is always top-notch. The online ordering system is easy to use, and my food always arrives hot and fresh. Highly recommend for anyone looking for a tasty and convenient meal.",
      rating: 5,
      name: "Alice Johnson"
    },
  ];

  return (
    <div className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonialImage} alt="Testimonial" className="testimonial-image" />
            <div className="testimonial-stars">
              {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
            </div>
            <p className="testimonial-comment">"{testimonial.comment}"</p>
            <p className="testimonial-name">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
