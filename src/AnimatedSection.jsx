import React from "react";
import { motion } from "framer-motion";

// 스크롤
function AnimatedSection({ children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{ marginBottom: "6rem" }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
