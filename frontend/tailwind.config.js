/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind css will work in index.html, and inside src it will work for js ts jsx and tsx type files.
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

