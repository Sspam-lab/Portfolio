// src/components/ParticleEffect.tsx

import React, { useEffect, useRef } from 'react';

const ParticleEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles: any[] = [];
  const numParticles = 200;
  const mouse = { x: 0, y: 0 };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles.length = 0; // Reset particles
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 5 + 1,
          color: 'rgba(255, 255, 255, 0.8)',
          velocity: {
            x: (Math.random() - 0.5) * 0.5,
            y: (Math.random() - 0.5) * 0.5,
          },
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update particle position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;

        // Bounce off the walls
        if (particle.x + particle.radius > ctx.canvas.width || particle.x - particle.radius < 0) {
          particle.velocity.x = -particle.velocity.x;
        }
        if (particle.y + particle.radius > ctx.canvas.height || particle.y - particle.radius < 0) {
          particle.velocity.y = -particle.velocity.y;
        }

        // Attract particles to the mouse
        const dx = particle.x - mouse.x;
        const dy = particle.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 100; // Distance after which particles stop moving
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          particle.x += forceDirectionX * force * 5; // Adjust intensity of attraction
          particle.y += forceDirectionY * force * 5; // Adjust intensity of attraction
        }
      });
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();

    // Handle resizing
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }} />;
};

export default ParticleEffect;
