"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight, Sparkles } from "lucide-react";
import InteractiveTechVisual from "./InteractiveTechVisual";

export default function Hero() {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById("proyectos");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a24_1px,transparent_1px),linear-gradient(to_bottom,#1a1a24_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-15 -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col space-y-6 md:space-y-8 text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full glassmorphism border-cyan-bright/20 w-fit">
            <Sparkles size={14} className="text-cyan-bright animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-cyan-bright uppercase">
              Desarrollo Impulsado por IA
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2 md:space-y-4">
            <h2 className="text-sm md:text-base font-mono tracking-widest text-violet-electric uppercase">
              Hola, mi nombre es
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              Marcelo Lencina
            </h1>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-bright via-violet-electric to-pink-neon bg-clip-text text-transparent">
              Full Stack Developer
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed font-light">
            Desarrollo aplicaciones web escalables utilizando{" "}
            <span className="text-white font-medium">React, Next.js, TypeScript, Node.js y PostgreSQL</span>.
            <br />
            <br />
            Integro herramientas de IA para acelerar el desarrollo, automatizar procesos y aumentar la productividad sin comprometer la calidad del código.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* View Projects Button */}
            <button
              onClick={handleScrollToProjects}
              className="relative inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-black bg-cyan-bright hover:bg-cyan-bright/90 transition-all duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:shadow-[0_0_30px_rgba(0,240,255,0.55)] cursor-pointer"
            >
              <span>Ver proyectos</span>
              <ArrowRight size={16} />
            </button>

            {/* Download CV Button */}
            <a
              href="/cv_marcelo_lencina.pdf"
              download
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-white glassmorphism border-white/10 hover:border-cyan-bright/30 hover:bg-white/5 transition-all duration-300"
            >
              <FileText size={16} className="text-cyan-bright" />
              <span>Descargar CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center lg:justify-end"
        >
          <InteractiveTechVisual />
        </motion.div>
      </div>

      {/* Floating Spark */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 select-none opacity-40 hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">Scroll</span>
        <motion.div
          className="w-1.5 h-6 rounded-full border border-gray-600 flex justify-center p-0.5"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-1 h-1 bg-cyan-bright rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
