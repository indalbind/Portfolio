import { motion } from "framer-motion";

export function Section({ id, className = "", children }) {
    return (
        <section
            id={id}
            className={`relative mx-auto w-full max-w-6xl px-6 py-20 md:px-8 ${className}`}
        >
            {children}
        </section>
    );
}

// Mono kicker + display title + optional description.
export function SectionHeading({ kicker, title, description, align = "left" }) {
    const alignCls = align === "center" ? "text-center items-center" : "";
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-14 flex flex-col gap-4 ${alignCls}`}
        >
            {kicker && (
                <span className="font-mono text-xs tracking-[0.35em] uppercase text-sky-400/90">
                    {"// "}
                    {kicker}
                </span>
            )}
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
