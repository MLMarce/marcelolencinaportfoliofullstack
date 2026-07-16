"use client";

import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Search, Sparkles, Code2, CheckSquare, ShieldCheck, Rocket } from "lucide-react";

interface WorkflowStep {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export default function AiWorkflow() {
  const steps: WorkflowStep[] = [
    {
      title: "Idea",
      desc: "Conceptualización, requerimientos e identificación de objetivos.",
      icon: Lightbulb,
      color: "text-cyan-bright",
    },
    {
      title: "Análisis",
      desc: "Modelado de datos, arquitectura técnica y selección de herramientas.",
      icon: Search,
      color: "text-blue-400",
    },
    {
      title: "IA Assistance",
      desc: "Generación de boilerplate, prompts optimizados y análisis de alcance.",
      icon: Sparkles,
      color: "text-pink-neon",
    },
    {
      title: "Implementación",
      desc: "Codificación sólida Full Stack y lógica de negocio avanzada.",
      icon: Code2,
      color: "text-violet-electric",
    },
    {
      title: "Code Review",
      desc: "Optimización de código asistido por IA bajo supervisión humana.",
      icon: CheckSquare,
      color: "text-indigo-400",
    },
    {
      title: "Testing",
      desc: "Pruebas unitarias, de integración y validaciones funcionales.",
      icon: ShieldCheck,
      color: "text-emerald-400",
    },
    {
      title: "Deploy",
      desc: "Integración continua y despliegue automatizado a producción.",
      icon: Rocket,
      color: "text-cyan-bright",
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="workflow" className="py-24 relative overflow-hidden bg-black/30">
      {/* Background Radial Light */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-bright/5 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-sm font-mono tracking-widest text-pink-neon uppercase">
            Metodología Moderna
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Desarrollo de Software Asistido por IA
          </h3>
          <p className="text-gray-400 text-sm md:text-base font-light">
            Un flujo de trabajo optimizado donde la velocidad de la inteligencia artificial acelera la codificación, bajo el control y validación de la experiencia en ingeniería de software.
          </p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-pink-neon to-violet-electric mx-auto mt-4" />
        </motion.div>

        {/* Pipeline Flow Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 lg:gap-0 mt-8"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;

            return (
              <React.Fragment key={idx}>
                {/* Step Card */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center w-full lg:w-[12%] text-center group"
                >
                  {/* Node Circle */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full glassmorphism border border-white/10 group-hover:border-cyan-bright/40 shadow-lg transition-colors duration-300">
                    <div className="absolute inset-1 rounded-full bg-white/5 opacity-5" />
                    <Icon className={`w-6 h-6 ${step.color} group-hover:scale-110 transition-transform duration-300`} />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[#121218] border border-white/10 text-[9px] font-mono text-gray-400 font-bold">
                      {idx + 1}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <div className="mt-4 space-y-1">
                    <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-cyan-bright transition-colors duration-300">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] font-light leading-relaxed max-w-[160px] mx-auto lg:max-w-none">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Line (Animated Flow) */}
                {!isLast && (
                  <>
                    {/* Desktop Connector */}
                    <div className="hidden lg:flex items-center justify-center flex-grow mx-2">
                      <svg className="w-full h-4 overflow-visible" viewBox="0 0 60 16" fill="none">
                        <path
                          d="M 0 8 L 60 8"
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="2"
                        />
                        <path
                          d="M 0 8 L 60 8"
                          stroke="url(#gradient-flow)"
                          strokeWidth="2"
                          className="animate-flow-line"
                        />
                      </svg>
                    </div>

                    {/* Mobile Connector */}
                    <div className="lg:hidden flex items-center justify-center h-8">
                      <svg className="w-4 h-full overflow-visible" viewBox="0 0 16 32" fill="none">
                        <path
                          d="M 8 0 L 8 32"
                          stroke="rgba(255, 255, 255, 0.08)"
                          strokeWidth="2"
                        />
                        <path
                          d="M 8 0 L 8 32"
                          stroke="url(#gradient-flow-v)"
                          strokeWidth="2"
                          className="animate-flow-line"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </React.Fragment>
            );
          })}
        </motion.div>
      </div>

      {/* SVG Definitions for Flow Gradients */}
      <svg className="absolute w-0 h-0" fill="none">
        <defs>
          <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ff007f" />
          </linearGradient>
          <linearGradient id="gradient-flow-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="50%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#ff007f" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
