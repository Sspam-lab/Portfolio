import React, { useEffect } from 'react';

const Cursor: React.FC = () => {
  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    width: '20px',
    height: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '50%',
    transform: `translate(-50%, -50%)`,
    zIndex: 9999,
    transition: 'transform 0.2s', // Smooth scaling transition
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById('custom-cursor');
      if (cursor) {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div id="custom-cursor" style={cursorStyle}></div>;
};

export default Cursor;
