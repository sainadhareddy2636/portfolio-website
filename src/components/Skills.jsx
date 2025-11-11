import React from "react";
import SectionTitle from "./SectionTitle";

const groups = [
  { 
    title: "Languages", 
    items: ["Java", "Python", "R", "SQL", "C"] 
  },

  { 
    title: "Web Development",
    items: {
      Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Tailwind CSS"],
      Backend: ["Node.js", "Express.js"],
      Databases: ["MongoDB", "MySQL"]
    }
  },

  { 
    title: "Tools", 
    items: ["VS Code", "Git", "GitHub", "Jupyter Notebook", "Android Studio", "Jenkins", "Docker"] 
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle>Skills</SectionTitle>

      <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {groups.map((g) => (
          <div
            key={g.title}
            className="card bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="font-bold text-xl mb-4 text-gray-900 dark:text-gray-100">
              {g.title}
            </h3>
            {Array.isArray(g.items) && (
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs sm:text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300"
                  >
                    {i}
                  </span>
                ))}
              </div>
            )}
            {!Array.isArray(g.items) && (
              <div className="space-y-3">
                {Object.entries(g.items).map(([category, list]) => (
                  <div key={category}>
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-300 mb-1">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {list.map((skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs sm:text-sm px-3 py-1 rounded-full font-medium transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        ))}

      </div>
    </section>
  );
}
