import { motion } from "framer-motion";

const stroke = "#6ee7b7"; // emerald-300
const faded = "rgba(16,185,129,0.25)";

export default function IsometricCubeNetwork() {
    return (
        <motion.svg
            width="520"
            height="420"
            viewBox="0 0 520 420"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            {/* LEFT CUBE */}
            <Cube x={120} y={170} />

            {/* CENTER CUBE */}
            <Cube x={260} y={240} />

            {/* RIGHT CUBE */}
            <Cube x={380} y={200} />

            {/* CONNECTION LINES */}
            <Connection from={[170, 200]} to={[260, 260]} />
            <Connection from={[330, 260]} to={[380, 230]} />
        </motion.svg>
    );
}

/* ---------- CUBE ---------- */

function Cube({ x, y }) {
    return (
        <g>
            {/* Edges */}
            {cubeLines(x, y).map((line, i) => (
                <motion.line
                    key={i}
                    {...line}
                    stroke={faded}
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 2,
                        delay: i * 0.08,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Nodes */}
            {cubeNodes(x, y).map((n, i) => (
                <motion.circle
                    key={i}
                    cx={n[0]}
                    cy={n[1]}
                    r="2.3"
                    fill={stroke}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                        duration: 2.5,
                        delay: i * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </g>
    );
}

/* ---------- CONNECTION ---------- */

function Connection({ from, to }) {
    return (
        <>
            <motion.line
                x1={from[0]}
                y1={from[1]}
                x2={to[0]}
                y2={to[1]}
                stroke={faded}
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />

            {/* Signal dot */}
            <motion.circle
                r="2"
                fill={stroke}
                initial={{ cx: from[0], cy: from[1], opacity: 0 }}
                animate={{
                    cx: [from[0], to[0]],
                    cy: [from[1], to[1]],
                    opacity: [0, 1, 0],
                }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </>
    );
}

/* ---------- GEOMETRY ---------- */

function cubeLines(x, y) {
    return [
        // front square
        { x1: x, y1: y, x2: x + 60, y2: y },
        { x1: x + 60, y1: y, x2: x + 60, y2: y + 60 },
        { x1: x + 60, y1: y + 60, x2: x, y2: y + 60 },
        { x1: x, y1: y + 60, x2: x, y2: y },

        // depth
        { x1: x, y1: y, x2: x - 40, y2: y - 30 },
        { x1: x + 60, y1: y, x2: x + 20, y2: y - 30 },
        { x1: x + 60, y1: y + 60, x2: x + 20, y2: y + 30 },
        { x1: x, y1: y + 60, x2: x - 40, y2: y + 30 },

        // back square
        { x1: x - 40, y1: y - 30, x2: x + 20, y2: y - 30 },
        { x1: x + 20, y1: y - 30, x2: x + 20, y2: y + 30 },
        { x1: x + 20, y1: y + 30, x2: x - 40, y2: y + 30 },
        { x1: x - 40, y1: y + 30, x2: x - 40, y2: y - 30 },
    ];
}

function cubeNodes(x, y) {
    return [
        [x, y],
        [x + 60, y],
        [x + 60, y + 60],
        [x, y + 60],
        [x - 40, y - 30],
        [x + 20, y - 30],
        [x + 20, y + 30],
        [x - 40, y + 30],
    ];
}
