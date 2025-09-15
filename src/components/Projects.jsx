import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import SectionTitle from "./SectionTitle"; // adjust path if needed

const projects = [
  {
    name: "ReCa – Cart for Reusables",
    desc: "Campus marketplace for students to buy/sell reusable items. 100+ registrations, 50+ transactions.",
    stack: ["NodeJS", "Express", "MongoDB", "Cloudinary"],
    live: "https://reca-21ve.onrender.com/reca",
    code: "https://github.com/sainadhareddy2636/RTP_RECA.git",
  },
    {
    name: "Health-Insurance-Claim-Prediction",
    desc: "Built a machine learning web application that predicts the expected health insurance claim amount for individuals based on personal attributes like age, BMI, smoking habits, and region.",
    stack: ["Python"," Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"," Flask"," HTML"," CSS"],
    live: "https://health-insurance-claimprediction.streamlit.app/",
    code: "https://github.com/sainadhareddy2636/Health-Insurance-Claim-Prediction.git",
  },
  {
    name: "🎮 Multi-Game Hub",
    desc: "A sleek web platform featuring fun logic and puzzle games like Sudoku, Memory Game , 2048, and more — all in one place.",
    stack: ["ReactJS","NodeJS","ExpressJS","MongoDB","Material UI"],
    live: "https://multigamehub.netlify.app/",
    code: "https://github.com/sainadhareddy2636/multi-game-hub.git",
  }

];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle>Projects</SectionTitle>

      <div className="flex justify-center">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">{p.name}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="bg-blue-100 dark:bg-blue-700 text-blue-800 dark:text-blue-200 text-xs sm:text-sm px-2 py-1 rounded-full font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex gap-3 justify-center sm:justify-start">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300 shadow"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
                {p.code && (
                  <a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700 dark:bg-gray-600 text-white font-semibold hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-300 shadow"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
