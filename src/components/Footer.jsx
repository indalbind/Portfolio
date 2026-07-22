import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import SocialIcons from "./ui/SocialIcons";
import { profile } from "../data/portfolio";

export default function Footer() {
    return (
        <footer className="relative z-10 mt-24 border-t border-white/8">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-12 md:flex-row md:justify-between">
                {/* Identity */}
                <div className="flex flex-col items-center gap-2 md:items-start">
                    <span className="font-display text-lg font-semibold text-white">
                        {profile.name}
                    </span>
                    <span className="font-mono text-xs text-slate-500">
                        {profile.tagline}
                    </span>
                </div>

                {/* Quick links */}
                <nav className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-slate-400">
                    <Link to="/about" className="transition-colors hover:text-white">
                        About
                    </Link>
                    <Link to="/projects" className="transition-colors hover:text-white">
                        Projects
                    </Link>
                    <Link to="/contact" className="transition-colors hover:text-white">
                        Contact
                    </Link>
                </nav>

                <SocialIcons />
            </div>

            <div className="border-t border-white/5 py-5 text-center font-mono text-[11px] text-slate-600">
                © 2026 {profile.name} — built with{" "}
                <Heart size={11} className="inline text-rose-500" /> and lots of
                coffee.
            </div>
        </footer>
    );
}
