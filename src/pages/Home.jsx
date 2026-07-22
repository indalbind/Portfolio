import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    Layers,
    BrainCircuit,
    Cpu,
    Workflow,
} from "lucide-react";

import { Section, SectionHeading } from "../components/ui/Section";
import GlowCard from "../components/ui/GlowCard";
import Tag from "../components/ui/Tag";
import Reveal from "../components/ui/Reveal";
import SocialIcons from "../components/ui/SocialIcons";
import Typewriter from "../components/ui/Typewriter";
import TerminalCard from "../components/ui/TerminalCard";
import { profile, whatIDo, techLogos } from "../data/portfolio";

const accentMap = {
    cyan: {
        icon: Layers,
        text: "text-sky-400",
        glow: "rgba(56,189,248,0.16)",
        bar: "from-sky-400 to-cyan-300",
    },
    violet: {
        icon: BrainCircuit,
        text: "text-violet-400",
        glow: "rgba(167,139,250,0.16)",
        bar: "from-violet-400 to-fuchsia-300",
    },
    amber: {
        icon: Cpu,
        text: "text-amber-400",
        glow: "rgba(251,191,36,0.14)",
        bar: "from-amber-400 to-orange-300",
    },
    mint: {
        icon: Workflow,
        text: "text-emerald-400",
        glow: "rgba(52,211,153,0.16)",
        bar: "from-emerald-400 to-teal-300",
    },
};

function Hero() {
    return (
        <section className="relative mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-28 pb-16 md:px-8">
            <div className="grid w-full items-center gap-14 lg:grid-cols-2">
                {/* Left — copy */}
                <div className="space-y-7">
                    <Reveal>
                        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] text-emerald-300">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                            </span>
                            open to opportunities
                        </span>
                    </Reveal>

                    <Reveal delay={0.08}>
                        <h1 className="font-display text-4xl font-bold leading-[1.1] text-white md:text-6xl">
                            Hi, I'm{" "}
                            <span className="text-gradient">{profile.name}</span>
                            <span className="mt-4 block min-h-[1.3em] text-2xl font-semibold text-slate-300 md:text-4xl">
                                <Typewriter words={profile.roles} />
                            </span>
                        </h1>
                    </Reveal>

                    <Reveal delay={0.16}>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                            {profile.intro}
                        </p>
                    </Reveal>

                    <Reveal delay={0.24}>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                to="/projects"
                                className="group flex items-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_22px_rgba(56,189,248,0.3)] transition-all duration-300 hover:shadow-[0_0_34px_rgba(56,189,248,0.5)] active:scale-95"
                            >
                                View Projects
                                <ArrowRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </Link>
                            <a
                                href={profile.resumeDownload}
                                download
                                className="glass flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:text-white active:scale-95"
                            >
                                <Download size={16} />
                                Resume
                            </a>
                        </div>
                    </Reveal>

                    <Reveal delay={0.32}>
                        <div className="flex items-center gap-5">
                            <SocialIcons />
                            <span className="hidden h-px w-24 bg-linear-to-r from-white/20 to-transparent md:block" />
                            <span className="hidden font-mono text-[11px] text-slate-500 md:block">
                                IIT Madras · BS Data Science
                            </span>
                        </div>
                    </Reveal>
                </div>

                {/* Right — animated terminal */}
                <div className="flex justify-center lg:justify-end">
                    <TerminalCard />
                </div>
            </div>
        </section>
    );
}

function TechMarquee() {
    const doubled = [...techLogos, ...techLogos];
    return (
        <div className="relative overflow-hidden border-y border-white/6 bg-white/2 py-6">
            {/* Edge fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-linear-to-r from-void to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-linear-to-l from-void to-transparent" />

            <div className="animate-marquee flex w-max items-center gap-12 px-6">
                {doubled.map((tool, i) => (
                    <div
                        key={`${tool.name}-${i}`}
                        className="flex items-center gap-2.5 opacity-60 transition-opacity duration-300 hover:opacity-100"
                        title={tool.name}
                    >
                        <i className={`${tool.icon} text-3xl`} />
                        <span className="font-mono text-xs text-slate-400">
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

function WhatIDo() {
    return (
        <Section id="what-i-do">
            <SectionHeading
                kicker="capabilities"
                title="What I Do"
                description="Four tracks, one direction — building intelligent systems end to end, from data to deployment."
            />

            <div className="grid gap-6 md:grid-cols-2">
                {whatIDo.map((item, i) => {
                    const accent = accentMap[item.accent];
                    const Icon = accent.icon;
                    return (
                        <GlowCard
                            key={item.title}
                            delay={i * 0.12}
                            glow={accent.glow}
                            className="p-7"
                        >
                            <div className="mb-5 flex items-start justify-between">
                                <span
                                    className={`inline-flex rounded-xl border border-white/10 bg-white/5 p-3 ${accent.text}`}
                                >
                                    <Icon size={22} />
                                </span>
                                {item.learning && (
                                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                                        ● learning
                                    </span>
                                )}
                            </div>
                            <h3 className="font-display text-lg font-semibold text-white">
                                {item.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                {item.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </div>
                            <div
                                className={`mt-6 h-0.5 w-12 rounded-full bg-linear-to-r ${accent.bar} opacity-70 transition-all duration-500 group-hover:w-24`}
                            />
                        </GlowCard>
                    );
                })}
            </div>
        </Section>
    );
}

function Stats() {
    const stats = [
        { value: "8.46", label: "CGPA — IIT Madras" },
        { value: "15+", label: "Tools & technologies" },
        { value: "3+", label: "Full-stack & ML projects" },
        { value: "∞", label: "Curiosity" },
    ];
    return (
        <Section className="pt-0">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {stats.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                        className="glass rounded-2xl p-6 text-center"
                    >
                        <p className="font-display text-3xl font-bold text-gradient">
                            {s.value}
                        </p>
                        <p className="mt-2 font-mono text-[11px] text-slate-500">
                            {s.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

export default function Home() {
    return (
        <>
            <Hero />
            <TechMarquee />
            <WhatIDo />
            <Stats />
        </>
    );
}
