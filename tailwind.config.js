/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      none: "0px ",
      small: "10px",
      small2: "14px",
    },
    borderWidth: {
      1: "1px",
    },
    extend: {
      boxShadow: {
        primary: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        green_primary: "#D7F5DC",
        green_secondary: "#FAFFFB",
        green_third: "#00CA72",
        bt_secondary: "#F55F1D",
      },
      fontSize: {
        4.5: "40px",
      },
      textColor: {
        primary: "#20B15A",
        secondary: "#8B8B8B",
      },
      spacing: {
        128: "32rem",
        15.5: "3.88rem",
        18: "4.5rem",
        533: "33rem",
        561: "35rem",
        563: "36rem",
        18: "4.5rem",
        470: "29rem",
        22: "88px",
      },
      padding: {
        105: "105px",
        50: "50px",
        30: "30px",
        35: "8.5rem",
      },
    },
  },
  plugins: [],
};
