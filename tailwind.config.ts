import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: {
        300: "#E0CDE5",
        600: "#6A097D",
      },
      Neutral: {
        100: "#FFFFFF",
        400: "#F0F0F0",
        500: "#D9D9D9",
        900: "#434343",
        1100: "#1F1F1F",
      },
      Character: {
        title: "#000000",
      },
    },
    extend: {
      boxShadow: {
        pShaddow: "5px 5px 25px 0px  rgba(217, 217, 217, 0.4)",
        pShaddowHover: "0px 0px 10px 0px  rgba(106, 9, 125, 0.3)",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
