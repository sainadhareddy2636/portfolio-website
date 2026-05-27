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
<div className="bg-gray-50 dark:bg-[#050F24] min-h-screen">
  <Nav />
  <Header />

  <About />
    <Education />
  <Skills />
  <Projects />
  <Achievements />

  <Contact />
  <Footer />
</div>
  );
}


export default App;
