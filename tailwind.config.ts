import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f9f4ec",
        coffee: "#3b2210",
        teal: "#0f8c9b",
        gold: "#d6a35c",
        mocha: "#6a3b1d",
        latte: "#d9c2a3",
        espresso: "#23120b",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        glow: "0 25px 45px -20px rgba(59, 34, 16, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
