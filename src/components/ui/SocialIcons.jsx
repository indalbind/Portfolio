import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "../../data/portfolio";

const socials = [
    { icon: FaGithub, href: profile.socials.github, label: "GitHub" },
    { icon: FaLinkedinIn, href: profile.socials.linkedin, label: "LinkedIn" },
];

export default function SocialIcons() {
    return (
        <div className="flex gap-3">
            {socials.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="glass flex h-10 w-10 items-center justify-center rounded-xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:text-sky-300 hover:shadow-[0_0_18px_rgba(56,189,248,0.25)]"
                >
                    <social.icon className="text-[16px]" />
                </a>
            ))}
        </div>
    );
}
