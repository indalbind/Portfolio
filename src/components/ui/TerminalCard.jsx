import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
    { text: "$ python train.py --model transformer", cls: "text-slate-300" },
    { text: "[data]   loading dataset... done (48,000 rows)", cls: "text-sky-300" },
    { text: "[train]  epoch 01/10  loss: 0.482  acc: 0.861", cls: "text-slate-400" },
    { text: "[train]  epoch 05/10  loss: 0.194  acc: 0.937", cls: "text-slate-400" },
    { text: "[train]  epoch 10/10  loss: 0.071  acc: 0.982", cls: "text-slate-400" },
    { text: "[eval]   f1-score: 0.976  ✓ passed", cls: "text-emerald-400" },
    { text: "$ docker build -t ai-service:v1 .", cls: "text-slate-300" },
    { text: "[deploy] serving at api.indal.dev  ●  live", cls: "text-amber-300" },
];

export default function TerminalCard() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => (c >= LINES.length ? 0 : c + 1));
        }, 900);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-lg">
            {/* Glow behind the card */}
            <div className="absolute -inset-6 rounded-3xl bg-linear-to-br from-sky-500/20 via-violet-500/10 to-transparent blur-2xl" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="glass relative overflow-hidden rounded-2xl shadow-2xl shadow-black/60"
            >
                {/* Title bar */}
                <div className="flex items-center gap-2 border-b border-white/8 bg-white/4 px-4 py-3">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-3 font-mono text-[11px] text-slate-400">
                        indal@ai-lab: ~/production
                    </span>
                </div>

                {/* Body */}
                <div className="h-64 space-y-2 px-5 py-4 font-mono text-[12px] leading-relaxed md:text-[13px]">
                    <AnimatePresence>
                        {LINES.slice(0, count).map((line) => (
                            <motion.p
                                key={line.text}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className={line.cls}
                            >
                                {line.text}
                            </motion.p>
                        ))}
                    </AnimatePresence>
                    <span className="animate-blink text-sky-400">▍</span>
                </div>
            </motion.div>

            {/* Floating status chips */}
            <motion.div
                className="glass absolute -right-4 -top-5 hidden rounded-xl px-4 py-2 font-mono text-[11px] text-emerald-300 md:block"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                ● model: deployed
            </motion.div>
            <motion.div
                className="glass absolute -bottom-5 -left-4 hidden rounded-xl px-4 py-2 font-mono text-[11px] text-sky-300 md:block"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                acc: 98.2%
            </motion.div>
        </div>
    );
}
