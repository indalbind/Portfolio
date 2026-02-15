import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SectionDivider = ({ label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className="py-2 flex items-center gap-6">
            <motion.div
                className="h-px flex-1 bg-linear-to-r from-transparent via-zinc-300/60 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
            />

            {label && (
                <span className="font-funnel text-xs uppercase tracking-widest text-zinc-500">
                    {label}
                </span>
            )}

            <motion.div
                className="h-px flex-1 bg-linear-to-r from-transparent via-zinc-300/60 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
            />
        </div>
    );
};

export default SectionDivider;
