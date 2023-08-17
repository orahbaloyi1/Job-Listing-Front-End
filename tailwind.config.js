/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-sec": "url('/src/assets/bg-image-three.jpg')",
      },
      colors: {
        " background": "#32afa9", //sunlight green
        " background": "#381460", //dark purple
        "light-purple": "#ecebff", //light purple
        "m-purple": "#612c83", //purple
        "h-purple": "#ad56cd", //purple
        "fav-purple": "#424874",
        "btn-colour": "#b4f1f1",
      },
      icon: {
        starIcon: "url('index.html')",
      },
    },
  },
  plugins: [],
};
