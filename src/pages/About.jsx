import { ExternalLink, Mail, Download, Quote } from "lucide-react";
import { motion } from "framer-motion";

import profileImg from "../assets/profile_final.png";
import setupImg from "../assets/setup.jpg";
import { Section, SectionHeading } from "../components/ui/Section";
import GlowCard from "../components/ui/GlowCard";
import Tag from "../components/ui/Tag";
import Reveal from "../components/ui/Reveal";
import {
    profile,
    about,
    techStack,
    softSkills,
    passions,
    workspace,
} from "../data/portfolio";

function Intro() {
    return (
        <Section className="pt-40">
            <div className="grid items-start gap-14 md:grid-cols-5">
                {/* Copy */}
                <div className="space-y-6 md:col-span-3">
                    <Reveal>
                        <span className="font-mono text-xs tracking-[0.35em] uppercase text-sky-400">
                            {"// about me"}
                        </span>
                    </Reveal>
                    <Reveal delay={0.08}>
                        <h1 className="font-display text-3xl font-bold leading-tight text-white md:text-5xl">
                            I'm <span className="text-gradient">Indal Bind</span>.
                            <br />
                            I live in India, where I build the future.
                        </h1>
                    </Reveal>

                    {about.paragraphs.map((para, i) => (
                        <Reveal key={i} delay={0.14 + i * 0.08}>
                            <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                                {para}
                            </p>
                        </Reveal>
                    ))}

                    <Reveal delay={0.42}>
                        <div className="glass relative rounded-2xl p-6">
                            <Quote
                                size={18}
                                className="absolute -top-2.5 left-6 text-sky-400"
                            />
                            <p className="text-sm italic leading-relaxed text-slate-300">
                                "{about.quote}"
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Photo + actions */}
                <div className="flex flex-col items-center gap-6 md:col-span-2 md:sticky md:top-28">
                    <Reveal delay={0.15} className="w-full max-w-60">
                        <div className="group relative">
                            <div className="absolute -inset-2 rounded-3xl bg-linear-to-br from-sky-500/30 via-violet-500/20 to-amber-500/20 opacity-60 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                            <img
                                src={profileImg}
                                alt="Indal Bind"
                                className="relative aspect-3/4 w-full rounded-2xl border border-white/10 object-cover object-[50%_2%] shadow-2xl shadow-black/60"
                            />
                        </div>
                    </Reveal>

                    <Reveal delay={0.25} className="w-full max-w-60">
                        <div className="flex flex-col gap-3">
                            <a
                                href={profile.resumeDownload}
                                download
                                className="flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-sky-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] active:scale-95"
                            >
                                <Download size={16} /> Download Resume
                            </a>
                            <a
                                href={profile.resumeView}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="glass flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-sky-400/40 hover:text-white active:scale-95"
                            >
                                View Resume <ExternalLink size={15} />
                            </a>
                            <span className="mt-1 flex items-center justify-center gap-2 font-mono text-xs text-slate-500">
                                <Mail size={13} /> {profile.emails[1]}
                            </span>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}

function TechStack() {
    return (
        <Section>
            <SectionHeading
                kicker="arsenal"
                title="Tech Stack"
                description="Technologies and tools I use to design, build, and deploy intelligent, production-ready systems."
            />
            <div className="grid gap-5 md:grid-cols-2">
                {techStack.map((group, i) => (
                    <GlowCard
                        key={group.category}
                        delay={i * 0.08}
                        glow={
                            group.learning
                                ? "rgba(52,211,153,0.14)"
                                : undefined
                        }
                        className={`p-7 ${group.span ? "md:col-span-2" : ""}`}
                    >
                        <div className="flex items-center gap-3">
                            <h3 className="font-display text-lg font-semibold text-white">
                                {group.category}
                            </h3>
                            {group.learning && (
                                <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[10px] text-emerald-300">
                                    ● currently learning
                                </span>
                            )}
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <Tag key={item}>{item}</Tag>
                            ))}
                        </div>
                    </GlowCard>
                ))}
            </div>
        </Section>
    );
}

function SoftSkills() {
    return (
        <Section>
            <SectionHeading
                kicker="beyond code"
                title="Professional Skills"
                description="Core professional traits that guide how I learn, collaborate, and build reliable systems in real-world environments."
            />
            <div className="grid gap-5 md:grid-cols-2">
                {softSkills.map((skill, i) => (
                    <GlowCard key={skill.title} delay={i * 0.08} className="p-7">
                        <h3 className="font-display text-lg font-semibold text-white">
                            {skill.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                            {skill.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {skill.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                    </GlowCard>
                ))}
            </div>
        </Section>
    );
}

function Passions() {
    return (
        <Section>
            <SectionHeading
                kicker="fuel"
                title="Passion & Interests"
                description="Activities that shape how I think, learn, and approach problem-solving beyond structured work."
            />
            <div className="grid gap-5 md:grid-cols-2">
                {passions.map((passion, i) => (
                    <GlowCard
                        key={passion.title}
                        delay={i * 0.08}
                        glow="rgba(167,139,250,0.14)"
                        className={`p-7 ${i === passions.length - 1 ? "md:col-span-2" : ""}`}
                    >
                        <h3 className="font-display text-lg font-semibold text-white">
                            {passion.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                            {passion.description}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {passion.tags.map((tag) => (
                                <Tag key={tag}>{tag}</Tag>
                            ))}
                        </div>
                    </GlowCard>
                ))}
            </div>
        </Section>
    );
}

function Workspace() {
    return (
        <Section>
            <SectionHeading
                kicker="battle station"
                title={workspace.title}
                description={workspace.description}
            />
            <div className="mb-8 flex flex-wrap gap-2">
                {workspace.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.015 }}
                className="group relative mx-auto max-w-3xl"
            >
                <div className="absolute -inset-3 rounded-3xl bg-linear-to-br from-sky-500/20 via-violet-500/15 to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <img
                    src={setupImg}
                    alt="Workspace setup"
                    className="relative w-full rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/60"
                />
            </motion.div>
            <p className="mt-4 text-center font-mono text-xs text-slate-500">
                {workspace.caption}
            </p>
        </Section>
    );
}

export default function About() {
    return (
        <>
            <Intro />
            <TechStack />
            <SoftSkills />
            <Passions />
            <Workspace />
        </>
    );
}
