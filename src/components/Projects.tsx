// src/components/Projects.tsx

import React from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from './ParticleEffect'; // Import the ParticleEffect


const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A comprehensive description of project 1, detailing the features, technologies used, and the impact of the project.',
      link: '#', // Add project link if applicable
    },
    {
      title: 'Project 2',
      description: 'A comprehensive description of project 2, detailing the features, technologies used, and the impact of the project.',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A comprehensive description of project 3, detailing the features, technologies used, and the impact of the project.',
      link: '#',
    },
  ];
  
  return (
    <div className="projects-container">
      <ParticleEffect />
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link">View Project</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
