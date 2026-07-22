import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Backdrop from "./components/ui/Backdrop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

// Reset scroll position on every route change.
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <div className="relative min-h-screen">
            <Backdrop />
            <ScrollToTop />
            <Navbar />

            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}
