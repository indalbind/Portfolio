
import { ExternalLink, Mail, Download } from "lucide-react";
import profileImg from "../../assets/Profile.jpeg";
import SectionDivider from "../ui/SectionDivider";

export default function About() {
    return (
        <div>
            <section id="about" className="relative w-full  py-20">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 items-start">
                        {/* LEFT CONTENT */}
                        <div className="md:pr-6">
                            <h2 className="font-funnel text-4xl font-extrabold leading-tight text-gray-900">
                                I'm{" "}
                                <span className="text-gray-700">
                                    Indal Bind
                                </span>
                                . I live in India,
                                <br className="hidden sm:block" />
                                where I build the future.
                            </h2>

                            <p className="font-funnel mt-6 text-gray-700 leading-relaxed">
                                I am a self-driven, career-oriented software
                                developer specializing in full-stack web
                                development and open-source. My expertise lies
                                in building interactive web applications on the
                                client side, primarily working with technologies
                                like JavaScript, React, TypeScript, and Python.
                            </p>

                            <p className="font-funnel mt-4 text-gray-700 leading-relaxed">
                                I strongly believe in continuous learning and
                                improving myself, so I try my best to learn in
                                any situation possible—favorable or not.
                            </p>

                            <p className=" font-funnel mt-4 text-gray-700 leading-relaxed">
                                Beyond learning, I enjoy writing technical
                                articles and building projects that inspire
                                fellow developers. You can find my work on{" "}
                                <a
                                    href="https://www.freecodecamp.org/"
                                    target="_blank"
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    freeCodeCamp
                                </a>{" "}
                                and on my personal blog.
                            </p>

                            {/* QUOTE CARD */}
                            <div className="font-iceland text-7xs relative mt-8 rounded-xl  p-6 shadow-sm">
                                <p className="text-gray-800 italic">
                                    “If you ever spot me in the wild, don’t
                                    hesitate to say hello. Let’s grab a drink
                                    and geek out over front-end tech.”
                                </p>
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex flex-col items-center md:items-end px-20">
                            <div className="overflow-hidden rounded-2xl shadow-md">
                                <img
                                    src={profileImg}
                                    alt="Profile"
                                    className="h-90 w-75 object-cover"
                                />
                            </div>

                            {/* Resume Button */}
                            <div className="mt-6 flex items-center gap-15">
                                <a
                                    href="https://drive.google.com/file/d/1OsHS3xazAZTEYo53J1fRwzd5S88sbYs6/view?usp=sharing"
                                    target="_blank"
                                    className="font-iceland flex items-center gap-2 font-medium text-gray-800 hover:text-black"
                                >
                                    View Resume <ExternalLink size={18} />
                                </a>

                                <a
                                    href="/Indal_Bind_cv.pdf"
                                    download
                                    className="font-funnel inline-flex items-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600 transition"
                                >
                                    <Download size={16} />
                                    Download
                                </a>
                            </div>

                            {/* Email */}
                            <div className="font-funnel mt-6 flex items-center gap-2 text-gray-700 px-18">
                                <Mail size={18} />
                                <span>indalbind4562@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider label="Usage"></SectionDivider>
        </div>
    );
}
