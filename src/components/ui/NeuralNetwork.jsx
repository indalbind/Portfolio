import { motion } from "framer-motion";

function NeuralNetwork() {
    const layers = [5, 7, 5, 3];

    // These remain as your "internal coordinate system"
    const padding = 24;
    const width = 480;
    const height = 400;

    const innerWidth = width - padding * 2;
    const innerHeight = height - padding * 2;

    const layerGap = innerWidth / (layers.length - 1);
    const neuronRadius = 4;

    const layerDelay = 1.2;
    const signalDuration = 0.9;
    const cycleDuration = layerDelay * layers.length + 1;

    // Generate neuron positions (Logic unchanged)
    const neurons = layers.map((count, layerIndex) => {
        const gap = innerHeight / (count + 1);
        return Array.from({ length: count }).map((_, i) => ({
            x: padding + layerIndex * layerGap,
            y: padding + (i + 1) * gap,
            layer: layerIndex,
        }));
    });

    return (
        <motion.svg
            // 1. Set the viewBox to match your internal calculation dimensions
            viewBox={`0 0 ${width} ${height}`}
            // 2. Remove fixed width/height props and use CSS for responsiveness
            // "w-full h-auto" makes it fill the parent container while maintaining aspect ratio
            // "max-w-[480px]" prevents it from getting too huge on large screens
            className="w-full h-auto max-w-120 opacity-90 block"
            // 3. Ensure it scales correctly
            preserveAspectRatio="xMidYMid meet"
        >
            {/* CONNECTIONS */}
            {neurons.slice(0, -1).map((layer, i) =>
                layer.map((from) =>
                    neurons[i + 1].map((to, k) => (
                        <motion.line
                            key={`c-${i}-${from.y}-${k}`}
                            x1={from.x}
                            y1={from.y}
                            x2={to.x}
                            y2={to.y}
                            stroke="rgba(16,185,129,0.4)"
                            strokeWidth="1.3" // This scales automatically with the viewBox!
                            initial={{ opacity: 0.2 }}
                            animate={{ opacity: [0.2, 0.85, 0.2] }}
                            transition={{
                                duration: signalDuration,
                                delay: i * layerDelay,
                                repeat: Infinity,
                                repeatDelay: cycleDuration - signalDuration,
                                ease: "easeInOut",
                            }}
                        />
                    )),
                ),
            )}

            {/* SIGNAL FLOW */}
            {neurons.slice(0, -1).map((layer, i) =>
                layer.map((from) =>
                    neurons[i + 1].map((to, k) => (
                        <motion.circle
                            key={`s-${i}-${from.y}-${k}`}
                            r="2.5"
                            fill="#10b981"
                            initial={{ opacity: 0 }}
                            animate={{
                                cx: [from.x, to.x],
                                cy: [from.y, to.y],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: signalDuration,
                                delay: i * layerDelay,
                                repeat: Infinity,
                                repeatDelay: cycleDuration - signalDuration,
                                ease: "easeInOut",
                            }}
                        />
                    )),
                ),
            )}

            {/* NEURON FIRING */}
            {neurons.flat().map((n, i) => (
                <motion.circle
                    key={`n-${i}`}
                    cx={n.x}
                    cy={n.y}
                    r={neuronRadius}
                    fill="#020617"
                    stroke="#10b981"
                    strokeWidth="1.5"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{
                        scale: [1, 1.6, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: signalDuration,
                        delay: n.layer * layerDelay,
                        repeat: Infinity,
                        repeatDelay: cycleDuration - signalDuration,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </motion.svg>
    );
}

export default NeuralNetwork;
