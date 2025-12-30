import { motion, Variants } from "framer-motion";
import { FileDown, FileText, Sparkles } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const ResumeSection = () => {
  return (
    <section className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Download my resume to learn more about my experience and qualifications
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          {/* Resume card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass-card-hover p-12 rounded-3xl relative overflow-hidden"
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1), hsl(var(--accent) / 0.1))",
              }}
            />

            {/* Floating icons */}
            <motion.div
              animate={{ 
                y: [-10, 10, -10],
                rotate: [-5, 5, -5]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-8 left-8 text-primary/30"
            >
              <FileText className="w-16 h-16" />
            </motion.div>
            
            <motion.div
              animate={{ 
                y: [10, -10, 10],
                rotate: [5, -5, 5]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute bottom-8 right-8 text-secondary/30"
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 space-y-8">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="w-24 h-24 mx-auto glass-card rounded-2xl flex items-center justify-center"
              >
                <FileText className="w-12 h-12 text-primary" />
              </motion.div>

              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-2">
                  John Doe - Resume
                </h3>
                <p className="text-muted-foreground font-body">
                  Senior Full Stack Developer | 5+ Years Experience
                </p>
              </div>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow inline-flex items-center gap-3 px-8 py-4 bg-gradient-primary rounded-full font-display font-semibold text-primary-foreground text-lg"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </motion.a>

              <p className="text-sm text-muted-foreground font-mono">
                PDF • 2 Pages • Last Updated: January 2025
              </p>
            </div>
          </motion.div>

          {/* Glow effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-50 transition-opacity duration-500"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ResumeSection;
