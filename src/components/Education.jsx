import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "JNTUH-UCESTH, Hyderabad",
    details: "CGPA: 9.13 | Relevant Courses: AI, ML, Data Structures, Software Engineering",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Narayana Junior College, Hyderabad",
    details: "Percentage: 97.8%",
  },
  {
    degree: "Schooling (10th)",
    institution: "The Laurel High School, Karimnagar",
    details: "CGPA: 10",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle>Education</SectionTitle>

      <div className="container relative border-l-2 border-blue-400 dark:border-blue-300 ml-4 pl-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-8 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Circle marker */}
            <span className="absolute -left-4 top-1 w-3 h-3 bg-blue-400 dark:bg-blue-300 rounded-full border-2 border-white dark:border-gray-900 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors duration-300"></span>

            <div className="bg-white dark:bg-gray-800 rounded-md p-4 shadow-md group-hover:shadow-xl group-hover:scale-[1.02] transition-all duration-300">
              <h3 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors duration-300">
                {edu.degree}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {edu.institution}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.period}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {edu.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
