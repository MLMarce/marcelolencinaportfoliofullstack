"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FolderGit2, AlertCircle, CheckCircle, Flame, Trophy, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  technologies: string[];
  challenge: string;
  result: string;
  glowColor: string;
  borderColor: string;
  mockType: "dashboard" | "chat" | "billing";
}

export default function Projects() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const projects: Project[] = [
    {
      title: "SaaS Dashboard IA & Analytics",
      tagline: "Agregación y monitoreo de datos multi-API en tiempo real.",
      problem: "Los clientes necesitaban consolidar y monitorizar métricas operacionales de múltiples APIs en tiempo real, sufriendo de alta latencia y desactualización.",
      solution: "Construcción de un dashboard centralizado en Next.js utilizando Server Actions, caching optimizado con Redis y streaming mediante React Suspense.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redis", "PostgreSQL"],
      challenge: "Optimizar el tiempo de carga agregando APIs externas lentas. Se solucionó implementando renderizado híbrido y streaming reactivo de componentes.",
      result: "Reducción del 45% en los tiempos de respuesta del cliente final y actualización fluida sin sobrecarga del backend.",
      glowColor: "rgba(0, 240, 255, 0.15)",
      borderColor: "border-cyan-bright/20",
      mockType: "dashboard",
    },
    {
      title: "Copilot de Documentación Técnica",
      tagline: "Motor de búsqueda inteligente RAG para repositorios extensos.",
      problem: "Los líderes técnicos y desarrolladores perdían horas buscando integraciones específicas en repositorios y wikis internas desactualizadas.",
      solution: "Desarrollo de una interfaz de chat inteligente que indexa markdown, calcula embeddings vectoriales en base de datos y genera código con LLMs contextualizados.",
      technologies: ["Next.js", "OpenAI API", "Supabase", "TypeScript", "Tailwind CSS"],
      challenge: "Segmentar y limpiar el código fuente para calcular embeddings precisos y evitar alucinaciones en las respuestas generadas.",
      result: "Reducción del 30% en los tiempos de onboarding técnico de nuevos programadores e integración inmediata de respuestas útiles.",
      glowColor: "rgba(124, 58, 237, 0.15)",
      borderColor: "border-violet-electric/20",
      mockType: "chat",
    },
    {
      title: "Sistema Automatizado de Facturación",
      tagline: "Automatización modular de cobros recurrentes y reportes.",
      problem: "Procesamiento manual, lento y propenso a errores en el cobro recurrente mensual y emisión de facturas para clientes corporativos.",
      solution: "Plataforma automatizada en Node.js que conecta con pasarelas de pago, procesa PDF con firmas digitales en colas de tareas y envía notificaciones por correo.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Stripe API", "Puppeteer", "Tailwind CSS"],
      challenge: "Garantizar consistencia en las transacciones en caso de micro-cortes y estructurar colas de renderizado de PDFs en segundo plano para evitar fugas de memoria.",
      result: "Automatización del 100% de la facturación y cobranza periódica, eliminando errores de facturación y retrasos.",
      glowColor: "rgba(255, 0, 127, 0.15)",
      borderColor: "border-pink-neon/20",
      mockType: "billing",
    },
  ];

  const toggleExpand = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-cyan-bright/3 blur-[140px] -z-10" />

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
            Trabajos
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Proyectos Destacados
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-cyan-bright to-violet-electric mx-auto mt-4" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const isExpanded = expandedIdx === idx;

            return (
              <motion.div
                key={idx}
                className={`glassmorphism rounded-2xl border ${project.borderColor} overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_10px_30px_rgba(0,240,255,0.05)] transition-all duration-300 flex flex-col justify-between`}
                style={{
                  boxShadow: `0 4px 20px -2px ${project.glowColor}`,
                }}
                layout
              >
                <div>
                  {/* Visual Interface Preview inside Card (Instead of empty placeholders) */}
                  <div className="h-44 bg-[#050508]/80 border-b border-white/5 relative overflow-hidden flex items-center justify-center p-4">
                    {/* Background glow in visual preview */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />

                    {project.mockType === "dashboard" && <DashboardMock />}
                    {project.mockType === "chat" && <ChatMock />}
                    {project.mockType === "billing" && <BillingMock />}
                  </div>

                  {/* Text Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-white font-extrabold text-xl tracking-wide">
                        {project.title}
                      </h4>
                      <p className="text-cyan-bright/80 font-mono text-[11px]">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem / Solution Summary */}
                    <div className="space-y-3 pt-2">
                      <div className="flex items-start space-x-2.5">
                        <AlertCircle size={16} className="text-pink-neon shrink-0 mt-1" />
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                          <strong className="text-gray-300 font-semibold">Problema: </strong>
                          {project.problem}
                        </p>
                      </div>
                      <div className="flex items-start space-x-2.5">
                        <CheckCircle size={16} className="text-cyan-bright shrink-0 mt-1" />
                        <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                          <strong className="text-gray-300 font-semibold">Solución: </strong>
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Expandable Details Container */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden space-y-4 pt-4 border-t border-white/5"
                        >
                          {/* Challenges */}
                          <div className="flex items-start space-x-2.5">
                            <Flame size={16} className="text-orange-400 shrink-0 mt-1" />
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                              <strong className="text-gray-300 font-semibold">Desafío Técnico: </strong>
                              {project.challenge}
                            </p>
                          </div>
                          {/* Results */}
                          <div className="flex items-start space-x-2.5">
                            <Trophy size={16} className="text-yellow-400 shrink-0 mt-1" />
                            <p className="text-gray-400 text-xs md:text-sm leading-relaxed font-light">
                              <strong className="text-gray-300 font-semibold">Resultado: </strong>
                              {project.result}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Card Footer: Tech Tags & Expand Button */}
                <div className="p-6 pt-0 space-y-4">
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-400 text-[10px] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <button
                      onClick={() => toggleExpand(idx)}
                      className="inline-flex items-center space-x-1.5 text-xs text-gray-400 hover:text-white font-mono transition-colors focus:outline-none"
                    >
                      <span>{isExpanded ? "Ocultar detalles" : "Ver detalles técnicos"}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    <div className="flex items-center text-gray-500 text-xs font-mono select-none">
                      <FolderGit2 size={14} className="mr-1" />
                      <span>Full Stack</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   CSS/SVG Mock Previews for Project Cards (Highly Premium Aesthetic)
   ========================================================================== */

function DashboardMock() {
  return (
    <div className="w-full h-full glassmorphism rounded-lg border border-white/10 p-3 flex flex-col justify-between font-mono text-[10px]">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2">
        <div className="flex items-center space-x-1.5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
          <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
          <span className="w-2 h-2 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[9px] text-gray-500">temtech-analytics.env</span>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-3 gap-2 py-2">
        <div className="bg-white/5 border border-white/5 p-1.5 rounded flex flex-col justify-between">
          <span className="text-gray-500 text-[8px]">Request/s</span>
          <span className="text-cyan-bright font-bold">14.2k</span>
        </div>
        <div className="bg-white/5 border border-white/5 p-1.5 rounded flex flex-col justify-between">
          <span className="text-gray-500 text-[8px]">Latency</span>
          <span className="text-violet-electric font-bold">24ms</span>
        </div>
        <div className="bg-white/5 border border-white/5 p-1.5 rounded flex flex-col justify-between">
          <span className="text-gray-500 text-[8px]">Uptime</span>
          <span className="text-emerald-400 font-bold">99.98%</span>
        </div>
      </div>

      {/* Chart preview */}
      <div className="flex-grow flex items-end justify-between h-10 w-full pt-1 px-1">
        {[20, 45, 30, 60, 50, 75, 40, 90, 85, 100].map((h, i) => (
          <motion.div
            key={i}
            className="w-[7%] bg-gradient-to-t from-violet-electric to-cyan-bright rounded-t"
            style={{ height: `${h}%` }}
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div className="w-full h-full bg-[#050508]/90 rounded-lg border border-white/10 p-3 flex flex-col justify-between font-mono text-[9px] text-gray-300">
      {/* Header */}
      <div className="flex items-center space-x-1 border-b border-white/5 pb-1.5 text-gray-500">
        <span className="w-2 h-2 rounded-full bg-cyan-bright shrink-0" />
        <span className="font-semibold text-white">Docs-Copilot</span>
        <span>• RAG Engine active</span>
      </div>

      {/* Chat Messages */}
      <div className="flex-grow flex flex-col justify-end space-y-2 py-2 overflow-hidden">
        {/* User prompt */}
        <div className="self-end max-w-[85%] bg-white/5 border border-white/5 px-2 py-1 rounded">
          <span className="text-[8px] text-gray-500 block">User</span>
          ¿Cómo configuro RLS en Supabase?
        </div>
        {/* Bot response */}
        <div className="self-start max-w-[85%] bg-gradient-to-r from-violet-electric/15 to-cyan-bright/10 border border-violet-electric/20 px-2 py-1 rounded">
          <span className="text-[8px] text-cyan-bright block">Copilot</span>
          Crea una policy usando:
          <span className="text-white block mt-0.5 text-[8px] opacity-80">CREATE POLICY "allow_read" ON...</span>
        </div>
      </div>

      {/* Input row */}
      <div className="border-t border-white/5 pt-1.5 flex items-center justify-between text-gray-500">
        <span>Escribe una pregunta...</span>
        <span className="text-cyan-bright">↵</span>
      </div>
    </div>
  );
}

function BillingMock() {
  return (
    <div className="w-full h-full glassmorphism rounded-lg border border-white/10 p-3 flex flex-col justify-between font-mono text-[10px]">
      {/* Title */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2">
        <span className="text-gray-400 font-semibold">Stripe Autopay</span>
        <span className="text-pink-neon px-1.5 py-0.5 rounded bg-pink-neon/10 border border-pink-neon/20 text-[8px]">
          Live Queue
        </span>
      </div>

      {/* Queue items */}
      <div className="flex-grow flex flex-col justify-center space-y-1.5 py-2">
        <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded border border-white/5">
          <span className="text-white">Inv-2026-04</span>
          <span className="text-emerald-400 font-bold">$1,250.00</span>
          <span className="text-[8px] text-gray-500">Pagado</span>
        </div>
        <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded border border-white/5">
          <span className="text-white">Inv-2026-05</span>
          <span className="text-emerald-400 font-bold">$840.00</span>
          <span className="text-[8px] text-gray-500">Pagado</span>
        </div>
        <div className="flex items-center justify-between bg-white/5 px-2 py-1 rounded border border-white/5 opacity-50">
          <span className="text-white">Inv-2026-06</span>
          <span className="text-gray-400">$1,500.00</span>
          <span className="text-[8px] text-gray-500">Pendiente</span>
        </div>
      </div>
    </div>
  );
}
