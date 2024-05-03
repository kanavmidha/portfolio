const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'jet': '#2A2A2A',
      'night': '#0F0F0F',
      'beige': '#F7EDD0',
      'off-white': '#D9D4AD',
      'white': '#ffffff'
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-archivo)'],
        serif: ['var(--font-clash)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-up": "1.5s slide-up 2s cubic-bezier(0.4, 0, 0.2, 1) forwards"
      },
      keyframes: {
        "slide-up": {
          '100%': { 
            transform: 'translateY(-100%)',
            borderRadius: '70%'
          }
        }
      }
    },
  },
  plugins: [],
};
