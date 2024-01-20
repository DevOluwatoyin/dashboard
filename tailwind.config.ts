import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(to bottom left, #BB65FF, #4C6FFF)",
      },
      colors: {
        primary: "#4C6FFF",
        "gray-dark": "#425466",
        "gray-light": "#7A828A",
        "gray-lighter": "#7A7A9D",
        "border-light": "#EDF2F7",
        "heading-dark": "#27272E",
      },
      boxShadow: {
        min: "0px 1px 3px 0px rgba(50, 50, 71, 0.10), 0px 0px 1px 0px rgba(12, 26, 75, 0.20)",
        "3xl":
          " 0px 0px 1px 0px rgba(50, 50, 71, 0.20), 0px 1px 2px 0px rgba(50, 50, 71, 0.08);",
      },
    },
  },
  plugins: [],
};
export default config;
