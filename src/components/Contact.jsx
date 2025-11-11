import React from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section py-16 bg-gray-50 dark:bg-gray-900"
    >
      <SectionTitle>Contact</SectionTitle>

      <div className="card bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg mx-auto p-8 text-center transition-all duration-300 hover:shadow-2xl">
        {/* <h4 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
          Let’s Grow Together 🚀
        </h4> */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg sm:text-base leading-relaxed">
          Open to internships and full-time roles. 
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Open Gmail directly */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sainadhareddybusireddy2004@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-brand-600 text-white font-semibold hover:bg-brand-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            📧 Email
          </a>

          {/* Download Resume directly */}
          {/* <a
            href="/Busi_Reddy_Sainadha_Reddy_Resume.pdf"
            download="Busi_Reddy_Sainadha_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 shadow-md hover:shadow-lg"
          >

            📄Resume
          </a> */}
        </div>
      </div>
    </section>
  );
}
