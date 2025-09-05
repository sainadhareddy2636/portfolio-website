import React from "react";
import SectionTitle from "./SectionTitle";

const items = [
  "🥈 Runner-Up • State Level Quiz Expo (Govt. of Telangana)",
  "💡 Participated in Hackathons & Olympiads — Problem-solving & Innovation",
];

export default function Achievements() {
  return (
    <section id="achievements" className="section py-16 bg-gray-50 dark:bg-gray-900">
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
