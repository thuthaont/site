import { Project } from "../types";
import { motion } from "motion/react";
import { Code } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  isHighlighted: boolean;
  isDimmed: boolean;
}

export default function ProjectCard({
  project,
  onSelect,
  isHighlighted,
  isDimmed,
}: ProjectCardProps) {
  return (
    <motion.div
      onClick={() => onSelect(project)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`group relative rounded-3xl p-5 transition-all duration-500 cursor-pointer flex flex-col justify-between h-full bg-[#120a1f]/40 border backdrop-blur-md hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(167,139,250,0.12)] ${
        isHighlighted
          ? "border-primary/80 ring-2 ring-primary/20 shadow-[0_0_30px_rgba(167,139,250,0.2)]"
          : isDimmed
          ? "opacity-30 filter grayscale scale-[0.98] pointer-events-none"
          : "border-primary/10 hover:border-primary/40"
      }`}
      id={`project-card-${project.id}`}
    >
      <div>
        {/* Project Thumbnail Image Container */}
        <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-950 relative border border-primary/10">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0806] via-transparent to-transparent opacity-80 z-10"></div>
          <img
            className="w-full h-full object-cover opacity-75 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700 ease-out"
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-black/85 backdrop-blur-md px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-[0.2em] font-mono text-primary border border-primary/25 shadow-sm">
              {project.category}
            </span>
          </div>
        </div>

        {/* Project Title and Brief Description */}
        <h3 className="text-2.5xl font-extrabold mb-2.5 tracking-tight text-slate-100 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-5 leading-relaxed font-light">
          {project.subtitle}
        </p>

        {/* Dynamic Project Tags */}
        <div className="flex flex-wrap gap-2 mb-6 font-mono text-[9px]">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-primary/20 px-3 py-1 rounded-full text-primary uppercase font-bold bg-primary/5 transition-colors duration-300 group-hover:border-primary/40 group-hover:bg-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Primary Call-to-Actions */}
      <div>
        <div className="flex justify-center mt-2 pt-4 border-t border-primary/5">
          <a
            href={project.collabUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full text-center px-4 py-3 rounded-xl border border-primary/25 text-primary bg-primary/5 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(167,139,250,0.05)] hover:shadow-[0_4px_20px_rgba(167,139,250,0.25)]"
            id={`project-colab-link-${project.id}`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>Colab Code & Visualization</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
