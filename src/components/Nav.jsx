import { FaGithub, FaLinkedin, FaMoon, FaSun } from "react-icons/fa";
import useDarkMode from "../hooks/useDarkMode";

export default function Nav() {
  const [theme, setTheme] = useDarkMode();

  const links = [
    "home",
    "about",
    "education",
    "skills",
    "projects",
    "achievements",
    "contact",
  ];

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-white/80
        dark:bg-[#050F24]/80
        border-b
        border-gray-200
        dark:border-gray-800
        shadow-sm
      "
    >
      <div className="max-w-7xl mx-auto h-14 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          className="
            text-xl
            font-extrabold
            bg-gradient-to-r
            from-blue-500
            to-purple-500
            bg-clip-text
            text-transparent
            hover:scale-105
            transition-all
            duration-300
            whitespace-nowrap
            cursor-pointer
          "
        >
          Sainadha Reddy
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-semibold">
          {links.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="
                relative
                text-gray-700
                dark:text-gray-300
                hover:text-blue-500
                dark:hover:text-blue-400
                transition-colors
                duration-300

                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-[3px]
                after:rounded-full
                after:bg-gradient-to-r
                after:from-blue-500
                after:to-purple-500
                after:transition-all
                after:duration-300

                hover:after:w-full
              "
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2">

          {/* Theme Toggle */}
          <div className="relative group">
            <button
              onClick={() =>
                setTheme(theme === "light" ? "dark" : "light")
              }
              aria-label="Toggle Theme"
              className="
                p-2.5
                rounded-xl
                bg-white/5
                hover:bg-yellow-500/20
                transition-all
                duration-300
              "
            >
              {theme === "dark" ? (
                <FaSun className="text-yellow-400 text-lg" />
              ) : (
                <FaMoon className="text-slate-700 text-lg" />
              )}
            </button>

            <span
              className="
                absolute
                top-full
                mt-2
                left-1/2
                -translate-x-1/2
                opacity-0
                group-hover:opacity-100
                pointer-events-none
                transition-opacity
                duration-300
                whitespace-nowrap
                text-xs
                px-2
                py-1
                rounded-md
                bg-gray-800
                text-white
                dark:bg-white
                dark:text-gray-900
              "
            >
              {theme === "dark"
                ? "Light Mode"
                : "Dark Mode"}
            </span>
          </div>

          {/* Resume Button */}
          <a
            href="/Sainadha_Reddy_Resume.pdf"
            download
            className="
              hidden sm:flex
              items-center
              px-4
              py-2
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              text-sm
              font-semibold
              shadow-md
              hover:shadow-lg
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Resume
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sainadhareddy2636"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              p-2.5
              rounded-xl
              bg-white/5
              hover:bg-blue-500/20
              transition-all
              duration-300
            "
          >
            <FaGithub className="text-lg text-gray-700 dark:text-gray-200" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/busireddysainadhareddy1626"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              p-2.5
              rounded-xl
              bg-white/5
              hover:bg-blue-500/20
              transition-all
              duration-300
            "
          >
            <FaLinkedin className="text-lg text-blue-600 dark:text-blue-400" />
          </a>
        </div>
      </div>
    </nav>
  );
}