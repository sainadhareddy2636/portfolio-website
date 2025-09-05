import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education"
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
function App() {
  return (
    <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen" id="home">
      <Nav />
      <Header />
      <main className="px-6 md:px-20">
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default App;
