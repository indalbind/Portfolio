import { WobbleCard } from "../ui/wobble-card";

const WhatIDo = () => {
    return (
        <section className="px-6 md:px-16 pb-32">
            <h2 className="mb-10 text-4xl font-iceland text-zinc-800">
                What I Do
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
                <WobbleCard>
                    <h3 className="text-lg font-semibold">
                        Full-Stack Development
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                        Scalable backends, REST APIs, and modern frontend
                        architectures.
                    </p>
                </WobbleCard>

                <WobbleCard>
                    <h3 className="text-lg font-semibold">Machine Learning</h3>
                    <p className="mt-2 text-sm text-zinc-600">
                        Model building, feature engineering, and evaluation
                        pipelines.
                    </p>
                </WobbleCard>

                <WobbleCard>
                    <h3 className="text-lg font-semibold">Deep Learning</h3>
                    <p className="mt-2 text-sm text-zinc-600">
                        Neural networks, intelligent systems, and deployment.
                    </p>
                </WobbleCard>
            </div>
        </section>
    );
};

export default WhatIDo;
