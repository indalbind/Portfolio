/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                funnel: ["Funnel Display", "sans-serif"],
            },
        },
    },
    plugins: [],
};
