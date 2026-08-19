import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
    GraduationCap,
    Award,
    BadgeCheck,
    Globe,
    Sparkles,
    Briefcase,
    Building2,
    FlaskConical,
    ArrowUpRight,
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

// Presentation per experience `kind` — add a key here to support a new type.
const expKinds = {
    freelance: {
        icon: Briefcase,
        label: "Freelance",
        badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
        glow: "rgba(52,211,153,0.14)",
    },
    client: {
        icon: Briefcase,
        label: "Client work",
        badge: "border-emerald-400/25 bg-emerald-400/10 text-emerald-300",
        glow: "rgba(52,211,153,0.14)",
    },
    internship: {
        icon: Building2,
        label: "Internship",
        badge: "border-amber-400/25 bg-amber-400/10 text-amber-300",
        glow: "rgba(251,191,36,0.14)",
    },
    fulltime: {
        icon: Building2,
        label: "Full-time",
        badge: "border-sky-400/25 bg-sky-400/10 text-sky-300",
        glow: "rgba(56,189,248,0.14)",
    },
    project: {
        icon: FlaskConical,
        label: "Projects",
        badge: "border-violet-400/25 bg-violet-400/10 text-violet-300",
        glow: "rgba(167,139,250,0.14)",
    },
};

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

            {/* Primary focus — a compact strip instead of a sticky side column */}
            <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="-mt-8 mb-12 flex flex-wrap items-center gap-3"
            >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-slate-500">
                    primary focus
                </span>
                {focusAreas.map((focus) => (
                    <span
                        key={focus}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-sky-300"
                    >
                        {focus}
                    </span>
                ))}
            </motion.div>

            {/* Timeline rail — grows with the list, no fixed two-column layout */}
            <div className="relative">
                <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-white/8 md:block" />

                <div className="space-y-6">
                    {experience.map((exp, i) => {
                        const { icon: Icon, label, badge, glow } = expKinds[exp.kind] ?? expKinds.project;
                        return (
                            <div
                                key={`${exp.role}-${exp.org}`}
                                className="relative md:pl-14"
                            >
                                <span className="absolute left-4 top-9 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-void bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)] md:block" />

                                <GlowCard delay={i * 0.08} glow={glow} className="p-8">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="min-w-0">
                                            <span
                                                className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.15em] uppercase ${badge}`}
                                            >
                                                {label}
                                            </span>
                                            <h3 className="mt-3 font-display text-xl font-bold text-white">
                                                {exp.role}
                                            </h3>
                                            <p className="mt-1 font-mono text-xs text-slate-500">
                                                {exp.org}
                                                {exp.period && (
                                                    <>
                                                        <span className="text-slate-700"> | </span>
                                                        {exp.period}
                                                    </>
                                                )}
                                                {exp.location && (
                                                    <>
                                                        <span className="text-slate-700"> | </span>
                                                        {exp.location}
                                                    </>
                                                )}
                                            </p>
                                            {exp.summary && (
                                                <p className="mt-3 text-sm text-slate-400">
                                                    {exp.summary}
                                                </p>
                                            )}
                                        </div>
                                        <span className="shrink-0 rounded-xl border border-white/10 bg-white/5 p-3 text-violet-400">
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

                                    {(exp.stack?.length || exp.link) && (
                                        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/8 pt-5">
                                            {exp.stack?.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-md border border-white/8 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-slate-400"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {exp.link && (
                                                <a
                                                    href={exp.link.href}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-sky-400 transition-colors hover:text-sky-300"
                                                >
                                                    {exp.link.label}
                                                    <ArrowUpRight size={13} />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </GlowCard>
                            </div>
                        );
                    })}
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
