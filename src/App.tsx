import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Contact from "./components/Contact";
import { PROJECTS } from "./data/projects";
import { Project } from "./types";
import { motion } from "motion/react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  // Smooth scroll helper
  const handleNavigate = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Check if a project is related to the selected skillset
  const isProjectRelatedToSkill = (project: Project, skill: string | null): boolean => {
    if (!skill) return true;
    const lowerSkill = skill.toLowerCase();
    const lowerTags = project.tags.map((t) => t.toLowerCase());

    if (lowerSkill === "python") {
      return lowerTags.includes("python") || lowerTags.includes("nlp");
    }
    if (lowerSkill === "sql") {
      return lowerTags.includes("sql");
    }
    if (lowerSkill === "power bi") {
      // Power BI is majorly interactive viz / analytics dashboarding
      return project.category.toLowerCase().includes("viz") || project.category.toLowerCase().includes("analysis");
    }
    if (lowerSkill === "excel") {
      // Excel is universal, but matches fintech / quantitative modeling
      return project.category.toLowerCase().includes("tech") || lowerTags.includes("sql");
    }
    return true;
  };

  return (
    <div className="bg-background-dark font-display text-slate-100 min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-black">
      {/* Visual background atmospheric noise texture */}
      <div className="fixed inset-0 noise z-40 pointer-events-none"></div>

      {/* Atmospheric glowing fluid background light leaks */}
      <div className="fixed -top-32 -left-32 w-96 h-96 lavender-leak rounded-full blur-[140px] opacity-40 pointer-events-none z-0"></div>
      <div className="fixed top-1/2 -right-48 w-[600px] h-[600px] lavender-leak rounded-full blur-[160px] opacity-35 pointer-events-none z-0"></div>
      <div className="fixed -bottom-48 left-1/3 w-96 h-96 lavender-leak rounded-full blur-[140px] opacity-25 pointer-events-none z-0"></div>

      {/* Navigation */}
      <Header onNavigate={handleNavigate} />

      {/* App Layout Sections */}
      <div className="relative z-10">
        
        {/* 1. Hero Section */}
        <Hero onExploreClick={() => handleNavigate("work")} />

        {/* 2. About Me Section */}
        <About selectedSkill={selectedSkill} onSkillSelect={setSelectedSkill} />

        {/* 3. Floating Projects Section */}
        <section className="py-32 px-6" id="work">
          <div className="max-w-7xl mx-auto">
            {/* Header description */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-primary/10 pb-8 gap-4">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-5xl md:text-7xl font-black mb-2 tracking-tighter text-slate-100"
                >
                  Projects
                </motion.h2>
                <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
                  Data modeling & visualization
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 font-mono">
                {selectedSkill && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setSelectedSkill(null)}
                    className="text-[10px] text-primary hover:text-white border border-primary/20 hover:border-primary/50 bg-[#1a0f2e] px-3 py-1.5 rounded-full uppercase tracking-widest cursor-pointer transition-all duration-300"
                  >
                    Clear Filter: {selectedSkill} ×
                  </motion.button>
                )}
                <span className="text-primary text-xs font-bold uppercase tracking-widest">
                  Selected Works / 2026
                </span>
              </div>
            </div>

            {/* Main Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
              {PROJECTS.map((project, index) => {
                const isRelated = isProjectRelatedToSkill(project, selectedSkill);
                const isDimmed = selectedSkill !== null && !isRelated;
                const isHighlighted = selectedSkill !== null && isRelated;

                return (
                  <div
                    key={project.id}
                    className={`transition-all duration-500 ${
                      index === 1 ? "lg:mt-12" : ""
                    }`}
                  >
                    <ProjectCard
                      project={project}
                      onSelect={setSelectedProject}
                      isHighlighted={isHighlighted}
                      isDimmed={isDimmed}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. Contact Form Section */}
        <Contact />

        {/* Footer */}
        <footer className="py-12 border-t border-primary/5 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-slate-600">
          <p>© 2026 Thao Nguyen.</p>
        </footer>
      </div>

      {/* Project Lightbox Detail Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
