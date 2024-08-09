/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '430px'
      },
      colors: {
        'jet': '#3D3D3D',
        'night': '#252525',
        'beige': '#CDC7B4',
        'off-white': '#D9D4AD',
        'white': '#BCBCBC',
      },
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
        "slide-up": "1.5s slide-up 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "slow-spin": "slow-spin linear",
        'slide-down': 'slide-down linear',
        'enter-zoom': 'enter-zoom linear forwards',
        'text-reveal': 'text-reveal cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'scroll-down': '2s scroll-down 1s cubic-bezier(0.4, 0, 0.2, 1) infinite '
      },
      keyframes: {
        "slide-up": {
          '100%': { 
            transform: 'translateY(-100%)',
            borderRadius: '70%'
          }
        },
        "slow-spin": {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(360deg)'
          }
        },
        'slide-down': {
          '25%': {
            transform: 'translateY(150px) scale(0.9)',
            opacity: '0.5'
          }
        },
        'enter-zoom': {
          '15%': {
            transform: 'scale(1)'
          },
          "100%": {
            transform: 'scale(1)'
          }
        },
        'text-reveal': {
          '100%': {
            transform: 'translateY(0)'
          }
        },
        'scroll-down': {
          '0%': {
            width: '0'
          },
          '100%': {
            width: '3.5rem'
          }
        }
      }
    },
  },
  plugins: [],
};
