import React from "react";
import { motion } from "framer-motion";
import setupImg from "../../assets/setup.jpg"; 

import { CardBody, CardContainer,CardItem } from "../ui/3d-card";

/* Animations */
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

/* Animated underline (same system as other sections) */
const PassionUnderline = () => {
    const LINE_WIDTH = "w-82";

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
                animate={{ x: ["-5%", "240%"] }}
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

/* Card style */
const cardStyle =
    "relative rounded-3xl bg-white/80 backdrop-blur-xl border border-black/5 \
     shadow-[0_20px_50px_rgba(0,0,0,0.06)] p-8 transition-all duration-300 \
     hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)]";

/* Tag */
const PassionTag = ({ children }) => (
    <span
        className="inline-flex items-center rounded-full
        bg-gray-100/70 px-3 py-1 text-sm font-medium text-gray-700
        ring-1 ring-black/5 transition-all duration-300
        hover:bg-white hover:text-gray-900 hover:ring-black/10"
    >
        {children}
    </span>
);

export default function Passion() {
    return (
        <section id="passion" className="relative mx-auto max-w-6xl px-6 py-5">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="font-funnel text-4xl font-extrabold text-gray-900">
                    Passion & Interests
                </h2>

                <PassionUnderline />

                <p className="font-funnel mt-4 max-w-2xl text-gray-600">
                    Activities that shape how I think, learn, and approach
                    problem-solving beyond structured work.
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
                {/* Coding */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Building Through Code
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I enjoy translating ideas into working systems through
                        hands-on coding. Experimenting, refactoring, and
                        improving implementations helps me understand concepts
                        deeply.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <PassionTag>Hands-on Learning</PassionTag>
                        <PassionTag>System Building</PassionTag>
                        <PassionTag>Iteration</PassionTag>
                    </div>
                </motion.div>

                {/* Exploring Tech */}
                <motion.div variants={item} className={cardStyle}>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Exploring New Technologies
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I actively explore emerging tools, frameworks, and ideas
                        through documentation, experiments, and real-world use
                        cases to stay aligned with industry evolution.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <PassionTag>Curiosity</PassionTag>
                        <PassionTag>Tech Research</PassionTag>
                        <PassionTag>Continuous Growth</PassionTag>
                    </div>
                </motion.div>

                {/* Gaming */}
                <motion.div
                    variants={item}
                    className={`${cardStyle} md:col-span-2`}
                >
                    <h3 className="font-funnel text-xl font-semibold text-gray-900">
                        Gameplay & Interactive Systems
                    </h3>
                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed max-w-3xl">
                        I enjoy gameplay experiences that involve strategy,
                        mechanics, and decision-making. Games expose me to
                        complex systems where logic, performance, and user
                        experience intersect—concepts that strongly relate to
                        software and AI system design.
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                        <PassionTag>Strategic Thinking</PassionTag>
                        <PassionTag>Decision Making</PassionTag>
                        <PassionTag>Systems Perspective</PassionTag>
                    </div>
                </motion.div>
            </motion.div>

            {/* Setup / Workspace */}
            {/* Workspace & Setup Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="mt-17 max-w-4xl"
            >
                {/* Text */}
                <div>
                    <h3 className="font-funnel text-xl font-semibold text-gray-900 mr-0.5">
                        My Workspace & Setup
                    </h3>

                    <p className="mt-4 font-funnel text-gray-700 leading-relaxed">
                        I value a clean, focused workspace that supports deep
                        thinking and long coding sessions. My setup is
                        intentionally minimal, designed to reduce distractions
                        while supporting productivity and creative flow.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        <PassionTag>Focused Environment</PassionTag>
                        <PassionTag>Deep Work</PassionTag>
                        <PassionTag>Productivity</PassionTag>
                    </div>
                </div>

                {/* Image (Outside Card) */}
                {/* 3D Workspace Image */}
                <CardContainer containerClassName="mt-12">
                    <CardBody className="h-auto w-full max-w-3xl rounded-2xl">
                        <CardItem translateZ={50} className="w-full">
                            <img
                                src={setupImg}
                                alt="Workspace setup"
                                className="w-full rounded-2xl object-cover"
                            />
                        </CardItem>
                    </CardBody>
                </CardContainer>

                {/* Caption */}
                <p className="px-17 mt-3 font-funnel text-sm text-gray-500">
                    A workspace I’m continuously refining to support focused
                    work and learning.
                </p>
            </motion.div>
        </section>
    );
}
