"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code, Sparkles, Layout, Server } from "lucide-react";

export default function AboutMe() {
  const metrics = [
    {
      id: "01",
      icon: Code,
      title: "Full Stack Developer",
      desc: "Dominio técnico de extremo a extremo, conectando interfaces fluidas con servicios estables.",
      color: "text-cyan-bright",
      glow: "rgba(0, 240, 255, 0.15)",
    },
    {
      id: "02",
      icon: Sparkles,
      title: "IA Aplicada al Desarrollo",
      desc: "Integración de IA y LLMs para acelerar la entrega de software manteniendo altos estándares.",
      color: "text-violet-electric",
      glow: "rgba(124, 58, 237, 0.15)",
    },
    {
      id: "03",
      icon: Layout,
      title: "Aplicaciones Web Modernas",
      desc: "Foco en rendimiento, carga progresiva rápida, responsive design y óptima experiencia de usuario.",
      color: "text-pink-neon",
      glow: "rgba(255, 0, 127, 0.15)",
    },
    {
      id: "04",
      icon: Server,
      title: "Arquitectura Robusta",
      desc: "Diseño de código limpio, modular y mantenible alineado a las mejores prácticas de la industria.",
      color: "text-cyan-bright",
      glow: "rgba(0, 240, 255, 0.15)",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section id="sobre-mi" className="py-24 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-violet-electric/5 blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16"
        >
          <h2 className="text-sm font-mono tracking-widest text-cyan-bright uppercase">
            Sobre Mí
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ingeniería de Software para la Era de la Inteligencia Artificial
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-bright to-violet-electric mx-auto mt-4" />
        </motion.div>

        {/* Main Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glassmorphism rounded-2xl p-8 md:p-12 mb-16 text-left border border-white/5 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle top border glow */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-bright/40 to-transparent" />

          <div className="space-y-6 text-gray-300 text-base md:text-lg leading-relaxed font-light">
            <p>
              Soy un desarrollador <span className="text-white font-semibold">Full Stack</span> apasionado por construir aplicaciones web eficientes, escalables y con un acabado visual premium. Mi enfoque de ingeniería combina el rigor de la arquitectura tradicional de software con la velocidad y flexibilidad que otorgan los entornos de desarrollo impulsados por Inteligencia Artificial.
            </p>
            <p>
              Entiendo la IA no como un reemplazo del criterio de ingeniería, sino como un multiplicador de productividad. Me especializo en diseñar e implementar arquitecturas frontend y backend sólidas, asegurando que cada línea de código cumpla con los estándares de mantenibilidad, rendimiento y seguridad.
            </p>
            <p>
              Mi meta es simple: <span className="text-white font-semibold">materializar ideas de producto complejas en código robusto</span>, reduciendo el time-to-market a través de flujos de trabajo eficientes asistidos por herramientas de vanguardia.
            </p>
          </div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.id}
                variants={cardVariants}
                className="glassmorphism-light rounded-xl p-6 text-left border border-white/5 relative hover:border-white/10 transition-colors duration-300 group shadow-md"
              >
                {/* Index tag */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-gray-600 font-bold">
                  {metric.id}
                </div>

                <div className="flex flex-col space-y-4">
                  {/* Icon with subtle background color */}
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg ${metric.color} bg-white/5 border border-white/5 group-hover:scale-105 transition-transform duration-300`}
                    style={{ boxShadow: `0 0 15px ${metric.glow}` }}
                  >
                    <Icon size={20} />
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h4 className="text-white font-semibold text-base mb-1.5 group-hover:text-cyan-bright transition-colors duration-300">
                      {metric.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
