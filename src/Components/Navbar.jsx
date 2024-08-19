import React, { useState, useEffect } from 'react';
import './index.css';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const navbarLinks = [
    { id: 1, label: 'Home', href: '#home' },
    { id: 2, label: 'About', href: '#about' },
    { id: 3, label: 'Menu', href: '#menu' },
    { id: 4, label: 'Testimonials', href: '#testimonials' },
    { id: 5, label: 'Contact', href: '#contact' },
  ];

  const handleScroll = () => {
    const sections = navbarLinks.map(link => document.querySelector(link.href));
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section, index) => {
      if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveTab(navbarLinks[index].label);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Noodly</div>
      <div className="navbar-links">
        {navbarLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            className={activeTab === link.label ? 'active' : ''}
            onClick={() => setActiveTab(link.label)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
