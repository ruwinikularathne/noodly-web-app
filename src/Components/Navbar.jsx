import React from 'react';
import './index.css'; // Adjusted path for CSS

const Navbar = () => {
  const navbarLinks = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Menu', href: '#menu' },
    { id: 4, label: 'Testimonials', href: '#testimonials' },
    { id: 5, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">Noodly</div>
      <div className="navbar-links">
        {navbarLinks.map(link => (
          <a key={link.id} href={link.href}>{link.label}</a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
