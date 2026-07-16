"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Inicio", id: "inicio" },
  { label: "Sobre mí", id: "sobre-mi" },
  { label: "Stack", id: "stack" },
  { label: "Experiencia", id: "experiencia" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to detect active section
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Detect section in the middle of viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-[#030303]/60 backdrop-blur-md border-b border-white/5 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo / Brand */}
        <a
          href="#inicio"
          onClick={(e) => handleNavClick(e, "inicio")}
          className="group flex items-center space-x-2 font-mono text-xl font-bold tracking-tight text-white"
        >
          <span className="text-cyan-bright group-hover:text-violet-electric transition-colors duration-300">&lt;</span>
          <span>Marcelo.L</span>
          <span className="text-cyan-bright group-hover:text-violet-electric transition-colors duration-300">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 glassmorphism-light rounded-full px-2 py-1.5 border border-white/5">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                activeSection === item.id
                  ? "text-cyan-bright"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {activeSection === item.id && (
                <span className="absolute inset-0 bg-white/5 rounded-full -z-10 border border-cyan-bright/10" />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="/cv_marcelo_lencina.pdf"
            download
            className="relative inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white overflow-hidden group transition-all duration-300 border border-cyan-bright/30 bg-black hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            {/* Hover sliding background */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-bright to-violet-electric opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <FileText size={16} className="text-cyan-bright group-hover:text-white transition-colors duration-300" />
            <span>Descargar CV</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glassmorphism border-b border-white/10 py-6 px-6 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-lg font-medium py-2 px-3 rounded-lg transition-colors ${
                activeSection === item.id
                  ? "text-cyan-bright bg-white/5"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv_marcelo_lencina.pdf"
            download
            className="w-full text-center inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-lg text-base font-medium text-white border border-cyan-bright/30 bg-gradient-to-r from-cyan-bright/10 to-violet-electric/10 hover:from-cyan-bright hover:to-violet-electric hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] transition-all duration-300"
          >
            <FileText size={18} />
            <span>Descargar CV</span>
          </a>
        </div>
      )}
    </header>
  );
}
