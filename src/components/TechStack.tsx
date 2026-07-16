"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Cpu, Database, Cloud, Settings } from "lucide-react";

interface TechItem {
  name: string;
  glow: string;
}

interface StackCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: TechItem[];
  variantClass: string;
  itemColorClass: string;
}

export default function TechStack() {
  const categories: StackCategory[] = [
    {
      title: "Frontend",
      icon: Cpu,
      variantClass: "glassmorphism bg-[linear-gradient(to_right,#00f0ff08_1px,transparent_1px),linear-gradient(to_bottom,#00f0ff08_1px,transparent_1px)] bg-[size:16px_16px] border-cyan-bright/20 shadow-[0_0_15px_rgba(0,240,255,0.03)]",
      itemColorClass: "bg-cyan-bright/10 border-cyan-bright/20 text-cyan-bright hover:bg-cyan-bright/20",
      items: [
        { name: "React", glow: "rgba(0, 240, 255, 0.3)" },
        { name: "Next.js", glow: "rgba(255, 255, 255, 0.2)" },
        { name: "Astro", glow: "rgba(255, 122, 0, 0.3)" },
        { name: "TypeScript", glow: "rgba(0, 122, 255, 0.3)" },
        { name: "Tailwind CSS", glow: "rgba(0, 240, 255, 0.2)" },
        { name: "Vite", glow: "rgba(189, 52, 254, 0.3)" },
      ],
    },
    {
      title: "Backend",
      icon: Terminal,
      variantClass: "glassmorphism border-l-4 border-l-violet-electric border-y-white/5 border-r-white/5 shadow-[0_0_25px_rgba(124,58,237,0.06)]",
      itemColorClass: "bg-violet-electric/10 border-violet-electric/20 text-violet-electric hover:bg-violet-electric/20",
      items: [
        { name: "Node.js", glow: "rgba(33, 163, 102, 0.3)" },
        { name: "Express", glow: "rgba(255, 255, 255, 0.15)" },
        { name: "NestJS", glow: "rgba(224, 35, 78, 0.3)" },
      ],
    },
    {
      title: "Bases de Datos",
      icon: Database,
      variantClass: "bg-gradient-to-br from-indigo-950/20 via-black to-zinc-950 border border-indigo-500/20 shadow-[inset_0_0_20px_rgba(99,102,241,0.05)]",
      itemColorClass: "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/20",
      items: [
        { name: "PostgreSQL", glow: "rgba(51, 103, 145, 0.3)" },
        { name: "Supabase", glow: "rgba(62, 207, 142, 0.3)" },
      ],
    },
    {
      title: "Cloud & Deploy",
      icon: Cloud,
      variantClass: "glassmorphism border border-cyan-bright/30 shadow-[0_0_20px_rgba(0,240,255,0.08)]",
      itemColorClass: "bg-cyan-bright/10 border-cyan-bright/20 text-cyan-bright hover:bg-cyan-bright/20",
      items: [
        { name: "Netlify", glow: "rgba(0, 173, 181, 0.3)" },
        { name: "Vercel", glow: "rgba(255, 255, 255, 0.2)" },
        { name: "GitHub Actions", glow: "rgba(32, 140, 237, 0.2)" },
      ],
    },
    {
      title: "IA y Automatización",
      icon: Shield, // Serves as an AI Shield icon representation here
      variantClass: "glassmorphism border border-pink-neon/20 shadow-[0_0_20px_rgba(255,0,127,0.05)] hover:shadow-[0_0_30px_rgba(255,0,127,0.15)] transition-all duration-500",
      itemColorClass: "bg-pink-neon/10 border-pink-neon/20 text-pink-neon hover:bg-pink-neon/20",
      items: [
        { name: "OpenAI", glow: "rgba(16, 163, 127, 0.3)" },
        { name: "Claude", glow: "rgba(217, 119, 6, 0.3)" },
        { name: "Gemini", glow: "rgba(59, 130, 246, 0.3)" },
        { name: "Antigravity", glow: "rgba(0, 240, 255, 0.3)" },
        { name: "Lovable", glow: "rgba(255, 0, 127, 0.3)" },
        { name: "MCP Servers", glow: "rgba(124, 58, 237, 0.3)" },
      ],
    },
    {
      title: "Herramientas",
      icon: Settings,
      variantClass: "bg-[#050508] border border-neutral-800 rounded-2xl relative overflow-hidden pt-10 px-6 pb-6 shadow-md",
      itemColorClass: "bg-neutral-800/40 border-neutral-700/50 text-neutral-300 hover:bg-neutral-800 hover:text-white",
      items: [
        { name: "Git", glow: "rgba(240, 80, 51, 0.3)" },
        { name: "GitHub", glow: "rgba(255, 255, 255, 0.2)" },
        { name: "Postman", glow: "rgba(255, 108, 55, 0.3)" },
        { name: "Figma", glow: "rgba(242, 78, 30, 0.3)" },
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] rounded-full bg-cyan-bright/3 blur-[130px] -z-10" />
      <div className="absolute bottom-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-electric/3 blur-[130px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16 text-center"
        >
          <h2 className="text-sm font-mono tracking-widest text-cyan-bright uppercase">
            Tecnologías
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Mi Stack Tecnológico & Ecosistema
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-bright to-pink-neon mx-auto mt-4" />
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isTerminal = cat.title === "Herramientas";

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`${cat.variantClass} rounded-2xl p-6 flex flex-col justify-between group transition-all duration-300`}
              >
                {/* Mock Terminal Window Controls for Herramientas */}
                {isTerminal && (
                  <div className="absolute top-4 left-5 flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                )}

                {/* Card Title & Icon */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg tracking-wide">
                    {cat.title}
                  </h4>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border transition-all duration-300 cursor-default ${cat.itemColorClass}`}
                      style={{
                        transitionProperty: "background-color, border-color, text-shadow, box-shadow",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 12px ${item.glow}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
