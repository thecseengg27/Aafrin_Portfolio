import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Code, Mail, FileText, BookOpen, Link2 } from "lucide-react";

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
}

const navItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "About" },
  { icon: Briefcase, label: "Projects" },
  { icon: Code, label: "Skills" },
  { icon: FileText, label: "Resume" },
  { icon: BookOpen, label: "Articles" },
  { icon: Link2, label: "Profiles" },
  { icon: Mail, label: "Contact" },
];

const Navigation = ({ currentSection, onNavigate }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-500 ${
          scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50" : ""
        }`}
      >
        <div className="container mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-2xl font-display font-bold gradient-text-animated"
              whileHover={{ scale: 1.05 }}
            >
              PORTFOLIO
            </motion.div>
            
            <div className="flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  onClick={() => onNavigate(index)}
                  className={`relative px-4 py-2 rounded-full font-body text-sm transition-colors ${
                    currentSection === index
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentSection === index && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 border border-primary/30 rounded-full"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed top-4 right-4 z-50 md:hidden w-12 h-12 rounded-full glass-card flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="text-primary" /> : <Menu className="text-primary" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-72 z-40 md:hidden glass-card border-l border-border/50"
          >
            <div className="flex flex-col gap-2 p-8 pt-20">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    onNavigate(index);
                    setIsOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-body transition-all ${
                    currentSection === index
                      ? "bg-primary/20 text-primary border border-primary/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
