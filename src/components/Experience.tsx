// src/components/Experience.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { text } from 'stream/consumers';

const Experience: React.FC = () => {
  return (
<motion.div className="experience-container">
  <h2 className="section-title">Experience</h2>
  <div className="timeline">
    <motion.div className="timeline-item">
      <div className="item-content">
        <h3>InfoSec WriteUps Publication</h3>
        <p className="company">Ambassador</p>
        <p className="Timeline">Nov 2023 - Present</p>
        <p>Part of a 15-member team creating weekly cybersecurity newsletters to curate and disseminate current
          information security trends and developments.</p>
      </div>
      <div className="date-icon">
        <i className="fas fa-calendar-alt"></i>
      </div>
    </motion.div>

    <motion.div className="timeline-item">
      <div className="item-content">
        <h3>Indian Railways Institute of Signal Engineering and Telecommunications (IRISET)</h3>
        <p className="company">Project Intern</p>
        <p className="Timeline">Apr 2024 - Jun 2024</p>
        <p>Developed an internal site for course and lecture management using Django (Python). Implemented SQLite
          database and designed frontend with HTML, CSS, and JavaScript. Incorporated a discussion forum for faculty
          and trainees</p>
      </div>
      <div className="date-icon">
        <i className="fas fa-calendar-alt"></i>
      </div>
    </motion.div>

    <motion.div className="timeline-item">
      <div className="item-content">
        <h3>TheBinaryBot</h3>
        <p className="company">Social Media Manager</p>
        <p className="Timeline">Sep 2023 - Dec 2023</p>
        <p>Created engaging and informative content related to cybersecurity for TheBinaryBot's Twitter and LinkedIn
        accounts</p>
      </div>
      <div className="date-icon">
        <i className="fas fa-calendar-alt"></i>
      </div>
    </motion.div>

    <motion.div className="timeline-item">
      <div className="item-content">
        <h3>Palmtree Analytics</h3>
        <p className="company">Intern</p>
        <p className="Timeline">May 2023 - Jun 2023</p>
        <p>Developed a Python-powered recruitment platform with frontend and backend components. Improved
        resume processing and candidate identification using machine learning techniques</p>
      </div>
      <div className="date-icon">
        <i className="fas fa-calendar-alt"></i>
      </div>
    </motion.div>

    <motion.div className="timeline-item">
      <div className="item-content">
        <h3>hackerats.com</h3>
        <p className="company">Mentor</p>
        <p className="Timeline">Oct 2022 - Jan 2023</p>
        <p>Guided individuals in Cryptography, Linux Privilege Escalation, and Basic Web Security. Created challenging
        tasks to enhance participants' skills</p>
      </div>
      <div className="date-icon">
        <i className="fas fa-calendar-alt"></i>
      </div>
    </motion.div>
  </div>
</motion.div>
  );
};

export default Experience;
