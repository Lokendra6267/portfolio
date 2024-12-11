import React, { useState } from 'react';
import './Contact.css';
import contact from './assets/contact.png';

const Contact = () => {
  // State to store form data and response messages
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Sending the form data as JSON
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form fields after successful submission
      } else {
        setStatusMessage(`Failed to send message: ${result.error || result.message}`);
      }
    } catch (error) {
      setStatusMessage('An error occurred. Please try again later.');
      console.error(error);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get in Touch</h2>

      <div className="contact-container">
        {/* Left Section: Contact Form */}
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter your email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                placeholder="Enter your message"
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>

          {/* Display the status message (Success/Failure) */}
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>

        {/* Right Section: Image and Cards */}
        <div className="contact-info-container">
          <img src={contact} alt="Contact Illustration" className="contact-image" />

          <div className="info-cards">
            {/* Phone Number Card */}
            <div className="info-card">
              <i className="fas fa-phone-alt"></i>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+91 917-441-2773</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <div className="info-content">
                <h4>Email</h4>
                <p>lokendralodhi6267@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
