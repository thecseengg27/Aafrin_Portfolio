import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const AboutSection = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Tech Stack" },
  ];

  const info = [
    { icon: MapPin, label: "San Francisco, CA" },
    { icon: Calendar, label: "Available for hire" },
    { icon: Briefcase, label: "Senior Developer" },
    { icon: GraduationCap, label: "CS Graduate" },
  ];

  return (
    <section className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            A passionate developer dedicated to creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="relative z-10">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card-hover p-8 rounded-3xl"
              >
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-conic from-primary via-secondary to-accent opacity-20"
                  />
                  <div className="text-9xl font-display font-black gradient-text z-10">JD</div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card p-4 rounded-2xl"
            >
              <Heart className="w-8 h-8 text-accent" fill="currentColor" />
            </motion.div>
          </motion.div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-display font-bold">
                Building the Future, <span className="text-primary">One Line at a Time</span>
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                I'm a full-stack developer with a passion for creating beautiful, functional,
                and user-centered digital experiences. With 5+ years of experience in the field,
                I've worked with startups and enterprises to bring their visions to life.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed">
                My expertise spans across modern web technologies including React, Node.js,
                TypeScript, and cloud platforms. I believe in writing clean, maintainable code
                and staying updated with the latest industry trends.
              </p>
            </motion.div>

            {/* Info cards */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
              {info.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 glass-card p-4 rounded-xl"
                >
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-4 gap-4">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-display font-bold text-primary text-glow">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
