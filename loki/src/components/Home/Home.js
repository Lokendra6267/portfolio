// Home.js
import React from 'react';
import './Home.css';
import About from '../about/About';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Certificates from '../Certificates/Certificates';
import Contact from '../Contact/Contact';
import Achievements from '../Achievements/Achievements';
import myImage from './assets/my-image.jpg';  // Make sure you have an image path

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <section className="home-section">
        <div className="background-animation"></div>
        <div className="content">
          <div className="text-container">
            <h1 className="greeting">Hi, I'm <span className="name-highlight">Lokendra Lodhi</span></h1>
            <p className="profession">A Passionate <span className="profession-highlight">Software Developer</span></p>
            <p className="about">
              I specialize in crafting seamless user experiences and building high-performance web applications. 
              Let's create something amazing together!
            </p>
            <div className="cta-buttons">
              <a href="/projects" className="cta-btn primary">View My Work</a>
              <a href="/contact" className="cta-btn secondary">Get In Touch</a>
            </div>
          </div>
          <div className="image-container">
            <img src={myImage} alt="Lokendra Lodhi" className="profile-image" />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
    </div>
  );
};

export default Home;
