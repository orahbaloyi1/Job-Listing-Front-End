/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-sec": "url('/src/assets/bg-image-one.jpg')",
      },
      colors: {
        "girlcode-pink": "#e94154",
        " background": "#32afa9", //sunlight green
        " background": "#381460", //dark purple
        background: "#0c317a", //dark blue
        background: "#d5f7ff", //light blue
        "light-purple": "#ecebff", //light purple
        background: "#7bcecc", //light torqoise
        background: "#3090a1", //dark torqoise
        background: "#24babc", //medium torquise
        background: "#c2ff6b", //lime
        background: "#a7da46", //dark lime
        background: "#31aa75",
        background: "#e4f9ff", //very light blue
        background: "#ecf4f3", //light gray
        background: "#0f117a", // dark blue
        "m-purple": "#612c83", //purple
        "a-purple": "rgba(0, 0, 0, 0.9)#612c83",
        background: "#22213d", //dark dark purple
        background: "#eaef9b",
        "h-purple": "#ad56cd", //purple
        background: "#9e7eff", //purple
        background: "#9c4b9e",
        background: "#b643cd",
        background: "#6639a6",
      },
      icon: {
        starIcon: "url('index.html')",
      },
    },
  },
  plugins: [],
};
