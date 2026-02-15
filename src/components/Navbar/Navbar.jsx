import { useState, useEffect, useRef } from "react";
import AnimatedNavText from "./AnimatedNavText";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const navRef = useRef(null);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Skills", href: "/skills" },
        { name: "Projects", href: "/projects" },
    ];

    // Reset highlight when clicking outside navbar
    useEffect(() => {
        function handleOutsideClick(e) {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveItem(null);
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <nav
            ref={navRef}
            className="sticky top-0 z-50 w-full border-b border-white/10
            bg-[radial-gradient(120%_100%_at_50%_0%,rgba(56,189,248,0.12)_0%,rgba(0,0,0,0)_60%),linear-gradient(to_right,rgba(24,24,27,0.85),rgba(9,9,11,0.85))]
            backdrop-blur-xl px-6 py-3 md:px-10"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <h2 className="font-funnel text-xl font-bold text-white">
                    <Link to="/" onClick={() => setActiveItem(null)}>
                        Indal Bind
                    </Link>
                </h2>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <AnimatedNavText
                                text={link.name}
                                href={link.href}
                                isActive={activeItem === link.name}
                                onClick={() => setActiveItem(link.name)}
                            />
                        </li>
                    ))}
                    <li>
                        <Link to="/contact" onClick={() => setActiveItem(null)}>
                            <ContactButton />
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="p-2 text-zinc-400 hover:text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-x-0 top-16 z-40
                  bg-zinc-950/95 backdrop-blur-xl border-t border-white/10
                   transition-all duration-300
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
            >
                <ul className="flex flex-col gap-6 px-6 py-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <AnimatedNavText
                                text={link.name}
                                href={link.href}
                                isActive={activeItem === link.name}
                                onClick={() => {
                                    setActiveItem(link.name);
                                    setIsOpen(false);
                                }}
                            />
                        </li>
                    ))}

                    <li>
                        <Link
                            to="/contact"
                            onClick={() => {
                                setActiveItem(null);
                                setIsOpen(false);
                            }}
                        >
                            <ContactButton />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


function ContactButton() {
    return (
        <button className="font-funnel group relative cursor-pointer rounded-full bg-zinc-800 p-px font-semibold text-white transition-all duration-300 active:scale-95 hover:shadow-[0_0_10px_2px_rgba(56,189,248,0.3)]">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,1)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>

            <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 px-5 py-1.5 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-zinc-900 group-hover:ring-sky-500/50">
                <span className="text-xs group-hover:text-sky-100 transition-colors">
                    Contact
                </span>
                <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:text-sky-200"
                >
                    <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                    />
                </svg>
            </div>
        </button>
    );
}

export default Navbar;
