/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'innovation': "url('/src/assets/Innovation.jpg')",
        'security': "url('/src/assets/security.jpg')",
        'tech': "url('/src/assets/tech.jpg')"
      },
      animation: {
        bounce: 'bounce 7s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '25%': {
            transform: 'translateY(-8px)', // Small bounce up
          },
          '50%': {
            transform: 'translateY(0)', // Return to original position
          },
          '75%': {
            transform: 'translateY(-8px)', // Small bounce up again
          },
        },
      },
    },
  },
  plugins: [],
};
