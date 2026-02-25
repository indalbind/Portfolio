import React from "react";
import { motion } from "framer-motion";
import { Rocket, Github, ExternalLink } from "lucide-react"; 
import SectionDivider from "../ui/SectionDivider";

// --- Utility Components ---
const SectionHeader = ({ title, icon: Icon }) => (
    <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 shadow-sm">
            <Icon size={24} />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-funnel">
            {title}
        </h2>
        <div className="h-px flex-1 bg-linear-to-r from-indigo-200 to-transparent" />
    </div>
);

const GlassCard = ({ children, className = "", delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay }}
        whileHover={{
            y: -5,
            boxShadow: "0 20px 40px -15px rgba(79, 70, 229, 0.15)",
        }}
        className={`group relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 backdrop-blur-xl transition-all duration-300 shadow-lg shadow-slate-200/50 ${className}`}
    >
        <div className="absolute inset-0 bg-linear-to-br from-indigo-50/50 via-transparent to-rose-50/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">{children}</div>
    </motion.div>
);

// --- Data Split into Categories ---

const webProjectsData = [
    {
        title: "Quiz Management System",
        subtitle: "Full-Stack Web Application",
        github: "https://github.com/indalbind/Quiz_master_Full-stack_app_V2", // the github link
        liveDemo: "", // Optional: if you have a live site
        points: [
            "Designed and developed a role-based quiz platform with Admin and User dashboards",
            "Built secure backend services using Flask and Flask-RESTful APIs",
            "Implemented JWT authentication and authorization",
            "Managed quizzes, questions, user attempts, and score analytics",
            "Developed frontend using JavaScript with Vite for fast build performance",
            "Followed modular backend architecture and clean API design principles",
        ],
        tags: ["Flask", "REST APIs", "JWT", "JavaScript", "Vite"],
    },
    {
        title: "MERN Stack Mini Projects",
        subtitle: "Full-Stack Development",
        // github: "https://github.com/yourusername/mern-projects", // <-- Add your real link here
        points: [
            "Developed CRUD-based applications using React, Node.js, Express, and MongoDB",
            "Integrated frontend with RESTful backend APIs",
            "Applied best practices for component structure and API communication",
        ],
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    },
];

const mlProjectsData = [
    {
        title: "Machine Learning Practice Projects",
        subtitle: "Applied ML & Data Science",
        github: "https://github.com/indalbind/ML_Algo", // <-- Add your real link here
        points: [
            "Built regression and classification models using real-world datasets",
            "Performed data cleaning, preprocessing, and feature engineering",
            "Implemented text classification using TF-IDF and CountVectorizer",
            "Evaluated models using accuracy and other performance metrics",
        ],
        tags: ["Python", "scikit-learn", "TF-IDF", "Data Preprocessing"],
    },
];

// --- Main Component ---
export default function Project() {
    return (
        <section id="projects" className="relative w-full py-16">
            <div className="relative mx-auto max-w-6xl px-7">
                {/* ================= PROJECTS ================= */}
                <div className="mt-16">
                    <SectionHeader title="Projects" icon={Rocket} />

                    {/* --- WEB DEVELOPMENT SECTION --- */}
                    <div className="space-y-8 mb-20">
                        {webProjectsData.map((project, index) => (
                            <GlassCard key={`web-${index}`} className="p-8">
                                <div className="flex flex-col">
                                    {/* Header & Title */}
                                    <div className="flex items-center gap-4 mb-2">
                                        <h3 className="text-2xl font-bold text-slate-900 font-funnel">
                                            {project.title}
                                        </h3>
                                        <span className="hidden md:inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full">
                                            {project.subtitle}
                                        </span>
                                    </div>
                                    <p className="md:hidden font-funnel text-sm text-indigo-500 font-medium mb-4">
                                        {project.subtitle}
                                    </p>

                                    {/* Bullet Points */}
                                    <div className="font-funnel mt-4 space-y-3">
                                        {project.points.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                                                <span className="text-slate-700 leading-relaxed">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer: Tags & Github Button */}
                                    <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 text-xs font-mono font-medium text-slate-600 bg-slate-100/80 rounded-md border border-slate-200/60"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* GITHUB LINK BUTTON */}
                                        <div className="flex shrink-0 gap-3">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
                                                >
                                                    <Github
                                                        size={18}
                                                        className="transition-transform group-hover:scale-110"
                                                    />
                                                    <span>Source Code</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>

                    {/* --- MACHINE LEARNING SECTION --- */}
                    <div className="mb-12">
                        <SectionDivider label="Machine Learning & AI" />
                    </div>

                    <div className="space-y-8">
                        {mlProjectsData.map((project, index) => (
                            <GlassCard key={`ml-${index}`} className="p-8">
                                <div className="flex flex-col">
                                    {/* Header & Title */}
                                    <div className="flex items-center gap-4 mb-2">
                                        <h3 className="text-2xl font-bold text-slate-900 font-funnel">
                                            {project.title}
                                        </h3>
                                        <span className="hidden md:inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full">
                                            {project.subtitle}
                                        </span>
                                    </div>
                                    <p className="md:hidden font-funnel text-sm text-indigo-500 font-medium mb-4">
                                        {project.subtitle}
                                    </p>

                                    {/* Bullet Points */}
                                    <div className="font-funnel mt-4 space-y-3">
                                        {project.points.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(244,63,94,0.4)]" />
                                                <span className="text-slate-700 leading-relaxed">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer: Tags & Github Button */}
                                    <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="px-3 py-1.5 text-xs font-mono font-medium text-slate-600 bg-slate-100/80 rounded-md border border-slate-200/60"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* GITHUB LINK BUTTON */}
                                        <div className="flex shrink-0 gap-3">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all shadow-sm"
                                                >
                                                    <Github
                                                        size={18}
                                                        className="transition-transform group-hover:scale-110"
                                                    />
                                                    <span>Source Code</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
