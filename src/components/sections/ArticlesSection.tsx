import { motion, Variants } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Learn the best practices for building large-scale React applications with modern architecture patterns.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    tags: ["React", "Architecture"],
  },
  {
    title: "The Future of Web Development",
    excerpt: "Exploring emerging technologies and trends that will shape the future of web development.",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    tags: ["Web Dev", "Trends"],
  },
  {
    title: "Mastering TypeScript Generics",
    excerpt: "A deep dive into TypeScript generics and how to use them effectively in your projects.",
    date: "Jan 5, 2025",
    readTime: "10 min read",
    tags: ["TypeScript", "Tutorial"],
  },
  {
    title: "Optimizing Performance in Node.js",
    excerpt: "Tips and techniques for improving the performance of your Node.js applications.",
    date: "Dec 28, 2024",
    readTime: "7 min read",
    tags: ["Node.js", "Performance"],
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ArticlesSection = () => {
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
            Featured <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
            Thoughts, tutorials, and insights from my journey in tech
          </p>
        </motion.div>

        <div className="space-y-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group glass-card-hover p-6 md:p-8 rounded-2xl cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                {/* Left - Number */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 glass-card rounded-xl font-display text-2xl font-bold text-primary">
                  0{index + 1}
                </div>

                {/* Center - Content */}
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground font-body mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{article.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono">{article.readTime}</span>
                    </div>
                    <div className="flex gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Arrow */}
                <motion.div
                  className="hidden md:block"
                  animate={{ x: 0 }}
                  whileHover={{ x: 10 }}
                >
                  <ArrowRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div variants={itemVariants} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-8 py-4 glass-card rounded-full font-display font-semibold text-foreground border border-border/50"
          >
            View All Articles
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ArticlesSection;
