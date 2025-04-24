/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './App.tsx',             // ✅ top-level App file
    './src/**/**/*.{js,ts,jsx,tsx}' // ✅ any nested components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
