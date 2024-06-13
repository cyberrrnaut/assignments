/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tahiti: '#f8fafc',
        customBlue: '#1e3a8a', 
        dark: '#0c0a09', 
      },
    },
  },
  plugins: [],
};
