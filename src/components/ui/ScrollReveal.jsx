import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ScrollReveal = ({ children, delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.9,
                ease: "easeOut",
                delay,
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
