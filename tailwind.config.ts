import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mon: ['var(--font-mon)']
      },
      colors: {
        forange: 'rgba(var(--forange), <alpha-value>)',
        fdblue: 'rgba(var(--fdblue), <alpha-value>)',
        fgrey: 'rgba(var(--fgrey), <alpha-value>)',
        fwhite: 'rgba(var(--fwhite), <alpha-value>)',
      }
    },
  },
  plugins: [],
};
export default config;
