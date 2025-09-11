import React from "react";
import SectionTitle from "./SectionTitle";

const items = [
  "📊 Qualified GATE 2025 in both CS and DA — showcasing proficiency in Problem Solving, Machine Learning, Probability & Statistics, Databases, Data Structures, and Algorithms",
  "🏆 Winner in 2 consecutive editions of QuiZone organised by the Siddartha Group of Institutions",
  "🥈 Secured 2nd place in State-Level Quiz Expo, Government of Telangana (400+ participants)",
  "💡 Participated in Hackathons & Olympiads — Problem-solving & Innovation",
  "💻 Solved 250+ Coding Questions on various competitive programming platforms"
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
