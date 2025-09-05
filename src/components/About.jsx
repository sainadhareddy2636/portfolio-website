import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section py-16 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <SectionTitle>About Me</SectionTitle>

      <div className="container mx-auto flex flex-col items-center gap-6">
        {/* Content */}
        <div className="space-y-4 text-center max-w-3xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m{" "}
            <span className="font-semibold text-brand-600 dark:text-accent-500">
              Busi Reddy Sainadha Reddy
            </span>
            , a passionate Computer Science undergrad and aspiring Software Engineer.  
            I specialize in{" "}
            <span className="font-medium text-accent-500">Full-Stack Development</span>{" "}
            and{" "}
            <span className="font-medium text-accent-500">Machine Learning</span>, continuously sharpening my{" "}
            <span className="font-medium">problem-solving skills</span>.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I’ve worked on impactful projects, participated in{" "}
            <span className="font-medium text-brand-600 dark:text-brand-400">
              multiple competitions and hackathons .
            </span>  
            My mission is to create solutions that bring real-world value.
          </p>

          {/* Highlight Cards */}
          <div className="grid sm:grid-cols-2 gap-6 justify-items-center">
            <div className="card py-6 px-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 text-center w-64">
              <h4 className="text-xl font-bold text-brand-600 dark:text-brand-400 mb-2">
                🎯 Goal-Oriented
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Focused on building scalable, efficient solutions.
              </p>
            </div>
            <div className="card py-6 px-4 rounded-xl shadow-lg bg-white dark:bg-gray-800 hover:shadow-2xl transition-all duration-300 text-center w-64">
              <h4 className="text-xl font-bold text-accent-500 mb-2">
                💡 Innovative
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Always exploring new technologies & creative approaches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
