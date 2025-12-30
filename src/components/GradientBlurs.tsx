import { motion } from "framer-motion";

const GradientBlurs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      <motion.div
        className="blur-gradient-1 top-[-10%] left-[-10%]"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blur-gradient-2 top-[50%] right-[-10%]"
        animate={{
          x: [0, -80, -40, 0],
          y: [0, -60, 30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="blur-gradient-3 bottom-[-10%] left-[30%]"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GradientBlurs;
