import React from "react";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1], // premium easing
        },
    },
};

const cardStyle =
    "relative rounded-3xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]";


const SkillTag = ({ children }) => (
    <span
        className="
        inline-flex items-center rounded-full
        bg-gray-100/70 px-3 py-1 mx-1.5
        text-sm font-medium text-gray-700
        ring-1 ring-black/5
        transition-all duration-300
        hover:bg-white hover:text-gray-900
        hover:ring-black/10 hover:shadow-sm
    "
    >
        {children}
    </span>
);

const TechStackUnderline = () => {
    const LINE_WIDTH = "w-45";
    return (
        <div className={`relative mt-2 h-4 ${LINE_WIDTH}`}>
            {/* Base line */}
            <div
                className={`absolute top-1/2 left-0 h-0.5 ${LINE_WIDTH} -translate-y-1/2 rounded-full bg-gray-300/60`}
            />

            {/* Moving highlight */}
            <motion.div
                className="absolute top-1/2 h-0.5 w-12 -translate-y-1/2 rounded-full
                       bg-linear-to-r from-indigo-400 via-indigo-500 to-indigo-400"
                animate={{ x: ["-30%", "275%"] }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />

            {/* Pulse dot */}
            <motion.div
                className="absolute top-1/2 left-6 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-indigo-500"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}


export default function Usage() {
    return (
        <section id="usage" className="relative mx-auto max-w-6xl px-6 py-5">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.9 }}
            >
                <h2 className="font-funnel text-4xl font-extrabold text-gray-900">
                    Tech Stack
                </h2>
                
                <TechStackUnderline></TechStackUnderline>

                <p className="font-funnel mt-4 max-w-2xl text-gray-600">
                    Technologies and tools I use to design, build, and deploy
                    intelligent, production-ready systems.
                </p>
            </motion.div>

            {/* Cards Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="mt-24 grid gap-10 md:grid-cols-2"
            >
                {/* Frontend */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Frontend Development
                    </h3>
                    <div className="mt-5 space-y-2 font-funnel text-gray-700">
                        <SkillTag>HTML</SkillTag>
                        <SkillTag>CSS</SkillTag>
                        <SkillTag>JavaScript</SkillTag>
                        <SkillTag>React.js</SkillTag>
                        <SkillTag>Vue.js</SkillTag>
                    </div>
                </motion.div>

                {/* Backend */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Backend & APIs
                    </h3>
                    <div className="mt-5 space-y-2 font-funnel text-gray-700">
                        <SkillTag>Node.js, Express.js</SkillTag>
                        <SkillTag>Python, Java</SkillTag>
                        <SkillTag>RESTful APIs</SkillTag>
                        <SkillTag>JWT Authentication</SkillTag>
                    </div>
                </motion.div>

                {/* ML / DL */}
                <motion.div
                    variants={item}
                    className={`${cardStyle} md:col-span-2`}
                >
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Machine Learning & Deep Learning
                    </h3>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        {/* Left */}
                        <div className="space-y-2 font-funnel text-gray-700">
                            <SkillTag>
                                Machine Learning & Model Building
                            </SkillTag>
                            <SkillTag>Feature Engineering</SkillTag>
                            <SkillTag>Regression & Classification</SkillTag>
                            <SkillTag>Neural Networks</SkillTag>
                        </div>

                        {/* Right */}
                        <div>
                            <p className="font-funnel font-medium text-gray-900 mb-3">
                                Libraries
                            </p>
                            <div className="space-y-2 font-funnel text-gray-700">
                                <SkillTag>NumPy, Pandas</SkillTag>
                                <SkillTag>scikit-learn</SkillTag>
                                <SkillTag>TensorFlow, PyTorch</SkillTag>
                                <SkillTag>Seaborn (Visualization)</SkillTag>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Databases */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Databases & Storage
                    </h3>
                    <div className="mt-5 space-y-2 font-funnel text-gray-700">
                        <SkillTag>MongoDB</SkillTag>
                        <SkillTag>SQLite</SkillTag>
                        <SkillTag>PostgreSQL</SkillTag>
                    </div>
                </motion.div>

                {/* DevOps */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        DevOps, Tools & Environment
                    </h3>
                    <div className="mt-5 space-y-2 font-funnel text-gray-700">
                        <SkillTag>Docker</SkillTag>
                        <SkillTag>Linux</SkillTag>
                        <SkillTag>Git & GitHub</SkillTag>
                        <SkillTag>Postman</SkillTag>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
