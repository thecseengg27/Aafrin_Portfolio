import { motion, Variants } from "framer-motion";
import { Github, ExternalLink, Trophy, Star, Code } from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "@johndoe",
    icon: Github,
    stats: "2.5k+ Stars",
    description: "Open source contributions and personal projects",
    link: "#",
    color: "primary",
  },
  {
    name: "LeetCode",
    username: "johndoe",
    icon: Code,
    stats: "500+ Problems",
    description: "Data structures & algorithms practice",
    link: "#",
    color: "secondary",
  },
  {
    name: "SkillRack",
    username: "johndoe123",
    icon: Trophy,
    stats: "Top 1%",
    description: "Competitive programming achievements",
    link: "#",
    color: "accent",
  },
  {
    name: "CodePen",
    username: "@johndoe",
    icon: Star,
    stats: "100+ Pens",
    description: "Creative coding experiments and UI demos",
    link: "#",
    color: "primary",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100,
    },
  },
};

const ProfilesSection = () => {
  return (
    <section className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            My presence across various coding platforms
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group glass-card-hover p-6 rounded-2xl flex gap-6 cursor-pointer"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 glass-card rounded-xl flex items-center justify-center text-${profile.color} group-hover:bg-${profile.color}/10 transition-colors`}
              >
                <profile.icon className="w-8 h-8" />
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm font-mono text-primary mb-2">{profile.username}</p>
                <p className="text-muted-foreground font-body text-sm mb-3">
                  {profile.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full">
                  <Star className="w-3 h-3 text-accent" />
                  <span className="text-xs font-mono">{profile.stats}</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProfilesSection;
