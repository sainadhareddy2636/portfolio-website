import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
        {new Date().getFullYear()} <span className="font-semibold text-gray-800 dark:text-gray-100">Busi Reddy Sainadha Reddy</span> • Built with ❤️  
      </p>
    </footer>
  );
}
