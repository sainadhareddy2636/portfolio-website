import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  FaTrophy,
  FaCode,
  FaMedal,
  FaLightbulb,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy size={28} />,
    title: "GATE DA 2026",
    value: "AIR 649",
    description:
      "Qualified GATE in Data Science & Artificial Intelligence.",
    color: "text-yellow-500",
  },

  {
    icon: <FaCode size={28} />,
    title: "Competitive Coding",
    value: "200+ Problems",
    description:
      "Solved coding problems across competitive programming platforms.",
    color: "text-blue-500",
  },

  {
    icon: <FaTrophy size={28} />,
    title: "QuizZone",
    value: "Winner ×2",
    description:
      "Won two consecutive editions organized by Siddartha Group of Institutions.",
    color: "text-green-500",
  },

  {
    icon: <FaMedal size={28} />,
    title: "Math Olympiad",
    value: "State Runner-Up",
    description:
      "Secured 2nd place among 500+ participants.",
    color: "text-purple-500",
  },

  {
    icon: <FaMedal size={28} />,
    title: "Quiz Expo",
    value: "2nd Place",
    description:
      "State-level competition organized by the Government of Telangana.",
    color: "text-pink-500",
  },

  {
    icon: <FaLightbulb size={28} />,
    title: "Hackathons",
    value: "Active Participant",
    description:
      "Regularly participate in hackathons and innovation challenges.",
    color: "text-orange-500",
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      // className="relative py-14 bg-gray-50 dark:bg-[#050F24] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <SectionTitle>Achievements</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                bg-white
                dark:bg-gray-800
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
                className={`flex justify-center mb-4 ${achievement.color}`}
              >
                {achievement.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {achievement.title}
              </h3>

              <p
                className={`mt-2 font-semibold text-lg ${achievement.color}`}
              >
                {achievement.value}
              </p>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}