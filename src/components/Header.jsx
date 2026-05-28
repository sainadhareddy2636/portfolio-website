import { motion } from "framer-motion";
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaTrophy,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

export default function Header() {
  return (
    <header id="home" className="relative overflow-hidden bg-gray-50 dark:bg-[#050F24] text-gray-900 dark:text-gray-100">

      {/* Background Blobs */}
      {/* <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" /> */}
      {/* <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full" /> */}

      <div className="max-w-7xl mx-auto py-16 px-6 lg:px-8 grid md:grid-cols-2 items-center gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Greeting */}
          <h1 className="leading-tight">
            <span className="text-2xl md:text-4xl font-medium text-gray-600 dark:text-gray-300">
              Hi, I'm
            </span>

            <br />

            <span className="text-5xl md:text-6xl font-extrabold text-blue-700 dark:text-blue-350">
              Sainadha Reddy
            </span>
          </h1>

          {/* Main Title */}
          <h2
  className="
    mt-5
    text-2xl md:text-3xl
    italic
    font-light
    text-gray-500
    dark:text-gray-300
    leading-tight
  "
>
  Full-Stack Developer • Java <br></br>• MERN Stack • AI Applications
</h2>

          {/* Achievement Chips */}
          <div className="flex flex-wrap gap-3 mt-6">

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
              <FaGraduationCap />
              GATE 2026 DS & AI AIR 649
            </div>

            <div className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">
              9+ CGPA
            </div>

            {/* <div className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium">
              100+ Users Served
            </div> */}

          </div>

          {/* Description */}
          <p className="mt-6 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
            I build scalable web applications using React, Next.js,
            Node.js and MongoDB, with experience in AI-powered
            solutions, secure backend architectures, cloud deployment
            and payment integrations.
          </p>

          



          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <a
              href="/Sainadha_Reddy_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaDownload />
              Resume
            </a>

            <a
              href="https://github.com/sainadhareddy2636"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/busireddysainadhareddy1626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-blue-700 dark:text-blue-400 font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            {/* <a
              href="https://unstop.com/u/busisai7505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-200 dark:bg-gray-700 text-purple-700 dark:text-purple-400 font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaTrophy />
              Unstop
            </a> */}

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
  opacity: 1,
  scale: 1,
  y: [0, -8, 0],
}}
//           transition={{
//   duration: 2,
//   // repeat: Infinity,
//   ease: "easeInOut",
// }}
          className="flex justify-center"
        >
          <div className="relative w-64 md:w-80 group">

            {/* <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 blur-xl opacity-25" /> */}

            <div className="
relative
overflow-hidden
rounded-full
shadow-[0_25px_60px_rgba(59,130,246,0.25)]
border
border-white/10
backdrop-blur-sm
bg-white/5
">
              <img
                src="/SainadhaReddy.png"
                alt="Sainadha Reddy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

          </div>
        </motion.div>

      </div>
    </header>
  );
}