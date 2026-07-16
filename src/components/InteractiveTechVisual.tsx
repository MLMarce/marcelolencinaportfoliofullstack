"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Terminal, Database, Sparkles, Code2, Globe } from "lucide-react";

export default function InteractiveTechVisual() {
  // Coordinates for our SVG nodes
  const nodes = [
    { id: "core", x: 250, y: 250, label: "Full Stack", icon: Code2, color: "from-cyan-bright to-violet-electric" },
    { id: "frontend", x: 120, y: 130, label: "Frontend", icon: Globe, color: "from-cyan-bright to-blue-500" },
    { id: "backend", x: 380, y: 130, label: "Backend", icon: Terminal, color: "from-violet-electric to-fuchsia-500" },
    { id: "db", x: 380, y: 370, label: "Database", icon: Database, color: "from-indigo-500 to-violet-electric" },
    { id: "ai", x: 120, y: 370, label: "AI Integration", icon: Sparkles, color: "from-pink-neon to-violet-electric" },
  ];

  // Connections between nodes
  const connections = [
    { from: "core", to: "frontend" },
    { from: "core", to: "backend" },
    { from: "core", to: "db" },
    { from: "core", to: "ai" },
    { from: "frontend", to: "backend" },
    { from: "backend", to: "db" },
    { from: "db", to: "ai" },
    { from: "ai", to: "frontend" },
  ];

  // Helper to get coordinates by node ID
  const getNodeCoords = (id: string) => {
    const node = nodes.find((n) => n.id === id);
    return node ? { x: node.x, y: node.y } : { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-cyan-bright/10 blur-[80px] -z-10 pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full bg-violet-electric/10 blur-[80px] -z-10 pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Floating Mechanical Rings */}
      <motion.div
        className="absolute inset-0 border border-white/5 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-12 border border-dashed border-cyan-bright/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-24 border border-violet-electric/5 rounded-full"
        animate={{ rotate: 180 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Connection Lines & Flowing Data Packets */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="cyan-violet-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {connections.map((conn, idx) => {
          const from = getNodeCoords(conn.from);
          const to = getNodeCoords(conn.to);
          return (
            <g key={idx}>
              {/* Static background lines */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke="url(#cyan-violet-grad)"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
              {/* Animated flowing line */}
              <line
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={idx % 2 === 0 ? "#00f0ff" : "#7c3aed"}
                strokeWidth="1.5"
                strokeOpacity="0.75"
                className="animate-flow-line"
              />
            </g>
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => {
        const Icon = node.icon;
        const isCore = node.id === "core";

        return (
          <motion.div
            key={node.id}
            style={{
              position: "absolute",
              left: `${node.x}px`,
              top: `${node.y}px`,
              transform: "translate(-50%, -50%)",
            }}
            className="cursor-pointer group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -6, 0], // Floating effect
            }}
            transition={{
              scale: { duration: 0.8, delay: isCore ? 0.2 : 0.4 },
              opacity: { duration: 0.8, delay: isCore ? 0.2 : 0.4 },
              y: {
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              },
            }}
            whileHover={{ scale: 1.15 }}
          >
            {/* Outer Ring Glow on Hover */}
            <div className={`absolute -inset-4 rounded-full bg-gradient-to-r ${node.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />

            {/* Main Circle */}
            <div
              className={`relative flex items-center justify-center rounded-full glassmorphism border border-white/10 ${
                isCore ? "w-20 h-20 shadow-[0_0_25px_rgba(0,240,255,0.25)] border-cyan-bright/30" : "w-14 h-14 shadow-md"
              }`}
            >
              <div className={`absolute inset-0.5 rounded-full bg-gradient-to-r ${node.color} opacity-10`} />
              <Icon
                className={`${isCore ? "w-8 h-8 text-cyan-bright" : "w-6 h-6 text-white group-hover:text-cyan-bright"} transition-colors duration-300`}
              />

              {/* Ping Animation for Core or AI nodes */}
              {(isCore || node.id === "ai") && (
                <span className="absolute -inset-1 rounded-full border border-cyan-bright/20 animate-ping opacity-75" />
              )}
            </div>

            {/* Label */}
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2.5 py-0.5 rounded text-[11px] font-mono whitespace-nowrap glassmorphism-light opacity-60 group-hover:opacity-100 group-hover:text-cyan-bright transition-all duration-300 border border-white/5`}
            >
              {node.label}
            </div>
          </motion.div>
        );
      })}

      {/* Floating Mechanical Accents */}
      <motion.div
        className="absolute top-10 right-20 text-[10px] font-mono text-cyan-bright/20 select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {"{ ia: 'enabled' }"}
      </motion.div>
      <motion.div
        className="absolute bottom-12 left-16 text-[10px] font-mono text-violet-electric/20 select-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {"const dataStream = new Stream()"}
      </motion.div>
    </div>
  );
}
