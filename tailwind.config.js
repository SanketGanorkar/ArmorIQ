/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'innovation': "url('/src/assets/Innovation.jpg')",
        'security' : "url('/src/assets/security.jpg')",
        'tech' : "url('/src/assets/tech.jpg')"
      }
    },
  },
  plugins: [],
};
