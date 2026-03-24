import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#17322d",
          teal: "#0f8b6d",
          mint: "#dff5ea",
          coral: "#e76f51",
          gold: "#f4b05b",
          sand: "#f6f1e8",
          sky: "#d7edf2"
        }
      },
      boxShadow: {
        soft: "0 20px 45px rgba(16, 40, 33, 0.08)"
      },
      borderRadius: {
        "4xl": "2rem"
      }
    }
  },
  plugins: []
};

export default config;

