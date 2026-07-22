import { useEffect, useState } from "react";

// Types out each word, holds, deletes, moves to the next.
export default function Typewriter({ words, className = "" }) {
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState("");
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIndex % words.length];
        let timeout;

        if (!deleting && text === word) {
            timeout = setTimeout(() => setDeleting(true), 1800);
        } else if (deleting && text === "") {
            timeout = setTimeout(() => {
                setDeleting(false);
                setWordIndex((i) => (i + 1) % words.length);
            }, 120);
        } else {
            timeout = setTimeout(
                () =>
                    setText(
                        word.slice(0, text.length + (deleting ? -1 : 1)),
                    ),
                deleting ? 34 : 62,
            );
        }

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, words]);

    return (
        <span className={className}>
            {text}
            <span className="animate-blink text-sky-400">▍</span>
        </span>
    );
}
