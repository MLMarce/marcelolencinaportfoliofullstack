"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, Check, Copy } from "lucide-react";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "marcelodaniellencina@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contacto"
      className="py-24 relative overflow-hidden bg-gradient-to-t from-violet-electric/5 via-cyan-bright/0 to-transparent"
    >
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-bright/3 blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-12">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-sm font-mono tracking-widest text-cyan-bright uppercase">
            Contacto
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            ¿Listo para construir el futuro?
          </h3>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Busco incorporarme a equipos dinámicos como desarrollador Full Stack o liderar iniciativas de desarrollo asistido por IA. Hablemos sobre cómo puedo aportar valor desde el primer día.
          </p>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-bright to-violet-electric mx-auto mt-4" />
        </motion.div>

        {/* Call To Action Button (Hablemos) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-4"
        >
          <a
            href={`mailto:${email}`}
            className="relative inline-flex items-center justify-center px-10 py-5 rounded-xl text-lg font-bold text-white overflow-hidden group transition-all duration-300 bg-black border border-cyan-bright/40 shadow-[0_0_35px_rgba(0,240,255,0.25)] hover:shadow-[0_0_45px_rgba(124,58,237,0.45)] hover:border-violet-electric/40 cursor-pointer"
          >
            {/* Sliding backdrop gradient */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-bright to-violet-electric opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            
            <Mail className="mr-3 w-5 h-5 text-cyan-bright group-hover:text-white transition-colors duration-300" />
            <span className="tracking-wide">Hablemos</span>
          </a>
        </motion.div>

        {/* Copy Email and Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center space-y-8 pt-8 border-t border-white/5"
        >
          {/* Quick Copy Widget */}
          <div className="inline-flex items-center space-x-3 glassmorphism px-4 py-2.5 rounded-lg border border-white/5 max-w-sm">
            <span className="text-gray-300 text-xs md:text-sm font-mono tracking-tight select-all">
              {email}
            </span>
            <button
              onClick={copyToClipboard}
              className="p-1.5 rounded-md hover:bg-white/5 text-gray-400 hover:text-white transition-colors focus:outline-none"
              title="Copiar email"
            >
              {copied ? (
                <Check size={14} className="text-emerald-400" />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>

          {/* Social Grid */}
          <div className="flex items-center justify-center space-x-6">
            <a
              href="https://linkedin.com/in/mlmarce"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glassmorphism border-white/5 hover:border-cyan-bright/35 hover:bg-white/5 text-gray-400 hover:text-cyan-bright hover:scale-105 transition-all duration-300 shadow-md"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/MLMarce"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full glassmorphism border-white/5 hover:border-violet-electric/35 hover:bg-white/5 text-gray-400 hover:text-violet-electric hover:scale-105 transition-all duration-300 shadow-md"
              title="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="/cv_marcelo_lencina.pdf"
              download
              className="p-3.5 rounded-full glassmorphism border-white/5 hover:border-pink-neon/35 hover:bg-white/5 text-gray-400 hover:text-pink-neon hover:scale-105 transition-all duration-300 shadow-md"
              title="Descargar Currículum Vitae"
            >
              <FileText size={20} />
            </a>
          </div>
        </motion.div>

        {/* Footer Copyright */}
        <div className="pt-16 text-[11px] font-mono text-gray-600 tracking-wider">
          © {new Date().getFullYear()} MARCELO LENCINA. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </section>
  );
}
