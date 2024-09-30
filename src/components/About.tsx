// src/components/About.tsx

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="about-container">
      <motion.h2
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="section-title"
      >
        About Me
      </motion.h2>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="about-description"
      >
        I’m Eeshan V, a passionate developer specializing in creating beautiful web experiences. I love coding and enjoy building innovative solutions that make a difference.
      </motion.p>
    </div>
  );
};

export default About;
