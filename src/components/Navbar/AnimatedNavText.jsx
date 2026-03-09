import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

function AnimatedNavText({ text, href, isActive, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative inline-block"
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
        >
            <Link
                to={href}
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative inline-block overflow-hidden font-funnel font-medium rounded"
                style={{ color: isActive ? "#5ca1ff" : "white" }}
            >
                {/* Normal text */}
                <motion.span
                    className="block"
                    variants={{
                        rest: { y: 0, opacity: 1, filter: "blur(0px)" },
                        hover: { y: -12, opacity: 0, filter: "blur(5px)" },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {text}
                </motion.span>

                {/* Flipped text */}
                <motion.span
                    className="absolute left-0 top-0 block pointer-events-none"
                    variants={{
                        rest: { y: 12, opacity: 0, filter: "blur(4px)" },
                        hover: { y: 0, opacity: 1, filter: "blur(0px)" },
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {text}
                </motion.span>
            </Link>
        </motion.div>
    );
}

export default AnimatedNavText;
