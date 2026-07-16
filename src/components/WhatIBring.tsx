"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Cpu, Compass, GraduationCap } from "lucide-react";

export default function WhatIBring() {
  const cards = [
    {
      icon: Layers,
      title: "Ingeniería Full Stack",
      desc: "Diseño y desarrollo de arquitecturas unificadas. Desde la estructura relacional de bases de datos hasta interfaces interactivas en React con control de estado óptimo.",
      color: "text-cyan-bright",
      glowColor: "rgba(0, 240, 255, 0.2)",
    },
    {
      icon: Cpu,
      title: "Productividad Aumentada con IA",
      desc: "Uso avanzado de asistentes y automatizaciones para programar rápido, validar lógica y refactorizar. Reduzco drásticamente los tiempos de desarrollo sin descuidar el detalle técnico.",
      color: "text-violet-electric",
      glowColor: "rgba(124, 58, 237, 0.2)",
    },
    {
      icon: Compass,
      title: "Pensamiento Orientado a Producto",
      desc: "No solo escribo código; entiendo los objetivos de negocio y la experiencia de usuario. Creo soluciones técnicas pensando en quién usará el software final y su viabilidad a largo plazo.",
      color: "text-pink-neon",
      glowColor: "rgba(255, 0, 127, 0.2)",
    },
    {
      icon: GraduationCap,
      title: "Aprendizaje Continuo",
      desc: "Capacidad de adaptación a nuevos frameworks, lenguajes y metodologías. Mi proceso incluye la experimentación activa con APIs emergentes, asegurando que mis soluciones utilicen lo mejor de la tecnología actual.",
      color: "text-cyan-bright",
      glowColor: "rgba(0, 240, 255, 0.2)",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as const;

  return (
    <section id="aporto" className="py-24 relative overflow-hidden bg-black/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-cyan-bright/3 blur-[140px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-electric/3 blur-[140px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16 text-center"
        >
          <h2 className="text-sm font-mono tracking-widest text-violet-electric uppercase">
            Valor Añadido
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Lo que aporto a un equipo de desarrollo
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-violet-electric to-pink-neon mx-auto mt-4" />
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="neon-card-border p-8 flex flex-col space-y-5 select-none"
              >
                {/* Icon Container with custom shadows */}
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 ${card.color} transition-transform duration-300`}
                  style={{ boxShadow: `0 0 20px ${card.glowColor}` }}
                >
                  <Icon size={24} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h4 className="text-white font-bold text-xl tracking-wide group-hover:text-cyan-bright transition-colors duration-300">
                    {card.title}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
