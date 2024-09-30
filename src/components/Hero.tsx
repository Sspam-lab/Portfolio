// src/components/Hero.tsx

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'react-typewriter-effect';
import ParticleEffect from './ParticleEffect';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [typingCompleted, setTypingCompleted] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const { clientX, clientY } = e;
        heroRef.current.style.setProperty('--mouse-x', `${clientX}px`);
        heroRef.current.style.setProperty('--mouse-y', `${clientY}px`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    navigate('/main-content'); // Navigate to MainContent.tsx on button click
  };

  const fadeIn = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="hero-container" ref={heroRef} style={{ position: 'relative', overflow: 'hidden' }}>
      <ParticleEffect />
      <motion.h1 className="hero-title" initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6, delay: 0.3 }}>
        Welcome to My Portfolio
      </motion.h1>
      <div className={`hero-subtitle ${typingCompleted ? 'glitch' : ''}`}>
        <Typewriter
          text="I’m Eeshan V, a passionate developer specializing in creating beautiful web experiences."
          typeSpeed={100}
          startDelay={500}
          cursorColor="#1e90ff"
          typingDelay={1000}
          eraseDelay={1000}
          eraseSpeed={50}
          cursorBlinking={true}
          onTypingComplete={() => setTypingCompleted(true)}
        />
      </div>
      <motion.a href="#projects" initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.6, delay: 1.1 }} className="cta-button" onClick={handleClick}>
        Learn More
      </motion.a>
    </div>
  );
};

export default Hero;
