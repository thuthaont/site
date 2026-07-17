import { useEffect } from "react";
import { Project } from "../types";
import { motion, AnimatePresence } from "motion/react";
import { X, Code } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md">
        {/* Backdrop closer click */}
        <div className="absolute inset-0 cursor-default" onClick={onClose}></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full max-w-4xl bg-[#0f091c]/95 border border-primary/25 rounded-3xl p-6 sm:p-10 overflow-hidden glass shadow-[0_0_50px_rgba(167,139,250,0.25)] z-10 max-h-[90vh] overflow-y-auto"
          id="project-modal-container"
        >
          {/* Lavender glow overlay inside */}
          <div className="absolute -top-40 -left-40 w-96 h-96 lavender-leak rounded-full blur-[140px] opacity-50 pointer-events-none"></div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 text-slate-400 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 rounded-full transition-all duration-300 z-20 cursor-pointer"
            id="close-modal-button"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 pt-4">
            
            {/* Project Image Column */}
            <div className="flex flex-col gap-5">
              {/* Image 2 */}
              <div className="w-full aspect-[16/9] rounded-2xl bg-black/80 border border-primary/10 relative overflow-hidden flex items-center justify-center group shadow-inner">
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-10"></div>
                <img
                  src={project.image2 || project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Image 3 */}
              {project.image3 && (
                <div className="w-full aspect-[16/9] rounded-2xl bg-black/80 border border-primary/10 relative overflow-hidden flex items-center justify-center group shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image3}
                    alt={`${project.title} view 2`}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            {/* Content, Description & CTA Column */}
            <div className="flex flex-col justify-between space-y-8">
              <div className="space-y-5">
                <span className="inline-block bg-primary/10 border border-primary/30 px-3.5 py-1 rounded-full text-[9px] uppercase font-bold tracking-[0.25em] font-mono text-primary shadow-[0_2px_8px_rgba(167,139,250,0.15)]">
                  {project.category}
                </span>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight">
                  {project.title}
                </h2>

                <div 
                  className="text-slate-300 text-sm font-light leading-relaxed whitespace-pre-line space-y-3 project-description-content"
                  dangerouslySetInnerHTML={{ __html: project.extendedDescription || project.description }}
                />
              </div>

              {/* Call to Action Buttons */}
              <div className="flex pt-4">
                <a
                  href={project.collabUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3.5 rounded-xl bg-primary text-black font-mono text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(167,139,250,0.35)]"
                  id="modal-colab-button"
                >
                  <Code className="w-4 h-4" />
                  <span>Colab Code & Visualization</span>
                </a>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
