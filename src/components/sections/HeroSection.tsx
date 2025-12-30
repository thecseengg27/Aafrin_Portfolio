import { motion, Variants } from "framer-motion";
import { ChevronDown, Sparkles, Rocket, Award, Code2 } from "lucide-react";

interface HeroSectionProps {
  onScrollDown: () => void;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const HeroSection = ({ onScrollDown }: HeroSectionProps) => {
  return (
    <section className="section-container relative overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-5xl mx-auto relative z-10"
      >
        {/* Greeting badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">Welcome to my digital space</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black mb-6 leading-tight"
        >
          <span className="text-foreground">I'm </span>
          <span className="gradient-text-animated">John Doe</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl font-body text-muted-foreground mb-8"
        >
          <span className="text-primary">Full Stack Developer</span> & 
          <span className="text-secondary"> UI/UX Designer</span>
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-body text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technologies.
          Passionate about clean code, beautiful interfaces, and innovative solutions.
        </motion.p>

        {/* Achievement badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Code2, label: "500+ Commits", color: "text-primary" },
            { icon: Rocket, label: "50+ Projects", color: "text-secondary" },
            { icon: Award, label: "10+ Awards", color: "text-accent" },
          ].map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card-hover px-6 py-3 flex items-center gap-3"
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-mono text-sm">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-8 py-4 bg-gradient-primary rounded-full font-display font-semibold text-primary-foreground text-lg"
          >
            Hire Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-8 py-4 glass-card rounded-full font-display font-semibold text-foreground text-lg border border-border/50"
          >
            View Projects
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={onScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm font-mono">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
