import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

interface InteractiveCanvasBackgroundProps {
  isDarkMode: boolean;
}

export default function InteractiveCanvasBackground({ isDarkMode }: InteractiveCanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [accentColor, setAccentColor] = useState("#daa520");
  const [lineColor, setLineColor] = useState("rgba(218, 165, 32, 0.08)");

  useEffect(() => {
    // Update colors based on light vs dark theme
    if (isDarkMode) {
      setAccentColor("#daa520");
      setLineColor("rgba(218, 165, 32, 0.08)");
    } else {
      setAccentColor("#b58913");
      setLineColor("rgba(181, 137, 19, 0.06)");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const maxParticles = 65;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width || window.innerWidth;
        height = entry.contentRect.height || window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles();
      }
    });

    resizeObserver.observe(canvas.parentElement || document.body);

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach((p) => {
        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce details
        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = accentColor;
        ctx.fill();
      });

      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [accentColor, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-300"
      style={{
        backgroundColor: "transparent",
      }}
    />
  );
}
