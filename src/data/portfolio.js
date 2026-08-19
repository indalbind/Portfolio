// ─────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — edit your portfolio content here.
// ─────────────────────────────────────────────────────────────

export const profile = {
    name: "Indal Bind",
    firstName: "Indal",
    tagline: "AI/ML Engineer & Full-Stack Developer",
    roles: [
        "Machine Learning Engineer",
        "Deep Learning Engineer",
        "Full-Stack Developer",
        "MLOps Engineer (learning)",
        "Production AI Engineer (in progress)",
    ],
    intro: "I design scalable backends, modern frontends, and deploy intelligent systems for real-world use — currently pursuing the IIT Madras BS Degree in Data Science.",
    location: "Bhadohi, Uttar Pradesh, India",
    emails: ["indalbind.datascience@gmail.com", "indalbind4562@gmail.com"],
    phone: "+91-9569843114",
    resumeView:
        "https://drive.google.com/file/d/1OsHS3xazAZTEYo53J1fRwzd5S88sbYs6/view?usp=sharing",
    resumeDownload: "/Indal_Bind_cv.pdf",
    // Set VITE_FORMSPREE_ENDPOINT in .env (local) and in the Vercel project
    // env vars (production). The literal below is only a fallback.
    formspreeEndpoint:
        import.meta.env.VITE_FORMSPREE_ENDPOINT ||
        "https://formspree.io/f/xeajvoqw",
    socials: {
        github: "https://github.com/indalbind",
        linkedin: "https://www.linkedin.com/in/indaldatascientist",
    },
};

export const about = {
    headline: "I'm Indal Bind. I live in India, where I build the future.",
    paragraphs: [
        "I am a self-driven software developer focused on Machine Learning, Deep Learning, and AI systems, currently pursuing the IIT Madras BS Degree. I build data-driven solutions across the full ML lifecycle — from preprocessing and model development to evaluation, optimization, and deployment.",
        "My work emphasizes creating reliable AI systems that perform effectively under real-world constraints, with web development used primarily for deployment and system integration.",
        "I strongly believe in continuous learning and improving myself, so I try my best to learn in any situation possible — favorable or not.",
    ],
    quote: "If you ever spot me in the wild, don't hesitate to say hello. Let's grab a drink and geek out over end-to-end development with AI integration.",
};

export const whatIDo = [
    {
        title: "Full-Stack Development",
        description:
            "Scalable backends, REST APIs, and modern frontend architectures.",
        tags: ["MERN", "Flask", "FastAPI"],
        accent: "cyan",
    },
    {
        title: "Machine Learning",
        description:
            "Model building, feature engineering, and evaluation pipelines.",
        tags: ["scikit-learn", "Pandas", "Model Evaluation"],
        accent: "violet",
    },
    {
        title: "Deep Learning & AI",
        description:
            "Neural networks, Transformers, intelligent systems, and deployment.",
        tags: ["PyTorch", "TensorFlow", "Transformers"],
        accent: "amber",
    },
    {
        title: "MLOps & Deployment",
        description:
            "Taking models from notebook to production — containerized, automated, and monitored.",
        tags: ["Docker", "MLflow", "CI/CD"],
        accent: "mint",
        learning: true,
    },
];

export const techStack = [
    {
        category: "Frontend",
        items: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Vue.js",
            "Next.js",
            "Tailwind CSS",
            "Three.js / WebGL",
            "Framer Motion",
            "GSAP",
        ],
    },
    {
        category: "Backend & APIs",
        items: [
            "Node.js",
            "Express.js",
            "Python",
            "Flask",
            "FastAPI",
            "Pydantic",
            "RESTful APIs",
            "JWT Authentication",
        ],
    },
    {
        category: "Machine Learning & Deep Learning",
        span: true,
        items: [
            "NumPy",
            "Pandas",
            "scikit-learn",
            "TensorFlow",
            "PyTorch",
            "Keras",
            "Feature Engineering",
            "Neural Networks",
            "Seaborn",
        ],
    },
    {
        category: "Databases & Storage",
        items: ["MongoDB", "PostgreSQL", "SQLite", "VectorDB", "Prisma ORM"],
    },
    {
        category: "DevOps & Tools",
        items: [
            "Docker",
            "Linux",
            "Git & GitHub",
            "Postman",
            "Kubernetes",
            "Cloudflare Workers",
            "Vercel",
        ],
    },
    {
        category: "MLOps & Deployment",
        span: true,
        learning: true,
        items: [
            "Docker",
            "MLflow",
            "DVC",
            "CI/CD (GitHub Actions)",
            "Model Serving",
            "Monitoring",
        ],
    },
];

// devicon classes for the animated logo marquee
export const techLogos = [
    { name: "Python", icon: "devicon-python-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain colored" },
    { name: "Three.js", icon: "devicon-threejs-original colored" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "Express", icon: "devicon-express-original" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "scikit-learn", icon: "devicon-scikitlearn-plain colored" },
    { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
    { name: "PyTorch", icon: "devicon-pytorch-original colored" },
    { name: "Keras", icon: "devicon-keras-plain colored" },
    { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
    { name: "Prisma", icon: "devicon-prisma-original colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Cloudflare", icon: "devicon-cloudflare-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Postman", icon: "devicon-postman-plain colored" },
];

export const projects = [
    {
        title: "VYRL — Creative Studio Platform",
        subtitle: "Client Project · Next.js 15 + WebGL · Live in Production",
        category: "web",
        featured: true,
        github: "",
        liveDemo: "https://vyrl.co.nz",
        points: [
            "Built and shipped a production marketing platform for a Wellington-based creative studio, live at vyrl.co.nz",
            "Engineered an immersive front-end with React Three Fiber (WebGL), GSAP and Framer Motion — animated entry gate, hexagonal grid scenes and a scroll-driven media corridor",
            "Deployed to Cloudflare Workers via the OpenNext pipeline, diagnosing and fixing edge-runtime-only failures (no filesystem cache, no sharp image optimizer)",
            "Rebuilt the lead-intake pipeline so a brief is filed client-side — server-side posts were being scored as spam on the datacentre IP and silently dropped",
            "Made lead delivery fault-isolated across three independent channels (form filing, transactional email, Meta Conversions API) so one failure never costs the others",
            "Integrated Meta Pixel + server-side CAPI with a shared event_id for conversion deduplication across browser and worker",
            "Tuned scroll performance and delivered full responsiveness across breakpoints; collaborated in a 3-developer team over PR review on GitHub",
        ],
        tags: [
            "Next.js 15",
            "TypeScript",
            "React Three Fiber",
            "Framer Motion",
            "GSAP",
            "Tailwind CSS",
            "Cloudflare Workers",
            "Prisma",
            "Zod",
        ],
    },
    {
        title: "Quiz Management System",
        subtitle: "Full-Stack Web Application",
        category: "web",
        github: "https://github.com/indalbind/Quiz_master_Full-stack_app_V2",
        liveDemo: "",
        points: [
            "Designed and developed a role-based quiz platform with Admin and User dashboards",
            "Built secure backend services using Flask and Flask-RESTful APIs",
            "Implemented JWT authentication and authorization",
            "Managed quizzes, questions, user attempts, and score analytics",
            "Developed frontend using JavaScript with Vite for fast build performance",
            "Followed modular backend architecture and clean API design principles",
        ],
        tags: ["Flask", "REST APIs", "JWT", "JavaScript", "Vite"],
    },
    {
        title: "MERN Stack Mini Projects",
        subtitle: "Full-Stack Development",
        category: "web",
        github: "",
        points: [
            "Developed CRUD-based applications using React, Node.js, Express, and MongoDB",
            "Integrated frontend with RESTful backend APIs",
            "Applied best practices for component structure and API communication",
        ],
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs"],
    },
    {
        title: "Machine Learning Practice Projects",
        subtitle: "Applied ML & Data Science",
        category: "ml",
        github: "https://github.com/indalbind/ML_Algo",
        points: [
            "Built regression and classification models using real-world datasets",
            "Performed data cleaning, preprocessing, and feature engineering",
            "Implemented text classification using TF-IDF and CountVectorizer",
            "Evaluated models using accuracy and other performance metrics",
        ],
        tags: ["Python", "scikit-learn", "TF-IDF", "Data Preprocessing"],
    },
];

export const education = [
    {
        title: "BS Degree – Data Science & Applications",
        org: "IIT Madras",
        time: "2023 – Present",
        meta: "CGPA: 8.46",
    },
    {
        title: "Senior Secondary Education",
        org: "UP Board",
        time: "2021 – 2022",
        meta: "Score: 76%",
    },
    {
        title: "Secondary Education",
        org: "CBSE Board",
        time: "2019 – 2020",
        meta: "Score: 85%",
    },
];

// Experience entries. Newest first — the section renders them in array order.
// Every field except `role`, `org` and `points` is optional, so a new client,
// internship or job can be added by dropping in another object.
//   kind: "freelance" | "client" | "internship" | "fulltime" | "project"
//         (drives the badge colour + icon in the Experience section)
//   link: optional { label, href } shown as an external link on the card
export const experience = [
    {
        role: "Freelance Web Developer",
        org: "VYRL — Creative Studio",
        kind: "freelance",
        period: "2025",
        location: "New Zealand · Remote",
        summary:
            "Shipped a production Next.js + WebGL marketing platform for a real client.",
        stack: ["Next.js", "WebGL", "Cloudflare Workers", "Tailwind CSS"],
        link: { label: "vyrl.co.nz", href: "https://vyrl.co.nz" },
        points: [
            "Delivered an immersive, animation-heavy site to a live domain on Cloudflare Workers",
            "Owned the lead-intake pipeline end to end — form, validation, delivery and conversion tracking",
            "Debugged edge-runtime and deliverability failures that only surfaced in production",
            "Worked in a 3-developer team with feature branches and pull-request review",
        ],
    },
    {
        role: "Applied ML Engineering",
        org: "Self-directed & academic projects",
        kind: "project",
        period: "2024 — present",
        summary: "End-to-end ML systems from preprocessing to deployment.",
        stack: ["Python", "scikit-learn", "Pandas", "Streamlit"],
        points: [
            "ML pipelines & supervised learning architecture",
            "Model evaluation & hyperparameter optimization",
            "Web-based ML deployment using modern frameworks",
        ],
    },
    {
        role: "Full-Stack Development",
        org: "Personal & coursework projects",
        kind: "project",
        period: "2023 — present",
        summary: "Building scalable web applications.",
        stack: ["Node.js", "Express", "React", "MongoDB"],
        points: [
            "Developed REST APIs using Node.js and Express",
            "Optimized database query performance by 30%",
            "Collaborated with UI/UX teams for seamless frontend integration",
        ],
    },
];

export const focusAreas = [
    "Applied ML & AI Systems",
    "Full-Stack Web Development",
];

export const achievements = [
    "Shipped a client platform to production (vyrl.co.nz)",
    "Top grades in Web & ML projects",
    "Designed structured AI learning tracks",
    "Research paper accepted (future)",
];

export const certifications = [
    "Azure Fundamentals",
    "Data Science – AlmaBetter",
    "ML Regression Project",
    "International Yoga Day",
];

export const languages = [
    { name: "Hindi", level: "Native", percent: 100 },
    { name: "English", level: "Professional", percent: 90 },
    { name: "German", level: "Elementary", percent: 30 },
];

export const softSkills = [
    {
        title: "Analytical Thinking & Problem Solving",
        description:
            "I approach problems by breaking them into smaller, testable components and iterating toward efficient, maintainable solutions.",
        tags: ["Logical Reasoning", "System Thinking", "Debugging Mindset"],
    },
    {
        title: "Continuous Learning",
        description:
            "I actively adapt to new tools, concepts, and frameworks by learning through experimentation and real projects.",
        tags: ["Self-Driven", "Curiosity", "Skill Adaptability"],
    },
    {
        title: "Communication & Collaboration",
        description:
            "I focus on clear communication, structured thinking, and constructive feedback when working with teams or mentors.",
        tags: ["Clear Communication", "Team Collaboration", "Knowledge Sharing"],
    },
    {
        title: "Ownership & Discipline",
        description:
            "I take responsibility for outcomes, focus on consistency, and prioritize building things that work reliably in production settings.",
        tags: ["Accountability", "Consistency", "Execution Focus"],
    },
];

export const passions = [
    {
        title: "Building Through Code",
        description:
            "I enjoy translating ideas into working systems through hands-on coding. Experimenting, refactoring, and improving implementations helps me understand concepts deeply.",
        tags: ["Hands-on Learning", "System Building", "Iteration"],
    },
    {
        title: "Exploring New Technologies",
        description:
            "I actively explore emerging tools, frameworks, and ideas through documentation, experiments, and real-world use cases to stay aligned with industry evolution.",
        tags: ["Curiosity", "Tech Research", "Continuous Growth"],
    },
    {
        title: "Gameplay & Interactive Systems",
        description:
            "I enjoy gameplay experiences that involve strategy, mechanics, and decision-making. Games expose me to complex systems where logic, performance, and user experience intersect — concepts that strongly relate to software and AI system design.",
        tags: ["Strategic Thinking", "Decision Making", "Systems Perspective"],
    },
];

export const workspace = {
    title: "My Workspace & Setup",
    description:
        "I value a clean, focused workspace that supports deep thinking and long coding sessions. My setup is intentionally minimal, designed to reduce distractions while supporting productivity and creative flow.",
    tags: ["Focused Environment", "Deep Work", "Productivity"],
    caption:
        "A workspace I'm continuously refining to support focused work and learning.",
};
