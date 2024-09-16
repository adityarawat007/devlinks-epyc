/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#eeeeee",
        purple: "#633cff",
        "light-purple": "#efebff",
        "base-grey": "#737373",
        "base-dark-grey": "#333333",
        "light-grey": "#fafafa",
      },
      fontFamily: {
        'instrument-sans': ['var(--font-instrument-sans)', 'sans-serif'],
        'instrument-sans-bold': ['var(--font-instrument-sans-bold)', 'sans-serif'],
        'instrument-sans-semibold': ['var(--font-instrument-sans-semibold)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
