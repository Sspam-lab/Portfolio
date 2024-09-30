// src/components/NotFound.tsx

import React from 'react';
import { motion } from 'framer-motion';
import ParticleEffect from './ParticleEffect'; // Import the ParticleEffect

const NotFound: React.FC = () => {
  return (
    <div className="not-found-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleEffect />
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404 - Not Found
      </motion.h1>
      <motion.p
        className="mt-4 text-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! The page you are looking for does not exist.
      </motion.p>
      <motion.a
        href="/"
        className="mt-8 inline-block bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Go Home
      </motion.a>
    </div>
  );
};

export default NotFound;
