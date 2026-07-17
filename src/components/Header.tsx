import { useState } from "react";
import { TrendingUp, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "ABOUT ME", id: "about" },
    { label: "PROJECTS", id: "work" },
    { label: "CONTACT", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center glass px-6 py-3.5 rounded-full relative">
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="flex items-center gap-2.5 group cursor-pointer"
          id="logo-button"
        >
          <div className="bg-primary/15 p-1.5 rounded-lg border border-primary/20 transition-all duration-300 group-hover:scale-110">
            <TrendingUp className="text-primary w-5 h-5" />
          </div>
          <span className="font-display font-black tracking-tight text-xl text-slate-100 group-hover:text-primary transition-colors duration-300">
            Thao Nguyen
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 font-mono text-xs uppercase tracking-widest text-slate-400">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="hover:text-primary transition-colors duration-300 font-bold relative py-1 cursor-pointer"
              id={`nav-item-${item.id}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-primary hover:text-primary/80 transition-colors cursor-pointer"
          id="mobile-menu-toggle"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[110%] left-0 right-0 glass rounded-3xl p-6 flex flex-col gap-4 md:hidden"
              id="mobile-dropdown-menu"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="w-full text-left font-mono text-sm uppercase tracking-widest text-slate-300 hover:text-primary py-2.5 border-b border-primary/5 transition-colors cursor-pointer"
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
