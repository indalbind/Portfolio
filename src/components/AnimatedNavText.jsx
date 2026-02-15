import { motion } from "framer-motion";

function AnimatedNavText({ text, href }) {
    return (
        <motion.a
            href={href}
            className="relative inline-block overflow-hidden text-white font-medium rounded"
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {/* Normal text */}
            <motion.span
                className="block"
                variants={{
                    rest: {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    },
                    hover: {
                        y: -12,
                        opacity: 0,
                        filter: "blur(5px)",
                    },
                }}
                transition={{ duration: 0.50, ease: "easeOut" }}
            >
                {text}
            </motion.span>

            {/* Flipped / incoming text */}
            <motion.span
                className="absolute left-0 top-0 block text-blue-400"
                variants={{
                    rest: {
                        y: 12,
                        opacity: 0,
                        filter: "blur(4px)",
                    },
                    hover: {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                    },
                }}
                transition={{ duration: 0.50, ease: "easeOut" }}
            >
                {text}
            </motion.span>
        </motion.a>
    );
}

export default AnimatedNavText;
