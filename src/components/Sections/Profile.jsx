import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Award,
    BadgeCheck,
    Globe,
    Code2,
    Cpu,
} from "lucide-react";

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

// --- Main Profile Component ---

export default function Profile() {
    // 1. We create a specific ref for the timeline
    const timelineRef = useRef(null);

    // 2. We track scroll only for the timeline area
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        // Start filling when the top of the timeline reaches 80% of the screen height
        // Finish filling when the bottom of the timeline reaches 50% of the screen height
        offset: ["start 80%", "end 50%"],
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const experiencesData = [
        {
            title: "Project-Based ML Experience",
            subtitle: "End-to-end ML systems from preprocessing to deployment.",
            icon: Cpu, // Make sure Cpu is imported
            points: [
                "ML pipelines & supervised learning architecture",
                "Model evaluation & hyperparameter optimization",
                "Web-based ML deployment using modern frameworks",
            ],
        },
        {
            title: "Software Engineering Intern", // Example second experience
            subtitle: "Building scalable web applications.",
            icon: Code2, // Make sure Code2 is imported
            points: [
                "Developed REST APIs using Node.js and Express",
                "Optimized database query performance by 30%",
                "Collaborated with UI/UX teams for seamless frontend integration",
            ],
        },
        // You can just keep adding new objects here in the future!
    ];
    const focusAreasData = [
        {
            label: "Primary Focus",
            title: "Applied ML &\nAI Systems", // \n creates the line break
            borderGradient: "from-rose-200 via-indigo-200 to-transparent",
            textGradient: "from-indigo-600 to-rose-500",
        },
        {
            label: "Primary Focus",
            title: "Full-Stack\nWeb Development",
            borderGradient: "from-emerald-200 via-teal-200 to-transparent",
            textGradient: "from-teal-600 to-emerald-500",
        },
        // Add as many as you want here!
    ];
    return (
        <section
            id="profile"
            className="relative w-full min-h-screen text-slate-700 py-32 overflow-hidden selection:bg-indigo-200"
        >
            {/* BACKGROUND FLOATERS */}
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    className="absolute top-20 left-20 h-72 w-72 rounded-full blur-3xl"
                    animate={{ y: [0, -40, 0] }}
                    transition={{ duration: 12, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 right-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl"
                    animate={{ y: [0, 50, 0] }}
                    transition={{ duration: 15, repeat: Infinity }}
                />
            </div>

            <div className="relative mx-auto max-w-6xl px-7">
                {/* ================= EDUCATION (TIMELINE) ================= */}
                <SectionHeader title="Education" icon={GraduationCap} />

                {/* 3. ATTACH THE REF HERE so Framer Motion tracks this specific box */}
                <div ref={timelineRef} className="relative pl-8 md:pl-0">
                    {/* The Glowing Beam */}
                    <div className="absolute left-0 md:left-1/2 top-4 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-rose-400 via-indigo-400 to-rose-400 shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                        />
                    </div>

                    <div className="font-funnel space-y-16">
                        {[
                            {
                                title: "BS Degree – Data Science & Applications",
                                org: "IIT Madras",
                                time: "2023 – Present",
                                meta: "CGPA: 8.46",
                                side: "left",
                                icon: Code2,
                            },
                            {
                                title: "Senior Secondary Education",
                                org: "UP Board",
                                time: "2021 – 2022",
                                meta: "Score: 76%",
                                side: "right",
                                icon: null,
                            },
                            {
                                title: "Secondary Education",
                                org: "CBSE Board",
                                time: "2019 - 2020",
                                meta: "Score: 85%",
                                side: "left",
                                icon: null,
                            },
                        ].map((edu, i) => (
                            <div
                                key={i}
                                className={`relative flex items-center md:justify-between ${edu.side === "right" ? "md:flex-row-reverse" : ""}`}
                            >
                                {/* Center Node */}
                                <div className="absolute -left-1.25 md:left-1/2 w-3 h-3 rounded-full bg-white border-2 border-rose-500 z-10 md:-translate-x-1/2 shadow-[0_0_10px_rgba(244,63,94,0.4)]" />

                                {/* Content Card */}
                                <div className="ml-10 md:ml-0 md:w-[45%]">
                                    <GlassCard delay={i * 0.1}>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-lg font-bold text-slate-900 font-funnel">
                                                {edu.title}
                                            </h3>
                                            {edu.icon && (
                                                <edu.icon
                                                    className="text-indigo-400 opacity-70"
                                                    size={20}
                                                />
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-3 text-sm text-slate-500 font-mono mb-4">
                                            <span>{edu.org}</span>
                                            <span className="text-slate-300">
                                                |
                                            </span>
                                            <span>{edu.time}</span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-50 text-rose-600 text-sm font-semibold border border-rose-100">
                                            <Award size={14} />
                                            {edu.meta}
                                        </div>
                                    </GlassCard>
                                </div>

                                {/* Empty spacer for opposite side */}
                                <div className="hidden md:block md:w-[45%]" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ================= EXPERIENCE ================= */}
                <div className="mt-32">
                    <SectionHeader title="Experience" icon={Briefcase} />

                    <div className="grid lg:grid-cols-3 gap-8 items-start">
                        {/* LEFT COLUMN: Map through the experiences array */}
                        <div className="lg:col-span-2 space-y-8">
                            {experiencesData.map((exp, index) => (
                                <GlassCard key={index} className="p-8">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-2xl font-bold text-slate-900 font-funnel">
                                                {exp.title}
                                            </h3>
                                            <p className="font-funnel mt-2 text-slate-600">
                                                {exp.subtitle}
                                            </p>
                                        </div>
                                        <div className="p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                                            {/* Dynamically render the icon */}
                                            <exp.icon
                                                className="text-indigo-500"
                                                size={28}
                                            />
                                        </div>
                                    </div>

                                    <div className="font-funnel mt-8 space-y-4">
                                        {exp.points.map((item, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                                <span className="text-slate-700">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>

                        {/* RIGHT COLUMN: Focus Cards (Made sticky) */}
                        <div className="lg:col-span-1 sticky top-24 space-y-7">
                            {" "}
                            {/* <-- Increased gap here */}
                            {focusAreasData.map((focus, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className={`relative rounded-2xl p-0.5 bg-linear-to-br ${focus.borderGradient} shadow-xl shadow-slate-200/50`}
                                >
                                    {/* Adjusted padding to px-n py-m for better vertical proportions */}
                                    <div className="h-full w-full rounded-xl bg-white/95 backdrop-blur-md px-6 py-22 flex flex-col justify-center items-center text-center relative overflow-hidden">
                                        <p className="font-iceland text-sm uppercase tracking-[0.2em] text-slate-500 font-bold mb-3 z-10">
                                            {focus.label}
                                        </p>
                                        <h4
                                            className={`text-xl font-bold bg-clip-text text-transparent bg-linear-to-r ${focus.textGradient} z-10 font-funnel whitespace-pre-line leading-snug`}
                                        >
                                            {focus.title}
                                        </h4>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ================= ACHIEVEMENTS (BENTO GRID) ================= */}
                <div className="mt-32">
                    <SectionHeader title="Achievements" icon={Award} />

                    <div className="font-funnel grid md:grid-cols-2 gap-6">
                        {[
                            {
                                text: "Top grades in Web & ML projects",
                                icon: Code2,
                                color: "text-emerald-600",
                                bg: "bg-emerald-50",
                                border: "border-emerald-200",
                            },
                            {
                                text: "Designed structured AI learning tracks",
                                icon: Cpu,
                                color: "text-indigo-600",
                                bg: "bg-indigo-50",
                                border: "border-indigo-200",
                            },
                            {
                                text: "Research paper accepted (future)",
                                icon: Globe,
                                color: "text-rose-600",
                                bg: "bg-rose-50",
                                border: "border-rose-200",
                                full: true,
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                                className={`relative group p-6 rounded-2xl bg-white/80 border border-white hover:border-slate-200 transition-colors shadow-md shadow-slate-200/50 ${item.full ? "md:col-span-2" : ""}`}
                            >
                                <div
                                    className={`absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity ${item.color}`}
                                >
                                    <item.icon size={80} />
                                </div>
                                <div className="flex items-center gap-4">
                                    <div
                                        className={`p-3 rounded-lg border ${item.bg} ${item.border} ${item.color}`}
                                    >
                                        <item.icon size={24} />
                                    </div>
                                    <span className="font-semibold text-slate-800 text-lg">
                                        {item.text}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ================= CERTIFICATIONS & LANGUAGES ================= */}
                <div className="mt-32 grid md:grid-cols-2 gap-16">
                    {/* Certs */}
                    <div>
                        <SectionHeader
                            title="Certifications"
                            icon={BadgeCheck}
                        />
                        <div className="font-funnel flex flex-wrap gap-3">
                            {[
                                "Azure Fundamentals",
                                "Data Science – AlmaBetter",
                                "ML Regression Project",
                                "International Yoga Day",
                            ].map((cert, i) => (
                                <GlassCard
                                    key={i}
                                    className="px-5 py-3 rounded-xl! bg-white/80!"
                                >
                                    <span className="text-sm font-medium text-slate-700">
                                        {cert}
                                    </span>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    {/* Languages */}
                    <div>
                        <SectionHeader title="Languages" icon={Globe} />
                        <div className="font-funnel space-y-6">
                            {[
                                {
                                    name: "English",
                                    level: "Professional",
                                    percent: 90,
                                },
                                {
                                    name: "Hindi",
                                    level: "Native",
                                    percent: 100,
                                },
                                {
                                    name: "German",
                                    level: "Elementary",
                                    percent: 30,
                                },
                            ].map((lang, i) => (
                                <div key={i} className="group">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="font-bold text-slate-800">
                                            {lang.name}
                                        </span>
                                        <span className="font-iceland text-1xl text-slate-500  bg-slate-100 px-2 py-1 rounded-md">
                                            {lang.level}
                                        </span>
                                    </div>
                                    <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-200/60">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${lang.percent}%`,
                                            }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.2,
                                            }}
                                            className="h-full bg-linear-to-r from-indigo-400 to-rose-400"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
