/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      "200": "200px",
      "400": '400px',
      "100vh": "100vh"
    }
  },
  plugins: [],
}

