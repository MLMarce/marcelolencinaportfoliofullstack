"use client";

import React, { useEffect, useRef } from "react";

interface Firefly {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  depth: number; // 0.1 to 1.0 (for parallax)
  alpha: number;
  flickerSpeed: number;
  isFlickering: boolean;
  angle: number;
  spinSpeed: number;
}

export default function MechanicalFireflies() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const firefliesRef = useRef<Firefly[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const scrollRef = useRef({ y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Initialize fireflies
    const numFireflies = Math.min(Math.floor((width * height) / 18000), 75);
    const fireflies: Firefly[] = [];

    const colors = [
      "rgba(0, 240, 255, 0.45)", // Cyan bright
      "rgba(124, 58, 237, 0.45)", // Violet electric
    ];

    for (let i = 0; i < numFireflies; i++) {
      const depth = Math.random() * 0.9 + 0.1; // 0.1 (far, slow) to 1.0 (near, fast)
      const size = Math.max(0.6, depth * 2.2);
      const isFlickering = Math.random() > 0.4; // 60% flicker
      const color = colors[Math.floor(Math.random() * colors.length)];

      fireflies.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: 0,
        baseY: 0,
        size,
        color,
        vx: (Math.random() * 0.12 - 0.06) * (depth + 0.2),
        vy: (Math.random() * 0.12 - 0.06) * (depth + 0.2),
        depth,
        alpha: Math.random() * 0.6 + 0.1,
        flickerSpeed: (Math.random() * 0.015 + 0.005) * (Math.random() > 0.5 ? 1 : -1),
        isFlickering,
        angle: Math.random() * Math.PI * 2,
        spinSpeed: Math.random() * 0.005 - 0.0025,
      });
    }

    firefliesRef.current = fireflies;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX - window.innerWidth / 2) * 0.05;
      mouseRef.current.targetY = (e.clientY - window.innerHeight / 2) * 0.05;
    };

    const handleScroll = () => {
      scrollRef.current.y = window.scrollY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Animation Loop
    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse coordinates
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const scrollY = scrollRef.current.y;

      firefliesRef.current.forEach((p) => {
        // Move particle base coordinates slowly
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Apply flickering
        if (p.isFlickering) {
          p.alpha += p.flickerSpeed;
          if (p.alpha > 0.85 || p.alpha < 0.05) {
            p.flickerSpeed = -p.flickerSpeed;
          }
        }

        // Apply spin to simulate mechanical floating
        p.angle += p.spinSpeed;

        // Calculate actual render coordinates incorporating parallax (mouse & scroll)
        // scroll Y parallax has negative offset as we scroll down, particles float up
        const renderX = p.x + mouse.x * p.depth;
        const renderY = p.y + mouse.y * p.depth - (scrollY * p.depth * 0.08) % (height + 40);

        // Normalized render y (wrapped again for scroll parallax loop)
        let finalY = renderY;
        if (finalY < -20) finalY = height + (finalY % height);
        if (finalY > height + 20) finalY = finalY % height;

        ctx.save();
        ctx.beginPath();

        // Draw mechanical insect shape (crosshair/core)
        ctx.shadowBlur = p.size * 5;
        ctx.shadowColor = p.color.includes("0, 240, 255") ? "#00f0ff" : "#7c3aed";
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${Math.max(0.05, p.alpha)})`);
        
        // Draw glow core
        ctx.arc(renderX, finalY, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Mechanical elements (very subtle lines around large near fireflies)
        if (p.depth > 0.65) {
          ctx.strokeStyle = p.color.replace(/[\d.]+\)$/, `${p.alpha * 0.15})`);
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          // Draw orbital ring
          ctx.arc(renderX, finalY, p.size * 2.5, p.angle, p.angle + Math.PI * 1.2);
          ctx.stroke();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
