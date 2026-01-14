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
        primary: {
            DEFAULT: '#2563eb', // blue-600
            foreground: '#ffffff',
        },
        slate: {
            850: '#151e2e',
            900: '#0f172a',
            950: '#020617',
        }
      },
    },
  },
  plugins: [],
};
export default config;
