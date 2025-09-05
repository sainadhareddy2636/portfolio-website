import { motion } from "framer-motion";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container relative py-28 grid md:grid-cols-2 items-center gap-12">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="leading-tight">
            <span className="text-xl sm:text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-300">
              Hi, I’m
            </span>
            <br />
            <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-400 drop-shadow-lg">
              Sainadha Reddy
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl">
            Full-Stack Developer • ML Enthusiast • CS Undergrad passionate about building impactful applications.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/Busi_Reddy_Sainadha_Reddy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaDownload /> Resume
            </a>

            <a
              href="https://github.com/sainadhareddy2636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://linkedin.com/in/busireddysainadhareddy1626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-blue-700 dark:text-blue-400 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-48 md:w-64 group">
            {/* Simple border */}
            <div className="absolute inset-0 rounded-3xl bg-gray-300 dark:bg-gray-700 p-1 -z-10" />

            {/* Image container with professional hover */}
            <div className="w-full h-full rounded-3xl overflow-hidden relative shadow-2xl transform transition-transform duration-500 group-hover:scale-105 group-hover:shadow-xl">
              <img
                src="/Sainadha_Reddy_Profile_photo.jpg"
                alt="Busi Reddy"
                className="w-full h-full object-cover rounded-3xl"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/0 dark:bg-black/0 transition-colors duration-500 group-hover:bg-black/10 dark:group-hover:bg-black/20 rounded-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
