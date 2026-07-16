"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronRight, ChevronDown, Check, Code } from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  title: string;
  command: string;
  overview: string;
  challenge: string;
  solutionCode: string;
  metrics: string[];
}

export default function TechnicalCases() {
  const [activeId, setActiveId] = useState<string | null>("vite-next");

  const cases: CaseStudy[] = [
    {
      id: "vite-next",
      category: "MIGRACIÓN",
      title: "Migración de Vite a Next.js (App Router)",
      command: "cat vite_to_nextjs_migration.txt",
      overview: "Una SPA de React montada sobre Vite sufría de SEO nulo, tiempos de carga inicial lentos y problemas de renderizado al procesar grandes cantidades de datos dinámicos.",
      challenge: "Reemplazar el enrutamiento del lado del cliente, adaptar el estado global para soportar React Server Components (RSC) y optimizar el renderizado inicial sin romper flujos del usuario.",
      solutionCode: `// Antes: Client-side routing con carga lenta
// Después: Server-side rendering híbrido con caching dinámico
export const revalidate = 3600; // Cache de 1 hora

export default async function Page() {
  const data = await db.query("SELECT * FROM reports");
  
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Suspense fallback={<TableSkeleton />}>
        <AnalyticsTable initialData={data} />
      </Suspense>
    </main>
  );
}`,
      metrics: [
        "Indexación SEO incrementada al 100% de las rutas públicas.",
        "Largest Contentful Paint (LCP) reducido de 3.8s a 1.2s.",
        "Optimización automática de assets e imágenes en build time.",
      ],
    },
    {
      id: "supabase-auth",
      category: "SEGURIDAD",
      title: "Supabase Auth & Row Level Security (RLS)",
      command: "cat supabase_rls_security_audit.sh",
      overview: "Exposición potencial de datos confidenciales en una aplicación multi-tenant por consultas directas del cliente sin control a nivel de base de datos.",
      challenge: "Implementar aislamiento estricto de datos por espacio de trabajo a nivel de Postgres, previniendo que cualquier usuario altere o lea información ajena.",
      solutionCode: `-- Habilitar RLS en la tabla
ALTER TABLE public.workspace_data ENABLE ROW LEVEL SECURITY;

-- Crear política de aislamiento estricto basada en JWT de Supabase
CREATE POLICY "Aislamiento por Workspace" ON public.workspace_data
    FOR ALL
    TO authenticated
    USING (
      (auth.jwt() -> 'user_metadata' ->> 'workspace_id')::uuid = workspace_id
    )
    WITH CHECK (
      (auth.jwt() -> 'user_metadata' ->> 'workspace_id')::uuid = workspace_id
    );`,
      metrics: [
        "Aislamiento de datos garantizado en un entorno multi-tenant.",
        "Reducción del 100% en vulnerabilidades de acceso directo en auditorías externas.",
        "Control centralizado de permisos directamente en la base de datos.",
      ],
    },
    {
      id: "architecture",
      category: "ARQUITECTURA",
      title: "Arquitectura Modular Full Stack Desacoplada",
      command: "cat full_stack_architecture_design.json",
      overview: "Monolitos altamente acoplados que dificultaban la mantenibilidad, escalabilidad del código y hacían que los tests automatizados tardaran demasiado.",
      challenge: "Diseñar una separación modular con Next.js App Router (Frontend) y NestJS/Node.js (Backend) utilizando TypeScript en ambos lados para compartir tipado estricto.",
      solutionCode: `// Carpeta: src/shared/types/workspace.ts
export interface WorkspaceDTO {
  id: string;
  name: string;
  createdAt: Date;
  status: 'active' | 'archived';
}

// Frontend consume la interfaz tipada directamente
const getWorkspace = async (id: string): Promise<WorkspaceDTO> => {
  const res = await fetch(\`/api/workspaces/\${id}\`);
  return res.json();
};`,
      metrics: [
        "Reusabilidad de componentes del frontend aumentada en un 60%.",
        "Mantenibilidad mejorada y modularidad estricta entre capas.",
        "Facilidad para agregar nuevas APIs en menos de 24 horas.",
      ],
    },
    {
      id: "deploys",
      category: "DEPLOYS",
      title: "Optimización de Tiempos de Build e Imagen de Producción",
      command: "cat deploy_performance_tuning.log",
      overview: "Tiempos de compilación en el pipeline de CI/CD de más de 8 minutos, retrasando integraciones continuas y encareciendo los costes de infraestructura.",
      challenge: "Configurar almacenamiento en caché de dependencias en GitHub Actions, habilitar la compilación Standalone de Next.js y limpiar imports muertos.",
      solutionCode: `# Paso de caché en GitHub Actions (.github/workflows/deploy.yml)
- name: Cache Node Modules & Next.js Build
  uses: actions/cache@v3
  with:
    path: |
      ~/.npm
      \${{ github.workspace }}/.next/cache
    key: \${{ runner.os }}-nextjs-\${{ hashFiles('**/package-lock.json') }}-\${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
    restore-keys: |
      \${{ runner.os }}-nextjs-\${{ hashFiles('**/package-lock.json') }}-`,
      metrics: [
        "Tiempo de despliegue en CI/CD reducido de 8m a 2.5m.",
        "Reducción en costes de servidores y cómputo de despliegues de un 55%.",
        "Imagen de producción final minimizada a través de Next Standalone build.",
      ],
    },
  ];

  const handleToggle = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="casos" className="py-24 relative overflow-hidden bg-black/20">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-violet-electric/3 blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3 mb-16 text-center"
        >
          <h2 className="text-sm font-mono tracking-widest text-pink-neon uppercase">
            Casos de Uso
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Casos Técnicos & Soluciones de Ingeniería
          </h3>
          <div className="h-[2px] w-12 bg-gradient-to-r from-pink-neon to-cyan-bright mx-auto mt-4" />
        </motion.div>

        {/* Terminal Window Wrapper */}
        <div className="glassmorphism rounded-2xl overflow-hidden shadow-2xl border border-white/10">
          
          {/* Terminal Title Bar */}
          <div className="bg-[#050508]/90 border-b border-white/10 px-5 py-3.5 flex items-center justify-between font-mono text-xs text-gray-400 select-none">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <span className="ml-2 text-[11px] text-gray-500 hidden sm:inline">|</span>
              <span className="flex items-center text-cyan-bright text-[11px]">
                <Terminal size={12} className="mr-1.5" />
                terminal@marcelolencina.dev:~
              </span>
            </div>
            <span className="text-[10px] text-gray-600 font-semibold">BASH - UTF-8</span>
          </div>

          {/* Terminal Content (Accordion Items) */}
          <div className="bg-[#030303]/95 p-4 md:p-6 space-y-4">
            
            {cases.map((item) => {
              const isOpen = activeId === item.id;

              return (
                <div
                  key={item.id}
                  className={`border ${
                    isOpen ? "border-cyan-bright/20 bg-white/[0.01]" : "border-white/5 bg-transparent"
                  } rounded-xl overflow-hidden transition-colors duration-300`}
                >
                  {/* Collapsed Header / Shell Prompt */}
                  <button
                    onClick={() => handleToggle(item.id)}
                    className="w-full flex items-center justify-between p-4 font-mono text-left focus:outline-none select-none text-xs md:text-sm hover:bg-white/[0.02] transition-colors"
                  >
                    <div className="flex items-center space-x-3 overflow-hidden">
                      <span className="text-gray-600">$</span>
                      <span className="text-gray-500 font-bold text-[10px] bg-white/5 px-2 py-0.5 rounded border border-white/5 shrink-0">
                        {item.category}
                      </span>
                      <span className="text-white font-semibold truncate">
                        {item.title}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2 shrink-0">
                      <span className="text-[11px] text-gray-600 hidden md:inline">
                        {item.command}
                      </span>
                      {isOpen ? (
                        <ChevronDown size={16} className="text-cyan-bright" />
                      ) : (
                        <ChevronRight size={16} className="text-gray-500" />
                      )}
                    </div>
                  </button>

                  {/* Expanded documentation output */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 pt-0 border-t border-white/5 space-y-6 text-sm font-light">
                          
                          {/* Overview & Challenge */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <span className="text-xs font-mono font-bold text-cyan-bright uppercase tracking-wider block">
                                [01] Contexto / Problema
                              </span>
                              <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                                {item.overview}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <span className="text-xs font-mono font-bold text-pink-neon uppercase tracking-wider block">
                                [02] El Desafío
                              </span>
                              <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                                {item.challenge}
                              </p>
                            </div>
                          </div>

                          {/* Code / Solution Block */}
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2 text-xs font-mono text-gray-500">
                              <Code size={12} className="text-violet-electric" />
                              <span>Implementación de Solución</span>
                            </div>
                            <pre className="p-4 rounded-lg bg-black text-gray-300 font-mono text-[10px] md:text-xs overflow-x-auto border border-white/5 leading-relaxed">
                              <code>{item.solutionCode}</code>
                            </pre>
                          </div>

                          {/* Metrics List */}
                          <div className="space-y-3 pt-2">
                            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                              [03] Métricas Obtenidas
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {item.metrics.map((metric, mIdx) => (
                                <div
                                  key={mIdx}
                                  className="flex items-start space-x-2 bg-white/[0.02] border border-white/5 p-3 rounded-lg"
                                >
                                  <Check size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                                  <span className="text-gray-400 text-xs leading-relaxed">
                                    {metric}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}
