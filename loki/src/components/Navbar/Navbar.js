import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#" className="navbar-logo">
          Lokendra Lodhi
        </a>

        {/* Toggle Button for Mobile */}
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-hamburger"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <a href="/" className="navbar-link">Home</a>
          <a href="/about" className="navbar-link">About</a>
          <a href="/projects" className="navbar-link">Projects</a>
          <a href="/skills" className="navbar-link">Skills</a>
          <a href="/education" className="navbar-link">Education</a>
          <a href="/certificates" className="navbar-link">Certificates</a>
          <a href="/contact" className="navbar-link">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
