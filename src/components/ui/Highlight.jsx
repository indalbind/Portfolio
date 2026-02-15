import { motion } from "framer-motion";

const Highlight = ({ children, active, color }) => {
    const bgColor = color === "red" ? "bg-red-400/45" : "bg-emerald-300/50";

    return (
        <span className="relative inline-block px-2">
            {/* Highlight sweep */}
            <motion.span
                className={`absolute inset-x-0 inset-y-[12%] rounded-sm ${bgColor}`}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={
                    active
                        ? { scaleX: 1, opacity: 1 }
                        : { scaleX: 0, opacity: 0 }
                }
                transition={{
                    scaleX: {
                        duration: 1.2,
                        ease: "easeInOut",
                    },
                    opacity: {
                        duration: 0.15,
                    },
                }}
                style={{ transformOrigin: "left" }}
            />

            {/* Text */}
            <span className="relative z-10">{children}</span>
        </span>
    );
};

export default Highlight;
