/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
            colors: {
                primary: '#1e293b', // slate-800
                secondary: '#475569', // slate-600
                accent: '#3b82f6', // blue-500
            }
        },
    },
    plugins: [],
}