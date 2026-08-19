import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Loader2,
    CheckCircle2,
} from "lucide-react";

import { Section, SectionHeading } from "../components/ui/Section";
import GlowCard from "../components/ui/GlowCard";
import SocialIcons from "../components/ui/SocialIcons";
import { profile } from "../data/portfolio";

const contactDetails = [
    {
        icon: Mail,
        title: "Email",
        values: profile.emails,
        link: `mailto:${profile.emails[0]}`,
        accent: "text-sky-400",
    },
    {
        icon: Phone,
        title: "Phone",
        values: [profile.phone],
        link: `tel:${profile.phone.replace(/-/g, "")}`,
        accent: "text-violet-400",
    },
    {
        icon: MapPin,
        title: "Location",
        values: [profile.location],
        link: null,
        accent: "text-amber-400",
    },
];

const inputCls =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 transition-all duration-300 focus:border-sky-400/50 focus:bg-white/8 focus:outline-none focus:ring-2 focus:ring-sky-400/20";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        _gotcha: "",
    });
    const [status, setStatus] = useState("idle");

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!profile.formspreeEndpoint) {
            console.error("Formspree endpoint is not configured.");
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
            return;
        }

        setStatus("submitting");
        try {
            const response = await fetch(profile.formspreeEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    // Formspree uses these to set the reply-to and the
                    // subject line of the notification email.
                    _replyto: formData.email,
                    _subject: `Portfolio: ${formData.subject}`,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "", _gotcha: "" });
                setTimeout(() => setStatus("idle"), 5000);
            } else {
                const detail = await response.json().catch(() => null);
                console.error("Formspree rejected the submission:", response.status, detail);
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
            setTimeout(() => setStatus("idle"), 3000);
        }
    };

    return (
        <Section className="pt-40">
            <SectionHeading
                kicker="ping me"
                title="Let's build something together."
                description="Whether you have a question, a project opportunity, or just want to say hi — my inbox is always open."
            />

            <div className="grid items-start gap-10 lg:grid-cols-5">
                {/* Info cards */}
                <div className="space-y-5 lg:col-span-2">
                    {contactDetails.map((item, i) => {
                        const card = (
                            <GlowCard delay={i * 0.1} className="p-6">
                                <span
                                    className={`inline-flex rounded-xl border border-white/10 bg-white/5 p-3 ${item.accent}`}
                                >
                                    <item.icon size={19} />
                                </span>
                                <p className="mt-4 font-display text-sm font-semibold text-white">
                                    {item.title}
                                </p>
                                <div className="mt-1.5 space-y-1">
                                    {item.values.map((val) => (
                                        <p
                                            key={val}
                                            className="font-mono text-xs text-slate-400"
                                        >
                                            {val}
                                        </p>
                                    ))}
                                </div>
                            </GlowCard>
                        );
                        return item.link ? (
                            <a key={item.title} href={item.link} className="block">
                                {card}
                            </a>
                        ) : (
                            <div key={item.title}>{card}</div>
                        );
                    })}

                    <div className="flex items-center gap-4 pt-2">
                        <span className="font-mono text-xs text-slate-500">
                            or find me on
                        </span>
                        <SocialIcons />
                    </div>
                </div>

                {/* Form */}
                <div className="lg:col-span-3">
                    <GlowCard className="p-8 md:p-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid gap-6 sm:grid-cols-2">
                                <div className="space-y-2">
                                    <label className="font-mono text-xs font-medium text-slate-400">
                                        your_name
                                    </label>
                                    <input
                                        required
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Shadow"
                                        className={inputCls}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-mono text-xs font-medium text-slate-400">
                                        email_address
                                    </label>
                                    <input
                                        required
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        placeholder="shadow@gmail.com"
                                        className={inputCls}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs font-medium text-slate-400">
                                    subject
                                </label>
                                <input
                                    required
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Project Inquiry"
                                    className={inputCls}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="font-mono text-xs font-medium text-slate-400">
                                    message
                                </label>
                                <textarea
                                    required
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className={`${inputCls} resize-none`}
                                />
                            </div>

                            {/* Formspree honeypot: bots fill this, humans never
                                see it. Submissions with it set are dropped. */}
                            <input
                                type="text"
                                name="_gotcha"
                                tabIndex={-1}
                                autoComplete="off"
                                aria-hidden="true"
                                className="hidden"
                                value={formData._gotcha}
                                onChange={handleChange}
                            />

                            <motion.button
                                disabled={status === "submitting"}
                                whileHover={status === "idle" ? { scale: 1.01 } : {}}
                                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                                className={`flex w-full items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold text-white transition-all duration-300 ${
                                    status === "success"
                                        ? "bg-emerald-500 shadow-[0_0_24px_rgba(16,185,129,0.4)]"
                                        : status === "error"
                                          ? "bg-rose-500 shadow-[0_0_24px_rgba(244,63,94,0.4)]"
                                          : "bg-linear-to-r from-sky-500 to-violet-600 shadow-[0_0_22px_rgba(56,189,248,0.3)] hover:shadow-[0_0_34px_rgba(56,189,248,0.5)]"
                                }`}
                            >
                                {status === "idle" && (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={17} />
                                    </>
                                )}
                                {status === "submitting" && (
                                    <>
                                        <span>Sending...</span>
                                        <Loader2 size={17} className="animate-spin" />
                                    </>
                                )}
                                {status === "success" && (
                                    <>
                                        <span>Message Sent!</span>
                                        <CheckCircle2 size={17} />
                                    </>
                                )}
                                {status === "error" && (
                                    <span>Oops! Something went wrong.</span>
                                )}
                            </motion.button>
                        </form>
                    </GlowCard>
                </div>
            </div>
        </Section>
    );
}
