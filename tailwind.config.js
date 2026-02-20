/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        "./config/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand tokens — mirror siteConfig.colors
                primary: "#1A2E4A",       // Deep Navy
                accent: "#C8971A",       // Gold / Amber
                "bg-light": "#F8F4EE",    // Warm White
                "primary-dark": "#0f1d2e",
                "accent-hover": "#b07f10",
            },
            fontFamily: {
                display: ["var(--font-playfair)", "Georgia", "serif"],
                body: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.375rem",
                lg: "0.5rem",
                xl: "0.75rem",
                "2xl": "1rem",
                full: "9999px",
            },
            boxShadow: {
                "accent-glow": "0 4px 24px rgba(200, 151, 26, 0.25)",
            },
        },
    },
    plugins: [],
};
