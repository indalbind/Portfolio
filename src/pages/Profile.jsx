import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    GraduationCap,
    Award,
    BadgeCheck,
    Globe,
    Sparkles,
    Cpu,
    Code2,
} from "lucide-react";

import { Section, SectionHeading } from "../components/ui/Section";
import GlowCard from "../components/ui/GlowCard";
import {
    education,
    experience,
    focusAreas,
    achievements,
    certifications,
    languages,
} from "../data/portfolio";

const expIcons = [Cpu, Code2];

function Education() {
    const timelineRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: timelineRef,
        offset: ["start 80%", "end 55%"],
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <Section className="pt-40">
            <SectionHeading
                kicker="the journey"
                title="Education"
                description="Academic milestones on the road from curiosity to engineering."
            />

            <div ref={timelineRef} className="relative">
                {/* Beam */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-white/8 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                        style={{ scaleY, transformOrigin: "top" }}
                        className="absolute inset-0 bg-linear-to-b from-sky-400 via-violet-400 to-amber-400 shadow-[0_0_14px_rgba(56,189,248,0.5)]"
                    />
                </div>

                <div className="space-y-12">
                    {education.map((edu, i) => {
                        const right = i % 2 === 1;
                        return (
                            <div
                                key={edu.title}
                                className={`relative flex items-start md:items-center ${
                                    right ? "md:flex-row-reverse" : ""
                                } md:justify-between`}
                            >
                                <span className="absolute left-4 top-7 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-void bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] md:left-1/2 md:top-1/2 md:-translate-y-1/2" />

                                <div className="ml-12 w-full md:ml-0 md:w-[46%]">
                                    <GlowCard delay={i * 0.1} className="p-6">
                                        <div className="mb-2 flex items-start justify-between gap-3">
                                            <h3 className="font-display text-lg font-semibold text-white">
                                                {edu.title}
                                            </h3>
                                            <GraduationCap
                                                size={19}
                                                className="mt-1 shrink-0 text-sky-400/70"
                                            />
                                        </div>
                                        <p className="font-mono text-xs text-slate-500">
                                            {edu.org}{" "}
                                            <span className="text-slate-700">|</span>{" "}
                                            {edu.time}
                                        </p>
                                        <span className="mt-4 inline-flex items-center gap-2 rounded-lg border border-amber-400/25 bg-amber-400/10 px-3 py-1 font-mono text-xs font-semibold text-amber-300">
                                            <Award size={13} />
                                            {edu.meta}
                                        </span>
                                    </GlowCard>
                                </div>
                                <div className="hidden md:block md:w-[46%]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
}

function Experience() {
    return (
        <Section>
            <SectionHeading
                kicker="hands-on"
                title="Experience"
                description="Practical engineering experience across machine learning systems and full-stack development."
            />

            <div className="grid items-start gap-8 lg:grid-cols-3">
                {/* Experience cards */}
                <div className="space-y-6 lg:col-span-2">
                    {experience.map((exp, i) => {
                        const Icon = expIcons[i % expIcons.length];
                        return (
                            <GlowCard key={exp.title} delay={i * 0.1} className="p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <h3 className="font-display text-xl font-bold text-white">
                                            {exp.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-slate-400">
                                            {exp.subtitle}
                                        </p>
                                    </div>
                                    <span className="rounded-xl border border-white/10 bg-white/5 p-3 text-violet-400">
                                        <Icon size={22} />
                                    </span>
                                </div>
                                <ul className="mt-6 space-y-3">
                                    {exp.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex items-start gap-3 text-sm text-slate-300"
                                        >
                                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </GlowCard>
                        );
                    })}
                </div>

                {/* Focus areas — sticky */}
                <div className="space-y-5 lg:sticky lg:top-28">
                    {focusAreas.map((focus, i) => (
                        <motion.div
                            key={focus}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.12 }}
                            whileHover={{ scale: 1.02 }}
                            className="glass relative overflow-hidden rounded-2xl p-8 text-center"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-400/60 to-transparent" />
                            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500">
                                primary focus
                            </p>
                            <h4 className="text-gradient mt-3 font-display text-xl font-bold">
                                {focus}
                            </h4>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}

function Achievements() {
    return (
        <Section>
            <SectionHeading
                kicker="milestones"
                title="Achievements"
            />
            <div className="grid gap-5 md:grid-cols-2">
                {achievements.map((achievement, i) => (
                    <GlowCard
                        key={achievement}
                        delay={i * 0.08}
                        glow="rgba(52,211,153,0.14)"
                        className={`p-6 ${
                            i === achievements.length - 1 ? "md:col-span-2" : ""
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-400">
                                <Sparkles size={20} />
                            </span>
                            <span className="font-display text-base font-semibold text-slate-100">
                                {achievement}
                            </span>
                        </div>
                    </GlowCard>
                ))}
            </div>
        </Section>
    );
}

function CertsAndLanguages() {
    return (
        <Section>
            <div className="grid gap-14 md:grid-cols-2">
                {/* Certifications */}
                <div>
                    <SectionHeading kicker="verified" title="Certifications" />
                    <div className="flex flex-wrap gap-3">
                        {certifications.map((cert, i) => (
                            <motion.span
                                key={cert}
                                initial={{ opacity: 0, scale: 0.92 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.06 }}
                                className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/40"
                            >
                                <BadgeCheck size={15} className="text-sky-400" />
                                {cert}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div>
                    <SectionHeading kicker="spoken" title="Languages" />
                    <div className="space-y-6">
                        {languages.map((lang, i) => (
                            <div key={lang.name}>
                                <div className="mb-2 flex items-center justify-between">
                                    <span className="flex items-center gap-2 text-sm font-semibold text-white">
                                        <Globe size={14} className="text-violet-400" />
                                        {lang.name}
                                    </span>
                                    <span className="glass rounded-md px-2 py-0.5 font-mono text-[11px] text-slate-400">
                                        {lang.level}
                                    </span>
                                </div>
                                <div className="h-2 w-full overflow-hidden rounded-full border border-white/8 bg-white/5">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${lang.percent}%` }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.1,
                                            delay: i * 0.15,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="h-full rounded-full bg-linear-to-r from-sky-400 to-violet-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default function Profile() {
    return (
        <>
            <Education />
            <Experience />
            <Achievements />
            <CertsAndLanguages />
        </>
    );
}
