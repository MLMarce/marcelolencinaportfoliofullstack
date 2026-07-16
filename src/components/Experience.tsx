"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Activity } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  tasks: string[];
  color: string;
  glow: string;
}

export default function Experience() {
  const experiences: ExperienceItem[] = [
    {
      company: "TEMTECH Studio",
      role: "Fundador & Full Stack Developer",
      tasks: [
        "Desarrollo de aplicaciones web dinámicas y escalables.",
        "Diseño e implementación de arquitecturas integradas frontend y backend.",
        "Integración e interconexión avanzada de APIs RESTful y servicios externos.",
        "Desarrollo de sistemas internos a medida y portales de gestión de datos.",
        "Modelado de flujos de automatización de procesos mediante inteligencia artificial.",
      ],
      color: "border-cyan-bright/30 text-cyan-bright",
      glow: "shadow-[0_0_20px_rgba(0,240,255,0.15)]",
    },
    {
      company: "Outlier",
      role: "AI Trainer",
      tasks: [
        "Evaluación cualitativa y cuantitativa de respuestas de código generadas por modelos de IA.",
        "Optimización de prompts complejos para evaluar capacidades de razonamiento lógico y algorítmico.",
        "Validación técnica y depuración de código en múltiples lenguajes de programación.",
        "Análisis de calidad, coherencia y eficiencia en respuestas de modelos de lenguaje masivos (LLMs).",
      ],
      color: "border-violet-electric/30 text-violet-electric",
      glow: "shadow-[0_0_20px_rgba(124,58,237,0.15)]",
    },
  ];

  return (
    <section id="experiencia" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-electric/5 blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-20 text-center"
        >
          <h2 className="text-sm font-mono tracking-widest text-violet-electric uppercase">
            Trayectoria
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Experiencia Profesional
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-violet-electric to-cyan-bright mx-auto mt-4" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Glowing Line */}
          {/* Desktop central, Mobile left-aligned */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-bright via-violet-electric to-transparent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-16">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col md:flex-row relative items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node */}
                  {/* Desktop central, Mobile left-aligned */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-[#030303] border-2 border-cyan-bright transform -translate-x-1/2 z-20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-bright animate-ping" />
                  </div>

                  {/* Left Spacer for Desktop (keeps layout centered) */}
                  <div className="hidden md:block w-1/2 px-12" />

                  {/* Timeline Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12 z-10"
                  >
                    <div
                      className={`glassmorphism rounded-2xl p-6 md:p-8 border ${exp.color} ${exp.glow} relative hover:scale-[1.01] transition-transform duration-300`}
                    >
                      {/* Icon */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-white">
                          <Briefcase size={20} />
                        </div>
                        <div>
                          <h4 className="text-white font-extrabold text-xl tracking-wide">
                            {exp.company}
                          </h4>
                          <p className="text-gray-400 text-xs font-mono font-medium">
                            {exp.role}
                          </p>
                        </div>
                      </div>

                      {/* Tasks list */}
                      <ul className="space-y-2.5 text-gray-300 font-light text-sm md:text-base leading-relaxed">
                        {exp.tasks.map((task, tIdx) => (
                          <li key={tIdx} className="flex items-start space-x-2.5">
                            <span className="text-cyan-bright text-xs select-none mt-1.5">✦</span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
