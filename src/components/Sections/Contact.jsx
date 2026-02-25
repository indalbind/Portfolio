import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

// --- Utility Components ---
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

// --- Contact Data ---
const contactDetails = [
    {
        icon: Mail,
        title: "Email",
        values: ["indalbind.datascience@gmail.com", "indalbind4562@gmail.com"],
        link: "mailto:indalbind.datascience@gmail.com",
    },
    {
        icon: Phone,
        title: "Phone",
        values: ["+91-9569843114"],
        link: "tel:+919569843114",
    },
    {
        icon: MapPin,
        title: "Location",
        values: ["India | Uttar Pradesh, Bhadohi"],
        link: null,
    },
];

const Contact = () => {
    // --- Form State ---
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    // Status can be: 'idle', 'submitting', 'success', 'error'
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // --- Frontend Email Sending Logic ---
    // --- Frontend Email Sending Logic (Formspree) ---
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojnybbe"; 

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
                setTimeout(() => setStatus("idle"), 5000); // Reset button after 5 seconds
            } else {
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
        <section id="contact" className="relative w-full py-24 overflow-hidden">
            <div className="relative mx-auto max-w-6xl px-7">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-start">
                    {/* LEFT COLUMN: Contact Info Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="mb-8">
                            <h3 className="text-3xl font-bold text-slate-900 font-funnel mb-3">
                                Let's build something together.
                            </h3>
                            <p className="font-funnel text-slate-600 leading-relaxed text-sm">
                                Whether you have a question, a project
                                opportunity, or just want to say hi, my inbox is
                                always open.
                            </p>
                        </div>

                        {contactDetails.map((item, index) => (
                            <a
                                key={index}
                                href={item.link ? item.link : undefined}
                                className={
                                    item.link
                                        ? "block cursor-pointer"
                                        : "block cursor-default"
                                }
                            >
                                <GlassCard
                                    delay={index * 0.1}
                                    className="font-funnel p-6! flex flex-col items-start group/card"
                                >
                                    {/* Updated: Smaller, pill-shaped icon container exactly like the screenshot */}
                                    <div className="w-16 h-8 rounded-full bg-linear-to-br from-indigo-50 to-rose-50 border border-white shadow-sm flex items-center justify-center text-indigo-500 group-hover/card:scale-105 transition-transform duration-300 mb-4">
                                        <item.icon
                                            size={16}
                                            strokeWidth={2.5}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900 mb-2 font-funnel">
                                            {item.title}
                                        </p>
                                        <div className="space-y-1">
                                            {item.values.map((val, i) => (
                                                <p
                                                    key={i}
                                                    className="text-sm text-slate-600 font-medium"
                                                >
                                                    {val}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                            </a>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Contact Form */}
                    <div className="lg:col-span-3">
                        <GlassCard className="p-8! sm:p-10!">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* Name & Email Row */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 font-funnel">
                                            Your Name
                                        </label>
                                        <input
                                            required
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            type="text"
                                            placeholder="Shadow"
                                            className="font-iceland text-1xl w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-slate-700 font-funnel">
                                            Email Address
                                        </label>
                                        <input
                                            required
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            type="email"
                                            placeholder="shadow@gmail.com"
                                            className="font-iceland text-1xl w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 font-funnel">
                                        Subject
                                    </label>
                                    <input
                                        required
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="Project Inquiry"
                                        className="font-iceland text-1xl w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400"
                                    />
                                </div>

                                {/* Message */}
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-700 font-funnel">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Tell me about your project..."
                                        className="font-iceland text-1xl w-full px-4 py-3 rounded-xl bg-white/60 border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white transition-all text-slate-700 placeholder:text-slate-400 resize-none"
                                    ></textarea>
                                </div>

                                {/* Dynamic Submit Button */}
                                <motion.button
                                    disabled={status === "submitting"}
                                    whileHover={
                                        status === "idle" ? { scale: 1.02 } : {}
                                    }
                                    whileTap={
                                        status === "idle" ? { scale: 0.98 } : {}
                                    }
                                    className={`w-full flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold font-funnel text-white transition-all shadow-lg 
                                        ${
                                            status === "success"
                                                ? "bg-emerald-500 shadow-emerald-200"
                                                : status === "error"
                                                  ? "bg-rose-500 shadow-rose-200"
                                                  : "bg-linear-to-r from-indigo-500 to-rose-400 shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-300"
                                        }
                                    `}
                                >
                                    {status === "idle" && (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={18} />
                                        </>
                                    )}
                                    {status === "submitting" && (
                                        <>
                                            <span>Sending...</span>
                                            <Loader2
                                                size={18}
                                                className="animate-spin"
                                            />
                                        </>
                                    )}
                                    {status === "success" && (
                                        <>
                                            <span>Message Sent!</span>
                                            <CheckCircle2 size={18} />
                                        </>
                                    )}
                                    {status === "error" && (
                                        <span>Oops! Something went wrong.</span>
                                    )}
                                </motion.button>
                            </form>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>
    );
};;

export default Contact;
