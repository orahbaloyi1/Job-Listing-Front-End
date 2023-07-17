/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-sec": "url('/src/assets/bg-image-one.jpg')",
      },
      colors: {
        " background": "#32afa9", //sunlight green
        " background": "#381460", //dark purple
        "light-purple": "#ecebff", //light purple
        "m-purple": "#612c83", //purple
        "h-purple": "#ad56cd", //purple
      },
      icon: {
        starIcon: "url('index.html')",
      },
    },
  },
  plugins: [],
};
