/** @type {import('tailwindcss').Config} */
module.exports = {
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
      backgroundColor: {
        green_primary: "#D7F5DC",
        green_secondary: "#FAFFFB",
      },
      fontSize: {
        4.5: "40px",
      },
      textColor: {
        primary: "#20B15A",
      },
      spacing: {
        128: "32rem",
        15.5: "3.88rem",
        18: "18rem",
      },
      padding: {
        105: "105px",
        50: "50px",
        30: "30px",
      },
    },
  },
  plugins: [],
};
