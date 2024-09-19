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

