import React, { useState, useRef } from "react";

export default function Footer() {
  const [hearts, setHearts] = useState([]);
  const heartRef = useRef(null);

  const handleHeartClick = () => {
    if (!heartRef.current) return;

    const rect = heartRef.current.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top;

    const id = Date.now();
    setHearts((prev) => [...prev, { id, x, y }]);

    setTimeout(() => {
      setHearts((prev) => prev.filter((heart) => heart.id !== id));
    }, 1000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-700 py-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base relative">
        Built with{" "}
        <b
          ref={heartRef}
          className="cursor-pointer select-none relative"
          onClick={handleHeartClick}
        >
          ❤️
        </b>{" "}
        by
        <span className="font-semibold text-gray-800 dark:text-gray-100">
          {" "}Busi Reddy Sainadha Reddy
        </span>
      </p>

      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="fixed text-pink-500 text-2xl animate-float pointer-events-none"
          style={{
            left: heart.x,
            top: heart.y,
          }}
        >
          ❤️
        </span>
      ))}

      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-80px) scale(1.5); opacity: 0; }
        }
        .animate-float {
          animation: floatUp 1s ease-out forwards;
        }
      `}</style>
    </footer>
  );
}
