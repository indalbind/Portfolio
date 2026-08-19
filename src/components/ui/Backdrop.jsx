// Fixed page background: ambient color glows + noise.
export default function Backdrop() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute -top-40 left-1/2 h-[34rem] w-[54rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
            <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-violet-500/8 blur-[120px]" />
            <div className="absolute bottom-0 -right-40 h-[30rem] w-[30rem] rounded-full bg-amber-500/6 blur-[130px]" />

            {/* Fine noise */}
            <svg className="absolute inset-0 h-full w-full opacity-[0.06]">
                <filter id="pageNoise">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="3"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#pageNoise)" />
            </svg>
        </div>
    );
}
