import { motion } from "motion/react";
import { Share2, Code, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-6 relative" id="contact">
      <div className="max-w-3xl mx-auto relative">
        {/* Decorative Blur Circle */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="bg-[#120a21]/50 border border-primary/20 p-6 sm:p-10 rounded-3xl relative z-10 overflow-hidden backdrop-blur-xl shadow-[0_20px_50px_rgba(167,139,250,0.08)]">
          <div className="flex flex-col items-center text-center space-y-5">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-black italic tracking-tighter leading-tight text-slate-100"
            >
              Let's decode the <span className="text-primary font-normal not-italic">next</span> big thing.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-slate-400 font-light text-sm sm:text-base max-w-md"
            >
              Please do reach out to one of these below contacts.
            </motion.p>

            {/* Main Interactive Contact Controls */}
            <div className="w-full max-w-xl pt-2">
              <div
                className="flex flex-wrap justify-center gap-5 sm:gap-6"
                id="social-buttons-container"
              >
                <a
                  href="https://www.linkedin.com/in/thuthaont"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 flex flex-col items-center justify-center rounded-2xl bg-[#0f091c]/80 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  id="linkedin-link-button"
                >
                  <Share2 className="text-primary w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-[9px] mt-2 text-slate-400 font-mono tracking-widest font-bold group-hover:text-primary transition-colors">
                    LINKEDIN
                  </span>
                </a>

                <a
                  href="https://github.com/thuthaont/Data-Analyst-Portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-24 h-24 flex flex-col items-center justify-center rounded-2xl bg-[#0f091c]/80 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  id="github-link-button"
                >
                  <Code className="text-primary w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-[9px] mt-2 text-slate-400 font-mono tracking-widest font-bold group-hover:text-primary transition-colors">
                    GITHUB
                  </span>
                </a>

                <a
                  href="mailto:thaont.w@gmail.com"
                  className="w-24 h-24 flex flex-col items-center justify-center rounded-2xl bg-[#0f091c]/80 border border-primary/10 hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(167,139,250,0.25)] transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  id="email-link-button"
                >
                  <Mail className="text-primary w-6 h-6 transition-transform group-hover:scale-110" />
                  <span className="text-[9px] mt-2 text-slate-400 font-mono tracking-widest font-bold group-hover:text-primary transition-colors">
                    EMAIL
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Outer Shadow Layer Element */}
        <div className="absolute -bottom-4 -right-4 inset-0 bg-primary/5 rounded-3xl -z-10 translate-x-2 translate-y-2 pointer-events-none"></div>
      </div>
    </section>
  );
}
