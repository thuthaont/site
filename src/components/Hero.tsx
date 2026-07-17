import { motion } from "motion/react";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative pt-44 pb-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="max-w-5xl space-y-8 relative z-10 w-full">
        {/* Category Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block"
        >
          <div className="px-5 py-2 glass rounded-full border border-primary/20 text-primary font-mono text-[10px] font-bold uppercase tracking-[0.25em] mb-4">
            Data Analyst
          </div>
        </motion.div>

        {/* Catchy Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl md:text-3.5xl font-light tracking-wider text-slate-400 mb-6 italic"
        >
          Decoding <span className="text-primary font-normal">Patterns</span>. Designing <span className="text-primary font-normal">Insights</span>.
        </motion.h2>

        {/* Hero Huge Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-4xl mx-auto my-8 select-none"
        >
          <h1 className="text-7xl sm:text-8xl md:text-[9.5rem] font-black tracking-tighter leading-[0.85] text-slate-100 italic w-full flex flex-col">
            <div className="text-left w-full pl-4 md:pl-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-indigo-400 drop-shadow-[0_0_30px_rgba(167,139,250,0.3)]">
                Thao
              </span>
            </div>
            <div className="text-right w-full pr-4 md:pr-12 mt-2">
              <span className="text-white drop-shadow-[0_0_35px_rgba(255,255,255,0.18)]">
                Nguyen
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Persona Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed px-4"
        >
          A professional with 3 years of experience in workforce management holding a strong desire for data analytics.
        </motion.p>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-10 flex flex-col items-center justify-center gap-4 font-mono text-xs uppercase tracking-wider"
        >
          <button
            onClick={onExploreClick}
            className="bg-primary hover:bg-white text-black px-12 py-5 rounded-full font-mono font-bold tracking-widest transition-all duration-300 w-full sm:w-auto hover:scale-105 hover:shadow-[0_0_40px_rgba(167,139,250,0.45)] cursor-pointer"
            id="explore-work-button"
          >
            EXPLORE MY WORK
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 font-mono text-[9px] tracking-[0.2em] pointer-events-none"
        >
          <span>SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 rounded-full bg-primary/60"
          />
        </motion.div>
      </div>
    </section>
  );
}
