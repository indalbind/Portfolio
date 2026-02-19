import SocialIcons from "../ui/SocialIcons";
import { useEffect, useState } from "react";
import Highlight from "../ui/Highlight";
import NeuralNetwork from "../ui/NeuralNetwork";
import SectionDivider from "../ui/SectionDivider";
import WhatIDo from "./WhatIDo";
import Core_tech from "../ui/Core_tech"



const Home = () => {
    const [active, setActive] = useState("ml");

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev === "ml" ? "dl" : "ml"));
        }, 2600);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* HERO */}
            <section className="relative min-h-screen flex items-center px-6 md:px-16">
                <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h1 className="font-iceland text-4xl md:text-6xl text-zinc-800 leading-tight">
                            <Highlight active={active === "ml"} color="emerald">
                                Machine Learning,
                            </Highlight>{" "}
                            <Highlight active={active === "dl"} color="red">
                                Deep Learning
                            </Highlight>{" "}
                            & Web developer
                        </h1>

                        <p className="font-funnel max-w-xl text-zinc-600 text-sm md:text-base leading-relaxed">
                            I’m <span className="font-bold text-amber-950">Indal Bind </span>, a <b>full-stack developer </b> and{" "}
                            <b>AI/ML & Deep Learning engineer </b> pursuing the
                            IIT Madras BS Degree. I design scalable backends,
                            modern frontends, and deploy intelligent systems for
                            real-world use.
                        </p>

                        <SocialIcons />
                    </div>

                    <div className="flex justify-center items-center mt-10 md:mt-0 w-full">
                        <NeuralNetwork />
                    </div>
                </div>
            </section>
            {/* DIVIDER */}
            <SectionDivider label="Overview" />
            {/* WHAT I DO */}
            <WhatIDo />
            <SectionDivider label="Tools" />
            <Core_tech></Core_tech>
            
        </>
    );
};

export default Home;
