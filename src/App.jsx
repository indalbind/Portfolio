import React from "react";
import { Routes, Route } from "react-router-dom"; // Import these

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Sections/Home";
import Skill from "./components/Sections/Skill";
import Project from "./components/Sections/Project";
import Contact from "./components/Sections/Contact";
import About from "./components/Sections/About";
import Profile from "./components/Sections/Profile";

function NoiseBackground() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0">
            {/* Gradient layer */}
            <div
                className="absolute inset-0 bg-linear-to-br 
                from-[#fdf2f8] via-[#eef2ff] to-[#f0fdf4]"
            />

            {/* Noise layer */}
            <svg
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                </filter>

                <rect
                    width="100%"
                    height="100%"
                    filter="url(#noiseFilter)"
                    opacity="0.25"
                />
            </svg>
        </div>
    );
}



function App() {
    return (
        <div className="relative min-h-screen bg-[#f7f7f5]">
            <NoiseBackground />

            <div className="relative z-10">
                <Navbar />

                <main>
                    {/* The Routes container switches between pages based on the URL */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/skills" element={<Skill />} />
                        <Route path="/projects" element={<Project />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/profile" element={<Profile />} />
                    </Routes>
                </main>

                <footer className="mt-24 py-6 text-center text-zinc-600 text-sm">
                    © 2026 Indal Bind. All rights reserved.
                </footer>
            </div>
        </div>
    );
}






export default App;
