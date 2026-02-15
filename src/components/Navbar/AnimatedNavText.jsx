import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function AnimatedNavText({ text, href, isActive, onClick }) {
    const [isHovered, setIsHovered] = useState(false);
    const ref = useRef(null);

    // Reset animation when clicking outside this link
    useEffect(() => {
        function handleOutsideClick(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsHovered(false);
            }
        }
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <motion.div
            ref={ref}
            className="relative inline-block"
            initial="rest"
            animate={isHovered ? "hover" : "rest"}
        >
            <Link
                to={href}
                onClick={onClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`relative inline-block overflow-hidden font-funnel font-medium rounded
                ${isActive ? "text-blue-400" : "text-white"}`}
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
