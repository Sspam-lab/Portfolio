// src/components/Skills.tsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaCloud, FaCode, FaLock } from 'react-icons/fa';

const skillsData = [
  {
    category: 'Programming',
    skills: ['Python', 'SQL', 'HTML', 'CSS', 'Bash', 'C', 'Go'],
    icon: <FaCode />,
  },
  {
    category: 'Frameworks & Tools',
    skills: ['Django', 'Flask', 'Git', 'Zscaler Zero Trust Exchange'],
    icon: <FaCode />,
  },
  {
    category: 'Cybersecurity',
    skills: [
      'Malware Analysis',
      'Vulnerability Assessment',
      'Incident Response',
      'Web Application Security',
      'Network Security',
      'Cryptography',
      'Linux Privilege Escalation',
    ],
    icon: <FaLock />,
  },
  {
    category: 'Cloud & Architecture',
    skills: ['Zero Trust Architecture', 'Cloud Security'],
    icon: <FaCloud />,
  },
  {
    category: 'Data Science & Machine Learning',
    skills: ['Web Development', 'Networking', 'Information Security'],
    icon: <FaDatabase />,
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleToggle = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-list">
        {skillsData.map((skillSet, index) => (
          <motion.div
            key={index}
            className="skill-card"
            onClick={() => handleToggle(skillSet.category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <div className="card-header">
              <div className="icon">{skillSet.icon}</div>
              <h3 className="category-title">{skillSet.category}</h3>
            </div>
            {activeCategory === skillSet.category && (
              <motion.ul
                className="skills-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                {skillSet.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
