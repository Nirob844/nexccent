/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Configure your color palette here
      transparent: "transparent",
      current: "currentColor",
      primary: "#4CAF4F",
      secondary: "#4D4D4D",
      info: "#2194f3",
      white: "#FFFFFF",
      silver: "#F5F7FA",
    },
  },
  plugins: [],
};
