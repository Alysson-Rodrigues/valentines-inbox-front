/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Red color palette
  theme: {
    extend: {
      colors: {
        'primary': '#E90064',
        'secondary': '#691F3F',
        'light-pink' : '#EC478E',
      },
    },
  },
  plugins: [],
}