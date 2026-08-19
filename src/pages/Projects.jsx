import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

import { Section, SectionHeading } from "../components/ui/Section";
import Tag from "../components/ui/Tag";
import { projects } from "../data/portfolio";

const filters = [
    { key: "all", label: "All" },
    { key: "web", label: "Full-Stack" },
    { key: "ml", label: "Machine Learning" },
];

function ProjectCard({ project }) {
    return (
        <motion.article
            layout
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className={`glass group relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 ${
                project.featured ? "border-sky-400/25" : ""
            }`}
        >
            {/* Corner glow on hover — always lit for the featured project */}
            <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 ${
                    project.featured ? "opacity-100" : "opacity-0"
                }`}
            />

            {project.featured && (
                <span className="absolute right-0 top-0 rounded-bl-2xl bg-linear-to-r from-sky-500 to-violet-600 px-4 py-1.5 font-mono text-[10px] font-medium tracking-wide text-white">
                    FEATURED
                </span>
            )}

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                    <span className="rounded-xl border border-white/10 bg-white/5 p-3 text-sky-400">
                        <Folder size={20} />
                    </span>
                    <div>
                        <h3 className="font-display text-xl font-bold text-white transition-colors duration-300 group-hover:text-sky-300">
                            {project.title}
                        </h3>
                        <span className="font-mono text-[11px] text-slate-500">
                            {project.subtitle}
                        </span>
                    </div>
                </div>

                <div className={`flex gap-2 ${project.featured ? "mt-8" : ""}`}>
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Source code"
                            className="glass flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-300 hover:border-sky-400/40 hover:text-white"
                        >
                            <Github size={16} />
                        </a>
                    )}
                    {project.liveDemo && (
                        <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Live demo"
                            className="glass flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 transition-all duration-300 hover:border-emerald-400/40 hover:text-emerald-300"
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Points */}
            <ul className="mt-6 space-y-2.5">
                {project.points.map((point) => (
                    <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-slate-400"
                    >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                        {point}
                    </li>
                ))}
            </ul>

            {/* Tags */}
            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/6 pt-6">
                {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>
        </motion.article>
    );
}

export default function Projects() {
    const [filter, setFilter] = useState("all");
    const visible =
        filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);

    return (
        <Section className="pt-40">
            <SectionHeading
                kicker="shipped & learning"
                title="Projects"
                description="Systems I've designed, built, and shipped — from full-stack platforms to applied machine learning."
            />

            {/* Filter pills */}
            <div className="mb-10 flex flex-wrap gap-2">
                {filters.map((f) => (
                    <button
                        key={f.key}
                        onClick={() => setFilter(f.key)}
                        className={`relative rounded-xl px-5 py-2 font-mono text-xs font-medium transition-all duration-300 ${
                            filter === f.key
                                ? "bg-linear-to-r from-sky-500 to-violet-600 text-white shadow-[0_0_18px_rgba(56,189,248,0.3)]"
                                : "glass text-slate-400 hover:text-white"
                        }`}
                    >
                        {f.label}
                    </button>
                ))}
            </div>

            {/* Cards */}
            <motion.div layout className="space-y-6">
                <AnimatePresence mode="popLayout">
                    {visible.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    );
}
