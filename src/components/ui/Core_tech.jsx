const tools = [
    // 🌐 Frontend
    { name: "HTML5", icon: "devicon-html5-plain colored" },
    { name: "CSS3", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },

    // 🧩 Backend
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "Python", icon: "devicon-python-plain colored" },

    // 🤖 Machine Learning
    { name: "scikit-learn", icon: "devicon-scikitlearn-plain colored" },
    { name: "Jupyter", icon: "devicon-jupyter-plain colored" },

    // 🧠 Deep Learning
    { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
    { name: "PyTorch", icon: "devicon-pytorch-original colored" },
    { name: "Keras", icon: "devicon-keras-plain colored" },

    // 🗄 Databases
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },

    // ⚙️ Tools
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain colored" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
];

const Core_tech = () => {
    return (
        <section className="px-6 md:px-16 pb-32">
            {/* Heading */}
            <h2 className="mb-10 text-4xl font-iceland text-zinc-800">
                The Tech which i use
            </h2>
            <p className="font-funnel mb-10 text-center text-sm text-zinc-600">
                Favorite tools that help me bring ideas to life.
            </p>

            {/* Icons grid */}
            <div className="mx-auto grid max-w-6xl grid-cols-5 gap-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
                {tools.map((tool) => (
                    <div
                        key={tool.name}
                        className="group flex h-16 w-16 items-center justify-center rounded-full
                       bg-white shadow-md transition-all duration-300
                       hover:-translate-y-1 hover:shadow-xl"
                        title={tool.name}
                    >
                        <i className={`${tool.icon} text-3xl`} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Core_tech;
