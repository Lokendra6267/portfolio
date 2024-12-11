import React from 'react';
import './About.css';
import img1 from './assets/img1.jpg'; // Image for cards (reuse or replace with specific images for each skill)
import java from './assets/java.png';
import ui from './assets/ui.png';
import web from './assets/web.png';


const About = () => {
  return (
    <section className="about-section" id="about">
      {/* About Me Heading */}
      <h2 className="section-title">About Me</h2>

      {/* About Container */}
      <div className="about-container">
        {/* About Content */}
        <div className="about-content">
          <p className="about-text">
            Hello! I’m <span className="highlight">Lokendra Lodhi</span>, a passionate and innovative 
            <span className="highlight"> Software Developer</span>. With a knack for creating seamless digital experiences, I thrive in 
            designing and developing applications that make a difference. I believe in combining creativity with technology to solve real-world problems.
          </p>
          <p className="about-text">
            My journey began with a fascination for coding, and over the years, I've honed my skills in 
            <span className="highlight"> C/C++, Java, Python, JavaScript, JDBC, Hibernate, Servlet/JSP, Spring MVC, MERN-Stack</span>. Beyond work, I enjoy Movies, Songs, which keep me inspired and energized.
          </p>
        </div>

        {/* Profile Image */}
        <div className="profile-image">
          <img src={img1} alt="Your Name" />
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills">
        <h3>My Experties</h3>
        <div className="skills-cards">
          {/* Card 1 */}
          <div className="skill-card">
            <img src={java} alt="Java Full Stack" className="card-image" />
            <h4 className="card-title">Java Full Stack Development</h4>
          </div>
          {/* Card 2 */}
          <div className="skill-card">
            <img src={web} alt="Full Stack Web" className="card-image" />
            <h4 className="card-title">Full Stack Web Development</h4>
          </div>
          {/* Card 3 */}
          <div className="skill-card">
            <img src={ui} alt="UI/UX Design" className="card-image" />
            <h4 className="card-title">UI/UX Design</h4>
          </div>
        </div>
      </div>

      {/* Achievements or Download Resume */}
      <div className="actions">
        <a href="https://drive.google.com/file/d/1tqUwIY5RyKSCm-EvQk355KyUlQhxoCV2/view?usp=sharing" className="action-btn primary" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
        <a href="/contact" className="action-btn secondary">Contact Me</a>
      </div>
    </section>
  );
};

export default About;
