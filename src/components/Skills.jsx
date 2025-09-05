import React from "react";
import SectionTitle from "./SectionTitle";

const groups = [
  { title: "Languages", items: ["C", "Java", "Python", "Dart", "JavaScript", "SQL", "R"] },
  { title: "Frameworks", items: ["React", "Node.js", "Express", "Bootstrap", "Flutter"] },
  { title: "Databases/Cloud", items: ["MongoDB", "MySQL", "Cloudinary"] },
  { title: "Tools", items: ["VS Code", "Git", "GitHub", "Jupyter", "Android Studio", "Jenkins", "Docker"] },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle>Skills</SectionTitle>
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {groups.map((g) => (
          <div
            key={g.title}
            className="card bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-gray-100">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs sm:text-sm px-3 py-1 rounded-full font-medium hover:bg-blue-200 dark:hover:bg-blue-600 transition-colors duration-300 cursor-default"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
