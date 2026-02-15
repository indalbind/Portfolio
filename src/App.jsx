import React from "react";
import { Routes, Route } from "react-router-dom"; // Import these

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Sections/Home";
import Skill from "./components/Sections/Skill";
import Project from "./components/Sections/Project";
import Contact from "./components/Sections/Contact";
import About from "./components/Sections/About";


function App() {
    return (
      <>
        <Navbar />

        <main>
          {/* The Routes container switches between pages based on the URL */}
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skill />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            
          </Routes>
        </main>
        
        <footer className="py-6 text-center text-zinc-600 text-sm">
                © 2026 Indal Bind. All rights reserved.
        </footer>
        
        </>
    );
}

export default App;
