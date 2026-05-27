import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaTrophy,
} from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: <FaTrophy size={26} />,
      title: "GATE DS & AI",
      value: "AIR 649",
      description:
        "Cleared GATE 2026 in Data Science & Artificial Intelligence.",
      color: "text-yellow-500",
    },
    {
      icon: <FaGraduationCap size={26} />,
      title: "Academics",
      value: "9+ CGPA",
      description:
        "Strong academic performance with solid CS fundamentals.",
      color: "text-green-500",
    },
    {
      icon: <FaLaptopCode size={26} />,
      title: "Full-Stack Projects",
      value: "MERN Stack",
      description:
        "Built scalable web applications with authentication, APIs and cloud deployment.",
      color: "text-blue-500",
    },
    {
      icon: <FaBrain size={26} />,
      title: "AI Applications",
      value: "GenAI & RAG",
      description:
        "Developed AI-powered solutions using vector embeddings and Generative AI.",
      color: "text-purple-500",
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative py-24 bg-gray-50 dark:bg-[#050F24] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionTitle>About Me</SectionTitle>

        <div className="max-w-4xl mx-auto text-center mt-10">
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Busi Reddy Sainadha Reddy
            </span>
            , a Computer Science graduate focused on building{" "}
            <span className="font-semibold text-purple-500">
              full-stack and AI-powered applications
            </span>{" "}
            that solve real-world problems.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            My work includes scalable web platforms, secure backend systems,
            AI-driven applications and cloud-deployed solutions.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Notable projects include{" "}
            <span className="font-semibold text-blue-500">
              ReCa
            </span>
            , a campus marketplace with 100+ users and 50+ successful
            transactions, an AI-powered PDF Assistant built using vector
            embeddings and Generative AI, and a secure video processing and
            streaming platform.
          </p>

          <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm currently seeking opportunities in Software Development,
            Full-Stack Engineering and Backend Development where I can
            contribute to impactful products while continuing to grow as an
            engineer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {cards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8 }}
              className="
                bg-white dark:bg-gray-800
                rounded-2xl
                p-6
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                text-center
              "
            >
              <div
                className={`flex justify-center mb-4 ${card.color}`}
              >
                {card.icon}
              </div>

              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                {card.title}
              </h3>

              <p className={`font-semibold mt-1 ${card.color}`}>
                {card.value}
              </p>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}