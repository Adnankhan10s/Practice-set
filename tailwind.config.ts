import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        signature:[' "DM Serif Text", serif;'],
        para:['"Roboto", sans-serif;'],
        head:['font-family: "Poppins", sans-serif;'],
        cont:['font-family: "Oswald", sans-serif;'],
        
      }
    },
  },
  plugins: [],
};
export default config;
