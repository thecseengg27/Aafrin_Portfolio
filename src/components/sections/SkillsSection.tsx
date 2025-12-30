import { motion, useInView, Variants } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const skills = [
  { name: "React / Next.js", level: 95, color: "primary" },
  { name: "TypeScript", level: 90, color: "secondary" },
  { name: "Node.js", level: 88, color: "accent" },
  { name: "Python", level: 85, color: "primary" },
  { name: "AWS / Cloud", level: 82, color: "secondary" },
  { name: "PostgreSQL / MongoDB", level: 87, color: "accent" },
  { name: "Docker / DevOps", level: 78, color: "primary" },
  { name: "UI/UX Design", level: 80, color: "secondary" },
];

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "GraphQL", icon: "◈" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Redis", icon: "🔴" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Git", icon: "📚" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedCounter = ({ value, inView }: { value: number; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 1500;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return <span>{count}%</span>;
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Technologies and tools I've mastered throughout my journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skill bars */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="font-mono text-primary">
                    <AnimatedCounter value={skill.level} inView={isInView} />
                  </span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech stack grid */}
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="glass-card-hover p-4 rounded-xl flex flex-col items-center gap-2 cursor-pointer"
                >
                  <span className="text-3xl">{tech.icon}</span>
                  <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
