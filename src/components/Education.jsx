import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  {
    degree: "B.Tech Computer Science & Engineering",
    institution: "JNTUH-UCESTH, Hyderabad",
    score: "CGPA 9.13",
    year: "2022 – 2026",
    status: "Final Year",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College, Hyderabad",
    score: "97.8%",
    year: "2019 – 2021",
  },
  {
    degree: "SSC (10th)",
    institution: "The Laurel High School, Karimnagar",
    score: "CGPA 10.0",
    year: "2019",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      // className="py-14 bg-gray-50 dark:bg-[#050F24]"
    >
      <SectionTitle>Education</SectionTitle>

      <div className="container mx-auto max-w-5xl px-6 mt-10">
        <div className="relative border-l border-blue-500/30 ml-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative mb-8 ml-8"
            >
              {/* Timeline Dot */}
              <span
                className="
                  absolute
                  -left-[37px]
                  top-5
                  w-3
                  h-3
                  rounded-full
                  bg-blue-500
                  border-4
                  border-white
                  dark:border-[#050F24]
                "
              />

              <div
                className="
                  bg-white
                  dark:bg-gray-800
                  rounded-2xl
                  p-4
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="flex flex-wrap justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FaGraduationCap className="text-blue-500" />
                      {edu.degree}
                    </h3>

                    <p className="mt-1 text-gray-600 dark:text-gray-300">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className="
                        inline-block
                        px-3 py-1
                        rounded-full
                        text-sm
                        font-semibold
                        bg-blue-500/15
                        text-blue-500
                      "
                    >
                      {edu.score}
                    </span>

                    {edu.status && (
                      <div className="mt-2">
                        <span
                          className="
                            inline-block
                            px-3 py-1
                            rounded-full
                            text-xs
                            font-medium
                            bg-green-500/15
                            text-green-500
                          "
                        >
                          {edu.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  {edu.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}