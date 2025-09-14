import React from "react";
import SectionTitle from "./SectionTitle";

const items = [
  "📊 Qualified GATE 2025 in both CS and DA — Demonstrated proficiency in Problem Solving, Machine Learning, Probability & Statistics, Databases, Data Structures, and Algorithms",
  "🏆 Winner of 2 consecutive editions of QuiZone organized by the Siddartha Group of Institutions",
  "🥈 Runner-up (2nd place) in the State-Level Maths Olympiad (2017) — Competed with 500+ students and received the award on National Mathematics Day (Ramanujan’s Birthday)",
  "🥈 Secured 2nd place in the State-Level Quiz Expo organized by the Government of Telangana (400+ participants)",
  "💡 Actively participated in Hackathons & Olympiads — Showcasing skills in problem-solving and innovation",
  "💻 Solved 250+ coding problems on various competitive programming platforms"
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section py-16 bg-gray-50 dark:bg-gray-900"
    >
      <SectionTitle>Achievements</SectionTitle>

      <div className="container mx-auto max-w-3xl mt-8 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="card bg-white dark:bg-gray-800 dark:text-gray-200 rounded-xl shadow-lg p-4 hover:shadow-2xl transition-all duration-300"
          >
            <p className="text-sm sm:text-base">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
