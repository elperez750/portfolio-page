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
        futura_light: ["Futura PT light", "times new roman"],
        futura_demi: ["Futura PT Demi", "times new roman"],
        futura_extra_bold: ["Futura PT Extra Bold", "times new roman"],
        futura_medium: ["Futura PT Medium", "times new roman"],


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
      screens: {
        'phone': '640px', 
        'tablet': '768px', 
        'laptop': '1024px', 
        'desktop': '1280px', 
      },
    },
  },
  plugins: [],
}

