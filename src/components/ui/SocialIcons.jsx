import {
    FaGithub,
    FaLinkedinIn,
    FaYoutube,
    FaGoogle,
    FaXTwitter,
    FaFacebookF,
    FaInstagram,
} from "react-icons/fa6";

const socials = [
    {
        icon: FaGithub,
        bg: "bg-black",
        href: "https://github.com/indalbind",
    },
    {
        icon: FaLinkedinIn,
        bg: "bg-[#0A66C2]",
        href: "https://www.linkedin.com/in/indaldatascientist",
    },
    // {
    //     icon: FaYoutube,
    //     bg: "bg-[#FF0000]",
    //     href: "https://youtube.com",
    // },
    // {
    //     icon: FaGoogle,
    //     bg: "bg-[#DB4437]",
    //     href: "https://google.com",
    // },
    // {
    //     icon: FaXTwitter,
    //     bg: "bg-black",
    //     href: "https://x.com",
    // },
    // {
    //     icon: FaFacebookF,
    //     bg: "bg-[#1877F2]",
    //     href: "https://facebook.com",
    // },
    // {
    //     icon: FaInstagram,
    //     bg: "bg-[#E4405F]",
    //     href: "https://instagram.com",
    // },
];

export default function SocialIcons() {
    return (
        <div className="flex gap-3">
            {socials.map(({ icon: Icon, bg, href }, i) => (
                <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${bg}
          transition-transform duration-200 hover:scale-110`}
                >
                    <Icon className="text-white text-[14px]" />
                </a>
            ))}
        </div>
    );
}

