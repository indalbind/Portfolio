import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const WobbleCard = ({ children, containerClassName, className }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (event.clientX - (rect.left + rect.width / 2)) / 20;
        const y = (event.clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };

    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
                    : "translate3d(0px, 0px, 0)",
                transition: "transform 0.15s ease-out",
            }}
            className={cn(
                "relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur-xl shadow-lg",
                containerClassName,
            )}
        >
            <div className={cn("relative h-full px-6 py-8", className)}>
                {children}
            </div>
        </motion.section>
    );
};
