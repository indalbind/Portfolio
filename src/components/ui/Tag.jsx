// Small mono chip used for skills / tech tags.
export default function Tag({ children, color }) {
    return (
        <span
            className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-300 transition-colors duration-200 hover:border-sky-400/40 hover:text-white"
            style={
                color
                    ? { borderColor: `${color}44`, color: color }
                    : undefined
            }
        >
            {children}
        </span>
    );
}
