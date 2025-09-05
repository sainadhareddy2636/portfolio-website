import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ children, id }) {
  return (
    <motion.div
      id={id}
      className="mb-8 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 relative inline-block">
        {children}
        <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full mt-1"></span>
      </h2>
    </motion.div>
  );
}
