import React from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import WhatIBring from "@/components/WhatIBring";
import TechStack from "@/components/TechStack";
import AiWorkflow from "@/components/AiWorkflow";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import TechnicalCases from "@/components/TechnicalCases";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <Hero />

      {/* About Me Section */}
      <AboutMe />

      {/* What I Bring Section */}
      <WhatIBring />

      {/* Technical Stack Section */}
      <TechStack />

      {/* AI Assistance Workflow Section */}
      <AiWorkflow />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Technical Cases Section */}
      <TechnicalCases />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
