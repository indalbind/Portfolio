import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Profile", href: "/profile" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
            <nav className="glass mx-auto flex max-w-5xl items-center justify-between rounded-2xl px-5 py-3 shadow-lg shadow-black/40">
                {/* Logo */}
                <Link to="/" className="group flex items-center gap-2.5">
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-sky-500 to-violet-600 font-display text-sm font-bold text-white shadow-[0_0_16px_rgba(56,189,248,0.4)]">
                        IB
                    </span>
                    <span className="font-display text-[15px] font-semibold text-white transition-colors group-hover:text-sky-300">
                        Indal Bind
                    </span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const active = location.pathname === link.href;
                        return (
                            <li key={link.name} className="relative">
                                <Link
                                    to={link.href}
                                    className={`relative z-10 block rounded-lg px-4 py-2 text-[13px] font-medium transition-colors duration-200 ${
                                        active
                                            ? "text-white"
                                            : "text-slate-400 hover:text-white"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                                {active && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32,
                                        }}
                                        className="absolute inset-0 rounded-lg border border-white/10 bg-white/8"
                                    />
                                )}
                            </li>
                        );
                    })}
                </ul>

                {/* Contact CTA */}
                <Link
                    to="/contact"
                    className="group hidden items-center gap-1.5 rounded-xl bg-linear-to-r from-sky-500 to-violet-600 px-4 py-2 text-[13px] font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.3)] transition-all duration-300 hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] active:scale-95 md:flex"
                >
                    Contact
                    <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                    />
                </Link>

                {/* Mobile toggle */}
                <button
                    aria-label="Toggle menu"
                    className="p-1.5 text-slate-300 hover:text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.25 }}
                        className="glass mx-auto mt-2 max-w-5xl rounded-2xl p-4 shadow-xl shadow-black/50 md:hidden"
                    >
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                                            location.pathname === link.href
                                                ? "bg-white/8 text-white"
                                                : "text-slate-400 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                            <li className="mt-2">
                                <Link
                                    to="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white"
                                >
                                    Contact <ArrowRight size={14} />
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
