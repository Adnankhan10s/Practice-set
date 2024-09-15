import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      fontFamily:{
        signature:['"DM Serif Text", serif;'],
        para:['"Roboto", sans-serif;'],
        head:['"Poppins", sans-serif;'],
        cont:['"Oswald", sans-serif;'],
        
      },
    },
  },
  plugins: [],
};
export default config;
