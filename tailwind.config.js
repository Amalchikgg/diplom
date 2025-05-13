/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      mainText: "#0C0C20",
      secondaryMain: "#FFA92C",
      white: "#fff",
      black: "#000",
      primaryMain: "#52B69A",
      gray10: "#F7FAFC",
      gray9: "#EDF2F7",
      gray1: "#171923",
      gray2: "#1A202C",
      gray5: "#718096",
      gray6: "#A0AEC0",
      gray4: "#4A5568",
      gray3: "#2D3748",
    },
    screens: {
      tablet: { max: "1434px" },
      mobile: { max: "1023px" },
      oddTablet: { max: "1440px" },
      oddMobile: { max: "768px" },
    },
  },
  plugins: [],
};
