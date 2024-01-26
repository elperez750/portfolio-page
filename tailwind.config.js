/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ["Futura PT Book", "times new roman"],
        futura_bold: ["Futura PT Bold", "times new roman"],


      },
      colors: {
          black: '#1D1A1A',
          red: '#FF6B6B',
          gray: '#EAEAEA',
          dark_gray: '#A2A2A2',
          blue: "#003366",
          light_blue: "#144F8B",
          purple: "#6B46C1",
          peach: "#FEB2B2",
          soft_blue: "#63B3ED",
      },
    },
  },
  plugins: [],
}

