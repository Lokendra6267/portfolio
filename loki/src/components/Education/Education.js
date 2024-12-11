import React from "react";
import "./Education.css";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "MITS Gwalior",
    year: "2020 - 2024",
    cgpa: "8.1/10",
    description: "Graduated with a strong foundation in software development, algorithms, and system design.",
    icon: "🎓",
  },
  {
    degree: "Higher Secondary Education",
    field: "Science (PCM)",
    institution: "Excellence of Bhopal",
    year: "2017 - 2019",
    cgpa: "81%",
    description: "Focused on Physics, Chemistry, and Mathematics with excellent academic performance.",
    icon: "🏫",
  },
  {
    degree: "Secondary Education",
    institution: "Model Higher Secondary School",
    year: "2015 - 2017",
    cgpa: "90%",
    description: "Achieved a strong academic record and honed analytical and problem-solving skills.",
    icon: "📘",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index} style={{minWidth:'90%'}}>
            <div className="education-icon">{item.icon}</div>
            <div className="education-details">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-field">{item.field}</p>
              <p className="education-institution">{item.institution}</p>
              <p className="education-year">{item.year}</p>
              <p className="education-cgpa"><strong>CGPA/Score:</strong> {item.cgpa}</p>
              <p className="education-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
