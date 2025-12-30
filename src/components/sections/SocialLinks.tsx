import { motion, Variants } from "framer-motion";
import { Github, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const socials = [
  { name: "GitHub", icon: Github, link: "#", color: "hover:text-foreground" },
  { name: "LinkedIn", icon: Linkedin, link: "#", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, link: "#", color: "hover:text-sky-400" },
  { name: "YouTube", icon: Youtube, link: "#", color: "hover:text-red-500" },
  { name: "Instagram", icon: Instagram, link: "#", color: "hover:text-pink-500" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const SocialLinks = () => (
  <motion.footer
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="py-16 border-t border-border/30"
  >
    <div className="max-w-4xl mx-auto text-center px-4">
      <motion.p variants={itemVariants} className="text-muted-foreground font-body mb-8">
        Let's connect on social media
      </motion.p>
      <motion.div variants={itemVariants} className="flex justify-center gap-6">
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            whileHover={{ scale: 1.2, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className={`p-4 glass-card rounded-xl text-muted-foreground ${social.color} transition-colors`}
          >
            <social.icon className="w-6 h-6" />
          </motion.a>
        ))}
      </motion.div>
      <motion.p variants={itemVariants} className="text-sm text-muted-foreground font-mono mt-12">
        © 2025 John Doe. Built with passion.
      </motion.p>
    </div>
  </motion.footer>
);

export default SocialLinks;
