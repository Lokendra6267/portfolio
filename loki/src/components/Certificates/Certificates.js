import React from 'react';
import './Certificates.css';

const certificates = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    issuer: "Coursera",
    date: "May 2024",
    link: "https://example.com/certificate/1",
  },
  {
    id: 2,
    title: "Data Structures and Algorithms",
    issuer: "Udemy",
    date: "March 2024",
    link: "https://example.com/certificate/2",
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "January 2024",
    link: "https://example.com/certificate/3",
  },
  {
    id: 4,
    title: "Machine Learning",
    issuer: "Anudip Foundation",
    date: "December 2023",
    link: "https://example.com/certificate/4",
  },
];

const Certificates = () => {
  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <h2 className="section-title">My Certificates</h2>
        <p className="section-description">Here are some of the professional certifications I have achieved.</p>
        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="certificate-card">
              <h3 className="certificate-title">{certificate.title}</h3>
              <p className="certificate-issuer">Issued by: {certificate.issuer}</p>
              <p className="certificate-date">Date: {certificate.date}</p>
              <a
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
