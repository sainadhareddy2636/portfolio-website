import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const groups = [
  {
    title: "Programming",
    items: ["Java", "Python", "JavaScript", "SQL"],
  },

  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },

  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
    ],
  },

  {
    title: "Databases",
    items: [
      "MongoDB",
      "MySQL",
    ],
  },

  {
    title: "AI Applications",
    items: [
      "Generative AI",
      "Vector Embeddings",
      "RAG",
    ],
  },

  {
    title: "Tools & Cloud",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
  },
];

const coreCS = [
  "DSA",
  "OOP",
  "DBMS",
  "Operating Systems",
  "Computer Networks",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-12 bg-gray-50 dark:bg-[#050F24] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle>Skills</SectionTitle>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              className="
                bg-white
                dark:bg-gray-800
                rounded-2xl
                p-5
                shadow-lg
                hover:shadow-xl
                transition-all
              "
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-3 py-1.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-gradient-to-r
                      from-blue-500/20
                      to-purple-500/20
                      border
                      border-blue-500/20
                      text-gray-700
                      dark:text-gray-200
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core CS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="
            mt-6
            text-center
            text-gray-700
            dark:text-gray-300
          "
        >
          <h4 className="font-semibold text-lg mb-3">
  Core CS Fundamentals
</h4>

          <div className="flex flex-wrap justify-center gap-2 mt-3">
            {coreCS.map((item) => (
              <span
                key={item}
                className="
                  px-3 py-1.5
                  rounded-full
                  text-xs
                  font-medium
                  bg-gradient-to-r
                  from-blue-500/20
                  to-purple-500/20
                  border
                  border-blue-500/20
                "
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}