import React from "react";
import { motion } from "framer-motion";

/* Container animation */
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

/* Card animation */
const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/* Animated underline (same system as Tech Stack) */
const SoftSkillUnderline = () => {
    const LINE_WIDTH = "w-79";

    return (
        <div className={`relative mt-2 h-4 ${LINE_WIDTH}`}>
            {/* Base line */}
            <div
                className={`absolute top-1/2 left-0 h-0.5 ${LINE_WIDTH}
                -translate-y-1/2 rounded-full bg-gray-300/60`}
            />

            {/* Moving highlight */}
            <motion.div
                className={`absolute top-1/2 h-0.5 w-24
                -translate-y-1/2 rounded-full
                bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-400`}
                animate={{ x: ["-30%", "230%"] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Pulse dot */}
            <motion.div
                className="absolute top-1/2 left-6 h-2.5 w-2.5
                -translate-y-1/2 rounded-full bg-indigo-500"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
};

/* Card styling */
const cardStyle =
    "relative rounded-3xl bg-white/80 backdrop-blur-xl border border-black/5 \
     shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 \
     hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]";

/* Skill chip */
const SkillChip = ({ children }) => (
    <span
        className="inline-flex items-center rounded-full
        bg-gray-100/70 px-3 py-1 text-sm font-medium text-gray-700
        ring-1 ring-black/5 transition-all duration-300
        hover:bg-white hover:text-gray-900 hover:ring-black/10"
    >
        {children}
    </span>
);

export default function SoftSkill() {
    return (
        <section
            id="soft-skills"
            className="relative mx-auto max-w-6xl px-6 py-5"
        >
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-funnel text-4xl font-extrabold text-gray-900">
                    Professional Skills
                </h2>

                <SoftSkillUnderline />

                <p className="font-funnel mt-4 max-w-2xl text-gray-600">
                    Core professional traits that guide how I learn,
                    collaborate, and build reliable systems in real-world
                    environments.
                </p>
            </motion.div>

            {/* Cards */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-24 grid gap-10 md:grid-cols-2"
            >
                {/* Problem Solving */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Analytical Thinking & Problem Solving
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I approach problems by breaking them into smaller,
                        testable components and iterating toward efficient,
                        maintainable solutions.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <SkillChip>Logical Reasoning</SkillChip>
                        <SkillChip>System Thinking</SkillChip>
                        <SkillChip>Debugging Mindset</SkillChip>
                    </div>
                </motion.div>

                {/* Learning */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Continuous Learning
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I actively adapt to new tools, concepts, and frameworks
                        by learning through experimentation and real projects.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <SkillChip>Self-Driven</SkillChip>
                        <SkillChip>Curiosity</SkillChip>
                        <SkillChip>Skill Adaptability</SkillChip>
                    </div>
                </motion.div>

                {/* Communication */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Communication & Collaboration
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I focus on clear communication, structured thinking, and
                        constructive feedback when working with teams or
                        mentors.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <SkillChip>Clear Communication</SkillChip>
                        <SkillChip>Team Collaboration</SkillChip>
                        <SkillChip>Knowledge Sharing</SkillChip>
                    </div>
                </motion.div>

                {/* Ownership */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Ownership & Discipline
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I take responsibility for outcomes, focus on
                        consistency, and prioritize building things that work
                        reliably in production settings.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <SkillChip>Accountability</SkillChip>
                        <SkillChip>Consistency</SkillChip>
                        <SkillChip>Execution Focus</SkillChip>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
