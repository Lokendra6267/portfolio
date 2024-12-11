import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-brand">
          <h2 className="brand-name">Lokendra Lodhi</h2>
          <p className="brand-tagline">Building the future, one line of code at a time.</p>
        </div>

        {/* Links Section */}
        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li><a href="/about">About Me</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/certificates">Certificates</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-socials">
          <h3 className="footer-heading">Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/lokendra6267" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/lokendra-lodhi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/lokend_lodhi/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Lokendra Lodhi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
