// src/components/Navbar.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-gray-800 text-white p-4">
      <div className="navbar-container flex justify-between items-center">
        <h1 className="logo text-2xl">Eeshan V</h1>
        <ul className="nav-links flex space-x-4">
          <motion.li
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to="/">Home</Link>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
