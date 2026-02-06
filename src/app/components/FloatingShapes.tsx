"use client";

import { useEffect, useState, useRef } from "react";

export default function FloatingShapes() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const checkWidth = () => {
      setIsVisible(window.innerWidth >= 1024);
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particles
    const particles: { x: number; y: number; size: number; speedY: number; opacity: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        speedY: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.005;

      // Wave configurations - each wave has unique properties
      const leftWaves = [
        { yBase: 0.08, amplitude: 120, frequency: 0.008, speed: 0.8, phase: 0, opacity: 0.15, width: 1.8 },
        { yBase: 0.18, amplitude: 60, frequency: 0.015, speed: 1.4, phase: 2.1, opacity: 0.08, width: 1.0 },
        { yBase: 0.35, amplitude: 90, frequency: 0.01, speed: 0.6, phase: 4.2, opacity: 0.12, width: 1.5 },
        { yBase: 0.48, amplitude: 50, frequency: 0.018, speed: 1.8, phase: 1.5, opacity: 0.06, width: 0.8 },
        { yBase: 0.62, amplitude: 100, frequency: 0.007, speed: 0.5, phase: 3.3, opacity: 0.14, width: 1.6 },
        { yBase: 0.75, amplitude: 70, frequency: 0.012, speed: 1.1, phase: 5.0, opacity: 0.09, width: 1.2 },
        { yBase: 0.88, amplitude: 40, frequency: 0.02, speed: 2.0, phase: 0.8, opacity: 0.05, width: 0.7 },
      ];

      const rightWaves = [
        { yBase: 0.05, amplitude: 80, frequency: 0.012, speed: 1.2, phase: 1.0, opacity: 0.10, width: 1.3 },
        { yBase: 0.22, amplitude: 110, frequency: 0.006, speed: 0.4, phase: 3.5, opacity: 0.14, width: 1.7 },
        { yBase: 0.38, amplitude: 55, frequency: 0.016, speed: 1.6, phase: 5.2, opacity: 0.07, width: 0.9 },
        { yBase: 0.52, amplitude: 95, frequency: 0.009, speed: 0.7, phase: 2.8, opacity: 0.13, width: 1.5 },
        { yBase: 0.65, amplitude: 45, frequency: 0.019, speed: 1.9, phase: 0.3, opacity: 0.06, width: 0.8 },
        { yBase: 0.78, amplitude: 85, frequency: 0.011, speed: 0.9, phase: 4.7, opacity: 0.11, width: 1.4 },
        { yBase: 0.92, amplitude: 65, frequency: 0.014, speed: 1.3, phase: 1.8, opacity: 0.08, width: 1.1 },
      ];

      // Draw flowing waves - left side
      leftWaves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * wave.yBase);

        for (let x = 0; x <= canvas.width * 0.18; x += 4) {
          const y = canvas.height * wave.yBase +
            Math.sin(x * wave.frequency + time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2.3 + time * wave.speed * 0.7) * (wave.amplitude * 0.3);
          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(0, 0, canvas.width * 0.18, 0);
        gradient.addColorStop(0, `rgba(201, 169, 98, ${wave.opacity})`);
        gradient.addColorStop(0.7, `rgba(201, 169, 98, ${wave.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(201, 169, 98, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = wave.width;
        ctx.stroke();
      });

      // Draw flowing waves - right side
      rightWaves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(canvas.width, canvas.height * wave.yBase);

        for (let x = canvas.width; x >= canvas.width * 0.82; x -= 4) {
          const y = canvas.height * wave.yBase +
            Math.sin(x * wave.frequency - time * wave.speed + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2.3 - time * wave.speed * 0.7) * (wave.amplitude * 0.3);
          ctx.lineTo(x, y);
        }

        const gradient = ctx.createLinearGradient(canvas.width, 0, canvas.width * 0.82, 0);
        gradient.addColorStop(0, `rgba(201, 169, 98, ${wave.opacity})`);
        gradient.addColorStop(0.7, `rgba(201, 169, 98, ${wave.opacity * 0.3})`);
        gradient.addColorStop(1, "rgba(201, 169, 98, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = wave.width;
        ctx.stroke();
      });

      // Draw particles
      particles.forEach((p) => {
        // Only draw particles on the sides
        if (p.x < canvas.width * 0.15 || p.x > canvas.width * 0.85) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(201, 169, 98, ${p.opacity * (0.3 + Math.sin(time * 2 + p.x) * 0.2)})`;
          ctx.fill();

          // Glow effect
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          glow.addColorStop(0, `rgba(201, 169, 98, ${p.opacity * 0.3})`);
          glow.addColorStop(1, "rgba(201, 169, 98, 0)");
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Move particles
        p.y -= p.speedY;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * window.innerWidth;
        }
      });

      // Draw subtle glow orbs
      const drawGlowOrb = (x: number, y: number, radius: number, intensity: number) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(201, 169, 98, ${intensity * 0.15})`);
        gradient.addColorStop(0.5, `rgba(201, 169, 98, ${intensity * 0.05})`);
        gradient.addColorStop(1, "rgba(201, 169, 98, 0)");
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      };

      // Animated glow orbs on sides
      const pulse = Math.sin(time * 2) * 0.5 + 0.5;
      drawGlowOrb(canvas.width * 0.05, canvas.height * 0.3, 150, pulse);
      drawGlowOrb(canvas.width * 0.08, canvas.height * 0.7, 100, 1 - pulse);
      drawGlowOrb(canvas.width * 0.95, canvas.height * 0.4, 120, 1 - pulse);
      drawGlowOrb(canvas.width * 0.92, canvas.height * 0.8, 80, pulse);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1]"
      style={{ opacity: 0.8 }}
    />
  );
}
