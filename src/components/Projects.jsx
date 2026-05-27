import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaStar } from "react-icons/fa";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    featured: true,
    name: "ReCa – Cart for Reusables",
    desc: "Campus marketplace enabling students to buy and sell reusable items. Achieved 100+ registrations and facilitated 50+ successful transactions.",
    stack: ["MERN", "Cloudinary", "Bootstrap", "Razorpay"],
    live: "https://reca-21ve.onrender.com/reca",
    code: "https://github.com/sainadhareddy2636/RTP_RECA.git",
  },

  {
    name: "Secure Video Streaming Platform",
    desc: "Built a secure video processing platform featuring protected streaming, real-time upload tracking and rule-based sensitivity analysis.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
    live: "https://secure-video-processing-and-stream.vercel.app/",
    code: "https://github.com/sainadhareddy2636/Secure_Video_Processing_and_Streaming_Platform_with_Real-Time_Sensitivity_Analysis.git",
  },

  {
    name: "AI Note Maker",
    desc: "AI-powered document assistant that generates contextual notes and answers from uploaded PDFs using Generative AI.",
    stack: ["Next.js", "Tailwind", "Convex", "Gemini AI"],
    live: "https://ai-pdf-notes-taker.vercel.app/",
    code: "https://github.com/sainadhareddy2636/AI-Note-Maker.git",
  },

  {
    name: "Health Insurance Claim Prediction",
    desc: "Machine learning application that predicts insurance claim amounts using demographic and health-related attributes.",
    stack: ["Python", "Flask", "Scikit-Learn", "Pandas"],
    live: "https://health-insurance-claimprediction.streamlit.app/",
    code: "https://github.com/sainadhareddy2636/Health-Insurance-Claim-Prediction.git",
  },

  {
    name: "Multi-Game Hub",
    desc: "Interactive gaming platform featuring Sudoku, 2048, Memory Game and other browser-based challenges.",
    stack: ["React", "Node.js", "MongoDB", "Material UI"],
    live: "https://multigamehub.netlify.app/",
    code: "https://github.com/sainadhareddy2636/multi-game-hub.git",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-50 dark:bg-[#050F24] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-600/10 blur-3xl rounded-full" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-600/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">
        <SectionTitle>Projects</SectionTitle>

        <div className="container mx-auto px-6 md:px-10 mt-12">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="
                  bg-white
                  dark:bg-gray-800/90
                  backdrop-blur-sm
                  rounded-3xl
                  p-6
                  border
                  border-gray-200
                  dark:border-gray-700
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  flex
                  flex-col
                  justify-between
                  min-h-[360px]
                "
              >
                <div>
                  {/* {project.featured && (
                    <div className="mb-4">
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-2
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          font-semibold
                          bg-yellow-500/20
                          text-yellow-300
                          border
                          border-yellow-400/30
                        "
                      >
                        <FaStar />
                        Featured Project
                      </span>
                    </div>
                  )} */}

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>

                  <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3 py-1.5
                          rounded-full
                          text-xs
                          font-medium
                          bg-blue-500/10
                          border
                          border-blue-500/20
                          text-blue-600
                          dark:text-blue-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-4
                      py-3
                      rounded-xl
                      bg-blue-600
                      text-white
                      font-semibold
                      hover:bg-blue-700
                      transition
                    "
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      flex
                      items-center
                      justify-center
                      gap-2
                      px-4
                      py-3
                      rounded-xl
                      bg-gray-700
                      text-white
                      font-semibold
                      hover:bg-gray-800
                      transition
                    "
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}