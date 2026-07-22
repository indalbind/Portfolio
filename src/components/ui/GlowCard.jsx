import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Glass card with a mouse-tracking spotlight and subtle lift on hover.
export default function GlowCard({
    children,
    className = "",
    delay = 0,
    glow = "rgba(56,189,248,0.14)",
}) {
    const ref = useRef(null);
    const [spot, setSpot] = useState({ x: -999, y: -999 });

    const handleMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={() => setSpot({ x: -999, y: -999 })}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className={`glass group relative overflow-hidden rounded-2xl ${className}`}
        >
            <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: `radial-gradient(320px circle at ${spot.x}px ${spot.y}px, ${glow}, transparent 65%)`,
                }}
            />
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
