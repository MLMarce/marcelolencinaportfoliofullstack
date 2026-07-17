import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MechanicalFireflies from "@/components/MechanicalFireflies";

export const metadata: Metadata = {
  title: "Marcelo Lencina | Full Stack Developer & AI Integrator",
  description:
    "Desarrollador Full Stack moderno especializado en React, Next.js, TypeScript, Node.js y PostgreSQL. Optimizo flujos de desarrollo integrando herramientas avanzadas de IA.",
  keywords: [
    "Marcelo Lencina",
    "Full Stack Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Development",
    "TEMTECH Studio",
    "Node.js",
    "PostgreSQL",
    "Supabase",
    "Software Engineer",
  ],
  authors: [{ name: "Marcelo Lencina" }],
  creator: "Marcelo Lencina",
  openGraph: {
    title: "Marcelo Lencina | Full Stack Developer",
    description:
      "Diseño y desarrollo de aplicaciones web de alto rendimiento, optimizadas y aceleradas por flujos de inteligencia artificial.",
    type: "website",
    locale: "es_ES",
    siteName: "Marcelo Lencina Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcelo Lencina | Full Stack Developer",
    description:
      "Desarrollador Full Stack e Integrador de IA. React, Next.js, Node.js y PostgreSQL.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#030303",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark h-full scroll-smooth antialiased">
      <body className="min-h-full bg-dark-deep text-gray-100 font-sans selection:bg-cyan-bright/20 selection:text-cyan-bright flex flex-col relative">
        {/* Global Mechanical Fireflies Particle Background */}
        <MechanicalFireflies />

        {/* Global Fixed Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow z-10">{children}</main>
      </body>
    </html>
  );
}
