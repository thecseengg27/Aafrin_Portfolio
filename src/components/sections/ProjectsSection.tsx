import { motion, Variants } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with real-time inventory, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description: "Real-time messaging app with AI-powered responses and sentiment analysis.",
    tags: ["Next.js", "OpenAI", "Socket.io", "PostgreSQL"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with Kanban boards and team features.",
    tags: ["Vue.js", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Portfolio Generator",
    description: "Dynamic portfolio builder with customizable templates and real-time preview.",
    tags: ["React", "TypeScript", "Prisma"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Music Streaming App",
    description: "Spotify-like music player with playlists, recommendations, and social features.",
    tags: ["React Native", "GraphQL", "AWS"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Crypto Dashboard",
    description: "Real-time cryptocurrency tracker with portfolio management and alerts.",
    tags: ["Vue.js", "Chart.js", "WebSocket"],
    github: "#",
    live: "#",
    featured: false,
  },
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const ProjectsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto w-full"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            A collection of my best work showcasing various technologies and creative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="glass-card-hover h-full overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30"
                  />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 flex items-center gap-1 glass-card px-3 py-1 rounded-full">
                      <Star className="w-3 h-3 text-accent" fill="currentColor" />
                      <span className="text-xs font-mono">Featured</span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass-card rounded-full text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 glass-card rounded-full text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono bg-muted rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur-xl -z-10"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
