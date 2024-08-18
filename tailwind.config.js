/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaledOut: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1.0)" },
        },
        visable: {
          "0%": { opacity: 0, visibality: "hidden" },
          "100%": { opacity: 1, visibality: "visible" },
        },
      },
      animation: {
        scaledOut: "scaledOut 0.3s ease-in-out",
        visable: "visable 1s forwards",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
