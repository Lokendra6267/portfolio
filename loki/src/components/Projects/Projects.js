import React from 'react';
import './Projects.css';

// images
import omr from './assets/omr.png';
import loki from './assets/loki.jpg';
import kbc from './assets/kbc.png';
import rhs from './assets/rhs.png';
import bank from './assets/bank.png';
import movie from './assets/movie.png';
import video from './assets/video.png';


const projects = [
  {
    title: "OMR Scanner",
    description:
      "A smart Optical Mark Recognition (OMR) scanner that processes scanned sheets and evaluates results efficiently.",
    techStack: ["React.js", "Node.js", "Express.js", "Sharp"],
    liveDemo: "https://your-demo-link.com",
    github: "https://github.com/your-profile/omr-scanner",
    image: omr, // Replace with actual image URL
  },
  // {
  //   title: "Job Portal",
  //   description:
  //     "A job portal platform where users can search and apply for jobs, and recruiters can post job openings.",
  //   techStack: ["React.js", "MongoDB", "Express.js"],
  //   liveDemo: "https://your-demo-link.com",
  //   github: "https://github.com/your-profile/job-portal",
  //   image: "https://via.placeholder.com/350x200?text=Job+Portal", // Replace with actual image URL
  // },
  {
    title: "Portfolio Website",
    description:
      "The website you're currently viewing, built to showcase my skills, projects, and experiences.",
    techStack: ["HTML", "CSS","JavaScript","Bootstrap"],
    liveDemo: "#",
    github: "https://github.com/Lokendra6267/Lokendralodhi-porfolio.com",
    image: loki, // Replace with actual image URL
  },
  {
    title: "KBC Style Game",
    description:
      "A dynamic and interactive game inspired by the popular quiz show 'Kaun Banega Crorepati,' allowing players to scan QR codes, answer questions on their devices, and see real-time feedback with a visually engaging interface.",
    techStack: ["React.js", "Node.js","Scanner"],
    liveDemo: "#",
    github: "https://github.com/Lokendra6267/Updated-KBC-Game",
    image: kbc, // Replace with actual image URL
  },
  {
    title: "Hospital Management System",
    description:
      "A comprehensive system designed to streamline hospital operations, manage patient records, appointments, and staff efficiently, and enhance the overall healthcare experience through user-friendly interfaces and robust backend support.",
    techStack: ["Java", "JDBC","Hibernate","MySql"],
    liveDemo: "#",
    github: "https://github.com/Lokendra6267/Hospital-Management-System",
    image: rhs, // Replace with actual image URL
  },
  {
    title: "Bank Management System",
    description:
      "An efficient system designed to manage banking operations, including account management, transactions, and customer data, ensuring seamless and secure interactions for users and administrators.",
    techStack: ["C++"],
    liveDemo: "https://your-demo-link.com",
    github: "https://github.com/Lokendra6267/Bank_Management_system",
    image: bank, // Replace with actual image URL
  },
  {
    title: "Movies Recommended Plateform",
    description:
      "An intelligent system that suggests personalized movie recommendations based on user preferences and viewing history, leveraging advanced algorithms and data analysis to enhance the movie-watching experience.",
    techStack: ["Python", "Python Libraries","Jupyter Notebook"],
    liveDemo: "#",
    github: "https://github.com/Lokendra6267/Movies-Recommended-Plateform",
    image: movie, // Replace with actual image URL
  },
  {
    title: "Video Conferencing Web App",
    description:
      "A seamless and user-friendly web application enabling real-time video conferencing, screen sharing, and collaborative communication with high-quality audio and video integration.",
    techStack: ["React.js", "Node.Js","HTML","CSS","JavaScript"],
    liveDemo: "#",
    github: "https://github.com/Lokendra6267/Video-Conferencing-Website",
    image: video, // Replace with actual image URL
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="tech-stack">
              {project.techStack.map((tech, i) => (
                <li key={i} className="tech-item">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="project-links">
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn live-btn"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn github-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
