import { useState } from "react";
import { motion } from "motion/react";
import { SKILLSETS } from "../data/projects";
import { Database, LineChart, Cpu, FileSpreadsheet } from "lucide-react";

interface AboutProps {
  selectedSkill: string | null;
  onSkillSelect: (skill: string | null) => void;
}

export default function About({ selectedSkill, onSkillSelect }: AboutProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getSkillIcon = (skill: string) => {
    switch (skill.toLowerCase()) {
      case "power bi":
        return <LineChart className="w-4 h-4 text-primary" />;
      case "python":
        return <Cpu className="w-4 h-4 text-primary" />;
      case "sql":
        return <Database className="w-4 h-4 text-primary" />;
      case "excel":
        return <FileSpreadsheet className="w-4 h-4 text-primary" />;
      default:
        return <Database className="w-4 h-4 text-primary" />;
    }
  };

  const getSkillDescription = (skill: string) => {
    switch (skill.toLowerCase()) {
      case "power bi":
        return "Advanced dashboarding, interactive data storytelling, complex DAX formulation, ETL data transformation with Power Query (M language).";
      case "python":
        return "Exploratory data analysis, machine learning pipelines, predictive modeling, and feature engineering using Pandas, NumPy, and Scikit-Learn.";
      case "sql":
        return "Querying relational databases, data extraction for ad-hoc analysis, database schema management, and data auditing to ensure data integrity.";
      case "excel":
        return "Data consolidation, statistical analysis, advanced data manipulation, and building structured models to support business forecasting.";
      default:
        return "";
    }
  };

  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="w-full space-y-16">
          {/* Main Bio Area */}
          <div className="space-y-8 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-7xl font-black tracking-tighter italic"
            >
              About <span className="text-primary font-normal not-italic">Me</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-xl md:text-2.5xl text-slate-400 leading-relaxed font-light"
            >
              Data Analyst with 3 years of experience transforming workforce and operational data into actionable insights that drive corporate efficiency. Proficient in SQL, Python and Power BI for querying relational databases, building interactive dashboards, optimizing reporting processes, and developing predictive analytics solutions. Proven track record of optimizing resource allocation and supporting strategic decision-making with data analytics skills.
            </motion.p>
          </div>

          {/* Skillsets Section */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-100 italic">
              My <span className="text-primary font-normal not-italic">Skillsets</span>
            </h3>

            <div className="flex flex-wrap gap-4 font-mono">
              {SKILLSETS.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <button
                    key={skill}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    onClick={() => onSkillSelect(isSelected ? null : skill)}
                    className={`px-6 py-3 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                      isSelected
                        ? "border-primary bg-primary/20 text-white shadow-[0_0_20px_rgba(167,139,250,0.3)]"
                        : "border-primary/10 text-slate-300 bg-[#120a1f]/80 hover:border-primary/45 hover:text-white hover:bg-[#1a0f2e]"
                    }`}
                    id={`skill-tag-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {getSkillIcon(skill)}
                    <span className="font-semibold">{skill}</span>
                  </button>
                );
              })}
            </div>

            {/* Micro-interaction detail box for selected or hovered skill */}
            <div className="h-24 max-w-2xl relative overflow-hidden">
              {(hoveredSkill || selectedSkill) && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-4 rounded-xl border-l-2 border-l-primary border border-y-primary/10 border-r-primary/10 bg-[#140b24]/40 backdrop-blur-md shadow-[0_4px_20px_rgba(167,139,250,0.05)]"
                  id="skill-details-box"
                >
                  <p className="font-mono text-[10px] uppercase text-primary tracking-widest font-black mb-1.5 flex items-center gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
                    {hoveredSkill || selectedSkill} Focus
                  </p>
                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {getSkillDescription(hoveredSkill || selectedSkill || "")}
                  </p>
                </motion.div>
              )}
              {!hoveredSkill && !selectedSkill && (
                <p className="text-slate-500 text-xs font-mono tracking-wider italic pt-2.5">
                  * Click or hover a skillset above to reveal technical competencies.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
