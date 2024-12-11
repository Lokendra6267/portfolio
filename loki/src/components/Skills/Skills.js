import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React.js', level: 85 },
    ],
  },
  {
    category: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 65 },
      { name: 'MySql', level: 95 },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'Python', level: 80 },
      { name: 'C/C++', level: 70 },
      { name: 'Java', level: 60 },
    ],
  },
  {
    category: 'J2EE',
    skills: [
      { name: 'JDBC', level: 90 },
      { name: 'Hibernate', level: 85 },
      { name: 'Servlet/JSP', level: 80 },
    ],
  },
  {
    category: 'Tools & Technologies',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'Github', level: 90 },
      { name: 'AWS', level: 60 },
      { name: 'Figma', level: 90 },
      { name: 'AS/400', level: 50 },
      { name: 'VS Code', level: 95 },
      { name: 'MATLB', level: 65 },
      { name: 'Advanced MS Excel', level: 60 },
      { name: 'Advanced MS Word', level: 70 },
      { name: 'AWS & Azure', level: 65 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((category, index) => (
          <div className="skills-category" key={index}>
            <h3 className="skills-category-title">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, i) => (
                <div className="skill-item" key={i}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-progress">
                    <div
                      className="skill-progress-bar"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
