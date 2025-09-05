import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

export default function Nav() {
  const [theme, setTheme] = useDarkMode();

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="text-xl sm:text-2xl font-bold dark:text-white hover:text-yellow-400 transition-colors">

        </a>

        {/* Menu Links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-bold dark:text-gray-200">
  {["home", "about", "skills", "projects", "achievements", "contact"].map((section) => (
    <a
      key={section}
      href={`#${section}`}
      className="relative px-2 py-1 text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-300 transition-colors
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-400 dark:after:bg-blue-300 after:transition-all after:duration-300 hover:after:w-full"
    >
      {section.charAt(0).toUpperCase() + section.slice(1)}
    </a>
  ))}
</div>

        {/* Socials & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Dark Mode Toggle */}
        <div className="relative group">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full transition-all duration-300 
                      bg-gray-200 dark:bg-gray-700 
                      hover:bg-gray-300 dark:hover:bg-gray-600 
                      text-gray-800 dark:text-yellow-400 
                      shadow-md hover:shadow-lg"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>

          {/* Tooltip text below */}
          <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2
                          opacity-0 group-hover:opacity-100
                          bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900
                          text-xs font-semibold rounded px-2 py-1 pointer-events-none
                          transition-opacity duration-300 whitespace-nowrap">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </span>
        </div>




          {/* GitHub */}
          <a
            href="https://github.com/sainadhareddy2636"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="text-gray-700 dark:text-gray-200 hover:text-yellow-400 dark:hover:text-yellow-300" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/busireddysainadhareddy1626"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaLinkedin className="text-blue-600 dark:text-blue-400 hover:text-yellow-400 dark:hover:text-yellow-300" />
          </a>
        </div>
      </div>
    </nav>
  );
}
